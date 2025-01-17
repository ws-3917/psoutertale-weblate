from tools import *

if __name__ == "__main__":
    # bashcmd("export all_proxy=127.0.0.1:7897")  # 保证代理顺畅
    # convert_s2t("assets/values-zh_CN.ts", "assets/values-zh_TW.ts")
    task_update()
    # task_release()
    # os.system(
    #     f"cd {SRC_PATH}/app/dist && scp web.tar {WEB_PATH} && ssh {WEB_PATH.split(':')[0]} "
    #     + f'"cd {WEB_PATH.split(':')[1]} && tar -xf web.tar && rm -rf web.tar"'
    # )
    # task_showdiff(61, 61.2, lang="zh_CN", output="losttext.txt")
    # task_dttvl_copyfiles()
    # task_dttvl_update(update_lang="zh_CN")
