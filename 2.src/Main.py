# -*- coding:utf-8 -*- 
'''
驱动，进行扫描，请求和数据存储
'''
import time
import signal
import sys
import datetime

import NetEasySpider
import Dealdata
import pymysql
import json
import pprint
import traceback
#默认开始id
START_INDEX = 59875
#默认开始page
page=0
#默认重试次数
RETRYTIME = 5
#默认重试时间2秒起跳
retryTime = 2
mysqlAPI = None
sqliteAPI = None
def CtrlCHandler(signum, frame):
    #更新配置表
    print("\nsafety exit！！！")
    global mysqlAPI
    global sqliteAPI
    global id
    global page
    if mysqlAPI:
        mysqlAPI.updateVersion(id,page)

    if sqliteAPI:
        sqliteAPI.updateVersion(id,page)
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
        mysqlPassword = input('please input passwd for mysql:\n')
        try:
            #初始化，连接本地mysql数据库
            mysqlAPI=Dealdata.mysqlSQL(passwd=mysqlPassword,songId=START_INDEX)
            #初始化上次捕捉位置
            START_INDEX,page = mysqlAPI.Get_versionPage()
            total = 20*(page+1)
            print("start at :",START_INDEX,"page:",str(page))
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
            if jsongContent :
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
                    #print(jcommentStr)
                    if jcommentStr:
                        jcomment = json.loads(jcommentStr)
                        #print(jcomment)
                        param={
                            "songId":song["id"],
                            "songName":song["name"],
                            "brief":(" " if not song["alias"] else str(song["alias"][0])),
                            "authorName":artists["name"],
                            "authorId":artists["id"],
                            "bkPicture":album["blurPicUrl"],
                            "publicTime":time_stamp,
                            "albumsID":album["id"],
                            "albumsName":album["name"],
                            "albumsType":album["type"],
                            "Company":album["company"],
                            "Time":timeNowStr,
                            "CommentNum":(0 if not jcomment['total'] else jcomment['total'])
                        }
                        TOTAL=param['CommentNum']
                        #写歌曲数据库
                        mysqlAPI.insert("Song",param)
                        sqliteAPI.insert("Song",param)
                        #一页20条数据
                        if TOTAL>0:
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
                                    sqliteAPI.insert("hotcomment",param)
                                except Exception as err:
                                    print("[{0}]insert hotcomment to sqlite failed".format(jcomment["hotComments"].index(hotComment)))
                                    t,v,tb = sys.exc_info()
                                    pprint.pprint(t)
                                    pprint.pprint(v)
                                    traceback.print_tb(tb)
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
                                        sqliteAPI.insert("comment",param)
                                        pass
                                    except Exception as err:
                                        print("[{0}]insert comment to sqlite failed".format(jcomment["comments"].index(Comment)))
                                        t,v,tb = sys.exc_info()
                                        pprint.pprint(t)
                                        pprint.pprint(v)
                                        #traceback.print_tb(tb)
                                #下一页
                                page+=1
                                total=20*(page+1)
                                
                                if(total<(TOTAL+20)):
                                    #time.sleep(0.4)#等待400ms
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
                            #无评论
                            print("no comment,next")
        except TypeError as err:
            with open(r"../3.result/TypeError.json","wb") as f:
                f.write(json.dumps(json_dict,ensure_ascii=False,indent=4).encode("utf-8"))  
    
        except (json.decoder.JSONDecodeError,KeyError) as err:
            '''
            503服务不可用的时候或者-460反爬，暂时指数级时间延迟递增重试，后面可换多ip代理
            '''
            times+=1
            retryTime = retryTime*retryTime
            print("load failed times:"+str(times)+" Next Wait Time:"+str(retryTime))

        except Exception as err:
            #出现异常情况，增加重试次数
            t,v,tb = sys.exc_info()
            
            pprint.pprint(t)
            pprint.pprint(v)
            traceback.print_tb(tb)
            
            if mysqlAPI:
                mysqlAPI.updateVersion(id,page)

            if sqliteAPI:
                sqliteAPI.updateVersion(id,page)
        
        #每次间隔1秒大约2小时达到上限 limit 7200/2h
        time.sleep(3)
        if times>0:
            time.sleep(retryTime)
        else:
            print("unkown error， jump :",id)
            #next
            i+=1
            times=0
            total = 20#初始获取20条
            page = 0
        #break
        

