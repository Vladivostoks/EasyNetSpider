# -*- coding:utf-8 -*- 
'''
处理接收到到数据，如保存json并且存储到数据库中，mysql和sqlite同时存一份
'''
import pymysql
import sqlite3
import datetime
import pprint

DBG=0
def transferContent(content):
        if content is None:
            return None
        else:
            string = ""
            for c in content:
                if c == '"':
                    string += '\\\"'
                elif c == "'":
                    string += "\\\'"
                elif c == "\\":
                    string += "\\\\"
                else:
                    string += c
            return string
class Check:
    '''
    查找类SQL语句封装合成
    '''
    pass
class SQL_Opration:
    '''
    数据库抽象
    '''
    #版本号 #创建时间 #终止时间 #最后检索歌曲id
    _CREAT_VERSIONTABLE="""\
        CREATE TABLE IF NOT EXISTS Version(
                    Version INT AUTO_INCREMENT PRIMARY KEY, 
                    creartTime DATETIME NOT NULL,               
                    endTime DATETIME ,                          
                    lastestID INT                           
        )"""
    #歌曲ID #歌曲名称 #歌手名称 #歌手ID #简介 #封面图片URL #发行时间 #专辑ID #专辑名称 #专辑类型
    _CREAT_SONGTABLE="""\
        CREATE TABLE IF NOT EXISTS SongInfoTable(
                    SongID INT PRIMARY KEY,
                    Time DATETIME,
                    SongName VARCHAR(255),
                    AuthorID INT,
                    AuthorName VARCHAR(255),
                    Brief VARCHAR(255),
                    PublicTime DATETIME,
                    AlbumsID INT,
                    AlbumsName VARCHAR(255),
                    AlbumsType VARCHAR(16),
                    Company VARCHAR(255),
                    CommentNum INT,
                    Bkpicture VARCHAR(511),
                    INDEX(AuthorName),
                    INDEX(SongName)
        )"""
    
    #评论ID #创建时间 #评论用户名 #评论用户ID #回复评论内容 #点赞数 #评论内容 #评论歌曲ID
    _CREAT_COMMENTABLE="""\
        CREATE TABLE IF NOT EXISTS CommentInfoTable(
                    CommentId INT PRIMARY KEY,              
                    creartTime DATETIME,              
                    username VARCHAR(255),            
                    userid INT,                       
                    SongID INT,
                    SongName VARCHAR(255) ,                
                    Prise INT,                        
                    Content VARCHAR(512),
                    ReferID INT,
                    ReferName VARCHAR(255), 
                    ReferComment VARCHAR(512), 
                    INDEX(creartTime),
                    INDEX(username),
                    INDEX(userid),
                    INDEX(ReferComment),
                    INDEX(Prise)                   
        )"""
    #热评ID #热评创建时间 #热评用户名 #热评用户ID #回复评论内容 #点赞数 #评论内容 #评论歌曲ID
    _CREAT_HOTCOMMENTABLE="""\
        CREATE TABLE IF NOT EXISTS HOTCommentInfoTable(
                    CommentId INT PRIMARY KEY,              
                    creartTime DATETIME,              
                    username VARCHAR(255),            
                    userid INT,                       
                    SongID INT,
                    SongName VARCHAR(255) ,                
                    Prise INT,                        
                    Content VARCHAR(512),
                    ReferID INT,
                    ReferName VARCHAR(255), 
                    ReferComment VARCHAR(512), 
                    INDEX(creartTime),
                    INDEX(username),
                    INDEX(userid),
                    INDEX(ReferComment),
                    INDEX(Prise)                         
        )"""    
    _INSERT_VERSION="""\
        REPLACE INTO Version(Version,creartTime,endTime,lastestID)
                    VALUES('{version}','{creattime}','{endtime}','{lastestId}')
        """
    _INSERT_SONGINFO="""\
        REPLACE INTO SongInfoTable(SongID,SongName,AuthorName,AuthorID,Brief,Bkpicture,PublicTime,AlbumsID,AlbumsName,AlbumsType,CommentNum,Company,Time)
                    VALUES('{songId}','{songName}','{authorName}','{authorId}','{brief}','{bkPicture}','{publicTime}','{albumsID}','{albumsName}','{albumsType}','{CommentNum}','{Company}','{Time}')
        """
    _INSERT_COMMENTINFO="""\
        REPLACE INTO CommentInfoTable(CommentId,creartTime,username,userid,ReferComment,Prise,Content,SongID,ReferID,ReferName,SongName)
                    VALUES('{commentID}','{creattime}','{username}','{userid}','{referComment}','{prise}','{Content}','{songId}','{referID}','{referName}','{SongName}')
        """
    _INSERT_HOTCOMMENTINFO="""\
        REPLACE INTO HOTCommentInfoTable(CommentId,creartTime,username,userid,ReferComment,Prise,Content,SongID,ReferID,ReferName,SongName)
                    VALUES('{commentID}','{creattime}','{username}','{userid}','{referComment}','{prise}','{Content}','{songId}','{referID}','{referName}','{SongName}')
        """
    Operation={
        "Version":_INSERT_VERSION,
        "Song":_INSERT_SONGINFO,
        "comment":_INSERT_COMMENTINFO,
        "hotcomment":_INSERT_HOTCOMMENTINFO
    }
    def __init__(self):
        '''
        初始化链接数据库，打开数据库句柄，如果需要新建库，说明表不存在，进行建表操作
        ''' 
        self.DBfd = None  
    def __del__(self):
        '''
        安全关闭
        '''
        pass
    def insert(self,tableName,**karg):
        pass
    def search(self):
        pass


class mysqlSQL(SQL_Opration):
    '''
    数据库操作集抽象
    '''
    def __init__(self,host='127.0.0.1',username='root',passwd='123456',dbname='EasyNetMusic',songId=0):
        '''
        初始化链接数据库，打开数据库句柄，并且check表单是否存在，不存在需要创建
        '''
        super().__init__()
        self.DBfd = pymysql.connect(host=host,
                             user=username,
                             password=passwd,
                             charset='utf8mb4',
                             db=dbname)
        with self.DBfd.cursor() as cursor:
            print('--------------初始化mysql--------------')
            cursor.execute(self._CREAT_VERSIONTABLE)
            cursor.execute(self._CREAT_SONGTABLE)
            cursor.execute(self._CREAT_VERSIONTABLE)
            cursor.execute(self._CREAT_COMMENTABLE)
            cursor.execute(self._CREAT_HOTCOMMENTABLE)
            self.DBfd.commit()
            sql='SELECT * FROM Version WHERE version=0x0000001'
            cursor.execute(sql)
            result = cursor.fetchone()
        self.DBfd.commit()  
        # 获取当前时间
        timeNow = datetime.datetime.now()
        # 将字符串转化为时间类型           
        timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f') 
        param={}
        if result:
            param["version"] = result[0]
            param["creattime"]=timeNowStr
            param["endtime"]=result[2]
            param["lastestId"]=result[3]

        else:
            #创建一套初始参数
            param["version"] = 0x000001
            param["creattime"]=timeNowStr
            param["endtime"]=timeNowStr
            param["lastestId"]=songId
        self.insert("Version",param)

    def __del__(self):
        '''
        安全关闭
        '''
        if self.DBfd != None:
            self.DBfd.close()
        super().__del__()

    def insert(self,tableName,karg):
        '''
        插入一条数据
        '''
        if DBG:
            pprint.pprint("--------------INSERT MYSQL--------------")
            pprint.pprint(tableName)
            pprint.pprint(karg)
            pprint.pprint("----------------------------------------")
        with self.DBfd.cursor() as cursor:
            if tableName=="Version":
                cursor.execute(self.Operation[tableName].format(
                    version=karg["version"],
                    creattime=karg["creattime"],
                    endtime=karg["endtime"],
                    lastestId=karg["lastestId"]
                    ))
            elif (tableName == "Song"):
                try:
                    cursor.execute(self.Operation[tableName].format(
                        songId=karg["songId"],
                        songName=transferContent(karg["songName"]),
                        authorName=karg["authorName"],
                        authorId=karg["authorId"],
                        brief=karg["brief"],
                        bkPicture=karg["bkPicture"],
                        publicTime=karg["publicTime"],
                        albumsID=karg["albumsID"],
                        albumsName=karg["albumsName"],
                        albumsType=karg["albumsType"],
                        CommentNum=karg["CommentNum"],
                        Company=karg["Company"],
                        Time=karg["Time"]
                        ))
                        
                except Exception as err:
                    print(self.Operation[tableName].format(
                        songId=karg["songId"],
                        songName=transferContent(karg["songName"]),
                        authorName=karg["authorName"],
                        authorId=karg["authorId"],
                        brief=karg["brief"],
                        bkPicture=karg["bkPicture"],
                        publicTime=karg["publicTime"],
                        albumsID=karg["albumsID"],
                        albumsName=karg["albumsName"],
                        albumsType=karg["albumsType"],
                        CommentNum=karg["CommentNum"],
                        Company=karg["Company"],
                        Time=karg["Time"]))

            elif tableName == "comment":
                cursor.execute(self.Operation[tableName].format(
                    commentID=karg["commentID"],
                    creattime=karg["creattime"],
                    username=karg["username"],
                    userid=karg["userid"],
                    referComment=transferContent(karg["referComment"]),
                    prise=karg["prise"],
                    Content=transferContent(karg["Content"]),
                    songId=karg["songId"],
                    referID=karg["referID"],
                    referName=karg["referName"],
                    SongName=transferContent(karg["SongName"])
                    ))
            elif tableName == "hotcomment":                
                cursor.execute(self.Operation[tableName].format(
                    commentID=karg["commentID"],
                    creattime=karg["creattime"],
                    username=karg["username"],
                    userid=karg["userid"],
                    referComment=transferContent(karg["referComment"]),
                    prise=karg["prise"],
                    Content=transferContent(karg["Content"]),
                    songId=karg["songId"],
                    referID=karg["referID"],
                    referName=karg["referName"],
                    SongName=transferContent(karg["SongName"])
                    ))
               
            else:
                print("insert table not exist!!!")    
            self.DBfd.commit()
    def search(self):
        pass
    def updateVersion(self,lastid):
        sql='SELECT * FROM Version WHERE version=0x0000001'
        with self.DBfd.cursor() as cursor:
            cursor.execute(sql)
            result = cursor.fetchone()
        self.DBfd.commit()  
        #更新endtime和lastestId
        # 获取当前时间
        timeNow = datetime.datetime.now()
        # 将字符串转化为时间类型           
        timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f')
        param={}
        param["version"]=result[0]
        param["creattime"]=result[1]
        param["endtime"]=timeNowStr
        param["lastestId"]=lastid
        self.insert("Version",param)

    def Get_version(self):
        '''
        获取当前起始索引位置
        '''
        if self.DBfd.cursor():
            with self.DBfd.cursor() as cursor:
                sql='SELECT * FROM Version WHERE version=0x0000001'
                cursor.execute(sql)
                result = cursor.fetchone()
            self.DBfd.commit()  
            # 获取当前时间
            timeNow = datetime.datetime.now()
            # 将字符串转化为时间类型           
            timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f') 
            param={}
            if result:
                param["version"] = result[0]
                param["creattime"]=timeNowStr
                param["endtime"]=result[2]
                param["lastestId"]=result[3]
                songId = result[3]
            return songId
        else:
            return None

class sqliteSQL(SQL_Opration):
    '''
    数据库操作集抽象
    '''
    #版本号 #创建时间 #终止时间 #最后检索歌曲id
    _CREAT_VERSIONTABLE="""\
        CREATE TABLE IF NOT EXISTS Version(
                    Version INT AUTO_INCREMENT PRIMARY KEY, 
                    creartTime DATETIME NOT NULL,               
                    endTime DATETIME ,                          
                    lastestID INT                           
        )"""
    #歌曲ID #歌曲名称 #歌手名称 #歌手ID #简介 #封面图片URL #发行时间 #专辑ID #专辑名称 #专辑类型 #评论数
    _CREAT_SONGTABLE="""\
        CREATE TABLE IF NOT EXISTS SongInfoTable(
                    SongID INT PRIMARY KEY,
                    Time DATETIME,
                    SongName VARCHAR(255),
                    AuthorID INT,
                    AuthorName VARCHAR(255),
                    Brief VARCHAR(255),
                    PublicTime DATETIME,
                    AlbumsID INT,
                    AlbumsName VARCHAR(255),
                    AlbumsType VARCHAR(16),
                    Company VARCHAR(255),
                    CommentNum INT,
                    Bkpicture VARCHAR(511)
        )"""
    _CREAT_SONGTABLE_INDEX=("""\
        CREATE INDEX IF NOT EXISTS IDXAuthorName on SongInfoTable(AuthorName)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXSongName on SongInfoTable(SongName)
        """)
    #评论ID #创建时间 #评论用户名 #评论用户ID #回复评论内容 #点赞数 #评论内容 #评论歌曲ID
    _CREAT_COMMENTABLE="""\
        CREATE TABLE IF NOT EXISTS CommentInfoTable(
                    CommentId INT PRIMARY KEY,              
                    creartTime DATETIME,              
                    username VARCHAR(255),            
                    userid INT,                       
                    SongID INT,
                    SongName VARCHAR(255) ,                
                    Prise INT,                        
                    Content VARCHAR(1023),
                    ReferID INT,
                    ReferName VARCHAR(255), 
                    ReferComment VARCHAR(1023)                
        )"""
    _CREAT_COMMENTABLE_INDEX=("""\
        CREATE INDEX IF NOT EXISTS IDXcreartTime on CommentInfoTable(creartTime)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXusername on CommentInfoTable(username)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXuserid on CommentInfoTable(userid)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXReferComment on CommentInfoTable(ReferComment)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXPrise on CommentInfoTable(Prise)
        """)
    #热评ID #热评创建时间 #热评用户名 #热评用户ID #回复评论内容 #点赞数 #评论内容 #评论歌曲ID
    _CREAT_HOTCOMMENTABLE="""\
        CREATE TABLE IF NOT EXISTS HOTCommentInfoTable(
                    CommentId INT PRIMARY KEY,              
                    creartTime DATETIME,              
                    username VARCHAR(255),            
                    userid INT,                       
                    SongID INT,
                    SongName VARCHAR(255) ,                
                    Prise INT,                        
                    Content VARCHAR(1023),
                    ReferID INT,
                    ReferName VARCHAR(255), 
                    ReferComment VARCHAR(1023)                       
        )"""
    _CREAT_HOTCOMMENTABLE_INDEX=("""\
        CREATE INDEX IF NOT EXISTS IDXcreartTime on HOTCommentInfoTable(creartTime)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXusername on HOTCommentInfoTable(username)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXuserid on HOTCommentInfoTable(userid)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXReferComment on HOTCommentInfoTable(ReferComment)
        """,
        """\
        CREATE INDEX IF NOT EXISTS IDXPrise on HOTCommentInfoTable(Prise)
        """)
    
    _INSERT_VERSION="""\
        REPLACE INTO Version(Version,creartTime,endTime,lastestID)
                    VALUES('{version}','{creattime}','{endtime}','{lastestId}')
        """
    _INSERT_SONGINFO="""\
        REPLACE INTO SongInfoTable(SongID,SongName,AuthorName,AuthorID,Brief,Bkpicture,PublicTime,AlbumsID,AlbumsName,AlbumsType,CommentNum,Company,Time) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)
        """
    _INSERT_COMMENTINFO="""\
        REPLACE INTO CommentInfoTable(CommentId,creartTime,username,userid,ReferComment,Prise,Content,SongID,ReferID,ReferName,SongName) VALUES(?,?,?,?,?,?,?,?,?,?,?)
        """
    _INSERT_HOTCOMMENTINFO="""\
        REPLACE INTO HOTCommentInfoTable(CommentId,creartTime,username,userid,ReferComment,Prise,Content,SongID,ReferID,ReferName,SongName) VALUES(?,?,?,?,?,?,?,?,?,?,?)
        """
    Operation={
        "Version":_INSERT_VERSION,
        "Song":_INSERT_SONGINFO,
        "comment":_INSERT_COMMENTINFO,
        "hotcomment":_INSERT_HOTCOMMENTINFO
    }
    def __init__(self,songId=0):
        '''
        初始化链接数据库，打开数据库句柄，并且check表单是否存在，不存在需要创建
        '''
        super().__init__()
        self.DBfd = sqlite3.connect("../3.result/EasyNetMusic.db")
        cursor = self.DBfd.cursor()
        print('--------------初始化sqlite--------------')
        cursor.execute(self._CREAT_VERSIONTABLE)
        cursor.execute(self._CREAT_SONGTABLE)
        for index in self._CREAT_SONGTABLE_INDEX:
            cursor.execute(index)
        cursor.execute(sqliteSQL._CREAT_COMMENTABLE)
        for index in self._CREAT_COMMENTABLE_INDEX:
            cursor.execute(index)
        cursor.execute(sqliteSQL._CREAT_HOTCOMMENTABLE)
        for index in self._CREAT_HOTCOMMENTABLE_INDEX:
            cursor.execute(index)
        
        self.DBfd.commit()
        sql='SELECT * FROM Version WHERE version=0x0000001'
        cursor.execute(sql)
        result = cursor.fetchone()
        self.DBfd.commit()  
        # 获取当前时间
        timeNow = datetime.datetime.now()
        # 将字符串转化为时间类型           
        timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f')
        param={}
        if result:
            param["version"] = result[0]
            param["creattime"]=timeNowStr
            param["endtime"]=result[2]
            param["lastestId"]=result[3]
            songId = result[3]
        else:
            #创建一套初始参数
            param["version"] = 0x000001
            param["creattime"]=timeNowStr
            param["endtime"]=timeNowStr
            param["lastestId"]=songId
        self.insert("Version",param)

    def __del__(self):
        '''
        安全关闭
        '''
        if self.DBfd != None:
            self.DBfd.close()
        super().__del__()
        
    def insert(self,tableName,karg):
        '''
        插入一条动作
        '''
        if DBG:
            pprint.pprint("--------------INSERT sqlite--------------")
            pprint.pprint(tableName)
            pprint.pprint(karg)
            pprint.pprint("-----------------------------------------")
        cursor = self.DBfd.cursor()
        if tableName=="Version":
            cursor.execute(SQL_Opration.Operation[tableName].format(
                version=karg["version"],
                creattime=karg["creattime"],
                endtime=karg["endtime"],
                lastestId=karg["lastestId"]
                ))
        elif (tableName == "Song"):
            
            cursor.execute(self.Operation[tableName],
                (karg["songId"],
                karg["songName"],
                str(karg["authorName"]),
                karg["authorId"],
                karg["brief"],
                karg["bkPicture"],
                karg["publicTime"],
                karg["albumsID"],
                karg["albumsName"],
                karg["albumsType"],
                karg["CommentNum"],
                karg["Company"],
                karg["Time"]
                ))

        elif tableName == "comment":
            cursor.execute(SQL_Opration.Operation[tableName],(
                karg["commentID"],
                karg["creattime"],
                karg["username"],
                karg["userid"],
                karg["referComment"],
                karg["prise"],
                karg["Content"],
                karg["songId"],
                karg["referID"],
                karg["referName"],
                karg["SongName"]
                ))

        elif tableName == "hotcomment":
            cursor.execute(SQL_Opration.Operation[tableName](
                    karg["commentID"],
                    karg["creattime"],
                    karg["username"],
                    karg["userid"],
                    karg["referComment"],
                    karg["prise"],
                    karg["Content"],
                    karg["songId"],
                    karg["referID"],
                    karg["referName"],
                    karg["SongName"]
                    ))
        else:
            print("insert table not exist!!!")    
        self.DBfd.commit()

    def updateVersion(self,lastid):
        sql='SELECT * FROM Version WHERE version=0x0000001'
        cursor = self.DBfd.cursor()
        cursor.execute(sql)
        result = cursor.fetchone()
        self.DBfd.commit()  
        #更新endtime和lastestId
        # 获取当前时间
        timeNow = datetime.datetime.now()
        # 将字符串转化为时间类型           
        timeNowStr = timeNow.strftime('%Y-%m-%d %H:%M:%S.%f')
        param={}
        param["version"]=result[0]
        param["creattime"]=result[1]
        param["endtime"]=timeNowStr
        param["lastestId"]=lastid
        self.insert("Version",param)

    def search(self):
        pass

if __name__ == "__main__":
    #插入测试
    while(1):
        mysqlPassword = input('please input passwd for mysql:\n')
        try:
            #初始化，连接本地mysql数据库
            mysqlAPI=Dealdata.mysqlSQL(passwd=mysqlPassword,songId=START_INDEX)
            break
        except pymysql.err.OperationalError as e:
            #捕获密码错误情况
            retry = input("error passwd for mysql,try again?(Y/N)")
            if retry != 'Y' and retry != 'y':
                break
    sqliteAPI = Dealdata.sqliteSQL(songId=START_INDEX)


 
