# -*- coding:utf-8 -*- 
'''
驱动，进行扫描，请求和数据存储
'''
import time
import signal
import sys
import datetime
import pymongo

import NetEasySpider
import Dealdata
import pymysql
import json
import pprint
import traceback
#默认开始id
START_INDEX = 59875
#默认重试次数
RETRYTIME = 5
#默认等待时间
WAITTIME = 1
mysqlAPI = None
sqliteAPI = None
def CtrlCHandler(signum, frame):
    #更新配置表
    print("\nsafety exit！！！")
    global mysqlAPI
    global sqliteAPI
    global id
    if mysqlAPI:
        mysqlAPI.updateVersion(id)

    if sqliteAPI:
        sqliteAPI.updateVersion(id)
    sys.exit(0)

def timeTostr(IntTime):
    timeStamp = IntTime 
    timeStamp /= 1000.0   
    timearr = time.localtime(timeStamp)  
    data_head = time.strftime("%Y-%m-%d %H:%M:%S", timearr) 
    data_secs = (timeStamp - int(timeStamp)) * 1000
    time_stamp = "%s.%03d"%(data_head, data_secs)
    return time_stamp
if __name__ == "__main__":
    i=0
    times = 0
    #初始化退出信号
    signal.signal(signal.SIGINT, CtrlCHandler)    
    #初始化数据库
    while(1):
        #mysqlPassword = input('please input passwd for mysql:\n')
        mysqlPassword="Yang3923086"
        try:
            #初始化，连接本地mysql数据库
            mysqlAPI=Dealdata.mysqlSQL(passwd=mysqlPassword,songId=START_INDEX)
            START_INDEX = mysqlAPI.Get_version()
            print("start at :",START_INDEX)
            break
        except pymysql.err.OperationalError as e:
            #捕获密码错误情况
            retry = input("error passwd for mysql,try again?(Y/N)")
            if retry != 'Y' and retry != 'y':
                break
    sqliteAPI = Dealdata.sqliteSQL(songId=START_INDEX)
    #初始化id，继续捕捉
    while(1):
        id = START_INDEX+i
        Api = NetEasySpider.EasyNetAPI(id)
        print("i: ",i," id:",id)
        try:
            #产生获取歌曲信息，，如果没有返回结果，那么重试，否则如果没有获取到，就跳过
            jsongContent=Api.getSongInfo()
            #print(jsongContent)
            if not jsongContent :
                print("Get song info failed") 
                times+=1
            else:
                times=0#归零
                jsong = json.loads(jsongContent)
          
                if jsong["songs"]:
                    #获取成功，写数据库
                    song=jsong["songs"][0]
                    #print(type(song))
                    artists=song["artists"][0]
                    #print(type(artists))
                    album=song["album"]
                    #print(type(album))

                    time_stamp = timeTostr(album["publishTime"])
                    
                    # 获取当前时间,记录当前时间
                    timeNow = datetime.datetime.now()
                    # 将字符串转化为时间类型           
                    timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f')

                    #获取评论信息
                    jcommentStr=Api.getComment()
                    if jcommentStr:
                        jcomment = json.loads(jcommentStr)
                        #print(jcomment)

                        
                        param={
                            "songId":song["id"],
                            "songName":song["name"],
                            "brief":song["alias"],
                            "authorName":artists["name"],
                            "authorId":artists["id"],
                            "bkPicture":album["blurPicUrl"],
                            "publicTime":time_stamp,
                            "albumsID":album["id"],
                            "albumsName":album["name"],
                            "albumsType":album["type"],
                            "Company":album["company"],
                            "Time":timeNowStr,
                            "CommentNum":(jcomment['total'] if jcomment['total'] else 0)
                        }
                        TOTAL=jcomment['total']
                        #写歌曲数据库
                        mysqlAPI.insert("Song",param)
                        #sqliteAPI.insert("Song",param)
                        #一页20条数据
                        if not jcomment:
                            times+=1
                        else:
                            total = 20#初始获取20条
                            page = 0
                            for hotComment in jcomment["hotComments"]: 
                                user=hotComment["user"]
                                if hotComment["beReplied"]:
                                    referComment=hotComment["beReplied"][0]
                                    referuser=referComment["user"]
                                else:
                                    referuser={
                                            "userId":0,
                                            "nickname":"None"
                                        }
                                    referComment={
                                            "content":"None"
                                        }
                                param.clear()
                                param={
                                    "commentID":hotComment["commentId"],
                                    "creattime":timeTostr(hotComment["time"]),
                                    "username":user["nickname"],
                                    "userid":user["userId"],
                                    "prise":hotComment["likedCount"],
                                    "Content":hotComment["content"],
                                    "songId":song["id"],
                                    "SongName":song["name"],
                                    "referID":referuser["userId"],
                                    "referName":referuser["nickname"],
                                    "referComment":referComment["content"]
                                }
                                #写热评
                                try:
                                    mysqlAPI.insert("hotcomment",param)
                                except Exception as err:
                                    print("[{0}]insert hotcomment to mysql failed".format(jcomment["hotComments"].index(hotComment)))
                                    print(hotComment["content"])
                                    t,v,tb = sys.exc_info()
                                    pprint.pprint(t)
                                    pprint.pprint(v)
                                    #traceback.print_tb(tb)

                                try:
                                    #sqliteAPI.insert("hotcomment",param)
                                    pass
                                except Exception as err:
                                    print("[{0}]insert hotcomment to sqlite failed".format(jcomment["hotComments"].index(hotComment)))
                                    t,v,tb = sys.exc_info()
                                    pprint.pprint(t)
                                    pprint.pprint(v)
                                    #traceback.print_tb(tb)
                            while(1):
                                for Comment in jcomment["comments"]:
                                    user=Comment["user"]

                                    if Comment["beReplied"]:
                                        referComment=Comment["beReplied"][0]
                                        referuser=referComment["user"]
                                    else:
                                        referuser={
                                            "userId":0,
                                            "nickname":"None"
                                        }
                                        referComment={
                                            "content":"None"
                                        }
                                    param.clear()
                                    param={
                                        "commentID":Comment["commentId"],
                                        "creattime":timeTostr(Comment["time"]),
                                        "username":user["nickname"],
                                        "userid":user["userId"],
                                        "prise":Comment["likedCount"],
                                        "Content":Comment["content"],
                                        "songId":song["id"],
                                        "SongName":song["name"],
                                        "referID":referuser["userId"],
                                        "referName":referuser["nickname"],
                                        "referComment":referComment["content"]
                                    }
                                    #写普通评论
                                    try:
                                        mysqlAPI.insert("comment",param)
                                    except Exception as err:
                                        print("[{0}]insert comment to mysql failed".format(jcomment["comments"].index(Comment)))
                                        print(Comment["content"])
                                        t,v,tb = sys.exc_info()
                                        pprint.pprint(t)
                                        pprint.pprint(v)
                                        #traceback.print_tb(tb)
                                    try:
                                        #sqliteAPI.insert("comment",param)
                                        pass
                                    except Exception as err:
                                        print("[{0}]insert comment to sqlite failed".format(jcomment["comments"].index(Comment)))
                                        t,v,tb = sys.exc_info()
                                        pprint.pprint(t)
                                        pprint.pprint(v)
                                        #traceback.print_tb(tb)
                                #下一页
                                total+=20
                                page+=1
                                if(total<(TOTAL+20)):
                                    time.sleep(0.4)#等待400ms
                                    try:
                                        jcommentStr=Api.getComment(page)
                                        if jcommentStr:
                                            jcomment = json.loads(jcommentStr)
                                        print("page",page)
                                        print("current:",total,"Total:",TOTAL)
                                    except Exception as err:
                                        print("current:",total,"Total:",TOTAL)
                                        print("Page [{0}] get failed".format(page))
                                        t,v,tb = sys.exc_info()
                                        pprint.pprint(t)
                                        pprint.pprint(v)
                                        traceback.print_tb(tb)
                                else:
                                    break
                    else:
                        #无评论歌曲
                        param={
                            "songId":song["id"],
                            "songName":song["name"],
                            "brief":song["alias"],
                            "authorName":artists["name"],
                            "authorId":artists["id"],
                            "bkPicture":album["blurPicUrl"],
                            "publicTime":time_stamp,
                            "albumsID":album["id"],
                            "albumsName":album["name"],
                            "albumsType":album["type"],
                            "Company":album["company"],
                            "Time":timeNowStr,
                            "CommentNum":0
                        }
                        #写歌曲数据库
                        mysqlAPI.insert("Song",param)
                        #sqliteAPI.insert("Song",param)
        except TypeError as err:
            with open(r"../3.result/TypeError.json","wb") as f:
                f.write(json.dumps(json_dict,ensure_ascii=False,indent=4).encode("utf-8"))  
    
        except Exception as err:
            #出现异常情况，增加重试次数
            t,v,tb = sys.exc_info()
            print("load failed times:"+str(times))
            pprint.pprint(t)
            pprint.pprint(v)
            traceback.print_tb(tb)
            times+=1
            if mysqlAPI:
                mysqlAPI.updateVersion(id)

            if sqliteAPI:
                sqliteAPI.updateVersion(id)
            pass
        
        #25次等2秒
        
        time.sleep(1)
        #if RETRYTIME>times>0:
        if 0:
            print("times:",times," retry :",id)
            WAITTIME+=1
            time.sleep(WAITTIME)#等待一次重试
        else:
            i+=1
            if times==0:
                #成功一次后才清零
                WAITTIME=1

        #break
        

