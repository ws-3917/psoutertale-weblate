import os
from pathlib import Path

# 翻译脚本使用的常量和变量
# 注释标记，用于识别需要翻译的部分和忽略的部分
START_COMMENT = " START-TRANSLATE"  # 开始翻译的标记
END_COMMENT = " END-TRANSLATE"  # 结束翻译的标记
NOTRANS_COMMENT = " NO-TRANSLATE"  # 控制符，不进行翻译
IGNORE_COMMENT = "@ts-ignore"  # 忽略注释标记
LANG = [
    "cs_CZ",
    "de_DE",
    "es_ES",
    "it_IT",
    "ja_JP",
    "pt_BR",
    "tr_TR",
    "zh_CN",
    "zh_TW",
]  # 支持的语言列表，包含简体中文和繁体中文

TRANSLATED_PERCENT = "99.94"  # 当前翻译百分比
VERSION = "67.3"  # 游戏版本号
COMMIT_COMMENT = "呜呜呜小孩不会水上漂了爷青结"  # 更新说明

# 路径配置
WEB_PATH = "ws3917.site:/www/p50ttt"  # 网页版游戏推送路径
HOME_PATH = (
    Path(os.environ.get("USERPROFILE") or os.environ.get("HOME")) / "code"
)  # 用户主目录路径
GMS_PATH = HOME_PATH / "psoutertale-gms"  # 字体生成工具路径
TRANS_PATH = HOME_PATH / "psoutertale-cn"  # 翻译文件路径
WEBLATE_PATH = HOME_PATH / "psoutertale-weblate"  # Weblate仓库路径
SRC_PATH = HOME_PATH / "psoutertale-src"  # 源代码路径
SRC_WIN7_PATH = HOME_PATH / "psoutertale-src-win7"  # 源代码路径
DIST_PATH = HOME_PATH / "psoutertale-dist"  # 发布文件路径
MODS_PATH = HOME_PATH / "psoutertale-mod"  # 模组路径
TEXT_PATH = HOME_PATH / "psoutertale-text"  # 文本路径
DTTVL_PATH = HOME_PATH / "dttvl/src/Assets/Scripts/Assembly-CSharp/"
DTTVL_PATHX = HOME_PATH / "dttvl/src/Assets/"
DTTVL_DIRLIST = ["Scenes", "Resources/overworld", "Resources/ui"]
DTTVL_FILETYPE = [".unity", ".prefab", ".prefab"]
# 项目中不同区域的标识符列表
PLACELIST = [
    "aerialis",
    "citadel",
    "common",
    "foundry",
    "outlands",
    "starton",
    "systems",
    "values",
]
DTTVL_PLACELIST = [
    "star",
    "nostar",
    "others",
    "otherunity",
    "ch1",
    "ch2",
    "ch3",
    "ow",
    "shop",
]
PLATFORMS = ["win", "and", "win7x32"]
PLATNAME_DICT = {
    "win": "电脑版",
    "and": "安卓手机版",
    "win7x32": "Win7特别版",
    "mac": "苹果Mac版（英特尔平台）",
    "mac-arm64": "苹果Mac版（M系列平台）",
}
# 0713 - 人名翻译版起名替换字典
CN_NAME_DICT = dict(
    {
        # 高优先级
        "Alphys- ": "艾菲斯- ",
        "Toriel Dreemurr": "托丽尔·逐梦",
        "Asgore Dreemurr": "艾斯戈尔·逐梦",
        "Asriel Dreemurr": "艾斯利尔·逐梦",
        "Final Froggit": "终极蛙吉特",
        "Eyewalker Prime": "眼行者长老",
        "Undyne the Undying": "不灭的安黛因",
        "dapper blook": "纳普斯文",
        "B... BLOOKY": "小... 小幽",
        # 主要角色
        "Chara": "查拉",
        "Frisk": "弗里斯克",
        "Twinkly": "闪闪",
        "Toriel": "托丽尔",
        "Napstablook": "纳普斯特",
        "Sans": "衫斯",
        "Papyrus": "帕派瑞斯",  # 趴派瑞斯、站起来就是帕派瑞斯，遇到狗的时候就是怕派瑞斯，摔在地上就是啪派瑞斯
        "Undyne": "安黛因",
        "Alphys": "艾菲斯",
        "Mettaton": "镁塔顿",
        "Asriel": "艾斯利尔",
        "Asgore": "艾斯戈尔",
        # Outlands
        "Froggit": "蛙吉特",
        "Flutterlyte": "飘游虫虫",
        "Gelatini": "小黏团",
        "Silente": "忍术蟑螂",
        "Oculoux": "干瞪眼",
        "Mushy": "蘑西",
        "Lurksalot": "匿罗",
        "Lurky": "小匿",
        "Blooky": "小幽",
        "Aaron": "亚伦",
        "Gumbert": "努伯赫",
        "Eyewalker": "眼行者",
        # Starton
        "Stardrake": "星铁龙",
        "Starry": "星儿",
        "Chilldrake": "小酷龙",
        "Astro Serf": "太空帽",
        "Radio Jack": "收音劫克",
        "Jerry": "杰瑞",
        "Whizkarat": "绅鼠猫",
        "Doggo": "遁狗",
        "Dogi": "狗夫妇",
        "Dogamy": "狗来米",
        "Dogaressa": "狗媳儿",
        "Canis Minor": "小犬座",
        "Canis Major": "大犬座",
        "Canis Maximus": "帝犬座",
        "Sepluv": "赛普洛夫",  # 月岩商人
        "Erogot": "艾罗戈",  # 前国王
        "Kabakk": "卡巴克",  # 星港小镇警察摊位
        "Zorren": "佐伦",  # 星港小镇警察摊位
        "Grillby's": "烤尔比",
        "Grillbys": "烤尔比",
        "Grillby": "烤尔比",
        "Vegetoid": "蔬菜兽",
        # Foundry
        "Radtile": "老顽鳄",
        "Raddy": "顽顽",
        "Skrubbington": "刷洁顿",
        "Skrubby": "刷刷",
        "Gelata": "大黏簇",
        "Doge": "督吉",
        "Muffet": "玛菲特",
        "Shyren": "害羞塞壬",
        "Longsy": "大高个",
        "Shortsy": "小不点",
        "Bob": "鲍勃",
        "Gerson": "葛森",
        "Hapstablook": "纳普斯乐",
        "Temmie": "提米",
        "Temy": "提咪",
        "Tem": "提咪",  # 检查单词前后字符避免错误替换
        # Aerialis
        "Tsunderidex": "傲娇飞船",
        "Hotwire": "烈焰热线",
        "Perigee": "呦呦鸡",
        "Glyde": "老滑头",
        "Gliden": "老话筒",  # 老滑头的爹
        "Mew Mew": "喵喵",
        "Charles": "查尔斯",
        "Faraday": "法拉第",
        "Vulkin": "迷你火山",
        "Onionsan": "洋葱桑",
        "the Pyromaniacs": "热火朝天",
        "Pyromaniacs": "热火朝天",
        "Aidrian": "阿德里安",
        "Catty": "凯蒂",
        "Bratty": "布莱蒂",
        "Metatron": "威塔顿",
        "Burgie": "堡兄",  # 汉堡裤硬气了
        "Gyftrot": "礼物鹿",
        # CORE
        "Cozmo": "谜宇人",
        "Terrestria": "特雷莉亚",
        "Flutterknyte": "飘游䗁士",
        "Silencio": "默之蟑",
        "Mushketeer": "蘑炮手",
        # Citadel & A6
        "Thomas Nue Roman": "托马斯·努·罗曼",
        "Thomas": "托马斯",
        "Andori": "安多利",
        "Strax Seterra": "斯塔克斯·赛特拉",
        "Vashta Nerada": "瓦煞塔·涅拉达",
        "Roman": "罗曼",
        "546f7269656c": "e68998e4b8bde5b094",  # toriel
        "476572736f6e": "e8919be6a3ae",  # gerson
        "526f6d616ee69599e68e88": "e7bd97e69bbce69599e68e88",  # roman教授
        "4e6170737461626c6f6f6b": "e7bab3e699aee696afe789b9",  # napstablook
        "4173676f7265": "e889bee696afe68888e5b094",  # asgore
        # 口吃
        "F-Frisk": "弗-弗里斯克",
        "U-Undyne": "安-安黛因",
        "S-Sans": "衫-衫斯",
        "M-mettaton": "镁-镁塔顿",
        # 特殊
        "人名不译": "人名翻译",  # 用于菜单选择界面替换语言
        "人名不譯": "人名翻譯",  # 用于菜单选择界面替换语言
        "Tori": "托丽",
        "Gorey": "戈尔",
        "MTT": "镁塔",
        "Sansy": "衫衫",
        "Alphys-": "艾菲斯-",
        "Sansyyyy...": "衫~衫~",
        "Friiisk": "弗里斯克——",
        "MTT-": "镁塔",
        "Dreemurr": "逐梦",
        "大的P-": "大的帕-",  # 伟大的帕派瑞斯
        "ASRI-": "艾斯利-",
        "Skasis范式": "临界范式",  # 来自《神秘博士》的引用
        "NAPSTABLOOK22": "纳普斯特22",
        "Azzy": "艾利",
        "Grillbz": "烤尔比",
        "Schmundyne": "安呆因",
        "zh_CN": "zh_CN-alt",  # 语言代号
        "zh_TW": "zh_TW-alt",
    }
)

# 0610 - 替换字典，处理 Weblate 的字符串合并
REPLACE_DICT = dict(
    {
        # 版本号
        r"(OUTERTALE) (\(c\))": rf"\1 V{VERSION} \2",
        r"版本号：\$\(x\)": rf"版本号：V{VERSION}",
        r"已汉化\$\(x\)％": rf"已汉化{TRANSLATED_PERCENT}％",
        # 翻译合并
        r'(无视墙体["\'],\n[\n\s]*["\'])保存': r"\1快速存档",
        r'(回家["\'],[\n\s]*["\'])放弃': r"\1没啥事",
        r'(sidebar5:[\n\s]*["\'])图': r"\1体征",
        r"提咪([\n\s]*in a Cowboy)": r"Tem\1",
        r'(a: )["\']动["\']': r"\1'存活？'",
        r'(shopg:[\n\s]*)["\']金钱["\']': r"\1'G'",
        r"ゐ": r"",  # 繁体保护标记
        r"ゑ": r"",  # 校对标记
        # 文本条目删除
        r'["\']\[DEL\]["\'],': "",
        r'["\']\[DEL\]["\']': "",
        r"\[ADD\]": "',\n'",
        # 选项 - # 1
        r"(订|买|嚼|听|吃|知道)([^？\n]+？）',[\s]*)'是', '否'": r"\1\2'\1', '不\1'",
        r"(开机|抱一下|插入|动手|接受|看一眼|咬一口|抿一口|启动|架起|更乱点|整理|打烂|砸烂|翻阅|拿走|装备|睡觉|参加|爬进去|戴上|“踩”过去|猜谜|使用|登录|读一下|看看|玩一次|穿上|接一杯)([^？\n]+？）['\"],\s*)'是', '否'": r"\1\2'\1', '算了'",
        r"(离开|跟上|坐下)([^？\n]+？）',[\s]*)'是', '否'": r"\1\2'\1', '再等等'",
        # 1.5
        r"(拿一)(.)([^？\n]+？）',[\s]*)'是', '否'": r"\1\2\3'拿一\2', '算了'",
        r"(改变主意吗？）',[\n\s]*)'是', '否'": r"\1'试试吧', '还是不敢'",
        r"(看下一页？）',[\n\s]*)'是', '否'": r"\1'继续看', '不看了'",
        r"(停止播放吗？）',[\n\s]*)'是', '否'": r"\1'停止播放', '继续播放'",
        r"(做朋友吗？）',[\n\s]*)'是', '否'": r"\1'好啊', '不要'",
        r"(要选这个喝吗？）',[\n\s]*)'是', '否'": r"\1'就选它了', '我再看看'",
        r"(前往空境吗？）',[\n\s]*)'是', '否'": r"\1'出发', '再等等'",
        r"(放[0-9]+G吗？）',[\n\s]*)'是', '否'": r"\1'放', '不放'",
        r"(还给[^\n？]+？）',[\n\s]*)'是', '否'": r"\1'还给她', '才不要'",
        r"(共进晚餐吗？）',[\n\s]*)'是', '否'": r"\1'好啊', '我很忙'",
        r"(躺在它身边吗？）',[\n\s]*)'是', '否'": r"\1'好啊', '算了'",
        r"(到外面走走？）',[\n\s]*)'是', '否'": r"\1'出去看看', '再等等'",
        r"(确定战斗吗？）',[\n\s]*)'是', '否'": r"\1'给我打', '算了'",
        r"(你该怎么办？）',[\n\s]*)'吃掉', '不要'": r"\1'吃掉', '留着'",
        r"(意面怎么办呢？）\",[\n\s]*)'一起吃', '吃掉'": r"\1'一起吃', '自己独享'",
        # 2
        r"'是', '否'([\n\s\)\],]+astrofood1)": r"'拿一份', '算了'\1",
        r"'是', '否'([\n\s\)\],]+b1:)": r'"还愿意吃", "不吃了"\1',
        r"'是', '否'([\n\s\)\],]+balcony1:)": r"'景色很美', '没啥好看的'\1",
        r"'是', '否'([\n\s\)\],]+blookdate6a:)": r"'躺下试试', '算了'\1",
        r"'是', '否'([\n\s\)\],]+blooksorry)": r"'我错了', '没啥'\1",
        r"'是', '否'([\n\s\)\],]+blooktouch2)": r"'听听看', '算了'\1",
        r"'是', '否'([\n\s\)\],]+hapsta1a:)": r"'好的', '我很忙'\1",
        r"'是', '否'([\n\s\)\],]+indie1a:)": r'"有信心", "我不敢"\1',
        r"'是', '否'([\n\s\)\],]+jspeech5b3a:)": r"'\\n你说得对', '他们的死活\\n跟我没关系'\1",
        r"'是', '否'([\n\s\)\],]+moneyVote4:)": r"'投票', '弃权'\1",
        r"'是', '否'([\n\s\)\],]+moneyWhisper2a:)": r"'好啊', '不要'\1",
        r"'是', '否'([\n\s\)\],]+nicecreamSc4:)": r"'兑换', '算了'\1",
        r"'是', '否'([\n\s\)\],]+npc86b:)": r"'愿意', '不愿意'\1",
        r"'是', '否'([\n\s\)\],]+papdate[45]a:)": r"'开始吧', '再等等'\1",
        r"'是', '否'([\n\s\)\],]+papdate15a:)": r"'嗯嗯！', '不！'\1",
        r"'是', '否'([\n\s\)\],]+papsolu3a1:)": r'"告诉我", "再想想"\1',
        r"'是', '否'([\n\s\)\],]+papyrus7:)": r'"听懂了", "没听懂"\1',
        r"'是', '否'([\n\s\)\],]+papyrusFinal)": r'"放我走吧", "接着打"\1',
        r"'是', '否'([\n\s\)\],]+puzzle1switch:)": r"'拿走', '算了'\1",
        r"'是', '否'([\n\s\)\],]+quicksolve7:)": r'"输入", "再等等"\1',
        r"'是', '否'([\n\s\)\],]+riverboi4)": r"'出发', '再等等'\1",
        r"'是', '否'([\n\s\)\],]+shard3:)": r"'走你', '算了'\1",
        r"'是', '否'([\n\s\)\],]+spookydate19a:)": r"'听说过', '没听过'\1",
        r"'是', '否'([\n\s\)\],]+telescopeY:)": r"'试试', '算了'\1",
        r"'是', '否'([\n\s\)\],]+unddate11a)": r"'那必须的', '才不是呢'\1",
        r"'好听', '不好听'(, '一般', '不确定'[\n\s\)\],]+npc86e)": r"'很幸福', '很痛苦'\1",
        r"'是', '否'([\n\s\)\],]+'抱抱就好啦！', '放下过去吧。')": r"'我原谅你', '才不原谅'\1",
        # 3
        r"(挑战了吗，人类！？',[\n\s]*choicer.create\('\* （你要怎么回答？）', )'是', '否'": r"\1'准备好了', '没准备好'",
        r"(消遣吗？',[\n\s]*choicer.create\('\* （你要怎么回答？）', )'是', '否'": r'\1"开始吧", "再等等"',
        r"(一样“消遣”吧！',[\s\n]*choicer.create\('\* （你要怎么回答？）', )'是', '否'": r"\1'开始吧', '再等等'",
        r"(肿么样？',[\n\s]*choicer.create\('\* （你要怎么回答？）', )'是', '否'": r"\1'试试', '算了'",
        r"(现在进入“档案”吗？',[\n\s]*choicer.create\('\* （你要怎么回答？）', )'是', '否'": r"\1'进入', '再等等'",
        r"(（你要怎么做？）', '安慰他', )'沉默'": r"\1'站着不动'",
        # 翻译组信息
        # cs_CZ
        r'(\],\n[\n\s]*)(\[\s*["\']Přináší vám)': r"""
        \1[
            '§fill=#ff0§< ČEŠTÍ PŘEKLADATELÉ >§fill=#fff§',
            'Chickenytboi',
            'petar3664',
        ],\n\2""",
        # es_ES
        r'(\],\n[\n\s]*)(\[\s*["\']Traído a)': r"""
        \1[
            '§fill=#ff0§< TRADUCTORES AL ESPAÑOL >§fill=#fff§',
            'Stefano9000',
            'Chistosito',
            'Ariel',
            'Bemy',
            'AshuSD',,
            'DR4GON_HE4RT',
            'Manuel',
        ],\n\2""",
        # zh_CN / zh_TW
        r'(\],\n[\n\s]*)(\[\s*["\']特别鸣谢)': r"""
        \1[
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "§fill=#ff7§【文翻 & 文校】§fill=#fff§",
            "1个渣渣",
            "braing",
            "errosia",
            "Murder--Sans_MDR",
            "R.o.C.t.D./π/3.1415⑨",
            "Wasneet Potato",
            "ws3917",
            "§fill=#ff7§【程序】§fill=#fff§",
            "ws3917",
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "§fill=#ff7§【美术】§fill=#fff§",
            "KodLenss",
            "小云爱喝二锅头",
            "屑moons月亮君",
            "御魂_",
            "这是纸鸢",
            "§fill=#ff7§【精神支持&推广】§fill=#fff§",
            "AX暗星233",
            "幻-_-风",
            "屑moons月亮君"
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "§fill=#ff7§【汉化测试】§fill=#fff§",
            "braing",
            "鸥皇不欧",
            "升级无敌",
            "Wasneet Potato",
            "雪理奈",
            "（以及其他汉化组成员）",
            "",
            "感谢汉化组成员的努力付出！",
            "同时，也感谢您对这款游戏的喜爱！",
        ],
        [
            "§fill=#ff0§< 汉化组留言 >§fill=#fff§",
            "",
            "如果在游玩过程中遇到各种Bug，",
            "或者对游戏有好的建议，",
            "可以B站关注§fill=#ff0§@PS域外传说汉化组§fill=#808080§",
            "并留言反馈！",
            "",
            "同时，我们正在为游戏制作各种Mod！",
            "欢迎贡献好的点子！",
        ],\n\2""",
    }
)

# 简体繁体不同词汇使用习惯

S2T_DICT = {
    "簡體中文": "繁體中文",
    "時間線": "時間軸",
    "哦": "喔",
    "菜單": "選單",
    "文件": "檔案",
    "交互": "互動",
    "全屏": "全螢幕",
    "設置": "設定",
    "程序": "程式",
    "文件夾": "資料夾",
    "緩存": "快取",
    "窗口": "視窗",
    "本地化": "在地化",
    "導入": "匯入",
    "導出": "匯出",
    "社區": "社群",
    "支持": "支援",
    "性能": "效能",
    "發佈": "發行",
    "快捷方式": "捷徑",
    "音頻": "音訊",
    "視頻": "影片",
    "卸載": "解除安裝",
    "封號": "封鎖",
    "設備": "裝置",
    "郵箱": "信箱",
    "電子郵箱": "電子信箱",
    "應用程序": "應用程式",
    "智能手機": "智慧型手機",
    "客戶端": "用戶端",
    "個人資料": "個人檔案",
    "硬盤": "硬碟",
    "軟盤": "軟碟",
    "磁盤": "磁碟",
    "自定義": "自訂",
    "註釋": "註解",
    "鏈接": "連結",
    "軟件托盤": "系統列",
    "在線": "線上",
    "隱身": "隱藏",
    "應用": "套用",
    "默認": "預設",
    "信息": "資訊",
    "消息": "訊息",
    "協議": "協定",
    "界面": "介面",
    "用戶": "使用者",
    "項目": "專案",
    "調試": "除錯",
    "代碼": "程式碼",
    "服務器": "伺服器",
    "端口": "埠口",
    "類型": "類別",
    "偽本地化": "模擬翻譯",
    "剪切板": "剪貼簿",
    "市場": "市集",
    "搜索": "搜尋",
    "保存": "儲存",
    "打印": "列印",
    "運行": "執行",
    "內存": "記憶體",
    "顯卡": "顯示卡",
    "兼容": "相容",
    "操作系統": "作業系統",
    "線程": "執行緒",
    "32位": "32位元",
    "64位": "64位元",
    "比特": "位元",
    "軟件": "軟體",
    "硬件": "硬體",
    "換彈": "重新裝填",
    "鼠標": "滑鼠",
    "指針": "遊標",
    "局域網": "區域網",
    "地址": "位址",
    "超時": "逾時",
    "分辨率": "解析度",
    "空格": "空白鍵",
    "登錄": "登入",
    "退出登錄": "登出",
    "二進制": "二進位",
    "八進制": "八進位",
    "十進制": "十進位",
    "十六進制": "十六進位",
    "臺式電腦": "桌上型電腦",
    "筆記本電腦": "筆記型電腦",
    "互聯網": "網際網路",
    "網絡": "網路",
    "源代碼": "原始碼",
    "克里": "克伊",  # KIOS
    "克里烏斯": "克伊俄斯",
    "王後": "王后",
    "國王后": "國王後",  # 例外
    "皇後": "皇后",
    "回覆": "回復",
    "發明瞭": "發明了",
    "彆": "別",
    "衛視": "電視臺",
    "手柄": "控制器",
    "說了會話": "講了幾句",
    "這會兒": "這時候",
    "揹包": "背包",
    "秘笈": "祕笈",
    "哈嘍": "哈囉",
    "傢夥": "傢伙",
    "夥食": "伙食",
    "託麗爾": "托麗爾",
    "託麗": "托麗",
    "zh_CN": "zh_TW",
    "zh-CN": "zh-TW",
    "意大利麵": "義大利麵",
    "意麵": "義麵",
    "英尺": "呎",
    "標註": "標注",
    "發給": "傳送給",
    "賬號": "賬戶",
    "信號": "訊號",
    "雅莫萬能醬": "雅莫萬用醬",
    "萬能醬": "萬用醬",
    "回收站": "資源回收桶",
    "計劃": "計畫",
    "黴": "霉",
    "咯": "嚕",
    "噩夢": "惡夢",
    "軍火庫": "兵工廠",
    "威塔顿": "鎂卡登",
    "“芯”型薯片": "“晶”狀洋芋片",  # 土豆土豆，爱吃土豆
    "‘芯’型薯片": "‘晶’狀洋芋片",
    "薯片": "洋芋片",
    # 标点
    "“": "「",
    "”": "」",
    "‘": "『",
    "’": "』",
    # archive
    "e68998e4b8bde5b094": "e68998e9ba97e788be",  # toriel
    "e8919be6a3ae": "e6a0bce788bee6a3ae",  # gerson
    "e7bd97e69bbce69599e68e88": "e7be85e69bbce69599e68e88",  # prof. roman
    "e7bab3e699aee696afe789b9": "e7b48de699aee696afe789b9",  # napstablook
    "e889bee696afe68888e5b094": "e889bee696afe68888e788be",  # asgore
}

# 0717 - 术语表名字
TERMS = ["characters", "items", "other", "places"]
