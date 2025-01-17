import { asrielinter, helmetdyne, helmetdyneAttack } from '../../../code/common/api';
import {
    armorprice,
    badSpider,
    dogecon,
    dogex,
    geno,
    ghostpartyCondition,
    respecc,
    startonATE,
    temgone
} from '../../../code/foundry/extras';
import { game, rng } from '../../../code/systems/core';
import {
    antiAteThreshold,
    battler,
    choicer,
    fetchCharacters,
    instance,
    pager,
    player,
    postSIGMA,
    roomKills,
    world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';

// START-TRANSLATE

export default {
    a_foundry: {
        locketseller: ['<32>{#p/basic}* ...', "<32>{#p/basic}* 我什麼都沒看到。"],
        noequip: ['<32>{#p/human}* （你打算不這麼做。）'],
        darktoriel1: [
            "<32>{#p/human}* （你抓住了Toriel的手。）",
            '<25>{#p/toriel}{#f/2}* 噢，天哪...！\n* 是-是你嗎，Frisk？',
            "<25>{#f/1}* 這裡有點黑，看不清楚..."
        ],
        darktoriel2: [
            '<25>{#p/toriel}{#f/9}* 對不起，害得你到處找我。',
            '<25>{#f/9}* 我把手機關機了，\n  所以你打不通我的電話。',
            '<25>{#f/13}* ...',
            '<25>{#f/13}* 孩子，之前做了那些事。\n  真的對不起。',
            '<25>{#f/13}* 即便你原諒我，\n  我也原諒不了自己。',
            '<25>{#f/9}* 現在，我才漸漸意識到\n  過去犯下的那些錯\n  有多嚴重。',
            '<25>{#f/10}* ...',
            '<25>{#f/10}* 總之，很高興見到你。'
        ],
        darktoriel3: [
            '<25>{#p/toriel}{#f/5}* ...喔？\n* 你想讓我...\n  給Sans回個電話？',
            '<25>{#f/1}* 我現在就開機...'
        ],
        darktoriel4a: [
            '<32>{#s/phone}{#p/event}* 撥號中...',
            '<25>{#p/toriel}{#f/3}* ...嗯，是的。\n* 我手機在這地方\n  訊號不太好。'
        ],
        darktoriel4b: [
            '<25>{#f/4}* 我要親自去找他。',
            '<25>{#f/5}* 呃...\n* 還是一會再去吧。',
            '<25>{#f/5}* ...'
        ],
        darktoriel5a: [
            '<25>{#p/toriel}{#f/5}* ...嗯？\n* 還有什麼事嗎？',
            '<32>{#p/human}* （你給眼前的Toriel複述了\n  「六號檔案」裡那個Toriel\n  給的建議。）',
            '<25>{#p/toriel}{#f/2}* ...',
            '<25>{#f/1}* 這些話...',
            '<25>{#f/1}* 你從哪聽到的...？',
            '<25>{#f/0}* 我上次說這些\n  起碼是一百年前了。',
            '<25>{#f/5}* ...',
            '<25>{#f/1}* 好，你先走吧...\n* 我會記住這些話的。'
        ],
        darktoriel5b: ['<25>{#p/toriel}{#f/1}* 你先走吧。'],
        darktoriel6: [
            '<25>{#f/5}* 放心，我知道運輸船要出發，\n  肯定不會錯過的。',
            '<25>{#f/9}* 但現在，我想一個人靜靜。',
            '<25>{#f/1}* ...謝謝你的關心，Frisk。\n* 你是最棒的。'
        ],
        darktoriel7: () =>
            SAVE.data.b.c_state_secret1_used
                ? [
                    '<25>{#p/toriel}{#f/10}* 別擔心，Frisk。\n* 我沒事。',
                    '<25>{#f/1}* 運輸船上見。\n* 好嗎？'
                ]
                : [
                    '<25>{#p/toriel}{#f/5}* 給我點時間平復下心情，\n  Frisk。',
                    '<25>{#f/1}* 運輸船上見。\n* 好嗎？'
                ],
        ghostpartymusic1: [
            '<32>{#p/finalghost}* 啊，太經典了。\n* 這首詭怪單曲可不簡單，\n  完完全全把精髓體現出來了。',
            '<32>* 也可以說是\n  這曲風的開山之作了。'
        ],
        ghostpartymusic2: [
            '<32>{#p/mettaton}{#e/mettaton/9}* 現在這首讓我全身都開始「顫抖」，\n  就像BLOOKY說的一樣。',
            "<32>{#e/mettaton/36}* 它的成分非常混雜...",
            '<32>{#e/mettaton/8}* 誒這過渡段？',
            '<32>{#e/mettaton/9}* 換我來可能就不會這樣寫了，\n  不過也還算湊合吧。'
        ],
        ghostpartymusic3: [
            '<32>{#p/basic}{#e/maddummy/1}* 你知道嗎，\n  我總覺得這首歌的節奏很慢。',
            '<32>* 就是... 超級... \n  無比... 慢。',
            "<32>{#e/maddummy/0}* 但只是我這麼認為罷了。"
        ],
        evac: ['<32>{#p/human}* （你感覺周圍的怪物越來越少了。）'],
        shopclosed: ['<32>{#p/human}* （沒必要再踏足了。）'],
        starKILLER: ['<32>{#p/basic}{#npc/a}* 這草褪色的速度比我想像得還快。'],
        quicksolve3: () =>
            postSIGMA()
                ? ["<32>{#p/basic}* 它不再提供服務了。"]
                : SAVE.data.b.svr
                    ? ['<32>{#p/human}* （終端似乎已經停機了。）']
                    : [
                        '<32>{#p/human}* （你激活了終端。）',
                        '<32>{#p/basic}* 「路通了！」\n* 「直接前進即可。」'
                    ],
        quicksolve4: ['<32>{#p/human}* （你激活了終端。）', '<32>{#p/basic}* 「請輸入控制程式碼！」'],
        quicksolve5: [
            '<32>{#p/basic}* ...',
            '<32>{#p/basic}* 看來要等某個解謎大師\n  幫你脫困了。'
        ],
        quicksolve6: () => ['<32>{#p/basic}* ...', choicer.create('* （輸入程式碼？）', "輸入", "再等等")],
        quicksolve7: ['<32>{#p/human}* （你決定不輸入。）'],
        quicksolve8: ["<32>{#p/basic}* 嗯，這是一種仁慈。"],
        escape: [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<32>{#p/alphys}* 嘿... 你-你好？',
            '<32>* 你肯定不想回頭，但是...',
            "<32>* 如果你還往前走，\n  她會... 殺了你...",
            "<32>* 我勸過她...\n  但-但她根本聽不進去！",
            "<32>* 現在，她要把你...",
            '<32>* ...',
            "<32>* 別-別擔心！",
            "<32>* 我-我還有辦法\n  讓你活下去！",
            "<32>* 往回-回走，\n  穿過雷射謎題房間，\n  你就能看到一個陽臺...",
            "<32>* 我知道來回一趟\n  有點麻煩...",
            '<32>* 但只有這樣，\n  你才能活下去！',
            '<32>* 請相-相信我，好嗎。',
            "<32>* 要是你不聽，\n  我...",
            '<32>* 我就...',
            "<32>* 算了... 你走吧。",
            '<32>{#s/equip}{#p/event}* 滴...'
        ],
        artifact1: ['<32>{#p/human}* （你獲得了傳說中的神器。）'],
        artifact2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
        artifact3: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* （銘文描述了一種\n  由鋼琴和樂曲組成的謎題）']
                : [
                    '<32>{#p/basic}* 底座上刻著銘文。',
                    '<32>* 「琴臺靜立其間，兩側別有洞天。」',
                    '<32>* 「王子曲成左門啟，誰人可使右室顯？」',
                    '<32>* 「再奏謎自開。」'
                ],
        tome0: () => ['<32>{#p/basic}* 這宗捲軸被牢牢固定在底座上，\n  拿不起來。'],
        tome1: () => ['<32>{#p/human}* （你取下了捲軸《頓悟》。）'],
        tome2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
        tome3: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* （銘文表達了\n  一些和平與美好的祝福。）']
                : [
                    '<32>{#p/basic}* 底座上刻著銘文。',
                    '<32>* 「此卷只為伊人開，\n  斯人只為善心來。」',
                    '<32>* 「冀君肝膽丹常在，\n  仲純思慮沃土埋。」',
                    '<32>* 「願平和之心常伴君側，\n  直至君歸。」'
                ],
        tome4: () => [
            choicer.create(
                '* （你想做什麼？）',
                '饒恕',
                world.meanie
                    ? '欺負'
                    : SAVE.data.b.oops && world.flirt > 9
                        ? '調情'
                        : SAVE.data.b.oops
                            ? '交友'
                            : '擁抱',
                '擊殺',
                '撈錢'
            )
        ],
        tome5a: '<32>{#p/human}* （你凝神屏息，試圖讓對方放棄戰鬥。）',
        tome5b: () =>
            world.meanie
                ? '<32>{#p/human}* （你凝神屏息，試圖把對方嚇跑。）'
                : SAVE.data.b.oops && world.flirt > 9
                    ? '<32>{#p/human}* （你凝神屏息，試圖讓對方被你迷倒。）'
                    : SAVE.data.b.oops
                        ? '<32>{#p/human}* （你凝神屏息，\n  試圖和對方成為好朋友。）'
                        : '<32>{#p/human}* （你凝神屏息，\n  試圖讓對方感受到擁抱。）',
        tome5c: '<32>{#p/human}* （你凝神屏息，試圖逼對方自殺。）',
        tome5d: '<32>{#p/human}* （你凝神屏息，\n  試圖引誘對方把錢交出來。）',
        tome5e: '<32>{#p/basic}* ...突然！',
        tome5f: '\n* （然而一切照常。）',
        astrofood0: () => [
            "<32>{#p/human}* （周圍太暗了，\n  你看不清箱子裡面有什麼...）",
            choicer.create('* （拿走裡面的東西嗎？）', '拿走', '算了')
        ],
        astrofood1: () =>
            [
                [
                    '<32>{#p/basic}* 箱子裡有三份太空豆腐。',
                    choicer.create('* （拿一份嗎？）', '拿一份', '算了')
                ],
                [
                    '<32>{#p/basic}* （箱子裡還剩兩份太空豆腐。）',
                    choicer.create('* （拿一份嗎？）', '拿一份', '算了')
                ],
                [
                    '<32>{#p/basic}* （箱子裡還剩一份太空豆腐。）',
                    choicer.create('* （拿走它嗎？）', '拿走', '算了')
                ]
            ][SAVE.data.n.state_foundry_astrofood],
        astrofood2: ['<32>{#p/human}* （你拿了一份太空豆腐。）'],
        astrofood3: ["<32>{#p/human}* （你帶的東西太多了。）"],
        astrofood4: () => ['<32>{#p/human}* （你不打算這麼做。）'],
        astrofood5: () =>
            SAVE.data.b.svr
                ? ["<32>{#p/human}* （但裡面是空的。）"]
                : ['<32>{#p/basic}* 箱子是空的。'],
        bird1: () => [
            ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* 這隻小鳥想帶你\n  穿過這道溝。']),
            choicer.create("* （接受小鳥的好意嗎？）", '接受', '算了')
        ],
        blookdate1: () =>
            world.sad_ghost || world.population === 0
                ? [
                    '<32>{#p/napstablook}* 喔...\n* 你好...',
                    "<32>* 對不起，我...\n* 沒想到你會跟我過來。",
                    '<32>* 呃...\n* 別太拘束...？'
                ]
                : [
                    '<32>{#p/napstablook}* 喔...\n* 你真的來了...',
                    "<32>* 對不起，我...\n* 沒想到你會來。",
                    "<32>* 雖然比較寒酸，\n  但是不要太拘束喔。"
                ],
        blookdate2: () => [
            ...(world.sad_ghost || world.population === 0
                ? ['<32>{#p/napstablook}* 喔... 你要我給你吃的...', '<32>* 我看看有什麼...']
                : SAVE.data.b.f_state_ghostsleep
                    ? [ "<32>* 好的...\n* 那麼我來給你\n  展示一下我的冰箱"]
                    : ['<32>{#p/napstablook}* 你餓了嗎？', '<32>* 我冰箱裡應該有點吃的...'])
        ],
        blookdate2x: pager.create(
            0,
            () =>
                SAVE.data.b.svr
                    ? [
                        "<32>{#p/human}* （你看了下冰箱裡頭。）\n* （你說不出來冰箱裡有什麼。）"
                    ]
                    : [
                        '<32>{#p/human}* （你看了下冰箱裡頭。）',
                        "<32>{#p/basic}* 很難說裡面到底有些什麼。",
                        ...(ghostpartyCondition()
                            ? [
                                "<32>{#p/mettaton}{#e/mettaton/8}* 裡面可能只有幽靈食物，\n  親愛的。",
                                "<32>{#p/mettaton}{#e/mettaton/9}* 就算你想要吃掉它，\n  它也只會穿過你的身體。"
                            ]
                            : [])
                    ],
            () =>
                SAVE.data.b.svr
                    ? [
                        "<32>{#p/human}* （你看了下冰箱裡頭。）\n* （你說不出來冰箱裡有什麼。）"
                    ]
                    : [
                        '<32>{#p/human}* （你看了下冰箱裡頭。）',
                        "<32>{#p/basic}* 很難說裡面到底有些什麼。"
                    ]
        ),
        blookdate3: () => [
            "<32>{#p/napstablook}* 這是一份幽靈三明治...",
            '<32>* 你想嘗嘗嗎...',
            choicer.create('* （咬一口嗎？）', '咬一口', '算了')
        ],
        blookdate4a: [
            '<32>{#p/human}* （你試著咬了一口幽靈三明治。）',
            '<32>{#p/human}* （你的身體穿過了它。）',
            '<32>{#p/napstablook}* 喔...',
            '<32>* 當做什麼都沒發生吧...'
        ],
        blookdate4b: ['<32>{#p/napstablook}* 喔...........'],
        blookdate5: () => [
            '<32>{#p/napstablook}* 美餐一頓後，\n  我喜歡躺在地上，\n  感覺自己像是垃圾一樣...',
            "<32>* 這是個家族傳統...",
            '<32>* 你想不想...\n* ...也來試試...？',
            choicer.create('* （你要怎麼回答？）', '躺下試試', '算了')
        ],
        blookdate6a: ['<32>{#p/napstablook}* 好...\n* 跟我來做...'],
        blookdate6b: ['<32>{#p/napstablook}* 喔......................', "<32>* 我出去逛逛"],
        blookdate7: [
            "<32>{#p/napstablook}* 我們開始吧...\n* 一直躺著不要動就好。",
            '<32>* 所以...\n* 你要想起來了的話，\n  動起來就好，大概。'
        ],
        blookdate8: ['<32>{#p/napstablook}* 嗨，感覺不錯...', '<32>* 謝謝你...'],
        blookdate8x: ['<32>{#p/napstablook}* 嗯，還挺快的...', '<32>* 謝謝你願意嘗試，儘管...'],
        blookdate8y: ['<32>{#p/napstablook}* 好吧，就是這樣', '<32>* ............'],
        blookdate9: [
            "<32>{#p/napstablook}* 我先出去一下...\n* 你可以跟我來...\n* 不來也可以...",
            "<32>* 由你來決定..."
        ],
        blookmusic0: ["<32>{#p/basic}* 它不再提供服務了。"],
        blookmusic1: () => [
            SAVE.data.b.svr
                ? '<32>{#p/human}* （你伸手去碰音響...）'
                : '<32>{#p/basic}* 現在沒有播放音樂。',
            choicer.create('* （放一首嗎？）', '鬼怪旋律', '鬼怪音波', '鬼怪華爾茲', '取消')
        ],
        blookmusic1y: ['<32>{*}{#p/human}* （你轉動旋鈕...）{^40}{%}'],
        blookmusic2: () => [
            SAVE.data.b.svr
                ? '<32>{#p/human}* （聽起來像在播放樂曲。）'
                : [
                    '<32>{#p/basic}* 正在播放《鬼怪旋律》',
                    '<32>{#p/basic}* 正在播放《鬼怪音波》',
                    '<32>{#p/basic}* 正在播放《鬼怪華爾茲》'
                ][SAVE.data.n.state_foundry_blookmusic - 1],
            choicer.create('* （停止播放嗎？）', '停止播放', '繼續播放')
        ],
        blookmusic3a: [
            '<32>{#p/napstablook}* 喔...\n* 一首經典詭怪單曲...',
            "<32>* 他們現在已經不做\n  這種歌了..."
        ],
        blookmusic3b: ['<32>{#p/napstablook}* 天，這氛圍...', "<32>* 讓我全身都開始顫抖"],
        blookmusic3c: [
            "<32>{#p/napstablook}* 這首稍微有點慢...",
            "<32>* 但一旦你聽進狀態，\n  就會感覺很好聽"
        ],
        blookmusic3d: [
            '<32>{#p/napstablook}* 嘿...\n* 你真的很喜歡聽\n  那個舊歌單，嗯',
            "<32>* 我是說......\n* 我從那次以後，\n  做了些更好的東西.....",
            '<32>* 不過，我還是很感激',
            '<32>* 所以... 謝謝你，嘿'
        ],
        blooksnail1: pager.create(
            0,
            () => [
                "<32>{#p/napstablook}* 你想玩個遊戲嗎？\n* 它叫做「雷霆蝸牛」。",
                '<32>* 幾隻蝸牛會賽跑，\n  然後如果黃色的蝸牛贏了，\n  你就贏了。',
                "<32>* 玩一次需要10G。",
                choicer.create('* （玩一次嗎？）', '玩一次', '算了')
            ],
            () => ['<32>{#p/napstablook}* 你改變主意了嗎？', choicer.create('* （玩一次嗎？）', '玩一次', '算了')]
        ),
        blooksnail1i: () => [
            '<32>{#p/napstablook}* 你想再玩一次嗎？',
            choicer.create('* （玩一次嗎？）', '玩一次', '算了')
        ],
        blooksnail2a: [
            "<32>{#p/napstablook}* 啊...\n* 你的錢不夠......",
            "<32>* 不-不，\n  你還可以玩，別擔心..."
        ],
        blooksnail2b: ['<32>{#p/napstablook}* 喔...........'],
        blooksnail2b0: ['<32>{#p/napstablook}* 好吧...........'],
        blooksnail3: ['<32>{#p/napstablook}* 好...\n* 重複按[Z]為你的蝸牛加油。', '<32>* 準備好了嗎？'],
        blooksnail3i: ['<32>{#p/napstablook}* 好的...\n* 記住，你隨時可以為你的蝸牛\n  加油。', '<32>* 準備好了嗎？'],
        blooksnail4a: [
            '<32>{#p/napstablook}* 你贏了... 恭喜。',
            '<32>* 希望獎勵對你來說足夠了...',
            '<32>{#s/equip}{#p/human}* （你得到了20G。）'
        ],
        blooksnail4b: [
            '<32>{#p/napstablook}* 你的蝸牛差一點點\n  就能贏了。',
            '<32>* 等一下...\n* 蝸牛以為是自己贏了...',
            '<32>* 喔不... 蝸牛會很傷心的...',
            "<32>* 那麼，我就給你一些錢吧...\n* 表現得像你贏了的樣子...",
            '<32>{#s/equip}{#p/human}* （你得到了40G。）'
        ],
        blooksnail4c: [
            '<32>{#p/napstablook}* 喔...........\n* 你們都盡力了...',
            '<32>* 那隻蝸牛看起來很氣餒...',
            "<32>* 可惜，她的實力似乎還不太夠...",
            '<32>* 喔...........'
        ],
        blooksnail4d: [
            '<32>{#p/napstablook}* 喔...........\n* 看起來你為你的蝸牛\n  加油有點過頭了...',
            '<32>* 你給她施加的壓力...\n* 真的讓它吃不消...',
            '<32>* 喔...........'
        ],
        blooksnail4e: [
            '<32>{#p/napstablook}* 喔...........\n* 看起來你為你的蝸牛\n  加油過頭了...',
            "<32>* 她甚至都不看你了...",
            '<32>* 喔...........'
        ],
        blooksnail4f: [
            '<32>{#p/napstablook}* 喔...........\n* 看起來你為你的蝸牛\n  加油實在太過頭了...',
            "<32>* 現在她... 直接消失了...",
            '<32>* 喔...........'
        ],
        blooksnailX: {
            a: '3...',
            b: '2...',
            c: '1...',
            d: '開始！',
            e: '比賽結束'
        },
        blooksorry1: () => [
            '<32>{#p/napstablook}* ...？',
            "<32>* 你...\n* 你...",
            '<32>* ...你確定嗎？',
            choicer.create('* （你要怎麼回答？）', '我錯了', '沒啥')
        ],
        blooksorry2: () => [
            '<32>{#p/napstablook}* 我...',
            "<32>* 我從沒想過你會...",
            '<32>* ...額...',
            '<32>* ...你真的確定嗎？',
            choicer.create('* （你要怎麼回答？）', '我錯了', '沒啥')
        ],
        blooksorry3: [
            '<32>{#p/napstablook}* 你...',
            "<32>* 你是認真的，不是嗎？",
            '<32>* ...\n* 嘿...',
            '<32>* 好吧...',
            "<32>* 我會忘記你以前做的事的..."
        ],
        blooksorryX: ['<32>{#p/napstablook}* 喔...........\n* ...........\n* ...........'],
        blooksorryY: ['<32>{#p/napstablook}* ...'],
        blooktouch1: () =>
            world.sad_ghost
                ? [
                    '<32>{#p/napstablook}* 你想要什麼...',
                    choicer.create('* （你要怎麼回答？）', '道歉', '放棄')
                ]
                : [
                    '<32>{#p/napstablook}* 喔，你需要什麼嗎？',
                    choicer.create('* （你要怎麼回答？）', '擁抱', '睡覺', '音樂', '放棄')
                ],
        blooktouch2a1: [
            '<32>{#p/napstablook}* 你... 想要...\n* 嗯...',
            '<32>* 你想讓我抱抱你？',
            "<32>* 好...\n* 如果能讓你開心的話...",
            '<32>{#p/basic}* Napstablook試著抱了抱你。',
            '<32>* 它直接穿過了你。',
            '<32>{#p/napstablook}* 喔...........',
            "<32>* 我感覺...........\n* 我做不到..........."
        ],
        blooktouch2a2: [
            "<32>{#p/napstablook}* 你真的想要抱抱，\n  是嗎...",
            "<32>* 抱歉...\n* 我也希望我可以..."
        ],
        blooktouch2b1: [
            '<32>{#p/napstablook}* 你想找個地方睡覺嗎？',
            "<32>* 嗯... 我這裡其實沒有床...",
            '<32>* 嗯...',
            "<32>* 去冰箱看看有沒有吃的...",
            '<32>* 吃完之後，我們就可以\n  在地上躺一躺...',
            "<32>* 你到時候就知道了..."
        ],
        blooktouch2b2: ['<32>{#p/napstablook}* 冰箱...'],
        blooktouch2c1: [
            "<32>{#p/napstablook}* 如果你想聽音樂，\n  我的音響裡有一些...",
            '<32>* 可以隨便聽聽看...\n* 不聽也可以...'
        ],
        blooktouch2c2: () => [
            '<32>{#p/napstablook}* 音響裡的...\n* ...你不喜歡聽嗎...',
            "<32>* 或許...\n* 我可以給你聽一首\n  我還在做的歌曲...",
            "<32>* 跟我平常的風格很不一樣...",
            '<32>* 你想聽聽嗎？',
            choicer.create('* （你要怎麼回答？）', '聽聽看', '算了')
        ],
        blooktouch2c2x: () => [
            '<32>{#p/napstablook}* 想聽我的新歌曲嗎？',
            choicer.create('* （你要怎麼回答？）', '聽聽看', '算了')
        ],
        blooktouch2c3a: ['<32>{#p/napstablook}* 喔...\n* 好吧，如果你改變主意了，\n  請告訴我...'],
        blooktouch2c3b: ['<32>{#p/napstablook}* 好...\n* 讓我播放一下...'],
        blooktouch2c4: () => [
            '<32>{#p/napstablook}* 所以... 你感覺怎麼樣',
            choicer.create('* （你要怎麼回答？）', '好聽', '不好聽')
        ],
        blooktouch2c5a: [
            "<32>{#p/napstablook}* 聽起來... 還不錯？",
            '<32>* 喔-\n* 嗯... 謝謝你...',
            "<32>* 等...\n* 等我做完之後我會告訴你的！"
        ],
        blooktouch2c5b: ["<32>{#p/napstablook}* 喔.........\n* 你應該是對的........."],
        blooktouch2d1: ["<32>{#p/napstablook}* 抱歉...\n* 我現在就剩這些音樂了..."],
        blooktouch2d2: ["<32>{#p/napstablook}* 對不起...\n* 下次我會試著做得更好..."],
        blookyard1: pager.create(
            0,
            () =>
                SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                    ? [
                        '<32>{#p/napstablook}* 你可以留著你的新喵喵玩偶',
                        '<32>{#p/napstablook}* 感謝你...\n* 我想雖然你並沒幫上什麼'
                    ]
                    : 65 <= SAVE.data.n.plot
                        ? SAVE.data.b.a_state_hapstablook
                            ? 68 <= SAVE.data.n.plot
                                ? [
                                    '<32>{#p/napstablook}* 嘿，\n  mettaton剛剛來了一會',
                                    "<32>* 我們聊了一些以前的家常...",
                                    
                                    "<32>* 嗯，我從來都沒有這麼開心過",
                                    '<32>* 你對我們所做的一切...\n  真的意義重大'
                                ]
                                : [
                                    "<32>{#p/napstablook}* 嘿...\n  很抱歉事情並未如我們所願...",
                                    '<32>* 很高興有你在那裡，\n  儘管...'
                                ]
                            : [
                                '<32>{#p/napstablook}* 時間每流逝一點，\n  我離幸福也就更遠一步...'
                            ]
                        : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                            ? ['<32>* 喔...\n* 嘿......', '<32>* 我只是回來看看蝸牛......']
                            : 60 <= SAVE.data.n.plot
                                ? [
                                    "<32>{#p/napstablook}* 我有個夢想就是成為mettaton節目\n  中的一名嘉賓，今天它成真了...",
                                    "<32>* 我不知道還有沒有機會\n  可以讓我再去參加一次"
                                ]
                                : 49 <= SAVE.data.n.plot
                                    ? [
                                        '<32>{#p/napstablook}* 天，你真的跑來跑去的',
                                        '<32>* 我是說...',
                                        '<32>* 其實我也是...',
                                        "<32>* 但是，我是沒有實體的，\n  所以對我來說不算\n  那麼令人印象深刻"
                                    ]
                                    : [
                                        '<32>{#p/napstablook}* 歡迎來到幽靈家族的\n  蝸牛農場...',
                                        "<32>* ...是的。\n* 我是這裡唯一的員工。",
                                        ...(world.killed0
                                            ? [
                                                "<32>* 嘿，這真怪...",
                                                '<32>* 我的蝸牛消失了...',
                                                '<32>* 也許是那個留鬍子的人拿走了...'
                                            ]
                                            : [
                                                '<32>* 這個地方原先生意\n  很紅火的...',
                                                '<32>* 但有一天我們的主顧\n  突然不來了...',
                                                "<32>* 現在只有一個毛茸茸的傢伙\n  會偶爾出現..."
                                            ])
                                    ],
            () =>
                SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                    ? ['<32>{#p/napstablook}* ............']
                    : 65 <= SAVE.data.n.plot
                        ? SAVE.data.b.a_state_hapstablook
                            ? 68 <= SAVE.data.n.plot
                                ? ["<32>{#p/napstablook}* 希望你下次別冒這個險了"]
                                : ['<32>{#p/napstablook}* 這怎麼了...']
                            : ['<32>{#p/napstablook}* 這怎麼了...']
                        : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                            ? ["<33>{#p/napstablook}* 別擔心，他們沒事的...", '<32>* 至少，我是那麼希望的......']
                            : 60 <= SAVE.data.n.plot
                                ? ["<32>{#p/napstablook}* 希望他下次能對其他選手\n  好一點吧........."]
                                : 49 <= SAVE.data.n.plot
                                    ? [
                                        '<32>{#p/napstablook}* 喔對了，我早些時候\n  看到你在達人秀上了...',
                                        ...(SAVE.data.n.state_aerialis_talentfails === 0
                                            ? [
                                                "<32>{#p/napstablook}* 真的太精彩了...\n  你一次都沒搞砸",
                                                "<32>* 我覺得你應該是\n  開天闢地第一個......"
                                            ]
                                            : SAVE.data.n.state_aerialis_talentfails < 15
                                                ? [
                                                    "<32>{#p/napstablook}* 即使你的表現不算完美，\n  你也做得很好",
                                                    "<32>* mettaton的大多數參賽者\n  甚至都沒堅持到一半...",
                                                    '<32>* 包括我......'
                                                ]
                                                : [
                                                    "<32>{#p/napstablook}* 即使你的表現不是最好的，\n  我也能看出你已經盡力了",
                                                    '<32>* 更何況，你堅持到了最後...',
                                                    '<32>* 不像我......'
                                                ])
                                    ]
                                    : world.killed0
                                        ? [
                                            "<32>{#p/napstablook}* 喔...\n* 押韻了，不是嗎...",
                                            '<32>* 我想我可以為此寫首歌...\n  或許吧...'
                                        ]
                                        : [
                                            '<32>{#p/napstablook}* 最近我的一個朋友\n  告訴我那是國王...',
                                            "<32>* 但這不可能是真的\n* 他甚至不認識我..."
                                        ],
            () =>
                SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                    ? ['<32>{#p/napstablook}* ............']
                    : 65 <= SAVE.data.n.plot
                        ? SAVE.data.b.a_state_hapstablook && 68 <= SAVE.data.n.plot
                            ? ['<32>{#p/napstablook}* 我沒話講了...']
                            : ['<32>{#p/napstablook}* 這怎麼了...']
                        : 60 <= SAVE.data.n.plot
                            ? ['<32>{#p/napstablook}* .........']
                            : 49 <= SAVE.data.n.plot
                                ? SAVE.data.n.state_aerialis_talentfails === 0
                                    ? ['<32>{#p/napstablook}* 那麼，恭喜你']
                                    : ['<32>{#p/napstablook}* ......']
                                : ['<32>{#p/napstablook}* 我沒話講了...']
        ),
        boots1: () => [
            '<32>{#p/human}* （你撿到了一雙懸浮靴。）',
            choicer.create('* （穿上懸浮靴嗎？）', '穿上', '算了')
        ],
        boots2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
        bruh: ['<32>{*}{#p/undyne}* 等會見。{^20}{%}'],
        candy1: () =>
            postSIGMA()
                ? ["<32>{#p/basic}* 它不再提供服務了。"]
                : SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* （你走近了自動售貨機。）',
                        choicer.create('* （你想合成什麼呢？）', '甘草糖', '洋芋片', '口糧', '放棄')
                    ]
                    : [
                        '<32>{#p/basic}* 要用這臺機器合成什麼呢？',
                        choicer.create('* （你想合成什麼呢？）', '甘草糖', '洋芋片', '口糧', '放棄')
                    ],
        candy2: ['<32>{#p/human}* （你買了$(x)。）'],
        candy3: () => [choicer.create('* （花$(y)G買份$(x)嗎？）', '買', '不買')],
        candy4: ["<32>{#p/human}* （你的錢不夠。）"],
        candy5: ['<32>{#p/human}* （你決定先不買。）'],
        candy6: ["<32>{#p/human}* （你帶的東西太多了。）"],
        candy7: ['<32>{#p/human}* （你打算什麼也不合成。）'],
        deathReaction: {
            f_bird: ['<32>{#p/basic}* 這隻小鳥再也不想帶你過去了。'],
            
            f_blooky: [
                '<32>{#p/basic}{#npc/a}* 你聽說了Undyne的事嗎？',
                '<32>{#p/basic}{#npc/a}* 喔，完全沒有！',
                "<32>{#p/basic}{#npc/a}* 我聽說她現在很好。",
                '<32>{#p/basic}{#npc/a}* 這可真不錯！',
                '<32>{#p/basic}{#npc/a}* Undyne永遠不朽。',
                '<32>{#p/basic}{#npc/a}* 肯定不是！'
            ],
            f_dummy: [
                '<32>{#p/basic}{#npc/a}* 檢測到強烈的能量訊號。',
                '<32>* 姓名... Undyne。',
                '<32>* 關係狀態... 「摯友！！！」',
                '<32>* 上次互動... 詢問了關於人類的資訊。',
                '<32>* 彌補損失所需時間...',
                '<32>* 無法估量。'
            ],
            f_hub: [
                "<32>{#p/basic}{#npc/a}* 什...\n* 你都幹了什麼！？",
                "<32>* 老Gerson再也不會開心了..."
            ],
            f_snail: () => [
                '<32>{#p/basic}* ...',
                SAVE.data.b.f_state_thundersnail_win
                    ? "<32>* 下一局雷霆蝸牛\n  我可絕對不會讓你贏了。"
                    : "<32>* 我絕對不會讓你\n  再贏雷霆蝸牛了。"
            ],
            f_undyne: [
                '<32>{#p/basic}* 不。\n* 不！\n* 不！！！',
                '<32>* 你。都。幹了。什麼？？？',
                '<32>* 她...',
                '<32>* 她是我最愛的惡霸！\n* 你為什麼要將她\n  從我身邊帶走！？'
            ]
        },
        dummy1x: () =>
            SAVE.data.b.flirt_maddummy
                ? [
                    SAVE.data.n.state_wastelands_dummy === 4
                        ? "<32>{#p/basic}* 呸！\n* 你比我想得還要差勁！！"
                        : '<32>{#p/basic}* 呸！\n* 你到底有多差勁！',
                    '<32>* 你居然擁抱了一個\n  患有接觸恐懼症的人偶...',
                    '<32>* 而且你做這事的方式！？',
                    '<32>* 噁心。\n* 噁心！\n* 噁心！！！！'
                ]
                : SAVE.data.n.state_wastelands_dummy === 4
                    ? [
                        '<32>{#p/basic}* 呸！\n* 我就知道你會那麼做！！',
                        '<32>* 多麼愚蠢！！！\n* 你只是擁抱了一個\n  患有接觸恐懼症的人偶！！！！',
                        "<32>* 天吶，你會付出代價的！"
                    ]
                    : [
                        '<32>{#p/basic}* 呸！\n* 你為什麼那麼做！？',
                        "<32>* 你知道我是誰嗎！？！？\n* 你剛才抱的那個人\n  可是有接觸恐懼症的！！！！",
                        "<32>* 天吶，你會付出代價的！"
                    ],
        dummy1a: () =>
            SAVE.data.n.state_wastelands_dummy === 2
                ? ["<32>{#p/basic}* 呵。\n* 我就知道，你這懦夫\n  看到我指定得逃。", '<32>* 是不是啊，笨蛋？']
                : ['<32>{#p/basic}* 放肆！\n* 闖進我的地盤，\n  還把我當空氣？', '<32>* 真是蠢到極點！'],
        dummy1b: () =>
            SAVE.data.n.state_wastelands_dummy === 1
                ? ['<32>{#p/basic}* 看到我，嚇破膽了？', '<32>* 你也就這點本事。']
                : ['<32>{#p/basic}* 放肆！\n* 闖進我的地盤，\n  還跟我大眼瞪小眼？', '<32>* 真是蠢到極點！'],
        dummy1c: () =>
            SAVE.data.n.state_wastelands_dummy === 1
                ? ['<32>{#p/basic}* 我就知道，\n  不揍我兩下你心都痒痒。', '<32>* 迂腐。\n* 迂腐！\n* 迂腐！！！']
                : [
                    "<32>{#p/basic}* 哎呀，看來你來這\n  可不只是想聊聊天。",
                    "<32>* 不過，你那點小把戲\n  在我這屁用沒有！\n* 看我不揍死你！"
                ],
        dummy2: () => [
            '<32>{#p/basic}* 那群飯桶沒殺了你，\n  因為他們少一樣看家本領-\n  沒！有！實！體！',
            "<32>* 沒錯，人類！\n* 有了這個，我就能\n  所向披靡，天下無敵！",
            '<32>* 我是一隻住在人偶裡的幽靈！',
            '<32>* 我的表親以前也住在一個人偶裡，\n  直到...！',
            ...(SAVE.data.n.state_wastelands_toriel === 0
                ? [
                    '<32>* 直到...！',
                    '<32>* 直到...',
                    '<32>{#x1}* ...呃，其實它是自己離開的...',
                    '<32>* 肯定是那位善良的女士\n  在外域給它找到了新家，\n  貼心照顧著它。',
                    '<32>* 我的表親說，\n  有個人類讓那位女士感到幸福。',
                    "<32>* 那個人類就是你，對吧？",
                    '<32>* ...該死。\n* 你走吧，我不打你了...'
                ]
                : [
                    '<32>* 直到你出現為止！！！',
                    ...(16 <= SAVE.data.n.kills_wastelands
                        ? [
                            '<32>* 你的所作所為\n  不光害它離開了自己的家...',
                            '<32>* 還把它的鄰居全嚇跑了！',
                            '<32>* 可惡。\n* 可惡！\n* 可惡！！！',
                            "<32>{#x1}* 你個敗類，人渣，廢物！\n* 我快要氣死了啊啊啊！！！",
                            '<32>* 呀啊啊啊啊啊啊！！！\n* 我的人偶能量快要爆發了！！！'
                        ]
                        : SAVE.data.n.state_wastelands_dummy === 3
                            ? [
                                '<32>* 你... 你...',
                                '<32>* 該死，你這人無聊透頂！',
                                '<32>* 它就像任何有自尊的幽靈那樣，\n  生氣得飛走了。',
                                '<32>* 那好吧。\n* 那好吧！\n* 那好吧！！',
                                "<32>* 我看我只能自娛自樂了！",
                                "<32>* 系好安全帶瞌睡蟲！\n* 現在是表演時間！"
                            ]
                            : SAVE.data.n.state_wastelands_dummy === 4
                                ? [
                                    '<32>* 你... 你...',
                                    '<32>* 該死，喜歡當老好人是吧？',
                                    '<32>* 自己當老好人不要緊，\n  還讓我表親染上抱癮，\n  總想擁抱，戒不掉了！！！',
                                    '<32>* 它丟掉了原本的身體，\n  每次發作時，就找我發洩自己的欲望。',
                                    "<32>* 它明知道我患有接觸恐懼症，\n  還瘋了似的騷擾我。\n  我快被它煩死了！！！",
                                    "<32>* 人類，我要讓你付出代價！"
                                ]
                                : [
                                    ...(SAVE.data.n.state_wastelands_dummy === 0
                                        ? [
                                            '<32>* 當你和它聊天的時候，\n  它本來希望能好好聊聊...',
                                            '<32>* 但看看你都說了些什麼...！',
                                            '<32>* 真是可怕。\n* 叫人震驚！\n* 難以置信！',
                                            '<32>* 你把他從人偶裡\n  嚇了出來！',
                                            '<32>* 呃啊啊...'
                                        ]
                                        : SAVE.data.n.state_wastelands_dummy === 1
                                            ? [
                                                '<32>* 我們幽靈用一生時間來\n  尋找一個合適的容器。',
                                                '<32>* 漸漸地，漸漸地，我們和\n  新身體的聯繫越來越近，\n  直到有一天...',
                                                '<32>* 我們就可以變成有形的存在，\n  像其他人一樣，歡笑，戀愛，舞蹈。',
                                                "<32>* 但是你呢！！！\n* 我的表親的未來...\n* 你把它給毀了！",
                                                '<32>* 呃啊啊啊啊啊啊！！！'
                                            ]
                                            : SAVE.data.n.state_wastelands_dummy === 2
                                                ? [
                                                    '<32>* 它一直羞於見人。\n* 自己孤獨地住在外域...',
                                                    '<32>* 然後它遇到了你，\n  希望你跟它交流。',
                                                    '<32>* 但你沒有！\n* 你逃跑了！',
                                                    '<32>* 可悲。\n* 可悲！\n* 可悲！！！',
                                                    "<32>* 沒人能傷了我表親的心\n  還能全身而退！"
                                                ]
                                                : SAVE.data.n.state_wastelands_dummy === 5
                                                    ? [
                                                        '<32>* 你出現的時候，它多麼希望\n  你能跟他聊聊...',
                                                        '<32>* 但你卻給了它一巴掌！',
                                                        '<32>* 再一。\n* 再二。',
                                                        '<32>* 再三就過分了！！',
                                                        '<32>* 你這人怎麼這麼壞！？'
                                                    ]
                                                    : SAVE.data.n.state_wastelands_dummy === 6
                                                        ? [
                                                            '<32>* 我表親明明是個很好的人。',
                                                            "<32>* 但這不意味著你可以跟它調情！",
                                                            '<32>* 你那愚蠢的舉動嚇到了它...',
                                                            "<32>* ...以至於它根本承受不住了！！",
                                                            '<32>* 令人作嘔。\n* 令人作嘔！\n* 令人作嘔！！！'
                                                        ]
                                                        : []),
                                    "<32>* 你會為此而死的，人類！！！！"
                                ])
                ])
        ],
        dummy3: [
            '<32>{#p/basic}* ...？',
            '<32>* 這...\n* 這種感覺...？',
            '<32>{#x3}* 明白了。\n* 明白了！\n* 明白了！！！',
            '<32>* 人類。\n* 剛剛我那徹底失控的情緒...',
            '<32>* 讓我終於可以完美地\n  和我的身體融為一體啦！',
            "<32>* 我是有血有肉的存在了！\n* 我... 我不是在做夢吧？\n* 這是真的嗎？？？",
            "<32>* 作為報答，\n  我不會再攻擊你啦。",
            "<32>* 怎麼樣？"
        ],
        dummy4: (mover: boolean) => [
            ...(mover
                ? [
                    SAVE.data.n.state_foundry_maddummy === 1
                        ? '<32>{#p/napstablook}* 嘿...\n* 我好像聽到有人被襲擊了...'
                        : '<32>{#p/napstablook}* 嘿...\n* 我好像聽到了有人在喊叫...',
                    "<32>{#p/napstablook}* 但你似乎沒事",
                    '<32>* 其實我正準備回家...'
                ]
                : ["<32>{#p/napstablook}* 嗯...\n* 我現在要回家了..."]),
            ...(world.sad_ghost || world.population === 0
                ? [
                    '<32>* 提醒你一下...',
                    "<32>* 別不小心跟我一起回到家了...",
                    "<32>* 反正你大概也不想來..."
                ]
                : [
                    '<32>* 所以... 嗯...\n* 如果你想「附」約的話...\n  隨時都可以...',
                    '<32>* 但別有壓力...',
                    "<32>* 如果你忙，我能理解...",
                    "<32>* 沒關係的...",
                    '<32>* 不用擔心...',
                    "<32>* 只是想說我先邀請一下..."
                ])
        ],
        dummypunch1: () =>
            SAVE.data.b.oops
                ? [
                    "<32>{#p/basic}* 一個訓練人偶。\n* 教訓教訓它嗎？",
                    choicer.create('* （動手嗎？）', '動手', '算了')
                ]
                : ["<32>{#p/basic}* 一個訓練人偶。\n* 抱抱它嗎？", choicer.create('* （抱一下人偶嗎？）', '抱一下', '算了')],
        dummypunch2a: ['<32>{#p/human}* （你打算不這麼做。）'],
        dummypunch2b: () =>
            world.genocide || world.meanie
                ? ['<32>{#p/human}* （你使勁揍了人偶一拳。）']
                : SAVE.data.n.exp > 0
                    ? ['<32>{#p/human}* （你給人偶來了一拳。）']
                    : SAVE.data.b.oops
                        ? ['<32>{#p/human}* （...你只是戳了戳人偶。）']
                        : SAVE.data.b.flirt_maddummy
                            ? ['<32>{#p/human}* (你溫柔地抱了抱人偶。）']
                            : ['<32>{#p/human}* （你抱了抱人偶。）'],
        dummypunch3: () =>
            SAVE.data.b.f_state_dummypunch
                ? ["<32>{#p/basic}* 人偶被你教訓了一頓。"]
                : SAVE.data.b.flirt_maddummy
                    ? ["<32>{#p/basic}* 這是一個臉紅的抱抱人偶。"]
                    : ["<32>{#p/basic}* 一個很開心的抱抱人偶。"],
        epicreaction: () =>
            [
                ['<25>{#p/kidd}{#f/7}* 啥玩意啊！？'],
                ['<25>{#p/kidd}{#f/7}* 呃啊！！'],
                ['<25>{#p/kidd}{#f/7}* 別再來了啊！'],
                ['<25>{#p/kidd}{#f/7}* Undyne埋了多少這玩意啊！'],
                ['<25>{#p/kidd}{#f/7}* 認真的嗎！？'],
                ['<25>{#p/kidd}{#f/7}* 天啊！！'],
                ["<25>{#p/kidd}{#f/4}* 我們得快點逃出去..."],
                ['<25>{#p/kidd}{#f/4}* ...']
            ][Math.min(SAVE.data.n.state_foundry_kiddreaction++, 7)],
        fallenfish: ['<33>{#p/basic}* 電流擊穿了她的身體。'],
        fallenfish2: ["<32>{#p/basic}* 她隕落了。"],
        fallenfish3: ['<32>{#p/basic}* ...但是什麼也沒發生。'],
        finalfish1: ['<25>{#p/undyne}{#f/19}* 嘎啊...'],
        finalfish2: ['<25>{#p/undyne}{#f/19}* 該死的...\n* 幹擾...'],
        finalpre: () => [choicer.create('* （前往空境嗎？）', '出發', '再等等')],
        genotext: {
            asgoreFinal1: () =>
                SAVE.flag.n.genocide_milestone < 5
                    ? SAVE.flag.n.ga_asrielStutter < 1
                        ? [
                            '<25>{#p/asgore}{#f/15}* 看來，\n  你還是跟他一夥了啊...',
                            '<25>{#p/asriel2}{#f/7}* 誰都沒法把我\n  和$(name)分開。\n* 您不會連這都不知道吧？',
                            '<25>{#p/asgore}{#f/15}* $(name)...\n  我-我當然知道啊！',
'<25>{#p/asgore}{#f/15}* 那... 你-你倆旁邊的小孩\n  又是怎麼回事？',
                            "<25>{#p/asriel2}{#f/8}* 關你屁事。",
                            "<25>{#p/asgore}{#f/15}* （呃... 早該料到的...）",
                            "<25>{#p/asriel2}{#f/6}* 算了，簡單來說呢...\n* 我正帶它「四處遊歷」呢。",
                            "<25>{#f/6}* 遊歷小分隊只有我們仨，\n  沒人帶你玩。\n* 意不意外？",
                            '<25>{#p/asgore}{#f/15}* 誰-誰稀罕加入你們了？？',
                            '<25>{#p/asriel2}{#f/6}* 還裝呢？',
                            "<25>{#p/asgore}{#f/15}* 呃...\n  我就是來看一眼你們在幹啥。\n* 沒別的想法。",
                            "<26>{#p/asriel2}{#f/10}{#x1}* ...\n* 不對勁。",
                            '<25>{#p/asriel2}{#f/10}* Alphys博士？\n* ...是你吧？'
                        ]
                        : [
                            '<25>{#p/asgore}{#f/15}* 看來，\n  你還是跟他一夥了啊...',
                            '<25>{#p/asriel2}{#f/8}* 誰都沒法把我\n  和$(name)分開，\n  ALPHYS。',
                            "<25>{#p/asriel2}{#f/7}* 不過，我再怎麼跟你解釋，\n  都是對牛彈琴。\n* 你說是不？"
                        ]
                    : [
                        '<25>{#p/asgore}{#f/15}* 看來，\n  你還是跟他一夥了啊...',
                        '<25>{#p/asriel2}{#f/8}* 誰都沒法把我\n  和$(name)分開，\n  ALPHYS。',
                        ...(SAVE.flag.n.ga_asrielQuestion < 1
                            ? ["<25>{#p/asriel2}{#f/7}* 你都準備好要殺我們了呢。\n* 別以為我不知道。"]
                            : ['<25>{#p/asriel2}{#f/7}* 真以為你能阻止我們？'])
                    ],
            asgoreFinal2: () =>
                SAVE.flag.n.genocide_milestone < 5
                    ? [
                        '<25>{#p/alphys}{#g/alphysThatSucks}* ...騙不過你，嗯？',
                        '<25>{#p/asriel2}{#f/3}* 是呢。',
                        "<25>{#p/alphys}{#g/alphysGarbo}* ...\n* 起碼說了句實話。",
                        '<25>{#p/asriel2}{#f/13}* 看著好友死去，\n  你肯定急瘋了...',
                        "<25>{#p/asriel2}{#f/16}* 沒法和你感同身受呢。",
                        '<25>{#p/alphys}{#g/alphysIDK}* ...',
                        '<25>{#p/alphys}{#g/alphysNeutralSweat}* ...',
                        '<25>{#p/alphys}{#g/alphysNeutralSweat}* 真-真不該來這裡。',
                        "<25>{|}{#p/asriel2}{#f/8}* 你不會又想- {%}"
                    ]
                    : [
                        '<25>{#p/alphys}{#g/alphysOhGodNo}* 你說什麼？',
                        "<25>* 我...\n* 我-我哪敢對付你們啊！",
                        ...(SAVE.flag.n.ga_asrielQuestion < 1
                            ? ['<25>{#p/asriel2}{#f/10}* ...是嗎？', '<25>{#p/alphys}{#g/alphysIDK}* ...']
                            : ['<25>{#p/asriel2}{#f/7}* ...']),
                        '<25>{#p/alphys}{#g/alphysNeutralSweat}* ...',
                        '<25>{#p/alphys}{#g/alphysNeutralSweat}* 真-真不該來這裡。'
                    ],
            asgoreFinal3: () =>
                SAVE.flag.n.genocide_milestone < 5
                    ? ['<25>{#p/asriel2}{#f/7}* 真是個膽小鬼。']
                    : [
                        ["<25>{#p/asriel2}{#f/15}* 呵... 把話說早了。"],
                        ['<25>{#p/asriel2}{#f/15}* 行吧。']
                    ][Math.min(SAVE.flag.n.ga_asrielQuestion++, 1)],
            asgoreMK1: [
                '<25>{#p/kidd}{#f/7}* 哇，那是...\n  我在做夢吧...',
                "<25>{#f/1}* 真的是國王欸！",
                '<25>* Asgore國王！\n* 您來這做啥呢！？',
                '<25>{#p/asgore}{#f/3}* ...',
                '<25>{#f/3}* 這事... 說來話長啊。',
                '<25>{#p/kidd}{#f/4}* 噢...',
                '<25>{#f/1}* 沒事，您跟我說說吧！',
                '<25>{#p/asgore}{#f/7}* 呃...\n* 對不起，我不能說。',
                '<25>{#f/6}* 不過，我有個事想問你。',
                '<25>{#p/kidd}{#f/3}* ...？',
                '<25>{#p/asgore}{#f/7}* 這個人類是你的好朋友嗎？',
                '<25>{#p/kidd}{#f/1}* 嗯... 對呀！',
                '<25>{#f/4}* 可是，之前跟我們在一塊的\n  另一個小孩...',
                "<25>{#f/8}* ...我很害怕他。",
                "<25>{#p/asgore}{#f/1}* 看來就是他了。\n* 都是因為他...",
                '<25>{#p/kidd}{#f/4}* 怎麼了？',
                '<25>{#p/asgore}{#f/6}* 呃... 沒事。\n* 我不該拿這事打攪你的。',
                '<25>{#f/3}* 而你，人類...',
                '<25>{#f/2}* 你和離開的那位「朋友」\n  闖了不少禍。',
                '<25>{#f/1}* 許許多多怪物都...\n  哎，你知道我要說什麼。',
                '<25>{#p/kidd}{#f/4}* ...到底怎麼了？',
                '<25>{#p/asgore}{#f/7}* 沒事，沒事。\n* 我只是覺得...',
                '<25>{#f/5}* 相比... 我剛說的，\n  你還可以做點更有意義的事。',
                '<25>{#f/5}* 說不上來為什麼，不過...\n  也許Papyrus沒說錯。',
                '<25>{#f/6}* 既然你的「朋友」\n  已經拋下了你...',
                '<25>* 那你就有機會重新來過了。',
                "<25>{#p/kidd}{#f/1}* 我會幫忙的！",
                '<25>{#p/asgore}{#f/6}* 哈哈，小傢伙，\n  說不定你真能幫上忙。\n* 真說不定呢。',
                '<25>{#f/5}* 我們上次見面之後，\n  我就努力在想...\n  這一切究竟是怎麼回事。',
                '<25>{#f/2}* 真的不想承認，可...\n* 他實在陷得太深了。',
                '<25>{#f/2}* 我的兒子...\n  再也回不來了。',
                "<25>{#p/kidd}{#f/4}* 你們聊吧，我先不插嘴了...",
                '<25>{#p/asgore}{#f/1}* 沒關係，沒關係。\n  我快說完了。',
                '<25>{#f/1}* 人類，我剛說的話\n  往心裡去吧。',
                '<25>{#f/1}* 這我唯一的請求了。'
            ],
            asgoreMK2: [
                "<25>{#p/kidd}{#f/2}* 哇... 他好厲害！",
                "<25>{#f/1}* 之前聽別人說過國王的演講。\n  但親眼見到，真的酷斃了！",
                '<25>{#f/3}* 他要是我爹該多好啊...'
            ],
            asriel32: [
                '<25>{#p/asgore}{#f/15}* ...',
                '<25>{#f/16}* 看來我的話\n  你一個字都沒聽進去。',
                '<25>{#p/asriel2}{#f/3}* 那肯定的。',
                '<25>{#p/asgore}{#f/1}* ...',
                '<25>{#f/16}* 你知道嗎...\n  有件事一直困擾著我。',
                '<25>{#f/16}* 現在你不認我這個爹，\n  可你就是我的兒子啊...',
                '<25>{#f/15}* 儘管那是很久以前的事了。',
                '<25>{#p/asriel2}{#f/10}* 你到底想說啥？',
                '<25>{#p/asgore}{#f/12}* ...',
                '<25>{#p/asgore}{#f/12}* 唉... 究竟怎麼了？',
                '<25>{#f/12}* 為什麼...\n  我面前的這個你...\n  看著這麼陌生？',
                '<26>{#p/asriel2}{#f/6}* 你真想知道嗎？',
                '<26>{#p/asgore}{#f/7}* ...',
                '<26>{#p/asriel2}{#f/7}* 說實話。',
                '<26>{#p/asgore}{#f/1}* ...\n* 呃，不...\n* 我不太確定...',
                "<26>{#p/asriel2}{#f/8}* 切。\n* 這慫樣，才像我認識的\n  Asgore嘛。",
                "<26>{#f/6}* 只會裝作啥~事兒\n  都沒有的樣子。\n* 我說得沒錯吧？",
                "<26>{#f/7}* 老東西，你猜怎麼著？\n* 現在想亡羊補牢，已經晚嘍。",
                "<26>{#f/8}* （要不是你拿這該死的\n  全息影像糊弄我，現在就可以\n  好好「開導開導」你。）",
                '<26>{#p/asgore}{#f/12}* ...',
                '<26>{#p/asriel2}{#f/8}* ...',
                '<26>{#p/asgore}{#f/15}* 你知道嗎？我常常在想...\n  自己為何淪落到如此地步。',
                '<25>{#f/16}* 家園被毀，愛子離去，\n  只能被束縛在\n  這片土地之上...',
                '<25>{#f/15}* 如今，前哨站危在旦夕，\n  我卻只能眼睜睜地看著。',
                "<25>{#p/asriel2}{#f/15}* 您老這是在向我尋求\n  獨到見解嗎？\n* 真是可悲...",
                '<25>{#f/16}* 就讓我給你個小小的忠告吧：\n* 下輩子，別再挑起戰爭了。',
                '<25>{#p/asgore}{#f/2}* ...',
                '<25>{#f/4}* 你...',
                '<25>{#f/2}* ...',
                '<25>{#f/6}* Asriel，你猜怎麼著？\n* 我想通了。',
                "<25>{#f/7}* 你說的都對。",
                '<25>{#f/5}* 跟你講理，完全是浪費時間。',
                "<25>{#p/asriel2}{#f/15}* ...哇。\n* 您可終於開竅了。",
                '<25>{#f/16}* 真令我刮目相看啊。',
                '<25>{#p/asgore}{#f/1}* ...',
                "<25>{#p/asriel2}{#f/10}* 然後呢？\n* 這位英明的國王\n  要怎麼行動呢？",
                '<25>{#p/asgore}{#f/15}* 你認真的？',
                '<25>{#f/15}* ...',
                '<25>{#f/16}* 我不知道，Asriel。'
            ],
            asriel33: ['<25>{#p/asriel2}{#f/10}* ...他這是要發火了？'],
            
            asriel34: [
                "<25>{#p/asriel2}{#f/3}* 我去處理點事，\n  你倆先作個伴。",
                '<25>{#p/kidd}{#f/3}* 你一會還回來嗎？\n* 還想聽你講更多\n  Undyne的軼事呢...',
                "<25>{#p/asriel2}{#f/4}* 說到做到。",
                "<25>{#f/1}* 別擔心，我去去就回。",
                '<25>{#p/kidd}{#f/4}* 好吧...'
            ],
            asriel34x: ['<25>{#p/asriel2}{#f/3}* 停一下。'],
            asriel35: () =>
                SAVE.flag.n.undying > 0
                    ? [
                        [
                            '<25>{#p/asriel2}{#f/6}* 啊，我們又回來了\n  $(name)。',
                            "<25>{#f/7}* ...聽著，\n  我們知道Undyne不會死在\n  那孩子的偷襲下。",
                            "<25>{#f/15}* 依我來看，這條道路\n  在我們最好的前進計畫中。",
                            "<25>{#f/16}* 讓我們堅持下去，好嗎？"
                        ],
                        []
                    ][Math.min(SAVE.flag.n.ga_asrielUndying++, 1)]
                    : [
                        [
                            '<25>{#p/asriel2}{#f/1}* 哈囉，$(name)。',
                            '<25>{#f/13}* 想我了沒？',
                            '<25>{#f/4}* 唉，對不起。\n* 剛才我有事要辦，\n  又把你扔下了。',
                            "<25>{#f/3}* 不過，我可沒閒著。",
                            "<25>{#f/13}* $(name)，\n  我看到你那小夥伴\n  和你告別...",
                            '<25>{#f/16}* 你肯定感覺老~孤單了。\n  對不對？所以呢...'
                        ],
                        []
                    ][Math.min(SAVE.flag.n.ga_asriel35++, 1)],
            asriel37: () => [
                '<25>{#p/asriel2}{#f/1}* 我又把它請回來了！',
                "<25>{#f/17}* 我讓你做啥，你就做啥。\n  聽見沒有？",
                '<25>{#p/kidd}{#f/9}* 嗯...'
            ],
            asriel38: () => [
                ...[
                    [
                        
                        '<25>{#p/asriel2}{#f/17}* 瞧，不錯吧？',
                        "<25>{#f/16}* 跟你說，\n  為了讓它能服服帖帖的，\n  我費了好大功夫呢！",
                        ...(SAVE.data.n.state_foundry_muffet === 1
                            ? [
                                '<25>{#f/15}* 那崽子嘴裡一直叨咕\n  「忘了我忘了我」，沒完沒了...',
                                '<25>{#f/10}* 天吶，$(name)。\n* 我不在的時候，\n  你對它幹了些什麼啊？'
                            ]
                            : [
                                "<25>{#f/15}* 那崽子沒完沒了地問\n  「我的朋友在哪」...",
                                '<25>{#f/10}* 天吶，$(name)。\n* 我不在的時候，\n  你倆一起幹了些啥啊？'
                            ]),
                        "<25>{#f/3}* 呃，當我沒問。\n* 過去的就翻篇吧。重要的是，\n  它又能「陪」著咱們了。"
                    ],
                    ["<25>{#p/asriel2}{#f/3}* 唔...\n  最起碼把它搞定了。"]
                ][Math.min(SAVE.flag.n.ga_asriel38++, 1)]
            ],
            asriel39: [
                '<25>{#p/asriel2}{#f/8}* 停。\n* 小崽子，幫個忙。',
                '<25>{#p/kidd}{#f/9}* ...？',
                '<25>{#p/asriel2}{#f/6}* 解開謎題。'
            ],
            asriel40: () =>
                SAVE.flag.n.ga_asriel40++ < 1
                    ? [
                        '<25>{#p/asriel2}{#f/10}* 完活了？\n* 真快啊...',
                        '<25>{#f/3}* $(name)，你瞧：\n  優柔寡斷，磨磨嘰嘰\n  就是怪物的劣根性。',
                        '<25>{#f/16}* 什麼希望，恐懼，同理心...\n* 那群怪物就是被這毀了，\n  最後一個個都一事無成。',
                        "<25>{#f/15}* 要是怪物們都能像\n  這崽子一樣說一不二，\n  那該多好啊。"
                    ]
                    : ['<25>{#p/asriel2}{#f/4}* 擱這照葫蘆畫瓢呢。'],
            asriel41: ['<25>{#p/asriel2}{#f/3}* 小崽子，回來。'],
            asriel42: ["<25>{#p/asriel2}{#f/4}* 只要有了這崽子，\n  完成計畫簡直不要太簡單。"],
            asriel43: () =>
                [
                    [
                        "<25>{#p/asriel2}{#f/16}* 結束了...",
                        "<25>{#f/3}* $(name)，我們贏了。",
                        '<25>{#f/2}* 總算解決掉了\n  皇家衛隊的隊長...',
                        '<25>{#f/15}* 她不會真覺得\n  自己能幹得過咱們吧？',
                        SAVE.flag.n.undying > 2
                            ? '<25>{#f/8}* 誠然，\n  她逼咱們回溯了好幾次...'
                            : SAVE.flag.n.undying > 1
                                ? '<25>{#f/8}* 誠然，\n  她逼咱們回溯了一次...'
                                : '<25>{#f/8}* 誠然，她夠英勇。\n  敢和我們對著幹...',
                        '<25>{#f/7}* 但她再怎麼逞強，\n  終究也難逃厄運。'
                    ],
                    [
                        '<25>{#p/asriel2}{#f/3}* ...這次雖然勝了，\n  但沒第一回爽。',
                        '<25>{#f/4}* 唉，好吧。'
                    ],
                    ['<25>{#p/asriel2}{#f/6}* 殺她都快成咱們的\n  家常便飯了。'],
                    ['<25>{#p/asriel2}{#f/6}* ...']
                ][Math.min(SAVE.flag.n.ga_asriel43++, 3)],
            asriel44: ['<25>{#p/asriel2}{#f/13}* 呃，$(name)，\n  你來帶路吧。'],
            asriel45: [
                '<25>{#p/asriel2}{#f/13}* 嘻嘻嘻...{%40}',
                "<25>{#f/16}* 有你幫助我，真是太好了。{%40}",
                "<25>{#f/1}* 這身體確實不完美，\n  但那又怎樣？{%40}",
                "<25>{#f/2}* 有了它...\n  我就再也不用當\n  會說話的蠢星星了。{%40}"
            ],
            asrielHug1: ['<25>{#p/asriel2}{#f/13}* ...'],
            asrielHug2: ['<25>{*}{#p/asriel2}{#f/13}* $(name)...{^100}{%}'],
            asrielHug3: ['<25>{#p/asriel2}{#f/13}* 呃...\n* 謝謝你，$(name)。'],
            bombshell1: [
                '<32>{*}{#p/alphys}* 會說話的... 星星...？',
                '<32>{*}* 但那個實驗...\n  不-不是失敗了嗎...',
                '<32>{*}* 莫非...'
            ],
            bombshell2: ['<32>{*}* 不...', '<32>{*}{@random=1.1/1.1}* 不...'],
            bombshell3: [
                '<32>{*}{@random=1.1/1.1}* Toriel...\n* Sans...\n* Papyrus...',
                '<32>{*}{@random=1.1/1.1}* Undyne...',
                "<32>{*}{@random=1.1/1.1}* 是-是我...",
                
            ],
            bombshell4: ["<32>{*}{@random=1.1/1.1}{#i/5}* 是我害死了你們..."],
            kidd1: [
                '<25>{#p/kidd}{#f/4}* 他叫你什麼來著？\n* $(name)... 是吧？',
                '<25>{#f/3}* 好，$(name)。\n  這話可別告訴他喔。',
                '<25>{#f/4}* 跟他在一塊...\n  我覺得很不自在。'
            ],
            kiddFinal1: [
                '<25>{#p/kidd}{#f/11}* ...！',
                "<25>{#p/asriel2}{#f/5}* 我懂，我懂。\n* 很興奮，是不是呀？",
                '<25>{#p/kidd}{#f/9}* ...',
                "<25>{|}{#f/12}* 我沒有- {%}",
                "<25>{#p/asriel2}{#f/4}* 不用說了。\n* 沒關係的。",
                '<25>{#p/asriel2}{#f/3}* 別把正事給忘了就行。'
            ],
            kiddFinal2: () => [
                '<25>{#p/kidd}{#f/9}* Undyne...',
                '<25>{#p/asriel2}{#f/10}* ...？',
                '<25>{#f/6}* 嗯...\n* 不敢了，是不是？',
                "<25>{|}{#p/kidd}{#f/12}* 對不起，我- {%}",
                "<25>{#p/asriel2}{#f/13}* 什麼「Undyne」，\n  「安呆因」...\n* 就她還配叫「英雄」？",
                '<25>{#p/asriel2}{#f/4}* 真英雄...\n  都是靠智慧取勝的。',
                SAVE.flag.n.genocide_milestone < 5
                    ? SAVE.flag.n.ga_asrielKiddFinal1++ < 1
                        ? '<26>{#f/15}* 比如...\n* 呃，總之不是她。'
                        : '<25>{#f/15}* 她可算不上。'
                    : '<26>{#f/3}* 比如Alphys。',
                '<25>{#p/kidd}{#f/12}* 她... 真的...'
            ],
            kiddFinal3: () => [
                '<25>{#p/kidd}{#f/10}* ...',
                "<25>{#f/10}* Undyne不會死。",
                '<25>* 即使我動手，她...',
                "<25>* 她也不會死。\n* 她多強啊...",
                ...(SAVE.flag.n.ga_asrielKiddFinal3a < 1
                    ? ['<25>{#p/asriel2}{#f/8}* （吹，隨便吹。）\n* （你高興就好。）']
                    : []),
                "<25>{#p/kidd}{#f/9}* 因為...\n* 她... 是最強的...",
                "<25>{#f/12}* 她充滿了{@fill=#ff0}決心{@fill=#fff}...",
                ...(SAVE.flag.n.ga_asrielKiddFinal3a++ < 1
                    ? ['<25>{#p/asriel2}{#f/10}* 呃... 你沒事吧？\n* （我去，這崽子說什麼呢？）']
                    : SAVE.flag.n.undying > 0 && SAVE.flag.n.ga_asrielKiddFinal3b++ < 1
                        ? ['<25>{#p/asriel2}{#f/8}* （它怎麼知道？）']
                        : ['<25>{#p/asriel2}{#f/10}* ...'])
            ],
            kiddFinal4: ['<32>{#p/asriel2}{#f/6}* 她在那。'],
            kiddFinal5: ['<32>{#f/6}* 崽子。', '<32>{#f/7}* ...'],
            kiddFinal6: ['<32>{*}{#p/asriel2}{#f/14}{@random=1.1/1.1}{@fill=#f00}* 給我上。{%100}'],
            kiddFinal7: [
                '<25>{#p/kidd}{#f/12}* ...',
                '<25>{#p/undyne}{#f/13}* 你這毛孩子，\n  來這湊什麼熱鬧？！',
                '<25>{|}{#f/13}* 還有，你眼睛怎麼- {%}'
            ]
        },
        goatreaction: () =>
            [
                ['<25>{#p/asriel2}{#f/15}* 小心點，$(name)。'],
                ['<25>{#p/asriel2}{#f/15}* $(name)...'],
                ['<25>{#p/asriel2}{#f/15}* 開玩笑嗎？'],
                ["<25>{#p/asriel2}{#f/15}* 我們可不想死在這，\n  $(name)..."],
                ["<25>{#p/asriel2}{#f/16}* 我有點擔心了。"],
                ['<25>{#p/asriel2}{#f/8}* 你是眼瞎還是有什麼毛病？'],
                ['<25>{#p/asriel2}{#f/7}* 別鬧了！'],
                ['<25>{#p/asriel2}{#f/7}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielEpic++, 7)],
        hapstadoor1: () =>
            SAVE.data.b.svr ? ["<32>{#p/human}* （但你沒鑰匙。）"] : ["<32>{#p/basic}* 鎖住了。"],
        hapstadoor2: ['<32>{#p/human}* （你用神秘鑰匙打開了門。）'],
        jumpsuit1: () => [
            '<32>{#p/human}* （你撿到了一件飛行服。）',
            choicer.create('* （穿上飛行服嗎？）', '穿上', '算了')
        ],
        jumpsuit2: ["<32>{#p/human}* （你帶的東西太多，裝不下它了。）"],
        kiddStatue: [
            '<25>{#p/kidd}{#f/1}* 喲，我記得這個地方！',
            '<25>{#f/3}* 我，呃，我媽媽帶我\n  來過一次，哈哈。',
            "<25>{#f/1}* 如果我們一人站在一邊的\n  開關上，燈就會亮起來。\n* 很厲害吧！？"
        ],
        kitchencall: () => [
            '<32>{#p/event}* 鈴鈴，鈴鈴...',
            '<18>{#p/papyrus}人類！\n我在想。',
            ...(SAVE.data.n.plot_date < 1
                ? [
                    SAVE.data.b.flirt_papyrus
                        ? '<18>我們該挑個時間\n去約會了！'
                        : '<18>我們該挑個時間\n一起出去玩了！',
                    "<18>{#f/5}而且...\n我已經有好一段時間\n沒看到你了。",
                    "<18>{#f/0}有機會敘一下舊\n真是太好了！",
                    "<18>{#f/0}那行，等你準備好了\n你就來我家找我。"
                ]
                : [
                    '<18>所以，你知道我跟你\n當初是怎麼相處的嗎？',
                    '<18>{#f/5}我覺得... UNDYNE\n也應該跟你\n好好相處一下。',
                    '<18>{#f/4}而且，我敢打賭你們\n肯定能成為\n很好的朋友...',
                    SAVE.data.b.flirt_papyrus ? '<18>{#f/6}...朋友而已！' : '<18>{#f/0}就像咱倆一樣！',
                    "<18>{#f/0}那，等你準備好\n就來UNDYNE的家門口\n見我吧。"
                ]),
            '<18>{#f/9}肯定會經歷一段\n非常棒的時光的！',
            '<32>{#s/equip}{#p/event}* 滴...'
        ],
        madfish1: () => [
            ...(SAVE.flag.n.ga_asrielUndyneX++ < 1
                ? ['<25>{#p/asriel2}{#f/8}* 接下來，又到了\n  聽高談闊論的時間了...']
                : []),
            '<32>{#p/undyne}* 站住。',
            '<32>{#x1}* 真以為自己能\n  大搖大擺地濫殺無辜，\n  沒人管得了你們？',
            '<32>* 我告訴你，兩個小混蛋：',
            '<32>* 你們的死期到了！',
            '<32>{#x2}* 以為自己勉勉強強\n  過了Doge這關就了不起了？\n  聽好了...',
            "<32>{#x3}* 只要剩下的特戰隊成員\n  逮到你們，就等著受苦吧。"
        ],
        madfish2: () =>
            SAVE.flag.n.genocide_milestone < 5
                ? [
                    '<32>* 無話可說？\n* 呵。',
                    "<32>{#x4}* 眼下，我可沒閒工夫陪你們玩。\n  我得去幫Alphys疏散民眾。",
                    "<32>{#x5}* 呋呼呼...\n* 在臨死之前好好掙扎吧。\n* 你活不長的。"
                ]
                : [
                    '<32>* 無話可說？\n* 呵。',
                    "<32>{#x4}{|}* 眼下，我可沒\n  閒工夫陪你們玩。\n  我得去幫Alphys- {%}",
                    "<25>{#x5}{#p/asriel2}{#f/8}* 跟你說，\n  Alphys可比你強多了。",
                    "<25>{#f/2}* 我早就知道\n  這條時間軸的後續發展了。",
                    '<25>{#f/1}* 和她比起來，\n  你的攻擊屁都不是。',
                    '<32>{#p/undyne}* 真的嗎？',
                    "<32>* ...好吧。\n* 即便如此，你還是得先過我這一關。",
                    '<32>{#p/asriel2}{#f/6}* 喔，相信我。\n* 我們肯定能打敗你。',
                    "<32>{#p/undyne}* 走著瞧。"
                ],
        madfish3: () =>
            SAVE.flag.n.genocide_milestone < 5
                ? SAVE.flag.n.ga_asrielMadfish++ < 1
                    ? ['<25>{#p/asriel2}{#f/8}* 她愛咋咋地。']
                    : ['<25>{#p/asriel2}{#f/8}* ...']
                : ['<25>{#p/asriel2}{#f/8}* 切。'],
        muffet1: () =>
            badSpider()
                ? ['<32>{#p/basic}* 啊呼呼呼呼...', '<32>* 讓她下次把報酬再提點。']
                : SAVE.data.b.flirt_muffet
                    ? ['<32>{#p/basic}* 啊呼呼呼呼...', "<32>* 親，讓我們假裝一切\n  都沒發生過好嗎？"]
                    : ['<32>{#p/basic}* 啊呼呼呼呼...', '<32>* 剛才很有趣喔！\n* 下次再見，親！'],
        muffet2: () =>
            badSpider()
                ? ['<25>{#p/kidd}{#f/4}* 喲...\n  真是怪事...']
                : SAVE.data.b.flirt_muffet
                    ? ["<25>{#p/kidd}{#f/4}* 喲...\n  至少現在沒事了？"]
                    : ['<25>{#p/kidd}{#f/4}* 喲...\n  一點都不好玩。'],
        muffetGeno1: () =>
            SAVE.data.n.state_foundry_kidddeath < 1
                ? ['<25>{#p/kidd}{#f/4}* 喲...\n* 剛發生什麼了？', '<25>* 她是... {%}']
                : [
                    '<25>{#p/kidd}{#f/4}* 喲... 她又...',
                    '<25>* 為什麼怪物都這麼消失呢？{%}'
                ],
        muffetGeno1x: ["<32>{#p/basic}* 她死了。"],
        muffetGeno2: [
            "<25>{#p/kidd}{#f/7}* 不-不...\n* 我不是故意...",
            "<25>{#f/7}* 她-她沒... 不會的...\n* 她...",
            "<25>{#f/4}* 不，這...\n* 這不可-可能...",
            '<25>{#f/4}* 她只是...',
            '<25>{#f/8}* 只是...'
        ],
        muffetGeno3: ['<25>{#f/8}* ...', '<25>{#f/8}* ...我幹了什麼...'],
        mushroomdance1: ['<32>{#p/basic}* 蘑菇舞\n* 蘑菇舞\n* 管它什麼意義'],
        mushroomdance2: () =>
            SAVE.data.n.plot === 72
                ? SAVE.data.b.f_state_mushroomdanceEpilogue
                    ? ['<32>{#p/basic}* 意思是模糊的未來。']
                    : SAVE.data.b.f_state_mushroomdanceGeno
                        ? [
                            "<32>{#p/basic}* 意思是我將自由。\n* 會有人把我移植到新家園。",
                            '<32>* 但你在意這個幹啥？\n* 除非...',
                            '<32>* ...除非你赦自己無罪了？'
                        ]
                        : [
                            "<32>{#p/basic}* 意思是我將自由。\n* 會有人把我移植到新家園。",
                            '<32>{#p/basic}* 再見，老前哨站，\n  因為你是我的老家...'
                        ]
                : world.meanie || SAVE.data.s.state_foundry_deathroom === 'f_village' // NO-TRANSLATE

                    ? SAVE.data.b.f_state_mushroomdanceGeno
                        ? ["<32>{#p/basic}* 意思是... 別再和我說話。"]
                        : [
                            "<32>{#p/basic}* 意思是你過著罪惡的一生。",
                            ...(SAVE.data.b.f_state_mushroomdance ? ["<32>* 等下。\n* 你不曾當過好人嗎？"] : [])
                        ]
                    : SAVE.data.b.f_state_mushroomdance
                        ? [
                            '<32>{#p/basic}* 要是我能看到遠處的星系，\n  就好了。',
                            '<32>* 但哪怕力場被摧毀了，\n  我要怎麼離開呢...？'
                        ]
                        : [
                            '<32>{#p/basic}* 它代表了我被菌絲困在這裡，\n  所產生的內心的痛楚。',
                            '<32>* 我奮力地掙扎著。\n* 我竭力地想掙脫。\n* 可惜啊，無濟於事。'
                        ],
        musicbox: [
            '<18>{#p/asriel1}{#v/1}{#i/4}剛才聽到的聲音\n應該就是附近傳來的...',
            "<18>啊！你的飛船墜毀了，\n是嗎...",
            '<18>你還好嗎？',
            '<18>來，我扶你起來...',
            '<18>...',
            '<18>你叫「$(name)」，對吧？',
            "<18>這名字真好聽。",
            '<18>{*}{#x1}{#p/asriel3}{#i/36}我的名字是   {%}'
        ],
        napcomputer1: () =>
            postSIGMA()
                ? ["<32>{#p/basic}* 它不再提供服務了。"]
                : [
                    SAVE.data.b.svr
                        ? '<32>{#p/human}* （你走向了電腦...）'
                        : '<32>{#p/basic}* 電腦上打開了一個音樂分享軟體。',
                    choicer.create('* （看一眼嗎？）', '看一眼', '算了')
                ],
        napcomputer2: ['<32>{#p/human}* （你不想看。）'],
        napcomputer3: {
            a: () => [
                'MTT靜聽 - 日光漣漪.kwac',
                'MTT靜聽 - 星河渡歌.kwac',
                SAVE.data.n.plot === 72 ? '緣聚緣散.kwac' : '惡狼.kwac',
                '喵喵航天行 - 主題曲.kwac',
                !world.genocide && SAVE.data.n.state_starton_papyrus === 1 ? 'papyrus求包養.kwac' : '滑腔動調.kwac',
                '群星之歌.kwac'
            ],
            b: () => [
                '酷炫骷髏95',
                '酷炫骷髏95',
                SAVE.data.n.plot === 72 ? '_舟亢忝行_' : '_殺手亾耦_',
                'ALPHYS',
                '懶骨。',
                '（遊客）'
            ]
        },
        napcomputer4: {
            a: () => ['鬼怪舞曲.kwac', '鬼怪混音集.kwac'],
            b: () => ['NAPSTABLOOK22', 'NAPSTABLOOK22']
        },
        noTem: ["<32>{#p/tem}* 卜豪！系億條魚魚！！！"],
        noShroom: ["<32>{#p/basic}* 我超\n* 我超\n* 魚在陸地奔跑"],
        noTortoise: () =>
            world.population === 0 ? ['<32>{#p/basic}* 哇哈哈...'] : ['<32>{#p/basic}* 能跑多快就跑多快，孩子！'],
        npc86x: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* （機器人似乎睡著了。）']
                : ["<32>{#p/basic}* 它正處於休眠模式。"],
        npc86z: () =>
            [
                [
                    '<32>{#p/basic}{#npc/a}* 在戰鬥中檢測到\n  熟悉的能量訊號。',
                    '<32>{#p/basic}* 建議操作... 跑。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* 在戰鬥中檢測到\n  熟悉的能量訊號。',
                    '<32>{#p/basic}* 建議操作... 什麼都不做。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* 在戰鬥中檢測到\n  熟悉的能量訊號。',
                    '<32>{#p/basic}* 建議操作... 未知。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* 在戰鬥中檢測到\n  熟悉的能量訊號。',
                    '<32>{#p/basic}* 建議操作... 躲藏。'
                ]
            ][(SAVE.data.n.state_foundry_npc86_feelings || 3) - 1],
        npc86a: () => [
            '<32>{#p/basic}{#npc/a}* 檢測到陌生的能量訊號。',
            '<32>* 姓名... 未知。',
            '<32>* 關係狀態... 陌生人。',
            SAVE.data.n.plot < 42.1 ? '<32>* 上次互動... 暫無。' : '<32>* 上次互動... 戰鬥觀察。',
            '<32>* 處理中...\n* 處理中...\n* 處理中...',
            '<32>* 您好，陌生人。\n* 我叫8-6，是個\n  萬能送貨機器人。',
            '<32>* 這與我的預期功能相去甚遠，\n  但您現在願意完成\n  一份調查嗎？',
            choicer.create('* （你要怎麼回答？）', '願意', '不願意')
        ],
        npc86b: () => [
            '<32>{#p/basic}{#npc/a}* 謝謝您。\n* 問題如下。',
            '<32>* 「在紅色、綠色、藍色\n   三種顏色中，\n   你更喜歡哪一種？」',
            choicer.create('* （你要怎麼回答？）', '紅色', '綠色', '藍色', '不確定')
        ],
        npc86c: [
            '<32>{#p/basic}* 謝謝您。\n* 您的選擇將深深地\n  銘刻在我的記憶體中。',
            '<32>{#p/basic}{#npc/a}* 您的關係狀態現已被\n  設定為「熟人」。'
        ],
        npc86d: () => [
            '<32>{#p/basic}{#npc/a}* 檢測到熟悉的能量訊號。',
            '<32>* 姓名... 未知。',
            '<32>* 關係狀態... 熟人。',
            SAVE.data.n.state_foundry_npc86 === 1
                ? '<32>* 上次互動... 拒絕調查。'
                : '<32>* 上次互動... 接受調查。',
            '<32>* 處理中...\n* 處理中...\n* 處理中...',
            '<32>* 歡迎回來，熟人。\n* 您今天過得怎樣？',
            choicer.create('* （你要怎麼回答？）', '很幸福', '很痛苦', '一般', '不確定')
        ],
        npc86e: () => [
            ...[
                ['<32>{#p/basic}{#npc/a}* 你很幸福，\n  我也很滿足。'],
                ['<32>{#p/basic}{#npc/a}* 很痛苦？\n* 希望事情會好起來。'],
                ['<32>{#p/basic}{#npc/a}* 一般？\n* 可以理解。'],
                ['<32>{#p/basic}{#npc/a}* 不確定？\n* 這... 可以理解。']
            ][choicer.result],
            '<32>{#p/basic}{#npc/a}* 您的關係狀態現已被\n  設定為「朋友」。'
        ],
        npc86f: () => [
            '<32>{#p/basic}{#npc/a}* 檢測到熟悉的能量訊號。',
            '<32>* 姓名... 未知。',
            '<32>* 關係狀態... 朋友。',
            '<32>* 上次互動... 關於心情的詢問。',
            '<32>* 處理中...\n* 處理中...\n* 處理中...',
            [
                '<32>* 歡迎回來，朋友。\n* 我希望自從上一次互動後，\n  您的心情仍舊很好如初。',
                '<32>* 歡迎回來，朋友。\n* 我希望自從上一次互動後，\n  您的心情好轉了很多。',
                '<32>* 您好，朋友。\n* 基於上一次互動...',
                '<32>* 您好，朋友。\n* 基於上一次互動...'
            ][SAVE.data.n.state_foundry_npc86_mood - 1],
            '<32>* 看來您對我很感興趣。',
            '<32>* 您對我最常見的情感是什麼？',
            choicer.create('* （你要怎麼回答？）', '愛', '噁心', '暫無', '不確定')
        ],
        npc86g: () =>
            [
                [
                    '<32>{#p/basic}{#npc/a}* ...',
                    '<32>* 您的關係狀態現已被\n  設定為「摯友」。',
                    '<32>* 我也愛您，摯友。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* ...',
                    '<32>* 您的關係狀態現已被\n  設定為「敵人」。',
                    '<32>* 我已經不需要您了，敵人。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* ...',
                    '<32>* 您的關係狀態現已被\n  設定為「熟人」。',
                    '<32>* 這個回答可能不太好，熟人。'
                ],
                [
                    '<32>{#p/basic}{#npc/a}* ...',
                    '<32>* 您的關係狀態保持不變。',
                    ...(SAVE.data.n.state_foundry_npc86 === 5 && SAVE.data.n.state_foundry_npc86_feelings === 4
                        ? ['<32>* 對所有問題的預期回答\n  現已被設定為「不確定」。']
                        : [])
                ]
            ][choicer.result],
        npc86h: () => [
            '<32>{#p/basic}{#npc/a}* 檢測到熟悉的能量訊號。',
            '<32>* 姓名... 未知。',
            [
                '<32>* 關係狀態... 摯友。',
                '<32>* 關係狀態... 敵人。',
                '<32>* 關係狀態... 熟人。',
                '<32>* 關係狀態... 朋友。'
            ][SAVE.data.n.state_foundry_npc86_feelings - 1],
            SAVE.data.b.f_state_done86
                ? [
                    '<32>* 上次互動... 表達讚美。',
                    '<32>* 上次互動... 拒絕對話。',
                    '<32>* 上次互動... 閒聊。',
                    '<32>* 上次互動... 給予建議。'
                ][SAVE.data.n.state_foundry_npc86_feelings - 1]
                : '<32>* 上次互動... 詢問感受。',
            '<32>* 處理中...\n* 處理中...\n* 處理中...',
            [
                [
                    '<32>* 歡迎回來，摯友。\n* 我希望您一切都好。',
                    '<32>* 歡迎回來，摯友。\n* 我很愛您。',
                    '<32>* 歡迎回來，摯友。\n* 今天見到您很高興。'
                ],
                [
                    '<32>* ...\n* 請不要再跟我說話了。',
                    '<32>* ...\n* 請不要再跟我說話了。',
                    '<32>* ...\n* 請不要再跟我說話了。'
                ],
                [
                    '<32>* 歡迎回來，熟人。\n* 工廠今天有點霉味。',
                    '<32>* 歡迎回來，熟人。\n* 今天星光閃爍。',
                    '<32>* 歡迎回來，熟人。\n* 今天蒸汽很潮溼。'
                ],
                [
                    '<32>* 歡迎回來，朋友。\n* 記得吃點東西。',
                    '<32>* 歡迎回來，朋友。\n* 記得休息一下。',
                    '<32>* 歡迎回來，朋友。\n* 記得把事情說出來。'
                ]
            ][SAVE.data.n.state_foundry_npc86_feelings - 1][rng.dialogue.int(3)]
        ],
        npcinter: {
            grandmuffdarkened: pager.create(
                0,
                () =>
                    SAVE.data.n.state_foundry_muffet === 2
                        ? [
                            ...(world.population < 6 && world.bullied
                                ? [
                                    "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 不管你霸凌過多少怪物，\n  我只關心你給我的報酬~"
                                ]
                                : [
                                    '<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 你支付的報酬\n  可超出我的想像~'
                                ]),
                            '<32>* 謝謝你的慷慨解囊，親~',
                            '<32>* 如果你和你那無臂小朋友需要\n  些什麼，我願為你效勞~'
                        ]
                        : [
                            "<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 很遺憾第一次我沒能抓住你~",
                            ...(world.population < 6 && world.bullied
                                ? ['<32>* 抓住你這樣的小流氓\n  會使我得到一筆不菲的賞金~']
                                : ["<32>* 喔算了~\n* 既然力場打開了\n  我也就不需要那些了~"])
                        ],
                [
                    '<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 喔，小寶貝~\n* 當蜘蛛家族到達新的家園時...',
                    "<32>* 將會開發大量的自然資源~",
                    "<32>* 我們將會建立新世界\n  有史以來最大的茶葉帝國~"
                ],
                [
                    '<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 喔，如果再加上我的幫助~',
                    "<32>* 這將會成為新世界\n  唯一的茶葉帝國~\n* 啊呼呼~"
                ],
                ['<32>{#p/basic}{#s/spiderLaugh}{#npc/a}* 啊呼呼呼~']
            ),
            f_dogenpc: pager.create(
                0,
                () =>
                    SAVE.data.n.state_foundry_doge === 2
                        ? [
                            ...(world.population < 6 && world.bullied
                                ? [
                                    '<32>{#p/basic}{#npc/a}* 我雖知你崇尚暴力，\n  但我感激你對我憐憫。'
                                ]
                                : ['<32>{#p/basic}{#npc/a}* 對你的憐憫之心表示感激。']),
                            '<32>* 此為我職業選擇需尋之誤。',
                            "<33>* 但雖如此，我仍願留此制服。\n* 因制服正合我身。"
                        ]
                        : [
                            "<32>{#p/basic}{#npc/a}* 我雖懊悔放你離去，\n  但見你所做之事，\n  便再無若有所失之傷。",
                            ...(world.population < 6 && world.bullied
                                ? ['<32>* 我將寬恕... \n  你此前因卑劣人格而造就之過。']
                                : ['<32>* 我將銘記你的名字\n  且永誌不忘。'])
                        ],
                [
                    '<32>{#p/basic}{#npc/a}* 我因此前對你的\n  錯誤判決而深感歉意，Frisk。',
                    '<32>* 身為特戰隊一將，\n  我竟只對你抉瑕掩瑜。'
                ],
                [
                    '<32>* 嗯。\n* 我將深刻反思自己。',
                    '<32>* 請允我獨自一人行此事。',
                    '<33>* 能與你交談我為此感激。'
                ],
                ['<32>{#p/basic}{#npc/a}* 下次再見。']
            ),
            f_clamgirl: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#npc/a}* 多麼滑稽...\n* 我只要一決定待在什麼地方，\n  我們就得離開這個地方。',
                            '<32>* 這種諷刺的情況應該\n  永遠不會離開我。\n* 不過，至少這種情況不錯。',
                            "<32>* 在我們的新家園...\n* 我會給自己找很多新鄰居的。"
                        ]
                        : SAVE.data.n.plot === 47.2
                            ? ["<32>{#p/basic}{#npc/a}* 額，\n  她還在追你..."]
                            : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                                ? ['<32>{#p/basic}{#npc/a}* 你最好別回來了。']
                                : SAVE.data.n.state_foundry_undyne === 1
                                    ? [
                                        '<32>{#p/basic}{#npc/a}* 我感覺到\n  附近的氣氛受到了幹擾...',
                                        "<32>* 你真不該把\n  那個女孩單獨留在那。"
                                    ]
                                    : SAVE.data.n.state_foundry_undyne === 2
                                        ? [
                                            '<32>{#p/basic}{#npc/a}* 我感覺到\n  附近的氣氛受到了幹擾...',
                                            '<32>* 你真應該讓\n  那個女孩一個人待著。'
                                        ]
                                        : 2 <= SAVE.data.n.plot_date
                                            ? [
                                                '<32>{#p/basic}{#npc/a}* 我感覺到\n  附近的氣氛受到了幹擾...',
                                                '<32>* 我覺得你會\n  和我的新鄰居相處得很好的。'
                                            ]
                                            : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                                                ? world.trueKills > 0
                                                    ? ['<32>{#p/basic}{#npc/a}* Papyrus在附近等著呢。', "<32>* 他是不是很勇敢？"]
                                                    : ['<32>{#p/basic}{#npc/a}* Papyrus在附近等著呢。', "<32>* 想見見我的新鄰居去嗎？"]
                                                : [
                                                    "<32>{#p/basic}{#npc/a}* 話說，我是從首塔過來\n  鑄廠這裡遊覽的。",
                                                    "<32>* 我在那幾乎不認識任何人，\n  但在這，我已經遇到了\n  幾個友好的鄰居。",
                                                    "<32>* 我覺得我短期內\n  不會離開這裡。"
                                                ],
                () =>
                    SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}{#npc/a}* 這不是很愉快嗎？"]
                        : SAVE.data.n.plot === 47.2
                            ? ["<32>{#p/basic}{#npc/a}* 額，\n  她還在追你..."]
                            : SAVE.data.n.state_foundry_undyne > 0
                                ? ['<32>{#p/basic}{#npc/a}* ...']
                                : 2 <= SAVE.data.n.plot_date
                                    ? ['<32>{#p/basic}{#npc/a}* 千金買戶，八百買鄰。']
                                    : SAVE.data.n.plot > 47.2 && SAVE.data.n.plot_date > 1
                                        ? world.trueKills > 0
                                            ? ['<32>{#p/basic}{#npc/a}* ...']
                                            : [
                                                "<32>{#p/basic}{#npc/a}* 沒事的。她不咬人的。\n* 不過她可能會朝你\n  扔幾支長矛。"
                                            ]
                                        : ['<32>{#p/basic}{#npc/a}* 有鄰居就是好。']
            ),
            f_echo1: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/undyne}* 鑄廠居民聽好...',
                        '<32>* ...你們應該都清楚發生了什麼。',
                        "<32>* 我們該走了，你們清楚得很。",
                        "<32>* 那就快點吧。",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/undyne}* 所有人聽好！\n* 力場消失了！\n* 我們可以找新家園了！",
                            "<32>* 如果當我們離開\n  你還在那磨蹭...",
                            "<32>* 然後... 我們待會\n  會再回來找你。",
                            "<32>* 但最好別那麼做！",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/undyne}* 鑄廠居民聽好！\n* 趁現在，快給我逃！",
                                world.genocide
                                    ? "<32>* 有殺人狂到達鑄廠，還未落網！\n  你要是碰著了，就是死路一條！"
                                    : "<32>* 有殺人狂到達鑄廠，還未落網！\n  你要是碰著了，就是死路一條！",
                                "<32>* 不聽勸，後果自負！！",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                                ...(world.goatbro && SAVE.flag.n.ga_asrielEcho1++ < 1
                                    ? ['<25>{#p/asriel2}{#f/2}* 謝了，Undyne。\n* 要是還動不動碰上怪物，\n  我就真吃不消了。']
                                    : [])
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 麻煩你檢查一下管道有無洩漏。',
                                "<32>{#p/alphys}* 喔- 呃... 抱-抱歉哈！\n* 我現在稍微有點忙！",
                                '<32>{#p/basic}* 好吧。\n* 我去叫Raddy來幫忙。\n* 真是謝謝您了。',
                                "<32>{#p/alphys}* 不-不用謝？？",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo2: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/basic}* 嘿，小子...\n  不會有事的。",
                        '<32>* （Gerson？）\n* （是你嗎？）',
                        '<32>* 哇哈哈。\n* 不曉得呢。\n* 堡兄啊，到底是你不？',
                        "<32>* （對，是我。）\n* （我只是有點慌...\n  大夥都一樣。）",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/basic}* 你聽到她說的了，小子！\n* 我們該走了！\n',
                            "<32>{#p/basic}* ...哇哈哈。\n* 實際上，我們現在還有時間。",
                            "<32>{#p/basic}* （是的，\n  我要在這多待一會。）",
                            "<32>{#p/basic}* （誰知道呢？）\n* （也許Frisk會過來呢。）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* 嘿，小子。\n  聽到廣播裡的警告了嗎？',
                                '<32>* （小點聲！）\n* （...所以說，\n  有個人類什麼的過來了，是嗎？）',
                                '<32>* 毫無疑問，是的。',
                                "<32>* （難怪呢，\n  不過強制疏散真的很煩人。）",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#s/phone}* 鈴鈴，鈴鈴...',
                                '<32>{#p/basic}* 嘿，孩子！\n* 我就是想問問你的新店\n  怎麼樣了。',
                                "<32>* 我聽說開得挺不錯呢！",
                                "<32>* （...）\n* （我現在有點不方便講話。）",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo3: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/basic}* 聽到了。\n* 嘿，說說你看到了什麼唄，\n  興許我還能幫幫你。",
                        '<32>* 從你的角度來看。',
                        '<32>* （額...）\n* （這一切的開始都是從...）',
                        '<32>* （當時我和一群人在力場那。）',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 那太好了！\n* 我現在很想看到那位人類！",
                            "<32>{#p/basic}* 還是很不可置信是吧？\n* 被一個人類救了？",
                            "<32>{#p/basic}* （我同意。）\n* （而且那些其他的人類...\n  也都活著。）",
                            "<32>{#p/basic}* （多麼瘋狂的一天。）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* 撤離？沒門！\n* 我敢保證，待在原地，也沒人來傷你。",
                                "<32>* （呃...）\n* （你明知道我正身處危險之中，\n  為什麼還這麼說？）",
                                "<32>* 或許處境確實不利，\n  但是，我剛好想到個法子...",
                                "<32>* 它能保護我們這些小商販免受危險。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* 嗯？\n* 發生什麼了？",
                                "<32>* （...你不知道嗎？）",
                                '<32>* 等一下...',
                                "<32>* （就是那種的威脅。）",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo4: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* （我們都去那裡 \n  想看力場被摧毀時的景象。）',
                        "<32>* （有人告訴我們\n  去那裡會發生什麼事情，\n  但當我們到那後...）",
                        '<32>* （告訴我們去那的\n  說話星星挾持了\n  怪物作為人質。）',
                        '<32>* 一個小星星是吧？\n* 我正好聽說過\n  有關一個小黃星的故事...',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* （我想知道當我們到達新家園後\n  會如何開始新的生活。）",
                            "<32>{#p/basic}* （也許我們倆\n  可以合開一家店！）\n* （你會賣些小玩意...）",
                            "<32>{#p/basic}* 然後你會賣些吃的。\n* 我同意你為我們\n  未來的鋪墊，小子！",
                            "<32>{#p/basic}* 但我們如果一個負責銷售，\n  一個負責財務會更好。",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* （啥？）\n* （蠢到家了。）",
                                "<32>* 這可是真事！\n* 想聽的話，現在就給你\n  好好講講它的來龍去脈！",
                                "<32>* （呃，不-不必了！）\n* （我相信你，老-老人家！）",
                                "<32>* 哇哈哈！\n* 每天都能收穫新知，挺不錯的吧！",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* ...哇哈哈。\n* 是那個到處賣牛排的傢伙，\n  對吧？",
                                '<32>* （我該怎麼辦！）',
                                "<32>* 噓...\n* 沒事的，孩子。\n* 那家商店是有個後門的！",
                                '<32>* （真的有嗎！？！？）',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo5: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/basic}* （好吧，他是真的。）\n* （然後我們認為我們\n  會幫助那個人類擊敗他...）",
                        "<32>* （但是他最後還是\n  吸收了我們所有人的靈魂。）",
                        "<32>* 那一定是那道我無法掙脫\n  的亮光出現的原因。",
                        "<32>* （對，它在光源處更亮。）\n* （我們連掙脫的機會都沒有。）",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* （哈，那我們輪流來做吧。）",
                            "<32>{#p/basic}* （工作總是一成不變\n  會讓人無聊至極，\n  你不這樣想嗎？）",
                            "<32>{#p/basic}* 哇哈哈。\n* 也許我只是年紀大了，\n  我並不介意當財務。",
                            '<32>{#p/basic}* 小子，你可以獨享\n  這份有趣的工作！',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* （看來，我們註定要在這裡\n  度過餘生了...）',
                                "<32>* 嘿，別小瞧皇家守衛！\n* 他們各個都是驍勇善戰的猛士！",
                                '<32>* （你有把握他們能阻止那人類嗎？）',
                                "<32>* 那個人類小孩嗎？\n* 我不確定，感覺難度挺大的。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                                ...(world.goatbro && SAVE.flag.n.ga_asrielEcho4++ < 1
                                    ? ['<25>{#p/asriel2}{#f/5}* 嘻嘻嘻...']
                                    : [])
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* （哇...）\n* （這扇門通往外面的陽臺！）',
                                '<32>{#p/basic}* （我真的感覺星星\n  從來沒有這麼明亮過...）',
                                '<32>* 哈。\n* 肯定是有個扭曲力場\n  什麼的。',
                                '<32>* 稍微等一下，\n  就盡情享受吧！',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo6: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 然後呢？',
                        '<32>* （哎呀，你咋能不知道呢。）\n* （後面的事，大夥都知道啊。）',
                        '<32>* （從我們的角度來看，\n  我們看到一個人類在抵禦攻擊。）',
                        '<32>* （那個星星不管變成了什麼， \n  他都在向那個人類\n  無情地發動攻擊。）',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 我覺得\n  我也許會想念這地方。",
                            '<32>{#p/basic}* 我們真的讓這個地方\n  變成了我們自己的地盤。',
                            "<32>{#p/basic}* （開玩笑吧？）\n* （我一秒也不想待在這了。）",
                            "<32>{#p/basic}* （我在這的生活挺糟糕的。）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* 孩子，說個壞訊息。\n* 那人類剛經過這裡。',
                                ...(world.genocide
                                    ? [
                                        "<32>{#p/basic}* ...還帶了個同夥。",
                                        '<32>{#p/basic}* （啥？）\n* （是誰？）',
                                        "<32>{#p/basic}* 哇哈哈...\n* 我說了你也不信。"
                                    ]
                                    : [
                                        '<32>{#p/basic}* （那人還在鑄廠嗎？）',
                                        "<32>{#p/basic}* 當然，但那人想碰到你\n  還要走好一會呢。\n* 更不用說Undyne了...",
                                        "<32>{#p/basic}* （是啊，她一定會阻止人類的。）\n* （畢竟，她可皇家衛隊的隊長啊...）"
                                    ]),
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#s/phone}* 鈴鈴，鈴鈴...',
                                "<32>{#p/basic}* 對不起，\n  這裡訊號不太好。",
                                '<32>* 這段時間，\n  看到什麼有趣的東西了嗎？',
                                '<32>* （...這個嘛...）',
                                '<32>* （流星算嗎？）',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo7: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* （最後呢，就是，\n  人類動用了某種力量...）',
                        '<32>* （接著...）',
                        '<32>* （就是... 那事了。）',
                        '<32>* 喔... 那個啊。\n* 形勢逆轉的那一刻嗎？',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 嘿，沒事的。",
                            "<32>{#p/basic}* 在新家園...\n  你可以去你想去的任何地方。",
                            '<32>{#p/basic}* （真的嗎？\n  我以為我會和你一起\n  安頓下來。）',
                            '<32>{#p/basic}* 喔，是嗎？\n* 哇哈哈。',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                ...(world.genocide
                                    ? [
                                        "<32>{#p/basic}* （你說，那孩子起死回生了？）",
                                        '<32>{#p/basic}* （哇。）\n* （老瘋子，今天你不是\n  一般地瘋啊！）',
                                        '<32>{#p/basic}* ...我是會拿這事\n  開玩笑的人嗎？',
                                        '<32>{#p/basic}* （呃... 你不是那種人。）\n* （哼。）'
                                    ]
                                    : [
                                        '<32>{#p/basic}* （孩子們都在疏散，\n  我們做點什麼呢？）',
                                        "<32>{#p/basic}* 噢，要不...\n  老一套，隨便糊弄糊弄他們吧。",
                                        '<32>{#p/basic}* （真不愧是你啊，怪老頭。）',
                                        '<32>{#p/basic}* 哇哈哈，你最懂我了！'
                                    ]),
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* 喔！\n* 快許個願，孩子！',
                                "<32>* （...）\n* （永遠不會實現的。）",
                                '<32>* ...自由，是嗎？\n* 哇哈哈... 那我可有個\n  好訊息要告訴你了。',
                                '<32>* 前不久，我剛看到\n  一個人類從這裡經過。',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo8: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 我有點印象。\n* 人類掌控了那股力量...\n  掌控了戰局。',
                        '<32>* （對對對，然後他就開始攻擊咱們了！）\n* （我還以為咱...）',
                        '<32>* 死定了？',
                        "<32>* （是這樣，而且我能和別人感同身受。）\n* （每個人都驚恐萬分。）",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/basic}* （我還能去找誰？）\n* （女孩們？）',
                            '<32>{#p/basic}* 嗯...\n* 我明白你的意思。',
                            "<32>{#p/basic}* （你是我唯一可以依靠的人，\n  老夥計。）",
                            "<32>{#p/basic}* （原本只想吃飯睡覺罵Mettaton，\n  但是時候該改變了。）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/basic}* （嘿... 等風波過去了...）',
                                '<32>* （要不... 咱出去吃一頓？）',
                                "<32>* 嗯？\n* 當然嘍！\n* 主意不錯，孩子！",
                                "<32>* 這樣我們就有盼頭了。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* （看來，傳說是真的...）\n* （自由真的觸手可及了。）",
                                '<32>* 或許吧。',
                                "<32>* （就看國王怎麼做了，是吧？）",
                                '<32>* ...到時候再說。',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echo9: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 啊... 都記著呢。',
                        "<32>* （看，無論發生什麼...）\n* （我很高興你平安無事，\n  你這個老不死的傢伙。）",
                        "<32>* 哇哈哈... 真是個好小子。",
                        '<32>* （...等我們到新家園，要不...\n  咱出去吃一頓？）',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 那個機器人...\n  我不知道他在新家園\n  是否還會受歡迎。",
                            '<32>{#p/basic}* 但是嘿，如果他過氣了，\n  我們可以隨時告訴他\n  我們過得有多好。',
                            "<32>{#p/basic}* （天吶，你可真壞！）",
                            "<32>{#p/basic}* （...如果他來我們店裡，\n  我們將收他雙倍價錢。）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* （謝謝你，老人家...）\n* （和你嘮嗑的時候，\n  那些煩惱啊，都忘了。）",
                                '<32>* 哇哈哈...\n* 能幫上忙，我可太高興了。',
                                '<32>* 嘿，就算我們挺不過\n  這場風波...',
                                '<32>* ...咱還得該吃吃，該喝喝。',
                                "<32>* （是啊...）\n* （太好了。）",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/basic}* （「到時候再說」...？）\n* （不殺了那人，\n  難道還能放他走？）",
                                '<32>* 我心裡應該有答案了。\n* 先不告訴你。',
                                "<32>* （等一下...）\n* （難不成，國王還有事\n  瞞著我們！？）",
                                '<32>* 哇哈哈...\n* 晚點再跟你說，孩子。',
                                '<32>* （...啊！？！？）',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echoAbyss1: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/basic}* 我在哪？",
                        '<32>* 我剛剛在洗衣服，突然一道亮光...',
                        "<32>* 感覺就像...\n  我身處地獄邊境...",
                        '<32>* 請... 救救我...',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/13}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 有東西正在靠-靠-靠近我...\n  嚇-嚇-嚇死我了！",
                            '<32>{#p/undyne}* Doggo？\n* 是你嗎？',
                            "<32>{#p/basic}* 是... 那玩意要過來了...\n* 啊！",
                            '<32>{#p/basic}* （咳咳）\n* 好像有啥動了下？\n* 是我的錯覺嗎？',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/radio}{#v/1}* 大-家-好哇！\n* 歡迎收聽《午夜狂奔》！',
                            '<32>{#p/alphys}* （衝三ㄒ-）\n* （這是什麼啊！？）',
                            '<32>{#p/radio}{#v/1}* 今天是2000年9月15日，\n  還算幸運，沒有發生什麼大事。',
                            "<32>{#p/alphys}* （某種通訊系統...\n  肯定已經休眠了幾百年了！）",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ],
            f_echoAbyss2: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 啊，我這是在哪...',
                        '<32>* 我們剛剛在翻垃圾，\n  突然照進一道亮光...',
                        "<32>* Catty認為我們在做一樣的夢...",
                        "<32>* 但是，我們不能喚醒自己嗎？",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/15}* ...'] : [])
                    ]
                    : world.genocide
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<23>{#p/papyrusnt}UNDYNE，在嗎？\n我兄弟他...\n他...",
                            '<33>{#p/undyne}* 他怎麼了，Papyrus？',
                            '<23>{#p/papyrusnt}...',
                            '<32>{#p/undyne}* Papyrus？',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/sans}{#f/7}* 嘿，無意打擾，\n  不過我尋思，你該疏散星港居民了。',
                                "<32>{#p/undyne}* 嗯？咋了？",
                                '<32>{#p/sans}{#f/7}* ...',
                                '<32>{#p/undyne}* 你...\n  別一句話不說啊...',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/radio}{#v/0}* 你說沒發生什麼大事！？\n* 你簡直是瘋了。",
                                '<32>{#p/alphys}* （嗯...）',
                                '<32>{#p/radio}{#v/0}* 來自鄰近星球的外星人\n  今天就要到達了！',
                                "<32>{#p/alphys}* （我還是讓它播下去吧。\n  誒嘿嘿。）",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                                ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd2
                                    ? ((SAVE.data.b.f_state_dc_kidd2 = true),
                                        [
                                            '<25>{#p/kidd}{#f/7}* 臨近星球？\n* 不會是說...',
                                            '<25>{#f/2}* ...不-不可能。'
                                        ])
                                    : [])
                            ],
            f_echoAbyss3: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/toriel}{#f/21}* 我的孩子... 你在這裡嗎？',
                        '<32>* 那個Twinkly...',
                        "<32>* 我知道他會\n  搞出麻煩，但是...",
                        "<32>* 再一次...\n* 我墜入迷霧，無法撥雲見日...",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/16}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            ...(SAVE.data.b.s_state_chilldrake
                                ? [
                                    "<32>{#p/basic}* 救命啊！\n* 我朋友Stardrake失蹤了...",
                                    '<32>{#p/basic}* 他出門去找新笑話靈感，\n  結果到現在也沒回家！',
                                    "<32>{#p/undyne}* 小子，別亂跑。\n* 我馬上派搜救隊去找你朋友。"
                                ]
                                : [
                                    "<32>{#p/basic}* 救命啊！\n* 我朋友Stardrake現在很危險！",
                                    '<32>{#p/basic}* 他說自己看見個人類\n  四處遊蕩，屠殺怪物！',
                                    '<32>{#p/undyne}* 小子，別亂跑。\n* 皇家衛隊會將那人類\n  繩之以法的。'
                                ]),
                            '<32>{#p/basic}* 謝謝您... Undyne...',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                            ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd3
                                ? ((SAVE.data.b.f_state_dc_kidd3 = true),
                                    ['<25>{#p/kidd}{#f/3}* 呃...\n  聽起來怪嚇人的，哈哈...', '<25>{#f/4}* ...'])
                                : [])
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/radio}{#v/1}* 好了，不要慌！\n* 我們不會讓他們欺負我們的，\n  對吧？",
                            '<32>{#v/0}* 你說得還挺一本正經的。',
                            '<32>{#v/1}* 如果我真的是認真說的呢？',
                            '<32>{#v/0}* 我覺得，這些外星人\n  有可能是很好的盟友。\n* 他們看起來人不錯的。',
                            '<32>{#v/0}* 他們甚至帶來了翻譯領域的東西，\n  這樣我們就能理解他們了！',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ],
            f_echoAbyss4: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<23>{#p/papyrusnt}啊？\n認為一切未來都\n一片光明有什麼錯！",
                        '<33>{#p/without}* 好吧，在我看來...',
                        "<32>{#p/without}* 這只是你鐫{@fill=#ff0}空{@fill=#fff}妄實的幻想罷了。",
                        "<23>{#p/papyrusnt}額...\n也許你是對的。\n一切似乎真的很{@fill=#ff0}黑暗{@fill=#fff}。",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/23}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/undyne}* 沒聽懂嗎？\n  那可不是什麼好對付的小混混...\n  趁現在快逃！不然下個遭殃的就是你！",
                            "<32>{#p/basic}* 那傢伙是誰我不在乎。\n* 我只在乎能不能履行職責，\n  保護好前哨站！",
                            "<32>{#p/basic}* 你不是很想揍人類一頓嗎？\n  那你現在就過來啊！",
                            '<32>{#p/undyne}* Dogamy！！',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                            ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                                ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                                    [
                                        "<25>{#p/kidd}{#f/1}* 老兄，皇家衛隊真勇猛啊！",
                                        "<25>{#f/3}* 有他們保護我們...\n  真是太好了！"
                                    ])
                                : [])
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/radio}{#v/1}* 是啊，是啊...\n* 如果要在這裡跟外星人\n  卿卿我我的話...",
                            '<32>{#v/1}* 我們就不能光是走上去\n  說句「哈囉」就完事了。',
                            "<32>{#v/0}* ...這不是Erogot喜歡的\n  打招呼方式嗎？",
                            "<32>{#v/0}* 那傢伙肯定喜歡看西部電影，\n  毫無疑問。",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                            ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd4
                                ? ((SAVE.data.b.f_state_dc_kidd4 = true),
                                    ['<25>{#p/kidd}{#f/1}* Erogot？', '<25>{#f/1}* Erogot國王！？', '<25>{#f/3}* 天...'])
                                : [])
                        ],
            f_echoAbyss5: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/kidding}* 喲...\n  這啥地方？',
                        "<32>* 真的好黑，我什麼都看不到...",
                        "<32>* 我好害怕...",
                        '<32>* 有人嗎？\n* 請... 救救我...',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/22}* ...'] : [])
                    ]
                    : world.genocide
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/alphys}* 新身體用著怎麼樣？",
                            '<32>{#p/mettaton}* 真的很不錯。\n* 我再看看有沒有故障零件。',
                            "<32>{#p/alphys}* 那-那就好。\n* 我研究研究\n  怎麼優化能量分配。",
                            "<32>{#p/mettaton}* 博士，別擔心。\n* 我們還有的是時間。",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/alphys}* 難道我...\n  我就只能袖手旁觀嗎？',
                                "<32>{#p/mettaton}* 唉... 還有別的可做嗎？\n* 戰鬥？你可不擅長。",
                                "<32>{#p/mettaton}* 你要是現在衝上去，\n  很可能會喪命。\n  怪物們也會失去一員大將。",
                                '<32>{#p/alphys}* 為什麼...\n  為什麼我總遇到這種事...',
                                "<32>{#p/mettaton}* ...平心而論，\n  你還是第一次看到怪物死吧。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<33>{#p/radio}{#v/0}* 你別跟別人說，\n  我覺得他們有些人還挺可愛的。',
                                '<32>{#v/1}* 呃... 你什麼意思？',
                                "<32>{#v/0}* 什麼？\n* 我不是那種意思。\n* 我就是單純覺得可愛。",
                                '<32>{#v/0}* 就像寵物的那種。',
                                "<32>{#v/1}* ...\n* 有一個聽眾給我們電臺\n  打電話過來了。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echoAbyss6: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/alphys}* 真奇怪...',
                        '<32>* 看來我們的靈魂\n  被另一個存在所吸收。',
                        '<32>* 我們之前似乎被關在了\n  一種「獨立空間」...',
                        '<32>* ...等等。\n* 我也許知道怎麼聯繫其他人！',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/10}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            world.genocide
                                ? "<32>{#p/basic}* 那人類跟Asriel快到這裡了。\n* 只要發現他們，\n  定將其一舉殲滅！"
                                : "<32>{#p/basic}* 那人類快到這裡了。\n* 只要我發現了，\n  定將其一舉殲滅！",
                            "<32>{#p/undyne}* Doge，你肯定知道\n  即將面對的是什麼敵人。",
                            dogex()
                                ? '<32>{#p/basic}* 那個人類要對在星港的死難負責。\n* 我絕不會心慈手軟！'
                                : world.dead_canine
                                    ? "<32>{#p/basic}* 朋友的生命親手葬送在敵人手裡。\n* 我絕不會心慈手軟！"
                                    : '<32>{#p/basic}* 我為這個時刻\n  準備了很久。\n* 我不會猶豫了！',
                            "<32>{#p/undyne}* 好！！去讓那個人類見識一下\n  特戰隊的實力吧！！",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/radio}{#v/0}* 您好啊，親愛的聽眾，\n  歡迎致電《午夜狂奔》。\n* 您有帶來什麼訊息嗎？',
                            "<32>{#p/human}* 是的，我有幾句話要說。\n* 實際上，我們人類還沒有\n  準備好這種事情呢。",
                            "<32>{#p/radio}{#v/0}* 所以你什麼意思？\n* 我們太笨了理解不了\n  外星人的概念嗎？",
                            "<32>{#p/human}* ...你太天真了。\n* 我真正擔心的不是我們，\n  而是... 外星人他們。",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ],
            f_echoAbyss7: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 我在哪？\n* 這是什麼... 地方？',
                        "<32>{#p/alphys}* 你好？\n* 我是Alphys博士，\n  我... 正在嘗試某種東西！",
                        "<32>{#p/basic}* Alphys博士！\n* 我在這！能聽到我嗎？",
                        "<32>{#p/alphys}* 對... 是的！\n* 我只需要回想他們...\n  就可以找到他們！",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/21}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 就人類一事，我深感擔憂。',
                            '<32>{#p/alphys}* 呃...\n* Undyne應該幫得上忙...\n  她遠比我能幹...',
                            '<32>{#p/basic}* 贊成。\n* 您的確啥忙也幫不上。',
                            '<32>{#p/alphys}* 沒-沒禮貌...',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/radio}{#v/1}* 唉，得了吧。\n* 我們對他們來說算不上威脅。\n* 他們掌握著全部的主動權呢！",
                            "<32>{#p/human}* 話是這麼說，\n  但你看到他們的行為方式了嗎？\n* 他們真的很好...",
                            "<32>* 我知道你們倆不會傷害他們，\n  但總有人類會利用這一點的。",
                            '<32>{#p/radio}{#v/1}* 是啊... 唉...',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ],
            f_echoAbyss8: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        '<32>{#p/basic}* 我的名字是Thomas Roman。\n* 皇家科學員，皇室的親信。',
                        "<32>{#p/alphys}* Roman教授？\n* 但你...",
                        '<32>{#p/basic}* 我的名字是Thomas Roman。\n* 皇家科學員，皇室的親信。',
                        "<32>{#p/alphys}* 他在重複這段話...\n* 這一定是大家的記憶中的教授。",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/3}* ...'] : [])
                    ]
                    : world.genocide
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<23>{#p/papyrusnt}我是PAPYRUS。\n聽到提示音後儘管留言！',
                            '<33>{#p/undyne}* 該死...',
                            '<33>{#p/undyne}* Papyrus，我真不該讓你遭這種罪。',
                            '<33>{#p/undyne}* 你們兄弟倆命不該如此。',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/undyne}* ...就連Doge也沒能拿下那個人類。',
                                "<32>{#p/sans}{#f/7}* 老實說，這不是個好訊息。\n* 鑄廠的居民疏散了嗎？",
                                "<33>{#p/undyne}* 在這個關頭，\n  所有人都知道發生了什麼。\n* 他們會撤離的。",
                                "<32>{#p/sans}{#f/7}* 我覺得保持無恙比感到抱歉要好。\n* 但是我知道我該幹什麼。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/radio}{#v/0}* 嘿，振作起來。\n* 別讓那個傢伙把你弄得這麼失落，\n  好嗎？",
                                "<32>{#v/1}* 但他說得有道理...\n* 對大多數人來說，\n  這個情況都讓人不知所措。",
                                "<32>* 並不是每個人的想法都像你...\n  還有你當做寵物般的那種痴迷...\n  那樣的純潔。",
                                '<32>{#v/0}* 先等一下！',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ],
            f_echoAbyss9: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/alphys}* 對，只要想想你想見的人，\n  你就會和他們在一起。",
                        '<32>{#p/asgore}* Asriel... 你在這嗎？',
                        "<32>{#p/alphys}* 額，不管用...\n* 也許我們對\n  他剩下的記憶不多？",
                        '<32>{#p/asgore}* 請... 回來...',
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/25}* ...'] : [])
                    ]
                    : geno()
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/undyne}* 可以請你幫我個忙嗎？',
                            '<32>{#p/basic}* 啊呼呼~\n* 我願虔誠服務\n  這地盤的老大~',
                            world.genocide
                                ? "<33>{#p/undyne}* 找到那人類和他的同夥，\n  將他們帶給我。\n* 你將得到有生以來最大的一筆錢。"
                                : "<33>{#p/undyne}* 找到那個人類並帶給我。\n* 你會得到你有生以來最大的一筆錢。",
                            "<32>{#p/basic}* 嗯...\n* 我會試試看的~",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                            ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                                ? ((SAVE.data.b.f_state_dc_kidd9 = true), ['<25>{#p/kidd}{#f/4}* 該不會是那蜘蛛吧...'])
                                : [])
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/radio}{#v/1}* 好了，好了。\n* 承認自己喜歡什麼並不丟人。",
                            "<32>{#v/0}* 我不是那個意思！",
                            "<32>{#v/1}* 說到愛，讓我們來聽聽\n  俱樂部裡流行的那種\n  爵士樂吧...",
                            '<32>{#v/1}* 《和外星人結婚》！',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                            ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd9
                                ? ((SAVE.data.b.f_state_dc_kidd9 = true),
                                    ['<25>{#p/kidd}{#f/2}* 噗，只有人類能想出來\n  這種標題吧。'])
                                : [])
                        ],
            f_echoAbyss10: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/undyne}* 我堅持不住了...",
                        '<32>{#p/undyne}* 其他人...\n  已經悄然離去了...',
                        "<32>{#p/undyne}* 他們好像迷失了自我...",
                        "<32>{#p/undyne}* 不... 不！\n* 不會這樣的...\n* 我不會忘記我是誰！",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                        ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/21}* ...'] : [])
                    ]
                    : world.genocide
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/mettaton}* 博士啊...',
                            "<32>{#p/mettaton}* 我該料到你會就這麼逃跑的...",
                            '<32>{#p/mettaton}* ...\n* 該死...',
                            "<32>{#p/mettaton}* 你不明白嗎？",
                            "<32>{#p/mettaton}* 沒有你，我沒法完善\n  那些防禦部件啊...",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : geno()
                            ? [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                "<32>{#p/mettaton}* 唉，他們馬上就到了。\n* 不知道你會怎麼應對這種場面，\n  不過...",
                                '<32>{#p/mettaton}* 不管你在這堅守陣地，\n  還是打了退堂鼓...',
                                "<33>{#p/mettaton}* 我都會全力支援你。",
                                '<32>{#p/alphys}* ...呃呵呵...',
                                '<33>* 一起加油吧，Mettaton。',
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                            ]
                            : [
                                '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                                '<32>{#p/alphys}* 等下等下！\n* 這首放在我和Undyne的約會\n  應該很完美...',
                                '<32>{#p/mettaton}* 喔真的嗎？',
                                "<32>{#p/alphys}* Mettaton！？\n* 你是從哪...\n* ...我沒說要跟誰約會！",
                                "<32>{#p/mettaton}* 喔，你別擔心。\n* 我會保守你的秘密的。\n* ...大概吧。",
                                '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。',
                                ...(world.kiddo && !SAVE.data.b.f_state_dc_kidd10
                                    ? ((SAVE.data.b.f_state_dc_kidd10 = true),
                                        [
                                            '<25>{#p/kidd}{#f/1}* Alphys想跟UNDYNE\n  結婚！？',
                                            '<25>{#f/6}* 真是每天都能學到\n  新東西啊...'
                                        ])
                                    : [])
                            ],
            f_echodude: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#npc/a}* 新世界，新星星。',
                            '<32>* 我們似乎最不需要\n  擔心這些訊星。'
                        ]
                        : [
                            '<32>{#p/basic}{#npc/a}* 這是一臺訊星。\n* 它會重複它剛剛接收到的訊息，\n  一遍又一遍...'
                        ],
                () =>
                    SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}{#npc/a}* 希望外面的星星更誠實。']
                        : ['<32>{#p/basic}{#npc/a}* 絕對不要相信一顆星星。', '<32>* 它們最典型的特質就是欺詐。']
            ),
            f_echoLobby: () =>
                world.runaway
                    ? [
                        '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                        "<32>{#p/basic}* 致鑄廠的工作者。\n* 抓緊時間收拾東西，\n  我們不再需要工作了。",
                        "<32>* 別擔心那些管道，\n  除非你想通過管道逃離！",
                        '<32>* 明白了嗎，Skrubby？\n* 那個大個子也明白了？\n* 還有我的小啾啾呢？',
                        "<32>* 那麼我們就快點出發了。",
                        '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                    ]
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            "<32>{#p/basic}* 致鑄廠的工作者。\n* 迄今為止，各位的工作完成得很好。",
                            "<32>* 現在我們自由了，\n  我們可以休息一下了！",
                            '<32>* 聽到了不，Skrubby？\n* 那個大個子也聽到了？\n* 還有我的小啾啾呢？',
                            "<32>* 是時候尋「管」作樂了！",
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ]
                        : [
                            '<32>{#s/echostart}{#p/event}{#npc/a}* 訊號開始...',
                            '<32>{#p/basic}* 我是鑄廠員工Skrubby。\n* 向您報告我和Raddy的檢修成果。',
                            geno()
                                ? "<32>{#p/alphys}* 那真是... 太-太好了...\n* 因為，我-我現在沒空修復它，\n  所以只能..."
                                : '<32>{#p/alphys}* 呃... 很-很高興\n  你們修好了它！',
                            '<32>{#p/basic}* 沒事。\n* 您啥忙都沒幫上，\n  但我還是謝謝您嘞。',
                            '<32>{#p/alphys}* ...不客氣。',
                            '<32>{#s/echostop}{#p/event}{#npc}* 訊號終止。'
                        ],
            f_kidd: pager.create(
                0,
                () =>
                    world.genocide
                        ? [
                            '<25>{#p/kidd}{#npc/a}{#f/3}* 呃... 嘿...',
                            '<25>{#p/asriel2}{#f/15}{#npc}* 怪胎。',
                            '<25>{#p/kidd}{#npc/a}{#f/1}* 嗯... 你好！\n* 哈哈哈！'
                        ]
                        : SAVE.data.n.plot === 33
                            ? [
                                '<25>{#p/kidd}{#npc/a}{#f/1}* 午飯咋樣？',
                                '<25>{#f/1}* 那矮骷髏\n  又把大家逗笑了嗎？'
                            ]
                            : [
                                '<25>{#p/kidd}{#npc/a}{#f/2}* 喲，你也是來這看她的嗎？',
                                "<25>{#f/1}* 哈哈。\n* 她最酷了！！",
                                '<25>{#f/2}* 我長大了要成為她那樣...'
                            ],
                () =>
                    world.genocide
                        ? ['<25>{#p/kidd}{#npc/a}{#f/4}* ...']
                        : SAVE.data.n.plot === 33
                            ? ['<25>{#p/kidd}{#npc/a}{#f/3}* 他總因為搞惡作劇\n  而被踢出去。']
                            : ['<25>{#p/kidd}{#npc/a}{#f/1}* 你先走吧。', "<25>{#f/1}* 我隨後就來！"]
            ),
            f_longsy: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            "<32>{#p/basic}{#npc/a}* 我和我朋友Shortsy\n  計畫成為新世界的\n  頂級建築師。",
                            "<32>* 我們將建造橋梁、高塔、\n  空間站... 只有你想不到的，\n  沒有我們建不了的！",
                            "<32>* 像往常一樣，\n  我負責搬運工具。"
                        ]
                        : SAVE.data.n.plot < 48
                            ? [
                                '<32>{#p/basic}{#npc/a}* 我和我的朋友Shortsy\n  打算建一座橋。',
                                "<32>* 他倒是有自己的想法。\n* 但就我而言，我只是不想再用\n  那個不穩定的木筏了。",
                                "<32>* 希望我們能做得\n  比之前更好吧。"
                            ]
                            : [
                                "<32>{#p/basic}{#npc/a}* 你覺得我們的橋咋樣？\n* 牢固嗎？\n* 引力夠安全嗎？",
                                "<32>* 哎呀，Shortsy反正說這橋可牢靠了。\n  它在這方面可懂行了。",
                                "<32>* 我來這基本上只是幫它拿工具！"
                            ],
                () =>
                    SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}{#npc/a}* Shortsy最近告訴了\n  我一種新工具...']
                        : SAVE.data.n.plot < 48
                            ? ["<32>{#p/basic}{#npc/a}* 情緒不穩定，\n  和其他人合不來。\n* 這就是我。"]
                            : [
                                "<32>{#p/basic}{#npc/a}* 別想太多。\n* 我是一個了不起的工具匠。\n* 就是這樣。"
                            ]
            ),
            f_shortsy: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#npc/a}* 我和我的夥伴Longsy\n  想成為全職建築師。',
                            "<32>* 我發明了一種全新的工具\n  給Longsy使用...",
                            "<32>* ...它叫做建築師之魔杖。"
                        ]
                        : SAVE.data.n.plot < 48
                            ? [
                                '<32>{#p/basic}{#npc/a}* 我和我的夥伴Longsy\n  想造座橋給國王看看。',
                                "<32>* 這會是你見過的最筆直、\n  最堅固的橋。",
                                "<32>* 我向你保證！"
                            ]
                            : [
                                '<32>{#p/basic}{#npc/a}* 瞧瞧咱倆新建的橋。',
                                '<32>* 我和Longsy覺得\n  這肯定能打動國王的...',
                                "<32>* 既然我們跟著他幹，\n  那他的鼓勵就是\n  我們的奮鬥的目標！"
                            ],
                () =>
                    SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}{#npc/a}* 有了足夠的能量，\n  它可以創造出任何東西！']
                        : SAVE.data.n.plot < 48
                            ? ["<32>{#p/basic}{#npc/a}* 不遺餘力，\n  將事情做到最好。\n* 這就是我。"]
                            : [
                                "<32>{#p/basic}{#npc/a}* 不用謝咱倆，社群服務罷了。\n* 就是這樣。"
                            ]
            ),
            f_snail1: () =>
                SAVE.data.n.plot === 72
                    ? ["<32>{#p/basic}{#npc/a}* （蝸牛，蝸牛...）\n* 好像所有人都離開了。"]
                    : ['<32>{#p/basic}{#npc/a}* （蝸牛蝸牛...）\n* 每一天都要樂觀...'],
            f_snail2: () =>
                SAVE.data.n.plot === 72
                    ? ["<32>{#p/basic}{#npc/a}* （蝸牛，蝸牛...）\n* 我們也該走了。"]
                    : ["<32>{#p/basic}{#npc/a}* （蝸牛蝸牛...）\n* 結局好，一切都好..."],
            f_starkiller: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#npc/a}* 草的味道越來越近...',
                            '<33>* 很快，我會親眼看到。'
                        ]
                        : SAVE.data.n.state_foundry_undyne !== 0
                            ? ['<32>{#p/basic}{#npc/a}* 我覺得草已經褪色了。', "<32>* 你難道不...？"]
                            : roomKills().f_telescope > 0
                                ? ['<32>{#p/basic}{#npc/a}* 草似乎離我們越來越遠了。', '<32>* 或是我的錯覺...？']
                                : [
                                    "<32>{#p/basic}{#npc/a}* 草是什麼？",
                                    ...(world.genocide
                                        ? ['<32>* 它能找到你嗎？', '<32>* 它能吃掉你嗎？', '<32>* 它能殺掉你嗎？']
                                        : ['<32>* 你能找到它嗎？', '<32>* 你能吃掉它嗎？', '<32>* 你能殺掉它嗎？']),
                                    '<32>* ...',
                                    '<32>* 你是草做的嗎？'
                                ],
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#npc/a}* 草不一定總是綠的，\n  但誰說它是綠呢？',
                            '<32>* 新世界的草\n  可能會有各種顏色。'
                        ]
                        : ["<32>{#p/basic}{#npc/a}* 這草望著那草綠。"]
            ),
            f_temmie1: () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#npc/a}* 瓦... tem聽嘟心聞...\n* 太吼辣！！！']
                    : ['<32>{#p/tem}{#npc/a}* 吼！！\n* 我素temmie！！！', '<32>* 介素我盆友...\n* temmie！！！'],
            f_temmie2: () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#npc/a}* 鴨！！！\n* tem們紫柚辣！']
                    : ['<32>{#p/tem}{#npc/a}* 吼！！\n* 我素temmie！！！', '<32>* 介素我盆友...\n* temmie！！！'],
            f_temmie3: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/tem}{#npc/a}* 瓦...\n* tem到了西嘎園，可以紙作，',
                        '<32>{#p/tem}{#npc/a}* 多多tem歷史！！！'
                    ]
                    : ['<32>{#p/tem}{#npc/a}* 吼！！\n* 我素temmie！！！', '<32>* 別忘辣我盆友！'],
            f_temmie4: () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#npc/a}* 一個滿意的發展，不是嗎？']
                    : world.genocide || 10 <= world.trueKills
                        ? [
                            ['<32>{*}{#p/tem}{#i/10}{#s.stop}* 我知道你做了什麼。', '{*}{#s.resume}{%}'],
                            ['<32>{#p/tem}{#npc/a}* 嘿。', "<32>* 我是Bob。"]
                        ][Math.min(SAVE.flag.n._bob++, 1)]
                        : SAVE.data.n.plot === 47.2
                            ? ['<32>{#p/tem}{#npc/a}* 嘿。', "<32>* 我為你的性命擔憂。"]
                            : ['<32>{#p/tem}{#npc/a}* 嘿。', "<32>* 我是Bob。"],
            f_temmie5: () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#npc/a}* 啊哇喔哇喔哇喔！！', '<32>* 銀類...\n* 炒雞...', '<32>* 噠鷹雄！！！！']
                    : ['<32>{#p/tem}{#npc/a}* 啊哇喔哇喔哇喔！！', '<32>* 銀類...\n* 炒雞...', '<32>* 萌呆呆！！！！'],
            f_temmie6: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/tem}{#npc/a}* 所有人都紫柚了...\n* 但素TEM！！！',
                        '<32>* TEM不梨開！！！\n* TEM咬看蛋！',
                        '<32>* tem家庭心福，'
                    ]
                    : [
                        '<32>{#p/tem}{#npc/a}* tem...\n* 看蛋！！！',
                        '<32>* 蛋... 會孵！！！',
                        '<32>* tem... 驕嗷父母！！'
                    ]
        },
        punchcard0: () =>
            SAVE.data.b.svr ? ['<32>{#p/human}* （但箱子是空的。）'] : ['<32>{#p/basic}* 箱子是空的。'],
        punchcard1: ['<32>{#p/basic}* 箱子裡有一張明信片。'],
        punchcard2: ['<32>{#p/basic}* 箱子裡有好幾張明信片。'],
        punchcard3: () => [choicer.create('* （拿一張明信片嗎？）', '拿一張', '算了')],
        punchcard4: ['<32>{#p/human}* （你獲得了一張明信片。）'],
        punchcardX: () => [
            "<32>{#p/human}* （周圍太暗了，\n  你看不清箱子裡面有什麼...）",
            choicer.create('* （拿走裡面的東西嗎？）', '拿走', '算了')
        ],
        puzzle1switch: () =>
            SAVE.data.b.svr
                ? ["<32>{#p/human}* （你好像拉不下開關了。）"]
                : world.darker
                    ? ["<32>{#p/basic}* 果然，又卡住了。"]
                    : ['<32>{#p/basic}* 沒想到，開關居然卡住了。', '<32>* 真是驚喜連連！'],
        puzzle2switch: () =>
            SAVE.data.b.svr
                ? ["<32>{#p/human}* （你好像拉不下開關了。）"]
                : world.darker
                    ? ["<32>{#p/basic}* 果然，又卡住了。"]
                    : ['<32>{#p/basic}* 好吧。\n* 開關還是卡住了。'],
        puzzle3switch: () =>
            SAVE.data.b.svr
                ? ["<32>{#p/human}* （你好像拉不下開關了。）"]
                : world.darker
                    ? ["<32>{#p/basic}* 果然，又卡住了。"]
                    : [
                        '<32>{#p/basic}* 這個開關沒卡住...',
                        "<32>* ...只是壞了！\n* 信不信由你喔。"
                    ],
        quiche1: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* （紙條上寫了芝士蛋糕\n  是為何要被拋棄。）',
                    choicer.create('* （拿走芝士蛋糕嗎？）', '拿走', '算了')
                ]
                : [
                    "<32>{#p/basic}* 這放著一塊芝士蛋糕，\n  上面粘著一張字條。",
                    '<32>* 「我真的承擔不了\n   照顧它的重任。」',
                    choicer.create('* （拿走芝士蛋糕嗎？）', '拿走', '算了')
                ],
        quiche2: ["<32>{#p/human}* （你帶的東西太多了。）"],
        quiche3: ['<32>{#p/human}* （你拿走了芝士蛋糕。）'],
        quiche4: () =>
            SAVE.data.b.svr
                ? [
                    [
                        '<25>{#p/asriel1}{#f/24}* 在我們搬家前，\n  $(name)總是會坐在這裡...',
                        "<25>{#f/23}* 我們會分享\n  我們之間的希望與夢想...",
                        '<25>{#f/22}* 有時也會將\n  望遠鏡帶出來看星星。',
                        '<25>{#f/13}* 即使作為星星時...\n* 我也會幻想可以回到\n  那些美好的時光...'
                    ],
                    [
                        '<25>{#p/asriel1}{#f/23}* 看看我，\n  就因為一把椅子而變得\n  這麼多愁善感。',
                        "<25>{#f/17}* 但是嘿。\n* 至少這把椅子仍然牢固。",
                        "<25>{#f/3}* 見鬼，\n  就算是Asgore魁梧的身軀\n  都坐不壞它。",
                        '<25>{#f/4}* 我是說當我們還住在\n  這裡的時候。'
                    ],
                    [
                        "<25>{#p/asriel1}{#f/13}* 想想還挺有意思...",
                        '<25>{#f/13}* 我們老家的房子\n  現在是Undyne住著。',
                        '<25>{#f/17}* 或者說直到力場被摧毀前是。',
                        "<25>{#f/13}* 你知道吧...\n  這不是一個普通的房子。\n* 這其實也是個怪物。"
                    ],
                    ['<25>{#p/asriel1}{#f/15}* ...其他所有的怪物房子\n  都消失於那場戰爭。']
                ][Math.min(asrielinter.quiche4++, 3)]
                : world.darker
                    ? ["<32>{#p/basic}* 一條長椅。"]
                    : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* 回到此處來陪伴\n  這把孤獨的長椅...\n* 感謝你的這個舉動。']
                        : ['<32>{#p/basic}* 只是工廠中央的一張\n  孤獨的長椅。\n* 沒什麼好奇怪的！'],
        quiche5: ['<32>{#p/human}* （你不打算這麼做。）'],
        run1: ['<32>{*}{#p/undyne}* 逃吧。{^20}{%}'],
        run2a1: ['<32>{#p/undyne}* ...', "<32>{#p/undyne}* 我這就去檢查情況。"],
        run2b1: ['<32>{#p/undyne}* （蠢蜘蛛...）'],
        run2a2: ['<32>{#p/undyne}* ...', "<32>{#p/undyne}* 我現在有點忙。"],
        run2b2: ['<32>{#p/undyne}* （呃...）'],
        run3: ["<25>{*}{#p/kidd}{#f/13}{#x1}* 我來救你！{#x2}{^20}{%}"],
        run4: ["<25>{*}{#p/kidd}{#f/1}{#x1}* 抱歉，我，呃...\n  我不知道怎麼著陸啊！{#x2}{^20}{%}"],
        run5: ['<25>{*}{#p/kidd}{#f/7}{#x1}* 我ㄎ...{#x2}{^20}{%}'],
        run6: ['<25>{*}{#p/kidd}{#f/7}{#x1}* 救命啊！！！{#x2}{^20}{%}'],
        run6a: [
            '<25>{*}{#p/kidd}{#f/7}{#x1}* 別{@fill=#ff0}呆呆站著{@fill=#fff}了，\n  快{@fill=#ff0}過來幫我{@fill=#fff}啊，夥計！！！{#x2}{^20}{%}'
        ],
        run6b: ['<25>{*}{#p/kidd}{#f/7}{#x1}* 快來救我啊！！！{#x2}{^20}{%}'],
        run6c: ["<25>{*}{#p/kidd}{#f/7}{#x1}* 我...\n* 我-我停不下來...！{#x2}{^20}{%}"],
        run6d: [
            '<25>{*}{#p/kidd}{#f/7}{#x1}* 你在幹什麼啊！？{#x2}{^20}{%}',
            '<25>{*}{#p/kidd}{#f/7}{#x1}* 啊...！{#x2}{^20}{%}'
        ],
        run7: [
            '<25>{#p/kidd}{#f/4}* 呃... 喲... 喲... 夥計...',
            '<25>* 如...\n* 如果你打算傷害\n  我的朋友...',
            "<25>* 你必須先通過我這關，\n  才行。"
        ],
        run8: [
            "<25>{#p/kidd}{#f/3}* 她走掉了...",
            '<25>{#f/1}* 喲，你真是救了我一命。',
            '<25>{#f/3}* 雖然我本來是想\n  來救你的啦。',
            '<25>{#f/2}* 哈哈。',
            "<25>{#f/3}* ...老兄，\n  我感覺好累啊...",
            '<25>{#f/4}* 我覺得我該回家了。',
            '<25>{#f/7}* 我...\n* 我打賭我的父母現在\n  一定擔心死我了！'
        ],
        run9: ['<25>{#p/kidd}{#f/13}* 待... 待會見，夥計！'],
        run10: [
            '<32>{#p/kidd}* Undyne...\n* 你....\n* 你救了我！',
            '<32>* 啊？\n* 那個人類跑掉了？',
            "<32>* 喲，你不要亂說...",
            '<32>* 那個人類肯定是去\n  找人幫忙了！',
            "<32>* 隨時都會回來的！",
            '<32>* ...',
            "<32>* 好-好吧，我會回家的..."
        ],
        run11: (charged: boolean) => [
            '<32>{#p/kidd}* Undyne...',
            '<32>* 你救了我...？',
            '<32>* 喲... 我...\n* 我還以為自己死定了。\n* 哈哈...',
            '<32>* ...等等，你還好嗎？\n* 你好像傷得很重...',
            '<32>* 都-都是我的錯。\n* 我該聽你的話，\n  離那人類遠一點的。',
            charged
                ? '<32>* 那人類只顧著跟你戰鬥\n  完全沒來救我...'
                : '<32>* 那人類只是站在原地...\n* 等著...\n* 等著我死。',
            '<32>* 我真的好害怕，而你...',
            "<32>* 什麼？\n* 你現在就要去\n  教訓那個人類？",
            '<32>* 但你受傷了...\n* 你該好好休息，哈哈...',
            '<32>* ...',
            "<32>* 什麼？\n  戰-戰士從來都不需要休息？",
            "<32>* Undyne...\n* 你真的超酷。"
        ],
        sansSentry: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* （你覺得這個哨站毫無作用。）']
                : world.darker
                    ? ["<32>{#p/basic}* 一個哨站。"]
                    : ["<32>{#p/basic}* Sans的第二個哨站...", "<32>* 好像一個還不夠。"],
        sansSentryBack: () =>
            !world.genocide && SAVE.data.n.state_starton_papyrus === 1
                ? ['<32>{#p/human}* （你往桌板下面看了一眼...）', "<32>{#p/basic}* 一盒骨頭。"]
                : [
                    '<32>{#p/human}* （你往桌板下面看了一眼...）',
                    ...(SAVE.data.b.svr
                        ? [
                            [
                                '<25>{#p/asriel1}{#f/13}* 這上面的內容\n  挺有意思的。',
                                "<25>{#f/17}* 你不知道時間旅行嗎？",
                                '<25>{#f/15}* 我有一個理論，\n  我的重置能力實際上\n  就是一種時間旅行。',
                                '<25>{#f/13}* ...但我從沒證明過。'
                            ],
                            [
                                "<25>{#p/asriel1}{#f/13}* 我曾試著證明\n  許多不同的理論。",
                                '<25>{#f/13}* 例如量子引力場論，\n  模擬理論，還有Skasis範式...',
                                '<25>{#f/17}* 回想起來，\n  我在上面花的時間\n  有點太多了。',
                                '<25>{#f/20}* 這並沒有使它\n  變得枯燥無味！'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/16}* 我很驚訝Sans\n  居然留下了這個。',
                                '<25>{#f/3}* 因他曾在實驗室就職，\n  所以...',
                                '<25>{#f/4}* 我想這只是感情用事吧。'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/13}* 我過去從不明白\n  怪物為何這麼多愁善感。',
                                '<25>{#f/17}* ...但我作為星星\n  那些年的經歷\n  卻改變了這種想法。'
                            ]
                        ][Math.min(asrielinter.sansSentryBack++, 3)]
                        : ["<32>{#p/basic}* 這是關於時間旅行的系列筆記。"])
                ],
        secretcallA: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<18>{#p/papyrus}{#f/9}噓，我是PAPYRUS！',
            '<18>{#f/0}這會我還在安全的地方，\n藏得好好的！',
            "<18>{#f/4}希望你沒碰上麻煩...",
            '<18>{#f/4}要是真碰上了...',
            "<19>{#f/9}我可不能繼續躲著，\n袖手旁觀了！",
            "<18>{#f/6}...好吧，眼下我\n咋都不該出去。",
            "<18>{#f/7}所以你要\n離麻煩遠遠的！",
            '<18>{#f/5}...',
            '<18>{#f/5}PAPYRUS掛了...',
            '<32>{#s/equip}{#p/event}* 滴...'
        ],
        secretcallB: [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            "<18>{#p/papyrus}{#f/0}噓，還是我，PAPYRUS。",
            '<18>{#f/5}哇喔... 這會肯定不早了。',
            '<18>{#f/6}你還好嗎？\n有沒有人... 死了？',
            '<18>{#f/5}每天我都得琢磨琢磨\n這倆問題。',
            "<18>{#f/4}雖說我也沒躲在這多久。",
            '<18>{#f/7}話說回來！！！',
            '<18>{#f/5}...',
            '<18>{#f/4}...我估摸著\n你離鑄廠出口不遠了。',
            '<18>{#f/5}唉，我很想幫你，\n可是...',
            '<18>{#f/3}現在出來恐怕\n自身都難保。',
            "<18>{#f/9}不-不過！！！\n你肯定不會讓我失望的！",
            '<18>{#f/5}...',
            '<18>{#f/5}PAPYRUS掛了...',
            '<32>{#s/equip}{#p/event}* 滴...'
        ],
        spider1: () => ['<32>{#p/basic}* ...嗯？'],
        spider2: () =>
            badSpider()
                ? ["<32>{#p/basic}* 黑暗中，有東西在前進。"]
                : ["<32>{#p/basic}* 黑暗中，有人在走動。"],
        spider3: () => (badSpider() ? ['<32>{#p/basic}* 它十分強大...'] : ['<32>{#p/basic}* 那人十分好奇...']),
        spider4: () =>
            badSpider() ? ['<32>{#p/basic}* 它極其危險...'] : ['<32>{#p/basic}* 那人神神秘秘...'],
        spider5: () => (badSpider() ? ['<32>{#p/basic}* 它...'] : ['<32>{#p/basic}* 那人...']),
        spider6: () =>
            badSpider()
                ? [
                    '<32>{#p/basic}* ...將會葬身於此。',
                    '<32>* 你以為能輕易逃得掉嗎，親？',
                    '<32>* 啊呼呼~\n* 你欠下的血債，可有的還！'
                ]
                : [
                    '<32>{#p/basic}* ...會被我在此攔住。',
                    '<32>* 你以為過了特戰隊那關，\n  就萬事大吉了，親？',
                    '<32>* 啊呼呼呼~\n* 你可真是天真！'
                ],
        spookydate0x: pager.create(
            0,
            ['<25>{#p/sans}* 嘿，我對你剛才做\n  的事表示尊敬。', '<25>{#f/3}* 謝謝你。'],
            ['<25>{#p/sans}{#f/2}* 堅持下去，\n  興許我可以帶你去吃晚餐。']
        ),
        spookydate0y: [
            "<32>{#p/basic}* Sans的後腦勺上\n  畫著一雙眼睛。",
            "<32>{#p/basic}* 感覺不太可靠的樣子。"
        ],
        spookydate0z: [
            "<32>{#p/basic}* 令人驚訝的是，\n  Sans腦袋的側面\n  沒有畫耳朵。",
            '<33>{#p/basic}* 去後面看看...'
        ],
        spookydate0: pager.create(
            0,
            ["<25>{#p/sans}* 謝謝你請我吃飯，\n  夥計。", '<25>* 很高興能暢聊一番。'],
            ['<25>{#p/sans}{#f/2}* 也許我們過會還可以\n  一起去吃個晚飯。']
        ),
        spookydate1: pager.create(
            0,
            () => [
                '<25>{#p/sans}* 嘿，我聽說你和我的兄弟\n  和好了。\n* 就是那個偉大的papyrus。',
                '<25>{#f/2}* 嗯...\n  我覺得這也是一場\n  {@fill=#ff0}偉大的勝利{@fill=#fff}。',
                "<25>{#f/0}* 我們去grillby's那慶祝一番，\n  咋樣？",
                "<25>{#f/3}* 獲得了papyrus的好感，你就\n  在我內心有了一席之地。",
                choicer.create('* （你要怎麼回答？）', '走吧', '不了')
            ],
            () => ["<25>{#p/sans}* 我的話仍然作數。\n* 去grillby's嗎？", choicer.create('* （你要怎麼回答？）', '走吧', '不了')]
        ),
        spookydate2a: () => ["<25>{#p/sans}* 那行，我會特意為你從工作中\n  抽身的..."],
        spookydate2b: () => [
            '<25>{#p/sans}* 那行，隨你便了。',
            ...(SAVE.data.n.sans_doge_warning++ < 1
                ? [
                    "<25>{#p/sans}* 只是如果你在\n  戰鬥中受傷，\n  記得別來抱怨...",
                    '<25>{#p/sans}* ...因為你忘了吃東西。'
                ]
                : [])
        ],
        spookydate3: ['<25>{#p/sans}* 這裡。\n* 我知道一條捷徑。'],
        spookydate4: ['<25>{#p/sans}* 很快的捷徑，不是嗎？'],
        spookydate5: ['<25>{#p/sans}* 嘿，各位。'],
        spookydate6: ['<32>{#p/basic}* 好啊，Sans。\n{#x1}* 嘿呀，Sansy~'],
        spookydate7: ['<32>{#p/basic}* 嘿，Sans。\n{#x1}* （嗨，Sans。）'],
        spookydate8: ["<32>{#p/basic}* 我聽說你用烈焰grillby\n  把酒吧給點燃了，\n  是這樣嗎？"],
        spookydate9: [
            '<25>{#p/sans}{#f/3}* 嗯？\n* 不，那東西完全無害。',
            '<25>{#f/2}* 能讓這酒吧燃起來的\n  只有我的招牌幽默笑話。'
        ],
        spookydate9x: ["<25>{#p/sans}{#f/3}* 哎呀，grillby，\n  大傢伙人呢？"],
        spookydate9y: [
            '<32>{#p/basic}{#npc/a}* ...\n* ...\n* ...',
            "<32>* ...Grillbz沒說那些老主顧去哪了，\n  不過你來了他也鬆口氣了。"
        ],
        spookydate9z: ['<25>{#p/sans}{#f/0}* 怪事。'],
        spookydate10: ["<25>{#p/sans}* 為什麼不過來坐一下呢，\n  夥計？"],
        spookydate11: [
            '<25>{#p/sans}* 嗷喲，小心你坐的地方。',
            '<25>{#f/2}* 有些怪咖會把放屁墊\n  放在座位上。',
            "<25>{#f/0}* ...那麼，來點餐吧。\n* 你呲點啥？",
            choicer.create('* （你要怎麼回答？）', "烈焰\nGrillbys", '\n三隻小漢堡'),
            "<26>{#p/sans}{#f/2}* 嘿，聽上去挺不錯。"
        ],
        spookydate12a: ["<25>{#p/sans}* grillby，給我們來兩份\n  烈焰你自己。"],
        spookydate12b: ["<25>{#p/sans}* grillby，給我們來兩份\n  小漢堡。"],
        spookydate13: () => [
            "<25>{#p/sans}* 那麼，你覺得我兄弟的攻擊\n  咋樣？",
            choicer.create('* （你要怎麼回答？）', '簡單', '難爆')
        ],
        spookydate14a: [
            '<25>{#p/sans}* 簡單？\n* 不會吧。',
            "<25>{#f/3}* papyrus的攻擊咋就簡單了。",
            '<25>{#f/0}* 我要是告訴你，\n  為了設計這些攻擊\n  他花了多長時間...',
'<25>{#f/0}* 你肯定會嚇到的。',
            '<26>{#f/0}* 唉，起碼他沒連軸轉，\n  中途還是歇了歇。',
            '<25>{#f/2}* 我是說，他把他的攻擊手冊\n  帶出來了。'
        ],
        spookydate14b: [
            '<25>{#p/sans}{#f/0}* 跟我說說看。',
            '<25>{#f/3}* 有一次，在經過了\n  漫長一天的攻擊修改後...',
            "<25>{#f/0}* papyrus向我透露了\n  他先前的所有製作成果。",
            '<25>{#f/0}* 說實話，在看到的那一刻，\n  我大受震撼。',
            "<25>{#f/2}* 也許有朝一日，我會設計\n  獨屬於我的攻擊。"
        ],
        spookydate15: ['<25>{#p/sans}* 吃的來了。'],
        spookydate16: [
            '<25>{#p/sans}* 不管怎樣，有一點你得承認：\n  他成功地超越了自我。',
            '<25>{#f/0}* 他的那些攻擊設計就是\n  很好的例子。',
            '<25>{#f/3}* 不久前，papyrus去拜訪了\n  皇家衛隊隊長...',
            '<25>{#f/0}* 並懇求她讓他加入\n  皇家守衛。',
            '<25>{#f/3}* 唉，她直接當著他的面把門\n  摔上了。\n* 經典的undyne式作風。',
            '<25>{#f/0}* 但幾個小時後，當papyrus\n  帶著他的設計歸來時...',
            "<25>{#f/0}* undyne大受震撼，所以她\n  決定給予他...",
            '<25>{#f/2}* ...好吧，咱姑且叫做\n  「軍人般的訓練」。'
        ],
        spookydate17: ["<25>{#p/sans}* 喔對了，我想問你點事來著。"],
        spookydate18: () => [
            '<25>{#p/sans}{#f/3}* 你曾聽說過一種\n  {@fill=#ff0}會說話的星星{@fill=#fff}嗎？',
            choicer.create('* （你要怎麼回答？）', '聽說過', '沒聽過')
        ],
        spookydate19a: [
            '<25>{#p/sans}* 原來你都知道啊。',
            '<25>{#p/sans}* {@fill=#003cff}訊星{@fill=#fff}。'
        ],
        spookydate19b: ["<25>{#p/sans}* 那麼，我來告訴你吧\n* 它叫{@fill=#003cff}訊星{@fill=#fff}。"],
        spookydate20: [
            "<25>* 工廠到處都是。",
            "<25>* 如果它們接收到一條訊息，\n  就會一遍又一遍地重複著...",
            '<25>{#f/3}* 怎樣？',
            '<25>{#f/0}* 其實，有一天，papyrus\n  對我講了一些有趣的事。',
            '<25>* 有些時候，當四下無人...',
            '<25>* 一顆星星就會從天上飛下來，\n  對他說悄悄話。',
            '<25>* 有讚揚...\n* 有建議...\n* 有鼓勵...',
            '<25>{#f/3}* ...也有預言。',
            '<25>{#f/0}* 很詭異，對嗎？',
            '<25>* 肯定是誰用了訊星對他玩了\n  什麼詭計。',
            '<25>* 幫我留意一下，行嗎？',
            '<25>* 謝了。'
        ],
        spookydate21: ['<25>{#p/sans}* ...呃，grillby。\n* 給我噴點雅莫萬用醬唄？'],
        spookydate22: ['<25>{#p/sans}{#f/8}* 真是美味啊。'],
        spookydate23: () =>
            world.population < 6
                ? [
                    "<25>{#p/sans}{#f/8}* 行吧，我要回到我的\n  崗位上了。",
                    '<25>{#f/8}* 喔對了，記得對人好點。',
                    '<25>{#f/9}* 要不然，\n  你哪天可能就後悔了。'
                ]
                : [
                    "<25>{#p/sans}{#f/8}* 行吧，我要回到我的\n  崗位上了。",
                    '<25>{#f/8}* 對了，\n  記得把吃的帶上再出門。',
                    '<25>{#f/9}* 後面可能會用上。'
                ],
        telescopeX: pager.create(
            0,
            () => [
                "<25>{#p/sans}* 我在考慮經營\n  望遠鏡生意。",
                "<25>{#f/3}* 放在我旁邊的\n  就是所謂\n  高級望遠鏡。",
                '<25>{#f/3}* 我本打算明天再\n  開放給公眾...',
                SAVE.data.b.voucher
                    ? '<25>{#f/2}* 但因為你有那張\n  高級會員券，\n  所以你可以提前用。'
                    : '<25>{#f/2}* 但咱倆很熟，\n  所以你可以提前用。',
                '<25>{#f/0}* 腫麼樣？',
                choicer.create('* （你要怎麼回答？）', '試試', '算了')
            ],
            () => ['<25>{#p/sans}{#f/2}* 要試試\n  我的望遠鏡嗎？', choicer.create('* （你要怎麼回答？）', '試試', '算了')]
        ),
        telescopeY: () =>
            SAVE.data.b.voucher
                ? ((SAVE.data.b.f_state_voucher = true),
                    [
                        "<25>{#p/sans}* 讓我猜猜...\n* 是壞掉了嗎？",
                        '<25>{#f/3}* 喔，抱歉，\n  我以為你知道呢。',
                        '<25>{#f/2}* 高級會員是需要\n  付費訂閱的。',
                        ...(world.kiddo
                            ? [
                                "<25>{#p/kidd}{#f/2}* 你在開玩笑，對吧？",
                                '<25>{#p/sans}{#f/0}* 沒。\n* 付費訂閱。',
                                '<25>{#p/kidd}{#f/1}* 可惡！'
                            ]
                            : [])
                    ])
                : [
                    "<25>{#p/sans}* 讓我猜猜...\n* 是壞掉了嗎？",
                    '<25>{#f/3}* 喔，抱歉，\n  我以為你知道呢。',
                    '<25>{#f/2}* 要使用高級望遠鏡\n  需要你具有\n  高級會員資格。',
                    ...(world.kiddo
                        ? [
                            '<25>{#p/kidd}{#f/1}* 如果我拿出會員券呢？',
                            "<25>{#p/sans}{#f/0}* 喔。\n* 這個嘛，就需要\n  付費訂閱了。",
                            '<25>{#p/kidd}{#f/1}* 可惡！'
                        ]
                        : [])
                ],
        telescopeZ: ['<25>{#p/sans}{#f/2}* 哎呀...'],
        temmiepat1: () => [
            '<32>{#p/tem}{#npc/a}* 求...\n* tem聽說銀類喜翻\n  摸摸tem...',
            '<32>* 尼想...\n* 摸摸嘛？？？',
            choicer.create('{#npc}* （你要怎麼回答？）', '素的。', '卜要！')
        ],
        temmiepat2a: ['<32>{#p/human}* （你摸了摸temmie。）', '<32>{#p/tem}{#npc/a}* 嗚哇喔哇喔哇喔.....'],
        temmiepat2b: ['<32>{#p/tem}{#npc/a}* ...', '<32>{#p/tem}{#npc/a}* 滾開。'],
        temmiepat3a: ['<32>{#p/human}* （你繼續摸temmie。）', '<32>{#p/tem}{#npc/a}* 嗚哇喔哇喔哇喔.....'],
        temmiepat3b: ['<32>{#p/tem}{#npc/a}* ...'],
        temstatue: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* （你按下了雕像後的開關。）',
                    '<32>{#p/human}* （上面的謎題描述了一個\n  像這樣的雕像，\n  並提示了一些旋律。）',
                    '<32>{#p/human}* （它還提到\n  將道具帶到對立的房間。）'
                ]
                : [
                    '<32>{#p/human}* （你按下了雕像後的開關。）',
                    "<32>{#p/basic}* ...上面刻著一個謎題。",
                    '<32>* 「玄機暗中已動，攜友故地重遊。」',
                    '<32>* 「石像如我立當中，頓悟旋律路自通。」',
                    '<32>* 「借力破迷蹤。」',
                    
                ],
        temstatueAftuh: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* （上面的謎題描述了一個\n  像這樣的雕像，\n  並提示了一些旋律。）',
                    '<32>{#p/human}* （它還提到\n  將物品帶到特定的區域。）'
                ]
                : [
                    '<32>{#p/basic}* 「開關既已啟，同友歸故地。」',
                    '<32>* 「石像如我立當中，頓悟旋律路自通。」',
                    '<32>* 「借力破迷蹤。」',
                    
                    '<32>* ...這裡的開關\n  已經被拉下來了。'
                ],
        temstatueNormuh: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* （文字強調了雕像的名氣。）']
                : ['<32>{#p/basic}* 「tem的雕像... 超級著民」\n* 「超級！！！！！！！！！」'],
        shard1: ['<32>{#p/basic}* 一地碎玻璃渣。'],
        shard2: () => [choicer.create('* （要一腳踹飛嗎？）', '走你', '算了')],
        shard3: ['<32>{#p/human}* （你想了想，還是算了。）'],
        shard4: ['<32>{#p/basic}* 憑藉著不屈不撓的意志，\n  你發動了天殘神功！'],
        shard5: () => [
            '<32>{#p/basic}* 玻璃渣被震得到處都是。',
            '<25>{#p/undyne}{#f/8}* 啐—\n* 我的天吶！！！',
            ...(SAVE.data.b.undyne_respecc
                ? ["<25>{#p/undyne}{#f/1}* 這才是我想看到的態度！"]
                : [
                    '<25>{#p/undyne}{#f/17}* 我是說，額，\n  我的意思是，你怎麼敢\n  這麼對待我的廚房...！',
                    '<25>{#p/undyne}{#f/4}* ...'
                ])
        ],
        sanscall2: () => [
            '<32>{#s/phone}{#p/event}* 鈴鈴，鈴鈴...',
            '<25>{#p/sans}{#f/0}* 嘿，你在嗎？',
            ...(SAVE.data.n.state_foundry_muffet === 1
                ? [
                    "<25>{#f/3}* 我已經有一段時間\n  沒有聽到你的訊息了。",
                    '<25>{#f/2}* 你掉進蟲洞了\n  還是怎麼著？'
                ]
                : [
                    '<25>{#f/3}* 有個孩子好像等不及\n  想再見到你了。',
                    '<25>{#f/2}* 你是等我走了之後\n  交了個新朋友嗎？'
                ]),
            '<25>{#f/0}* ...哈。',
            "<25>{#f/0}* 我猜你現在還好。",
            '<25>{#f/3}* 我真的很想密切關注你，\n  但是...',
            "<25>{#f/0}* 出於某些原因，\n  這臺昂貴的望遠鏡\n  沒法透過牆壁看到東西。",
            "<25>{#f/2}* 我被騙了。\n* 得趕緊聯繫\n  我的私人反詐專家。",
            ...(world.population === 0
                ? [
                    '<25>{#f/0}* 現在，\n  你應該不會有事的。',
                    '<25>{#f/3}* 我尋思，\n  你前頭應該沒啥東西。',
                    '<25>{#f/2}* 但別高興太早，\n  也許我搞錯了呢。'
                ]
                : world.killed5
                    ? [
                        "<25>{#f/0}* 在此期間，\n  你應該不會\n  遇到太多麻煩。",
                        '<25>{#f/3}* 你前面的區域\n  很快就會被疏散。',
                        '<25>{#f/2}* 嗯... 我挺在意\n  是否還有人在外面。'
                    ]
                    : geno()
                        ? [
                            '<25>{#f/0}* 在此期間，\n  請注意你接下來的行動。',
                            "<25>{#f/3}* 如果我們也必須撤離\n  鑄廠，那也太可惜了。"
                        ]
                        : antiAteThreshold()
                            ? [
                                '<25>{#f/0}* 還有啊，說話的時候\n  注意下對面是誰。',
                                "<25>{#f/3}* 有傳言說，\n  有誰一直在鑄廠\n  欺凌工人。"
                            ]
                            : [
                                '<25>{#f/0}* 還有啊，說話的時候\n  注意下對面是誰。',
                                "<25>{#f/3}* 有傳言說，\n  有誰在垃圾處理站附近\n  大搞破壞。"
                            ]),
            '<32>{#s/equip}{#p/event}* 滴...'
        ],
        trivia: {
            f_bbox: ["<32>{#p/basic}* 這是個休眠艙。\n* 有個人類在裡頭..."],
            ghostparty1: pager.create(
                0,
                () => [
                    '<32>{#p/finalghost}* 你好。\n* 我仍然對我們第一次見面的\n  情景歷歷在目...',
                    ...[
                        [
                            '<32>{#p/finalghost}* Toriel為你能與我交談\n  而感到驕傲。',
                            "<32>* 就我個人而言，\n  我不太在意如何和別人交談，\n  所以...",
                            "<32>* 我不知道要說啥。"
                        ],
                        [
                            '<32>{#p/finalghost}* ...多令人沮喪。',
                            '<32>* 被迫離開你的人偶\n  真的很煩人。'
                        ],
                        [
                            '<32>{#p/finalghost}* 你從我身邊逃跑\n  真的太蠢了。',
                            '<32>* Toriel完全有理由\n  擔心你會從一個無生命的\n  物體旁逃跑。'
                        ],
                        [
                            '<32>{#p/finalghost}* ...不是說我要求什麼。',
                            '<32>* 我的意思是，\n  你怎麼這麼無聊？\n* 你這一定是一種技巧吧。'
                        ],
                        [
                            '<32>{#p/finalghost}* ...哈...',
                            '<32>* ...也許，等我找到另一個\n  容器，我們兩個可以...\n  再來一次。',
                            "<32>* 你還記得，不是嗎？"
                        ],
                        [
                            '<32>{#p/finalghost}* ...多令人沮喪。',
                            '<32>* 在這麼長時間的無生命\n  的幸福中，被迫搬家...',
                            '<32>* 實在是令人不快。'
                        ],
                        [
                            '<32>{#p/finalghost}* 你調情的方式\n  可讓Toriel大吃一驚啊。',
                            '<32>* 就我個人而言，這真滑稽。',
                            '<32>* 我那時在內心偷笑。'
                        ]
                    ][SAVE.data.n.state_wastelands_dummy],
                    '<32>* 無論如何...',
                    "<32>* 我們都決定在前往新家園前，\n  在Blooky家消遣。",
                    '<32>* 我要說的是，\n  Blooky確實有一些\n  「有趣」的音樂等待排隊下載...',
                    '<32>* 「狂怒劍皇」是啥歌啊？',
                    "<32>{#p/basic}* 我的黑歷史。",
                    '<32>{#p/finalghost}* 喔？\n* 你做的？',
                    '<32>{#p/basic}* 不幸的是，是的喵。',
                    '<32>{#p/finalghost}* 我可以理解你為何不願回憶。'
                ],
                ["<32>{#p/finalghost}* 她想要擺脫她的暴力傾向。"]
            ),
            ghostparty2: pager.create(
                0,
                [
                    '<32>{#p/basic}* 確實如此，當一個憤怒的人偶\n  時間一長就無聊了。',
                    '<32>* 因此我讓Alphys幫我製作\n  一個她最愛的喵喵玩偶\n  的複製品喵。',
                    '<32>* 哇喔。\n* 哇喔！\n* 哇喔！！',
                    "<32>* 我從來都沒這麼開心過。"
                ],
                ['<32>{#p/basic}* 有時我們需要的\n  就只是一個正確的容器，\n  喵！！']
            ),
            ghostparty3: pager.create(
                0,
                [
                    "<32>{#p/mettaton}{#e/mettaton/9}* 當BLOOKY在店裡忙的時候，\n  我們決定再一次照看它的農場。",
                    "<32>{#e/mettaton/8}* 當然，\n  只在離開前哨站的前一天。",
                    "<32>{#e/mettaton/36}* 回想起來，\n  我對整件事表現得\n  有點過於戲劇化了。",
                    "<32>{#e/mettaton/36}* BLOOKY【什麼】都沒做錯...\n  我只是不想承認\n  我為此厭倦罷了。",
                    "<32>{#e/mettaton/8}* 但同時這也讓我成為了\n  一名著名演員。",
                    "<32>{#e/mettaton/37}* 不能投入情感的表演\n  根本不能算是表演！",
                    '<32>{#e/mettaton/9}* ...或者類似的東西。'
                ],
                ['<32>{#p/mettaton}{#e/mettaton/9}* 需要演員的話，\n  你知道該找誰。']
            ),
            sleepingdogs: () =>
                world.darker
                    ? [
                        "<32>{#p/basic}* 一隻站得筆挺的狗子睡得正香。",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielDogepoke++ < 1
                            ? ['<25>{#p/asriel2}{#f/10}* 不得不說，她就是這種貨色。']
                            : [])
                    ]
                    : [
                        '<32>{#p/basic}* 這隻狗看起來像是睡著了，\n  但它的姿勢是一種極度的\n  戰備狀態。',
                        '<33>{#p/basic}* 不愧是空降犬！'
                    ],
            napstacouch: pager.create(
                0,
                () =>
                    SAVE.data.b.svr
                        ? ["<32>{#p/human}* （這沙發看起來是新的，\n  但直覺告訴你並不是。）"]
                        : [
                            '<32>{#p/basic}* 這沙發新舊新舊的。',
                            ...(ghostpartyCondition()
                                ? [
                                    "<32>{#p/basic}* 我們是幽靈，\n  我們不需要沙發，喵。",
                                    '<32>* 我們只是覺得房間裡\n  擺上一個更好看！',
                                    '<32>{#p/mettaton}* 當然。\n* 沒有沙發的房間\n  就不能算是舒適的房間！',
                                    '<32>{#p/mettaton}* 最好是MTT牌的。',
                                    '<32>{#p/finalghost}* 這個需求似乎毫無意義。'
                                ]
                                : [])
                        ],
                () =>
                    SAVE.data.b.svr
                        ? ["<32>{#p/human}* （這沙發看起來是新的，\n  但直覺告訴你並不是。）"]
                        : ['<32>{#p/basic}* 這沙發新舊新舊的。']
            ),
            f_armor_sign: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子警告人們\n  要小心看起來睡著的狗。）']
                    : ['<32>{#p/basic}* 「小心睡覺的狗。」'],
            f_backsign: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上寫著\n  在不確定的情況時的\n  堅定意志的力量。）']
                    : ['<32>{#p/basic}* 「縱使身陷迷途之中，\n   也應堅定尋回真我之心。」'],
            f_cheesetable: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* （你對這奶酪有點過敏。）"]
                    : world.darker
                        ? ['<32>{#p/basic}* 幻象罷了。']
                        : SAVE.data.n.plot === 72
                            ? ['<32>{#p/basic}* 儘管是全息的，\n  但看起來一小塊奶酪被拿走了...']
                            : ['<32>{#p/basic}* 全息奶酪。', '<32>{#p/basic}* 桌子也是全息的。'],
            f_creamsign: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* （牌子上寫著\n  怪物對前哨站擁有所有權。）"]
                    : world.population_area('s') < 6 || world.genocide || SAVE.data.n.plot === 72 // NO-TRANSLATE

                        ? ['<32>{#p/basic}* 「我們聲稱前哨站是我們自己的，\n   而不再是用來俘虜我們的。」']
                        : ['<32>{#p/basic}* 象形文字被21種不同的口味\n  塗蓋住了。'],
            f_doge_sign: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上嘲笑\n  箱子無法提供實時服務。）']
                    : [
                        '<32>{#p/basic}* 「這是一個箱子。」',
                        '<32>* 「你可以把物品放進去\n   或者拿出來。」',
                        '<32>* 「但你為什麼要那麼做？」\n* 「東西放在箱子裡的時候，\n   你又用不了。」',
                        '<32>* 「謹上，一個箱子批評者。」'
                    ],
            f_doge1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上詳細說明了\n  人類與怪物靈魂之間\n  的力量差距。）']
                    : [
                        '<32>{#p/basic}* 「人類為什麼要進攻？」\n* 「誠然，他們似乎無所畏懼。」',
                        '<32>* 「人類非常強大。\n   所有怪物的靈魂加起來...」',
                        '<32>* 「...才能和一個人類靈魂的\n   力量相當。」'
                    ],
            f_doge3: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上概括了\n  人類靈魂的關鍵弱點及其影響。）']
                    : [
                        '<32>{#p/basic}* 「但人類有一個弱點。\n   諷刺的是，\n   這正是他們靈魂的力量。」',
                        '<32>* 「他們的靈魂即使在他們死後\n   也可以在人體之外持續存在。」',
                        '<32>* 「如果一個怪物打敗了一個人類，\n   怪物就可以取走人類的靈魂。」',
                        '<32>* 「一個有著人類靈魂的怪物...\n   一個擁有深不可測的力量的\n   宇宙生物。」',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielBeast++ < 1
                            ? ["<25>{#p/asriel2}{#f/15}* 宇宙甚至無法將其遮蓋..."]
                            : [])
                    ],
            f_doge5: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* （牌子上描繪了\n  你以前從未見過的東西。）"]
                    : [
                        "<32>{#p/basic}* 這是一幅悲慘的\n  太空生物的插畫...",
                        "<32>* 這幅畫有點讓人不安。",
                        ...(world.goatbro && SAVE.flag.n.ga_asrielDrawing++ < 1
                            ? [
                                "<25>{#p/asriel2}{#f/5}* $(name)，快看吶！\n* 這畫的是咱們！\n* ...大概算吧。",
                                '<26>{#f/4}* ...他們真以為我們長這樣？'
                            ]
                            : [])
                    ],
            f_gersonshop: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            "<25>{#p/asriel1}{#f/17}* 想想他經營這家商店\n  多久了...",
                            "<25>{#f/20}* 挺好奇他這些年\n  還賣過什麼東西。",
                            "<25>{#f/15}* 還記得，在這條時間軸，\n  我只在這待了倆星期。",
                            "<25>{#f/13}* 我猜他主要就賣些小玩意...",
                            '<25>{#f/16}* 來源要不就是早期的前哨站，\n  要不就是舊的母星。'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* 我聽說了一些\n  關於某個神器的事情...',
                            '<25>{#f/15}* 它特別危險，\n  甚至在戰爭中嚴禁使用。',
                            "<25>{#f/16}* 我不確定Gerson\n  是否賣過這東西。",
                            '<25>{#f/13}* 即使他還沒那麼老，\n  但足以知道它的存在。'
                        ],
                        [
                            "<25>{#p/asriel1}{#f/15}* 知曉神器存在者...\n* 一定於戰爭前出生。",
                            
                            '<25>{#f/16}* 像他這麼大的怪物\n  一定對這東西了如指掌。'
                        ]
                    ][Math.min(asrielinter.f_gersonshop++, 2)]
                    : ['<32>{#p/basic}* 「這是Gerson雜貨鋪！」\n* 「想要什麼，就來小店吧！\n   應有盡有！」'],
            f_hub_sign: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上列出了\n  每個方向的建築。）']
                    : [
                        '<32>{#p/basic}* 「向左 - 暗區」\n* 「向前 - Undyne的家」\n* 「向右 - Gerson的商店」',
                        '<32>{#p/basic}* 「向後 - 蝸牛保護區」'
                    ],
            f_lobbywindow: [
                "<32>{#p/human}* （你覺得你已經從另一個角度\n  看到過這樣的窗戶了。）"
            ],
            f_shinycab: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/13}* 看起來它\n  已經清理了這個區域...',
                            '<25>{#f/17}* 乾乾淨淨！'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/15}* 除非你認為\n  自己是個垃圾。',
                            "<25>{#f/16}* 我很了解你，\n  這不會讓我驚訝的。",
                            "<25>{#f/31}* 你可能會為此感到自豪。"
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* ...喂。',
                            "<25>{#f/17}* 你不會真的相信\n  你是個垃圾吧！？"
                        ]
                    ][Math.min(asrielinter.f_shinycab++, 2)]
                    : world.darker
                        ? ['<32>{#p/basic}* 一臺垃圾處理器。']
                        : [
                            '<32>{#p/basic}* 一臺垃圾處理器。\n* 當它啟動時，高溫氣體\n  會充斥整個房間。',
                            "<32>{#p/basic}* 那樣你可就沒命了。"
                        ],
            f_path1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上描述了\n  離開力場的方法。）']
                    : [
                        '<32>{#p/basic}* 「人類用一道力場\n   將我們囚禁於此。」',
                        '<32>* 「一般人，沒有強大的靈魂，\n   根本無法離開。」'
                    ],
            f_path2: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上描述了\n  摧毀力場的方法。）']
                    : [
                        '<32>{#p/basic}* 「想獲得自由，\n   只有一個辦法。」',
                        '<32>* 「那就是...」',
                        '<32>* 「用一股相當於七個人類靈魂的\n   強大力量擊打力場，\n   將其徹底摧毀。」'
                    ],
            f_path3: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （看來這牌子上\n  的內容可以說大錯特錯。）']
                    : [
                        '<32>{#p/basic}* 「但這片詛咒之地\n   遠在主星系外圍。」',
                        '<32>* 「指望人類找到我們，\n   簡直就是天方夜譚。」',
                        '<32>* 「我們將永遠困在這裡。」'
                    ],
            f_puzzle1_sign: () =>
                SAVE.data.b.svr
                    ? world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

                        ? [
                            '<32>{#p/human}* （牌子上的內容\n  告知你可以忽略謎題。）',
                            ...[
                                [
                                    "<25>{#p/asriel1}{#f/15}* 不管是誰寫的，\n  他的幽默感一定很爛...",
                                    "<25>{#f/17}* 那人一定是無聊至極， \n  才會忽略這麼簡單的謎題。"
                                ],
                                [
                                    '<25>{#p/asriel1}{#f/9}* 看我幹啥？\n* 我愛死謎題了。',
                                    "<25>{#f/4}* 沒人比我更愛謎題！"
                                ],
                                ['<25>{#p/asriel1}{#f/15}* ...']
                            ][Math.min(asrielinter.f_puzzle1_sign++, 2)]
                        ]
                        : ['<32>{#p/human}* （牌子上寫著\n  如何解決這個謎題的方法。）']
                    : world.postnoot && world.nootflags.has('f_puzzle1') // NO-TRANSLATE

                        ? ['<32>{#p/basic}* 「如果你不想做，\n  就直接步入下一個房間。」\n* 「忽略開關。」']
                        : [
                            '<32>{#p/basic}* 「移動塔架，\n   引導雷射射向接收器。」\n  「然後按下開關。」'
                        ],
            f_puzzle2_sign: () =>
                SAVE.data.b.svr
                    ? world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

                        ? [
                            '<32>{#p/human}* （這牌子聲明\n  沒人關心謎題。）',
                            ...[
                                [
                                    '<25>{#p/asriel1}{#f/13}* 對，有時謎題\n  會自己解決自己...',
                                    '<25>{#f/17}* 我還能說啥？'
                                ],
                                [
                                    '<25>{#p/asriel1}{#f/10}* 啥？\n* 你覺得是我\n  幫你解決了這個...？',
                                    '<25>{#f/20}* 扯。\n* 我從來沒碰過謎題，\n  我對謎題一點都不感興趣。'
                                ],
                                ['<25>{#p/asriel1}{#f/15}* ...']
                            ][Math.min(asrielinter.f_puzzle2_sign++, 2)]
                        ]
                        : ['<32>{#p/human}* （牌子上寫著\n  如何解決這個謎題的方法。）']
                    : world.postnoot && world.nootflags.has('f_puzzle2') // NO-TRANSLATE

                        ? ['<32>{#p/basic}* 「老實說，\n  誰會關心這謎題？」\n* 「這不值得。」']
                        : ['<32>{#p/basic}* 「要解決這個謎題，\n   你必須用上所有的塔架。」'],
            f_puzzle3_sign: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* （牌子上描述了\n  這個謎題被關閉的原因\n  是因為難度過高。）',
                        "<25>{#p/asriel1}{#f/20}* 對...\n  這謎題真讓人腦殼疼。"
                    ]
                    : !world.genocide && world.trueKills < 30
                        ? ['<32>{#p/basic}* 「謎題公會認為該謎題\n   難度過於逆天，\n   因此取消了這個謎題。」']
                        : world.postnoot && world.nootflags.has('f_puzzle3') // NO-TRANSLATE

                            ? [
                                '<32>{#p/basic}* 告示牌上的內容\n  都被划去了...',
                                '<32>* ...而且還劃了兩次？'
                            ]
                            : [
                                '<32>{#p/basic}* 告示牌上的內容\n  都被划去了...',
                                '<32>* ...字跡簡直不堪入目。'
                            ],
            f_statue_kidd: () =>
                SAVE.data.b.svr
                    ? ['<26>{#p/asriel1}{#f/20}* 呃，\n  試試站在另一個開關上。']
                    : ['<25>{#p/kidd}{#f/1}* 站在另一個開關上吧！'],
            f_telescope: () =>
                SAVE.data.b.svr
                    ? [
                        ["<25>{#p/asriel1}{#f/15}* Frisk。\n* 沒用的。\n* 別白費力氣了。"],
                        [
                            '<25>{#p/asriel1}{#f/13}* 你要是\n  得到了高級訂閱...',
                            "<25>{#p/asriel1}{#f/15}* 那你再也別想註銷它了。"
                        ],
                        ["<25>{#p/asriel1}{#f/16}* 一旦你嘗試，\n  一定會墜入\n  無窮無盡的付費深淵。"]
                    ][Math.min(asrielinter.f_telescope++, 2)]
                    : world.darker
                        ? ["<32>{#p/basic}* 一架望遠鏡。"]
                        : ['<32>{#p/basic}* 這是一架「高級」望遠鏡。'],
            f_temhistory: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （這幅畫描繪了\n  一種難以描述的自然界的傳說。）']
                    : world.darker
                        ? ['<32>{#p/basic}* 關於Tem的歷史。']
                        : SAVE.data.n.plot === 72
                            ? ['<32>{#p/basic}* Tem歷史。\n* 最深遠最豐富的歷史，\n  願此歷史永遠銘記在心。']
                            : ['<32>{#p/basic}* Tem的歷史。\n* 銀河系中最深遠\n  最豐富的歷史。'],
            f_temhole: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （透過這個洞，\n  你可以看到\n  隆隆作響的工廠的底部。）']
                    : world.runaway ||
                        SAVE.data.s.state_foundry_deathroom === 'f_village' || // NO-TRANSLATE

                        world.genocide ||
                        30 <= world.trueKills
                        ? ["<32>{#p/basic}* 一個洞。"]
                        : ["<32>{#p/basic}* 有個temmie在洞裡。\n* tem洞。"],
            f_trash: pager.create(
                1,
                ['<32>{#p/basic}* 是垃圾。'],
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 還是垃圾。']),
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 只是些垃圾...']),
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 垃圾就是垃圾。']),
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 垃圾形狀的垃圾。']),
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 真意外，這是垃圾。']),
                () => (world.darker ? ['<32>{#p/basic}* 是垃圾。'] : ['<32>{#p/basic}* 垃圾！！！！！！！！'])
            ),
            f_trash1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （平板上記了\n  一種特殊的花的生命循環。）']
                    : world.darker
                        ? ['<32>{#p/basic}* 這臺平板上的數據沒什麼重要的。']
                        : [
                            "<33>{#p/basic}* 這是臺舊平板電腦。\n* 數據基本都損壞了...",
                            '<32>* 「一朵來自遠方的花...\n   第二次生命...\n   星星的形狀...」',
                            "<32>* 你能認出來的就是這些。"
                        ],
            f_trash2: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （平板上記了\n  蟲洞的各種用途。）']
                    : world.darker
                        ? ['<32>{#p/basic}* 這臺平板上只記了些毫無意義的瑣事。']
                        : [
                            "<32>{#p/basic}* 這是一臺關於蟲洞旅行的\n  平板電腦。",
                            '<32>* 另外一章節提到了\n  蟲洞武器的危險...'
                        ],
            f_trash3: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （平板存了\n  一整部科幻動漫。）']
                    : world.darker
                        ? ["<32>{#p/basic}* 這臺平板上存了些影片。\n* 你對影片內容不感興趣。"]
                        : [
                            "<32>{#p/basic}* 這是一臺上面有\n  科幻動漫的舊平板電腦。",
                            '<32>* 封面上寫著\n  「喵喵星火：全集」。'
                        ],
            f_undynedummy: () =>
                SAVE.data.n.plot === 72
                    ? [
                        "<32>{#p/basic}* 我一直在考慮\n  換個新身份...",
                        '<32>* 「憤怒人偶」這風格\n  已經不適合我了。',
                        '<32>* 我想讓Alphys給我做個\n  新身體...',
                        '<32>* 像是一個... 機器人女孩，\n  或者是... 數碼美人...',
                        '<32>* 甚至說是一個科幻人偶？'
                    ]
                    : SAVE.data.b.killed_mettaton
                        ? []
                        : SAVE.data.s.state_foundry_deathroom === 'f_undyne' // NO-TRANSLATE

                            ? [
                                '<32>{#p/basic}* 不。\n* 不！\n* 不！！！',
                                '<32>* 你殺死了我唯一的\n  訓練夥伴。',
                                '<32>* 你怎麼敢殺唯一一個\n  會認真打我的人！？',
                                ...(SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                                    ? ['<32>* 就算我參加一堆愚蠢的\n  遊戲節目來分散自己的\n  注意力...']
                                    : ['<32>* 就算我多麼努力\n  欺騙自己...']),
                                "<32>* 我永遠都不會忘記\n  你對她的所作所為！"
                            ]
                            : world.goatbro
                                ? [
                                    '<32>{#p/basic}* 真的嗎...\n* 真的嗎？\n* 真-的-嗎！？',
                                    '<32>{#p/basic}* 你們真是大好人。',
                                    ...(SAVE.flag.n.ga_asrielDummy++ < 1
                                        ? ['<25>{#p/asriel2}{#f/13}* 我們... 真讓它...', '<25>{#p/asriel2}{#f/16}* ...']
                                        : [])
                                ]
                                : SAVE.data.n.plot_date > 1.3 && SAVE.data.n.plot_date < 2.1
                                    ? SAVE.data.n.state_wastelands_toriel === 0
                                        ? ["<32>{#p/basic}* 別擔心，一切正常。\n* 這種事早就見怪不怪了。"]
                                        : ['<32>{#p/basic}* 咋的。\n* 咋的？\n* 咋-的-！？', '<32>{#p/basic}* 這種事早就見怪不怪了。']
                                    : SAVE.storage.inventory.contents.includes('tvm_mewmew') // NO-TRANSLATE

                                        ? [
                                            "<32>{#p/basic}* 是啊，你和你那新喵喵玩偶\n  挺酷的，對吧？",
                                            "<32>{#p/basic}* 你還會覺得它又可愛，\n  又討人喜歡，而且...",
                                            "<32>{#p/basic}* 啥-啥！？\n* 我才沒臉紅呢！"
                                        ]
                                        : 65 <= SAVE.data.n.plot
                                            ? SAVE.data.b.a_state_hapstablook
                                                ? 68 <= SAVE.data.n.plot
                                                    ? ['<32>{#p/basic}* 你做到了，人類。', "<32>{#p/basic}* 我為我曾懷疑過你而感到抱歉。"]
                                                    : [
                                                        '<32>{#p/basic}* 好吧。\n* 好吧！\n* 好吧！',
                                                        '<32>* 你當然知道怎麼選擇你的戰鬥。'
                                                    ]
                                                : ['<32>{#p/basic}* 呃啊。\n* 呃啊！\n* 呃-啊！', '<33>{#p/basic}* 我的生活現在真是一團糟。']
                                            : 63 <= SAVE.data.n.plot && SAVE.data.b.a_state_hapstablook
                                                ? [
                                                    "<32>{#p/basic}* 嘿，你不是要參加\n  Mettaton的下一個節目嗎？",
                                                    '<32>* 你回來幹啥？',
                                                    '<32>* 喂。\n* 喂！\n* 喂！！',
                                                    '<32>* 快回到聚光燈下！\n  這樣我們才能繼續我們的計畫！'
                                                ]
                                                : SAVE.data.n.bad_lizard < 2 && 49 <= SAVE.data.n.plot
                                                    ? [
                                                        '<32>{#p/basic}* 所以。\n* 所以！\n* 所-以！',
                                                        "<32>* 你現在是電視明星了，\n  是吧？",
                                                        '<32>* 是啊，Mettaton經常能對人\n  產生這樣的影響。'
                                                    ]
                                                    : SAVE.data.n.plot === 47.2
                                                        ? ['<32>{#p/basic}* 準備好了嗎，\n  她要來了！！']
                                                        : SAVE.data.n.state_wastelands_toriel === 0
                                                            ? ['<32>{#p/basic}* 又見面了，你好啊！']
                                                            : SAVE.data.b.f_state_dummypunch
                                                                ? [
                                                                    '<32>{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！',
                                                                    ...(SAVE.data.b.f_state_dummypunch_meanie
                                                                        ? [
                                                                            "<32>* 你對人偶的擊打方式還不錯。",
                                                                            
                                                                            "<32>* 可惜的是...\n  我已經「名花有主」了！",
                                                                            '<32>* 找你自己的人偶去！',
'<32>* 現在給老子爬！'
                                                                        ]
                                                                        : [
                                                                            '<32>* 把手從我身上拿開！\n* 我又不是人人都能評價的，\n  你又不是不知道！',
                                                                            '<32>* 像你這樣軟弱無力的\n  攻擊怎能與Undyne比！'
                                                                        ])
                                                                ]
                                                                : SAVE.data.b.f_state_dummyhug
                                                                    ? [
                                                                        '<32>{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！',
                                                                        "<32>* ...你...\n* 你實際上是很好的擁抱者。",
                                                                        '<32>* 所以... 即使我仍對此恐懼... \n  我還是會欣賞你的這個嘗試。'
                                                                    ]
                                                                    : SAVE.data.b.f_state_dummytalk
                                                                        ? [
                                                                            '<32>{#p/basic}* 嘿。\n* 嘿！\n* 嘿-！',
                                                                            ...(SAVE.data.b.f_state_dummytalk_meanie
                                                                                ? [
                                                                                    "<32>* 你的凝視很嚇人。",
                                                                                    "<32>* 只可惜你把這\n  浪費在了我身上。",
                                                                                    "<32>* 因為我不在乎！"
                                                                                ]
                                                                                : [
                                                                                    '<32>* 把你的眼睛從我身上挪開！\n* 我又不是人人都能評價的，\n  你又不是不知道！',
                                                                                    "<32>* 像你這樣軟弱的凝視\n  永遠比不上Undyne那\n  兇狠的凝視！"
                                                                                ])
                                                                        ]
                                                                        : ['<32>{#p/basic}* 咋的。\n* 咋的？\n* 咋-的-！？', "<32>{#p/basic}* 這是一種生活方式。"],
            f_view: ['<25>{#p/kidd}{#f/14}* 美呆了...'],
            f_village_egg: () => ["<32>{#p/basic}* 已經熟透了。"],
            f_village_sign1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子上講述了\n  對你的到來表示歡迎。）']
                    : ['<32>{#p/tem}* 「你吼！！」\n* 「歡銀來...」\n* 「TEM村莊！！！」'],
            f_village_sign2: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （牌子講述\n  想讓你看看附近的商店。）']
                    : ['<32>{#p/tem}* 「你吼！！」\n* 「尼贏改看看...」\n* 「TEM商店！！！」'],
            f_village_sign3: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （這牌子講述的\n  內容與旁邊的牌子一致。）']
                    : ['<32>{#p/tem}* 「嚎吖！！窩通噫！！」\n* 「贏改看看...」\n* 「TEM商店！！！」'],
            fstatue: () =>
                SAVE.data.b.svr
                    ? [
                        ['<25>{#p/asriel1}{#f/13}* 這個雕像...', '<25>{#f/15}* 這雕像好像是我...？'],
                        [
                            "<25>{#p/asriel1}{#f/13}* 我不記得\n  是誰建的這個...",
                            "<25>{#f/23}* 但這肯定是在\n  我出生之後建的...",
                            '<25>{#f/22}* ...'
                        ],
                        ['<25>{#p/asriel1}{#f/22}* ...']
                    ][Math.min(asrielinter.fstatue++, 2)]
                    : ["<32>{#p/basic}* 這是座古老的、廢棄的雕像。"],
            hapstabed: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            "<25>{#p/asriel1}{#f/15}* 我不確定我們\n  在這床上睡的好不好。",
                            '<25>{#f/23}* 不管聽起來有多舒服。'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* 對。\n* 這是一張幽靈床，Frisk。',
                            '<25>{#f/13}* 比起... 不是幽靈 \n  的傢伙們，\n  幽靈有不同種類的需求。',
                            "<25>{#f/13}* 我說的不只是\n  它們的睡眠安排。"
                        ],
                        [
                            '<26>{#p/asriel1}{#f/13}* 幽靈，\n  比起其他種類的怪物...',
                            '<25>{#f/13}* 似乎更關心\n  圍繞它們自己的世界。',
                            "<25>{#f/15}* 就像它們從不會\n  沉迷於現在，而是去展望\n  自己的將來。",
                            
                            "<25>{#f/17}* 仔細一想，也許這就是\n  Mettaton喜歡電視的原因。",
                            '<25>{#f/16}* 在電視上通過演「講\n  來」獲取巨大的名氣\n  幾乎就是整個目標...'
                        ],
                        ['<26>{#p/asriel1}{#f/20}* Mettaton和他的電視節目，\n  我說的對吧？']
                    ][Math.min(asrielinter.hapstabed++, 3)]
                    : world.darker
                        ? ["<32>{#p/basic}* 這是一張幽靈床。"]
                        : SAVE.data.n.plot === 72
                            ? ["<32>{#p/basic}* 就算你拯救了銀河系\n  你也不能睡在幽靈床上。"]
                            : ["<32>{#p/basic}* 這是一張幽靈床。\n* 一旦你躺下，\n  就再也不想起來了。"],
            hapstabook1: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第一冊...',
                '<32>* 人類幻想了那麼多的奇幻故事，\n  但當我看向窗外...',
                '<32>* ...我只能看到一面牆。',
                '<32>* 我們怪物早已習慣這種\n  可悲的生活了，對嗎？',
                '<32>* 只有最小的孩子才算\n  真正地活著，對嗎？',
                '<32>* 我們的好奇心早已蕩然無存了...',
                "<32>* 這是無可否認的。",
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom1++ > 0
                    ? []
                    : [
                        '<32>{#p/basic}* ...他早年總是這樣的...',
                        '<32>{#p/basic}* 總是希望每個人如他那般快樂。',
                        '<32>{#p/basic}* 尤其是我。'
                    ])
            ],
            hapstabook2: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第二冊...',
                "<32>* 我一直在刷人類的電視連續劇。",
                "<32>* 這些人跟我聽說的不一樣...\n  實際上，他們很像我們。",
                '<32>* 他們生活，他們歡笑，他們戀愛...\n* 他們也會傷心，也會哭泣。',
'<32>* 他們做他們相信的事。',
                '<32>* 大家說，人類是一種\n  極為恐怖的物種。',
                '<32>* 但我看到他們越多...\n  我就越厭倦這種想法。',
                "<32>* 怪物並不都是星光與玫瑰。",
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom2++ > 0
                    ? []
                    : [
                        '<32>{#p/basic}* 我記得我們第一次相遇時，\n  他是第一個對我敞開心扉的人。',
                        "<32>{#p/basic}* 沒多久，\n  我也對他敞開了心扉..."
                    ])
            ],
            hapstabook3: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第三冊...',
                "<32>* 今天，\n  對我和Blooky來說\n  是一個艱難的一天。",
                "<32>* 我們一直照顧的兩隻蝸牛\n  逃走了，我們根本找不到它們。",
                '<32>* 不管我怎麼做，\n  這樣的事情總是發生。',
                "<32>* Blooky當然說這沒事，\n  但它對什麼事都這樣說。",
                '<32>* 我不知道我為什麼還要\n  在這裡工作。',
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom3++ > 0
                    ? []
                    : [
                        '<32>{#p/basic}* 我試著幫助家庭擺脫困境，\n  但都是徒勞無功...',
                        "<32>{#p/basic}* 我對此無能為力。"
                    ])
            ],
            hapstabook4: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第四冊...',
                '<32>* 我今天在商店碰到一個女孩\n  ...應該是叫，Alphys？',
                "<32>* 顯然，她將是下一位\n  皇家科學員。\n* 但誰能想到？",
                '<32>* 不管怎樣，由於她和我\n  對人類有著共同熱愛，\n  所以我們很快就成為了朋友。',
                '<33>* 真有趣... 前皇家科學員\n  也對她表示支援。',
                '<32>* 我想知道為什麼會這樣。',
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom4++ > 0
                    ? []
                    : ['<32>{#p/basic}* 喔，要是你知道就好了...'])
            ],
            hapstabook5: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第五冊...',
                '<32>* Alphys和我已經開始\n  著手一個新計畫了。',
                "<32>* 我們從那些富有想像力的\n  人類那裡獲取到了靈感...",
                '<32>* ...是讓大家來看一個新的\n  公共廣播電視連續劇！',
                "<32>* 我為此已經寫了很多\n  精心設計的劇本。",
                "<32>* 如果這都不能鼓舞人民的士氣，\n  那我不知道還有什麼可以了！",
                '<32>* 哈哈... 這麼說吧，\n  這麼做可能會\n  讓我們「一炮而紅」。',
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom5++ > 0
                    ? []
                    : ['<32>{#p/basic}* 他唯一想做的\n  就是讓人們開心...'])
            ],
            hapstabook6: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* 這是一本錄音日記。"]),
                '<32>{#p/human}* （你拿起錄音日記，\n  並翻到唯一錄製的部分。）',
                '<32>{#p/hapstablook}* 親愛的日記，第六冊...',
                '<32>* 那個Alphys... 她做了\n  我從沒想過的事。',
                '<32>* 多虧了她，我的前途\n  比任何時候都更加光明...',
                '<32>* ...我只希望其他人\n  能夠理解我的選擇。',
                '<32>* 不管接下來發生什麼，\n  我都會想念\n  和你在一起的時光。',
                '<32>* 請... 不要遺忘。\n* 也包括我自己。',
                '<32>{#p/human}* （你把書放下了。）',
                ...(SAVE.data.b.svr || SAVE.data.b.oops || SAVE.data.n.state_foundry_hapstacom6++ > 0
                    ? []
                    : SAVE.data.n.plot < 68
                        ? [
                            '<32>{#p/basic}* 一如既往的感傷，是吧？',
                            "<32>{#p/basic}* 嗯。\n* 運氣好的話，\n  你們很快就會重新相遇。"
                        ]
                        : [
                            '<32>{#p/basic}* 一如既往的感傷，是吧？',
                            "<32>{#p/basic}* 嘿。\n* 我很高興最後\n  你和他們重聚了。"
                        ])
            ],
            hapstacouch: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （但你知道在你休息前\n  還有很長的一段路要走。）']
                    : world.darker
                        ? ["<32>{#p/basic}* 只是個沙發。"]
                        : SAVE.data.n.plot === 72
                            ? [
                                "<32>{#p/basic}* 又一個沙發，又一個誘惑...\n  旅行了這麼久，你累死了。",
                                "<32>{#p/basic}* ...但你永遠也不能在這裡待著！"
                            ]
                            : [
                                "<32>{#p/basic}* 又一個沙發，又一個誘惑...\n  旅行了這麼久，你累死了。",
                                '<32>{#p/basic}* ...但你必須繼續前進！'
                            ],
            hapstaposter: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （這張海報的標題\n  描繪了一個愛情故事。）']
                    : ['<32>{#p/basic}* 「兩位不幸的戀人\n  墜入了數字深淵...」'],
            hapstatv: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/13}* 這東西肯定有\n  幾百年的歷史了...',
                            '<25>{#f/17}* 讓人好奇它怎麼這麼快\n  就從地球來到了這裡。'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* 你知道地球離這裡\n  有幾百光年吧。',
                            '<25>{#f/15}* 因此它出現在\n  這裡的可能性很小...',
                            "<25>{#f/16}* 我覺得這不可能\n  是什麼意外事件。",
                            '<25>{#f/10}* 但人類又怎麼會寄給\n  我們一個擁有幾個世紀\n  歷史的垃圾呢？'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/17}* 我的理論是有些人類... \n  屬於我們這邊。',
                            "<25>{#f/13}* 他們不能給我們\n  送去現代技術，\n  那會被發現的。",
                            '<25>{#f/1}* 但如果他們寄給我們\n  古老的技術...',
                            '<25>{#f/2}* 嗯，這樣其他人類\n  才不會注意。',
                            "<25>{#f/3}* 但那只是個理論。"
                        ],
                        ["<25>{#p/asriel1}{#f/21}* 有一個\n  額外的盟友一定很棒。"]
                    ][Math.min(asrielinter.hapstatv++, 3)]
                    : ['<32>{#p/basic}* 一臺老式地球電視機。'],
            hapstawindow: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （透過窗戶，你凝視著\n  另一面的牆。）']
                    : world.darker
                        ? ["<32>{#p/basic}* 這沒啥可看的。"]
                        : ['<32>{#p/basic}* 一處美麗的景色...\n  鑄廠外牆。'],
            k_bonedrawer: pager.create(
                0,
                () => [
                    "<25>{#p/undyne}{#f/1}* 老實說...",
                    "<25>{#f/14}* 這麼長時間了，\n  那個抽屜真的越塞越滿。",
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 全是骨頭。'
                        : "<32>{#p/basic}* 這是一個專為\n  Papyrus保留的抽屜。\n* 我喜歡這個。"
                ],
                () => [
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 全是骨頭。'
                        : "<32>{#p/basic}* 這是一個專為\n  Papyrus保留的抽屜。\n* 我喜歡這個。"
                ]
            ),
            k_broadsword: pager.create(
                0,
                () => [
                    '<25>{#p/undyne}{#f/1}* 人類爛爆了，\n  不過他們的歷史...\n  還挺炫酷的。',
                    '<25>{#f/1}* 舉個恰當的例子，\n  就是這把巨型能量劍！',
                    '<25>{#f/1}* 據歷史記載，人類使用長達\n  他們身高10倍的劍。',
                    '<25>{#f/15}* 更不用說他們的\n  跨維度傳送門了...',
                    '<25>{#f/15}* 光年級的巨型戰艦...',
                    '<25>{#f/1}* 我第一次聽說到的時候，\n  就想給自己搞一個！',
                    "<25>{#f/14}* 所以我和Alphys一起\n  做了一把巨劍的複製品。",
                    '<25>{#f/12}* 規格完全是她\n  自己算出來的！',
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 這武器似乎有一段\n  傳奇的過往。'
                        : '<32>{#p/basic}* 我見過另一把能量劍...\n  和這把很像，不過那把是真的，\n  而且小多了。'
                ],
                () => [
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 這武器似乎有一段\n  傳奇的過往。'
                        : '<32>{#p/basic}* 我見過另一把能量劍...\n  和這把很像，不過那把是真的，\n  而且小多了。'
                ]
            ),
            k_closet: pager.create(
                0,
                () => [
                    "<25>{#p/undyne}{#f/1}* 那是我的零食櫃。",
                    '<25>{#f/17}* 怎麼，你以為我在後面\n  藏了間臥室什麼的嗎？',
                    '<25>{#f/8}* 噗，哈！\n* 大家都知道我睡在\n  又冷又硬的地板上。',
                    SAVE.data.b.oops
                        ? "<32>{#p/basic}* 鎖住了。"
                        : '<32>{#p/basic}* 我覺得這個「壁櫥」內，\n  一定有比零食更好的東西。'
                ],
                () => [
                    SAVE.data.b.oops
                        ? "<32>{#p/basic}* 鎖住了。"
                        : '<32>{#p/basic}* 我覺得這個「壁櫥」內，\n  一定有比零食更好的東西。'
                ]
            ),
            k_fridge: pager.create(
                0,
                () => [
                    "<25>{#p/undyne}{#f/11}* 我不太喜歡冷食。",
                    '<25>{#f/14}* 幸運的是，Alphys改造了\n  我的冰箱，現在它\n  可以加熱食物了！',
                    '<25>{#f/1}* 很厲害吧？',
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 裡面有幾盤預熱好的\n  義大利麵。'
                        : '<32>{#p/basic}* 在家裡，一臺熱冰箱\n  就能創造奇蹟。'
                ],
                () => [
                    SAVE.data.b.oops
                        ? '<32>{#p/basic}* 裡面有幾盤預熱好的\n  義大利麵。'
                        : '<32>{#p/basic}* 在家裡，一臺熱冰箱\n  就能創造奇蹟。'
                ]
            ),
            k_otherdrawer: pager.create(
                0,
                () => [
                    SAVE.data.b.undyne_respecc
                        ? '<26>{#p/undyne}{#f/12}* 小心那些東西。'
                        : "<25>{#p/undyne}{#f/17}* 你要是從那抽屜裡偷東西，\n  你就死定了。",
                    "<32>{#p/basic}* 這是個裝滿了銀器的抽屜。\n* 裡面有叉子、勺子、刀...",
                    '<32>* ...微型宇宙長矛，等離子軍刀，\n  次元戰斧，反重力迴旋鏢...'
                ],
                [
                    "<32>{#p/basic}* 這是個裝滿了銀器的抽屜。\n* 裡面有叉子、勺子、刀...",
                    '<32>* ...微型宇宙長矛，等離子軍刀，\n  次元戰斧，反重力迴旋鏢...'
                ]
            ),
            k_piano: pager.create(
                0,
                [
                    "<25>{#p/undyne}{#f/1}* 那是我的鋼琴。",
                    '<25>{#f/16}* 不管你對人類有什麼看法，\n  他們在聲學方面都很有品味！',
                    '<32>{#p/basic}* 聞起來... 很科學。'
                ],
                ['<32>{#p/basic}* 聞起來... 很科學。']
            ),
            k_sink: pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/1}* 我有一次在去工作前\n  忘了關水槽。',
                    '<25>{#f/17}* 當我回到家時，\n  房子完全被水淹了...',
                    '<25>{#f/8}* 這對我來說完全\n  不是問題！\n* 呋呼呼！',
                    '<32>{#p/basic}* 下水道乾淨得有點嚇人，\n  完全找不到毛髮的痕跡。'
                ],
                ['<32>{#p/basic}* 下水道乾淨得有點嚇人，\n  完全找不到毛髮的痕跡。']
            ),
            k_stove: pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/1}* 這個爐子應該是\n  頂級的MTT牌產品。',
                    '<25>* 但是，雖然技術\n  進步了這麼多...',
                    '<25>* 沒什麼能比得上家裡\n  用火魔法煮的東西！',
                    '<32>{#p/basic}* 這個爐子的使用率\n  不算高也不算低。'
                ],
                ['<32>{#p/basic}* 這個爐子的使用率\n  不算高也不算低。']
            ),
            k_window: pager.create(
                0,
                () => [
                    '<25>{#p/undyne}{#f/16}* 唉。',
                    '<25>{#f/14}* Papyrus比較喜歡\n  走「風景線」。',
                    '<32>{#p/basic}* 他飛得太快了，引發了聲爆。'
                ],
                ['<32>{#p/basic}* 他飛得太快了，引發了聲爆。']
            ),
            plankstop: () =>
                SAVE.data.b.svr
                    ? [
                        ['<25>{#p/asriel1}{#f/13}* 看起來是條死路。'],
                        ["<25>{#p/asriel1}{#f/15}* 我們不能一整天\n  都站在這裡，對吧？"],
                        ['<25>{#p/asriel1}{#f/10}* 我們到底在這裡幹啥？'],
                        ['<25>{#p/asriel1}{#f/10}* ...']
                    ][Math.min(asrielinter.plankstop++, 3)]
                    : world.darker || SAVE.data.n.plot < 42.1
                        ? []
                        : ["<32>{#p/basic}* 無盡的宇宙深淵，\n  唯有遠處工廠的邊緣\n  可以映入眼帘。"],
            wallsign4: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* （這牌子標記了\n  你當前的位置方位。）']
                    : ['<32>{#p/basic}* 「向左 - 檢修豎井」\n* 「向右 - 鑄廠出口」']
        },
        truetext: {
            doge1: ['<32>{#p/basic}* ...嗯，\n  這比我的預期還要好。'],
            muffet: ['<32>{#p/basic}* ...好險啊。'],
            preundyne: [
                '<32>{#p/basic}* ...',
                "<32>* 你付出了那麼多，\n  如果要我現在質疑你...",
                "<32>* ...我才不幹。\n* 就算碰上她，\n  我相信你也能找到出路。",
                '<32>* 只要相信你自己就好...\n  對吧？',
                '<32>* ...\n* 上吧。',
                '<32>* 她得領教一下\n  善良的重要性。'
            ],
            unddate: () => [
                "<32>{#p/basic}* 所以。\n* 我們前一秒還在逃命...",
                '<32>* 下一秒呢？',
                "<32>* 我們就跟她一起做義大利麵。\n* 然後還把她的房子給燒了。",
                '<32>{#p/human}* （你聽到了小聲嚕嚕笑的聲音。）',
                ...(SAVE.data.n.plot > 64.1
                    ? [
                        "<32>{#p/basic}* 哎呀。\n* 自從你初到前哨，\n  我們已經走了很長一段路了啊。",
                        "<32>* 就算這裡沒啥可看的...\n* 我仍然對我們之間的\n  經歷倍感珍惜。",
                        
                    ]
                    : [
                        '<32>{#p/basic}* 喔，呃，抱歉！\n* 我...',
                        "<32>* 我已經有一段時間沒有...\n  這麼開心過了。",
                        '<32>* 只要有你在，\n  事情似乎永遠都不會出錯。'
                    ]),
                "<32>* 所以... 你就這樣繼續\n  保持下去，好嗎？",
                "<32>* 至於我，我會...",
                "<32>* 我會支援你的。"
            ],
            undyne1: [
                '<32>{#p/basic}* 我們做到了。\n* 我們真的做到了！',
                '<32>* 呃，我是說，你做到了。',
                '<32>* 沒錯...',
                "<32>* ...反正你總算擺脫她了，\n  這是件好事。",
                '<32>* 至少她不會再來\n  找你麻煩了。',
                '<32>* 嘿嘿。\n* 總之幹得不錯，搭檔。',
                "<32>* 大概不會有人會再\n  在你面前逞英雄了。"
            ],
            view1: [
                '<32>{#p/basic}* 看那邊...',
                "<32>* ...\n* 那是首塔。",
                "<32>* 那是我們這段旅程的目的地。",
                '<32>* 那裡銀裝素裹，\n  它的兩側，是阿拉頓雙子塔...',
                "<32>* ...\n* 我好像有些過於興奮了。",
                "<32>* 在我們到達那裡之前，\n  我們仍有很長的路要走，\n  所以...",
                "<32>* 現在，讓我們沉浸於\n  眼前的美景中吧。"
            ]
        },
        unddate0: () =>
            world.trueKills > 0 && SAVE.data.n.state_foundry_undyne === 0
                ? [
                    "<18>{#p/papyrus}所以你來了。",
                    "<18>{#f/5}UNDYNE... 現在還沒\n準備好與你做朋友。",
                    SAVE.data.b.undyne_respecc
                        ? '<18>{#f/5}她正在為因相信了你\n而感到自責...'
                        : '<18>{#f/5}她責怪自己不該\n讓你離開的...',
                    '<18>{#f/6}還說你... 應該\n在地獄裡燃燒？？',
                    '<18>{#f/7}呃，我不同意！',
                    "<18>{#f/0}但那沒關係。",
                    "<18>{#f/0}我就在這裡\n等她回來。"
                ]
                : [
                    '<18>{#p/papyrus}喔嚯，\n人類到啦！',
                    ...(SAVE.data.n.state_foundry_undyne > 0
                        ? [
                            "<18>{#f/4}...不過，我不知道\nUNDYNE現在在哪。",
                            "<18>{#f/5}她一般不會出去\n那麼久的...",
                            "<18>{#f/6}而且她連電話\n都不接！",
                            "<18>{#f/0}好吧，我就在這裡\n等她回來。"
                        ]
                        : [
                            '<18>{#f/4}你準備好接受這個...',
                            '<18>{#f/1}和皇家衛隊隊長\n做朋友的艱巨的\n任務了嗎！？！？',
                            choicer.create('* （和Undyne做朋友嗎？）', '好啊', '不要')
                        ])
                ],
        unddate0x: () =>
            world.trueKills > 0 || SAVE.data.n.state_foundry_undyne > 0
                ? [
                    "<18>{#p/papyrus}{#f/0}UNDYNE現在不在這。",
                    "<18>{#p/papyrus}{#f/4}你得像我經常做的那樣\n在這裡等她。"
                ]
                : [
                    '<18>{#p/papyrus}{#f/0}好！\n準備好消遣了嗎？',
                    choicer.create('* （和Undyne做朋友嗎？）', '好啊', '不要')
                ],
        
        unddate1a: ['<18>{#p/papyrus}{#f/0}好的！\n站在我身後！'],
        unddate1b: pager.create(
            0,
            ['<18>{#p/papyrus}{#f/4}嗯... 還沒準備好嗎？', '<18>{#f/0}沒關係，慢慢來！'],
            ['<18>{#p/papyrus}{#f/0}慢慢來！']
        ),
        unddate2a: ['<18>{#p/papyrus}{#f/4}嘶嘶...\n記得給她這個。'],
        unddate2b: ['<18>{#f/0}她愛死這些東西了！'],
        unddate3: [
            '<25>{#p/undyne}{#f/14}* 嗨，Papyrus！',
            '<25>{#f/1}* 準備好你的超機密，\n  一對一訓練了嗎？',
            '<18>{#p/papyrus}當然啦！',
            '<18>{#f/9}我還帶了個\n朋友來！'
        ],
        unddate4: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    "<25>{#p/undyne}{#f/1}* 嗨，初次見...",
                    '<25>{#f/8}* ...我的天吶！！！',
                    '<18>{#p/papyrus}{#f/6}...UNDYNE？',
                    "<25>{#p/undyne}{#f/12}* 呼，沒想到你真捎上人類了。",
                    '<18>{#p/papyrus}{#f/5}...',
                    '<25>{#p/undyne}{#f/1}* 愣著幹嘛，快進來坐坐！'
                ]
                : [
                    "<25>{#p/undyne}{#f/1}* 嗨，初次見...",
                    '<25>{#f/4}* ...',
                    '<18>{#p/papyrus}...',
                    '<25>{#p/undyne}{#f/5}* ...',
                    '<18>{#p/papyrus}{#f/5}...',
                    "<25>{#p/undyne}{#f/17}* 你們。\n* 兩個。\n* 進來坐吧？"
                ],
        
        unddate5: ['<18>{#p/papyrus}給，UNDYNE。', '<18>我的朋友想\n送給你這個！'],
        unddate5x: [
            '<25>{#p/undyne}{#f/17}* 你回來了！',
            "<25>{#f/1}* 我們一直在這等你呢！",
            "<18>{#p/papyrus}{#f/4}還有，別擔心，\n我已經給UNDYNE\n展示過你的禮物了。",
            '<18>{#f/0}她愛死它了！',
            '<25>{#p/undyne}{#f/14}* 呃，對...',
            '<25>{#f/12}* 我當然喜歡了！'
        ],
        unddate6: ['<25>{#p/undyne}{#f/1}* 呃... 謝了。'],
        unddate7: ["<25>{#f/14}* 我會，呃，\n  和別的放一起吧。"],
        unddate8: ['<25>* 所以我們準備開始了嗎？'],
        unddate9: [
            '<18>{#p/papyrus}{#f/1}哎呀哎呀！\n我剛想起來！',
            '<18>{#f/0}我得去看看我兄弟\n怎麼樣了！！',
            '<18>{#f/9}你倆玩開心點！！！'
        ],
        unddate10: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    SAVE.data.b.f_state_undynecheck
                        ? "<26>{#p/undyne}{#f/17}* 這不是在我面前試圖\n  闖入我家的人類嗎！"
                        : "<25>{#p/undyne}{#f/1}* 好。\n* 現在來看看是誰\n  要為之前的行為道歉了。",
                    "<25>{#f/16}* 說實話，\n  我說不準有沒有興致再來一架。",
                    '<25>{#f/12}* 不過，我可以先給你拿點喝的！',
                    "<25>{#f/1}* 你找個地方歇下腳，\n  我看看我能做些啥。"
                ]
                : [
                    '<25>{#p/undyne}{#f/11}* ...',
                    ...(SAVE.data.b.f_state_undynecheck
                        ? [
                            '<25>* 所以你為什麼想要\n  不顧一切地闖進我家？',
                            '<25>* 這是某種羞辱戰術嗎？',
                            '<25>* 大搖大擺地走進我的房子，\n  想要喧賓奪主？'
                        ]
                        : [
                            '<25>* 所以你來這做什麼？',
                            '<25>* 想用你的勝利打我的臉嗎？',
                            '<25>* 更變本加厲地羞辱我？'
                        ]),
                    '<25>{#f/4}* 是這樣嗎？',
                    choicer.create('* （你要怎麼回答？）', '那必須的', '才不是呢')
                ],
        unddate11a: () => [
            '<25>{#p/undyne}{#f/11}* 那你來這裡是？',
            '<25>{#f/1}* 等等，我明白了。',
            "<25>* 你覺得我會和你交朋友，\n  嗯？",
            '<25>{#f/17}* 沒錯吧？？？',
            choicer.create('* （你要怎麼回答？）', '那必須的', '才不是呢')
        ],
        unddate11a1a: [
            '<25>{#p/undyne}{#f/14}* 真的嗎？\n* 我好高興啊！\n* 我接受了！',
            "<25>{#f/8}* 讓我們一同在友誼的\n  樂園中盡情嬉戲！",
            '<25>{#f/7}* ...個鬼！',
            "<25>{#f/1}* 你是將所有人的希望\n  與夢想拒之門外的敵人！",
            "<25>* 要不是看在\n  你是我客人的份上，\n  我立馬就把你揍翻了！",
            '<25>{#f/5}* ...'
        ],
        unddate11a1b: [
            '<25>{#p/undyne}{#f/15}* 再者說...',
            '<25>{#f/17}* ...',
            '<25>{#f/4}* 你看什麼看？',
            "<25>{#f/5}* 你覺得我不會為了取悅誰\n  而和你交朋友嗎？？？",
            '<25>{#f/12}* 才不是！',
            '<25>{#f/1}* 事實上，我突然\n  改主意了...',
            '<25>{#f/7}* 因為我燃起了\n  復仇的欲望！'
        ],
        unddate11a2: [
            '<25>{#p/undyne}{#f/13}* ...',
            '<25>{#f/11}* 所以... 讓我把事情\n  搞清楚。',
            '<25>* 首先，\n  你大搖大擺進了我家。',
            "<25>{#f/7}* 你還不給我一個\n  進我家的理由？？",
            "<25>{#f/4}* 你個小毛孩！\n* 你要不是我的客人的話，\n  我就...！",
            '<25>{#f/5}* ...',
            '<25>{#f/4}* ...不，你猜怎麼著？',
            "<25>{#f/7}* 我要證明你是錯的。",
            "<25>{#f/1}* 我們可不光要\n  成為朋友。"
        ],
        unddate11b: [
            '<25>{#p/undyne}{#f/4}* 喔-吼-吼。',
            "<25>{#f/7}* 我告訴你個壞訊息，\n  小毛孩。",
            "<25>{#f/1}* 你現在可是在\n  我這裡的戰場上！",
            "<25>{#f/7}* 就憑你那點小把戲，\n  想羞辱我？\n* 門都沒有！",
            "<25>{#f/11}* 讓我好好告訴你\n  接下來會發生什麼。",
            "<25>{#f/17}* 我們來消遣消遣吧。",
            "<25>{#f/17}* 我們會過得很開心的。",
            '<25>{#f/7}* 我們要成為「朋友」。'
        ],
        unddate12a: [
            "<25>{#f/1}* 我要讓你\n  對我無法自拔...",
            "<25>{#f/7}* 完全沒法考慮其他的人！"
        ],
        unddate12b: ["<25>{#f/8}* 呋呼呼呼！\n* 這就是我完美的復仇！！"],
        unddate12c: ["<25>{#f/12}* 呃... 何不先找個\n  地方坐下呢？"],
        unddate13: () => [
            SAVE.data.b.undyne_respecc
                ? '<25>{#p/undyne}{#f/1}* 需要什麼嗎？'
                : '<25>{#p/undyne}{#f/14}* 需要什麼嗎？',
            choicer.create('* （你要怎麼回答？）', '我餓了', '想看書', '想回家', '沒啥事')
        ],
        unddate13a1: [
            '<25>{#p/undyne}{#f/1}* 你想要點零食什麼的嗎？',
            '<25>{#f/1}* 讓我看看我的柜子裡\n  有什麼。'
        ],
        unddate13a2: ['<25>{#p/undyne}{#f/1}* 啊... 這應該挺不錯的。'],
        unddate13a3: ['<25>{#p/undyne}{#f/14}* 全都是你的...\n* 呋呼呼。'],
        unddate13a4a: ["<32>{#p/human}* （你帶的東西太多了。）"],
        unddate13a4b: ['<32>{#p/human}* （你拿走了迷之零食。）'],
        unddate13a5: () =>
            SAVE.data.b.drop_snack
                ? [
                    "<25>{#p/undyne}{#f/17}* 我知道扔吃的很好玩，\n  但我不能白白浪費吧。",
                    '<25>{#p/undyne}{#f/12}* 抱歉。'
                ]
                : SAVE.data.b.undyne_respecc
                    ? [
                        "<25>{#p/undyne}{#f/17}* 就算是我的朋友\n  也不能吃兩份零食！",
                        '<25>{#p/undyne}{#f/1}* 下次再說吧。'
                    ]
                    : [
                        "<25>{#p/undyne}{#f/11}* 聽著，小混蛋，\n  每人只有一份零食。",
                        '<25>* 你得學會入鄉隨俗。'
                    ],
        unddate13b: pager.create(
            0,
            () => [
                '<25>{#p/undyne}{#f/13}* 你要看書？？？\n* 這裡看起來\n  像是圖書倌嗎？',
                "<25>{#f/1}* 你在廚房裡\n  唯一能找到的書\n  就是烹飪指南！",
                "<25>{#f/4}* 我從來不用，\n  因為烹飪應該是門藝術。",
                '<25>{#f/7}* 而不是被條條框框\n  束縛的過程。',
                '<25>{#f/5}* 為什麼就是沒有人\n  能理解呢？？？',
                SAVE.data.b.undyne_respecc
                    ? '<25>{#f/1}* ...如果你還需要什麼，\n  就告訴我吧。'
                    : '<25>{#f/14}* 好吧，\n  如果你還需要什麼的話，\n  就告訴我吧！'
            ],
            [
                "<25>{#p/undyne}{#f/1}* 你聽好，\n  星港有一家圖書倌。",
                "<25>{#f/1}* 如果你真的想看書，\n  你去那裡最合適。",
                '<25>{#f/7}* 但你現在沒法去！！！',
                '<25>{#f/14}* ...如果你還需要什麼，\n  就告訴我吧。'
            ]
        ),
        unddate13c: pager.create(
            0,
            () => [
                '<25>{#p/undyne}{#f/3}* ...',
                '<25>{#f/17}* 這裡就是家。',
                "<25>{#f/17}* 你已經在這裡了。",
                '<25>{#f/16}* 除非你指的是\n  你的母星...',
                '<25>{#f/9}* ...',
                '<25>{#f/19}* 但這任誰都沒辦法\n  做到。',
                SAVE.data.b.undyne_respecc
                    ? "<25>{#f/1}* ...如果你還需要什麼，\n  就告訴我吧。"
                    : '<25>{#f/14}* 好吧，\n  如果你還需要什麼的話，\n  就告訴我吧！'
            ],
            () => [
                "<25>{#p/undyne}{#f/16}* 我要是可以的話，\n  我可以給你描述一下\n  那個地方。",
                '<25>{#f/16}* 但我是在前哨站出生的...',
                '<25>{#f/9}* 我們對這個世界的記憶\n  似乎每天都在逐漸淡去。',
                SAVE.data.b.undyne_respecc
                    ? '<25>{#f/1}* ...如果你還需要什麼，\n  就告訴我吧。'
                    : '<25>{#f/12}* ...如果你還需要什麼，\n  就告訴我吧。'
            ]
        ),
        unddate13d: () => [
            SAVE.data.b.undyne_respecc
                ? "<25>{#p/undyne}{#f/1}* 好吧，沒事。\n* 記住，如果你改變主意，\n  隨時來找我！"
                : "<25>{#p/undyne}{#f/14}* 好吧，沒事。\n* 記住，如果你改變主意，\n  隨時來找我！"
        ],
        unddate14: () => [choicer.create('* （要坐下嗎？）', '坐下', '再等等')],
        unddate15a: () => [
            '<25>{#p/undyne}{#f/14}* 坐得舒服嗎？',
            SAVE.data.b.undyne_respecc
                ? "<25>{#f/1}* 我去拿些喝的給你。"
                : "<25>{#f/14}* 我去拿些喝的給你。"
        ],
        unddate15b: () => [
            '<25>{#p/undyne}{#f/14}* 坐得舒服嗎？',
            SAVE.data.b.undyne_respecc
                ? "<25>{#f/1}* 我去拿些喝..."
                : "<25>{#f/14}* 我去拿些喝...",
            '<25>{#f/17}* ...',
            '<25>{#f/17}* 你拿著那杯\n  電尼阻液幹啥？',
            '<25>{#f/17}* 快丟掉！'
        ],
        unddate15c: () => [
            '<32>{#p/human}* （你懷著不舍的心情，\n  丟了那杯電尼阻液。）',
'<32>{#p/human}* （好心痛。）',
            SAVE.data.b.undyne_respecc ? '<25>{#p/undyne}{#f/1}* ...謝了。' : '<25>{#p/undyne}{#f/14}* ...非常感謝。'
        ],
        unddate16: () => [
            SAVE.data.b.undyne_respecc
                ? '<25>{#p/undyne}{#f/1}* 準備完成！\n* 你來挑吧！'
                : '<25>{#p/undyne}{#f/14}* 準備完成！\n* 你想喝哪個？'
        ],
        unddate17: () => [
            "<25>{#p/undyne}{#f/17}* 喂！\n* 別站起來！",
            ...(SAVE.data.b.undyne_respecc
                ? ['<25>{#f/10}* ...', '<25>{#f/16}* 對不起，條件反射了。\n* 你是客人，\n  我不想讓你跑腿而已...']
                : ["<25>{#f/17}* 你是客人！\n* 給我坐下來慢慢享用！", '<25>{#f/17}* ...'])
        ],
        unddate18: () =>
            SAVE.data.b.undyne_respecc
                ? ['<25>{#p/undyne}{#f/1}* 嗯，你需要什麼\n  指出來不就好了？', '<25>{#f/16}* 你可以用這根矛！']
                : [
                    '<25>{#p/undyne}{#f/12}* 嗯，你需要什麼\n  指出來不就好了？',
                    '<25>{#f/12}* 你可以用這根矛！'
                ],
        unddate19x: '* 按←和→瞄準。\n* 按[Z]選定。',
        unddate19y: () => [
            SAVE.data.b.undyne_respecc ? '* Undyne\n* 英俊的魚女士。' : '* Undyne\n* 瘋狂的魚女士。',
            '* 零食櫃\n* 裡面有超多好東西！',
            '* 水\n* 聰明的選擇',
            '* 糖\n* 適合放在茶裡。',
            '* 洋梅果酒\n* 自家做的... 她是這麼說的。',
            "* 熱巧克力\n* 藍色圓罐。",
            '* 茶\n* 毫無疑問是正確選項？',
            '* 冰箱\n* 對於一頓飯來說太多了。',
            '* 能量劍\n* 傳說中的人類武器。'
        ],
        unddate20: [
            pager.create(0, ['<25>{#p/undyne}{#f/13}* 你是在...\n* 指我嗎？？？'], ['<25>{#p/undyne}{#f/13}* ？？？？？']),
            pager.create(
                0,
                [
                    "<25>{#p/undyne}{#f/17}* 你應該選一個\n  喝的東西？？",
                    "<25>{#f/1}* 那個柜子裡只有零食。"
                ],
                ["<25>{#p/undyne}{#f/1}* 真的，那個柜子裡\n  只有零食。\n* 沒有別的東西了！"],
                ['<25>{#p/undyne}{#f/1}* 真的！']
            ),
            pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/13}* 你想要水？',
                    '<25>{#f/11}* 就是... 水。',
                    '<25>{#f/11}* 沒什麼味道，\n  也沒加糖什麼的。',
                    '<25>{#f/11}* ...'
                ],
                ['<25>{#p/undyne}{#f/11}* ...']
            ),
            pager.create(
                0,
                [
                    "<25>{#p/undyne}{#f/12}* 那個糖是用來\n  加在茶裡的。",
                    "<25>{#f/7}* 我沒法給你盛一杯糖！"
                ],
                () =>
                    SAVE.data.b.undyne_respecc
                        ? ['<25>{#p/undyne}{#f/1}* 糖不可以，甜心。']
                        : ["<25>{#p/undyne}{#f/14}* 糖是加在茶裡的，\n  好嗎？"]
            ),
            pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/1}* 啊... 洋梅果酒。',
                    "<25>{#f/14}* 我想，Papyrus喜歡這東西，\n  所以沒什麼問題。"
                ],
                ['<25>{#p/undyne}{#f/17}* 你到底選不選這個？']
            ),
            pager.create(
                0,
                ['<25>{#p/undyne}{#f/14}* 沒什麼能比一杯\n  熱巧克力更棒了。'],
                ['<25>{#p/undyne}{#f/17}* 熱巧克力，是吧？']
            ),
            pager.create(0, ['<25>{#p/undyne}{#f/14}* 茶，是吧？'], ["<25>{#p/undyne}{#f/12}* 所以選茶，是嗎？"]),
            pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/4}* 冰箱！？\n* 你想要一整臺冰箱！？',
                    '<25>{#p/undyne}{#f/17}* 不行！'
                ],
                ['<25>{#p/undyne}{#f/17}* 我說了不行！'],
                ['<25>{#p/undyne}{#f/17}* 不行就是不行！'],
                ['<25>{#p/undyne}{#f/17}* 你知道「不行」是\n  什麼意思嗎？'],
                ['<25>{#p/undyne}{#f/17}* ...就是不行！'],
                ['<25>{#p/undyne}{#f/17}* ...']
            ),
            pager.create(
                0,
                [
                    '<25>{#p/undyne}{#f/1}* 那把能量劍...',
                    "<25>{#p/undyne}{#f/12}* 那是人類在戰爭中\n  用來對付我們的武器。",
                    '<25>{#p/undyne}{#f/16}* ...算是，其中一把吧。'
                ],
                ["<25>{#p/undyne}{#f/17}* 那東西不能給你。"]
            )
        ],
        unddate21: () => [choicer.create('* （要選這個喝嗎？）', '就選它了', '我再看看')],
        unddate22: [
            ['<25>{#p/undyne}{#f/16}* 也... 行吧。'],
            ["<25>{#p/undyne}{#f/1}* 來喝點果酒，補充水分吧！"],
            ['<25>{#p/undyne}{#f/14}* 開始無與倫比的\n  熱可可時間吧！'],
            ['<25>{#p/undyne}{#f/14}* 馬上給你上茶。']
        ],
        unddate22x: ["<25>{#p/undyne}{#f/12}* 還需要等一段時間\n  水才能沸騰。"],
        unddate22y: () => [
            SAVE.data.b.undyne_respecc ? '<25>{#p/undyne}{#f/1}* 你瞧。' : '<25>{#p/undyne}{#f/12}* 好了！'
        ],
        unddate23: ['<25>{#p/undyne}{#f/1}* 喝吧。'],
        unddate24: [
            ['<25>{#p/undyne}{#f/12}* 好喝嗎...？'],
            ["<25>{#p/undyne}{#f/12}* 慢點喝，有點酸。"],
            ["<25>{#p/undyne}{#f/14}* 小心點，有點燙。"],
            ["<25>{#p/undyne}{#f/14}* 小心點，有點燙。"]
        ],
        unddate25: [
            () => [
                '<25>{#p/undyne}{#f/17}* 不至於！\n* 快點喝啊！',
                '<32>{#p/human}{#s/heal}* （你喝了一口水。）',
                "<32>{#p/basic}* 它，呃...\n  嗯對，就是水。\n* 所以嘗起來還好。",
                SAVE.data.b.undyne_respecc
                    ? "<25>{#p/undyne}{#f/1}* 哈。\n* 至少你很開心。"
                    : "<25>{#p/undyne}{#f/12}* 呀，你看起來很滿足。"
            ],
            [
                "<25>{#p/undyne}{#f/17}* 你在等什麼？\n* 快點喝啊！",
                '<32>{#p/human}{#s/heal}* （你抿了一口果酒。）',
                "<32>{#p/basic}* 實在太酸了，\n  你的嘴唇都皺起來了..."
            ],
            [
                "<25>{#p/undyne}{#f/17}* 也沒有那麼燙！！\n* 快點喝啊！",
                '<32>{#p/human}{#s/heal}* （你喝了一口熱巧克力。）',
                "<32>{#p/basic}* 燙得像火燒..."
            ],
            [
                "<25>{#p/undyne}{#f/17}* 也沒有那麼燙！！\n* 快點喝啊！",
                '<32>{#p/human}{#s/heal}* （你喝了一口茶。）',
                "<32>{#p/basic}* 燙得像火燒..."
            ]
        ],
        unddate25x: () => [
            "<32>* 不過除去這點，\n  還挺好喝的。",
            ...(SAVE.data.b.undyne_respecc
                ? ["<25>{#p/undyne}{#f/1}* 哈。\n* 你喜歡就好。"]
                : [
                    "<25>{#p/undyne}{#f/12}* 味道不錯吧？",
                    '<25>{#f/8}* 我只會把最好的\n  給我絕對珍惜的朋友！'
                ])
        ],
        unddate27: [
            [
                "<25>{#p/undyne}{#f/12}* 你知道嗎，\n  你會選那個當喝的\n  還挺有意思的。",
                '<25>{#f/12}* 我是說，水。',
                '<25>{#f/1}* 我跟Asgore有一次\n  開玩笑說人類是\n  由水組成的...',
                "<25>{#f/8}* 所以如果我們喝水，\n  就是在消化人類！！！",
                "<25>{#f/16}* ...好吧，他其實\n  沒找到笑點在哪。",
                "<25>{#f/16}* 這傢伙幾乎對所有人\n  都有好感..."
            ],
            [
                "<25>{#p/undyne}{#f/12}* 你知道嗎，\n  你會選那個當喝的\n  還挺不錯的。",
                '<25>{#f/12}* 洋梅果酒...',
                '<25>{#f/1}* 那是Alphys和Papyrus\n  一起「發明」出來的。',
                "<25>{#f/16}* 我雖然不太喜歡，\n  但是當我把這個拿給\n  Asgore的時候...",
                "<25>{#f/12}* 這麼說吧，\n  他把它投入了批量生產。"
            ],
            [
                "<25>{#p/undyne}{#f/12}* 你知道嗎，\n  你會選那個當喝的\n  還挺酷的。",
                '<25>{#f/12}* 熱巧克力...',
                '<25>{#f/16}* 有一次，\n  在核心發生故障之後...',
                '<25>{#f/16}* 他們不得不重啟\n  整個供氣系統。',
                '<25>{#f/10}* 沒法取暖，空氣稀薄...\n  逐漸變得越來越冷...',
                '<25>{#f/1}* 然後，Asgore趕了過來\n  遞給我一杯熱巧克力。',
                '<25>{#f/12}* 我們就一起坐在\n  這個房間裡...'
            ],
            [
                "<25>{#p/undyne}{#f/12}* 你知道嗎，\n  你會選那個當喝的\n  可真是奇怪...",
                '<25>{#f/12}* 星花茶...',
                "<25>{#f/1}* 那一直都是Asgore\n  最喜歡的。"
            ]
        ],
        unddate28: () => [
            '<25>{#p/undyne}{#f/14}* 實際上，\n  現在我開始覺得...',
            '<25>{#f/12}* 你讓我想起他了。',
            ...(SAVE.data.b.undyne_respecc
                ? [
                    '<25>{#f/17}* 我是說，儘管你們的\n  戰鬥風格完全不同，\n  但是...',
                    "<25>{#f/1}* 你們兩個是唯二\n  可以打敗我的人！",
                    '<25>{#f/9}* ...某種意義上了。'
                ]
                : ["<25>{#f/8}* 你倆都是軟蛋！", '<25>{#f/9}* ...某種意義上啦。'])
        ],
        unddate29: [
            '<25>{#p/undyne}{#f/16}* 知道嗎，我以前\n  是個非常衝動的孩子。',
            '<25>* 有一次，我為了\n  證明自己是最強的，\n  就去嘗試和ASGORE戰鬥。',
            '<25>{#f/17}* 重點是嘗試二字。',
            '<25>{#f/1}* 我壓根連一下\n  都打不中他！',
            '<25>* 更糟的是，從頭到尾，\n  他都不肯還手！',
            '<25>{#f/9}* 我被羞辱得無地自容...',
            '<25>{#f/16}* 之後，他道了歉，\n  還說了些傻話...',
            '<25>* 「抱歉，你想知道\n   打敗我的方法嗎？」',
            '<25>{#f/1}* 我說了「想」，從那以後，\n  他就開始訓練我。',
            '<25>{#f/16}* 有一天，在練習時，\n  我終於打倒了他。',
            '<25>{#f/9}* 可我心裡... 很不是滋味。',
            '<25>{#f/12}* 他卻很高興...',
            '<25>{#f/1}* 我從沒見過哪個人\n  因為被扁了而感到榮幸。',
            '<25>* 總之，長話短說，\n  他一直訓練著我...',
            '<25>{#f/14}* 然後我現在是皇家衛隊的\n  首領了！',
            "<25>{#f/8}* 所以我成了那個訓練\n  傻瓜們戰鬥的人了！",
            '<25>{#f/1}* ...比如，呃，Papyrus。'
        ],
        unddate30: [
            '<25>{#f/16}* 但是，嗯，說實話...',
            "<25>{#f/16}* ...我自己也不知道...",
            '<25>{#f/9}* 到底能不能讓\n  Papyrus加入皇家衛隊。',
            "<25>{#f/17}* 別跟他說這些話！",
            "<25>{#f/10}* 他只是...\n* 好吧...",
            "<25>{#f/9}* 我是指，他並不笨。",
            '<25>{#f/17}* 他的攻擊設計\n  真的相當瘋狂！',
            "<25>{#f/10}* 只不過...\n* 他...",
            "<25>{#f/17}* 他太天真善良了！！！",
            '<25>{#f/16}* 我是說，你看，\n  他本應該去抓你的...',
            '<25>{#f/11}* 結果他最後竟然\n  和你成為朋友了。',
            '<25>{#f/4}* 我永遠沒辦法\n  把他派去戰鬥！',
            "<25>{#f/9}* 他會被撕成\n  微笑著的碎片的。",
            "<25>{#f/12}* 這也是我為什麼...",
            '<25>{#f/12}* 教他烹飪的原因之一，\n  你明白嗎？',
            '<25>{#f/9}* 所以，嗯，或許他\n  這輩子可以幹點別的。'
        ],
        unddate31: () => [
            SAVE.data.b.undyne_respecc
                ? '<25>{#p/undyne}{#f/1}* 喔，抱歉，我講太多了...'
                : '<25>{#p/undyne}{#f/12}* 喔，抱歉，我講太多了...'
        ],
        unddate32: [
            ["<25>{#f/12}* 你的水喝完了，是吧？"],
            ["<25>{#f/12}* 你的果酒喝完了，是吧？"],
            ["<25>{#f/12}* 你的熱巧克力喝完了，\n  是吧？"],
            ["<25>{#f/12}* 你的茶喝完了，是吧？"]
        ],
        unddate33: () => [
            SAVE.data.b.undyne_respecc
                ? "<25>{#p/undyne}{#f/1}* 哈，沒事的。\n* 我再給你倒些。"
                : "<25>{#p/undyne}{#f/12}* 哈，沒事的。\n* 我再給你倒些。"
        ],
        unddate34: ['<25>{#p/undyne}{#f/17}* 等一下...', '<25>{#f/17}* Papyrus...\n* 他的烹飪課...'],
        unddate35: [
            '<25>{#p/undyne}{#f/17}* 他現在本該在\n  上課的！！！',
            "<25>{#f/11}* 如果他沒來\n  上課的話...",
            "<25>{#f/7}* 那只能用你來\n  代替他了！"
        ],
        unddate36: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    "<25>{#f/1}* 沒錯！",
                    '<25>{#f/1}* 除了烹飪之外，\n  沒什麼能讓我和\n  Papyrus更親近了！',
                    '<25>{#f/17}* 嘿嘿，你覺得\n  我倆已經是朋友了，對吧？',
                    '<25>{#f/8}* 等上完這堂課，\n  那我們就是死黨了！'
                ]
                : [
                    "<25>{#f/1}* 沒錯！",
                    '<25>{#f/1}* 除了烹飪之外，\n  沒什麼能讓我和\n  Papyrus更親近了！',
                    '<25>{#f/17}* 也就是說，如果我\n  給你上同樣的課...',
                    "<25>{#f/8}* 我們就會變得親近到\n  超乎你的想像！"
                ],
        unddate37: ["<25>{#f/1}* 首先，\n  我們從醬開始！！"],
        unddate38: () => [
            '<25>{#f/1}* 將這些蔬菜想像成\n  你的死對頭！',
            '<25>{#f/7}* 現在，用你的拳頭\n  將他們轟殺至渣！！',
            choicer.create('* （你要怎麼做？）', '輕輕撫摸', '用力重擊')
        ],
        unddate39a: () => [
            '<32>{#p/human}* （你親切地撫摸著蔬菜。）',
            SAVE.data.b.undyne_respecc
                ? "<99>{#p/undyne}{#f/17}* 我的天啊！！！\n* 現在我【可算】知道了\n  你就是在耍我！！！"
                : '<25>{#p/undyne}{#f/17}* 我的天啊！！！\n* 不要撫摸敵人了！！！',
            "<25>{#x1}{#f/7}* 我來給你演示一下\n  該怎麼做！",
            '<25>{#f/4}* 嘎啊啊！'
        ],
        unddate39b: () =>
            world.meanie
                ? ['<32>{#p/human}* （你全力用拳頭砸向蔬菜。）']
                : [
                    '<32>{#p/human}* （你全力用拳頭砸向蔬菜。）\n* （你打倒了一顆番茄。）',
                    '<25>{#p/undyne}{#f/1}* 耶！\n* 耶！',
                    '<25>{#f/1}* 我們齊心協力與這些\n  健康食材們奮戰到底！',
                    "<25>{#x1}{#f/7}* 現在輪到我了！",
                    '<25>{#f/4}* 嘎啊啊！'
                ],
        unddate40: (res: number) => [
            ...(world.meanie && res === 1
                ? [
                    SAVE.data.b.undyne_respecc
                        ? "<25>{#p/undyne}{#f/2}* 沒錯！！！\n* 這就是我認識的戰士！！"
                        : '<25>{#p/undyne}{#f/6}* 今天可真是歡騰啊，\n  是吧？',
                    "<25>{#f/6}* 哈，我們過會再把這堆\n  弄到個碗裡去。"
                ]
                : ["<25>{#p/undyne}{#f/6}* 呃，我們過會再把這堆\n  弄到個碗裡去。"]),
            '<25>{#f/2}* 但是現在！'
        ],
        unddate41: [
            '<25>{#p/undyne}{#f/1}* 我們把麵條加進去！',
            '<25>{#f/1}* 自家制的麵條最棒了，\n  所以我總是備一些。'
        ],
        unddate41x: ['<25>{#p/undyne}{#f/12}* 呃，小子，\n  你現在可以過來了。'],
        unddate41y: () => [
            '<25>{#p/undyne}{#f/1}* 無論如何，\n  你看到這裡的麵條了吧？',
            '<25>{#f/1}* 那麼...',
            "<25>{#f/17}* 把它們丟進去！",
            choicer.create('* （你想怎麼放進去？）', '小心地', '猛烈地')
        ],
        unddate42a: [
            '<32>{#p/human}* （你將麵條一根一根地\n  放進鍋裡。）',
            '<32>* 它們與鍋底相碰，\n  叮叮作響。',
            '<25>{#p/undyne}{#f/17}* 感覺，挺好？？？',
            "<25>{#f/1}* 那麼，接下來就是\n  攪拌意面的時間了！"
        ],
        unddate42b: [
            '<32>{#p/human}* （你把所有東西都丟進鍋裡，\n  包括包裝盒。）',
            '<32>* 包裝盒和麵條咣地一聲\n  撞到鍋底。',
            "<25>{#p/undyne}{#f/17}* 耶！！！\n* 我進入狀態了！！",
            "<25>{#f/1}* 好了！\n* 現在就是攪拌\n  意面的時間！"
        ],
        unddate43: [
            '<25>{#p/undyne}{#f/1}* 經驗表明...',
            '<25>{#f/17}* 攪得越多，它就越好吃！'
        ],
        unddate44: ['<25>{#p/undyne}{#f/17}* 準備好了嗎？', "<25>{#f/1}* 來攪拌吧！"],
        unddate45: '* 連續按[Z]來攪拌！',
        unddate46: ['<25>{*}{#p/undyne}{#f/17}* 用力攪！{^20}{%}'],
        unddate46x: ["<25>{*}{#p/undyne}{#f/17}* 別光站著！{^20}{%}"],
        unddate47: ['<25>{*}{#p/undyne}{#f/7}* 再用力一點！{^20}{%}'],
        unddate47x: ['<25>{*}{#p/undyne}{#f/7}* 該死的！攪啊！{^20}{%}'],
        unddate48: ['<25>{*}{#p/undyne}{#f/8}* 再用力！！！{^20}{%}'],
        unddate48x: ['<25>{*}{#p/undyne}{#f/8}* 攪啊！！！{^20}{%}'],
        unddate49: ['<25>{*}{#p/undyne}{#f/8}* 呃，放著我來-{^10}{%}'],
        unddate50: ["<25>{#p/undyne}{#f/8}* 呋呼呼呼！\n* 就該這樣！"],
        unddate51: [
            '<25>{#p/undyne}{#f/1}* 好了，\n  現在就剩最後一步...',
            '<25>{#f/17}* 開大火！',
            '<25>{#f/1}* 爐子象徵著\n  你的熱情！',
            '<25>{#f/1}* 將你的希望與夢想\n  化為烈焰！',
            "<25>{#f/8}* 當然，\n  要不遺餘力！！！"
        ],
        unddate52: ['<25>{#p/undyne}{#f/17}* 準備好了嗎？', '<25>{#f/1}* 開始吧！'],
        unddate53: '* 按住[→]開大火！',
        unddate53x: ['<25>{*}{#p/undyne}{#f/8}* 你個蠢蛋！\n* 這個爐子只能\n  往一邊開火！！！{^20}{%}'],
        unddate54: ['<25>{*}{#p/undyne}{#f/17}* 再熱一些！{^20}{%}'],
        unddate54x: ['<25>{*}{#p/undyne}{#f/17}* 你在幹什麼？{^20}{%}'],
        unddate55: ['<25>{*}{#p/undyne}{#f/7}* 再熱些！{^20}{%}'],
        unddate55x: ['<25>{*}{#p/undyne}{#f/7}* 別再猶豫了！{^20}{%}'],
        unddate56: ['<25>{*}{#p/undyne}{#f/8}* 再熱些！！！{^20}{%}'],
        unddate56x: ['<25>{*}{#p/undyne}{#f/8}* 做就好了！！！{^20}{%}'],
        unddate57a: ['<25>{*}{#p/undyne}{#f/17}* 呃，讓我來吧...{^10}{%}'],
        unddate57b: ['<25>{*}{#p/undyne}{#f/17}* 看到了嗎，你就該-{^20}{%}'],
        unddate58: ["<25>{*}{#p/undyne}{#f/17}* 不，等下，有點太-{^10}{%}"],
        unddate59: ['<25>{#p/undyne}{#f/14}* 啊。'],
        unddate60: ["<25>{#p/undyne}{#f/14}* 啊，難怪Papyrus\n  廚藝再也沒有進步了。"],
        unddate61: ["<25>{#p/undyne}{#f/12}* 然後做些什麼？\n* 去淘些垃圾？\n* 還是綁個腕帶？"],
        unddate62: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    '<25>{#p/undyne}{#f/10}* ...',
                    '<25>{#f/9}* ...我在開什麼玩笑...',
                    "<25>{#f/16}* 我真把事做過火了，\n  是吧...？",
                    '<25>{#f/16}* 呵...'
                ]
                : [
                    '<25>{#p/undyne}{#f/10}* ...',
                    '<25>{#f/9}* ...我在開什麼玩笑...',
                    "<25>{#f/16}* 我真的搞砸了，\n  是吧...？",
                    '<25>{#f/16}* 呵...'
                ],
        unddate63: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    "<25>{#f/16}* 你知道嗎？",
                    "<25>{#f/9}* 我還沒打算就\n  這樣放棄呢。",
                    '<25>{#f/1}* 所以我放棄教你烹飪了。\n* 就這樣。',
                    "<25>{#f/14}* 我們還是有辦法\n  挽救這個爛攤子的。",
                    '<26>{#f/1}* 辦法就是...'
                ]
                : [
                    "<25>{#f/16}* 我沒辦法強迫你喜歡我，\n  人類。",
                    "<25>{#f/9}* 有些人彼此就是\n  沒辦法相處。",
                    "<25>{#f/16}* 如果你這麼覺得，\n  我能理解...",
                    "<25>{#f/9}* 如果我們做不了朋友...\n  也沒關係。",
                    "<25>{#f/9}* 因為...\n* 如果我們不是朋友..."
                ],
        unddate64: () =>
            SAVE.data.b.undyne_respecc
                ? ["<25>{#p/undyne}{#f/17}* 來一場向銀河系證明\n  我們實力的最後一戰！！"]
                : ['<25>{#p/undyne}{#f/17}* 這就意味著我能\n  毫不猶豫地幹掉你！'],
        unddate65: () => [
            '<25>{#p/undyne}{#f/12}* 好吧，還挺好玩的，\n  是吧？',
            SAVE.data.b.undyne_respecc
                ? "<25>{#f/8}* 我們下次再\n  找時間鬥一場！"
                : "<25>{#f/8}* 我們下次再約出去玩！",
            '<25>{#f/9}* 但是，呃，\n  我覺得該換個地方。',
            ...(world.postnoot
                ? [
                    '<25>{#f/1}* 順便問一下，你注意到\n  空氣中奇怪的氣味了嗎？',
                    ...(world.nootflags.has('papyrus') // NO-TRANSLATE

                        ? ['<25>{#f/13}* 甚至之前Papyrus也提到過...']
                        : ['<25>{#f/13}* ...這情況好像是\n  最近才出現的。']),
                    "<25>{#f/16}* ...也許這也沒什麼。\n* 但我好像比之前\n  虛弱了一點。"
                ]
                : []),
            ...(SAVE.data.n.plot < 68.1 || SAVE.data.b.a_state_hapstablook
                ? [
                    "<25>{#f/1}* 與此同時，我會和Papyrus\n  一起去休閒迴廊。",
                    '<25>{#f/12}* 期待能在那見到你！',
                    '<25>{#f/1}* 到那時候，\n  你可以給Papyrus打電話。',
                    "<25>{#f/8}* 因為我倆在一起，\n  這樣我也能和你說話！"
                ]
                : [
                    "<25>{#f/1}* 與此同時，\n  我會去休閒迴廊。",
                    '<25>{#f/12}* 期待能在那見到你！',
                    '<25>{#f/1}* 喔，對了，\n  Papyrus說他必須得\n  辦個什麼事情去。',
                    "<25>{#f/14}* 只是想告訴你一聲，\n  因為他現在不方便接電話。"
                ])
        ],
        unddate66: () =>
            SAVE.data.b.undyne_respecc
                ? ['<25>{#f/1}* 好啦，回見，朋友！！']
                : ['<25>{#f/14}* 好啦，回見，小混蛋！！'],
        undroom1: () => ['<25>{#p/undyne}{#f/17}* 啊？\n* 那到底是啥？'],
        undroom2: () => [
            SAVE.data.b.undyne_respecc
                ? "<25>{#p/undyne}{#f/1}* 現在最好別那麼做。"
                : "<25>{#p/undyne}{#f/12}* 我們正在努力成為朋友。"
        ],
        undroom3: () => [
            SAVE.data.b.undyne_respecc
                ? "<25>{#p/undyne}{#f/11}* 這是一種戰鬥策略，\n  是嗎？"
                : "<25>{#p/undyne}{#f/11}* 這就是你\n  交朋友的方式嗎？"
        ],
        undroom4: () => ['<25>{#p/undyne}{#f/17}* 停下！'],
        undroom5: () => ['<25>{#p/undyne}{#f/17}* ...'],
        undyne1a: [
            "<23>{#p/papyrus}{#f/30}嗨... 嗨，UNDYNE！\n我是來做我的每日報告的...",
            '<23>呃... 關於我之前跟你\n說過的那個人類...'
        ],
        undyne1b: ['<23>{#p/papyrus}{#f/30}...嗯？\n我有沒有跟人類戰鬥？'],
        undyne1c: () =>
            
            world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

                ? ['<23>{#p/papyrusnt}啊...', "<23>這-這很複雜！"]
                : ['<23>{#p/papyrusnt}當-當然了！\n我當然跟人類戰鬥了！', '<23>我英勇地和那個人類\n戰鬥過了！'],
        undyne1d: ['<23>{#p/papyrus}{#f/30}...什麼？\n我有沒有把人類抓住...？'],
        undyne1e: ['<23>{#p/papyrus}{#f/30}這-這-這個...', '<23>沒有...'],
        undyne1f: () =>
            world.edgy || (world.population_area('s') < 6 && !world.bullied_area('s')) // NO-TRANSLATE

                ? ["<23>{#p/papyrus}{#f/30}就-就像我說的那樣，\n這很複雜！"]
                : ['<23>{#p/papyrus}{#f/30}我-我是說，\n我真的很努力了，\n但-但是，最終...'],
        undyne1g: () => [
            '<23>{#p/papyrus}{#f/30}...什-什麼？',
            ...(SAVE.data.n.state_foundry_doge === 1
                ? ["<23>那人類殺掉了\n一名特戰隊隊員？？", "<23>不-不... 那人類不會\n那樣做的，對吧？"]
                : ["<23>你要親自去取走那個\n人類的靈魂？？"])
        ],
        undyne1h: () =>
            SAVE.data.n.state_foundry_doge === 1
                ? ['<23>{#p/papyrus}{#f/30}一定還有\n別的辦法的！', '<23>一定...']
                : ["<23>{#p/papyrus}{#f/30}但是UNDYNE，你不-\n不一定要把人類殺掉的！\n你看...", '<23>你看...'],
        undyne1i: () => [
            '<23>{#p/papyrus}{#f/30}我...',
            '<23>...我明白了。',
            "<23>我會盡力幫你的。",
            ...(world.postnoot
                ? [
                    '<23>順便說一下...\n你需要再檢查一遍\n供氣系統。',
                    '<23>叫啥來著？\n突變·脈衝·對流層？',
                    '<23>有些東西似乎...\n被關閉了。'
                ]
                : [])
        ],
        undyne1j: ['<25>{#p/kidd}{#f/1}* 喲！\n* 她就在那裡！'],
        undyne1k: ["<25>{#p/kidd}{#f/7}* 等等... 你是個人類，\n  對吧？"],
        undyne1l: ['<25>{*}{#p/kidd}{#f/7}* 快跑啊啊啊啊啊！{^20}{%}'],
        undyne1m: ['<25>{#p/kidd}{#f/2}* 呼...'],
        undyne1n: ['<25>{#p/kidd}{#f/1}* 呃，你可以從平臺上\n  下來了。'],
        undyne1o: ["<25>{#p/kidd}{#f/4}* 她去哪了...？"],
        undyne1p: ['<25>{#p/kidd}{#f/7}* 啊！{^10}{%}'],
        undyne1q: ['<25>{#p/kidd}{#f/2}* 噓...\n  我感覺我們可以偷偷溜過去。\n* 快跟上我！'],
        undyne1r: ["<25>{#p/kidd}{#f/4}* 這裡烏黑一片...", '<25>{#p/kidd}{#f/7}* ...但是我們得保持\n  前進！'],
        undyne1s: ['<25>{#p/kidd}{#f/7}* 有一叢植物，\n  快躲進去！'],
        undyne2a: [
            '<25>{#p/kidd}{#f/7}* 她... 她...',
            '<25>{#f/7}* 她摸到我了！！',
            "<25>{#f/4}* ...\n* 我們應該都算走運，\n  你說是吧？",
            "<25>{#f/5}* 如果她看見你，\n  那就大事不妙了。"
        ],
        undyne2ax: () => [
            '<25>{#p/kidd}{#f/1}* 她... 她...',
            "<25>{#f/1}* 哪兒都找不到她！！",
            '<25>{#f/3}* 你倆看到她了沒有？',
            '<25>{#p/asriel2}{#f/3}* 誰呀，Undyne嗎？',
            "<25>{#p/kidd}{#f/1}* 對呀！\n* 我找她找了好久！",
            '<25>{#p/asriel2}{#f/2}* （嘻嘻嘻...）',
            '<25>{#p/kidd}{#f/4}* 嗯？？',
            '<25>{#p/asriel2}{#f/4}* 沒事。',
            '<25>{#f/13}* 話說，想跟我們一塊走嗎？',
            '<25>{#p/kidd}{#f/3}* 你... 想讓我跟著你們？',
            "<25>{#p/asriel2}{#f/4}* 當然嘍，快來吧。\n* 超有趣的。",
            "<25>{#p/kidd}{#f/4}* 呃...\n* 我...",
            ...(SAVE.flag.n.genocide_milestone < 5
                ? [
                    '<25>{#p/asriel2}{#f/15}* 嘿，你知道Alphys博士\n  喜歡Undyne的事嗎？',
                    '<25>* 就是... 呃...\n  那種很親密的喜歡。'
                ]
                : [
                    '<25>{#p/asriel2}{#f/9}* 嘿，你知道Alphys博士\n  其實比Undyne還強嗎？',
                    "<25>{#f/5}* 只是她膽子太小，不敢動手！"
                ]),
            '<25>{#p/kidd}{#f/7}* 什麼？\n* 怎麼可能...',
            "<25>{#p/asriel2}{#f/1}* 呵，關於她倆...\n  我知道的還不止這些呢。",
            '<25>{#p/kidd}{#f/7}* 快告訴我！',
            '<25>{#p/asriel2}{#f/5}* 當然，當然，不過...\n* 你得跟$(name)和我走\n  我才告訴你。',
            '<25>{#p/kidd}{#f/1}* 成交！\n* 哈哈。',
            '<25>{#f/2}* ...'
        ],
        undyne2b: ['<25>{#p/kidd}{#f/1}* 喲，還等什麼呢？'],
        undyne2bx: ["<25>{#p/kidd}{#f/1}* 出發吧！"],
        undyne2c: [
            '<25>{#f/3}* 嘿... 我知道我們剛\n  認識不久，但是...',
            "<25>{#f/4}* 我，其實，並不想讓\n  Undyne傷害你...",
            '<25>* ...',
            "<25>{#f/2}* 要不然我們一起行動？",
            "<25>{#f/1}* 來吧，這會很有趣的！"
        ],
        undyne2cx: [
            '<25>{#p/kidd}{#f/2}* 老兄，我超推薦你們去看看\n  Undyne的人類追逐練習的！',
            '<25>{#f/1}* 她一秒就能扔出\n  上億隻矛呢！'
        ],
        undyne2d: ["<25>{#f/1}* 你來帶路吧！"],
        undyne2dx: () => [
            '<25>{#p/kidd}{#f/2}* 每當獵物快要逃脫...',
            '<25>{#f/1}* 她總能在最後一刻精準命中！',
            ...(SAVE.flag.n.ga_asrielKidd2++ < 1
                ? ['<25>{#p/asriel2}{#f/6}* 她可真棒啊。', '<25>{#p/kidd}{#f/1}* 是吧！！']
                : [])
        ],
        undyne2ex: [
            '<25>{#p/kidd}{#f/4}* 等等...',
            "<25>* 如果Undyne不在這，\n  誰來痛扁那些壞蛋，\n  保護大家呢？",
            '<25>{|}{#f/8}* 就是那些- {%}',
            "<25>{#p/asriel2}{#f/4}* 沒啥好擔心的。",
            '<25>{#f/3}* 而且，如果Undyne真像\n  你說的那麼多謀善斷...',
            "<25>{#f/4}* 那她就不會無緣無故離開，\n  對吧？\n* 她多聰明啊。",
            "<25>{#p/kidd}{#f/4}* 確實...\n* 你說得對...",
            '<25>{#p/kidd}{#f/2}* 對了，謝謝你們帶上我。',
            "<25>{#p/asriel2}{#f/10}* 是嗎...？\n* 我們還沒走兩步呢...",
            '<25>{#p/kidd}{#f/3}* 嗯，我很開心...\n* 不過，我還沒怎麼\n  離開過爹娘，所以...',
            "<25>{#p/asriel2}{#f/8}* 你還有爹娘？\n* 真新奇。",
            "<25>{#p/kidd}{#f/7}* 呃，我-我當然有啊，\n  誰沒爹娘啊？？",
            '<25>{#p/asriel2}{#f/16}* ...\n* 是是是。'
        ],
        undynefinal1a: () =>
            respecc()
                ? ['<32>{#p/undyne}* 七個。', '<32>* 七個人類靈魂。', '<32>* ...']
                : [
                    '<32>{#p/undyne}* 七個。',
                    '<32>* 有了七個靈魂，\n  {@fill=#f00}ASGORE國王{@fill=#fff}就能成為神。',
                    '<32>{#x1}* 六個。',
                    "<32>{#x1}* 我們已經有了六個。",
                    '<32>{#x1}* 懂了嗎？',
                    '<32>{#x1}* 只要有了你這最後一個靈魂，\n  怪物們就能重獲自由。',
                    '<32>{#x3}* 不過在這之前，\n  我應該遵循前輩們立下的規矩...',
                    '<32>{#x4}* 向你講述一段\n  我族人民的悲慘歷史。',
                    '<32>{#x5}* 一切，都要從很久以前說起...'
                ],
        undynefinal1b: () => (respecc() ? ['<32>{#p/undyne}* 不...'] : ['<32>{#p/undyne}* 你猜怎麼著？']),
        undynefinal1c: () =>
            respecc() ? ['<32>{*}{#p/undyne}{#i/2}* 不行！！{^999}'] : ['<32>{*}{#p/undyne}{#i/2}* 去它的吧！！{^999}'],
        undynefinal1d: () =>
            respecc()
                ? ['<32>{*}{#p/undyne}{#i/1}* 我怎麼能那樣居高臨下地\n  對你說話！！{^999}']
                : ['<32>{*}{#p/undyne}{#i/1}* 我幹嘛要告訴你那段故事！！{^999}'],
        undynefinal1e: () =>
            respecc()
                ? ["<32>{*}{#p/undyne}{#i/1}* 明明你都光榮地戰鬥過了！！{^999}"]
                : ["<32>{*}{#p/undyne}{#i/1}* 明明你馬上就得受死了！！{^999}"],
        undynefinal1f: ['<32>{*}{#p/undyne}{#i/2}* 嘎啊啊啊啊啊啊啊啊啊！！！{^999}'],
        undynefinal1g: () =>
            respecc()
                ? [
                    '<25>{#p/undyne}{#f/1}* 聽著！',
                    '<25>* 我喜歡你戰鬥的方式。',
                    "<25>{#f/16}* 你就像一個真正的戰士，\n  把敵人痛扁一頓...",
                    '<25>{#f/17}* ...然後放他們一條生路，\n  讓他們繼續書寫自己的故事！',
                    '<25>{#f/10}* 多麼英勇啊...'
                ]
                : [
                    '<25>{#p/undyne}{#f/1}* 人類！',
                    "<25>* 你正是所有人通往希望\n  與夢想之路上的絆腳石！",
                    "<25>{#f/11}* Alphys的歷史電影讓我\n  以為人類很酷...",
                    '<25>{#f/16}* ...比如那些生命太空飛行器\n  還有跨維度傳送門。',
                    '<25>{#f/4}* 而你呢？？？'
                ],
        undynefinal2a: () =>
            respecc()
                ? [
                    '<25>{#f/1}* 之前那樣說你，\n  我得和你道個歉。',
                    '<25>{#f/16}* 你和你的朋友\n  只是在相互扶持而已。',
                    '<25>{#f/1}* 哈！我當然能理解。',
                    "<25>{#f/17}* 還有當地的特戰隊！",
                    "<25>{#f/9}* 我承認，我被你打動了...",
                    ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                        ? [
                            '<25>* 你不僅成功地\n  通過了它們...',
                            '<25>{#f/10}* 而且還和它們\n  交上了朋友？',
                            "<25>{#f/1}* 我想我不該為此驚訝。\n* 它們喜歡你的作風。"
                        ]
                        : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                            ? [
                                '<25>{#f/10}* 你幹了啥\n  讓她們感覺那麼尷尬？',
                                "<25>{#f/11}* 我從沒看到\n  她們倆這麼臉紅過。"
                            ]
                            : [
                                '<25>{#f/10}* 他們都把刀架你脖子上了，\n  你還是一往無前。',
                                '<25>{#f/1}* 果真是萬裡挑一的勇士！'
                            ]),
                    '<25>{#f/8}* ...回到正題上！',
                    '<25>{#f/1}* 一開始，我打算殺了你，\n  奪走你的靈魂。',
                    '<25>{#f/11}* 不過欣賞了你的戰鬥後...',
                    "<25>{#f/8}* 之前那想法\n  可就太小兒科了！！",
                    "<25>{#f/1}* 不... 我要看看\n  你是什麼做的！",
                    "<25>{#f/4}* 只有當我\n  光明正大地擊敗了你...",
                    "<25>{#f/5}* 我將贏得\n  我們應得的自由！",
                    '<25>{#f/16}* 但如果，\n  你設法擊敗了我...',
                    "<25>{#f/9}* 我就讓你通過這裡。",
                    '<25>{#f/8}* ...除非你\n  的力量強大到\n  足以擊敗我！！！',
                    "<25>{#f/1}* 當你準備好就\n  上前迎戰吧！\n* 呋呼呼呼！"
                ]
                : [
                    "<25>{#f/7}* 你就是個懦夫！",
                    ...(SAVE.data.b.f_state_kidd_betray
                        ? [
                            '<25>{#f/16}* 記得你之前的朋友嗎？',
                            '<25>{#f/17}* 被你拋棄的那個？',
                            "<25>{#f/13}* 縱使那孩子命懸一線，\n  可你連眼皮都沒翻一下。",
                            ...(world.trueKills === 0 && SAVE.data.n.bully > 9
                                ? [
                                    "<25>{#f/9}* 假設你救了那孩子，\n  那麼你的戰鬥風格\n  將會贏得我的尊重。",
                                    "<25>{#f/16}* 但就算那樣，\n  也別天真地以為\n  你可以獲得任何榮譽。"
                                ]
                                : ['<25>{#f/16}* 典型的人類。\n* 總是當面一套背後一套。']),
                            "<25>{#f/4}* ...回歸正題\n* 在這裡我不需要你\n  假惺惺地扮演一個聖人...",
                            '<25>{#f/7}* 因為對我們而言\n  最重要的是\n  你的靈魂！'
                        ]
                        : [
                            '<25>* 你躲在那孩子的身後，\n  得以再次從我手心裡逃走！',
                            "<25>{#f/9}* 我承認，我被你打動了...",
                            ...(SAVE.data.n.state_foundry_doge === 2 && SAVE.data.n.state_foundry_muffet === 2
                                ? [
                                    '<25>* 你不僅設法通過了\n  當地的特戰隊....',
                                    '<25>{#f/10}* 而且還和它們\n  交上了朋友？',
                                    "<25>{#f/11}* 挺有膽量的，小混蛋。",
                                    '<25>{#f/8}* ...但這並不重要！'
                                ]
                                : SAVE.data.n.state_foundry_doge === 3 && SAVE.data.n.state_foundry_muffet === 3
                                    ? [
                                        '<25>{#f/10}* 你幹了啥讓當地的\n  特戰隊那麼尷尬？',
                                        "<25>{#f/11}* 我從沒看到\n  她們倆這麼臉紅過。",
                                        "<25>{#f/8}* ...說得好像\n  對我有用一樣！"
                                    ]
                                    : [
                                        "<25>{#f/10}* 你在誰都沒有殺害的情況下\n  來到了這裡。",
                                        "<25>{#f/11}* 祝賀你啊，小混蛋。\n* 你比一般的人類好一點。",
                                        '<25>{#f/8}* ...說得好像我在乎一樣！'
                                    ]),
                            '<25>{#f/4}* 你知道對大家而言\n  什麼事才更有意義嗎？',
                            '<25>{#f/7}* 就是你的死！！！'
                        ]),
                    '<25>{#f/17}* 你的生命不過是\n  將自由阻擋在我們\n  面前的障礙！！',
                    "<25>{#f/1}* 就在此刻，\n  我能感受到大家的心\n  正隨著共同的節奏鼓動！",
                    "<25>* 每個人一生\n  都在等待這一刻！",
                    "<25>{#f/9}* 但我們一點也不慌張。",
                    "<25>{#f/17}* 只要所有人團結一心，\n  我們絕不會敗！",
                    "<25>{#f/1}* 來吧，人類！\n* 讓我們了結這一切吧，\n  就在此時，就在此地！",
                    "<25>{#f/17}* 我會讓你見識一下\n  怪物們的決心有多麼強大！",
                    "<25>{#f/1}* 當你準備好就\n  上前迎戰吧！\n* 呋呼呼呼！"
                ],
        undynefinal2b1: ["<25>{#f/7}* 你只是個冷血殺手罷了！"],
        undynefinal2b1a: ['<25>{#f/11}* 正當防衛？\n* 得了吧。'],
        undynefinal2b1b: [
            "<25>{#f/11}* 怎麼？你覺得我會對你\n  在外域的所作所為\n  視而不見嗎？",
            '<25>{#f/1}* 呋呼呼...\n  再想想吧。'
        ],
        undynefinal2b2: () => [
            world.trueKills === 1
                ? "<25>{#f/9}* 你可不是不得已\n  才殺了那隻怪物。"
                : "<25>{#f/9}* 你可不是不得已\n  才殺了那些怪物。",
            '<25>{#f/11}* 你殺死他們是因為\n  那對你而言易如反掌。\n* 是因為那對你而言很有趣。',
            '<25>{#f/16}* 那你覺得，\n  當我發現這一切的時候，\n  還會感到很有趣嗎？'
        ],
        undynefinal2b2a: [
            '<25>{#f/9}* 犬衛隊。\n* 當地特戰隊。\n* 還有其他人...',
            '<25>* 所有我所知曉，\n  我所深愛的人，\n  就這樣死去了。'
        ],
        undynefinal2b2b: [
            '<25>{#f/9}* 犬衛隊，\n  還有當地特戰隊...',
            "<25>* 這些與我共事的戰友們，\n  眨眼之間，便離我而去。"
        ],
        undynefinal2b2c: [
            '<26>{#f/9}* 當地特戰隊，\n  一生盡職盡責的他們...',
            '<25>* 只一剎那，\n  便全部消失不見。'
        ],
        undynefinal2b2d: [
            '<25>{#f/9}* 犬衛隊，\n  多年來一直保護\n  那座小鎮的他們...',
            '<25>* 消失得無影無蹤。'
        ],
        undynefinal2b2e: [
            '<26>{#f/9}* 那個幽靈，只想和他的\n  訓練人偶融合的他...',
            '<25>* 轉瞬即逝。'
        ],
        undynefinal2b2f: [
            '<25>{#f/9}* 那隻蜘蛛，\n  只想好好保護和照顧\n  自己部落的她...',
            "<25>* 與世長辭。\n* 在此之後，其他蜘蛛\n  便處於危險境地之中。"
        ],
        undynefinal2b2g: [
            '<25>{#f/9}* Doge，有著強烈且堅定的\n  責任感的她...',
            "<25>* 縱使要冒著生命危險\n  工作，她仍舊獻出了\n  自己的生命。"
        ],
        undynefinal2b2h: [
            '<25>{#f/9}* 那隻大狗狗，\n  最善良、最可愛的它...',
            '<25>* 英年早逝。'
        ],
        undynefinal2b2i: [
            '<25>{#f/9}* 那兩隻甜蜜的狗狗，\n  總是悉心照顧彼此的\n  他們...',
            '<25>* 只一瞬間，\n  他們的愛情與遺產，\n  就被無情奪走。'
        ],
        undynefinal2b2j: [
            '<25>{#f/9}* 那隻小狗狗，\n  除了被撫摸外\n  別無所求的他...',
            '<25>* 受到的卻是\n  冷漠無情的攻擊。'
        ],
        undynefinal2b2k: [
            '<25>{#f/9}* Doggo，受我親自照顧\n  一段時間的他...',
            '<25>* 因為一個人類的\n  一時興起，\n  失去了自己的生命。'
        ],
        undynefinal2b2l: [
            "<25>{#f/9}* 在外域的那位女士...\n  我對她並不怎麼了解，\n  但是...",
            "<25>* 在你抵達星港之後，\n  我就再也沒見到她了。"
        ],
        undynefinal2b2m: [
            '<25>{#f/9}* 在工廠裡度過一生的...\n  每 一 只 怪 物。',
            '<25>* 都被奪去了生命。'
        ],
        undynefinal2b2n: [
            '<25>{#f/9}* 在星港平靜生活的...\n  每 一 只 怪 物。',
            '<25>* 都迎來了自己\n  不合時宜的終局。'
        ],
        undynefinal2b2o: [
            '<25>{#f/9}* 那些在工廠裡\n  度過一生的怪物們...',
            '<25>* 再無出頭之日。'
        ],
        undynefinal2b2p: [
            '<25>{#f/9}* 那些在星港裡\n  平靜生活的怪物們...',
            '<25>* 慘遭無情屠殺。'
        ],
        undynefinal2b2q1: [
            '<25>{#f/9}* 目前為止，\n  每個區域都有\n  一隻怪物死亡...',
            "<25>{#f/13}* 就好像你有各個區域的\n  殺戮指標似的。"
        ],
        undynefinal2b2q2: [
            '<25>{#f/9}* 目前為止，\n  每個區域都有\n  兩隻怪物死亡...',
            "<25>{#f/13}* 就好像你有各個區域的\n  殺戮指標似的。"
        ],
        undynefinal2b2q3: [
            '<25>{#f/9}* 目前為止，\n  每個區域都有\n  三隻怪物死亡...',
            "<25>{#f/13}* 就好像你有各個區域的\n  殺戮指標似的。"
        ],
        undynefinal2b2q4: [
            '<25>{#f/9}* 目前為止，\n  每個區域都有\n  四隻怪物死亡...',
            "<25>{#f/13}* 就好像你有各個區域的\n  殺戮指標似的。"
        ],
        undynefinal2b2q5: [
            '<25>{#f/9}* 目前為止，\n  每個區域都有\n  五隻怪物死亡...',
            "<25>{#f/13}* 就好像你有各個區域的\n  殺戮指標似的。"
        ],
        undynefinal2b2r: () => [
            world.trueKills === 1
                ? "<26>{#f/9}* 在外域的那隻怪物...\n  我實在是不知道它，\n  但是..."
                : "<26>{#f/9}* 在外域的那些怪物...\n  我實在是不知道它們，\n  但是...",
            "<25>* 多虧了您啊，\n  才讓它們\n  就這樣死掉了。"
        ],
        undynefinal2b2s: [
            '<25>{#f/9}* 即使只是一隻怪物...',
            "<25>* 依舊有一個靈魂，\n  再也不能仰望星空。"
        ],
        
        undynefinal2b2t: [
            '<25>{#f/9}* 依然有至少兩隻怪物，\n  是今晚最後一次\n  離開他們的房子。',
            '<25>* 多虧了您啊，\n  才讓他們的家人再也\n  不能與他們重逢。'
        ],
        undynefinal2b2u1: [
            '<25>{#f/9}* 那隻大狗狗，\n  喜歡和他的戰友們\n  在一起的他...',
            '<25>* 醒來時卻發現\n  戰友們都已死去。'
        ],
        undynefinal2b2u2: [
            '<25>{#f/9}* 那兩隻狗狗，\n  總是在照顧其他狗狗的\n  它們...',
            "<25>* 卻發現再也沒有狗狗\n  需要照顧了。"
        ],
        undynefinal2b2u3: [
            '<25>{#f/9}* 那隻小狗，\n  平常形單影隻的它...',
            "<26>* 其他狗狗的死亡\n  可能並不會影響到他，\n  但終有一天會的。"
        ],
        undynefinal2b2u4: [
            '<25>{#f/9}* Doggo，花了好幾年\n  才在犬衛隊找到了\n  一個家的他...',
            '<25>* 卻又被無情地\n  奪走了一切。'
        ],
        undynefinal2b2v1: [
            '<25>{#f/9}* 那隻大狗狗，\n  還有Dogamy和\n  Dogaressa...',
            '<25>* 都消失於星港的\n  地表之上。'
        ],
        undynefinal2b2v2: [
            '<25>{#f/9}* 不管是大狗狗，\n  還是小狗狗...',
            '<25>{#f/13}* 所以說，按照你的說法，\n  只有中等體型的狗狗\n  才能生存。'
        ],
        undynefinal2b2v3: [
            '<25>{#f/9}* 那隻大狗狗，\n  還有Doggo...',
            '<25>* 因為一個人類的\n  一時興起，\n  而雙雙失去了生命。'
        ],
        undynefinal2b2v4: [
            '<25>{#f/9}* 那兩隻狗狗，\n  總是在照顧其他狗狗的\n  它們...',
            '<25>* 不僅如此，\n  它們所照顧的一隻小狗，\n  也未能倖免。'
        ],
        undynefinal2b2v5: [
            '<25>{#f/9}* 那兩隻狗狗，\n  總是在照顧其他狗狗的\n  它們...',
            '<25>* 他們，還有被他們\n  所照看的Doggo，\n  都死掉了。'
        ],
        undynefinal2b2v6: [
            '<25>{#f/9}* 那隻小狗狗，\n  還有它的戰友Doggo...',
            '<25>* 因為一個人類的\n  一時興起，\n  而雙雙失去了生命。'
        ],
        undynefinal2b3: () => [
            "<25>{#f/11}* 你覺得這很有趣嗎？",
            '<25>* ...',
            '<25>{#f/17}* 你猜怎麼著，小混蛋。',
            ...(SAVE.data.n.state_foundry_muffet === 1
                ? ["<25>* 這次沒有電話能救你了。"]
                : ['<25>* 你的死期已到。']),
            '<25>{#f/4}* 被你施加在\n  亡者身上的\n  每一份痛苦...',
            "<25>{#f/7}* 那些被你摧毀\n  而化為塵埃的\n  每個希望，每個夢想...",
            "<25>{#f/1}* 這位英雄\n  會用她的長矛\n  向你悉數討回！",
            '<25>{#f/4}* 嘎啊啊啊！！！',
            "<25>{#f/5}* 我會讓你見識一下\n  怪物們的決心\n  有多麼強大！",
            "<25>{#f/17}* 來吧！\n* 上前來做個了斷！"
        ],
        undynefinal2c1: ['<32>* ...', '<32>* 罷了。'],
        undynefinal2c2: () => [
            '<25>{#f/16}{#x1}* 聽好了。',
            "<25>* Papyrus今天沒來報到。",
            '<25>{#f/19}* ...',
            '<25>{#x2}* 你怎麼想他都無所謂。',
            "<25>{#f/18}* 沒錯，Papyrus是很古怪，\n  很天真，很自戀...",
            '<25>{#f/20}{#x3}* 可是，他絕不會\n  錯過任何一次報到。',
            '<25>{#f/18}{#x4}* 而且，不管幾點鐘\n  給他打電話...',
            '<25>{#f/20}{#x5}* 他都絕不會\n  響鈴兩次還不接。',
            '<25>* ...',
            "<25>{#f/18}{#x6}* 現在，他不在了。",
            "<25>{#f/22}{#x7}* 他的兄弟，也失蹤了。",
            '<25>* ...',
            '<25>{#f/18}* 告訴我，你把他怎麼了？',
            '<25>{#f/11}{#x8}* 你把他{^6} 怎{^6} 麼{^6} 了{^6}？',
            ...((SAVE.data.n.state_foundry_doge === 1 ? 1 : 0) +
                (SAVE.data.n.state_starton_doggo === 2 ? 1 : 0) +
                (SAVE.data.n.state_starton_dogs === 2 ? 2 : 0) +
                (SAVE.data.n.state_starton_greatdog === 2 ? 1 : 0) +
                (SAVE.data.n.state_starton_lesserdog === 2 ? 1 : 0) >
                1
                ? [
                    '<25>{#f/16}{#x9}* 不僅如此，好幾名衛隊成員\n  也接連失蹤...',
                    '<25>{#f/13}* 他們，是不是也被你殺了？'
                ]
                : [
                    '<25>{#f/16}{#x9}* Papyrus，我每天\n  都會親自訓練他...',
                    "<25>{#f/19}* 儘管我早知道他傻到\n  不會去傷害任何人..."
                ]),
            '<25>* ...',
            '<25>{#f/16}{#x10}* 想前進，隨你。\n* 我給你準備的時間。',
            '<25>{#f/20}* 但只要你再往前踏出一步...',
            '<25>{#f/11}{#x11}* 我就會殺了你。'
        ],
        undynefinal3: () => [
            ...(SAVE.data.n.state_starton_papyrus === 1
                ? ['<25>{#p/undyne}{#f/21}* 那好。', '<25>{#f/19}* ...']
                : world.trueKills > 1
                    ? ['<25>{#p/undyne}{#f/11}* 混蛋，你自找的。', '<25>{#f/9}* 準備好了嗎...']
                    : respecc()
                        ? ["<25>{#p/undyne}{#f/1}* 那麼，好了...！", "<25>{#f/17}* 來吧，針尖對麥芒，\n  瞧瞧誰更厲害！"]
                        : ["<25>{#p/undyne}{#f/1}* 那麼，好了...！", '<25>{#f/17}* 別再想著逃走！'])
        ],
        undynefinal3x: ['<25>{#f/7}{*}* 去死吧！！！{#x1}{^999}'],
        undynehouse1: ["<32>{#p/basic}* 鎖住了。"],
        undynehouse2: () =>
            SAVE.data.b.svr || world.runaway
                ? ["<32>{#p/human}* （你似乎找不到進入的方法。）"]
                : SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}* 先是山羊家庭...\n* 然後是蜘蛛女王...',
                        '<32>* 現在是魚女士...',
                        "<32>* 我會想念她的...\n  就像我會想念\n  她在這裡的時光...",
                        "<32>* 但或許... 我作為一個\n  被居住的房子經歷的太久了...",
                        "<32>* 也許我會更快樂，只要我願意花時間\n  ... 去尋找新的地方..."
                    ]
                    : ["<32>{#p/basic}* 真的著火了。\n* 你不能進去。"],
        walktext: {
            bird: () => [
                '<25>{#p/kidd}{#f/4}* 沒路了...',
                world.genocide
                    ? "<25>{#f/3}* 那隻小鳥肯定忙著\n  帶他去另一邊了，哈哈。"
                    : '<25>{#f/3}* 那隻小鳥現在肯定很忙，\n  哈哈。'
            ],
            birdx: ['<32>{#p/basic}* ...但是誰也沒有來。'],
            path1: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? [
                        "<25>{#p/kidd}{#f/8}* 受不了了...",
                        SAVE.data.n.state_foundry_kidddeath > 5
                            ? '<25>* 我們殺了那麼多怪物...'
                            : SAVE.data.n.state_foundry_kidddeath > 1
                                ? '<25>* 我們殺了別的怪物們...'
                                : '<25>* 我們殺了一個怪物...'
                    ]
                    : [
                        '<25>{#p/kidd}{#f/1}* 我有跟你說過我們是\n  怎麼上太空梭\n  駕駛課的嗎！？',
                        '<25>{#p/kidd}{#f/7}* 真的超級壯觀！'
                    ],
            path2: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? [
                        SAVE.data.b.f_state_kidd_fight
                            ? '<25>{#p/kidd}{#f/4}* 雖然... 你讓我攻擊他們...'
                            : '<25>{#p/kidd}{#f/4}* 雖然...\n  一直是你在攻擊他們...',
                        '<25>{#p/kidd}{#f/8}* 但你真的...\n* ...真的打-打心底想...\n* ...那麼做嗎...？'
                    ]
                    : [
                        '<25>{#p/kidd}{#f/2}* 有一天，那個矮個子骷髏\n  和他的兄弟來代課...',
                        '<25>{#p/kidd}{#f/2}* 還有，雖然是個秘密，\n  但是...',
                        '<25>{#f/1}* 他們讓我自己一個人\n  繞著前哨站飛！！'
                    ],
            path3: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? [
                        '<25>{#p/kidd}{#f/4}* 我從沒想傷害任何人，\n  我只是...\n* 我...',
                        '<25>{#p/kidd}{#f/8}* 我只是想醒過來...\n* 好希望... 這只是場惡夢...'
                    ]
                    : [
                        "<25>{#p/kidd}{#f/1}* 也許有一天我會成為\n  一名真正的飛行員，\n  擁有自己的星際飛船。",
                        "<25>{#p/kidd}{#f/1}* 側面畫著火焰，\n  還有巨大的翅膀，\n  還有...",
                        "<25>{#p/kidd}{#f/6}* 天啊，肯定超酷的..."
                    ],
            path4: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? ['<25>{#p/kidd}{#f/8}* 我...', '<25>{#f/8}* 我...', "<25>{#f/5}* 我...\n* ...我會住嘴的。"]
                    : [
                        '<25>{#p/kidd}{#f/2}* 我們可以去宇宙的\n  任何地方，夥計...',
                        '<25>{#p/kidd}{#f/1}* 最棒的是...\n* 再也——不用——去上學啦！'
                    ],
            path5: ['<25>{#p/kidd}{#f/4}* 等等...'],
            path6: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? [
                        "<25>{#p/kidd}{#f/8}* 你一個人是過不去的...",
                        '<25>{#p/kidd}{#f/8}* ...',
                        '<25>{#p/kidd}{#f/5}* ...我幫你。'
                    ]
                    : [
                        '<25>{#p/kidd}{#f/2}* 你確定你能跨過\n  那個空隙嗎？',
                        '<25>{#p/kidd}{#f/1}* 喲，我來幫你！'
                    ],
            path7: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? ['<25>{#p/kidd}{#f/8}* 爬上來。']
                    : ['<25>{#p/kidd}{#f/1}* 爬上來！'],
            path8: () =>
                SAVE.data.n.state_foundry_muffet === 1
                    ? [
                        '<25>{#p/kidd}{#f/4}* ...\n* 唉...',
                        '<25>{#f/8}* 要是以後你\n  再也見不到我了...\n* 告訴我父母...',
                        "<25>{#f/5}* ...\n* 就當沒生過我吧。"
                    ]
                    : ["<25>{#p/kidd}{#f/1}* 別擔心，夥計！\n* 我肯定能找條路過去的！"],
            prechase: [
                '<25>{#p/kidd}{#f/4}* 嘿... 呃...\n* 我感覺這地方有點嚇人...',
                '<25>{#f/3}* 要不咱們回去吧？'
            ],
            rescue1: () => [
                "<25>{#p/kidd}{#f/7}* Undyne，不要！\n* 那是我的朋友！",
                world.dead_skeleton || geno() || world.population < 4
                    ? "<32>{#p/undyne}* 才怪。\n* 小子，你不該和這傢伙混一塊的。"
                    : "<32>{#p/undyne}* 回家吧，孩子。\n* 你跟這傢伙不是一路人。"
            ],
            rescue2: ['<25>{*}{#p/kidd}{#f/8}* Undyne...{#x1}{^20}{%}'],
            rescue3: [
                "<25>{*}{#p/kidd}{#f/13}* 我保證，我...\n  我-我會回來找你的！{^20}{%}",
                "<25>{*}{#p/kidd}{#f/13}* 你可千萬別死，好嗎？{^20}{%}"
            ],
            snailcom: [
                '<25>{#p/kidd}{#f/9}* 我和那個幽靈曾在這裡\n  玩過一次雷霆蝸牛...',
                '<25>* 你玩過嗎...？',
                '<25>{#p/asriel2}{#f/10}* 額... 沒有？',
                '<25>{#f/4}* 至少在這個時間軸沒有。',
                '<25>{#p/kidd}{#f/9}* 時間軸？'
            ],
            trashcom: [
                '<25>{#p/asriel2}{#f/13}* 喔，嘿...\n* 這個地方是我們...',
                '<25>{#f/13}* 你在...',
                '<25>{#f/15}* ...',
                '<25>{#f/16}* 喔，$(name)...',
                '<25>{#p/kidd}{#f/9}* ...？',
                "<25>{#p/asriel2}{#f/6}* 沒什麼。",
                "<25>{#f/7}* 只是一個小小的回憶而已。",
                '<25>{#p/kidd}{#f/9}* 喔...'
            ],
            undynecom: [
                "<25>{#p/kidd}{#f/11}* 喔，這是...\n* 這是Undyne的家...！",
                "<25>{#p/asriel2}{#f/8}* 還好，\n  Undyne並沒有出現在這裡。",
                '<25>{#f/6}* 如果計畫順利，\n  她就再也不\n  會出現在這裡了。'
            ]
        },
        watercooler1: () => [
            ...(SAVE.data.b.svr
                ? ['<32>{#p/human}* （標籤說明\n  僅在緊急情況下使用該液體。）']
                : [
                    "<32>{#p/basic}* 這是個裝滿電阻尼液的飲水機，\n  上面有一個奇怪的警告標籤。",
                    '<32>{#p/basic}* 「僅用於消除可攜式\n   噴氣背包的靜電幹擾。」'
                ]),
            choicer.create('* （要接一杯嗎？）', '接一杯', '算了')
        ],
        watercooler2a: ['<32>{#p/human}* （你現在拿著一杯電阻尼液。）'],
        watercooler2b: ['<32>{#p/human}* （你決定不接。）'],
        watercooler3: () => [
            ...(SAVE.data.b.svr
                ? ['<32>{#p/human}* （標籤說明\n  僅在緊急情況下使用該液體。）']
                : [
                    "<32>{#p/basic}* 這是個裝滿電阻尼液的飲水機，\n  上面有一個奇怪的警告標籤。",
                    '<32>{#p/basic}* 「僅用於消除可攜式\n   噴氣背包的靜電幹擾。」'
                ]),
            '<32>{#p/human}* （你已經有一杯了。）'
        ]
    },

    b_group_foundry: {
        moldsmalMoldbygg1: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 呃啊，霉臭味！']
                : ["<32>{#p/story}* 現在是黏黏節！"],
        moldsmalMoldbygg2a: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 只剩一個了。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 只剩我們了！']
                    : ['<32>{#p/story}* 現在只剩Gelata一個了。'],
        moldsmalMoldbygg2b: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 只剩一個了。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 只剩我們了！']
                    : ['<32>{#p/story}* Gelatini獨自凝結著。'],
        woshuaMoldbygg2: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 矛盾二人組。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 哇，你好...']
                    : ['<32>{#p/story}* Skrubbington跨坐著。\n* 可惜Gelata也來了...'],
        woshuaMoldbygg2a: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 只剩一個了。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 只剩我們了！']
                    : ['<32>{#p/story}* 現在只剩Gelata一個了。'],
        woshuaMoldbygg2b: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 只剩一個了。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 只剩我們了！']
                    : ['<32>{#p/story}* Skrubbington不知道該怎麼辦。']
    },
    b_opponent_woshua: {
        tweet: '啾啾',
        epiphany: [
            ['<08>{#p/basic}{~}Skrubby\n接受你的\n仁慈。'],
            () =>
                world.meanie
                    ? ['<08>{#p/basic}{~}Skrubby\n潤了..', '<08>{#p/basic}{~}還給警告\n您還挺好。']
                    : SAVE.data.b.oops && world.flirt > 9
                        ? ['<08>{#p/basic}{~}給你整個\n全身水療\n..', '<08>{#p/basic}{~}特別服務\n喔！']
                        : SAVE.data.b.oops
                            ? [
                                '<08>{#p/basic}{~}就算你\n變髒..',
                                '<08>{#p/basic}{~}Skrubby\n清洗好。'
                            ]
                            : ['<08>{#p/basic}{~}Skrubby\n接受擁抱\n..', '<08>{#p/basic}{~}即使你\n髒成坨。'],
            ['<08>{#p/basic}{~}Skrubby\n知道要做\n什麼。', '<08>{#p/basic}{~}為我指路\n你該\n幸福。'],
            ['<08>{#p/basic}{~}好好好。\n錢拿去。']
        ],
        act_check: () =>
            world.goatbro
                ? ["<32>{#p/asriel2}* Skrubbington，潔癖狂魔。\n* 眼裡容不下半點灰塵。"]
                : [
                    '<32>{#p/story}* SKRUBBINGTON - 攻擊18 防禦5\n* 這個卑微的細菌恐懼症患者\n  想要清理整個星系。'
                ],
        act_check2: [
            '<33>{#p/story}* SKRUBBINGTON - 攻擊18 防禦5\n* 這個卑微的細菌恐懼症患者\n  想要回家清洗傷口。'
        ],
        act_check3: [
            '<32>{#p/story}* SKRUBBINGTON - 攻擊18 防禦5\n* 距離當上未來的潔淨怪物\n  只有一爪之遙。'
        ],
        act_check4: [
            "<32>{#p/story}* SKRUBBINGTON - ATK 18 DEF 5\n* 這個卑微的細菌恐懼症患者\n  的愛情故事像肥皂一樣。"
        ],
        name: '* Skrubbington',
        status1: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Skrubbington。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ["<32>{#p/kidding}* Skrubby來了！"]
                    : ['<32>{#p/story}* Skrubbington漫步過來了。'],
        idleTalk1a: ['<08>{#p/basic}{~}清洗\n你的靈魂'],
        idleTalk1b: ['<08>{#p/basic}{~}清洗\n你的手'],
        idleTalk1c: ['<08>{#p/basic}{~}清洗\n你的臉'],
        idleTalk1d: ['<08>{#p/basic}{~}清洗\n你的頭髮'],
        idleTalk1e: ['<08>{#p/basic}{~}清洗\n你的腳'],
        idleTalk2a: ['<08>{#p/basic}{~}洗漱漱'],
        idleTalk2b: ['<08>{#p/basic}{~}喔，\n我是說...\n洗刷刷'],
        idleTalk2c: ['<08>{#p/basic}{~}洗刷刷'],
        idleTalk3: () =>
            world.trueKills > 0 ? ['<08>{#p/basic}{~}你的靈魂\n不太乾淨。'] : ['<08>{#p/basic}{~}\x00*吹著\n口哨*'],
        cleanTalk: ['<08>{#p/basic}{~}綠色\n即為乾淨'],
        jokeTalk1: ["<08>{#p/basic}{~}不。\n那個笑話\n太...\n汙了。"],
        jokeTalk2: ["<08>{#p/basic}{~}呃...\n難以置信..."],
        randStatus1: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 看那隻小鳥！']
                : ['<32>{#p/story}* Skrubbington和一隻小鳥交了朋友。'],
        randStatus2: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 你真該看看它是怎麼\n  清理我學校的午餐剩飯的。"]
                : ['<32>{#p/story}* Skrubbington正在洗小碟子。'],
        randStatus3: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<33>{#p/kidding}* 我們真該\n  和這位一起穿閃亮的太空衣。']
                : ['<32>{#p/story}* Skrubbington想洗點好玩的東西。'],
        randStatus4: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 乾淨得響出樂譜？\n* 越往淨洗越離譜！']
                : ['<32>{#p/story}* 洗滌劑的味道。'],
        randStatus5: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 你不會想在它身邊弄髒的，夥計。']
                : ['<32>{#p/story}* Skrubbington好奇星塵幹不乾淨。'],
        hurtStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 一切... 還好嗎？']
                : ['<32>{#p/story}* Skrubbington看著傷口，\n  直犯噁心。'],
        jokeText1: ['<32>{#p/human}* （你講了一個\n  生鏽太空垃圾的笑話。）'],
        jokeText2: ['<32>{#p/human}* （你拿大氣汙染打趣Skrubbington。）'],
        jokeText3: ['<32>{#p/human}* （你講了一個\n  兩艘飛船困在\n  垃圾運輸船的笑話。）'],
        touchText0: [
            '<32>{#p/human}* （你友好地摸了摸Skrubbington。）',
            "<32>{#p/basic}* Skrubbington實在受不了你那\n  黏糊糊的手，於是跑掉了！"
        ],
        touchText1: [
            '<32>{#p/human}* （你友好地摸了摸Skrubbington。）',
            '<32>{#p/basic}* Skrubbington後退，躲開了你的手。'
        ],
        touchText2: [
            '<32>{#p/human}* （你友好地摸了摸Skrubbington。）',
            '<32>{#p/basic}* Skrubbington受寵若驚。'
        ],
        cleanText1: [
            '<32>{#p/human}* （你問Skrubbington能不能\n  幫你洗洗身子。）',
            '<32>{#p/basic}* Skrubbington高興地跳來跳去。'
        ],
        flirtTalk1: ['<08>{#p/basic}{~}不！\n這浪漫\n不乾淨！'],
        flirtTalk2: ['<08>{#p/basic}{~}閃亮亮！'],
        cleanText2: [
            '<32>{#p/human}* （你問Skrubbington能不能\n  幫你洗洗身子。）',
            '<32>{#p/basic}* Skrubbington繼續清洗。'
        ]
    },
    b_opponent_moldbygg: {
        sexyChat: ['<08>{#p/basic}{~}\x00*性感扭動*'],
        epiphany: [
            ['<08>{#p/basic}{~}\x00*黏液聲*'],
            () =>
                world.meanie
                    ? ['<08>{#p/basic}{~}咕噢噢..']
                    : SAVE.data.b.oops && world.flirt > 9
                        ? ['<08>{#p/basic}{~}\x00*性感扭動*']
                        : SAVE.data.b.oops
                            ? ['<08>{#p/basic}{~}\x00*高興地\n扭動*']
                            : ['<08>{#p/basic}{~}\x00*黏糊糊\n地擁抱*'],
            ['<08>{#p/basic}{~}最後\n吼叫。'],
            ['<08>{#p/basic}{~}\x00*閃亮地扭動*']
        ],
        status1: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 哇！']
                    : ['<32>{#p/story}* Gelata出現了！'],
        act_check: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata，噁心粘球。\n* 為啥我要多費口舌給你解釋這些？']
                : ['<32>{#p/story}* GELATA - 攻擊18 防禦18\n* 它已經從「小糰子」進化成功。'],
        act_check2: ['<32>{#p/story}* GELATA - 攻擊18 防禦18\n* 狀態並不是很好。'],
        act_check3: ['<32>{#p/story}* GELATA - 攻擊18 防禦18\n* 允許成為全職果凍墊。'],
        act_check4: ['<32>{#p/story}* GELATA - 攻擊18 防禦18\n* 和你的關係並沒有想像的那麼好...'],
        act_topple1: ["<32>{#p/human}* （你想推倒Gelata，\n  可它身子還很結實。）"],
        act_topple2: ['<32>{#p/human}* （你推倒了Gelata。）\n* （它的身體塌陷了，滾到了遠處。）'],
        name: '* Gelata',
        idleTalk1: ['<08>{#p/basic}{~}咕噢噢！'],
        idleTalk2: ['<08>{#p/basic}{~}\x00*黏液聲*'],
        idleTalk3: ['<08>{#p/basic}{~}吼。'],
        idleTalk4: ['<08>{#p/basic}{~}\x00*急切地\n扭動*'],
        randStatus1: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 它想要啥？']
                    : ['<32>{#p/story}* Gelata想背著你。'],
        randStatus2: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 我好奇我要是抱抱它\n  會發生什麼。']
                    : ['<32>{#p/story}* Gelata焦慮地搖晃著。'],
        randStatus3: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 黏糊糊的... 但我喜歡！']
                    : ['<32>{#p/story}* Gelata磨動著地面。'],
        randStatus4: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 啥都黏糊糊的。']
                    : ['<32>{#p/story}* 果凍店的味道。'],
        hurtStatus: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 離死不遠了。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ["<32>{#p/kidding}* Gelata的狀態看起來不太好..."]
                    : ['<32>{#p/story}* Gelata身子不中用了。'],
        act_handshake: [
            '<32>{#p/human}* （你向Gelata伸出了手。）\n* （Gelata用黏液把你包裹了起來。）',
            '<32>{#p/story}* 你的移速下降了！'
        ],
        act_sit: ['<32>{#p/human}* （你坐在了Gelata上面。）\n* （Gelata很高興能幫到你。）'],
        distanceStatus: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelata。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 我也能坐嗎！？']
                    : ['<32>{#p/story}* Gelata很高興你來了。'],
        act_flirt: [
            '<32>{#p/human}* （你扭動著臀部。）\n* （Gelata像旋風一樣轉起來。）',
            '<32>{#p/basic}* 真是一場有意義的交流...？'
        ]
    },
    b_opponent_moldfake: {
        act_check: () =>
            world.goatbro
                ? ["<32>{#p/asriel2}* Gelatini...\n* 直覺告訴我，這隻怪物可沒有\n  它外表看起來那麼簡單。"]
                : ['<32>{#p/story}* GELATINI - 攻擊18 防禦18\n* 一點動靜都沒有。'],
        name: '* Gelatini',
        smalTalk: ['<08>{#p/basic}{~}...'],
        status1: () => (world.goatbro ? ['<32>{#p/asriel2}* Gelatini。'] : ['<32>{#p/story}* Gelatini出現了？']),
        fakeStatus1: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelatini。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* Gelatini總是這樣靜止不動嗎？']
                    : ["<32>{#p/story}* Gelatini靜止不動。"],
        fakeStatus2: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelatini。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ["<32>{#p/kidding}* Gelatini有點不對勁..."]
                    : ['<32>{#p/story}* Gelatini是一種完全經過回火的\n  明膠，沒有任何瑕疵。'],
        fakeStatus3: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelatini。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* Gelatini總是這麼安靜嗎？']
                    : ["<32>{#p/story}* 現在是Gelatini的安靜時間。"],
        fakeStatus4: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Gelatini。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 看起來有點怪。']
                    : ['<32>{#p/story}* 果凍店的味道。'],
        act_imitate: ['<32>{#p/human}* （你靠近了Gelatini。）', '<32>{#p/basic}* ...突然！'],
        act_flirt: ['<32>{#p/human}* （你扭動你的臀部。）', '<32>{#p/basic}* ...突然！'],
        act_slap: ['<32>{#p/human}* （你使勁扇了Gelatini一巴掌。）', '<32>{#p/basic}* ...突然！']
    },
    b_opponent_shyren: {
        act_check: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 一位先知性歌手，因自己的羞怯\n  而躊躇不前。'],
        act_check2: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 她帶著嶄新的自信重返舞臺！'],
        act_check3: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 她帶著嶄新的自信放聲歌唱！'],
        act_check4: ["<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 她帶著嶄新的自信閃耀全場！"],
        act_check5: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 一位先知性歌手，因自己的新傷\n  而躊躇不前。'],
        act_check6: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 唉，被拒絕的苦澀滋味。'],
        act_check7: ['<32>{#p/story}* SHYREN - 攻擊19 防禦0\n* 怦然心跳，歌星閃耀！'],
        awkwardtoot: ['<08>{#p/basic}{~}（尷尬的\n嘟嘟聲）'],
        creepStatus: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren蜷縮在角落裡。']
                : ["<32>{#p/kidding}* 我覺得這沒什麼用..."],
        creepText1: [
            '<32>{#p/human}* （你露出你最燦爛的笑容\n  向Shyren調情。）',
            '<32>{#p/basic}* Shyren轉過身去...'
        ],
        creepText2: [
            '<32>{#p/human}* （你再一次向Shyren調情。）',
            '<32>{#p/basic}* Shyren感覺非常不適，決定離開。'
        ],
        encourage1: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren似乎更喜歡一起跟著唱。']
                : ['<32>{#p/kidding}* 一起唱歌？\n* 好樣的，夥計！'],
        encourage2: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? world.genocide
                    ? SAVE.data.n.state_foundry_muffet === 1
                        ? ['<32>{#p/story}* 交響樂的聲音被\n  詭異安靜的氣氛所覆蓋。']
                        : ["<32>{#p/kidding}* 哈哈，太好玩啦！\n* 可惜只有我們仨..."]
                    : SAVE.data.n.state_foundry_muffet === 1
                        ? ['<32>{#p/story}* 一個黑影在遠處看著\n  這場騷動。']
                        : ["<32>{#p/kidding}* 喲... 呃...\n* 那個奇怪的黑影在那邊幹啥呢？"]
                : SAVE.data.n.state_foundry_muffet === 1
                    ? ['<32>{#p/story}* Sans在賣碳纖維布做的門票。']
                    : ['<32>{#p/kidding}* 那個矮個子骷髏\n  怎麼在賣門票？？'],
        encourage3: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? SAVE.data.n.state_foundry_muffet === 1
                    ? ['<32>{#p/story}* 你之前的哼唱聲在\n  房間內迴響。']
                    : ['<32>{#p/kidding}* 這地方太空曠了，\n  讓我們可以聽到之前的回聲。\n* 多讓人神魂顛倒...']
                : SAVE.data.n.state_foundry_muffet === 1
                    ? ["<32>{#p/story}* 人群開始扔衣服。\n* 這是一場棉球風暴！"]
                    : ['<32>{#p/kidding}* 哇，好多人喔！'],
        encourage4: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren正在暢想未來。']
                : ['<32>{#p/kidding}* 再來一遍！\n* 再來一遍！\n* 再來一遍！'],
        flirtText1: ['<32>{#p/human}* （你向Shyren調情。）\n* （雖然感到忐忑，\n  但作為回應，她臉紅了一下。）'],
        flirttoot: ['<08>{#p/basic}{~}（開心的\n嘟嘟聲）'],
        hum0: ['<32>{#p/human}* （你哼了一段憂鬱的華爾茲。）\n* （Shyren跟著唱了起來。）'],
        hum1: ['<32>{#p/human}* （你哼了一段時髦的曲子。）\n* （Shyren跟著唱了起來。）'],
        hum2: ['<32>{#p/human}* （你哼了一段布魯斯藍調。）\n* （Shyren跟著唱了起來。）'],
        hum3: ['<32>{#p/human}* （你哼了一段爵士抒情曲。）\n* （Shyren跟著唱了起來。）'],
        hum4: ['<32>{#p/human}* （你哼了一段懺魂曲。）\n* （Shyren平靜了下來。）'],
        humX1: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? ['<32>{#p/human}* （你又哼了一段小曲。）', "<32>{#p/basic}* 好一個二重唱！"]
                : [
                    '<32>{#p/human}* （你又哼了一段小曲。）',
                    '<32>{#p/basic}* 聽到歌聲，周邊的怪物\n  不由得湊了過來。',
                    "<32>{#p/basic}* 突然就變演唱會現場了..."
                ],
        humX2: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? [
                    '<32>{#p/human}* （你又哼了一段小曲。）',
                    '<32>{#p/basic}* Shyren很高興有你作為\n  她的二重唱搭檔。'
                ]
                : [
                    '<32>{#p/human}* （你又哼了一段小曲。）',
                    "<32>{#p/basic}* 觀眾席都坐滿了。\n* 這場演出太贊了！"
                ],
        humX3: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? [
                    '<33>{#p/human}* （你又哼了一段小曲。）',
                    '<32>{#p/basic}* 就算沒有觀眾，\n  婉轉的曲調與和諧的舞蹈\n  也將持續下去。'
                ]
                : [
                    '<32>{#p/human}* （你又哼了一段小曲。）',
                    '<32>{#p/basic}* 儘管這讓你成功，\n  但這源源不斷的關注...',
                    "<32>* 巡迴演出...\n* 追星族...\n* 都太..."
                ],
        humX4: () => [
            "<32>{#p/human}* （你和Shyren經歷了這麼多，\n  但是時候了。）",
            '<32>* （你們都還有自己的旅程。）',
            '<32>* （你哼了一段告別曲。）'
        ],
        hurtStatus: ["<32>{#p/story}* Shyren的嗓音變得沙啞。"],
        name: '* Shyren',
        randStatus1: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren虛弱地哼著。']
                : ['<32>{#p/kidding}* 你還好嗎？'],
        randStatus2: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren假裝自己是一個超級偶像。']
                : ['<32>{#p/kidding}* 你好像很難過...'],
        randStatus3: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren用她的鰭輕拍了一下。']
                : ['<32>{#p/kidding}* 你是不是需要幫助呢？'],
        randStatus4: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* Shyren想自己唱卡拉OK。']
                : ['<32>{#p/kidding}* 我能幫忙嗎？'],
        randStatus5: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/story}* 聞起來像音樂。']
                : ["<32>{#p/kidding}* 等等... 她身體怎麼了？"],
        sadtalk1: ['<08>{#p/basic}{~}..\n..\n嘟嘟\n..'],
        sadtalk2: ['<08>{#p/basic}{~}..\n..\n哼哼\n..'],
        status1: () =>
            SAVE.data.n.state_foundry_muffet === 1
                ? ['<32>{#p/kidding}* 不...\n* 別再這樣了...']
                : ["<32>{#p/kidding}* 喲，你還好嗎？\n* 你看起來很難過..."],
        talk3: ['<08>{#p/basic}{~}西唻，\n西唻，\n西咪，\n西咪'],
        talk4: ['<08>{#p/basic}{~}西發西發\n嗦發嗦咪\n唻唻'],
        talk5: ['<08>{#p/basic}{~}咪嗦咪嗦\n咪西咪拉\n西嗦'],
        talk6: ['<08>{#p/basic}{~}（激情地\n嘟嘟）'],
        talk7: ['<08>{#p/basic}{~}（最後的\n嘟嘟）'],
        wave1: ['<32>{#p/human}* （你誇張地揮動著手臂。）\n* （無事發生。）'],
        wave2: () =>
            world.dead_skeleton || geno() || world.population < 4
                ? ['<32>{#p/human}* （你誇張地揮動著手臂。）\n* （無事發生。）']
                : ['<32>{#p/human}* （你誇張地揮動著手臂。）', '<32>{#p/basic}* 觀眾跟著狂歡了起來！'],
        act_boo1: ['<32>{#p/human}* （你朝著Shyren喝倒彩。）', '<32>{#p/basic}* 她耷拉著頭，默默走了...'],
        act_boo2: [
            '<32>{#p/human}* （你朝著Shyren喝倒彩。）',
            '<32>{#p/basic}* Shyren看到你這麼應對拒絕，\n  氣衝衝地離開了。'
        ],
        act_boo3: [
            '<32>{#p/human}* （你朝著Shyren喝倒彩。）',
            "<32>{#p/basic}* Shyren短暫的快樂轉瞬即逝。"
        ],
        act_boo4: [
            '<32>{#p/human}* （你朝著Shyren喝倒彩。）',
            '<32>{#p/basic}* 觀眾看著Shyren逃離了現場，\n  頓時亂作一團。'
        ],
        act_boo5: [
            '<32>{#p/human}* （你朝著Shyren喝倒彩。）',
            '<32>{#p/basic}* 突如其來的背叛使Shyren崩潰，\n  她大哭地逃離了現場。'
        ]
    },
    b_opponent_radtile: {
        epiphany: [
            ['<08>{#p/basic}{~}下次見啦，\n酷哥們。'],
            () =>
                world.meanie
                    ? ['<08>{#p/basic}{~}啊...？\n你什麼時\n候這麼\n恐怖了！']
                    : SAVE.data.b.oops && world.flirt > 9
                        ? ['<08>{#p/basic}{~}這種感覺\n...', "<08>{#p/basic}{~}我怎能\n抗拒！"]
                        : SAVE.data.b.oops
                            ? ['<08>{#p/basic}{~}耶...\n我們創造\n出了個激\n進的團隊。']
                            : ["<08>{#p/basic}{~}好舒服\n啊.."],
            ['<08>{#p/basic}{~}至少我\n不會白死。', "<08>{#p/basic}{~}為了和平，\n酷哥們。"],
            ["<08>{#p/basic}{~}錢拿去，\n走在「錢」\n衛時尚的\n哥們！"]
        ],
        act_check: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Radtile，自詡「酷斃」的鱷魚。\n* 真是可笑至極，\n  瞧瞧這個二貨到底有多土。']
                : ['<32>{#p/story}* RADTILE - 攻擊24 防禦12\n* 戴著星河般墨鏡的觀星者。\n* 最喜歡的樂曲類別：克氏量子樂。'],
        act_check2: ["<32>{#p/story}* RADTILE - 攻擊24 防禦12\n* 對這隻酷鱷魚來說，\n  事情發展的不太樂觀。"],
        act_check3: ['<33>{#p/story}* RADTILE - 攻擊24 防禦12 \n* 這條酷鱷魚正熱血沸騰。'],
        act_check4: [
            '<32>{#p/story}* RADTILE - 攻擊24 防禦12\n* 說起浪漫，這條酷鱷魚\n  非常的冷酷無情。'
        ],
        name: '* Radtile',
        status1: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Radtile。']
                : world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                    ? ['<32>{#p/kidding}* 別是這傢伙呀...']
                    : ['<32>{#p/story}* Radtile閃亮登場！'],
        randStatus1: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 他頭上的帽子真有趣。"]
                : ['<32>{#p/story}* Radtile正在調整他的帽子。'],
        randStatus2: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 這裡每個人都喜歡Raddy的小鏡子。"]
                : ['<32>{#p/story}* Radtile深深地看著鏡子裡的自己。'],
        randStatus3: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 他到底在幹啥？"]
                : ['<32>{#p/story}* Radtile正在做手勢\n  用來顯得自己更酷。'],
        randStatus4: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 我想知道他臉長啥樣。']
                : ['<32>{#p/story}* 聞起來像舊滑板場。'],
        idleTalk1: ['<08>{#p/basic}{~}「查看」一下\n試試嘛。'],
        idleTalk2: ['<08>{#p/basic}{~}來看一下。'],
        idleTalk3: ['<08>{#p/basic}{~}來偷看\n一眼..'],
        idleTalk4: ['<08>{#p/basic}{~}來盯\n著..'],
        insultIdleTalk1: ['<08>{#p/basic}{~}咩。'],
        insultIdleTalk2: ['<08>{#p/basic}{~}隨你便。'],
        insultIdleTalk3: ['<09>{#p/basic}{~}\x00*聳肩*'],
        insultIdleTalk4: ['<08>{#p/basic}{~}不咋酷。'],
        act_praise: ["<32>{#p/human}* （你告訴Radtile\n  他和量子黃瓜一樣酷。）"],
        act_praise_bullied: ['<32>{#p/human}* （你告訴Radtile他的傷疤\n  讓他看起來更剛毅。）'],
        complimentTalk1: ["<08>{#p/basic}{~}你真的在\n看嗎？"],
        complimentTalk2: ['<08>{#p/basic}{~}先查看，\n再發表\n意見。'],
        complimentTalk3: ['<08>{#p/basic}{~}先看\n後告訴，\n照這個\n順序。'],
        complimentPostInsultTalk1: ["<08>{#p/basic}{~}反正你是\n騙子。"],
        complimentPostInsultStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 是啊，我覺得現在這樣做\n  還不行，夥計..."]
                : ["<32>{#p/story}* Radtile不同意。"],
        flirtTalk1: ['<08>{#p/basic}{~}哇喔，\n嘿，\n等下..'],
        complimentStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 也許你應該先讓他\n  知道你在「查看」他？"]
                : ['<32>{#p/story}* Radtile想讓你先「查看」他。'],
        checkTalk: ['<08>{#p/basic}{~}我咋\n這麼帥呢，\n嘿嘿。'],
        realTalk1: ['<08>{#p/basic}{~}對嚕。'],
        realStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 你做到了！\n* ...我們能走了嗎？']
                : ["<32>{#p/story}* Radtile感覺比以前酷多了。"],
        realTalkY1: ['<08>{#p/basic}{~}\x00*碰拳*'],
        realTalkY2: ["<08>{#p/basic}{~}你\n酷斃了。"],
        realTalkY3: ["<08>{#p/basic}{~}讓我們\n搖滾吧。"],
        shockTalk1: ['<08>{#p/basic}{~}..酷。'],
        shockStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 呃...']
                : ['<32>{#p/story}* Radtile不咋開心。'],
        act_insult: ['<32>{#p/human}* （你大罵Radtile廢物，\n  讓他閉上臭嘴。）'],
        act_insult_bullied: ["<32>{#p/human}* （你嘲笑Radtile的傷痕，\n  讓他滾開。）"],
        act_flirt: ['<32>{#p/human}* （你引誘Radtile。）'],
        act_flirt_bullied: ["<32>{#p/human}* （你告訴Radtile，\n  就算他被毀容，也依然很漂亮。）"],
        insultTalk1: ["<08>{#p/basic}{~}如果我不\n呢？"],
        insultStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ['<32>{#p/kidding}* 呃...']
                : ['<32>{#p/story}* Radtile保持著距離。'],
        checkPostInsultTalk: ['<08>{#p/basic}{~}來再\n看一下\n不？\n'],
        checkPostInsultStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 啊，我們在兜圈子！"]
                : ['<32>{#p/story}* Radtile給你一個機會。'],
        hurtStatus: () =>
            world.kiddo && SAVE.data.n.state_foundry_muffet !== 1
                ? ["<32>{#p/kidding}* 心裡總感覺不是滋味..."]
                : ["<32>{#p/story}* Radtile的牙齒開始脫落了。"]
    },
    b_opponent_doge: {
        act_check: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* Doge，一條冷血的狗。\n* 純純的工作機器。']
                : ['<32>{#p/story}* DOGE - 攻擊14 防禦10\n* 讀作「ㄉㄨ ·ㄐㄧ」。尾字輕聲。\n* 特戰隊成員。'],
        act_flirt: () => [
            ...(dogecon() || world.goatbro
                ? ['<32>{#p/human}* （你向Doge調情。）', '<32>{#p/basic}* 她對這種拍須溜馬不屑一顧。']
                : battler.volatile[0].vars.pet
                    ? ['<32>{#p/human}* （你向Doge調情。）', '<32>{#p/basic}* Doge回以微笑。']
                    : battler.volatile[0].sparable
                        ? [
                            '<32>{#p/human}* （你向Doge調情。）',
                            '<32>{#p/basic}* Doge非常沮喪，不想聽你說三道四。'
                        ]
                        : world.flirt < 10
                            ? ['<32>{#p/human}* （你向Doge調情。）', "<32>{#p/basic}* Doge並沒有什麼\n  強烈的反應。"]
                            : ['<32>{#p/human}* （你向Doge調情。）', '<32>{#p/basic}* Doge正在竭力抵抗你。'])
        ],
        act_flirt2: [
            '<32>{#p/human}* （你再次對Doge調情。）',
            "<32>{#p/basic}* Doge快撐不住了..."
        ],
        act_flirt3: [
            '<32>{#p/human}* （你鼓起勇氣，\n  叫Doge小可愛。）',
            '<32>{#p/basic}* Doge試著強裝鎮靜，\n  但她的臉早已泛紅。',
            "<32>* 她扭動著，掙扎著，\n  但臉上的神情根本無法掩飾。",
            '<32>* Doge一臉羞愧的逃離了現場...'
        ],
        batheText: [
            '<32>{#p/human}* （你讓Doge去衝個澡。）',
            '<32>{#p/basic}* Doge從天花板上扯下一根水管...\n  水從管子裡湧了出來。',
            "<32>* 水很冷，但她似乎\n  並不怎麼介意...",
            '<32>* 很快，管子裡的水就流光了。\n* Doge稍微釋放了一點壓力...',
            "<32>{#p/story}* Doge的攻擊力下降了！"
        ],
        batheTextEarly: ["<32>{#p/human}* （你讓Doge去衝個澡，\n  但她現在並不怎麼想去。）"],
        batheTextGeno: [
            '<32>{#p/human}* （你讓Doge去衝個澡。）',
            '<32>{#p/basic}* 但她根本不在乎自己髒不髒。'
        ],
        batheTextLate: ['<32>{#p/human}* （你讓Doge去衝個澡，\n  但為時已晚。）'],
        batheTextPost: ['<32>{#p/human}* （但是Doge已經清洗乾淨了。）'],
        fetchStatus: ['<32>{#p/story}* Doge的智商在普通狗的\n  平均水平之上。'],
        fetchText: () => [
            '<32>{#p/human}* （你把扳手扔了出去。）\n* （Doge攔下了扳手，\n  並將它扔回給你。）',
            '<32>{#p/basic}* 飛回來的扳手直接\n  正中你的腦門！',
            '<32>{#p/story}* 你的移速下降了！',
            ...(world.goatbro && SAVE.flag.n.ga_asrielSpanner++ < 1
                ? ["<32>{#p/asriel2}* 別耍那玩意了。"]
                : [])
        ],
        fetchTextEpic: [
            '<32>{#p/human}* （你把扳手扔了出去。）\n* （Doge靈光一閃，把扳手撿了起來\n  並帶還給你。）'
        ],
        fetchTextGarb: ['<32>{#p/human}* （你把扳手扔了出去。）\n* （筋疲力盡的Doge直接將扳手\n  選擇性忽視掉了。）'],
        flirtStatus: ['<32>{#p/story}* Doge正猜疑你進攻背後\n  所隱藏的真正意圖。'],
        flirtStatusAccept: ['<32>{#p/story}* Doge的臉微微泛紅。'],
        flirtStatusReject: ['<32>{#p/story}* Doge無奈地嘆了口氣。'],
        hurtStatus: () =>
            world.goatbro
                ? ['<32>{#p/asriel2}* 離死不遠了。']
                : ["<32>{#p/story}* Doge拼命裝出一副沒事的樣子。"],
        name: '* Doge',
        petTalkPost: ['<11>{#p/basic}{~}啊...'],
        petText: [
            '<32>{#p/human}* （你想摸摸Doge。）',
            '<32>{#p/basic}* Doge猶豫地將頭抬了起來。',
            '<32>* 你的手摸到了Doge的頭。\n* 她頓時容光煥發。\n* 並給了你一個大大的微笑作為回應。',
            '<32>* 所有堆積在她內心裡的壓力\n  終於完全得到了釋放。',
            '<32>* Doge不再想與你戰鬥了。'
        ],
        petTextEarly: ["<32>{#p/human}* （你試著撫摸Doge，\n  但你現在還夠不到她。）"],
        petTextGeno: [
            '<32>{#p/human}* （你想摸摸Doge。）',
            '<32>{#p/basic}* 她對這份親暱漠然置之。'
        ],
        petTextLate: ['<32>{#p/human}* （你試著撫摸Doge，\n  但為時已晚。）'],
        petTextPost1: [
            '<32>{#p/human}* （你再一次試著撫摸Doge。）',
            "<32>{#p/basic}* Doge沉浸在你的愛撫之中，\n  仿佛她多年來第一次受到關愛..."
        ],
        petTextPost2: ['<32>{#p/human}* （你還想再試著撫摸Doge。）', '<32>{#p/basic}* Doge已經要爽上天了。'],
        petTextPost3: ['<32>{#p/human}* （你繼續撫摸著Doge。）', '<32>{#p/basic}* 這麼摸下去不會違法嗎？'],
        petTextPost4: ['<32>{#p/human}* （你又撫摸了Doge好一會。）', '<32>{#p/basic}* Doge直接躺在了地上。'],
        petTextPost5: ['<32>{#p/human}* （你揉了揉Doge的肚皮。）', '<32>{#p/basic}* Doge開始流口水了...'],
        petTextPost6: ['<32>{#p/human}* （你撫摸著Doge。）', '<32>{#p/basic}* 她還在繼續流著口水。'],
        petTextPost7: ['<32>{#p/human}* （你撫摸著Doge。）', '<32>{#p/basic}* ...'],
        petTextSus: ['<32>{#p/human}* （但是Doge過於煩躁，\n  不想被摸。）'],
        status1: () => (world.goatbro ? ['<32>{#p/asriel2}* Doge。'] : ['<32>{#p/story}* Doge昂首闊步向你走來。']),
        turnStatus1: ['<32>{#p/story}* Doge審視著你的站姿，\n  認為你不夠端正。'],
        turnStatus2: () =>
            dogecon() ? ['<32>{#p/story}* Doge擺弄著她的長矛。'] : ['<32>{#p/story}* Doge需要好好衝洗一番。'],
        turnStatus3: () =>
            dogecon()
                ? ['<32>{#p/story}* Doge一再檢查她的站姿。']
                : battler.volatile[0].vars.bathe
                    ? ['<32>{#p/story}* Doge渾身溼漉漉的。']
                    : ["<32>{#p/story}* Doge的衛生習慣毫無改變，\n  這讓她感到非常沮喪。"],
        turnStatus4: () =>
            dogex()
                ? ['<32>{#p/story}* Doge想起了她的職責。']
                : world.dead_canine
                    ? ['<32>{#p/story}* Doge想起了她的同事們。']
                    : battler.volatile[0].vars.bathe
                        ? ['<32>{#p/story}* Doge想要活動一下筋骨。']
                        : ['<32>{#p/story}* Doge思考著她的職責所在。'],
        turnStatus5: () =>
            dogex()
                ? ['<32>{#p/story}* Doge想起了她的榮譽。']
                : world.dead_canine
                    ? ['<32>{#p/story}* Doge想起了她的朋友們。']
                    : battler.volatile[0].vars.walk
                        ? ['<32>{#p/story}* Doge稍微放鬆了一下，\n  隨後恢復了標準的站姿。']
                        : battler.volatile[0].vars.bathe
                            ? ['<32>{#p/story}* Doge鎮靜了下來。']
                            : ['<32>{#p/story}* Doge深切懷念起\n  她的一位老同事。'],
        turnStatus6: () =>
            dogecon()
                ? ['<32>{#p/story}* Doge保持著冷靜。']
                : battler.volatile[0].vars.walk
                    ? ['<32>{#p/story}* Doge深吸一口氣。']
                    : ['<32>{#p/story}* Doge冒出了一身冷汗。'],
        turnStatus7: () =>
            battler.volatile[0].vars.walk
                ? ['<32>{#p/story}* Doge渴望著關愛。']
                : ['<32>{#p/story}* Doge深吸一口氣。'],
        turnStatus8: () =>
            dogecon()
                ? ['<32>{#p/story}* Doge依舊保持著專注。']
                : battler.volatile[0].vars.walk
                    ? ['<32>{#p/story}* Doge需要幫助。']
                    : ["<32>{#p/story}* Doge的呼吸變得急促。"],
        turnStatus9: () =>
            dogecon()
                ? ['<32>{#p/story}* Doge依舊保持著專注。']
                : battler.volatile[0].vars.walk
                    ? ['<32>{#p/story}* Doge只想被撫摸。']
                    : ['<32>{#p/story}* Doge氣喘籲籲。'],
        turnStatus10: () =>
            dogecon()
                ? ['<32>{#p/story}* Doge依舊保持著專注。']
                : battler.volatile[0].vars.pet
                    ? ['<32>{#p/story}* Doge心滿意足。']
                    : ['<32>{#p/story}* Doge從容不迫地屹立著，\n  等待你舉手投降。'],
        turnTalk1: () =>
            dogecon() || world.goatbro
                ? ["<11>{#p/basic}{~}你犯下的罪行，\n我一清二楚。"]
                : ['<11>{#p/basic}{~}隊長警告我們\n要提防你。'],
        turnTalk2: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}兩人聯手，\n濫殺無辜...',
                    '<11>{#p/basic}{~}已然沉溺於\n殺戮快感之中\n無法自拔？'
                ]
                : dogex()
                    ? ['<11>{#p/basic}{~}當你屠戮平民，\n踐踏生命時...', '<11>{#p/basic}{~}可曾懊悔過\n自己的\n所作所為？']
                    : world.dead_canine
                        ? ['<11>{#p/basic}{~}犬衛隊\n所有成員...', '<11>{#p/basic}{~}都慘死於\n你的暴行之下，\n無一倖免。']
                        : [
                            '<11>{#p/basic}{~}因此，\n我一直在\n日夜巡邏。',
                            '<11>{#p/basic}{~}請注意...\n這裡很髒。'
                        ],
        turnTalk3: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}不願下出\n如此定論...',
                    '<11>{#p/basic}{~}但依我所見，\n絕無其他可能。'
                ]
                : dogecon()
                    ? [
                        '<11>{#p/basic}{~}你隨時可以\n棄甲投戈...',
                        '<11>{#p/basic}{~}然而你選擇\n將殺戮\n貫徹到底。'
                    ]
                    : battler.volatile[0].vars.bathe
                        ? ['<11>{#p/basic}{~}啊...', '<11>{#p/basic}{~}真爽...']
                        : [
                            '<11>{#p/basic}{~}但我想，\n作為\n特戰隊的\n一份子。',
                            '<11>{#p/basic}{~}我們必須\n隨機應變。'
                        ],
        turnTalk4: () =>
            dogecon() || world.goatbro
                ? [
                    '<11>{#p/basic}{~}遙想當年，\n初入特戰隊...',
                    "<11>{#p/basic}{~}那時，Undyne\n視人類為敵，\n我將信將疑。"
                ]
                : battler.volatile[0].vars.bathe
                    ? ['<11>{#p/basic}{~}毛髮沾\n太多水了...']
                    : [
                        '<11>{#p/basic}{~}遙想當年，\n申請參加\n特戰隊時...',
                        "<11>{#p/basic}{~}我未曾想過\n我會\n順利入隊。"
                    ],
        turnTalk5: () =>
            dogecon() || world.goatbro
                ? ["<11>{#p/basic}{~}而當親眼目睹\n你這般行徑...", "<11>{#p/basic}{~}我的心中\n已再無疑慮。"]
                : battler.volatile[0].vars.walk
                    ? ['<11>{#p/basic}{~}嗯。\n沒有什麼事\n更能勝過\n散步了。']
                    : battler.volatile[0].vars.bathe
                        ? [
                            '<11>{#p/basic}{~}{#f.batmusic1}請稍等候。',
                            '<11>{#p/basic}{~}...',
                            '<11>{#p/basic}{~}\x00*轉身抖動*',
                            '<11>{#p/basic}{~}\x00*繼續抖動*',
                            '<11>{#p/basic}{~}\x00*停止抖動*',
                            '<11>{#p/basic}{~}...',
                            '<11>{#p/basic}{~}好了，\n毛髮已幹。\n請回到戰鬥。',
                            '{*}{#f.batmusic2}{%}'
                        ]
                        : [
                            '<11>{#p/basic}{~}但在\n那個蠢貨\n退役之後...',
                            '<11>{#p/basic}{~}我就接過\n他的班了。'
                        ],
        turnTalk6: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}而你，\nAsriel，\n就是我族叛徒。',
                    '<11>{#p/basic}{~}難以置信，\n如此邪惡至極，\n卻將登基為王。'
                ]
                : dogex()
                    ? ['<11>{#p/basic}{~}投降是\n明智之舉。', '<11>{#p/basic}{~}你卻不知\n如何去做。']
                    : world.dead_canine
                        ? [
                            '<12>{#p/basic}{~}Doggo\n為犬衛隊\n新兵。',
                            '<11>{#p/basic}{~}有些人... 把他的視力\n當作一種空\n去鑽...',
                            '<11>{#p/basic}{~}但他前途\n卻一片光明。'
                        ]
                        : battler.volatile[0].vars.walk
                            ? [
                                "<11>{#p/basic}{~}已經走了\n一陣子的\n你...",
                                '<11>{#p/basic}{~}現在又\n還剩多少\n耐力呢？'
                            ]
                            : battler.volatile[0].vars.bathe
                                ? ['<11>{#p/basic}{~}為你深表\n歉意，\n因我心事\n重重。']
                                : [
                                    '<11>{#p/basic}{~}這份工作\n有些艱苦...',
                                    '<11>{#p/basic}{~}就連Undyne\n都為此開始\n自我懷疑。',
                                    '<11>{#p/basic}{~}...別跟她講\n我在背後\n這麼對她\n說三道四。'
                                ],
        turnTalk7: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}我們的宿命\n竟是這般？',
                    '<11>{#p/basic}{~}卑鄙的王子\n與人類共謀...',
                    '<11>{#p/basic}{~}...誓要剿滅\n我族所有同胞？'
                ]
                : dogex()
                    ? [
                        '<11>{#p/basic}{~}你視生命如\n草芥。',
                        '<11>{#p/basic}{~}總把我們看得\n低人一等。'
                    ]
                    : world.dead_canine
                        ? [
                            "<11>{#p/basic}{~}Canis Minor是\nCanis Major\n的直系下屬。",
                            '<11>{#p/basic}{~}它獨特的觀察\n方式幫了很\n多忙...',
                            '<11>{#p/basic}{~}即使這種行為\n常常被大家\n誤解。'
                        ]
                        : battler.volatile[0].vars.walk
                            ? ['<11>{#p/basic}{~}顯然比我\n想像中的\n要多...']
                            : ['<11>{#p/basic}{~}（嘆氣...）'],
        turnTalk8: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}終究...',
                    "<11>{#p/basic}{~}兩人孰更惡劣，\n難以論斷。"
                ]
                : dogex()
                    ? ['<11>{#p/basic}{~}現在，\n輪到你了。', '<11>{#p/basic}{~}輪到你領受\n低人一等的\n待遇。']
                    : world.dead_canine
                        ? [
                            '<11>{#p/basic}{~}Dogamy與\nDogaressa，\n勤奮一對。',
                            '<11>{#p/basic}{~}相遇之前，\n其舉止\n頗為失禮。',
                            '<11>{#p/basic}{~}相遇之後，\n齊心協力，\n無所不能。'
                        ]
                        : battler.volatile[0].vars.walk
                            ? ['<11>{#p/basic}{~}...', '<11>{#p/basic}{~}我們還可繼續？']
                            : ['<11>{#p/basic}{~}戰鬥\n開始進入\n僵局...'],
        turnTalk9: () =>
            world.goatbro
                ? 
                ['<11>{#p/basic}{~}只此一言...', '<11>{#p/basic}{~}這一切，\n未曾預料。']
                : dogex()
                    ? ['<11>{#p/basic}{~}...']
                    : world.dead_canine
                        ? [
                            '<11>{#p/basic}{~}Canis Major，\n為犬衛隊元老。',
                            '<11>{#p/basic}{~}與其主人，\n妥善領導團隊。',
                            '<11>{#p/basic}{~}但現在...'
                        ]
                        : ['<11>{#p/basic}{~}人類，我...'],
        turnTalk10: () =>
            world.goatbro
                ? [
                    '<11>{#p/basic}{~}言盡至此。',
                    '<11>{#p/basic}{~}我必為\n人民\n伸張正義。'
                ]
                : dogex()
                    ? [
                        '<11>{#p/basic}{~}言盡至此。',
                        "<11>{#p/basic}{~}正義，\n我必索回。"
                    ]
                    : world.dead_canine
                        ? [
                            '<11>{#p/basic}{~}言盡至此。',
                            "<11>{#p/basic}{~}我必為\n犬衛隊\n報仇雪恨。"
                        ]
                        : battler.volatile[0].vars.pet
                            ? ['<11>{#p/basic}{~}（臉紅了）', '<11>{#p/basic}{~}你真是個...\n友善的\n人類...']
                            : [
                                '<11>{#p/basic}{~}我覺得\n是時候\n到此為止\n了。',
                                '<11>{#p/basic}{~}...',
                                '<11>{#p/basic}{~}實話講，\n你並沒有\n那麼壞。',
                                '<11>{#p/basic}{~}至少\n比Undyne\n所述的\n略有差別。',
                                '<11>{#p/basic}{~}請你如\n接受懇求般\n接受我的\n仁慈...',
                                '<11>{#p/basic}{~}懇求你\n不會再墮入\n黑暗之中。'
                            ],
        turnTalk11: () => ['<11>{#p/basic}{~}...'],
        walkText: [
            '<32>{#p/human}* （你想帶Doge遛個彎。）',
            '<32>{#p/basic}* Doge跟隨著你的腳步。\n* 你們一起齊步前進。',
            '<32>* 你們就這樣走了一會...',
            '<32>* 到最後...',
            '<32>* Doge開始厭倦這種\n  無聊的活動了。',
            '<32>* 她又跟著你回到了她的巡邏區，\n  釋放了點壓力...',
            "<32>{#p/story}* Doge的攻擊力下降了！"
        ],
        walkTextEarly: ['<32>{#p/human}* （你想帶著Doge去散散步，\n  但她沒有理由跟你一起去。）'],
        walkTextGeno: [
            '<32>{#p/human}* （你想帶Doge遛個彎。）',
            '<32>{#p/basic}* Doge拒絕了你的散步請求。'
        ],
        walkTextLate1: [
            "<32>{#p/human}* （你想帶Doge去散散步，\n  但她為了你已經弄乾\n  自己的身體了。）"
        ],
        walkTextLate2: [
            '<32>{#p/human}* （你想帶Doge去散散步，\n  但她從來不做任何非必要的事。）'
        ],
        walkTextPost: ['<32>{#p/human}* （但是Doge早已因為之前的散步\n  而累到虛脫了。）'],
        walkTextSus: ['<32>{#p/human}* （但是Doge太髒了，\n  沒法出去散步。）']
    },
    b_opponent_muffet: {
        act_check: ['<32>{#p/story}* MUFFET - 攻擊39 防禦19\n* 全蜘蛛部落的女王。\n* 特戰隊志願兵。'],
        act_flirt: () => [
            ...(badSpider()
                ? ['<32>{#p/human}* （你向Muffet調情。）\n* （Muffet狠狠瞪了你一眼。）']
                : battler.volatile[0].sparable
                    ? ['<32>{#p/human}* （你向Muffet調情。）\n* （Muffet笑了笑，\n  伸出幾隻手拍了拍你的頭。）']
                    : world.flirt < 10
                        ? ['<32>{#p/human}* （你向Muffet調情。）\n* （Muffet笑了笑，\n  向你揮舞她的一些手指。）']
                        : ['<32>{#p/human}* （你向Muffet調情。）\n* （Muffet看起來頗有興致，\n  但還是不夠。）'])
        ],
        act_flirt2: [
            '<32>{#p/human}* （你向Muffet調情。）\n* （Muffet對你投向了更多目光。）'
        ],
        act_flirt3: [
            '<32>{#p/human}* （你鼓起勇氣，邀請Muffet\n  一同去野餐。）',
            '<32>{#p/basic}* Muffet嚕嚕笑了幾下...',
            '<32>* 然後又笑了幾聲...',
            "<32>* 她已經無法控制自己的情感了！\n* Muffet向你完美的調情能力屈服！",
            '<32>* ...然後立即決定結束戰鬥，\n  以免讓她的蜘蛛同伴們蒙羞。',
            '<32>{#p/kidding}* ...什麼？'
        ],
        flirtReaction1: ['<11>{#p/basic}{~}真可愛啊~'],
        flirtReaction2: ["<11>{#p/basic}{~}你人真好~"],
        flirtReaction3: ['<11>{#p/basic}{~}啊呼呼~'],
        appeaseText: [
            '<33>{#p/human}* （你對Muffet發出呼籲。）\n* （Muffet再一次被你的話\n  所吸引。）',
            '<32>* （你說起那些天真的狗狗，\n  批判Undyne把它們編入衛隊\n  是有多不負責。）',
            '<32>* （你接著上句說，相信這種隊長\n  就如同將整個蜘蛛部落置於險境。）',
            '<32>{#p/basic}* Muffet開始仔細地考慮\n  這些情況...',
            "<32>{#p/story}* Muffet的攻速下降了！"
        ],
        appeaseTextEarly: ["<32>{#p/human}* （你向Muffet發出呼籲，\n  但她看起來還沒有準備好\n  傾聽你的話。）"],
        appeaseTextGeno: [
            '<32>{#p/human}* （你向Muffet發出呼籲。）',
            '<32>{#p/basic}* Muffet可不會被你的膚淺言論\n  所左右。'
        ],
        appeaseTextLate: [
            "<32>{#p/human}* （你向Muffet發出呼籲，\n  但她已經不想再聽了。）"
        ],
        appeaseTextPost: ["<32>{#p/human}* （但Muffet不需要被呼籲第二遍。）"],
        appeaseTextSus: ['<32>{#p/human}* （但Muffet沒有理由去聽你說話。）'],
        counterText: [
            '<32>{#p/human}* （你嘗試反駁Muffet。）\n* （Muffet被你的話所吸引。）',
            '<32>* （你告訴她說和特戰隊做交易\n  完全站不住腳。）',
            '<32>* （你提到他們的其中一員都沒能\n  把你抓住。）',
            '<32>{#p/basic}* Muffet開始思考著這些事的\n  來龍去脈...',
            "<32>{#p/story}* Muffet的攻速下降了！"
        ],
        counterTextEarly: [
            "<32>{#p/human}* （你試圖反駁Muffet，\n  但她還沒有說出\n  能供你反駁的話。）"
        ],
        counterTextGeno: [
            '<32>{#p/human}* （你嘗試反駁Muffet。）',
            '<32>{#p/basic}* Muffet對自己的目標堅定不移。'
        ],
        counterTextLate: ["<32>{#p/human}* （你嘗試反駁Muffet，\n  但她早已拿定了主意。）"],
        counterTextPost: ['<32>{#p/human}* （但Muffet已經聽過了\n  你的駁論。）'],
        name: '* Muffet',
        payTalkPost: ["<11>{#p/basic}{~}謝謝你的好意，\n但我們的錢\n已經夠多了~"],
        payText: [
            '<32>{#p/human}* （你嘗試給Muffet付錢。）',
            "<32>* 看起來，怪物小孩的錢足夠支付\n  所有蜘蛛部落的開支！",
            '<32>* Muffet收下了錢，向你和怪物小孩\n  鞠了一躬。',
            '<32>* 她的臣民可以吃飽喝足\n  好一段時間了。',
            "<32>* Muffet不再關心戰鬥了。"
        ],
        payTextEarly: [
            "<32>{#p/human}* （你嘗試給Muffet付錢，\n  但她現在尚未知曉你給她錢的\n  任何依據。）"
        ],
        payTextGeno: [
            '<32>{#p/human}* （你嘗試給Muffet付錢。）',
            "<32>{#p/basic}* 可Muffet根本不稀罕你的錢。"
        ],
        payTextLate: ["<32>{#p/human}* （你嘗試給Muffet付錢，\n  但她已經不想再受賄了。）"],
        payTextPost: ['<32>{#p/human}* （你再一次嘗試給Muffet錢。）'],
        payTextSus: ['<32>{#p/human}* （但是Muffet沒有理由來相信你。）'],
        status1: ["<32>{#p/kidding}* 我被困住了...！"],
        turnStatus1: () =>
            badSpider()
                ? world.genocide
                    ? world.bullied
                        ? ['<32>{#p/kidding}* 兩隻小流氓...？']
                        : ['<32>{#p/kidding}* 兩隻殺人犯...？']
                    : world.bullied
                        ? ['<32>{#p/kidding}* 小流氓...？']
                        : ['<32>{#p/kidding}* 殺人犯...？']
                : ['<32>{#p/kidding}* 救命...！'],
        turnStatus2: () =>
            badSpider()
                ? world.genocide
                    ? ["<32>{#p/kidding}* 但我們什麼都沒做！"]
                    : ["<32>{#p/kidding}* 我有種不祥的預感..."]
                : ["<32>{#p/kidding}* 所以說，這存粹是生意了..."],
        turnStatus3: () =>
            badSpider()
                ? ["<32>{#p/kidding}* 喲...\n* 看來她真的很不喜歡你..."]
                : battler.volatile[0].vars.counter
                    ? ['<32>{#p/kidding}* 我們該怎麼辦？']
                    : ["<32>{#p/kidding}* 我們永遠也逃不出去了，\n  不是嗎..."],
        turnStatus4: () =>
            badSpider()
                ? ['<32>{#p/kidding}* 那是什麼鬼東西？']
                : battler.volatile[0].vars.counter
                    ? ['<32>{#p/kidding}* 她難道... 改變主意了嗎？']
                    : ['<32>{#p/kidding}* 那是什麼鬼東西？'],
        turnStatus5: () =>
            badSpider()
                ? ['<32>{#p/kidding}* 當然...']
                : battler.volatile[0].vars.counter
                    ? ["<32>{#p/kidding}* 看來沒那麼容易..."]
                    : ["<32>{#p/kidding}* 你... 你在開玩笑吧？\n* 一點也不有趣！"],
        turnStatus6: () =>
            badSpider()
                ? ["<32>{#p/kidding}* 我可不喜歡她對你說的話，\n  夥計..."]
                : battler.volatile[0].vars.counter
                    ? ['<32>{#p/kidding}* 蜘蛛同伴們...？']
                    : ['<32>{#p/kidding}* 呃...'],
        turnStatus7: () =>
            badSpider()
                ? ["<32>{#p/kidding}* 她太無情了...！"]
                : battler.volatile[0].vars.appease
                    ? ['<32>{#p/kidding}* 嘿，等一下...\n* 我覺得這方法開始奏效了！\n* 繼續努力，夥計！']
                    : ["<32>{#p/kidding}* 我...\n* 我很害怕，夥計..."],
        turnStatus8: () =>
            badSpider()
                ? ['<32>{#p/kidding}* 夥計，我們咋活下來的？？']
                : battler.volatile[0].vars.appease
                    ? ["<32>{#p/kidding}* 喲，先把古怪的杯糕丟一邊...\n  我們終於有點進展了！\n* 應該吧？"]
                    : ['<32>{#p/kidding}* 呃啊，別再來了！！'],
        turnStatus9: () =>
            badSpider()
                ? ['<32>{#p/kidding}* 什麼叫「不可避免的事情」？']
                : battler.volatile[0].vars.appease
                    ? ['<32>{#p/kidding}* 但是...\n* 我覺得我們...']
                    : ['<32>{#p/kidding}* 呃啊，別再來了！！'],
        turnStatus10: () =>
            badSpider()
                ? ["<32>{#p/kidding}* 喲，你應該知道我也在這吧..."]
                : battler.volatile[0].vars.appease
                    ? ["<32>{#p/kidding}* 嘿，我有點錢！\n* 用上吧，夥計！"]
                    : ['<32>{#p/kidding}* 有人嗎，來人啊...'],
        turnStatus11: () =>
            badSpider()
                ? ["<32>{#p/kidding}* 這一點也不有趣...！"]
                : battler.volatile[0].vars.pay
                    ? ["<32>{#p/kidding}* 我希望那個矮個子骷髏不會介意我\n  用他給我的錢..."]
                    : battler.volatile[0].vars.appease
                        ? ["<32>{#p/kidding}* 夥計...\n* 為什麼我們不去幫幫她呢？"]
                        : ["<32>{#p/kidding}* 結束了..."],
        turnStatus12: () =>
            badSpider() ? ['<32>{#p/kidding}* ...'] : ['<32>{#p/kidding}* 我們要就此結束，還是...？'],
        turnStatus13: () =>
            badSpider() ? ['<32>{#p/kidding}* 真的結束了嗎？'] : ['<32>{#p/kidding}* 我們要就此結束，還是...？'],
        turnTalk1: () =>
            badSpider()
                ? world.genocide
                    ? world.bullied
                        ? ['<11>{#p/basic}{~}啊呼呼呼...\n兩隻小流氓\n爬進我\n網裡了~']
                        : ['<11>{#p/basic}{~}啊呼呼呼...\n兩隻殺人犯\n爬進我\n網裡了~']
                    : world.bullied
                        ? ['<11>{#p/basic}{~}啊呼呼呼...\n一隻小流氓\n爬進我\n網裡了~']
                        : ['<11>{#p/basic}{~}啊呼呼呼...\n一隻殺人犯\n爬進我\n網裡了~']
                : ["<11>{#p/basic}{~}小寶貝們，\n你們現在\n是我的了~"],
        turnTalk1a: [
            '<11>{#p/basic}{~}希望你能\n喜歡這種\n新顏色~',
            '<11>{#p/basic}{~}我覺得紫色\n更適合你...',
            "<11>{#p/basic}{~}不是嗎，\n小寶貝們？"
        ],
        turnTalk2: () =>
            badSpider()
                ? [
                    world.genocide
                        ? '<11>{#p/basic}{~}你們以為會\n發生什麼，\n小可愛們？'
                        : '<11>{#p/basic}{~}你以為會\n發生什麼，\n小可愛？',
                    '<11>{#p/basic}{~}指望我會\n饒恕你不成？'
                ]
                : [
                    "<11>{#p/basic}{~}別以為\n我會對你\n手下留情，\n渺小的\n人類。",
                    '<11>{#p/basic}{~}那支特戰隊\n為了得到\n你的靈魂\n可是給了我\n很多錢的~'
                ],
        turnTalk3: () =>
            badSpider()
                ? ['<11>{#p/basic}{~}喔天哪~', '<11>{#p/basic}{~}你可\n真丟人~']
                : battler.volatile[0].vars.counter
                    ? ['<11>{#p/basic}{~}啊呼呼呼...\n行吧...']
                    : [
                        '<11>{#p/basic}{~}看來你\n不打算提出\n反報價了...',
                        '<11>{#p/basic}{~}那對我來說，\n該選哪個\n顯而易見~'
                    ],
        turnTalk4: () =>
            badSpider()
                ? [
                    '<11>{#p/basic}{~}好吧。\n有件好訊息\n要告訴你~',
                    "<11>{#p/basic}{~}我不必再為\n餵養我的寵物\n而發愁了！"
                ]
                : battler.volatile[0].vars.counter
                    ? ['<11>{#p/basic}{~}如果有\n更棒的交易\n就好了...']
                    : ['<11>{#p/basic}{~}我的寵物，\n你在哪~', "<11>{#p/basic}{~}飯點到啦~"],
        turnTalk5: () =>
            badSpider()
                ? [
                    '<11>{#p/basic}{~}你活下來了？\n真厲害~',
                    '<11>{#p/basic}{~}那我應當\n獎勵你...',
                    '<11>{#p/basic}{~}...\n更多攻擊啦！\n啊呼呼呼！'
                ]
                : battler.volatile[0].vars.counter
                    ? [
                        '<11>{#p/basic}{~}但我該\n怎麼保證...',
                        "<11>{#p/basic}{~}...你不會\n在背後偷偷\n捅我刀子呢？"
                    ]
                    : [
                        '<11>{#p/basic}{~}我有時會想，\n戰鬥到底是\n什麼樣子的。',
                        "<11>{#p/basic}{~}我從來沒想到\n它會那麼有趣~"
                    ],
        turnTalk6: () =>
            badSpider()
                ? [
                    '<11>{#p/basic}{~}感覺怎麼樣，\n嗯？',
                    !world.bullied
                        ? '<11>{#p/basic}{~}所有的怪物\n都如\n多米諾骨牌\n般倒下...'
                        : '<11>{#p/basic}{~}所有的怪物\n都在\n驚慌失措中\n四處逃竄...'
                ]
                : battler.volatile[0].vars.counter
                    ? [
                        '<11>{#p/basic}{~}我的\n蜘蛛同伴們\n的安全\n需要\n得到保障...',
                        "<11>{#p/basic}{~}我可不能\n讓它們\n置於險地，\n不是嗎？\n啊呼呼呼..."
                    ]
                    : [
                        "<11>{#p/basic}{~}玩得開心嗎，\n小可愛們？",
                        '<11>{#p/basic}{~}我的\n蜘蛛同伴們\n一定會...',
                        '<11>{#p/basic}{~}...等到他們\n拿到自己的\n那份錢的時候~'
                    ],
        turnTalk7: () =>
            badSpider()
                ? world.genocide || !world.bullied
                    ? [
                        world.genocide ? '<11>{#p/basic}{~}那麼，\n小可愛們...' : '<11>{#p/basic}{~}那麼，\n小可愛...',
                        '<11>{#p/basic}{~}我得好好享受\n殺死你們\n所帶來的\n樂趣~'
                    ]
                    : ['<11>{#p/basic}{~}那麼，\n小可愛...', '<11>{#p/basic}{~}我很樂意\n用這份恩情\n報答你~']
                : battler.volatile[0].vars.appease
                    ? ['<11>{#p/basic}{~}我必須承認，\n這事確實\n令人擔憂...']
                    : [
                        '<11>{#p/basic}{~}好吧，\n沒關係的，\n渺小的人類~',
                        '<11>{#p/basic}{~}現在\n唯一重要的，\n是你的靈魂~'
                    ],
        turnTalk8: () =>
            badSpider()
                ? [
                    world.genocide
                        ? '<11>{#p/basic}{~}喔，\n太有趣了，\n你們兩個！'
                        : '<11>{#p/basic}{~}喔，\n太有趣了，\n不是嗎？',
                    "<11>{#p/basic}{~}餵食時間\n到啦，\n我的寵物~"
                ]
                : battler.volatile[0].vars.appease
                    ? [
                        "<11>{#p/basic}{~}它們也沒有\n做什麼事\n來贏得\n我的信任...",
                        '<11>{#p/basic}{~}喔，你好，\n我的寵物~'
                    ]
                    : ['<11>{#p/basic}{~}再來一輪吧，\n我的寵物~'],
        turnTalk9: () =>
            badSpider()
                ? ['<11>{#p/basic}{~}你只是讓\n不可避免的\n事情\n延遲發生罷了~']
                : battler.volatile[0].vars.appease
                    ? ['<11>{#p/basic}{~}不過嘛，\n小可愛們...', "<11>{#p/basic}{~}我不知道\n我能否\n相信你們~"]
                    : ["<11>{#p/basic}{~}你挺堅強的，\n這點我得承認~"],
        turnTalk10: () =>
            badSpider()
                ? ['<11>{#p/basic}{~}好啦...', "<11>{#p/basic}{~}難道你\n不累嗎？"]
                : battler.volatile[0].vars.appease
                    ? ['<11>{#p/basic}{~}也許，除非...', '<11>{#p/basic}{~}你能給我\n一點保險費？']
                    : ['<11>{#p/basic}{~}除非交易\n發生變動，\n否則\n你的靈魂\n就如我的\n一般亮眼~'],
        turnTalk11: () =>
            badSpider()
                ? ['<11>{#p/basic}{~}啊呼呼呼...']
                : battler.volatile[0].vars.pay
                    ? [
                        '<11>{#p/basic}{~}我向你們二人\n致以最誠摯的\n歉意~',
                        "<11>{#p/basic}{~}你們的善舉\n我永遠\n不會忘記！"
                    ]
                    : [
                        "<11>{#p/basic}{~}這是什麼？\n一條來自\nUndyne的資訊？",
                        "<11>{#p/basic}{~}她取消了\n交易...？",
                        '<11>{#p/basic}{~}...嗯...',
                        "<11>{#p/basic}{~}行吧，\n看來我得\n就此收工了，\n不是嗎？",
                        '<11>{#p/basic}{~}很抱歉浪費了\n你的時間~'
                    ],
        turnTalk12: () => ['<11>{#p/basic}{~}...'],
        turnTalk13: (didf: boolean) =>
            badSpider()
                ? [
                    world.genocide
                        ? '<11>{#p/basic}{~}你知道嗎，\n小可愛們？'
                        : '<11>{#p/basic}{~}你知道嗎，\n小可愛？',
                    "<11>{#p/basic}{~}我已經不想\n與你繼續\n戰鬥下去了。",
                    '<11>{#p/basic}{~}所以，\n做你\n想做的吧。',
                    world.genocide || !world.bullied
                        ? didf
                            ? "<11>{#p/basic}{~}...對不住啦，\nUndyne。\n就算我真想死，\n也用不著\n別人操心。"
                            : '<11>{#p/basic}{~}...抱歉，\nUndyne。\n我已經拖得\n夠久了。'
                        : didf
                            ? "<11>{#p/basic}{~}說實話，\n因為你\n這種小流氓\n而失去\n我的生命\n實在不值得..."
                            : "<11>{#p/basic}{~}說實話，\n在你這種\n小流氓上\n浪費時間\n實在不值得...",
                    '<11>{#p/basic}{~}那就，\n拜拜啦~'
                ]
                : ['<11>{#p/basic}{~}...']
    },
    b_opponent_undyne: {
        artifact: ["<32>{#p/human}* （Undyne似乎甚至不知道\n  這是什麼。）"],
        epiphaNOPE: ['<20>{#p/undyne}嗯？\n你拿了個啥玩意？'],
        spaghetti1: [
            '<32>{#p/basic}* 這味道讓Undyne\n  想起了身邊的人...',
            "<32>{#p/story}* Undyne的攻擊力下降了！"
        ],
        spaghetti2: () =>
            world.genocide
                ? [
                    "<32>{#p/basic}* 這味道讓Undyne\n  想起了一個再也見不到的人...",
                    '<32>{#p/basic}* ...但這讓她\n  剷除你的決心增強了。',
                    "<32>{#p/story}* Undyne的攻擊力提升了！\n* Undyne的防禦力下降了！"
                ]
                : [
                    "<32>{#p/basic}* 這味道讓Undyne\n  想起了一個再也見不到的人...",
                    "<32>{#p/story}* Undyne的防禦力下降了！"
                ],
        act_check: () =>
            world.genocide
                ? SAVE.flag.n.azzy_assist < 2
                    ? ['<32>{#p/asriel2}* Undyne。\n* ...咋還不死？']
                    : ["<32>{#p/asriel2}* Undyne。\n* 發什麼呆？快去攻擊她啊！"]
                : helmetdyne()
                    ? ['<32>{#p/story}* UNDYNE - 攻擊40 防禦100\n* 皇家衛隊隊長。\n* 冷酷無情。']
                    : respecc()
                        ? ['<32>{#p/story}* UNDYNE - 攻擊25 防禦10\n* 曾經是你的死敵，如今是你\n  無與倫比的對手！']
                        : ['<32>{#p/story}* UNDYNE - 攻擊50 防禦20\n* 永不放棄的英雄。'],
        name: () => (world.genocide ? '* Undyne the Undying' : '* Undyne'),
        status1: () =>
            helmetdyne()
                ? ['<32>{#p/story}* Undyne高聳於你之上。']
                : respecc()
                    ? ['<32>{#p/story}* Undyne與你迎面相撞！']
                    : ['<32>{#p/story}* Undyne來襲！'],
        intro1: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ['<20>{*}{#p/undyne}準備迎戰吧。']
                : ['<20>{*}{#p/undyne}準備！'],
        intro2: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ["<20>{*}{#p/undyne}讓我把故事講完。"]
                : respecc()
                    ? ['<20>{*}{#p/undyne}啊！？\n我還以為你很堅強嘞！']
                    : ["<20>{*}{#p/undyne}這次別想逃脫\n我的手掌心！"],
        intro3: () =>
            respecc()
                ? ['<20>{*}{#p/undyne}不會再有第二次\n機會了！']
                : ["<20>{*}{#p/undyne}這是你最後一次\n從我這逃走！"],
        intro4: ['<20>{*}{#p/undyne}不要跑！！！'],
        intro5: ['<20>{*}{#p/undyne}給我回來，\n你這個小混蛋！！'],
        earlyChallenge: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/3}想跟我{@fill=#f00}硬碰硬{@fill=#000}，是嗎？',
                    '<20>{#e/undyne/2}成全你。'
                ]
                : respecc()
                    ? [
                        "<20>{#p/undyne}{#e/undyne/17}什麼！？\n我已經盡全力在攻擊了！",
                        '<20>{#e/undyne/17}但是...\n我... 你...',
                        "<20>{#e/undyne/17}不-不！\n我要讓你看看！",
                        "<20>{#e/undyne/1}我要讓你看看\n我所擁有的\n{@fill=#f00}全部力量{@fill=#000}！"
                    ]
                    : [
                        '<20>{#p/undyne}{#e/undyne/3}想跟我{@fill=#f00}硬碰硬{@fill=#000}，是嗎？',
                        '<20>{#e/undyne/1}那就成全你！\n呋呼呼！'
                    ],
        earlyChallengeStatus: ['<32>{#p/story}* 戰鬥局勢開始升溫。'],
        randStatus1: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne引人注目地\n  抬手指向太空。']
                : ['<32>{#p/story}* Undyne威風凜凜地\n  抬手指向太空。'],
        randStatus2: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne優雅地旋轉著她的長矛。']
                : ['<32>{#p/story}* Undyne焦急地翻弄著她的長矛。'],
        randStatus3: () => ['<32>{#p/story}* Undyne對一顆小行星使用了背摔。\n* 就因為她能做到。'],
        randStatus4: () =>
            respecc() ? ['<32>{#p/story}* Undyne滿懷激情地跳來跳去。'] : ['<32>{#p/story}* Undyne焦躁地跳來跳去。'],
        randStatus5: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne的嘴角閃過了一抹\n  真誠的笑。']
                : ['<32>{#p/story}* Undyne的嘴角閃過了一抹\n  威脅的笑。'],
        randStatus6: () =>
            respecc()
                ? ['<33>{#p/story}* Undyne滿懷敬慕地看著。']
                : ['<32>{#p/story}* Undyne用手指划過她的脖子。'],
        randStatus7: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne發出了一聲戰吼。']
                : ['<32>{#p/story}* Undyne握緊拳頭舉在胸前，\n  然後搖了搖頭。'],
        randStatus8: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne凝視著你的靈魂。']
                : ['<32>{#p/story}* Undyne巍然聳立。'],
        randStatus9: () =>
            respecc()
                ? ['<32>{#p/story}* Undyne回想起了她的朋友...\n  然後又想起了你。']
                : ['<32>{#p/story}* Undyne回想起了她的朋友\n  然後以拳搶地。'],
        randStatus10: () =>
            respecc() ? ['<32>{#p/story}* 羅非魚的味道撲面而來。'] : ['<32>{#p/story}* 壽司的味道撲面而來。'],
        papStatus1: ['<32>{#p/story}* Undyne的眼角閃爍著淚光。'],
        papStatus2: ['<32>{#p/story}* Undyne沉著臉，死死瞪著你。'],
        papStatus3: ['<32>{#p/story}* Undyne想到了她的朋友，\n  用盡全力向地猛擊。'],
        papStatus4: ["<32>{#p/story}* Undyne沒心情跟你胡鬧。"],
        papStatus5: ['<32>{#p/story}* 金槍魚沙拉的味道撲面而來。'],
        endStatus1: ["<32>{#p/story}* Undyne的眼皮不由自主地跳了起來。"],
        endStatus2: ['<32>{#p/story}* Undyne將長矛刺向地面。'],
        endStatus3: ["<32>{#p/story}* Undyne的目光左右飄動，\n  想確認這是不是個惡作劇。"],
        endStatus4: ['<32>{#p/story}* Undyne開始呼吸困難了。'],
        endStatus5: ['<32>{#p/story}* 烤魚的味道撲面而來。'],
        tutorial1: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/3}...',
                    "<20>{#e/undyne/4}怎麼？\n還想我杵在這，\n教你怎麼應戰嗎？"
                ]
                : [
                    "<20>{#p/undyne}{#e/undyne/0}只要你還是{@fill=#00c000}綠色{@fill=#000}的\n就{@fill=#f00}別想逃跑{@fill=#000}！",
                    '<20>{#e/undyne/0}除非你學會{@fill=#f00}直面危險{@fill=#000}...',
                    "<20>{#e/undyne/1}不然在我面前\n你連一秒\n也堅持不住！"
                ],
        tutorial2: [
            '<20>{#p/undyne}{#e/undyne/0}我說的{@fill=#f00}直面危險{@fill=#000}...',
            '<20>{#e/undyne/1}是讓你直面子彈！'
        ],
        tutorial3: () => [
            '<20>{#p/undyne}{#e/undyne/3}看好了。',
            '<20>{#e/undyne/3}我給了你一支長矛。',
            '<20>{#e/undyne/2}你可以用它\n來抵擋我的攻擊。',
            respecc()
                ? '<20>{#e/undyne/17}我本來就不該對你\n和其他所有人\n解釋這些的！'
                : '<20>{#e/undyne/17}我還需要解釋的\n更細嗎？'
        ],
        tutorial4: [
            '<20>{#p/undyne}{#e/undyne/6}你在搞什麼？',
            '<20>{#e/undyne/7}不就是臉朝上嗎！！！',
            "<20>{#e/undyne/5}沒那麼難！！！"
        ],
        tutorial5: () =>
            respecc()
                ? [
                    '<20>{#p/undyne}{#e/undyne/2}...',
                    '<20>{#e/undyne/2}我想要一場\n公平公正的戰鬥。',
                    "<20>{#e/undyne/3}我曾希望你能向我\n展示出你的實力。",
                    '<20>{#e/undyne/4}也許，如果你\n就這樣打敗了我...',
                    "<20>{#e/undyne/2}那確實能證明\n你有多麼強大。",
                    '<20>{#e/undyne/6}但現在呢？？？',
                    "<20>{#e/undyne/5}我不管了！",
                    "<20>{#e/undyne/5}我他媽又不是\n你家保姆！",
                    '<20>{#e/undyne/17}除非你家保姆...',
                    '<20>{#e/undyne/5}也！教！這！個！'
                ]
                : [
                    '<20>{#p/undyne}{#e/undyne/2}...',
                    '<20>{#e/undyne/2}我想要一場\n公平公正的戰鬥。',
                    '<20>{#e/undyne/3}我想給你個機會。',
                    '<20>{#e/undyne/4}也許，如果我\n就這樣打敗了你...',
                    "<20>{#e/undyne/2}那確實能證明\n怪物有多麼強大。",
                    '<20>{#e/undyne/6}但現在呢？？？',
                    "<20>{#e/undyne/5}我不管了！",
                    "<20>{#e/undyne/5}我他媽又不是\n你家保姆！",
                    '<20>{#e/undyne/17}除非你家保姆...',
                    '<20>{#e/undyne/5}也！教！這！個！'
                ],
        turnTalkA1: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? SAVE.data.n.hp < 6
                    ? [
                        '<20>{#p/undyne}{#e/undyne/33}太難了？\n切。',
                        "<20>{#p/undyne}{#e/undyne/2}你該在你仍有機會\n的時候想到這個的。"
                    ]
                    : SAVE.data.n.hp < 11
                        ? [
                            '<20>{#p/undyne}{#e/undyne/3}不怎麼好，\n但也不怎麼壞。',
                            "<20>{#p/undyne}{#e/undyne/2}但Papyrus肯定\n不會高興的。"
                        ]
                        : SAVE.data.n.hp < 16
                            ? [
                                "<20>{#p/undyne}{#e/undyne/3}所以說，你比我想像中\n還要堅強那麼一點。",
                                '<20>{#p/undyne}{#e/undyne/2}這還說得過去。'
                            ]
                            : [
                                '<20>{#p/undyne}{#e/undyne/4}真厲害...',
                                "<20>{#p/undyne}{#e/undyne/2}只不過，別指望幸運女神\n能一直眷顧你。"
                            ]
                : battler.volatile[0].vars.trolled
                    ? respecc()
                        ? [
                            '<20>{#p/undyne}{#e/undyne/1}\x00*喘氣...*\n\x00*喘氣...*',
                            '<20>{#e/undyne/1}所以說，這一切都在你的\n計畫之中，嗯？',
                            '<20>{#e/undyne/5}把我徹底惹火，\n然後你就可以\n盡全力對付我了？',
                            '<20>{#e/undyne/0}那麼。',
                            "<20>{#e/undyne/6}是時候來場\n{@fill=#f00}硬碰硬{@fill=#000}的決鬥了！",
                            '<20>{#e/undyne/1}呋呼呼呼！！'
                        ]
                        : [
                            '<20>{#p/undyne}{#e/undyne/1}\x00*喘氣...*\n\x00*喘氣...*',
                            '<20>{#e/undyne/21}還不錯。',
                            "<20>{#e/undyne/15}但我可沒時間\n繼續陪你玩兒戲。",
                            "<20>{#e/undyne/6}是時候來場\n{@fill=#f00}硬碰硬{@fill=#000}的決鬥了！",
                            '<20>{#e/undyne/1}呋呼呼呼！！'
                        ]
                    : ['<20>{#p/undyne}{#e/undyne/1}不錯嘛！\n那這個怎麼樣！？'],
        turnTalkA2: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ['<20>{#p/undyne}{#e/undyne/2}給你講個故事吧。']
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/0}好久沒碰上\n像樣的戰士了..."]
                    : ["<20>{#p/undyne}{#e/undyne/0}很多年來，\n我們夢想著能有個\n圓滿的結局..."],
        turnTalkA3: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/2}在我小的時候，\n我努力訓練，\n夢想成為一名皇家守衛...',
                    "<20>{#p/undyne}{#e/undyne/2}然而，\n事情並非一帆風順。"
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/0}不過，機會就擺在眼前！"]
                    : ['<20>{#p/undyne}{#e/undyne/0}現在，\n群星已經觸手可及！'],
        turnTalkA4: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ['<20>{#p/undyne}{#e/undyne/2}許多人反對我加入衛隊，\n包括我的家人。']
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/1}只要這一刻還在，\n我就會盡情享受！"]
                    : ["<20>{#p/undyne}{#e/undyne/1}我不會任由你將它\n從我們手中奪走！"],
        turnTalkA5: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/3}後來，\n在一次訓練事故中，\n我瞎了左眼...',
                    '<20>{#p/undyne}{#e/undyne/2}困難重重，無依無靠。'
                ]
                : ['<20>{#p/undyne}{#e/undyne/5}嘎啊啊啊！\n熱身結束！'],
        turnTalkA6a: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/11}重重困難將我擊垮，\n每一步，都異常艱難。',
                    '<20>{#e/undyne/3}我哀嚎著，多麼希望\n有人能聽到我的心聲。'
                ]
                : ["<20>{#p/undyne}{#e/undyne/20}呵...\n你挺頑強的！"],
        turnTalkA6b: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/11}重重困難將我擊垮，\n每一步，都異常艱難。',
                    '<20>{#e/undyne/3}我哀嚎著，多麼希望\n有人能聽到我的心聲。'
                ]
                : respecc()
                    ? ['<20>{#p/undyne}{#e/undyne/9}快啊！\n來打我吧！', "<20>{#e/undyne/7}別傻站在那兒！"]
                    : [
                        '<20>{#p/undyne}{#e/undyne/6}仁慈！\n哈！',
                        "<20>{#e/undyne/5}我還是不敢相信\n你居然想要饒恕我！"
                    ],
        turnTalkA7a: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/4}突然，\n一個聲音從遠處傳來。',
                    '<20>{#e/undyne/3}一個天真無邪的聲音。'
                ]
                : respecc()
                    ? ['<20>{#p/undyne}{#e/undyne/0}不是說我看扁你啦...']
                    : ['<20>{#p/undyne}{#e/undyne/0}可就算你能夠打敗我...'],
        turnTalkA7b: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/4}突然，\n一個聲音從遠處傳來。',
                    '<20>{#e/undyne/3}一個天真無邪的聲音。'
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/10}這一點都不像你！"]
                    : ['<20>{#p/undyne}{#e/undyne/3}可就算我饒恕了你...'],
        turnTalkB1: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/2}我四處求援，\n卻徒勞無功。',
                    '<20>{#e/undyne/3}突然，我聽到一個聲音\n呼喚著我的名字。'
                ]
                : respecc()
                    ? [
                        '<20>{#p/undyne}{#e/undyne/3}你知道...',
                        "<20>{#p/undyne}{#e/undyne/4}儘管我們仍未\n逃出前哨站..."
                    ]
                    : ["<20>{#p/undyne}{#e/undyne/3}老實說，\n我這是在幫你。\n就算你能打敗我..."],
        turnTalkB2: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ['<20>{#p/undyne}{#e/undyne/2}那時，Papyrus\n還只是個孩子。']
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/0}這場對決已經讓我\n身心自由了！"]
                    : ['<20>{#p/undyne}{#e/undyne/1}也從未有人類能夠\n闖過ASGORE這關！'],
        turnTalkB3: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? ['<20>{#p/undyne}{#e/undyne/3}遇到危險，大多數小孩\n都會馬上逃跑...', '<20>{#e/undyne/4}但他不會。']
                : respecc()
                    ? ['<20>{#p/undyne}{#e/undyne/4}就像Alphys給我\n看的動漫一樣...']
                    : ['<20>{#p/undyne}{#e/undyne/4}在這裡殺了你\n反而是種仁慈...'],
        turnTalkB4: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/2}他只在乎是不是\n有人正深陷危險...',
                    '<20>{#e/undyne/2}等著他-\n不，需要他出手相助。'
                ]
                : respecc()
                    ? [
                        '<20>{#p/undyne}{#e/undyne/1}不管困在這裡\n有多糟糕...',
                        "<20>{#e/undyne/0}但這不會阻止我們\n去追求熱愛！"
                    ]
                    : ['<20>{#p/undyne}{#e/undyne/6}所以別再頑強抵抗了！'],
        turnTalkB5: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    "<20>{#p/undyne}{#e/undyne/4}他的天性如此。",
                    '<20>{#p/undyne}{#e/undyne/3}故事講完了。'
                ]
                : respecc()
                    ? [
                        "<20>{#p/undyne}{#e/undyne/1}...但天啊，\n你一點都不會退縮！",
                        "<20>{#e/undyne/17}你怎麼變得\n這麼強大的！？"
                    ]
                    : ['<20>{#p/undyne}{#e/undyne/5}人類究竟是用\n什麼鬼東西\n做出來的！？'],
        turnTalkB6: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/4}即便我擁有再大的膽識，\n再多的力量...',
                    "<20>{#e/undyne/11}也無法像他那樣，\n擁有純潔無瑕的心靈。"
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/5}要是別人\n現在早就放棄了！"]
                    : ['<20>{#p/undyne}{#e/undyne/5}要是其他人\n現在早就死了！'],
        turnTalkB7a: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    "<20>{#p/undyne}{#e/undyne/2}你殺死的，\n不僅是我的學生，\n我的摯友...",
                    "<20>{#e/undyne/2}更是能對極惡行徑\n既往不咎，寬恕你\n一切過錯的高尚之人。"
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/3}話說回來，\n你有足夠的時間\n進行訓練..."]
                    : ['<20>{#p/undyne}{#e/undyne/7}你到底有沒有在\n聽我說話！？'],
        turnTalkB7b: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    "<20>{#p/undyne}{#e/undyne/2}你殺死的，\n不僅是我的學生，\n我的摯友...",
                    "<20>{#e/undyne/2}更是能對極惡行徑\n既往不咎，寬恕你\n一切過錯的高尚之人。"
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/3}哈？\n別告訴我\n你真要放棄..."]
                    : ["<20>{#p/undyne}{#e/undyne/8}饒恕我\n卵用沒有！"],
        turnTalkB8a: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    world.trueKills > 9
                        ? '<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱，\n也奪走了無數人的生命\n...'
                        : '<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱之時，\n也斬碎了僅存的仁慈。',
                    "<20>{#p/undyne}{#e/undyne/2}而我能給你的\n全部「仁慈」...",
                    '<20>{#p/undyne}{#e/undyne/1}就是讓你死得痛快點！'
                ]
                : respecc()
                    ? [
                        '<20>{#p/undyne}{#e/undyne/18}所有你交戰過\n的怪物...',
                        "<20>{#p/undyne}{#e/undyne/1}都成為了\n你力量的源泉！"
                    ]
                    : ['<20>{#p/undyne}{#e/undyne/9}快啊！'],
        turnTalkB8b: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    world.trueKills > 9
                        ? '<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱，\n也奪走了無數人的生命\n...'
                        : '<20>{#p/undyne}{#e/undyne/11}你斬碎了他的頭顱之時，\n也斬碎了僅存的仁慈。',
                    "<20>{#p/undyne}{#e/undyne/2}而我能給你的\n全部「仁慈」...",
                    '<20>{#p/undyne}{#e/undyne/1}就是讓你死得痛快點！'
                ]
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/5}快啊，\n我在給你機會！"]
                    : ['<20>{#p/undyne}{#e/undyne/1}我認真的。'],
        turnTalkC1: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    '<20>{#p/undyne}{#e/undyne/11}你知道的，\n小混蛋...',
                    "<20>{#p/undyne}{#e/undyne/2}當別人在自言自語時，\n打斷他們很不禮貌。",
                    ...(world.trueKills > 9
                        ? [
                            "<20>{#p/undyne}{#e/undyne/11}...\n你會為你\n對他...",
                            "<20>{#p/undyne}{#e/undyne/2}...還有其他怪物所做的\n付出代價。"
                        ]
                        : ["<20>{#p/undyne}{#e/undyne/2}...\n你會為你\n對他所做的\n付出代價。"])
                ]
                : [
                    '<20>{#p/undyne}{#e/undyne/17}密切關注我的攻擊，\n也許...',
                    "<20>{#p/undyne}{#e/undyne/5}...但你足夠聰明，\n知道什麼時候\n讓它們穿過！"
                ],
        turnTalkC2: () =>
            SAVE.data.n.state_starton_papyrus === 1
                ? [
                    "<20>{#p/undyne}{#e/undyne/2}Alphys告訴過我，\n人類充滿了決心...",
                    '<20>{#p/undyne}{#e/undyne/1}呵呵，你那點破決心，\n也就只能送你到這了。'
                ]
                : respecc()
                    ? [
                        '<20>{#p/undyne}{#e/undyne/1}還要繼續！？',
                        '<20>{#p/undyne}{#e/undyne/17}哈...\nAlphys告訴過我\n人類非常有決心...'
                    ]
                    : [
                        '<20>{#p/undyne}{#e/undyne/1}Alphys告訴過我\n人類非常有決心...',
                        '<20>{#p/undyne}{#e/undyne/1}我現在算是明白\n她的意思了！'
                    ],
        turnTalkC3: () =>
            SAVE.data.n.state_starton_papyrus === 1 || respecc()
                ? ['<20>{#p/undyne}{#e/undyne/1}但是，你知道嗎？', "<20>{#e/undyne/1}我也充滿了決心！"]
                : ["<20>{#p/undyne}{#e/undyne/1}但是我也\n充滿了決心！"],
        turnTalkC4: () =>
            respecc()
                ? ["<20>{#p/undyne}{#e/undyne/5}決心讓你看好\n誰才是老大！"]
                : ['<20>{#p/undyne}{#e/undyne/6}此時此地，\n幹掉你的決心！'],
        turnTalkC5: () =>
            respecc() ? ["<20>{#p/undyne}{#e/undyne/9}...誰是老大！"] : ['<20>{#p/undyne}{#e/undyne/7}...幹掉你！'],
        turnTalkC6: () =>
            respecc()
                ? ["<20>{#p/undyne}{#e/undyne/10}...誰是...\n...\n...老大！！"]
                : ['<20>{#p/undyne}{#e/undyne/9}...幹掉...\n你...'],
        turnTalkC7: ['<20>{#p/undyne}{#e/undyne/10}呼...\n呼...'],
        turnTalkC8: () =>
            respecc()
                ? ['<20>{#p/undyne}{#e/undyne/5}嘎啊啊啊！！！\n最終攻擊！！！']
                : ['<20>{#p/undyne}{#e/undyne/5}嘎啊啊啊啊！！！\n你個小屁孩，\n快給我去死啊！'],
        turnTalkC9a: ["<20>{#p/undyne}{#e/undyne/5}真礙事！"],
        turnTalkC9b: ['<20>{#p/undyne}{#e/undyne/5}你這種人\n將永不會\n被寬恕！'],
        turnTalkC10a: ['<20>{#p/undyne}{#e/undyne/6}別想打敗我！'],
        turnTalkC10b: ['<20>{#p/undyne}{#e/undyne/6}我將與你\n戰鬥到底！'],
        turnTalkD: ['<20>{#p/undyne}{#e/undyne/9}...'],
        respeccTalk1: [
            '<20>{#p/undyne}{#e/undyne/11}\x00*哈...*\n\x00*哈...*',
            '<20>{#e/undyne/3}...',
            '<20>{#e/undyne/4}好吧...',
            "<20>{#e/undyne/17}你的勇氣很強大，\n不是嗎？"
        ],
        respeccTalk2: [
            '<20>{#e/undyne/0}...呵，\n反正足以戰勝我。',
            "<20>{#e/undyne/13}但是草，\n這種勇氣\n實在令人佩服！",
            "<20>{#e/undyne/1}即使並非每個人\n都會因此喜歡你...",
            '<20>{#e/undyne/0}看到一個人類\n為榮譽而戰，\n讓我對你們的種族\n充滿希望。',
            '<20>{#e/undyne/4}...',
            "<20>{#e/undyne/3}我們不能一直戰鬥\n真是太遺憾了，\n對吧？"
        ],
        respeccTalk3: [
            '<20>{#e/undyne/1}只是...\n不管你做什麼，\n不管你與誰戰鬥\n...',
            "<20>{#e/undyne/1}都不要因此\n改變自己的意志，\n明白嗎？",
            '<20>{#e/undyne/3}...',
            '<20>{#e/undyne/4}下次再見...',
            '<20>{#e/undyne/4}戰士。'
        ],
        death1: () =>
            respecc()
                ? [
                    '<20>{#p/undyne}嘎啊...',
                    '<21>我還以為...\n你很特別...',
                    '<20>結果...\n你到底還是...\n咳... 咳...',
                    '<20>...'
                ]
                : [
                    '<20>{#p/undyne}嘎啊...',
                    '<20>我沒想到...\n你... 居然這麼強...',
                    '<20>看來...\n這裡...\n...就是我的葬身之地...',
                    '<20>...'
                ],
        death2: () =>
            helmetdyneAttack() ? ['<20>{#p/undyne}{#e/undyne/31}...'] : ['<20>{#p/undyne}{#e/undyne/31}不...'],
        death3: () =>
            helmetdyneAttack()
                ? ['<20>{#p/undyne}{#e/undyne/46}...不。', '<20>{#e/undyne/43}還沒完呢。']
                : [
                    '<20>{#p/undyne}{#e/undyne/32}不！',
                    "<20>我不能死！",
                    ...(respecc()
                        ? ['<20>你背叛了我...\n這... 太恥辱了...', "<20>我怎能不讓你吃點苦頭！"]
                        : [
                            SAVE.data.n.state_starton_papyrus === 1
                                ? '<20>{#e/undyne/36}Alphys...\nAsgore...'
                                : '<20>{#e/undyne/36}Alphys...\nAsgore...\nPapyrus...',
                            '<20>{#e/undyne/32}大家，都需要我來守護！'
                        ]),
                    '<20>{#e/undyne/32}嘎啊啊啊！！'
                ],
        death4: () =>
            helmetdyneAttack()
                ? ["<20>{#e/undyne/45}不把你殺了\n我絕不罷休。"]
                : [
                    '<20>{#p/undyne}{#e/undyne/32}人類！',
                    respecc()
                        ? '<20>{#e/undyne/36}以公平對決起誓...'
                        : "<20>{#e/undyne/36}以希望與夢想起誓...",
                    '<20>{#e/undyne/32}我定會擊敗你！'
                ],
        determination1: () =>
            helmetdyneAttack() ? [] : ["<20>{#p/undyne}{#e/undyne/32}來啊，\n你就這點能耐嗎？"],
        determination2: () => (helmetdyneAttack() ? [] : ['<20>{#p/undyne}{#e/undyne/32}...真是可悲。']),
        determination3: () =>
            helmetdyneAttack() ? [] : ["<20>{#p/undyne}{#e/undyne/32}就你那點力氣，\n還想打敗我？"],
        determination4: () =>
            helmetdyneAttack()
                ? []
                : respecc()
                    ? ["<20>{#p/undyne}{#e/undyne/34}你-你的鬥志\n跑哪去了？"]
                    : ['<20>{#p/undyne}{#e/undyne/34}當我們相信自己時，\n爆發出的力量有多強，\n你見-見識到了吧？'],
        determination5: () =>
            helmetdyneAttack() ? [] : ['<20>{#p/undyne}{#e/undyne/35}呵...\n呵呵...', '<20>{#e/undyne/34}鬧夠了沒有？'],
        determination6: () => (helmetdyneAttack() ? [] : ['<20>{#p/undyne}{#e/undyne/34}...']),
        determination7: () =>
            helmetdyneAttack() ? [] : ["<20>{#p/undyne}{#e/undyne/35}...我不能...\n...\n放棄..."],
        determination8: () => (helmetdyneAttack() ? [] : ['<20>{#p/undyne}{#e/undyne/34}...']),
        death5: () => [
            helmetdyneAttack() ? '<20>{#p/undyne}{#e/undyne/43}...' : '<20>{#p/undyne}{#e/undyne/34}...',
            '<20>{#p/undyne}{#e/undyne/47}哈...\n哈...',
            '<20>{#e/undyne/44}...\nAlphys...',
            '<20>知道為什麼\n我一直沒對你說...',
            '<20>{#e/undyne/49}因為我怕...',
            '<20>...'
        ],
        death6: () => [
            '<20>{#p/undyne}{#e/undyne/44}不...\n不！',
            '<20>{#e/undyne/34}還沒完！',
            "<20>{#e/undyne/48}我不會死！"
        ],
        death7: ['<20>{*}{#p/undyne}{#i/8}{@random=1.1/1.1}嘎啊啊啊啊！！！{^10}{%}'],
        death8a: ["<20>{*}{#p/undyne}{#i/5}{#v/1}{@random=1.1/1.1}我不會死！{^15}{%}"],
        death8b: ["<20>{*}{#p/undyne}{#i/5}{#v/2}{@random=1.1/1.1}我不會死！{^15}{%}"],
        death8c: ["<20>{*}{#p/undyne}{#i/6}{#v/3}{@random=1.1/1.1}我不會死！{^15}{%}"],
        death9: ["<20>{*}{#p/undyne}{#i/8}{#v/4}{@random=1.1/1.1}我{^10}不{^10}會{^30}{%}"],
        deterStatus1: ['<32>{#p/story}* Undyne笑著，強裝自己沒事。'],
        deterStatus2: ["<32>{#p/story}* Undyne的身體正一點一點融化。"],
        deterStatus3: ["<32>{#p/story}* Undyne的身體已經化得\n  看不出形狀了。"],
        deterStatus4: ['<32>{#p/story}* Undyne深吸了一口氣。'],
        deterStatus5: ['<32>{#p/story}* Undyne挑釁地屹立著。'],
        challengeText1: ["<32>{#p/human}* （你告訴Undyne她的攻擊\n  太弱了。）\n* （她沒理你。）"],
        challengeText2: [
            '<32>{#p/human}* （你告訴Undyne她的攻擊\n  太弱了。）',
            '<32>{#p/basic}* 子彈速度變得更快了。'
        ],
        challengeText3: [
            '<32>{#p/human}* （你告訴Undyne她的攻擊\n  太弱了。）',
            '<32>{#p/basic}* 子彈速度快得過於荒謬了。'
        ],
        challengeText4: ['<32>{#p/human}* （你告訴Undyne，\n  你想來一場真正的對決。）'],
        challengeText5: [
            '<32>{#p/human}* （你告訴Undyne她的攻擊\n  太弱了。）',
            "<32>{#p/basic}* 但Undyne已經快到\n  不能再快了。"
        ],
        challengeText7: ["<32>{#p/human}* （你告訴Undyne她的攻擊\n  太弱了。）\n* （她沒在意。）"],
        pleadText1: ["<32>{#p/human}* （你告訴Undyne你不想再\n  戰鬥了。）\n* （無事發生。）"],
        pleadText2: [
            '<32>{#p/human}* （你告訴Undyne你只是想\n  交朋友。）',
            '<32>{#p/basic}* 這讓她想起了某個人。\n* 她的攻擊變得弱了一點。'
        ],
        pleadText3: ["<32>{#p/human}* （你告訴Undyne你只是想\n  交朋友。）\n* （但她並不信任你。）"],
        pleadText4: ["<32>{#p/human}* （你告訴Undyne你不想再\n  戰鬥了。）\n* （她不禁笑了笑。）"],
        pleadText5: ["<32>{#p/human}* （你告訴Undyne你不想再\n  戰鬥了。）\n* （看起來她很是困惑。）"],
        pleadText6: ["<32>{#p/human}* （你告訴Undyne你不想再\n  戰鬥了。）\n* （她沒在意。）"],
        pleadText7a: [
            '<32>{#p/human}* （你告訴Undyne你只是想\n  交朋友。）',
            '<32>{#p/basic}* Undyne深表讚許。\n* 她的攻擊變得更強了一點。'
        ],
        pleadText7b: [
            '<32>{#p/human}* （你告訴Undyne你只是想\n  交朋友。）',
            "<32>{#p/basic}* Undyne深表讚許。\n* 但是子彈速度已經\n  快到不能再快了。"
        ],
        pleadText7c: [
            '<32>{#p/human}* （你告訴Undyne你只是想\n  交朋友。）',
            '<32>{#p/basic}* Undyne深表讚許。\n* 子彈速度已經快到\n  近乎失控了。'
        ],
        pleadText8: ["<32>{#p/human}* （你告訴Undyne你不想再\n  戰鬥了。）\n* 她冷冰冰地瞪了你一眼。"],
        genoCutscene1: ['<08>{#p/kidding}{#e/kidd/0}...', '<08>{#e/kidd/1}呃... 啊？', '<08>{|}{#e/kidd/1}怎麼- {%}'],
        genoCutscene2: ['<08>{#p/kidding}{#e/kidd/3}UNDYNE！！！', '<08>{#e/kidd/4}我...！'],
        genoCutscene3: ['<20>{#p/undyne}{#e/undyne/1}小子...？'],
        genoCutscene3x: [
            '<20>{#p/undyne}{#e/undyne/4}嘿，別擔心，小子...',
            "<20>{#e/kidd/7}我沒事。",
            '<20>{#p/undyne}現在快逃，好嗎？'
        ],
        genoCutscene4: [
            "<08>{#p/kidding}{#e/kidd/5}我控制不了\n自己...",
            '<08>{#e/kidd/6}他們... 他...',
            '<08>{#e/kidd/7}他對\n我的身體\n動了手腳...'
        ],
        genoCutscene5: ['<20>{#p/undyne}{#e/undyne/2}所以，你的眼睛...'],
        genoCutscene6: ['<08>{#p/kidding}{#e/kidd/6}我...', '<08>{#p/kidding}{#e/kidd/6}我...'],
        genoCutscene7: ['<08>{#p/kidding}{#e/kidd/7}我傷害了\n你...'],
        genoCutscene8: ["<20>{#p/undyne}{#e/undyne/3}就是點小傷而已..."],
        genoCutscene9: [
            "<20>{#e/undyne/4}這裡交給我，\n我會好好收拾這些壞蛋。",
            "<20>你不用再當\n他們的傀儡了。",
            '<20>現在快逃，好嗎？'
        ],
        genoCutscene10: ['<08>{#e/kidd/8}{#p/kidding}...'],
        genoCutscene11: ['<20>{#p/undyne}{#e/undyne/5}Alphys博士\n會照顧好你的。', '<20>{#e/undyne/6}快跑啊！'],
        genoCutscene12a: [
            '<20>{#p/undyne}{#e/undyne/7}...呵...\n「就是點小傷而已...」',
'<20>...才怪。',
            '<20>不知怎麼，\n只是那麼一下...'
        ],
        genoCutscene12b: ["<20>我就...", '<20>就...'],
        genoCutscene12c: ['<20>該...\n該死...', '<20>Papyrus...\nAsgore...\nAlphys...'],
        genoCutscene12d: ['<20>對不起...', "<20>{#e/undyne/8}讓你們失望了。"],
        genoCutscene12e: ['<20>我...', "{#e/undyne/8}我沒法..."],
        genoCutscene13: ['<20>{#p/undyne}...', '<11>{#e/undyne/12}不...'],
        genoCutscene14: [
            "<20>{*}{#p/undyne}{#e/undyne/11}我的身體...\n已經要四分五裂。{^15}{%15}",
            "<20>{*}好像隨時...\n都會化作灰燼。{^15}{%15}",
            '<20>{*}但靈魂深處...{^15}{%15}',
            "<20>{*}燃起了一股\n無法描述的感覺。{^15}{%15}",
            "<20>{*}{#e/undyne/12}那燃起的炙熱\n不允許我死去。{^15}{%15}",
            "<20>{*}{#e/undyne/11}那麼多人民...\n那麼多摯友...\n都慘死於暴行之下。{^15}{%15}",
            "<20>{*}過了我這關，\n你們將會毀滅一切...{^15}{%15}",
            "<20>{*}大家的希望，\n大家的夢想，\n頃刻間都會化為烏有。{^15}{%15}",
            "<20>{*}{#e/undyne/12}所以，我絕不會\n讓你們如願以償。{^15}{%15}",
            '<20>{*}{#e/undyne/13}此時此刻，\n我能感受到...{^15}{%15}',
            '<20>{*}這星河裡的每個人，\n大家心連心，同仇敵愾。{^15}{%15}',
            '<20>{*}因為，我們都有一個\n共同的目標：{^15}{%15}',
            '<20>{*}{#e/undyne/14}那就是戰勝你。{^15}{%15}',
            '<20>{*}{#e/undyne/13}人類，Asriel。\n...不，不管你們是誰。{^15}{%15}',
            '<20>{*}{#e/undyne/14}為了讓這星河存續下去...{^15}{%15}',
            '<20>{*}{#e/undyne/15}{@random=1.1/1.1}我，Undyne，\n會將你徹底擊垮！{^15}{%15}'
        ],
        genoCutscene14x: [
            '<20>{#e/undyne/11}不...',
            '<20>{#e/undyne/12}還沒完...！',
            '<20>{#e/undyne/13}大家，\n都需要我來守護！',
            "<20>{#e/undyne/14}我絕不能讓他們失望！"
        ],
        genoCutscene15: ["<20>{*}{#p/undyne}{#v/1}你們還得再加把勁。{%20}"],
        genoCutscene15x: ["<20>{#p/undyne}{#v/1}你們還得再加把勁！{%20}"],
        genoDeath1: [
            '<20>{#p/undyne}{#v/1}該死...',
            "<20>到頭來...\n連這樣的力量...\n也還是不夠嗎...？",
            '<20>...',
            '<20>{#e/undyne/25}呵...',
            '<20>呵呵呵...'
        ],
        genoDeath2: [
            '<20>{*}{#e/undyne/26}如果你...{^60}{%}',
            "<20>{*}如果你以為\n我會放棄希望，\n那就錯了。{^60}{%}",
            "<20>{*}{#e/undyne/27}因為...\n有朋友支援著我。{^60}{%}",
            '<20>{*}{#e/undyne/28}Alphys告訴我，\n如果我失敗了，\n就會啟用備用計畫...{^60}{%}',
            "<20>{*}{#e/undyne/29}現在，\n她已經去通知Asgore，\n吸收那6個人類靈魂。{^60}{%}"
        ],
        genoDeath3: ['<20>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}有了那種力量...{^60}{%}'],
        genoDeath4: ['<20>{*}{#p/undyne}{#v/1}{#e/undyne/30}{@random=1.1/1.1}世界...\n勢必會...\n存續下去...！{^60}{%}'],
        lowStatus1: ['<32>{#p/story}* 星光閃爍...'],
        lowStatus2: ['<32>{#p/story}* Undyne焦急地翻弄著她的長矛。'],
        lowStatus3: ['<32>{#p/story}* 星塵在你面前漂浮閃爍。'],
        lowStatus4: ['<32>{#p/story}* 蒸汽在你周圍迴旋著。'],
        lowStatus5: ['<32>{#p/story}* 有一瞬，長矛的攻勢停了下來。'],
        genoStatus1: ['<32>{#p/asriel2}* 怎麼會...'],
        genoStatus2: ['<32>{#p/asriel2}* 不...'],
        genoStatus3: ['<32>{#p/asriel2}* 經歷那麼多條時間軸，\n  她也沒...'],
        genoStatus4: ["<32>{#p/asriel2}* $(name)，光靠你自己\n  是不夠的。"],
        genoStatus5: ['<32>{#p/asriel2}* ...'],
        trueGenoStatusX: (assistValue: number) =>
            assistValue < 2
                ? ["<32>{#p/asriel2}* 看她還有什麼本事。"]
                : ['<32>{#p/asriel2}* 按計畫行事。'],
        trueGenoStatus1: ['<32>{#p/asriel2}* 別走神。'],
        trueGenoStatus2: ["<32>{#p/asriel2}* 別讓她得逞。"],
        trueGenoStatus3: ['<32>{#p/asriel2}* 繼續攻擊...'],
        trueGenoStatus4: ["<32>{#p/asriel2}* 她遲早會完蛋。"],
        trueGenoStatus5: ['<32>{#p/asriel2}* 勝利終將屬於我們。'],
        trueGenoStatusLow1: ['<32>{#p/asriel2}* 她快死了...！'],
        trueGenoStatusLow2: ['<32>{#p/asriel2}* 加把勁！'],
        asrielExplain: () => [
            ...(battler.volatile[0].vars.azzyAssist < 2
                ? ["<20>{#p/asriel2}{#f/4}$(name)，\n你的攻擊傷不到她。"]
                : [
                    "<20>{#p/asriel2}{#f/8}$(name)，你還記得\n上次發生的事情吧？",
                    "<20>{#f/4}你那麼攻擊她，\n但都無濟於事。",
                    '<20>{#f/3}趁剛才那段時間\n我好好想了想。'
                ]),
            "<20>{#f/13}雖說...\n我還不太能駕馭\n這副身體的力量。",
            '<20>{#f/16}但這些力量\n足夠幫你了。',
            "<20>{#f/3}接下來，你先進攻，\n我則會用法術找出\nUndyne盔甲的弱點。",
            "<20>{#f/4}你要瞄準它們，\n逐一突破，不能出錯。",
            '<20>{#f/3}一起加油吧...'
        ],
        neutralFinalStatus: ['<32>{#p/story}* Undyne充滿了決心。']
    },
    b_opponent_dateundyne: {
        name: '* Undyne',
        snacker: () =>
            SAVE.data.b.undyne_respecc
                ? ['<20>{#p/undyne}{#e/undyne/13}希望你能喜歡，\n呋呼呼！']
                : ['<20>{#p/undyne}{#e/undyne/12}趁你還能享受的時候\n盡情享受吧。'],
        intro: () =>
            SAVE.data.b.undyne_respecc
                ? [
                    '<20>{#p/undyne}{#f/0}...終於啊。',
                    '<20>決戰到來了。',
                    '<20>...',
                    '<20>{#e/undyne/12}針尖對麥芒，',
                    '<20>轟動星河的決戰到來了。',
                    '<20>我在此對你發出挑戰...',
                    '<20>{#e/undyne/9}以全前哨站\n怪物的榮耀起誓！！',
                    "<20>{#e/undyne/7}這是能解決\n我們之間問題\n的唯一方法！！",
                    "<20>{#e/undyne/9}拿出真本事，放馬過來！！！\n嘎啊啊啊！！！"
                ]
                : [
                    "<20>{#p/undyne}{#f/0}我被打敗了，\n我的房子也\n完了...",
                    '<20>甚至連和你\n交朋友都做不好。',
                    '<20>...',
                    "<20>{#e/undyne/12}就這樣了。",
                    "<20>我不在乎\n你是不是\n我的客人了。",
                    '<20>{#e/undyne/9}最後比一場，\n雙方都要拿出\n所有力量！！！',
                    "<20>{#e/undyne/7}這是我唯一能夠\n奪回我尊嚴的\n辦法！！！",
                    "<20>{#e/undyne/9}那就來吧！\n全力地攻上來！！！\n嘎啊啊！！！"
                ],
        status1: ['<32>{#p/story}* Undyne讓你先出招。'],
        act_check: ['<32>{#p/story}* UNDYNE - 攻擊41 防禦21\n* 真正的，動真格的最終決戰\n  終於打響了！'],
        idleTalk1: ["<20>{#p/undyne}{#e/undyne/9}讓我看看\n你的實力吧！"],
        idleTalk2: ['<20>{#p/undyne}{#e/undyne/9}快啊！'],
        idleTalk3: ["<20>{#p/undyne}{#e/undyne/9}怎麼，\n你怕了嗎？"],
        idleTalk4: ["<20>{#p/undyne}{#e/undyne/9}你在等什麼？"],
        fightTalk: (stronk: boolean) =>
            SAVE.data.b.undyne_respecc
                ? [
                    '<20>{#p/undyne}{#e/undyne/19}哎呀。',
                    '<20>{#e/undyne/19}還真有點疼。',
                    '<20>{#e/undyne/4}呵...',
                    "<20>{#e/undyne/3}我想這就是\n我低估對手的\n下場吧。",
                    "<20>{#e/undyne/0}不過，我不知道\n我為什麼\n這麼驚訝。",
                    '<20>{#e/undyne/1}因為你戰鬥的\n風格。'
                ]
                : [
                    '<20>{#p/undyne}{#e/undyne/16}啥。',
                    "<20>{#e/undyne/15}這就是你的\n全力...？",
                    ...(SAVE.data.b.oops
                        ? [
                            '<20>{#e/undyne/3}即使你使出了\n全力...',
                            stronk
                                ? "<20>{#e/undyne/33}你也只能\n讓我受點擦傷，\n哈？"
                                : "<20>{#e/undyne/33}你還是無法\n狠下心來\n傷害我，哈？"
                        ]
                        : ["<20>{#e/undyne/17}你的攻擊\n甚至都沒\n打中我！", '<20>{#e/undyne/17}...'])
                ],
        flirtTalk0: [
            '<20>{#p/undyne}{#e/undyne/12}當我讓你\n打我的時候...',
            '<20>{#e/undyne/9}我是認真的！'
        ],
        flirtTalk1: [
            '<20>{#p/undyne}{#e/undyne/6}啥玩—... 不！',
            "<20>{#e/undyne/8}如果一個人\n得到了某人的心，\n那就表示...",
            '<20>{#e/undyne/5}等等，不—\n把嘴閉上！！！'
        ],
        flirtTalk2: [
            '<20>{#p/undyne}{#e/undyne/10}你能不能別這樣！？',
            "<20>{#e/undyne/15}如果你再這樣下去，\n我就...",
            "<20>{#e/undyne/16}我就..."
        ],
        flirtTalk3: [
            '<20>{#p/undyne}{#p/undyne}{#e/undyne/18}什—...\n我...！',
            '<20>{#e/undyne/19}...',
            '<20>{#e/undyne/10}啊啊啊啊啊啊啊啊啊—\n你這個愛調情的\n小混蛋！',
            '<20>{#e/undyne/8}我有一半的\n膽量去...',
            '<20>{#e/undyne/7}去...',
            '<20>{#e/undyne/7}...'
        ],
        flirtStatus0: ['<33>{#p/story}* 在這種情況下，\n  戰鬥可能不是個壞主意。'],
        flirtStatus1: ['<33>{#p/story}* 神奇的事情正在發生。'],
        flirtStatus2: ['<32>{#p/story}* Undyne頂不住了。'],
        flirtText0: ['<32>{#p/human}* （你向Undyne調情。）'],
        flirtText1: ["<32>{#p/human}* （你告訴Undyne，\n  她已經得到了你的心。）"],
        flirtText2: ["<32>{#p/human}* （你讚美了Undyne\n  那勇敢的戰鬥精神。）\n* （她現在是你的英雄。）"],
        flirtText3: ["<32>{#p/human}* （你告訴Undyne\n  她是一個可愛淘氣的小寶貝。）"],
        cutscene1: ['<20>{#p/undyne}{#e/undyne/4}呵...\n你知道嗎？'],
        cutscene2: (fought: boolean) => [
            ...(SAVE.data.b.undyne_respecc
                ? [
                    "<20>{#e/undyne/11}我其實不想\n傷害你。",
                    '<20>{#e/undyne/11}一開始，\n想到要和你\n較量，我很\n興奮...'
                ]
                : [
                    "<20>{#e/undyne/11}我其實也不想\n傷害你。",
                    '<20>{#e/undyne/11}一開始，\n我討厭你那\n矯情的演戲，\n不過...'
                ]),
            ...(fought
                ? SAVE.data.b.undyne_respecc
                    ? ['<20>{#e/undyne/3}但看到你現在\n跟我相處的\n方式，那...']
                    : SAVE.data.b.oops
                        ? ['<20>{#e/undyne/3}你剛才打我的\n那種方式，\n那...']
                        : ['<20>{#e/undyne/3}你剛才沒打中\n我的那種方式，\n它...']
                : SAVE.data.b.undyne_respecc
                    ? ['<20>{#e/undyne/3}但看到你現在\n對我的這種\n方式，那...']
                    : ['<20>{#e/undyne/3}你剛才對我的\n那種方式，\n那...']),
            '<20>{#e/undyne/4}讓我想起了一個\n以前跟我訓練的\n傢伙。',
            ...(SAVE.data.b.undyne_respecc
                ? [
                    '<20>{#e/undyne/11}...你可能\n不像他那樣是個\n軟弱的廢柴。',
                    '<20>{#e/undyne/11}但你們有一個\n共同點...',
                    '<20>{#e/undyne/1}就是對\n戰鬥的意義的\n尊重。'
                ]
                : [
                    "<20>{#e/undyne/11}現在我知道了\n你不只是個\n軟弱的廢柴。",
                    "<20>{#e/undyne/13}你雖然是個\n軟弱的廢柴，\n但是心胸\n寬廣！",
                    '<20>{#e/undyne/4}跟他一樣...'
                ]),
            '<20>{#e/undyne/3}...',
            '<20>{#e/undyne/3}聽好了，人類。',
            '<20>{#f/undyne/0}看來你和\nAsgore\n命中注定\n難逃一戰。',
            SAVE.data.b.undyne_respecc ? '<20>{#e/undyne/3}不像你...' : '<20>{#e/undyne/3}以我對\n他的了解...',
            "<20>{#e/undyne/4}他大概\n並不想和你\n戰鬥。",
            ...(SAVE.data.b.undyne_respecc
                ? [
                    '<20>{#e/undyne/0}如果可以，\n跟他聊聊。',
                    '<20>{#e/undyne/0}先告訴他你\n想要幹什麼。',
                    '<20>{#e/undyne/3}我知道這\n對你來說可能\n有點奇怪，\n但是...',
                    "<20>{#e/undyne/4}相信你肯定\n能說服他讓你\n回家的。",
                    '<20>{#e/undyne/0}至於我們的\n自由？',
                    '<20>{#e/undyne/1}唉。',
                    '<20>{#e/undyne/3}如果有其他\n不受尊敬的人類\n墜落下來...',
                    "<20>{#e/undyne/3}我再奪取\n他的靈魂就\n好了。"
                ]
                : [
                    '<20>{#f/undyne/0}跟他聊聊。',
                    "<20>{#f/undyne/1}相信你肯定\n能說服他讓你\n回家的。",
                    '<20>{#e/undyne/3}不管多久，\n總會有壞人類\n墜落下來。',
                    "<20>{#e/undyne/3}到時候我再\n奪取他的\n靈魂。"
                ]),
            '<20>{#f/undyne/1}有道理，\n對吧？\n呋呼呼。',
            '<20>{#f/undyne/0}喔對了，\n如果你真的\n傷害了Asgore...',
            "<20>{#e/undyne/11}我會親自帶上\n那些人類靈魂...\n穿過力場...",
            ...(SAVE.data.b.undyne_respecc
                ? ['<20>{#e/undyne/8}跟你來一場\n真正的戰鬥！', "<20>{#e/undyne/13}這就是戰士\n該做的，\n對吧？"]
                : [
                    '<20>{#e/undyne/8}把你揍得\n萬劫不復！',
                    "<20>{#e/undyne/13}這就是\n朋友嘛，對吧？"
                ]),
            '<20>{#e/undyne/13}呋呼呼！',
            "<20>{#e/undyne/13}現在，咱們趕緊\n從這個著火的\n屋子裡出去！"
        ]
    },

    i_artifact: {
        battle: {
            description: '據說這個吊墜是Erogot\n本人佩戴過的。',
            name: '神器'
        },
        drop: () => [
            '<32>{#p/human}* （你把神器扔掉了。）',
            ...(!SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

                ? SAVE.data.b.s_state_papsink
                    ? ['<32>{#p/basic}* 狗子跳得更起勁了！']
                    : ["<32>{#p/basic}* ...不知為何，\n  狗子不再嘆氣了，"]
                : [])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （上面刻有前世界領袖的籤名。）']
                : ['<32>{#p/basic}* 據說這個吊墜\n  是Erogot本人佩戴過的。'],
        name: '神器',
        use: () => [
            '<32>{#p/human}* （你使用了神器。）',
            ...((battler.active && battler.alive[0].opponent.metadata.reactArtifact) ||
                (game.room === 'f_truth' && // NO-TRANSLATE

                    SAVE.data.n.epiphany < 1 &&
                    !SAVE.data.b.svr &&
                    !world.runaway)
                ? []
                : !SAVE.data.b.svr && game.room === 's_secret' && SAVE.data.n.state_starton_trashprogress < 2 // NO-TRANSLATE

                    ? SAVE.data.b.s_state_papsink
                        ? ["<32>{#p/basic}* ...不知為何，\n  狗子跳得沒那麼起勁了。"]
                        : ['<32>{#p/basic}* 狗子的嘆氣更響了！']
                    : ['<32>{#p/human}* （什麼都沒發生。）'])
        ]
    },
    i_epiphany: {
        battle: {
            description: '意志薄弱之人\n將成為你的傀儡。',
            name: '頓悟'
        },
        drop: ['<32>{#p/human}* （你奮力把捲軸《頓悟》丟了出去。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （一部幾個世紀前的巨著，\n  最初由前世界領袖使用。）']
                : [
                    '<33>{#p/basic}* 意志薄弱之人\n  將成為你的傀儡。\n* 僅在戰鬥中有效。'
                ],
        name: '頓悟',
        use: () =>
            battler.active
                ? []
                : SAVE.data.b.ufokinwotm8
                    ? [
                        '<32>{#p/human}* （你展開了捲軸《頓悟》，\n  試圖讓自己感受到擁抱。）',
                        '<32>{#p/human}* （無濟於事。）'
                    ]
                    : SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* （你仔細閱讀著\n  捲軸上的古老咒文。）',
                            '<33>* （文字似乎會自動翻譯。）'
                        ]
                        : ['<32>{#p/human}* （你展開了捲軸《頓悟》。）', '<32>{#p/human}* （無事發生。）']
    },
    i_astrofood: {
        battle: {
            description: '牙口不好的別吃。',
            name: '甘草糖'
        },
        drop: ['<32>{#p/human}* （你把甘草糖扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （24 HP。）']
                : ['<32>{#p/basic}* 「甘草糖」 回復24 HP\n* 牙口不好的別吃。'],
        name: '甘草糖',
        use: ['<32>{#p/human}* （你咬了甘草糖。）']
    },
    i_sap: {
        battle: {
            description: "源自怪物故園裡的一棵樹。",
            name: '樹膠'
        },
        drop: ['<32>{#p/human}* （你把樹膠扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （35 HP。）']
                : ['<32>{#p/basic}* 「樹膠」 回復35 HP\n* 源自怪物故園裡的一棵樹。'],
        name: '樹膠',
        use: ['<32>{#p/human}* （你嚼了一塊樹膠。）']
    },
    i_goggles: {
        battle: {
            description: '超越現實！\n能為你提供更長的喘息時間。',
            name: 'AR眼鏡'
        },
        drop: ['<32>{#p/human}* （你把AR眼鏡扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （6防禦。）']
                : ['<32>{#p/basic}* 「AR眼鏡」 （6防禦）\n* 超越現實！\n  能為你提供更長的喘息時間。'],
        name: 'AR眼鏡',
        use: ['<32>{#p/human}* （你戴上了AR眼鏡。）']
    },
    i_goggles_x: {
        battle: {
            description: '能為你提供稍長的喘息時間。',
            name: 'AR眼鏡？'
        },
        drop: ['<32>{#p/human}* （你把AR眼鏡扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （4防禦。）']
                : ['<32>{#p/basic}* 「AR眼鏡？」 （4防禦）\n* 超越現實！\n  能為你提供稍長的喘息時間。'],
        name: 'AR眼鏡？',
        use: ['<32>{#p/human}* （你戴上了AR眼鏡。）']
    },
    i_padd: {
        battle: {
            description: '一個電子記事本。\n能為你提供更長的喘息時間。',
            name: '平板電腦'
        },
        drop: ['<32>{#p/human}* （你把平板電腦扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （2攻擊。）']
                : ['<32>{#p/basic}* 「平板電腦」 （2攻擊）\n* 一個電子記事本。\n* 能為你提供更長的喘息時間。'],
        name: '平板電腦',
        use: ['<32>{#p/human}* （你打開了平板電腦。）']
    },
    i_padd_x: {
        battle: {
            description: '能為你提供稍長的喘息時間。',
            name: '平板電腦？'
        },
        drop: ['<32>{#p/human}* （你把平板電腦扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （0攻擊。）']
                : ['<32>{#p/basic}* 「平板電腦」 （0攻擊）\n* 只能讓你多喘口氣。'],
        name: '平板電腦？',
        use: ['<32>{#p/human}* （你打開了平板電腦。）']
    },
    i_punchcard: {
        battle: {
            description: '風景如畫...',
            name: '明信片'
        },
        drop: ['<32>{#p/human}* （你把明信片扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （一張普通的紙，沒啥特點。）']
                : ['<32>{#p/basic}* 風景如畫...'],
        name: '明信片',
        use: () =>
            world.meanie
                ? [
                    '<32>{#p/human}* （你撕碎了明信片。）',
                    battler.active
                        ? `<32>{#p/story}* 你的攻擊力提升了${2 + battler.at_bonus}點！`
                        : '<32>{#p/human}* （無事發生。）'
                ]
                : battler.active
                    ? ['<32>{#p/human}* （你在腦海裡幻想著\n  明信片上面的美景。）\n* （什麼都沒發生。）']
                    : []
    },
    i_quiche: {
        battle: {
            description: '甜蜜的零食背後，\n是一份甜蜜的責任。',
            name: '芝士蛋糕'
        },
        drop: () => [
            '<32>{#p/human}* （你把芝士蛋糕扔掉了。）',
            ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
                ? []
                : ['<32>{#p/basic}* 短暫獲得主人後，\n  它又被遺棄了。']),
            ...(!battler.active &&
                (instance('main', 'sentryskeleton') !== void 0 || // NO-TRANSLATE

                    (fetchCharacters()
                        .find(c => c.key === 'sans') // NO-TRANSLATE

                        ?.position.extentOf(player) ?? 240) < 240)
                ? [
                    "<25>{#p/sans}{#f/3}* ...哎呀。\n* 真是遺憾。",
                    "<25>{#p/sans}{#f/2}* 我還希望有人能替我\n  照看它呢。"
                ]
                : [])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （45 HP。）']
                : ['<32>{#p/basic}* 「芝士蛋糕」 回復45 HP\n* 甜蜜的零食背後，\n  是一份甜蜜的責任。'],
        name: '芝士蛋糕',
        use: () => [
            '<32>{#p/human}* （你吃掉了芝士蛋糕。）',
            ...(!battler.active &&
                (instance('main', 'sentryskeleton') !== void 0 || // NO-TRANSLATE

                    (fetchCharacters()
                        .find(c => c.key === 'sans') // NO-TRANSLATE

                        ?.position.extentOf(player) ?? 240) < 240)
                ? [
                    '<25>{#p/sans}{#f/0}* ...喔？\n* 你真把它吃掉了？',
                    '<25>{#p/sans}{#f/2}* 沒想到居然有人會\n  認可我的廚藝。'
                ]
                : [])
        ]
    },
    i_crisp: {
        battle: {
            description: '一包來自星河彼端的洋芋片。',
            name: '洋芋片'
        },
        drop: ['<32>{#p/human}* （你把太空洋芋片扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （18 HP。）']
                : ['<32>{#p/basic}* 「太空洋芋片」 回復18 HP\n* 一包來自星河彼端的洋芋片。'],
        name: '太空洋芋片',
        use: ['<32>{#p/human}* （你吃掉了太空洋芋片。）']
    },
    i_rations: {
        battle: {
            description: '皇家出品，救急精品。',
            name: '口糧'
        },
        drop: ['<32>{#p/human}* （你把口糧扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （30 HP。）']
                : ['<32>{#p/basic}* 「口糧」 回復30 HP\n* 皇家出品，救急精品。'],
        name: '口糧',
        use: ['<32>{#p/human}* （你吃掉了口糧。）']
    },
    i_tea: {
        battle: {
            description: '讓你在戰鬥中移動得更快。',
            name: '星雲茶'
        },
        drop: ['<32>{#p/human}* （你把星雲茶扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （15 HP。）']
                : [
                    '<33>{#p/basic}* 「星雲茶」 回復15 HP\n* 讓你在戰鬥中移動得更快。\n* 僅在戰鬥中有效。'
                ],
        name: '星雲茶',
        use: () => [
            '<32>{#p/human}* （你將星雲茶一飲而盡。）',
            battler.active ? '<32>{#p/story}* 你的移速提升了1點！' : '<32>{#p/human}* （無事發生。）'
        ]
    },
    i_tzn: {
        battle: {
            description: '很像地球上的豆腐，\n只是更加空靈。',
            name: '太空豆腐'
        },
        drop: ['<32>{#p/human}* （你把太空豆腐扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （17 HP。）']
                : ['<32>{#p/basic}* 「太空豆腐」 回復17 HP\n* 很像地球上的豆腐，\n  只是更加空靈。'],
        name: '太空豆腐',
        use: () => [
            '<32>{#p/human}* （你吞下了太空豆腐。）',
            ...(world.meanie
                ? [
                    '<32>* （那味道讓你有種特別的感覺...）',
                    battler.active
                        ? `<32>{#p/story}* 你的攻擊力提升了${4 + battler.at_bonus}點！`
                        : '<32>{#p/human}* （無事發生。）'
                ]
                : [])
        ]
    },
    i_flakes: {
        battle: {
            description: '終於，一頓像樣的早餐。',
            name: 'Temmie薄片'
        },
        drop: ['<32>{#p/human}* （你扔掉了Temmie薄片。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （2 HP。）']
                : ['<32>{#p/basic}* 「提米薄片」回復2 HP\n* 終於，一頓像樣的早餐。'],
        name: 'Temmie薄片',
        use: ['<32>{#p/human}* （你吃掉了Temmie薄片。）']
    },
    i_temyarmor: {
        battle: {
            description: '大學教育下能做出來的東西！',
            name: 'Temmie盔甲'
        },
        drop: ['<32>{#p/human}* （你把Temmie盔甲扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （10攻擊，20防禦。）']
                : [
                    '<32>{#p/basic}* 「Temmie盔甲」（10攻擊，20防禦）\n* 大學教育下能做出來的東西！',
                    '<32>* 能為你提供大量的喘息時間...',
                    '<32>* 每回合受傷後回復大量HP...',
                    "<32>* 受到彈幕攻擊時，\n  一定概率轉變為回血效果...",
                    '<32>* 顯著延長攻擊瞄準時間...',
                    '<32>* 它有一切其他物品的功效，\n  並更加強大。'
                ],
        name: 'Temmie盔甲',
        use: ['<32>{#p/human}* （你穿上了Temmie盔甲。）']
    },
    i_boots: {
        battle: {
            description: '靈活但輕浮，\n想取代飛行器，有點懸。',
            name: '懸浮靴'
        },
        drop: ['<32>{#p/human}* （你把懸浮靴扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （7攻擊。）']
                : ['<32>{#p/basic}* 「懸浮靴」 （7攻擊）\n* 靈活但輕浮，\n  想取代飛行器，有點懸。'],
        name: '懸浮靴',
        use: ['<32>{#p/human}* （你穿上了懸浮靴。）']
    },
    i_flight_suit: {
        battle: {
            description: '膽小鬼別穿。',
            name: '飛行服'
        },
        drop: ['<32>{#p/human}* （你把飛行服扔掉了。）'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （10防禦。）']
                : ['<32>{#p/basic}* 「飛行服」 （10防禦）\n* 膽小鬼別穿。'],
        name: '飛行服',
        use: ['<32>{#p/human}* （你穿上了飛行服。）']
    },
    i_snack: {
        battle: {
            description: "...Undyne的獨家秘方？",
            name: '迷之零食'
        },
        drop: () => [
            '<32>{#p/human}* （你把迷之零食扔掉了。）',
            ...(game.room === 'f_kitchen' // NO-TRANSLATE

                ? ((SAVE.data.b.drop_snack = true),
                    ['<25>{#p/undyne}{#f/8}* 呋呼呼呼！\n* 把零食扔到\n  又冷又硬的地板上！'])
                : [])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* （15 HP。）']
                : ['<32>{#p/basic}* 「迷之零食」 回復15 HP\n* ...Undyne的獨家秘方？'],
        name: '迷之零食',
        use: () => [
            '<32>{#p/human}* （你吃掉了迷之零食。）',
            ...(game.room === 'f_kitchen' // NO-TRANSLATE

                ? [
                    SAVE.data.b.undyne_respecc
                        ? '<25>{#p/undyne}{#f/1}* 希望你喜歡！'
                        : '<25>{#p/undyne}{#f/14}* 希望你喜歡！'
                ]
                : SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
                    ? []
                    : ['<32>{#p/basic}* 挺脆。'])
        ]
    },

    n_shop_tem: {
        exit: ['<32>{#p/tem}{#k/0}* 掰吼！！'],
        item: (armorprice: number) =>
            SAVE.data.n.plot === 72
                ? [
                    '0G - 免費薄片！！',
                    '0G - 免費薄片！！',
                    '0G - 免費薄片！！',
                    SAVE.data.b.item_temyarmor || temgone()
                        ? '§fill=#808080§---- 售罄 ----'
                        : SAVE.data.b.colleg
                            ? `${armorprice}G - temy盔甲！！！`
                            : '1000G - 供tem上大鞋',
                    '離開'
                ]
                : temgone()
                    ? [
                        '0G - tem薄片',
                        '0G - tem薄片（促銷，）',
                        '0G - tem薄片（粉貴）',
                        '§fill=#808080§---- 售罄 ----',
                        '離開'
                    ]
                    : [
                        '4G - tem薄片',
                        '2G - tem薄片（促銷，）',
                        '20G - tem薄片（粉貴）',
                        SAVE.data.b.item_temyarmor
                            ? '§fill=#808080§---- 售罄 ----'
                            : SAVE.data.b.colleg
                                ? `${armorprice}G - temy盔甲！！！`
                                : '1000G - 供tem上大鞋',
                        '離開'
                    ],
        itemInfo: () =>
            SAVE.data.n.plot === 72
                ? [
                    '回復2 HP\ntem的\n食物\n免費！！',
                    '回復2 HP\ntem的\n食物\n免費！！',
                    '回復2 HP\ntem的\n食物\n免費！！',
                    SAVE.data.b.colleg ? '防具：20防禦\n讓戰鬥\n炒雞\n容易！！！' : '大鞋\ntem追球\n高等\n教育'
                ]
                : [
                    '回復2 HP\ntem的\n食物',
                    '回復2 HP\ntem的\n食物\n促銷！！',
                    '回復2 HP\ntem的\n食物\n（粉貴）',
                    SAVE.data.b.colleg ? '防具：20防禦\n讓戰鬥\n炒雞\n容易！！！' : '大鞋\ntem追球\n高等\n教育'
                ],
        itemPrompt: '<09>{#p/tem}{#k/0}你吼！\n歡銀光臨...\nTEM商店！',
        itemPurchase: [
            '<09>{#p/tem}{#k/6}謝謝惠顧！',
            '<09>{#p/tem}{#k/0}ㄈㄉㄙ\nㄏㄈㄍ',
            '<09>{#p/tem}{#k/2}你米有\n足夠噠\n錢錢，',
            "<10>{#p/human}（你帶的\n東西\n太多了。）"
        ],
        itemPurchasePrompt: (free: boolean) => (free ? '現在可以\n「自由」地\n買它了！' : temgone() ? '偷走嗎？' : '花$(x)G\n買它嗎？'),
        itemSellPrompt: '出$(x)G\n賣掉它嗎？',
        itemUnavailable: () => (temgone() ? '<09>{#p/basic}空無一物。' : '<09>{#p/tem}{#k/2}米有\n東西...'),
        itemRestricted: '<09>{#p/tem}{#k/2}這個\n我不收...',
        menu: () =>
            temgone() ? ['拿取', '偷竊', '閱讀', '離開'] : ['購買', world.meanie ? '偷竊' : '出售', '交談', '離開'],
        menuPrompt1: '<23>{#p/tem}{#k/0}* 你吼！\n* 歡銀光臨...\n* TEM商店！！！',
        menuPrompt2: '<23>{#p/basic}* ...但是大家都逃走了。',
        sell1: ['<30>{#p/tem}{#k/2}* 不要哇！！！\n* 我滴錢錢，，，', '<30>{#p/tem}{#k/4}* 不許偷！！！'],
        sell2: ['<30>{#p/tem}{#k/3}* 沒門。'],
        steal1: ['<30>{#p/human}* （你從櫃檯後面拿走了32767G。）'],
        steal2: ['<30>{#p/basic}* 空無一物。'],
        note: ['<32>{#p/human}* （沒有字條。）'],
        talk: () => [
            SAVE.data.n.plot === 72 ? '好訊息' : '打招呼',
            SAVE.data.n.plot === 72 ? '未來發展' : SAVE.data.b.colleg ? 'Temmie盔甲' : '來個自我介紹',
            SAVE.data.n.plot === 72 ? 'Temmie的秘密' : 'Temmie的歷史',
            '關於商店',
            '離開'
        ],
        talkPrompt: '<09>{#p/tem}{#k/0}你吼！！！\n我素temmie',
        talkText: [
            () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#k/0}* 嚎吖！', '<32>{#p/tem}{#k/0}* tem要去新四界辣！']
                    : ['<32>{#p/tem}{#k/0}* 你吼！！！', "<32>* 我素temmie"],
            () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#k/0}* 嚎吖！', '<32>{#p/tem}{#k/0}* tem要去新四界辣！']
                    : SAVE.data.b.colleg
                        ? [
                            '<32>{#k/1}* tem盔甲太太太吼了！\n* 任何戰鬥都變噠！\n  炒雞容易勝利！！！',
                            '<32>{#k/4}* 但，哼嗯嗯嗯，tem想...\n* 用了盔甲，\n  尼的戰鬥就目有挑戰了，',
                            '<32>{#k/3}* tem...\n* 有一個姐決番案。',
                            '<32>{#k/6}* tem會給尼...\n* 一份{@fill=#ff0}獎鞋金{@fill=#fff}！',
                            '<32>{#k/3}* 如果尼{@fill=#ff0}輸了好多戰鬥{@fill=#fff}，\n  tem就費{@fill=#ff0}給尼打折{@fill=#fff}！',
                            ...(armorprice() <= 1000
                                ? [
                                    '<32>{#k/1}* 尼看！其實...\n* 價哥已經，變低啦！！！\n* 哇哇！！！！',
                                    '<32>{#k/6}* 太tem祝賀尼啦！！！'
                                ]
                                : [
                                    '<32>{#k/3}* 所以如果陷入了吼難的戰逗中\n  覺得好灰森啊，\n  那就買下TEM盔甲吧！\n* 它就四尼的救命稻草！',
                                    '<32>{#k/5}* 但tem盔甲太吼了，\n* 答應窩一定四真的需要它\n  才買吼，'
                                ])
                        ]
                        : ['<32>{#p/tem}{#k/0}* 你吼！！！', "<32>* 我素temmie"],
            () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/tem}{#k/0}* 辣個炒雞有名噠雕像後面\n  有個特蘇按鈕，',
                        '<32>{#p/tem}{#k/0}* 按了按鈕吖...\n* 就粗來一個謎提！',
                        SAVE.data.b.colleg
                            ? '<32>{#p/tem}{#k/2}* 上了大鞋，\n  tem還是不知道\n  辣個怎麼弄，，，'
                            : '<32>{#p/tem}{#k/0}* tem不知道辣個怎麼弄，，，',
                        '<32>{#p/tem}{#k/1}* 但縮不定，\n  銀類能解開呢！！\n* 嚎吖！！'
                    ]
                    : SAVE.data.b.colleg
                        ? [
                            "<32>{#p/tem}{#k/0}* 嚎吖！\n* tem獲得惹提米鞋的鞋位！\n* tem可以把全不的森遠歷史\n  都告訴尼啦！！！"
                        ]
                        : ['<32>{#p/tem}{#k/0}* 我們tem\n  有著粉深遠的歷史！！！'],
            () =>
                SAVE.data.n.plot === 72
                    ? ['<32>{#p/tem}{#k/0}* 嚎吖！！！\n* TEM桑店要關門啦！！！']
                    : ['<32>{#p/tem}{#k/0}* 嚎吖！！！\n* 去TEM商店吧！！！']
        ],
        colleg1: [
            '<32>{#p/tem}{#k/1}* 哇嗷！！',
            '<32>{#k/2}* 介麼多錢錢...\n* tem尊的可以收下麼...',
            '<32>{#k/6}* 好噠！！！！\n* tem要去上大鞋\n  讓尼為窩感到驕傲！！！'
        ],
        colleg2: [
            '<32>{#p/tem}* tem大鞋畢業了，',
            '<32>{#k/0}* tem學會啦好多東東，\n* 學會賣新道具辣！\n* 嚎吖！！！'
        ],
        sellExit: '離開',
        sellValue: '$(x)G',
        sellStory1: () => [
            '<32>{#p/tem}{#k/1}* 哇嗷！！',
            '<32>{#k/2}* 尼帶著... $(x)！！！',
            SAVE.data.b.colleg
                ? '<32>{#k/4}* 哼嗯嗯嗯....\n* 我炒雞想要辣個$(x)...\n* 但我還要攢研究僧鞋費，'
                : '<32>{#k/4}* 哼嗯嗯嗯....\n* 我炒雞想要辣個$(x)...\n* 但我還要攢大鞋鞋費，',
            '<32>{#k/5}* 哼嗯嗯嗯嗯....！！！\n* tem一直都想要個$(x)...！'
        ],
        sellStory2: ['<32>{#p/tem}{#k/2}* 但.. 但是...', '<32>{#k/4}* 卟！！！！！！！！！！！！'],
        sellStory3: () =>
            SAVE.data.b.colleg
                ? [
                    "<32>{#p/tem}{#k/3}* 跟我開玩笑是吧？\n* 敢笑話我是吧！\n* 哈哈，真有意思。\n* 看清楚，我可是高材生。"
                ]
                : ["<32>{#p/tem}{#k/3}* 你會後悔的。"],
        zeroPrompt: '<09>{#p/basic}...'
    },
    n_shop_tortoise: {
        exit: () =>
            world.runaway
                ? []
                : world.genocide || world.killed0 || startonATE() || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                    ? ['<32>{#p/basic}{#k/1}* 可算走了。']
                    : ['<32>{#p/basic}{#k/0}* 在外頭小心點，孩子！'],
        item: () =>
            world.runaway
                ? ['0G - 平板電腦？', '0G - AR眼鏡？', '0G - 星雲茶', '0G - 樹膠', '離開']
                : world.genocide || world.killed0 || startonATE() || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                    ? ['45G - 平板電腦？', '45G - AR眼鏡？', '16G - 星雲茶', '25G - 樹膠', '離開']
                    : SAVE.data.n.plot === 72
                        ? [
                            SAVE.data.b.item_padd ? '25G - 平板電腦？' : '35G - 平板電腦',
                            SAVE.data.b.item_goggles ? '25G - AR眼鏡？' : '35G - AR眼鏡',
                            '5G - 星雲茶',
                            '5G - 樹膠',
                            '離開'
                        ]
                        : [
                            SAVE.data.b.item_padd ? '45G - 平板電腦？' : '55G - 平板電腦',
                            SAVE.data.b.item_goggles ? '45G - AR眼鏡？' : '55G - AR眼鏡',
                            '16G - 星雲茶',
                            '25G - 樹膠',
                            '離開'
                        ],
        itemInfo: () => [
            SAVE.data.b.item_padd ||
                world.genocide ||
                world.killed0 ||
                startonATE() ||
                SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                ? '武器：0攻擊\n(當前攻擊$(x))\n只能讓你\n多喘口氣。'
                : '武器：2攻擊\n(當前攻擊$(x))\n提供更長的\n喘息時間。',
            SAVE.data.b.item_goggles ||
                world.genocide ||
                world.killed0 ||
                startonATE() ||
                SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                ? '防具：4防禦\n(當前防禦$(x))\n只能讓你\n多喘口氣。'
                : '防具：6防禦\n(當前防禦$(x))\n提供更長的\n喘息時間。',
            '回復15 HP\n能在戰鬥中\n移動得更快。',
            '回復35 HP\n源自\n真正的樹。'
        ],
        itemPrompt: () =>
            world.genocide || world.killed0 || startonATE() || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                ? "<09>{#p/basic}{#k/3}別指望\n我打折。"
                : "<09>{#p/basic}{#k/4}想買點\n啥呢？",
        itemPurchase: () =>
            world.genocide || world.killed0 || startonATE() || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                ? [
                    '<09>{#p/basic}{#k/1}這就結了。',
                    '<09>{#p/basic}{#k/1}...',
                    "<09>{#p/basic}{#k/3}咋了？\n這點錢\n都付不起？",
                    "<10>{#p/human}（你帶的\n東西\n太多了。）"
                ]
                : [
                    '<09>{#p/basic}{#k/0}謝謝惠顧！\n哇哈哈。',
                    '<09>{#p/basic}{#k/2}想好了\n再買喔。',
                    "<09>{#p/basic}{#k/4}你的錢\n還不太夠。",
                    "<10>{#p/human}（你帶的\n東西\n太多了。）"
                ],
        itemPurchasePrompt: () => (world.runaway ? '偷走嗎？' : '花$(x)G\n買它嗎？'),
        menu: () =>
            world.runaway ? ['拿取', '偷竊', '閱讀', '離開'] : ['購買', world.meanie ? '偷竊' : '出售', '交談', '離開'],
        menuPrompt1: () =>
            SAVE.data.n.plot === 72
                ? '<23>{#p/basic}{#k/0}* 哇哈哈！\n* 我果然沒看錯你！'
                : "<23>{#p/basic}{#k/0}* 瞧一瞧，看一看！\n* 我這裡有好多\n  物美價廉的廢品\n  正在大甩賣！",
        menuPrompt2: () =>
            SAVE.data.n.plot === 72 ? '<23>{#p/basic}{#k/0}* 哇哈哈。' : "<23>{#p/basic}{#k/0}* 別見外喔。",
        menuPrompt3: () =>
            world.genocide
                ? "<23>{#p/basic}{#k/3}* 你們幾個還想去哪？\n* 等等，當我沒問。\n  你們去哪關我什麼事呢？"
                : '<24>{#p/basic}{#k/2}* 哇哈哈...\n* 您來啦。\n* 好一個大瘟神啊！',
        menuPrompt4: '<23>{#p/basic}* ...但是大家都逃走了。',
        note: ['<32>{#p/human}* （但沒人給你留字條。）'],
        sell1: () =>
            world.runaway
                ? ['<30>{#p/human}* （你從櫃檯後面拿走了1394G。）']
                : world.genocide
                    ? [
                        '<30>{#p/basic}{#k/4}* 哇哈哈...',
                        '<30>{#k/3}* 呵，先是把別人靈魂據為己有，\n  現在又想耍同樣的手段\n  把我東西偷走？',
                        "<30>{#k/4}* 聽我句勸，\n  最好別得寸進尺。"
                    ]
                    : world.meanie
                        ? [
                            "<30>{#p/basic}{#k/2}* 哎呀，孩子。\n* 你知道這些東西\n  是要花錢的吧？",
                            "<30>{#k/3}* 也許在你看來，這些就是破爛。\n* 可在我心中，它們都是寶貝！"
                        ]
                        : [
                            "<30>{#p/basic}{#k/2}* 哈！\n* 我是賣廢品的，\n  不是收廢品的！",
                            "<30>{#k/3}* 不過，如果你想賣點東西，\n  我有個好主意：\n  去Temmie商店那裡看看吧。",
                            '<30>{#k/0}* 在哪呢...',
                            '<30>{#k/4}* ...',
                            "<30>{#k/0}* 想不起來了。"
                        ],
        sell2: () =>
            world.runaway
                ? ['<30>{#p/basic}* 空無一物。']
                : world.genocide || world.meanie
                    ? ["<30>{#p/basic}{#k/1}* 就算把刀架我脖子上，\n  我也不會這些寶貝交給你。"]
                    : ["<30>{#p/basic}{#k/0}* 我最後說一次，\n  我不是收破爛的！"],
        talk: () =>
            SAVE.data.n.plot === 72
                ? [
                    'Asgore',
                    '新家園',
                    'Toriel',
                    SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                        ? '§fill=#ff0§握手'
                        : '我是英雄嗎',
                    '離開'
                ]
                : world.genocide
                    ? ['Asriel', '（放狠話）', '（揍他）', 'Undyne', '離開']
                    : world.killed0 || startonATE()
                        ? ['你的下場', '（放狠話）', '（揍他）', '誰是英雄', '離開']
                        : [
                            48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                                ? '來個自我介紹'
                                : ['來個自我介紹', '§fill=#ff0§那場戰爭（新）', '§fill=#ff0§退休生活（新）', '退休生活'][
                                Math.min(SAVE.data.n.shop_gerson, 3)
                                ],
                            ['故園生活', '§fill=#ff0§你的家人（新）', '§fill=#ff0§Erogot（新）', 'Erogot'][
                            Math.min(SAVE.data.n.shop_homeworld, 3)
                            ],
                            '鑄廠',
                            SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                                ? 'Undyne'
                                : SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                                    ? '§fill=#ff0§握手'
                                    : '聊聊Undyne',
                            '離開'
                        ],
        talkPrompt: () =>
            world.genocide || world.killed0 || startonATE() || SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                ? '<09>{#p/basic}{#k/2}是嗎？\n就你\n還想聊天？'
                : '<09>{#p/basic}{#k/0}你想知道點\n啥呢？',
        talkText: [
            () =>
                SAVE.data.n.plot === 72
                    ? [
                        "<32>{#p/basic}{#k/0}* 小毛球國王，是吧？\n* 現在我知道是誰了。",
                        "<32>{#k/2}* 我得說，\n  直到今天我才知道\n  他是怎麼對待那些人類的！",
                        "<32>{#k/3}* 我不知道他是怎麼\n  把這個秘密\n  保守了這麼長時間的。",
                        "<32>{#k/0}* 特別是因為，\n  如果他之前告訴大家，\n  大家肯定不會介意。",
                        "<32>{#k/0}* 事實上，\n  我自己都收養了一個。",
                        "<32>{#k/2}* 那孩子現在在盒子裡\n  睡覺，就在商店外面。\n* 多可愛的小傢伙啊！",
                        "<32>{#k/0}* Asgore說，等那孩子的身體\n  適應了現實世界，\n  就會醒來。",
                        '<32>{#k/3}* ...哈？\n* 你想知道Asgore\n  能不能當你爹？',
                        "<32>{#k/0}* 嗯，為什麼不呢！",
                        "<32>{#k/0}* 我相信他聽到你這麼說\n  會高興的飛起來。",
                        "<32>{#k/2}* 這對他非常好。\n* 哇哈哈。"
                    ]
                    : world.genocide
                        ? [
                            '<32>{#p/basic}{#k/1}* 想聽聽我心目中的Asriel\n  是什麼樣的嗎？',
                            '<32>{#k/0}* ...\n* 他是個好孩子。',
                            '<32>{#k/3}* 他要是沒死，\n  現在已繼任國王了。',
                            "<32>{#k/4}* 我說的Asriel，\n  可不是面前這個「Asriel」。",
                            '<32>{#k/0}* 這個「Asriel」，\n  就算能模仿他的面容，復刻他的聲音，\n  甚至... 憑那張可愛的臉以假亂真...',
                            '<32>{#k/3}* 可就是模仿不了他的心靈。\n* 我了解Asriel的性格，\n  所以，你騙不了我。',
                            "<32>{#k/1}* 我很好奇，\n  親手把自己母親的靈魂\n  扯出來的滋味...",
                            '<32>{#k/0}* 好受不？'
                        ]
                        : world.killed0 || startonATE()
                            ? [
                                '<32>{#p/basic}{#k/0}* 很久以前，我跟國王都覺得，\n  在前哨站安分守己，才有未來...',
                                '<32>{#k/1}* 因為，一旦我們出去，\n  馬上就會被人類宰了。',
                                "<32>{#k/3}* 後來，國王改變主意了。\n* 當時，我甚至有點感覺\n  自己被他背叛了。",
                                '<32>{#k/4}* 但現在，我覺得...\n* 是我錯了。',
                                "<32>{#k/0}* 畢竟，就算我們安分守己...",
                                "<32>{#k/3}* 最終，還是會葬送在\n  某個人類的手中，對不對？"
                            ]
                            : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                                ? [
                                    "<32>{#p/basic}{#k/0}* 額，\n  關於我沒啥可說的。",
                                    '<32>{#k/0}* 我盡我所能地\n  過我自己的小日子...',
                                    '<32>{#k/4}* 盡力幫助我周圍的人。',
                                    '<32>{#k/0}* 但別忘了，\n  我們生活在一個\n  充滿危機的時代。',
                                    "<32>{#k/3}* 如果一個錯誤的人類\n  發現了我們的小前哨站，\n  我們就會去見祖宗了。"
                                ]
                                : [
                                    [
                                        "<32>{#p/basic}{#k/0}* 我已經活了很久了。\n* 也許太久了。",
                                        '<32>{#k/3}* 想當年，\n  人們稱我為「正義之刃」。',
                                        '<32>{#k/2}* 那時，\n  我還是行星理事會的主席。',
                                        "<32>{#k/1}* ...要不是那場該死的戰爭，\n  我今天可能還在那個位置上。"
                                    ],
                                    [
                                        '<32>{#p/basic}{#k/0}* 啊，是啊，就是那場戰爭。\n* 那場戰爭，\n  給我，給這裡每個人\n  都帶來了難以磨滅的創傷。',
                                        "<32>{#k/4}* 每隔一段時間，\n  我們會收到報告...\n* 上面，全是為了保護家園\n  而壯烈犧牲的烈士。",
                                        "<32>{#k/1}* 我至今還記得，小毛球國王\n  將一條條噩耗告知烈士家屬時，\n  他臉上的神情...",
                                        "<32>{#k/1}* 眼神空洞，目光呆滯...\n* 孩子，這就是戰爭\n  給人帶來的影響。",
                                        "<32>{#k/3}* 所以，我就退休了。"
                                    ],
                                    [
                                        '<32>{#p/basic}{#k/3}* 我的退休生活？',
                                        "<32>{#k/2}* 哇哈哈！\n* 可謂是「逍遙自在」啊！",
                                        "<32>{#k/4}* 也許那些在空境工作的員工\n  根本看不上這間破屋...",
                                        "<32>{#k/2}* ...但關我啥事？\n  我又不用跟他們比。",
                                        '<32>{#k/0}* 能有這些或英勇、或古怪、\n  或有點害羞的鄰居，\n  我就已經知足。',
                                        '<32>{#k/0}* 這也許並非我夢想的生活，\n  但人生在世，就該隨遇而安嘛。'
                                    ],
                                    [
                                        '<32>{#p/basic}{#k/3}* 想讓我再重複一遍嗎？',
                                        "<32>{#k/4}* 哇哈哈...\n  恐怕，你得回溯時間了。",
                                        "<32>{#k/2}* 就連我自己\n  都忘了剛才說過啥了！"
                                    ]
                                ][Math.min(SAVE.data.n.shop_gerson++, 3)],
            () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}{#k/3}* 一個全新的世界...',
                        "<32>{#k/0}* 好傢伙，\n  我從沒想到我能親眼\n  見證這麼一天。",
                        "<32>{#k/3}* Alphys博士告訴我們\n  她已經開始尋找新世界了...",
                        "<32>{#k/0}* 然後，就在不久前，\n  她說她找到一個。",
                        "<32>{#k/0}* 它叫歐律比亞。\n* 除此之外就啥也不知道了。",
                        "<32>{#k/1}* 我唯一肯定的是，\n  那地方絕對比這地方強上百倍。",
                        "<32>{#k/3}* 但並不是說\n  我不會想念這裡。",
                        "<32>{#k/0}* 我經歷了\n  怪物被囚禁的那個時期。",
                        '<32>{#k/0}* 這麼快離開\n  也太離譜了。'
                    ]
                    : world.genocide || world.killed0 || startonATE()
                        ? [
                            "<32>{#p/basic}{#k/3}* 我活了這麼久，\n  什麼大風大浪沒見過。\n  不會怕你這種東西。",
                            '<32>{#k/2}* 來啊，小子，動手啊！',
                            "<32>{#k/1}* ...我知道你在這傷不了我的。",
                            "<32>{#k/4}* 哇哈...\n* 假如沒有這樣的智慧，\n  我也活不長。"
                        ]
                        : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                            ? [
                                '<32>{#p/basic}{#k/2}* 你說，故園生活？',
                                '<32>{#k/0}* 呵，孩子啊...',
                                "<32>{#k/0}* 我只能告訴你，\n  故園是個很棒的地方。",
                                "<32>{#k/4}* 在那裡，人們不用怕...",
                                '<32>{#k/1}* ...自己的親人、朋友在面前\n  被活活殺死。',
                                "<32>{#k/0}* 所以嘛，\n  那地方肯定不適合你待。",
                                '<32>{#k/1}* 有疑問嗎？'
                            ]
                            : [
                                [
                                    "<32>{#p/basic}{#k/0}* 故園生活啊...\n* 嗯，首先，那裡有自己的名字。\n* 叫做克伊俄斯。",
                                    '<33>{#k/3}* 我自己在城外一個\n  寧靜的小鎮中長大。\n* 嗯，應該還算寧靜。',
                                    '<32>{#k/4}* 每隔幾天，學校裡的孩子們\n  就會組織單車競速比賽。',
                                    "<32>{#k/0}* 有時候天公不作美，\n  但他們一點都不在乎。\n* 甚至，壞天氣還讓比賽\n  變得更刺激，更有趣了。",
                                    '<32>{#k/0}* 那時，我還是個小毛孩，\n  和家人參加過好多次競速比賽。',
                                    "<32>{#k/0}* 你別誤會。\n* 「雷霆蝸牛」是很好玩，\n  但那可不是一回事。"
                                ],
                                [
                                    "<32>{#p/basic}{#k/3}* 我的家人？\n* 呃，沒什麼太多可說的。\n* 父母對我很好，\n  還有幾個兄弟姐妹。",
                                    '<32>{#k/0}* 有一天，\n  Erogot國王來我們小鎮。\n* 在一場競速比賽中，\n  我和他碰面了。',
                                    "<32>{#k/0}* 我只是個不起眼的鄉巴佬，\n  但他從我身上看到了別的東西，\n  那是某種特質...",
                                    '<32>{#k/4}* 一來二去，\n  我小小年紀就離開了家人。',
                                    "<32>{#k/3}* ...那次一別，\n  此後就再也沒能見到家人。"
                                ],
                                [
                                    '<32>{#p/basic}{#k/0}* Erogot，是故園最後一段全盛時期的\n  當政國王。',
                                    "<32>* 我相信，你一定讀過他的故事。",
                                    ...(SAVE.storage.inventory.has('artifact') // NO-TRANSLATE

                                        ? ["<32>{#k/2}* 否則，那你怎麼拿著\n  他的吊墜！？"]
                                        : [
                                            "<32>{#k/2}* 否則，你難道一直活在\n  外星上嗎？"
                                        ]),
                                    '<32>{#k/3}* 在他的統治下，\n  怪物一族逐漸發展壯大\n* 都有點壯大過頭了。',
                                    '<32>{#k/0}* 他第一次見到人類時，\n  非常高興...',
'<32>{#k/0}* 並不是因為他自己想見到人類，\n  而是為了實現他兒子的願望。',
                                    "<32>{#k/1}* 可憐的孩子，\n  雖然實現了他的夢想，\n  可之後..."
                                ],
                                [
                                    "<32>{#p/basic}{#k/3}* 抱歉，這事我不該說太多。",
                                    "<32>{#k/1}* 小毛球國王可不想讓你\n  背負那樣的重擔。"
                                ]
                            ][Math.min(SAVE.data.n.shop_homeworld++, 3)],
            () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}{#k/0}* Toriel？\n* 其實，她不久前剛經過這。',
                        '<32>{#k/1}* 她說，「想自己一個人靜靜。」',
                        "<32>{#k/3}* 嗯...\n* 不過我覺得，\n  現在她應該冷靜得差不多了。",
                        '<32>{#k/0}* 附近有個垃圾堆，\n  那房間裡還有一架梯子。\n  她應該就在那裡。',
                        "<32>{#k/3}* 至於她為啥這麼心事重重...\n  我清楚得很。"
                    ]
                    : world.genocide || world.killed0 || startonATE()
                        ? 48 <= SAVE.data.n.plot
                            ? [
                                [
                                    '<32>{#p/basic}{#k/3}* 嗯？\n* 跟你幹一架？',
                                    "<32>{#k/1}* 沒門。\n* 我不是英雄，\n  也不會去逞英雄。",
                                    "<32>{#k/0}* 更何況...\n* 你就算沒殺Undyne，\n  其他民眾也還是都被殺了。",
                                    "<32>{#k/4}* 反正，我就這麼待著，\n  你也拿我沒辦法..."
                                ],
                                [
                                    '<32>{#p/basic}{#k/3}* 嗯？\n* 跟你幹一架？',
                                    "<32>{#k/1}* 沒門。\n* 我不是英雄，\n  也不會去逞英雄。",
                                    "<32>{#k/3}* 更何況...\n* 怪物們只要碰上你，\n  幾乎都會失蹤。",
                                    "<32>{#k/4}* 那我不如識趣點，老實待著。\n* 反正你也拿我沒辦法..."
                                ],
                                [
                                    '<32>{#p/basic}{#k/3}* 嗯？\n* 跟你幹一架？',
                                    "<32>{#k/1}* 沒門。\n* 我不是英雄，\n  也不會去逞英雄。",
                                    "<32>{#k/0}* 更何況...\n* 連Undyne都攔不住你，\n  那我就更不是你的對手。",
                                    "<32>{#k/4}* 反正，我就這麼待著，\n  你也拿我沒辦法..."
                                ]
                            ][world.genocide ? 2 : SAVE.data.n.state_foundry_undyne]
                            : [
                                '<32>{#p/basic}{#k/3}* 嗯？\n* 跟你幹一架？',
                                "<32>{#k/1}* 沒門。\n* 我不是英雄，\n  也不會去逞英雄。",
                                "<32>{#k/0}* 更何況...\n* 我這身老骨頭也打不動了。",
                                "<32>{#k/1}* 你打一下，我可能...\n  就...",
                                "<32>{#k/4}* 至少，我還能扯扯閒話，拖住你，\n  幫孩子們爭取逃命的時間。"
                            ]
                        : postSIGMA()
                            ? [
                                '<32>{#p/basic}{#k/3}* 你想了解鑄廠？\n* 就這個破地方？',
                                "<32>{#k/3}* 呃...\n* 剛才，這裡停電了...",
                                "<32>{#k/0}* 不過別擔心。\n* 就這點小事，\n  難不倒鑄廠員工的。",
                                "<32>{#k/2}* 這群修理工啊，\n  一個個恨不得天天996呢！"
                            ]
                            : 48 <= SAVE.data.n.plot && SAVE.data.n.state_foundry_undyne > 0
                                ? [
                                    [
                                        '<32>{#p/basic}{#k/3}* 你想了解鑄廠？\n* 就這個破地方？',
                                        "<32>{#k/3}* 嗯，這地方跟個迷宮一樣，\n  總有人在這裡迷路...",
                                        '<32>{#k/3}* 甚至被拋棄...',
                                        "<32>{#k/2}* 孩子，我真希望\n  這種事情別發生在你身上。"
                                    ],
                                    [
                                        '<32>{#p/basic}{#k/3}* 你想了解鑄廠？\n* 就這個破地方？',
                                        "<32>{#k/0}* 唉，這裡根本不是什麼\n  幸福樂園...\n* 從來都不是。",
                                        '<32>{#k/3}* 前有人類把我們逼到這裡，\n  活活等死；\n* 後有英雄戰死，士氣低迷...',
                                        "<32>{#k/3}* 孩子，這裡只有苦難。"
                                    ]
                                ][SAVE.data.n.state_foundry_undyne - 1]
                                : [
                                    '<32>{#p/basic}{#k/3}* 你想了解鑄廠？\n* 就這個破地方？',
                                    '<32>{#k/2}* 我想想...\n* 當年，怪物剛被困在這裡時，\n  整個「前哨站」還只有鑄廠！',
                                    '<32>{#k/0}* 後來，我們不斷擴建前哨站，\n  才有了形態各異的其他區域。',
                                    "<32>{#k/0}* 看來，怪物們大多不願拘泥於過去，\n  而是「向前看」，謀發展。\n* 我能理解。",
                                    "<32>{#k/2}* 雖說...\n  只想發展，擴建，改造\n  這一畝三分地，有點沒出息。",
                                    "<32>{#k/3}* 當年，人類把我們困在這裡，\n  希望我們在黑暗中腐爛受苦。",
                                    "<32>{#k/0}* 但你瞧：\n  一路下來，我們不僅走出了困境，\n  還把這裡變成了自己的地盤。",
                                    "<32>{#k/2}* 哇哈哈！\n* 就讓他們瞧瞧：\n  誰才是老大！"
                                ],
            () =>
                SAVE.data.b.c_state_secret2 && !SAVE.data.b.c_state_secret2_used
                    ? ((SAVE.data.b.c_state_secret2_used = true),
                        [
                            '<32>{#p/basic}{#k/3}* 啥？\n* 你在克裡烏斯的哪個地方\n  學的這個握手方式？',
                            "<32>{#k/2}* 我已經很多年\n  沒跟別人展示過嚕！",
                            '<32>{#k/0}* 哇哈哈...\n  但我想知道你在哪學的。',
                            '<32>{#k/0}* 很久以前，\n  一個人類來到這裡...\n  我與其成為了好朋友。',
                            ...(SAVE.data.n.plot === 72
                                ? [
                                    "<32>{#k/3}* 也許我們仍然是。\n* 等那孩子醒來我要問一下。",
                                    "<32>{#k/4}* 剛剛我收養了這個小屁孩...",
                                    '<32>{#k/0}* 從檔案內出來後，\n  那孩子看起來很累。',
                                    '<32>{#k/3}* 想像一下...\n* 生活在虛擬世界...',
                                    '<32>{#k/2}* 如果你在模擬中死亡，\n  現實中你也會死嗎？',
                                    "<32>{#k/0}* 額，算了。\n* 不管咋樣，這都不重要了。"
                                ]
                                : ["<32>{#k/3}* 我想知道\n  那孩子現在醒了嗎..."])
                        ])
                    : SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#k/0}* Frisk，\n  在你做了那事後，\n  我可以談論你一整天。',
                            '<32>{#k/4}* 面對一個神的存在，\n  冒著生命危險，\n  拯救了我們大家...',
                            "<32>{#k/3}* 不會出現\n  任何有力的詞彙，\n  可以形容出這件正義之舉。",
                            '<32>{#k/0}* 我覺得，\n  在未來不管什麼時候，\n  只要你想...',
                            '<32>{#k/0}* 你就可以成為\n  領導怪物種族的\n  統治者。',
                            '<33>{#k/2}* 所有人都會跟隨你。\n* 包括你眼前的這個老傻瓜！',
                            "<32>{#k/0}* 孩子，\n  你是一名真正的英雄。"
                        ]
                        : 48 <= SAVE.data.n.plot
                            ? world.genocide
                                ? [
                                    [
                                        "<32>{#p/basic}{#k/1}* 你們殺掉她了？",
                                        '<32>{#k/1}* ...',
                                        '<32>{#k/3}* 那幹嘛明知故問...',
                                        '<32>{#k/3}* 難道...',
                                        '<32>{#k/2}* 就是為了看看我啥反應？',
'<32>{#k/2}* 是嗎？',
                                        '<32>{#k/4}* ...',
                                        '<32>{#k/4}* 你還不如... 唉算了。'
                                    ],
                                    [
                                        '<32>{#p/basic}{#k/1}* 好了我知道了娃們。',
                                        "<32>{#k/1}* 她死了。",
                                        "<32>{#k/3}* 賴著不走，\n  是等著我給你倆辦慶功宴嗎？",
                                        '<32>{#k/1}* 現在給我滾。'
                                    ]
                                ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                                : SAVE.data.s.state_foundry_deathroom === 'f_hub' // NO-TRANSLATE

                                    ? [
                                        '<32>{#p/basic}{#k/1}* ...',
                                        "<32>{#k/1}* 小子，你可真幽默。",
                                        '<32>{#k/3}* 還當我面把她殺了...',
                                        "<32>{#k/1}* 算你幸運，\n  我不會走出商店，把你殺了。"
                                    ]
                                    : world.killed0 || startonATE()
                                        ? [
                                            [
                                                '<32>{#p/basic}{#k/4}* Undyne？',
                                                49 <= SAVE.data.n.plot
                                                    ? '<32>{#k/4}* 前不久，她剛路過這裡...'
                                                    : '<32>{#k/4}* 幾分鐘前，她剛路過這裡。',
                                                '<32>{#k/0}* 她說，「不想」抓你了。',
                                                '<32>{#k/4}* ...',
                                                '<32>{#k/4}* 到底咋回事？'
                                            ],
                                            [
                                                '<32>{#p/basic}{#k/3}* Undyne？',
                                                "<32>{#k/0}* 這段時間一直沒看到她。",
                                                '<32>{#k/4}* 好像... 失蹤了。',
                                                '<32>{#k/3}* 是你幹的吧？'
                                            ],
                                            [
                                                [
                                                    '<32>{#p/basic}{#k/1}* ...',
                                                    '<32>{#k/1}* 你故技重施，殺了她。',
                                                    "<32>{#k/3}* 誠然，她追殺你，\n  她沒想讓你活命...",
                                                    "<32>{#k/1}* 但想靠「正當防衛」糊弄我？\n  沒門。",
                                                    '<32>{#k/3}* 哇哈...\n* 你的所作所為，我清楚得很。'
                                                ],
                                                ['<32>{#p/basic}{#k/4}* ...', '<32>{#k/0}* 還有啥好說的呢？']
                                            ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                                        ][SAVE.data.n.state_foundry_undyne]
                                        : [
                                            2 <= SAVE.data.n.plot_date
                                                ? SAVE.data.b.undyne_respecc
                                                    ? [
                                                        '<32>{#p/basic}{#k/4}* 欸，你倆挺合得來嘛。',
                                                        '<32>{#k/2}* 哇哈哈！',
                                                        "<32>{#k/0}* 你在她心中的地位\n  直線上升了喔，孩子！"
                                                    ]
                                                    : [
                                                        '<32>{#p/basic}{#k/4}* 所以，你倆...\n  現在成好朋友了？',
                                                        '<32>{#k/2}* 哇哈哈！',
                                                        "<32>{#k/0}* 連我都大吃一驚啊，\n  孩子！"
                                                    ]
                                                : [
                                                    [
                                                        '<32>{#p/basic}{#k/4}* Undyne？',
                                                        49 <= SAVE.data.n.plot
                                                            ? '<32>{#k/4}* 前不久，她剛路過這裡...'
                                                            : '<32>{#k/4}* 幾分鐘前，她剛路過這裡。',
                                                        SAVE.data.b.undyne_respecc
                                                            ? '<32>{#k/0}* 她說，和那位「可敬的人類」\n  好好切磋了一番。'
                                                            : '<32>{#k/0}* 她說，「早就」抓到你了。',
                                                        '<32>{#k/4}* ...',
                                                        '<32>{#k/4}* 她咋說得出口的？\n  你小子幹啥了？'
                                                    ],
                                                    [
                                                        "<32>{#p/basic}{#k/4}* 你想去找她是吧？\n* 她就在家待著呢，離這沒幾步路。",
                                                        '<32>{#k/3}* 聽她之前那番話...',
                                                        SAVE.data.b.undyne_respecc
                                                            ? '<32>{#k/4}* 沒想到，你倆處得挺不錯。'
                                                            : '<32>{#k/4}* 你倆得好好聊聊了。'
                                                    ]
                                                ][Math.min(SAVE.data.n.shop_deadfish++, 1)],
                                            [
                                                '<32>{#p/basic}{#k/3}* Undyne？',
                                                "<32>{#k/0}* 這段時間一直沒看到她。",
                                                '<32>{#k/4}* 好像... 失蹤了。',
                                                '<32>{#k/1}* 隱隱覺得，這事跟你有關係...'
                                            ],
                                            [
                                                [
                                                    '<32>{#p/basic}{#k/4}* ...',
                                                    '<32>{#k/0}* 嗯... 她被殺了。',
                                                    "<32>{#k/3}* 不過吧，這事得怪她自己。",
                                                    '<32>{#k/4}* 我一直搞不明白，\n  她為啥就鐵了心地想\n  幹掉你們人類呢...',
                                                    "<32>{#k/0}* 就拿個靈魂而已，\n  等你自然老死，然後再拿，\n  有什麼不好呢？"
                                                ],
                                                ['<32>{#p/basic}{#k/4}* ...', '<32>{#k/0}* 還有啥好說的呢？']
                                            ][Math.min(SAVE.data.n.shop_deadfish++, 1)]
                                        ][SAVE.data.n.state_foundry_undyne]
                            : world.genocide
                                ? [
                                    "<32>{#p/basic}{#k/0}* Undyne？\n* 喔，一個小淘氣鬼而已。\n* 要是換平時，我會說她是英雄...",
                                    "<32>{#k/1}* 不過，我一路上目睹了\n  你的所做所為。\n* 她再怎麼逞能，也是白費功夫。",
                                    "<32>{#k/4}* 別誤會。\n* 即使沒有勝算，\n  她會好好和你打一場。",
                                    '<32>{#k/3}* 可是...\n  一味只會訴諸武力的人，\n  救不了前哨站。',
                                    "<32>{#k/3}* 此時，仍能「眾人皆醉我獨醒」，\n  願意尋找另一種辦法\n  化解危機之人...",
                                    "<32>{#k/3}* 才是真正的英雄。",
                                    "<32>{#k/0}* 哇哈哈。\n* 我相信，這樣的英雄\n  一定能滅了你們。"
                                ]
                                : world.killed0 || startonATE()
                                    ? world.trueKills > 29
                                        ? [
                                            "<32>{#p/basic}{#k/1}* 我不是英雄。",
                                            "<32>{#k/3}* 但我知道，在這裡的某處，\n  一定有這樣一位英雄：",
                                            "<32>* 那英雄不管身處何種境地，\n  始終堅守正義。",
                                            "<32>{#k/0}* 那英雄江湖無名，\n  任何傳說從未提及。",
                                            "<32>* 但我仍然堅信，\n  那英雄一定就在某處。",
                                            '<32>{#k/3}* 有朝一日，\n  那英雄定會將你斬於馬下。'
                                        ]
                                        : [
                                            "<32>{#p/basic}{#k/1}* 我不是英雄。",
                                            "<32>{#k/3}* 但我知道，在這裡的某處，\n  一定有這樣一位英雄：",
                                            "<32>* 那英雄不管身處何種境地，\n  始終堅守正義。",
                                            "<32>{#k/0}* 孩子，你最好小心點。",
                                            "<32>{#k/0}* 指不定哪天...",
                                            "<32>{#k/3}* 你就死定了。"
                                        ]
                                    : world.trueKills > 29
                                        ? [
                                            "<32>{#p/basic}{#k/0}* Undyne？\n* 是啊，她是這一帶的英雄。",
                                            '<32>{#k/3}* 剛剛，她四處咆哮...\n* 似乎特別厭惡\n  長得像你一樣的傢伙...',
                                            "<32>{#k/2}* 孩子，我會幫你一把的。\n* 買點東西吧，\n  說不定能救你一命呢！\n* 哇哈哈！"
                                        ]
                                        : [
                                            "<32>{#p/basic}{#k/0}* Undyne？\n* 是啊，她是這一帶的英雄。",
                                            '<32>{#k/4}* 憑藉勇氣和決心，\n  她一路奮鬥到皇家守衛的頂點。',
                                            '<32>{#k/3}* 剛剛，她來這裡問\n  有沒有見到一個\n  長得很像你的傢伙...',
                                            "<32>{#k/2}* 孩子，我會幫你一把的。\n* 買點東西吧，\n  說不定能救你一命呢！\n* 哇哈哈！"
                                        ]
        ],
        zeroPrompt: '<09>{#p/basic}...'
    },

    s_save_foundry: {
        f_abyss: {
            name: '鑄廠 - 深淵',
            text: [
                '<32>{#p/human}* （你發現自己身處\n  前哨站的最低點。）',
                '<32>{#p/human}* （這種身處邊境的不定感\n  使你充滿了決心。）'
            ]
        },
        f_battle: {
            name: '鑄廠 - 鋼索橋',
            text: () =>
                SAVE.data.n.state_foundry_undyne > 0 || world.runaway
                    ? ['<32>{#p/human}* （星光漸漸暗淡，\n  這使你充滿了決心。）']
                    : [
                        '<32>{#p/human}* （雖然遠在天際，星光依舊閃爍。）',
                        '<32>{#p/human}* （這使你充滿了決心。）'
                    ]
        },
        f_hub: {
            name: '鑄廠 - 寧靜地帶',
            text: () =>
                SAVE.data.n.state_foundry_undyne > 0 || world.runaway
                    ? [
                        '<32>{#p/human}* （這裡靜得可怕...）',
                        '<32>{#p/human}* （這仍使你充滿了決心。）'
                    ]
                    : SAVE.data.n.plot === 72
                        ? ['<32>{#p/human}* （旅途即將結束，\n  而你又回到這片寧靜地帶。）\n* （這使你充滿了決心。）']
                        : SAVE.data.n.plot < 48
                            ? [
                                '<32>{#p/human}* （在持續的混亂中\n  得到了短暫的喘息...）',
                                '<32>{#p/human}* （這使你充滿了決心。）'
                            ]
                            : SAVE.data.n.plot_date < 2.1
                                ? ['<32>{#p/human}* （混亂消退了。）\n* （這使你充滿了決心。）']
                                : SAVE.data.n.exp > 0
                                    ? [
                                        '<32>{#p/human}* （隨著蒸汽而來的\n  是背叛的苦澀。）',
                                        '<32>{#p/human}* （這使你充滿了決心。）'
                                    ]
                                    : [
                                        '<32>{#p/human}* （隨著蒸汽而來的\n  是友誼的芬芳。）',
                                        '<32>{#p/human}* （這使你充滿了決心。）'
                                    ]
        },
        f_lobby: {
            name: '鑄廠 - 暗區',
            text: () =>
                SAVE.data.n.plot < 39
                    ? ['<32>{#p/human}* （在鑄廠的深處漫步，\n  使你充滿了決心。）']
                    : SAVE.data.n.state_foundry_muffet === 1
                        ? ['<32>{#p/human}* （一路上，你把「朋友」拉下了水。）\n* （想到這些，你充滿了決心。）']
                        : SAVE.data.b.f_state_kidd_betray
                            ? ['<32>{#p/human}* （一路上，你把「朋友」棄若敝履。）\n* （想到這些，你充滿了決心。）']
                            : world.runaway
                                ? [
                                    "<32>{#p/human}* （如今，你與「朋友」們再無緣相見。）\n* （想到這些，你充滿了決心。）"
                                ]
                                : SAVE.data.b.svr
                                    ? [
                                        '<32>{#p/human}* （那時，你竭盡全力拯救朋友。）\n* （想到這些，你充滿了決心。）'
                                    ]
                                    : ['<32>{#p/human}* （一路上，你結交了那麼多朋友。）\n* （想到這些，你充滿了決心。）']
        },
        f_prechase: {
            name: '鑄廠 - 岔路口',
            text: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* （儘管只有你和夥伴們\n  有機會踏上附近那座新橋...）',
                        '<32>{#p/human}* （它仍使你充滿了決心。）'
                    ]
                    : world.runaway
                        ? [
                            "<32>{#p/human}* （儘管如今只有你\n  有機會踏上附近那座新橋...）",
                            '<32>{#p/human}* （它仍使你充滿了決心。）'
                        ]
                        : SAVE.data.n.plot < 48
                            ? [
                                '<32>{#p/human}* （塔架謎題、訊星，\n  還有老式通風口...）',
                                '<32>{#p/human}* （如同變幻莫測的喜劇一般，\n  使你充滿了決心。）'
                            ]
                            : [
                                '<32>{#p/human}* （周圍多了一座剛建的新橋。）',
                                '<32>{#p/human}* （這使你充滿了決心。）'
                            ]
        },
        f_sans: {
            name: '鑄廠 - 邊檢站',
            text: () =>
                world.dead_skeleton || world.runaway
                    ? [
                        '<32>{#p/human}* （不知怎地，通風口排出的蒸汽\n  令人感到不安。）',
                        '<32>{#p/human}* （但你仍充滿了決心。）'
                    ]
                    : ['<32>{#p/human}* （通風口不停冒出溼熱的蒸汽。）\n* （這使你充滿了決心。）']
        },
        f_shyren: {
            name: '鑄廠 - 自動售貨機',
            text: () =>
                SAVE.data.b.killed_shyren
                    ? ['<32>{#p/human}* （空氣中瀰漫著悲傷的寂靜。）\n* （這使你充滿了決心。）']
                    : SAVE.data.n.plot < 40
                        ? ['<32>{#p/human}* （耳邊的哼唱聲不住迴響。）\n* （這使你充滿了決心。）']
                        : ['<32>{#p/human}* （音樂在耳畔迴響。）\n* （這使你充滿了決心。）']
        },
        f_tunnel: {
            name: '鑄廠 - 垃圾場',
            text: () =>
                SAVE.data.n.plot < 42.1
                    ? ['<32>{#p/human}* （在垃圾中迷失方向\n  使你充滿了決心。）']
                    : ['<32>{#p/human}* （發現自己又回到了垃圾的行列\n  使你充滿了決心。）']
        }
    }
};


// END-TRANSLATE
