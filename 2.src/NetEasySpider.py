# -*- coding:utf-8 -*- 
from Crypto.Cipher import AES
import base64
import requests
import json
import numpy as np
from binascii import b2a_hex, a2b_hex
import pprint
class PsecretEnum:
    '''
    索引查表变量
    '''
    def __init__(self):
        self.emj = {
            "色": "00e0b",
            "流感": "509f6",
            "这边": "259df",
            "弱": "8642d",
            "嘴唇": "bc356",
            "亲": "62901",
            "开心": "477df",
            "呲牙": "22677",
            "憨笑": "ec152",
            "猫": "b5ff6",
            "皱眉": "8ace6",
            "幽灵": "15bb7",
            "蛋糕": "b7251",
            "发怒": "52b3a",
            "大哭": "b17a8",
            "兔子": "76aea",
            "星星": "8a5aa",
            "钟情": "76d2e",
            "牵手": "41762",
            "公鸡": "9ec4e",
            "爱意": "e341f",
            "禁止": "56135",
            "狗": "fccf6",
            "亲亲": "95280",
            "叉": "104e0",
            "礼物": "312ec",
            "晕": "bda92",
            "呆": "557c9",
            "生病": "38701",
            "钻石": "14af6",
            "拜": "c9d05",
            "怒": "c4f7f",
            "示爱": "0c368",
            "汗": "5b7a4",
            "小鸡": "6bee2",
            "痛苦": "55932",
            "撇嘴": "575cc",
            "惶恐": "e10b4",
            "口罩": "24d81",
            "吐舌": "3cfe4",
            "心碎": "875d3",
            "生气": "e8204",
            "可爱": "7b97d",
            "鬼脸": "def52",
            "跳舞": "741d5",
            "男孩": "46b8e",
            "奸笑": "289dc",
            "猪": "6935b",
            "圈": "3ece0",
            "便便": "462db",
            "外星": "0a22b",
            "圣诞": "8e7",
            "流泪": "01000",
            "强": "1",
            "爱心": "0CoJU",
            "女孩": "m6Qyw",
            "惊恐": "8W8ju",
            "大笑": "d"
        }
        self.index = [
            "色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙",
            "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭",
            "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止",
            "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石",
            "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐",
            "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞",
            "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"
        ]
    def getString(self,list):
        a = ""
        for i in list:
            a = a+self.emj[i]
        return a

class EastNetParam:
    '''
    空类，用来结构化交互数据
    '''
    pass
 
class AEScrypt():
    def __init__(self,key,iv="0102030405060708"):
        self.key = key
        self.iv = iv
        self.mode = AES.MODE_CBC
     
    #加密函数，如果text不是16的倍数【加密文本text必须为16的倍数！】，那就补足为16的倍数
    def encrypt(self,text):
        cryptor = AES.new(self.key, self.mode, self.iv)
        #这里密钥key 长度必须为16（AES-128）、24（AES-192）、或32（AES-256）Bytes 长度.目前AES-128足够用
        pad = 16 - len(text) % 16
        text = text + pad * chr(pad)
        self.ciphertext = cryptor.encrypt(text)
        encrypt_text = base64.b64encode(self.ciphertext)
        return str(encrypt_text, encoding="utf-8")
        #因为AES加密时候得到的字符串不一定是ascii字符集的，输出到终端或者保存时候可能存在问题
        #所以这里统一把加密后的字符串转化为16进制字符串
        #return b2a_hex(self.ciphertext).decode("ASCII")
     
    #解密后，去掉补足的空格用strip() 去掉
    def decrypt(self,text):
        cryptor = AES.new(self.key, self.mode, self.iv)
        encrypt_text = base64.b64decode(text)
        plain_text = cryptor.decrypt(encrypt_text)
        return str(plain_text, encoding="utf-8")

class RSAcrypt:
    '''
    RSA加密方法
    '''
    def __init__(self):
        pass
    def _modpow(self,intdata, intPublicKeyExponent, intPublicKeyModulus):  
        result = 1
        while (intPublicKeyExponent > 0):
            if intPublicKeyExponent & 1:
                result = (result * intdata) % intPublicKeyModulus
            intPublicKeyExponent = intPublicKeyExponent >> 1
            intdata = (intdata * intdata) % intPublicKeyModulus
        return result
	
    def _str_to_int(self,string):  
        n = 0
        for i in range(len(string)):
            n = n << 8
            n += ord(string[i])
        return n
        
        
    def rsaEncrypt(self,data,strPublicKeyExponent,strPublicKeyModulus):  
        result = self._modpow(self._str_to_int(data), int(strPublicKeyExponent, 16), int(strPublicKeyModulus, 16))
        return hex(result).upper()[2:]

class EasyNetAPI:
    def __init__(self,id=0):
        self.songID = id
        self.headers = {
            'Cookie': 'appver=1.5.0.75771;',
            'Origin': 'http://music.163.com/',
            'Referer': 'http://music.163.com/song?id=29463404',
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36"
        }
    def _AES_encrypt(self,text,key):
        '''
        补全，被加密串需要16字节对齐
        '''
        iv = "0102030405060708"
        aes = AEScrypt(key,iv)
        encrypt_text = aes.encrypt(text)
        #print("加密："+encrypt_text)
        a = aes.decrypt(encrypt_text)
        #print("解密："+a)
        return encrypt_text
    
    def _RSA_encrypt(self,buff,strPublicKeyExponent,strPublicKeyModulus):
        '''
        执行core.js中的c函数，生成随机串并且进行RSA加密,由key1和key2加密buff
        '''
        # js里setMaxDigits(131)表示RSA1024
        #第一个参数为加密指数、第二个参数为解密参数、第三个参数为加密系数
        #js：d = new RSAKeyPair(strPublicKeyExponent,"",strPublicKeyModulus)
        rsa = RSAcrypt()
        e = rsa.rsaEncrypt(buff,strPublicKeyExponent,strPublicKeyModulus)
        return e


    def _randomAES(self,num):
        '''
        执行core.js中的a函数,生成一个随机串,输入为循环次数
        '''
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"#不包含小写
        c = ""
        e = np.random.randint(0,len(b))
        for d in range(num):
            c += b[e]
        return c

    def asrsea(self,StrJson,StaticTwo,StaticAll,StaticFour):
        '''
        生成交互的关键参数函数，复刻core.js中的动作  params: bAQ8I.encText,
                    encSecKey: bAQ8I.encSecKey
        '''
        h = EastNetParam()
        i = self._randomAES(16)#随机生成aes秘钥串,似乎需要16个相同字母，完全随机有问题？此处加密规则应该还有问题
        #print(len(i),i)
        #i = 16*chr(ord('F'))
        h.encText = self._AES_encrypt(StrJson, StaticFour)
        h.encText = self._AES_encrypt(h.encText, i)
        h.encSecKey = self._RSA_encrypt(i, StaticTwo, StaticAll)#aes秘钥串RSA加密发送 RSA在加密非相同字符串的时候还有问题
        #print(h.encSecKey)
        return h
    
    def getComment(self,page=0):
        '''
        第几页评论，默认抓第一页到评论，及热评
        '''
        ID = str(self.songID)
        enum = PsecretEnum()
        url = "http://music.163.com/weapi/v1/resource/comments/R_SO_4_"+ID+"/?csrf_token="
        first_param = "{rid: \"R_SO_4_"+ID+"\", offset: \""+str(page*20)+"\", total: \""+\
        ("false" if page else "true")+"\", limit: \"20\", csrf_token: \"\"}"
        param = self.asrsea(first_param,enum.getString(["流泪", "强"]),\
                                enum.getString(enum.index),\
                                enum.getString(["爱心", "女孩", "惊恐", "大笑"]))
        data = {
            "params": param.encText,
            "encSecKey": param.encSecKey
        }
        response = requests.post(url, headers=self.headers, data=data)
        return response.content

    def getSongInfo(self):
        ID = str(self.songID)
        url = "http://music.163.com/api/song/detail/?ids=["+ID+"]"
        response = requests.get(url,headers=self.headers)
        return response.content

if __name__ == "__main__":
    id = 59875
    spiderapi = EasyNetAPI(id)
    json_text = spiderapi.getSongInfo()
    json_dict = json.loads(json_text)
    pprint.pprint(json_dict)
    pprint.pprint(json_dict["songs"])
    with open(r"../3.result/song_"+str(id)+".json","wb") as f:
        f.write(json.dumps(json_dict,ensure_ascii=False,indent=4).encode("utf-8"))
    for informations in json_dict['songs']:
        print('歌曲ID: ', informations['id'])
        print('歌曲名称: ', ''.join(informations['name']))
        print('歌手: ', ''.join(names['name'] for names in informations['artists']))
        print('mp3链接: ', informations['mp3Url'])

    json_text = spiderapi.getComment(1)
    json_dict = json.loads(json_text)
    with open(r"../3.result/R_SO_4_"+str(id)+".json","wb") as f:
        f.write(json.dumps(json_dict,ensure_ascii=False,indent=4).encode("utf-8"))  
    
    print(json_dict['total'])
    for item in json_dict['comments']:
        #print(item['content'])
        pass
   