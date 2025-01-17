import { asrielinter } from '../../../code/common';
import { toriCheck, toriSV } from '../../../code/outlands/extras';
import { game } from '../../../code/systems/core';
import {
    battler,
    choicer,
    iFancyYourVilliany,
    instance,
    outlandsKills,
    pager,
    postSIGMA,
    resetThreshold,
    roomKills,
    world
} from '../../../code/systems/framework';
import { SAVE } from '../../../code/systems/save';
import { CosmosKeyed, CosmosProvider } from '../../../code/systems/storyteller';

// START-TRANSLATE

const toriel_aerialis = () =>
    SAVE.data.n.plot < 49
        ? [
            '<25>{#p/toriel}{#f/1}* Ich habe gehört, dass in Aerialis eine ',
'<25>{#p/toriel}{#f/1}* bestimmte Art Flüssigkeit enthalten ist...',
            '<25>{#f/0}* Wird hauptsächlich zur Dämpfung von Elektrizität verwendet.',
            '<25>{#f/1}* Wenn Sie diese Flüssigkeit tragen könnten, wie weit ',
'<25>{#f/1}* würden Sie sie tragen?',
            '<25>{#f/1}* Würden Sie es den ganzen Weg bis zur Zitadelle tragen?',
            '<25>{#f/1}* Oder würden Sie es einfach im Altpapiercontainer entsorgen?',
            '<25>{#f/0}* Wie enttäuschend das wäre.'
        ]
        : SAVE.data.n.plot < 51
            ? world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                ? [
                    '<25>{#p/toriel}{#f/1}* Vielleicht, wenn ich jemals Lehrer werde...',
                    '<25>{#f/0}* Ich könnte eine Exkursion zum Royal Lab veranstalten.',
                    "<25>{#f/0}* Natürlich mit Dr. Alphys‘ Erlaubnis.",
                    '<25>{#f/1}* All die interessanten Experimente, die sie ',
'<25>{#f/1}* dort durchführen müssen...',
                    "<25>{#f/0}* Es wäre eine großartige Lernerfahrung für die Kinder."
                ]
                : [
                    '<25>{#p/toriel}{#f/0}* Die Nachricht von deiner Fernsehpremiere hat ',
'<25>{#p/toriel}{#f/0}* sich schnell verbreitet, Kleines!',
                    '<25>{#f/0}* Ich habe ihn allerdings nicht gesehen, da ich keinen Fernseher habe.',
                    '<25>{#f/1}* Als ich davon hörte, muss ich allerdings zugeben, ',
'<25>{#f/1}* dass ich überrascht war...',
                    SAVE.data.n.state_aerialis_talentfails === 0
                        ? '<25>{#f/2}* Wie konnten Sie nicht ein EINZIGES Mal etwas verpassen?'
                        : '<25>{#f/6}* Ich wusste nicht, dass du so „fabelhafte“ Moves drauf hast.'
                ]
            : SAVE.data.n.plot < 56
                ? [
                    '<25>{#p/toriel}{#f/1}* Hmm...\n* Die königlichen Wachen in Aerialis...',
                    '<25>{#f/0}* Ihr Lieblingsessen ist anscheinend... Lachs.',
                    '<25>{#f/1}* Oder... war es Eis?',
                    '<25>{#f/2}* Warte, nein, ich glaube, es war Pizza!',
                    '<25>{#f/0}* All dies wäre ohne den bescheidenen Replikator unmöglich.',
                    '<25>{#f/1}* Und ... ist das nicht ein seltsames Essen für so neue Rekruten?'
                ]
                : SAVE.data.n.plot < 59
                    ? [
                        world.bad_lizard > 1 || SAVE.data.n.state_foundry_undyne === 2
                            ? '<25>{#p/toriel}{#f/0}* Ich habe gehört, du bist im Fernsehen aufgetreten, Kleines.'
                            : '<25>{#p/toriel}{#f/0}* Ich habe gehört, du bist wieder im Fernsehen aufgetreten, Kleines.',
                        '<25>{#f/1}* Ich habe auch gehört, dass Sie etwas Schockierendes getan haben...',
                        iFancyYourVilliany()
                            ? '<25>{#f/2}* und Bastelzutaten verändert haben um Plastiksprengstoff herzustellen!'
                            : SAVE.data.n.state_aerialis_crafterresult === 0
                                ? '<25>{#f/2}* Und Sie haben der Gefahr einer drohenden Explosion standgehalten!'
                                : '<25>{#f/2}* Und Sie haben ganz allein einen „tragbaren Einweg-Jetpack“ geflogen!',
                        '<25>{#f/3}* ... Sind Sie...',
                        '<25>{#f/4}* VERSUCHEN Sie, Ihr Leben in Gefahr zu bringen?'
                    ]
                    : SAVE.data.n.plot < 60
                        ? [
                            '<25>{#p/toriel}{#f/1}* Welche Art von Rätseln gibt es in Aerialis?',
                            '<25>{#f/1}* Sind sie laserbasiert?',
                            '<25>{#f/1}* Bringen sie Sie zurück zum Anfang, wenn Sie scheitern?',
                            '<25>{#f/1}* ... können sie als solche explizit als „fehlgeschlagen“ ',
'<25>{#f/1}* eingestuft werden?',
                            '<25>{#f/0}* Hmm... *\n Entschuldigen Sie, dass ich so viele Fragen stelle.',
                            '<25>{#f/1}* Ein Rätselfan wie ich kann nicht anders, ',
'<25>{#f/1}* als über diese Dinge nachzudenken …'
                        ]
                        : SAVE.data.n.plot < 61
                            ? [
                                '<25>{#p/toriel}{#f/1}* Als ich von deinem Streich mit Mettaton hörte ...',
                                '<25>{#f/0}* Mir ist eine Idee gekommen.\n',
                                '<25>{#f/1}* Wie könnte ein Roboter wie er nach dem Verbot ',
'<25>{#f/1}* von KI-Programmen existieren?',
                                '<25>{#f/5}* Sicherlich würde Dr. Alphys eine so gut etablierte Regel nicht brechen',
                                '<25>{#f/0}* Nein... \n* Es muss eine andere Erklärung geben.'
                            ]
                            : SAVE.data.n.plot < 63
                                ? [
                                    '<25>{#p/toriel}{#f/1}* Hmm...\n* Die königlichen Wachen in Aerialis...',
                                    '<25>{#f/0}* Ich habe gehört, sie seien gerade erst in ',
'<25>{#f/0}* ihre Positionen befördert worden.',
                                    '<25>{#f/1}* Ich habe auch gehört, dass sie bei der Wahl ihrer Waffen ',
'<25>{#f/1}* ziemlich wählerisch sind...',
                                    '<25>{#f/5}* Weigern Sie sich, sie zu aktualisieren, obwohl bessere ',
'<25>{#f/5}* Optionen angeboten werden.',
                                    '<25>{#f/0}* Nicht, dass ich möchte, dass sie ihre Waffen aufrüsten.',
                                    '<25>{#f/2}* Ich mache mir schon genug Sorgen um dich!'
                                ]
                                : SAVE.data.n.plot < 65
                                    ? SAVE.data.b.a_state_hapstablook
                                        ? [
                                            '<25>{#p/toriel}{#f/1}* Ein Geist namens Lurksalot, hat vor kurzem von einer ',
'<25>{#p/toriel}{#f/1}* Familienangelegenheit gesprochen.',
                                            '<25>{#f/5}* Es scheint, als ob ihnen das schon seit einiger Zeit ',
'<25>{#f/5}* auf der Seele brennt.',
                                            '<25>{#f/0}* Zum Glück soll das Problem bald behoben sein, heißt es.\n',
                                            '<25>{#f/1}* Und noch dazu mit Ihrer Hilfe?',
                                            '<25>{#f/0}* Also dann.\n* Ich bin sehr stolz auf dich, Kleines.'
                                        ]
                                        : [
                                            '<25>{#p/toriel}{#f/1}* Ein Geist namens Lurksalot, hat vor kurzem von einer ',
'<25>{#p/toriel}{#f/1}* Familienangelegenheit gesprochen.',
                                            '<25>{#f/5}* Es scheint, als ob ihnen das schon seit einiger Zeit ',
'<25>{#f/5}* auf der Seele brennt.',
                                            '<25>{#f/1}* Sie sagen, ihr Cousin hat versucht, dich um Hilfe zu bitten, aber...',
                                            '<25>{#f/5}* Sie waren zu diesem Zeitpunkt nicht erreichbar.',
                                            '<25>{#f/1}* ... Sie hatten einen guten Grund, nicht wahr?'
                                        ]
                                    : SAVE.data.n.plot < 66
                                        ? [
                                            '<25>{#p/toriel}{#f/1}* Wer hätte gedacht, dass ein Roboter eine so ',
'<25>{#p/toriel}{#f/1}* schöne Stimme haben kann?',
                                            "<25>{#f/0}* Als ich Mettatons neue Aufnahme hörte, traute ich meinen Ohren nicht.",
                                            '<26>{#f/1}* Allerdings waren einige der Liedtexte für meinen Geschmack ',
'<26>{#f/1}* etwas ... gewalttätig.',
                                            '<25>{#f/5}* ...',
                                            '<25>{#f/0}* Mach dir keine Sorgen, mein Kind. ',
'<25>{#f/0}* Niemand wird dich ins All werfen.'
                                        ]
                                        : SAVE.data.n.plot < 68
                                            ? [
                                                '<25>{#p/toriel}{#f/0}* Sans erzählt mir, dass das „Freizeitzentrum“ ',
'<25>{#p/toriel}{#f/0}* einer seiner Lieblingsorte ist.',
                                                '<25>{#p/toriel}{#f/1}* Kunstkurse, Musikclubs, Bibliotheken...',
                                                '<25>{#p/toriel}{#f/5}* Es ist eine Schande, dass große Teile der Gegend für kleine Kinder ',
'<25>{#p/toriel}{#f/5}* nicht sicher sind.',
                                                '<25>{#p/toriel}{#f/3}* Könnten sie sich nicht etwas mehr Mühe geben, entgegenkommend zu sein?',
                                                '<25>{#p/toriel}{#f/2}* Diese Medien können wertvolle, transformierende ',
'<25>{#p/toriel}{#f/2}* Erfahrungen bieten!'
                                            ]
                                            : SAVE.data.n.plot < 70
                                                ? world.bad_robot
                                                    ? [
                                                        '<25>{#p/toriel}{#f/0}* Jeder, den ich kenne, ist verärgert über das ',
'<25>{#p/toriel}{#f/0}* abgesagte „große Finale“.',
                                                        '<25>{#p/toriel}{#f/0}* Sie sagen, es wäre ein ziemlicher Kampf geworden.',
                                                        '<25>{#p/toriel}{#f/1}* Obwohl ich erleichtert bin, dass Sie einen ',
'<25>{#p/toriel}{#f/1}* solchen Kampf nicht austragen mussten...',
                                                        '<25>{#p/toriel}{#f/5}* Ich mache mir ständig Sorgen darüber, ',
'<25>{#p/toriel}{#f/5}* was Sie jetzt erwartet.'
                                                    ]
                                                    : SAVE.data.b.killed_mettaton
                                                        ? [
                                                            '<25>{#p/toriel}{#f/0}* Alle, die ich kenne, sprechen von einem „großen Finale“.',
                                                            '<25>{#p/toriel}{#f/1}* Sie sagen, Mettaton habe sein Leben für das Wohl der Show gegeben...',
                                                            '<25>{#p/toriel}{#f/0}* Aber ich weiß es besser.',
                                                            '<25>{#p/toriel}{#f/1}* Schließlich können Roboter repariert werden, oder nicht?'
                                                        ]
                                                        : [
                                                            '<25>{#p/toriel}{#f/0}* Alle, die ich kenne, sprechen von einem „großen Finale“.',
                                                            '<25>{#p/toriel}{#f/0}* Sie sagen, dass es sie wirklich glücklich gemacht hat, ',
'<25>{#p/toriel}{#f/0}* dir und Mettaton zuzusehen.',
                                                            '<25>{#p/toriel}{#f/1}* Obwohl ich froh bin, dass Sie offenbar eine gute Zeit hatten...',
                                                            '<25>{#p/toriel}{#f/5}* Ich mache mir ständig Sorgen darüber, ',
'<25>{#p/toriel}{#f/5}* was Sie jetzt erwartet.'
                                                        ]
                                                : [
                                                    '<25>{#p/toriel}{#f/1}* Geht es dir da draußen immer noch gut, Kleines?',
                                                    '<25>{#p/toriel}{#f/5}* Wahrscheinlich waren Sie inzwischen schon in der Zitadelle.',
                                                    '<25>{#p/toriel}{#f/9}* ...',
                                                    "<25>{#p/toriel}{#f/10}* Sei lieb, in Ordnung?"
                                                ];

export default {
    a_outlands: {
        darktorielcall: [
            '<26>{#p/toriel}{#f/5}* Ich entschuldige mich, Kleines. ',
'<26>{#p/toriel}{#f/5}* Ich habe mein Telefon wieder einmal ausgeschaltet.',
            '<25>{#p/toriel}{#f/9}* Bitte lass mich vorerst hier.',
            '<25>{#p/toriel}{#f/10}* Ich werde mich zu gegebener Zeit bei Ihnen und den anderen melden.'
        ],
        secret1: () => [
            '<32>{#p/basic}* Hier ist eine Tür.\n* Sie ist verschlossen.',
            ...(SAVE.data.b.oops ? [] : ["<32>{#p/basic}* Vielleicht gibt es irgendwo einen Schlüssel...?"])
        ],
        secret2: ['<32>{#p/human}* (Du benutzt den geheimen Schlüssel.)'],
        exit: () => [choicer.create('* (Die Outlands verlassen?)', 'Ja', 'Nein')],
        nosleep: ['<32>{#p/human}* (Etwas scheint Ihren Schlaf gestört zu haben.)'],
        noequip: ['<32>{#p/human}* (Du entscheidest dich, es nicht auszurüsten.)'],
        finaltext: {
            a: ["<32>{#p/basic}* Er muss hier irgendwo sein ..."],
            b: ['<32>{#p/basic}* Huh...?', '<32>{#p/basic}* Ist das... er? \n* Da draußen?'],
            c: [
                "<32>{#p/basic}* ... er ist es.",
                "<32>* ...\n* Frisk, wenn du bereit bist...",
                "<32>* Wenn Sie alle anderen gesehen haben, die Sie sehen wollten...",
                '<32>* ...',
                '<32>* Du weißt, was du tun musst.',
                "<32>* Andernfalls warte ich, bis Sie bereit sind."
            ],
            d1: ['<32>{#p/basic}* Asriel.'],
            d2: ['<25>{#p/asriel1}{#f/13}* ... Frisk?\n* Bist du das...?'],
            d3: ["<32>{#p/basic}* Asriel, ich bin’s...", '<32>{#p/basic}* Dein bester Freund. Weißt du noch...?'],
            d4: [
                '<25>{#p/asriel1}{#f/25}* ...!',
                '<25>{#f/25}* $(name)...?',
                "<25>{#f/13}* Aber... du bist...",
                "<25>{#f/23}* ... du bist..."
            ],
            d5: ['<32>{#p/basic}* Tot?'],
            d6: [
                '<32>{#p/basic}* Heh.\n* Lange Zeit ... wünschte ein Teil von mir, ich wäre es.',
                '<32>{#p/basic}* Nach dem, was ich dir angetan habe, hatte ich... ',
'<32>{#p/basic}* das Gefühl, ich hätte es verdient.'
            ],
            d7: ["<25>{#p/asriel1}{#f/7}* Sag das nicht, $(name)!", "<25>{#f/6}* ... du liegst falsch!"],
            d8: [
                '<33>{#p/basic}* Haha... schau mal, wer jetzt redet. ',
'<33>{#p/basic}* Herr „Geh einfach zu den Leuten, die dich lieben.“',
                '<32>* Aber du hast es verdient, die Wahrheit über mich zu erfahren, Asriel...',
                '<32>* Über alles.'
            ],
            d9: ['<25>{#p/asriel1}{#f/23}* ...', '<25>{#f/23}* $(name)...'],
            d10: ['<25>{#p/asriel1}{#f/13}* aber...', '<25>{#f/15}* Wie geht es dir noch...'],
            d11: [
                '<32>{#p/basic}* ... ist das wichtig?',
                '<32>* Du hattest Recht, mich damals zu vergessen.',
                "<32>* Die Wahrheit ist, ich war ein schrecklicher Mensch...",
                "<32>* Und ich bin nicht der Freund oder das Geschwister, das du dir gewünscht hast."
            ],
            d12: ['<25>{#p/asriel1}{#f/13}* $(name), Ich...'],
            d13: ["<32>{#p/basic}* Es ist in Ordnung, Asriel.", "<32>* Du musst es nicht besser darstellen, als es ist."],
            d14: ['<25>{#p/asriel1}{#f/22}* ...', '<25>{#f/22}* ... Warum jetzt?'],
            d15: [
                '<32>{#p/basic}* Nun...',
                '<32>* Ich dachte immer, die Menschheit sei nicht mehr zu retten.',
                '<32>* Dass, egal was passiert...',
                '<32>* Wenn du menschlich wärst... wärst du zum Fall in die Dunkelheit verurteilt.',
                '<32>* Aber nachdem ich Frisk auf ihrer Reise begleitet habe...',
                '<32>* Ich verstehe die Wahrheit.',
                '<32>* Die anderen Menschen... haben immer etwas getan, das es leicht machte, ',
'<32>* diese Wahrheit zu ignorieren.',
                "<33>* Sie griffen Menschen an oder, schlimmer noch, ließen sie... verschwinden.",
                '<32>* Aber nicht Frisk.',
                '<32>* Ganz gleich, mit welchen Schwierigkeiten sie konfrontiert waren, ',
'<32>* zeigten sie stets Freundlichkeit und Barmherzigkeit.',
                '<32>* Sie ... haben mir das Gegenteil bewiesen.',
                '<32>* Und jetzt, wegen dessen, weiß ich, dass es keine Entschuldigung dafür gibt, ',
'<32>* wie ich dich behandelt habe.',
                '<32>* Alles, was du durchgemacht hast, alles, was du verloren hast...',
                "<32>* Ich bin derjenige, der dafür verantwortlich ist."
            ],
            d16: ['<25>{#p/asriel1}{#f/13}* $(name)...', '<25>{#f/15}* Warst du die ganze Zeit bei Bewusstsein?'],
            d17: [
                '<32>{#p/basic}* ... Ja.\n* Ich schätze, das war ich.',
                '<32>* Das war meine Existenz, Asriel...\nSeitdem wir gestorben sind',
                "<32>* Und... es gibt noch etwas, das ich dir sagen muss"
            ],
            d18: ['<25>{#p/asriel1}{#f/21}* Was ist es?'],
            d19: [
                '<32>{#p/basic}* Erinnerst du dich, als wir zusammen das Kraftfeld überquert haben?',
                '<32>* Als wir bei den Ruinen der alten Heimatwelt ankamen und ',
'<32>* von diesen Menschen entdeckt wurden?',
                '<32>* Ich wollte unsere Macht nutzen, um sie zu zerstören... ',
'<32>* aber du hast mich aufgehalten, erinnerst du dich?“'
            ],
            d20: ['<25>{#p/asriel1}{#f/16}* ... Stimmt.'],
            d21: [
                "<32>{#p/basic}* Damals habe ich es nicht verstanden, aber...",
                '<32>* Jetzt verstehe ich es.',
                '<32>* ... Du hast nur versucht, mich davon abzuhalten... einen schrecklichen Fehler zu machen.'
            ],
            d22: ['<25>{#p/asriel1}{#f/15}* $(name)...'],
            d23: [
                "<32>{#p/basic}* Ohne dich wäre der outpost in einem zweiten Krieg zerstört worden.",
                '<32>* Ohne dich wären genau die Monster, die ich angeblich retten wollte',
                '<32>* ... zusammen mit uns gestorben.'
            ],
            d24: ['<25>{#p/asriel1}{#f/25}* $(name), Ich...'],
            d25: [
                '<32>{#p/basic}* Sogar jetzt zählt deine Entscheidung von damals noch.',
                '<32>* Sogar jetzt...',
                "<32>* Du bist immer noch ein besseres Geschwister für mich, als ich es je war."
            ],
            d26: [
                '<25>{#p/asriel1}{#f/25}* Ich vergebe dir, $(name)!',
                "<25>{#f/23}* Okay?\n* Du musst das nicht tun...",
                '<25>{#f/22}* Ich weiß, wie stark du damals gefühlt hast, und...',
                "<25>{#f/15}* Ich möchte nicht, dass du deine Meinung änderst, nur weil ich..."
            ],
            d27: [
                '<32>{#p/basic}* Nein.\n* Nicht mehr.',
                '<32>* Menschen KÖNNEN sich ändern, Asriel...',
                "<32>* War das nicht immer das, woran du geglaubt hast?"
            ],
            d28: ['<25>{#p/asriel1}{#f/13}* ... Das tue ich immer noch.'],
            d29: [
                "<32>{#p/basic}* Ich habe die letzten hundert Jahre damit verbracht, mich im Selbstmitleid zu suhlen.",
                '<32>* Ich habe die letzten hundert Jahre damit verbracht, einen Groll zu hegen, ',
'<32>* den ich niemals hätte haben sollen.',
                '<32>* All die Zeit habe ich mich gefragt, was mich am Leben gehalten hat...',
                '<32>* Und jetzt kenne ich endlich die Antwort.'
            ],
            d30: ['<25>{#p/asriel1}{#f/15}* ...?'],
            d31: ["<32>{#p/basic}* ... Es bist du, Asriel.", "<32>* Du bist derjenige, der mich am Leben gehalten hat."],
            d32: [
                '<32>{#p/basic}* Denk daran wie... ein unerfülltes Versprechen.',
                '<32>* Diesen Groll zu hegen... dich so zu denken, wie ich es getan habe...',
                "<32>* Zu wissen, dass ich für dich so viel mehr hätte sein können, als ich letztlich war.",
                "<32>* All die Zeit über war das das, was mich zurückgehalten hat."
            ],
            d33: ['<25>{#p/asriel1}{#f/23}* $(name)...'],
            d34: ['<32>{#p/basic}* Asriel.\n* Mein Bruder.', '<32>* Du verdienst es, die Wahrheit zu wissen.'],
            d35: ['<25>{*}{#p/asriel1}{#f/25}* Hä?\n* Aber du hast schon- {%}'],
            d36: ['<32>{#p/basic}* Ich vergebe dir auch.'],
            d37: ['<25>{#p/asriel1}{#f/30}{#i/4}* ...!', '<25>{#p/asriel1}{#f/26}{#i/4}* $(name)...'],
            d38: ['<32>{#p/basic}* Psst..', "<32>* Es ist in Ordnung.", "<32>* Ich hab dich, okay?"],
            d39: ['<25>{#p/asriel1}{#f/25}{#i/4}* Ich...'],
            d40: ["<32>{#p/basic}* Ich hab dich, Asriel."],
            d41: [
                '<32>{#p/basic}* ... Ich kann es fühlen.',
                '<32>* Selbst nachdem hundert Jahre vergangen sind...',
                "<32>* Er ist immer noch da, oder?“",
                '<32>* Wie ein kleiner Engel...',
                '<32>* Über mir wachend, mich vor meinen eigenen schlechten ',
'<32>* Entscheidungen beschützend...',
                '<32>* ... alles, damit ich ihm eines Tages den Gefallen erwidern könnte.'
            ],
            d42: ["<32>{#p/basic}* Es fängt jetzt alles an, Sinn zu machen.“", '<32>* Ich weiß, was ich tun muss.'],
            d43: ['<25>{*}{#p/asriel1}{#f/25}* Hä?\n* Was machst du...?{^60}{%}'],
            d44: ['<25>{*}{#f/25}* Nein...!{^60}{%}', '<25>{*}{#f/26}* L... Lass mich los!{^60}{%}'],
            d45: ['<32>{*}{#p/basic}* Heh...{^60}{%}', '<32>{*}* ... Pass auf Mama und Papa für mich auf, okay?{^60}{%}'],
            d46: ['<25>{#p/asriel1}{#f/25}* Frisk, bist du da?', '<25>{#f/22}* Bitte... Wach auf...'],
            d47: ["<25>{#p/asriel1}{#f/23}* Ich...\n* Ich will dich auch nicht verlieren..."],
            d48: ['<25>{#p/asriel1}{#f/17}* ... Da bist du ja.'],
            d49: [
                "<25>{#p/asriel1}{#f/23}* Ha... Ich dachte, ich hätte dich für einen Moment verloren.",
                "<25>{#f/22}* Verschreck mich nicht nochmal so, okay?",
                '<25>{#f/13}* ...'
            ],
            d50: [
                '<25>{#p/asriel1}{#f/13}* Nun...\n* Ich habe meine SEELE jetzt wieder in mir.',
                '<25>{#f/15}* Meine ursprüngliche.',
                '<25>{#f/16}* ...',
                '<26>{#f/16}* Als $(name) und ich starben, ',
'<26>{#f/16}* müssen sie sich um mich gewickelt haben...',
                '<25>{#f/13}* ... haben sie mich sicher gehalten, ',
'<25>{#f/13}* bis ich hierher zurückgebracht werden konnte.',
                '<26>{#f/17}* Sie haben die ganze Zeit über festgehalten, nur für die Chance, ',
'<26>{#f/17}* mich zu sehen, Frisk...',
                '<25>{#f/13}* ... das Mindeste, was ich tun kann, ist, es zu ehren.',
                '<25>{#f/15}* Das Leben leben, das sie immer für mich gewollt haben.'
            ],
            d51: [
                '<25>{#p/asriel1}{#f/23}* ... Frisk.',
                "<25>{#f/23}* Ich werde jetzt bei dir bleiben.",
                "<25>{#f/17}* Wo immer du hingehst... Ich werde dir folgen.",
                '<25>{#f/13}* Ich habe das Gefühl... ',
'<25>{#f/13}* Ich kann dir so etwas anvertrauen.',
                "<25>{#f/13}* Selbst wenn wir nicht viel übereinander wissen",
                "<25>{#f/15}* ... Ich weiß nicht.",
                '<25>{#f/15}* ...',
                '<25>{#f/13}* Frisk... Bist du dir wirklich sicher?',
                '<25>{#f/13}* All die Male, in denen ich dir wehgetan habe, ',
'<25>{#f/13}* deinen Freunden wehgetan habe...',
                "<25>{#f/22}* Es ist... alles, an das ich gerade denken kann.",
                '<25>{#f/21}* Sie immer wieder in meinem Kopf sterben zu sehen...',
                "<25>{#f/22}* Zu wissen, dass ich derjenige war, der es getan habe.",
                '<25>{#f/15}* ...',
                '<25>{#f/15}* Bist du dir wirklich sicher, ',
'<25>{#f/15}* dass du für jemanden wie mich da sein kannst?',
                '<32>{#p/human}* (...)',
                '<25>{#p/asriel1}{#f/15}* ...',
                "<25>{#f/17}* ... Ich glaube, ich verstehe dich einfach nicht, Frisk.",
                "<25>{#f/23}* Egal, was ich dir antue... du gibst einfach nicht nach.",
                '<25>{#f/22}* ...',
                "<25>{#f/13}* Hey.\n* Vielleicht wird es gar nicht so schlimm.",
                "<25>{#f/17}* Dass du bei mir bist, wird die Sache definitiv nicht verschlimmern.",
                '<25>{#f/13}* ...\n* Die Sache ist... ',
'<25>{#f/13}* Wenn ich jetzt hier bleibe...',
                "<25>{#f/15}* Es wäre nicht richtig gegenüber $(name)... weißt du?",
                '<25>{#f/13}* Und außerdem, mit meiner SEELE wieder in mir...',
                "<25>{#f/13}* Ich werde nicht wieder zu einem Stern werden.",
                "<25>{#f/13}* Also... es hat keinen Sinn, dass ich hier bleibe."
            ],
            d52: [
                '<25>{#p/asriel1}{#f/17}* Na dann.\nWir sollten besser losgehen.',
                '<25>{#f/20}* Deine Freunde machen sich wahrscheinlich schon Sorgen um dich.'
            ],
            e1: [
                '<25>{#p/asriel1}{#f/15}* ...',
                "<25>{#f/16}* Ich weiß nicht, was mit $(name) nach dem hier passieren wird.",
                "<25>{#f/13}* Sie haben festgehalten, um mich zu sehen, aber das ist...",
                '<25>{#f/15}* ... ist jetzt Vergangenheit.“'
            ],
            e2: [
                '<25>{#p/asriel1}{#f/13}* Ich kann immer noch nicht glauben, dass sie all ',
'<25>{#p/asriel1}{#f/13}* die Zeit gewartet haben, nur um mich zu sehen...',
                '<25>{#f/23}* Sturer Idiot.',
                '<25>{#f/17}* … das hätte ich gesagt, wenn ich immer noch ein sprechender Stern wäre.',
                "<25>{#f/13}* Aber… ich denke eigentlich nicht, dass sie ein Idiot sind."
            ],
            e3: [
                "<25>{#p/asriel1}{#f/13}* $(name) ist nicht dumm.\n* Und ich...",
                '<25>{#f/13}* Ich habe vielem zugestimmt, ',
'<25>{#f/13}* was sie über sich selbst gesagt haben...',
                '<25>{#f/15}* Dass sie nicht die Art von Freund sind, ',
'<25>{#f/15}* die ich mir gewünscht hätte...',
                "<25>{#f/7}* ... aber das heißt nicht, dass ich wollte, dass sie verschwinden!"
            ],
            e4: [
                "<25>{#p/asriel1}{#f/13}* Es ist ja nicht so, dass $(name) weggehen muss...",
                '<25>{#f/17}* Wenn sie wollten, könnten sie bei uns bleiben. ',
'<25>{#f/17}* Ich würde das gerne.',
                "<25>{#f/15}* Aber ich würde verstehen, wenn sie gehen wollten.",
                '<25>{#f/16}* Sie haben ihr Spiel \'gewonnen\'. ',
'<25>{#f/16}* Sie sollten nicht mehr mit mir \'spielen\' wollen'
            ],
            e5: [
                "<25>{#p/asriel1}{#f/13}* ... $(name)...\n* Wenn du noch da bist und zuhörst...",
                '<25>{#f/15}* Ich möchte, dass du weißt, dass ich dich liebe.',
                '<25>{#f/23}* Du warst vielleicht nicht die beste Person...',
                '<25>{#f/22}* Aber tief im Inneren hast du dich immer noch um mich gekümmert.'
            ],
            e6: [
                '<25>{#p/asriel1}{#f/23}* Ha...',
                '<25>{#f/22}* Ich komme mir wahrscheinlich gerade ',
'<25>{#f/22}* wie ein verrückter Mensch vor.',
                '<25>{#f/15}* Ich mache mir immer noch Gedanken über jemanden, ',
'<25>{#f/15}* von dem ich längst loslassen sollte...',
                '<26>{#f/17}* ... Ich schätze, $(name) und ich sind wirklich einfach nur ein  ',
'<26>{#f/17}*  Paar sturer Idioten.'
            ],
            e7: [
                '<25>{#p/asriel1}{#f/13}* Einmal haben $(name) und ich uns über ein Bett gestritten...',
                "<25>{#f/10}* Weil wir beide das Bett mit dem Nachttisch daneben haben wollten.",
                '<26>{#f/15}* Wir haben uns gegenseitig von der Seite geschubst und ',
'<26>{#f/15}* versucht, Platz zu machen...',
                '<25>{#f/4}* Das ganze Gerangel hat uns so müde gemacht, ',
'<25>{#f/4}* dass wir eingeschlafen sind.',
                '<25>{#f/13}* Aber als wir aufwachten...',
                '<25>{#f/17}* Lagen wir direkt nebeneinander.',
                "<25>{#f/13}* Ich wollte aufstehen, aber... sie wollten mich nicht loslassen.",
                '<26>{#f/15}* Sie haben immer wieder gesagt...',
                '<25>{#f/15}* \"... warm...\"',
                '<25>{#f/15}* \"... flauschig...“\"',
                '<25>{#f/20}* Ich hätte mich darüber beschwert, aber...',
                '<25>{#f/17}* ... zu diesem Zeitpunkt war ich einfach nur froh, ',
'<25>{#f/17}* dass wir nicht mehr stritten.'
            ],
            e8: [
                '<25>{#p/asriel1}{#f/13}* Ein anderes Mal haben $(name) und ich ',
'<25>{#p/asriel1}{#f/13}* für Mom und Dad Abendessen gemacht.',
                '<25>{#f/15}* Sie wollten es unbedingt schärfer machen...',
                '<25>{#f/3}* Ehrlich gesagt, wenn sie jetzt darauf bestehen würden, ',
'<25>{#f/3}* würde ich mich nicht beschweren.',
                '<25>{#f/20}* Ich könnte jetzt etwas scharfes vertragen.',
                '<25>{#f/13}* Aber damals stand ich mehr auf Süßes. ',
'<25>{#f/13}* Die meisten Monster tun das.',
                '<25>{#f/15}* Am Ende haben wir Tauziehen mit der ',
'<25>{#f/15}* Rührschüssel gespielt, und...',
                '<25>{#f/20}* Du kannst dir sicher vorstellen, wie das geendet hat.',
                '<25>{#f/17}* Mama hat uns natürlich den ganzen Schlamassel aufräumen lassen.',
                '<25>{#f/13}* Danach hat Papa uns essen gegangen, ',
'<25>{#f/13}* und wir haben beide bekommen, was wir wollten.'
            ],
            e9: [
                '<25>{#p/asriel1}{#f/15}* $(name) und ich... ',
'<25>{#p/asriel1}{#f/15}* Es war, als könnten wir uns auf nichts einigen...',
                '<25>{#f/20}* Außer darin, Zeit miteinander zu verbringen.',
                '<26>{#f/17}* Trotz unserer Unterschiede waren ',
'<26>{#f/17}* $(name) und ich wirklich unzertrennlich.',
                "<25>{#f/13}* Sogar der Tod selbst konnte uns nicht für immer trennen."
            ],
            e10: [
                "<25>{#p/asriel1}{#f/17}* ... Denkst du, sie sind immer noch da, Frisk?",
                '<25>{#f/17}* Wer weiß, vielleicht beobachten sie uns gerade jetzt.',
                "<25>{#f/23}* Wäre das nicht etwas.",
                "<25>{#f/22}* Aber es ist unmöglich, es mit Sicherheit zu wissen."
            ],
            e11: [
                "<25>{#p/asriel1}{#f/17}* Huch. \nFür jemanden, der bei dir bleiben wird...",
                '<25>{#f/20}* Ich lasse es wohl so klingen, ',
'<25>{#f/20}* als würde ich lieber mit $(name) zusammen sein.',
                "<25>{#f/13}* Aber... so ist es überhaupt nicht.",
                '<25>{#f/17}* Ich kann einfach nicht anders, als an jemanden zurückzudenken, ',
'<25>{#f/17}* den ich früher gekannt habe.'
            ],
            e12: () => [
                '<25>{#p/asriel1}{#f/17}* Frisk...\n* Ich möchte, dass du weißt.',
                '<25>{#f/13}* Vielen Dank...',
                '<25>{#f/23}* Ich habe das Gefühl, wieder eine Zukunft zu haben.',
                '<25>{#f/22}* ...',
                ...(!SAVE.flag.b.pacifist_marker_forgive
                    ? ["<25>{#f/22}* Auch wenn du mir nicht vergeben konntest, was ich getan habe..."]
                    : SAVE.flag.n.killed_sans > 0
                        ? ['<25>{#f/22}* Auch wenn ich wollte, dass du all diese ',
'<25>{#f/22}* schrecklichen Dinge tust...']
                        : ['<25>{#f/22}* Auch wenn ich dich gefoltert und allen, ',
'<25>{#f/22}* die du liebst, gedroht habe...']),
                '<25>{#f/13}* Du bist immer noch bereit, mir zu helfen, ',
'<25>{#f/13}* all das hinter mir zu lassen.',
                '<25>{#f/23}* ... Das bedeutet mir viel.',
                '<25>{#f/22}* ...',
                '<25>{#f/13}* Mom, Dad...',
                '<25>{#f/13}* Sans, Papyrus, Undyne, Alphys...',
                "<25>{#f/15}* Alle, die ich in früheren Realitäten getötet habe...",
                "<25>{#f/16}* ... Es wird schwer für mich sein, ihnen zu begegnen.",
                '<25>{#f/13}* ...',
                "<25>{#f/17}* Aber ich werde es versuchen.",
                "<25>{#f/23}* Ich werde versuchen, eine bessere Person zu sein.",
                '<25>{#f/22}* Und falls ich mal einen Fehler mache...',
                '<25>{#f/13}* ... weiß ich, dass du da sein wirst, um mir zu helfen, ',
'<25>{#f/13}* die Stücke wieder zusammenzusetzen.'
            ],
            e13: [
                '<25>{#p/asriel1}{#f/17}* Ha... $(name).',
                "<25>{#f/23}* Ich werde dich nicht enttäuschen, okay?",
                "<25>{#f/22}* Ich werde das Beste aus dieser Chance machen, die du mir gegeben hast.",
                "<25>{#f/17}* Ich werde es zählen lassen"
            ]
        },
        evac: ['<32>{#p/human}* (Du spürst, wie die Präsenz der nahegelegenen Monster schwindet.)'],
        stargum1: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* (Du hast ein Stück Kaugummi gesehen, das an dem Comicstrip befestigt war...)',
                    choicer.create('* (Den Kaugummi kauen?)', 'Ja', 'Nein')
                ]
                : [
                    '<32>{#p/basic}* Es war ein Stück Kaugummi an den Comicstrip geklebt.',
                    choicer.create('* (Den Kaugummi kauen?)', 'Ja', 'Nein')
                ],
        stargum2: ['<32>{#p/human}* (Du entscheidest dich, nicht zu kauen.)'],
        stargum3: ['<32>{#p/human}* (Du hast $(x) HP wiederhergestellt.)'],
        stargum4: ['<32>{#p/human}* (HP vollständig wiederhergestellt.)'],
        fireplace1: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* (Du spürst die einladende Wärme des Kamins...)',
                    choicer.create('* (Hineinkriechen?)', 'Ja', 'Nein')
                ]
                : [
                    SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? '<32>{#p/basic}* Ein gewöhnlicher Kamin.'
                        : "<32>{#p/basic}* Toriels Kamin.\n* Er ist nicht zu heiß, nur angenehm warm.",
                    ...(world.darker
                        ? []
                        : ['<32>* Du könntest wahrscheinlich hineinkriechen.', choicer.create('* (Hineinkriechen?)', 'Ja', 'Nein')])
                ],
        fireplace2a: ['<32>{#p/human}* (Du entscheidest dich dagegen, hineinzukriechen.)'],
        fireplace2b: () => [
            '<32>{#p/human}* (Du kriechst in den Kamin und lässt dich von seiner Wärme umhüllen.)',
            '<32>{#p/human}* (Du fühlst dich sehr wohl.)',
            ...(SAVE.data.b.svr
                ? asrielinter.fireplace2b++ < 1
                    ? ["<25>{#p/asriel1}{#f/13}* Ich werde einfach warten, bis du wieder rauskommst."]
                    : []
                : world.goatbro && SAVE.flag.n.ga_asrielFireplace++ < 1
                    ? ["<25>{#p/asriel2}{#f/15}* Ich werde einfach, äh, warten, bis du rauskommst..."]
                    : [])
        ],
        fireplace2c: ["<25>{#p/toriel}{#f/1}{#npc/a}* Bleib nicht zu lange da drinnen..."],
        fireplace2d: ['<32>{#p/basic}* ...', '<32>* Das ist in Ordnung.'],
        noticereturn: ['<25>{#p/asriel2}{#f/10}* Etwas, das du hier vermisst hast?'],
        noticestart: [
            '<25>{#p/asriel2}{#f/3}* Ah, der Ort, an dem alles begann.',
            "<25>{#p/asriel2}{#f/4}* Wir haben uns seitdem wirklich weiterentwickelt, nicht wahr, $(name)?"
        ],
        noticedummy: ['<25>{#p/asriel2}{#f/3}* ...', "<25>{#p/asriel2}{#f/10}* War hier nicht vorher ein Hampelmann...?"],
        afrog: {
            a: [
                '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                '<32>* Ich habe gesehen, wie die Ziegenfrau vor kurzem hier vorbeigekommen ist.',
                '<32>* Sie hatte Lebensmittel dabei, also habe ich sie gefragt, wofür sie, sie braucht, und...',
                "<32>* Du wirst überrascht sein."
            ],
            b: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                        '<32>* Ich habe die Ziegenfrau vorhin hier durchgehen sehen.',
                        '<32>* Sie sagte, es sei Zeit, „sich ihren Ängsten zu stellen.“',
                        '<32>* Naja, was auch immer sie getan hat, es hat offensichtlich zu etwas geführt! ',
'<32>* Wir sind jetzt alle frei!'
                    ]
                    : SAVE.data.n.plot === 71.2
                        ? [
                            '<32>{#p/basic}{#n1}* Hast du sie gesehen? \n* Sie kam gerade eben hier durch!',
                            '<32>* Sie sagte, es sei Zeit, „sich ihren Ängsten zu stellen.“',
                            '<32>* Ich frage mich, was sie wohl gemeint hat...? \n* Sie schien entschlossen.'
                        ]
                        : SAVE.data.b.w_state_lateleave
                            ? [
                                '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                                '<32>* Ich habe gesehen, wie die Ziegenlady mit dem Taxi zum Supermarkt gefahren ist.',
                                "<32>* Sie sagte, sie würde Milch kaufen, aber sie ist immer noch nicht zurückgekommen...",
                                "<32>* Ich hoffe, es geht ihr gut..."
                            ]
                            : [
                                '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                                "<32>* Manchmal, wenn ich alleine bin, fahre ich gerne mit dem Taxi zum Marktplatz.",
                                '<32>* Es ist ein kleines, gemütliches Geschäft, ',
'<32>* aber es gibt jede Menge Sachen zu kaufen.',
                                "<32>* Vielleicht nehme ich dich irgendwann mal dorthin... du würdest es lieben!"
                            ],
            c: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                        "<32>* Ich bin nicht gerade ein Fan davon, wie du uns damals alle verprügelt hast.",
                        '<32>* Wir waren alle so ängstlich und verwirrt...',
                        '<32>* ... wenigstens hast du am Ende etwas Gutes getan.'
                    ]
                    : [
                        '<32>{#p/basic}{#n1}* Nur zwischen dir und mir...',
                        "<32>* Die Leute, die du geschlagen hast, sind nicht glücklich darüber.",
                        "<32>* Sei einfach froh, dass ich gerade nicht im Dienst bin...\n* Sonst...",
                        "<32>* ...hätte ich deinen Kopf."
                    ],
            d: ['<32>{#p/basic}{#n1}* Nein... nein!', '<32>* G-geh weg von mir!']
        },
        asriel0: [
            '<25>{#p/asriel2}{#f/5}* ... aber das ist okay, ich weiß, ',
'<25>{#p/asriel2}{#f/5}* dass du rechtzeitig da sein wirst!',
            "<25>{#p/asriel2}{#f/1}* Du würdest mich doch nicht enttäuschen wollen, oder?"
        ],
        asriel1: () =>
            [
                [
                    '<25>{#p/asriel2}{#f/2}* Entschuldige, ich musste Toriels Telefon benutzen, ',
'<25>{#p/asriel2}{#f/2}* um jemanden anzurufen.',
                    "<25>{#p/asriel2}{#f/1}* Mach dir keine Sorgen...\n* Du wirst schon bald herausfinden, warum.",
                    "<25>{#p/asriel2}{#f/2}* ... hee hee hee.\n* Ich werde vorne auf dich warten."
                ],
                ["<25>{#p/asriel2}{#f/4}* Ich werde vorne auf dich warten."],
                ['<25>{#p/asriel2}{#f/3}* ...']
            ][Math.min(SAVE.flag.n.ga_asrielNegative1++, 1)],
        asriel2: () => [
            '<25>{#p/asriel2}{#f/1}* Bereit, $(name)?',
            '<25>{#f/2}* \'Denn sobald wir vorwärtsgehen, ',
'<25>{#f/2}* gibt es kein Zurück mehr.',
            choicer.create('* (Ihm folgen?)', 'Ja', 'Nein')
        ],
        asriel2b: () => ['<25>{#p/asriel2}{#f/1}* Bereit?', choicer.create('* (Ihm folgen?)', 'Ja', 'Nein')],
        asriel3: ['<25>{#p/asriel2}{#f/2}* Okay...', "<25>{#f/1}* Lass uns das tun."],
        asriel4: ["<25>{#p/asriel2}{#f/4}* Dann werde ich warten."],
        asrielDiary: [
            [
                '<32>{#p/human}* (Du schlägst die erste Seite auf... die Wörter sind kaum zu entziffern.)',
                '<32>{#p/asriel1}{#v/2}* \"Ich starte ein Teegebuct weil Mama gesagt hat es wäre spaßig\"',
                '<32>* \"Heute hab ich gelarnt wie man Samen in Papas Garten pflanzt\"',
                '<32>* \"Er sagt sie werden bald wachsen aber es wird eine lange Ziet dauern\"',
                '<32>* \"Mama wird heute Abeud Schneckenpastete machen und ich bin so aufgeregf\"',
                '<32>* \"Abgesehen davon habe ich einen guten Tag.\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur zweiten Seite...)',
                '<32>{#p/asriel1}{#v/2}* \"Azzys Teegebuckt, K-504\"',
                '<32>* \"Mama sagte, ich sol das Datum aufschreiben, damit die Leuta wissen, ',
'<32>* wann ich es geschreben habe.\"',
                '<32>* \"Meine Sternemblume ist immer noch nicht gewachsen aber Papa ',
'<32>* verspricht dass sie bald wachsen witd\"',
                '<32>* \"Ich wünschte es gäbe ein Fenster in meinem Zimme aber Papa sagte ',
'<32>* dass hier Rohrleitungen sind\"',
                '<32>* \"Sie sagten sie würden aber ein Fenster ins Wohnzimme eimbauen\"',
                '<32>* \"Ich hab heute auch einen schönen Tag.\"'
            ],
            [
                '<32>{#p/human}* (Du schlägst die dritte Seite auf... ',
'<32>{#p/human}* es scheint, als wären ein paar Jahre vergangen.)',
                '<32>{#p/asriel1}{#v/2}* \"Azzys Tagebuch, K-506.03.\"',
                '<32>* \"Mein altes Tagebuch lag in einer Spielzeugkiste, und ich wollte mehr hineinschreiben.',
                '<32>* \"Sieht so aus, als hätte ich beim letzten Mal nur den ersten Teil des Datums geschrieben.\"',
                '<32>* \"Übrigens, die Starenblume, die ich vorher gepflanzt habe, ist gewachsen.\"',
                '<32>* \"Aber ich hatte neulich einen Streit mit einem Freund, ',
'<32>* und wir haben seitdem nicht mehr gesprochen.\"',
                '<32>* \"Ich mache mir Sorgen um sie... Ich hoffe, sie sind nicht immer noch wütend.\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur vierten Seite um...)',
                '<32>{#p/asriel1}{#v/2}* \"Azzys Tagebuch, K-506.03\"',
                '<32>* \"Ich habe mit meinem Freund gesprochen, sie sagen, dass sie nicht mehr verärgert sind, ',
'<32>* also ist das gut.',
                '<32>* \"Mama und ich haben den Himmel draußen beobachtet und ',
'<32>* wir haben eine Sternschnuppe gesehen.\"',
                '<32>* \"Sie sagte, ich solle mir etwas wünschen... ',
'<32>* Ich wünschte mir, dass eines Tages ein Mensch herunterkommt.\"',
                '<32>* \"Mama und Papa erzählen so viele Geschichten über sie...\"',
                '<32>* \"Sie können doch nicht alle schlecht sein, oder?\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur fünften Seite um...)',
                '<32>{#p/asriel1}{#v/2}* \"Azzys Tagebuch, K-506.03\"',
                '<32>* \"Nicht viel zu sagen heute.\"',
                '<32>* \"Vielleicht ist diese Tagebuchidee wirklich albern.\"',
                '<32>* \"Mama hat mich neulich dabei gesehen, wie ich darin schrieb, und gesagt, ',
'<32>* dass sie stolz auf mich ist.\"',
                '<32>* \"Ist es wirklich so wichtig?\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur sechsten Seite... ',
'<32>{#p/human}* es scheint, als seien wieder ein paar Jahre vergangen.)',
                '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Tagebuch, K-510.08\"',
                '<32>* \"Es scheint, als könnte ich nicht zu lange am Stück in diesem Ding schreiben.\"',
                '<32>* \"Aber heute habe ich das Buch wieder gesehen ',
'<32>* und beschlossen, noch etwas mehr darin zu schreiben.\"',
                '<32>* \"Die letzten paar Jahre waren gut, ich bin zur Schule gegangen ',
'<32>* und habe viele Dinge gelernt.\"',
                '<32>* \"Wie man Zahlen addiert.\"\n* \"Und wie man einen Computer benutzt.\"',
                '<32>* \"Mama hat gesagt, dass ich zu jung bin, um ein Online-Konto zu machen.\"',
                '<32>* \"Vielleicht kann ich eines Tages eines haben, wenn ich älter bin.\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur siebten Seite um...)',
                '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Tagebuch, K-510.08.\"',
                '<32>* \"Der schlaue Typ hat heute wieder vorbeigeschaut. ',
'<32>* Er sagte, er hätte einen Albtraum über einen Menschen gehabt.\"',
                '<32>* \"Oh, habe ich ihn erwähnt? Er ist die Wissenschaftsperson, mit der Papa oft spricht.\"',
                '<32>* \"Er hat viele Dinge erfunden, die wir jetzt benutzen.\"',
                '<32>* \"Wie die Replikatoren, Fabrikatoren und Schwebetellergeschichten.\"',
                '<32>* \"Aber er hat mich ganz komisch angeschaut, als ob ich so beängstigend wäre.\"',
                '<32>* \"Habe ich etwas falsch gemacht?\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur achten Seite um...)',
                '<32>{#p/asriel1}{#v/1}* \"Azzy\'s Tagebuch, K-510.08.\"',
                '<32>* \"Ein neuer Stern ist heute am Himmel erschienen.\"',
                '<32>* \"Ein wirkllch heller.\"',
                '<32>* \"Ich frage mich, warum nicht ständig mehr Sterne so erscheinen.\"',
                '<32>* \"Außerdem werden wir in die neue Zitadelle ziehen, sobald sie fertig ist.\"',
                '<32>* \"Ich habe die Baupläne gesehen, und es sieht jetzt schon erstaunlich aus!\"',
                '<32>* \"Es wird viel besser sein, als in der factory zu wohnen.\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur neunten Seite... scheint, als wäre ein Tag übersprungen worden.)',
                '<32>{#p/asriel1}{#v/1}* \"Azzys Tagebuch, K-510.09.\"',
                '<32>* \"Ich habe gestern einen echten Menschen getroffen. ',
'<32>* Sie ist im Müllbereich in der Nähe unseres Hauses abgestürzt.\"',
                '<32>* \"Ich half ihr aus dem Wrack und sie sagte danke.\"',
                '<32>* \"Ich hätte nie gedacht, dass es passieren würde, aber hier sind sie.\"',
                '<32>* \"Und sie sind tatsächlich he{#p/basic}f{#p/asriel1}{#v/1}h{#p/basic}sj haha, Azzy ist ein stinkender Arsch und he{#p/asriel1}{#v/1}vh{#p/basic}v{#p/asriel1}{#v/1}j{#p/basic}a{#p/asriel1}{#v/1}s\"',
                '<32>* \"Okay, also ich verstecke mich gerade unter der Decke, ',
'<32>* damit $(name) nicht durcheinanderbringt, was ich schreibe.\"',
                '<32>* \"Manchmal können sie ein bisschen gemein sein, aber das ist okay.\"',
                '<32>* \"Mama hat dieses Kampf-Ding mit ihnen gemacht, und ihr Herz war rot und stand auf dem Kopf.\"',
                '<32>* \"Es ist wirklich schön, jeden Tag mit jemandem zu sprechen.\"'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur zehnten Seite um...)',
                '<32>{#p/asriel1}{#v/1}* \"Azzys Tagebuch, K-510.09.\"',
                '<32>* \"Mama hat gesagt, dass sie $(name) in die Familie adoptieren wird.\"',
                '<32>* \"Ich weiß nicht, was \"adoptieren\" bedeutet, aber sie sagte, ',
'<32>* ich werde wie ihr Bruder sein.\"',
                '<32>* \"Aber das ist gut, weil ich dann mehr Zeit mit ihnen verbringen kann.\"',
                '<32>* \"$(name) und ich werden alles zusammen machen!\"',
                '<32>* \"Auch hat sie sich für das entschuldigt, ',
'<32>* was auf der letzten Tagebuchseite passiert ist\"',
                '<32>* \"Ich habe es ihnen noch nicht gesagt, aber ich verzeihe ihnen.\"',
                '<32>{#p/basic}* ...'
            ],
            [
                '<32>{#p/human}* (Du blätterst zur elften Seite um.)',
                '<32>{#p/asriel1}* \"Asriel\'s Tagebuch, K-515.09\"',
                '<32>* \"$(name) hat gesagt, es ist Zeit für den Plan.\"',
                '<32>* \"Ich hatte Angst, aber sie sagten, ich könnte es tun.\"',
                '<32>* \"Nach diesem Eintrag werde ich auf sie warten, bis sie den vergifteten Kuchen essen, ',
'<32>* den wir gemacht haben...\"',
                '<32>* \"Und dann können wir alle zusammen retten.\"',
                '<32>* \"Falls etwas schiefgeht und du das später liest...\"',
                '<32>* \"Ich möchte, dass du weißt, dass du die Beste bist, $(name).\"',
                '<32>{#p/basic}* ...',
                '<32>{#p/human}* (Es klingt, als würde jemand weinen...)'
            ]
        ],
        backdesk: {
            a: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* Da hängt ein Rucksack an diesem Garderobenständer."]),
                '<32>{#p/human}* (Du schaust in den Rucksack...)',
                ...(SAVE.data.b.svr
                    ? ['<32>{#p/human}* (Aber es war nichts mehr darin zu finden.)']
                    : ['<32>{#p/basic}* Nichts mehr hier zu finden.'])
            ],
            b: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* Da hängt ein Rucksack an diesem Garderobenständer."]),
                '<32>{#p/human}* (Du schaust in den Rucksack...)',
                ...(SAVE.data.b.svr
                    ? []
                    : ['<32>{#p/basic}* Was ist das? ',
'<32>{#p/basic}* Ein Comicstrip der limitierten Ausgabe von Super Sternwanderer?']),
                '<32>{#s/equip}{#p/human}* (Du hast den Super Sternwanderer 2 erhalten.)'
            ],
            b2: () => [
                ...(SAVE.data.b.svr ? [] : ["<32>{#p/basic}* Da hängt ein Rucksack an diesem Garderobenständer."]),
                '<32>{#p/human}* (Du schaust in den Rucksack...)',
                ...(SAVE.data.b.svr
                    ? []
                    : ['<32>{#p/basic}* Was ist das? ',
'<32>{#p/basic}* Ein Comicstrip der limitierten Ausgabe von Super Sternwanderer?']),
                "<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"
            ]
        },
        midsleep: () => [
            '<32>{#p/human}* (Wenn du jetzt hier schläfst, könntest du etwas Wichtiges verpassen.)',
            choicer.create('* (Schlafen gehen?)', 'Ja', 'Nein')
        ],
        bedfailToriel: [
            '<25>{#p/toriel}{#f/5}* Oh je.',
            '<25>{#f/1}* Vielleicht haben meine Handlungen mehr Schaden angerichtet, ',
'<25>{#f/1}* als ich ursprünglich dachte...',
            '<25>{#f/0}* ...\n* Sorge dich nicht, mein Kind.',
            '<25>* Ich werde dafür sorgen, dass du gut schlafen kannst für die Reise, ',
'<25>* die vor dir liegt.',
            '<32>{#p/human}* (Toriel setzt sich neben dich und singt ein Wiegenlied, um dich in den Schlaf zu wiegen.)'
        ],
        blooky1: () => [
            '<32>{#p/napstablook}* Zzz... Zzz...',
            '<32>* Zzz... Zzz...',
            "<32>{#p/basic}* Dieser Geist sagt immer wieder laut \"z\", als würde er schlafen.",
            choicer.create('* (Möchtest du versuchen, hindurchzugehen?)', 'Ja', 'Nein')
        ],
        blooky2: () => [
            '<32>{#p/basic}* Der Geist blockiert immer noch den Weg.',
            choicer.create('* (Möchtest du versuchen, hindurchzugehen?)', 'Ja', 'Nein')
        ],
        blooky3: [
            '<32>{#p/napstablook}* Ich besuche diesen Ort normalerweise, um etwas Ruhe und Frieden zu finden...',
            '<32>* Aber heute habe ich jemanden Nettes getroffen...',
            "<32>* Nun, ich werde dir jetzt nicht im Weg stehen.",
            '<32>* cya...'
        ],
        blooky4: [
            '<32>{#p/napstablook}* Also, ähm...\n* Du magst mich wirklich, hm?',
            '<32>* Heh... danke...',
            '<32>* Und, äh... entschuldige, dass ich dir vorher im Weg war...',
            "<32>* Ich werde jetzt woanders hingehen.",
            "<32>* Aber... mach dir keine Sorgen...",
            "<32>* Du wirst mich später wiedersehen...",
            '<32>* Wenn du willst...',
            '<32>* Bis dann...'
        ],
        blooky5: [
            '<32>{#p/napstablook}* Also, ähm... du verachtest mich wirklich, hm?',
            "<32>* Das... ist nett...",
            "<32>* Na gut, dann werde ich mal weiterziehen.",
            '<32>* Tschüss...'
        ],
        blooky6: [
            '<32>{#p/napstablook}* Also, äh... das ist passiert...',
            '<32>* ...',
            '<32>* Äh... ich muss jetzt gehen.',
            '<32>* cya...'
        ],
        blooky7: [
            "<32>{#p/napstablook}* Du hast noch nicht mal etwas zu mir gesagt...",
            "<32>* Das... ich weiß nicht einmal, was das ist...",
            "<32>* Na gut, ich werde jetzt gehen.",
            '<32>* Tschüss...'
        ],
        breakfast: ['<32>{#p/human}* (Du hast die Gebratenen Schnecken bekommen.)'],
        breakslow: ["<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"],
        candy1: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* (Du näherst dich dem Verkaufsautomaten.)',
                    choicer.create('* (Was wirst du machen?)', 'Süßigkeiten', 'Wasser', 'Δ-9', 'Nichts')
                ]
                : [
                    '<32>{#p/basic}* Mit dem Automaten etwas synthetisieren?',
                    choicer.create('* (Was wirst du machen?)', 'Süßigkeiten', 'Wasser', 'Δ-9', 'Nichts')
                ],
        candy2: ['<32>{#p/human}* (Du hast $(x) erhalten.)\n',
'<32>* (Drücke [C], um das Menü zu öffnen.)'],
        candy3: ['<32>{#p/human}* (Du hast $(x) erhalten.)'],
        candy4: () => [
            '<32>{#p/human}* (Du hast $(x) erhalten.)',
            ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* Die Maschine beginnt, Fehlfunktionen zu zeigen.'])
        ],
        candy5: () => [
            '<32>{#p/human}* (Du hast $(x) erhalten.)',
            ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* Die Maschine ist kaputt gegangen.'])
        ],
        candy6: () =>
            SAVE.data.b.svr
                ? [
                    [
                        '<25>{#p/asriel1}{#f/13}* Schon wieder außer Betrieb?',
                        "<25>{#f/17}* Ja, das ist ... eigentlich Absicht.",
                        "<25>{#f/13}* Diese Maschine läuft mit der eigenen Stromversorgung der Outlands, also...",
                        '<25>{#f/15}* Um zu vermeiden, dass zu viel Energie verbraucht wird, ',
'<25>{#f/15}* hat Toriel die Maschine einfach dazu gebracht, ',
'<25>{#f/15}* sich selbst zu zerstören.',
                        "<26>{#f/20}* Nicht, dass sie es dir erzählen würde."
                    ],
                    [
                        '<25>{#p/asriel1}{#f/13}* Der Grund, warum die Energieversorgung so klein ist, ',
'<25>{#p/asriel1}{#f/13}* liegt darin...',
                        '<25>{#f/17}* Es liegt daran, dass es im Gegensatz zum CORE ',
'<25>{#f/17}* nur Hintergrundstrahlung verwendet.',
                        "<25>{#f/13}* Um es in Zahlen zu fassen, würde ich sagen...",
                        '<25>{#f/15}* Es erzeugt etwa zehntausendstel der Leistung, ',
'<25>{#f/15}* die der CORE erzeugt.'
                    ],
                    [
                        '<25>{#p/asriel1}{#f/13}* Hmm...',
                        '<25>{#f/15}* Ich frage mich, ob, trotz seiner niedrigen Kapazität...',
                        '<25>{#f/13}* Dieser Generator würde ausreichen, ',
'<25>{#f/13}* um ein kleines atmosphärisches System mit Energie zu versorgen.',
                        '<25>{#f/17}* Wenn der CORE zerstört würde, ',
'<25>{#f/17}* könnte man hier überleben...?'
                    ],
                    ['<26>{#p/asriel1}{#f/20}* ... fragt für einen Freund.']
                ][Math.min(asrielinter.candy6++, 3)]
                : ["<32>{#p/basic}* Es ist außer Betrieb."],
        candy7: ['<32>{#p/human}* (Du entscheidest dich, nichts zu machen.)'],
        candy8: ["<32>{#p/human}* (Du trägst zu viel.)"],
        chair1a: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Was ist los, mein Kind?\n* Hast du Hunger?',
            '<25>{#f/0}* Vielleicht möchtest du mehr über das Buch erfahren, ',
'<25>{#f/0}* das ich gerade lese.',
            choicer.create('{#n1!}* (Was antwortest du?)', 'Hungrig', 'Buch', 'Zuhause', 'Nichts')
        ],
        chair1b: () => [
            '<25>{#p/toriel}{#n1}* Was ist los, mein Kind?',
            choicer.create('{#n1!}* (Was antwortest du?)', 'Hungrig', 'Buch', 'Zuhause', 'Nichts')
        ],
        chair1c: ['<25>{#p/toriel}{#n1}* Lass es mich wissen, wenn du etwas brauchst.'],
        chair1d: ['<25>{#p/toriel}{#n1}* Lass es mich wissen, wenn du deine Meinung änderst.'],
        chair1e: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Unruhige Nacht?',
            '<25>{#f/1}* ... ',
'<25>{#f/1}* Wenn du möchtest, kann ich dir dieses Buch vorlesen...',
            '<25>{#f/0}* Es heißt \"Der großzügige Monster\" ',
'<25>{#f/0}* und wurde von einem Menschen geschrieben.',
            choicer.create('{#n1!}* (Liest du das Buch?)', 'Ja', 'Nein')
        ],
        chair1f: pager.create(
            0,
            ['<25>{#p/toriel}{#n1}{#f/1}* Zurück für einen Besuch?', '<25>{#f/0}* Nun, fühl dich frei, so lange zu bleiben, wie du brauchst.'],
            ['<26>{#p/toriel}{#n1}{#f/5}* Ich werde hier bleiben, wie ich es immer getan habe...']
        ),
        chair2a1: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Hast du Hunger?\n* Möchtest du, dass ich dir Frühstück mache?',
            choicer.create('{#n1!}* (Frühstücken?)', 'Ja', 'Nein')
        ],
        chair2a2: ['<25>{#p/toriel}{#n1}* Wunderbar! ',
'<25>{#p/toriel}{#n1}* Ich werde in der Küche das Frühstück zubereiten.'],
        chair2a3: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Hast du deine Meinung über das Frühstück geändert?',
            choicer.create('{#n1!}* (Frühstücken?)', 'Ja', 'Nein')
        ],
        chair2a4: () =>
            SAVE.data.b.drop_snails
                ? [
                    '<25>{#p/toriel}{#f/3}{#n1}* Du erwartest, dass ich dir ein neues mache, ',
'<25>{#p/toriel}{#f/3}{#n1}* nachdem du das erste fallen gelassen hast?',
                    '<25>{#f/4}* Dieses Kind...',
                    '<25>{#f/0}* Nein, Kleines.\n* Ich werde kein weiteres Frühstück zubereiten.'
                ]
                : [
                    '<25>{#p/toriel}{#n1}* Ich habe das Frühstück bereits serviert, Kleines.',
                    '<25>{#f/1}* Wir können doch nicht mehr als ein Frühstück ',
'<25>{#f/1}* pro Tag haben, oder?',
                    '<25>{#f/0}* Das wäre doch albern.'
                ],
        chair2c1: () => [
            '<25>{#p/toriel}{#n1}* Ah, das Buch! ',
'<25>{#p/toriel}{#n1}* Ja, es ist eine recht unterhaltsame kleine Lektüre.',
            '<25>{#f/0}* Es heißt \"Der großzügige Monster\" ',
'<25>{#f/0}* und wurde von einem Menschen geschrieben.',
            '<25>{#f/1}* Möchtest du, dass ich es dir vorlese?',
            choicer.create('{#n1!}* (Liest du das Buch?)', 'Ja', 'Nein')
        ],
        chair2c2: ['<25>{#p/toriel}{#n1}* Wunderbar!', '<25>{#g/torielCompassionSmile}* ...'],
        chair2c3: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Möchtest du, dass ich dir das Buch jetzt vorlese?',
            choicer.create('{#n1!}* (Liest du das Buch?)', 'Ja', 'Nein')
        ],
        chair2c4: () => [
            '<25>{#p/toriel}{#f/1}{#n1}* Möchtest du, dass ich dir das Buch noch einmal vorlese?',
            choicer.create('{#n1!}* (Liest du das Buch?)', 'Ja', 'Nein')
        ],
        chair2c5: ['<25>{#p/toriel}{#f/1}{#n1}* Na gut, dann...', '<25>{#p/toriel}{#g/torielCompassionSmile}* ...'],
        chair2c6: [
            '<25>{#f/1}{#n1}* \"Es war einmal ein Monster...\"',
            '<25>{#f/0}* \"Und sie liebte einen kleinen Menschen.\"',
            '<25>{#f/1}* \"Und jeden Tag kam der Mensch zu Besuch...\"',
            '<25>{#f/0}* \"Und sie liefen und spielten zusammen auf den Feldern.\"',
            '<25>{#f/1}* \"Sie sangen zusammen Lieder, erzählten sich Geschichten...\"',
            '<25>{#f/0}* \"Und sie spielten Verstecken.\"',
            '<25>{#f/1}* \"Und wenn der Mensch müde war, legte sie ihn ins Bett...\"',
            '<25>{#f/0}* \"Und der Mensch liebte das Monster sehr.\"',
            '<25>{#f/0}* \"Und das Monster war glücklich.\"',
            '<25>{#f/1}* \"Doch mit der Zeit wurde der Mensch älter...\"',
            '<25>{#f/0}* \"Das Monster wurde oft allein gelassen.\"',
            '<25>{#f/1}* \"Dann, eines Tages, kam der Mensch zurück...\"',
            '<25>{#f/0}* \"Und das Monster sagte: \'Komm, Mensch, komm und spiel mit mir!\'\"',
            '<25>{#f/5}* \"\'Ich bin zu groß, um zu spielen,\' sagte der Mensch.\"',
            '<25>{#f/1}* \"\'Ich möchte fortgehen, ein neues Zuhause finden...\'\"',
            '<25>{#f/5}* \"\'Tut mir leid,\' sagte das Monster, ',
'<25>{#f/5}* \'aber ich bin zu arm, um ein Auto zu besitzen.\'\"',
            '<25>{#f/5}* \"\'Alles, was ich habe, sind meine eigenen zwei Füße.\'\"',
            '<25>{#f/0}* \"\'Kletter auf meinen Rücken, und ich kann dich dorthin bringen, ',
'<25>{#f/0}* wo du hin musst.\'\"',
            '<25>{#f/0}* \"\'Dann kannst du die Stadt sehen und glücklich sein.\'\"',
            '<25>{#f/1}* \"Und so kletterte der Mensch auf den Rücken des Monsters...\"',
            '<25>{#f/0}* \"Und das Monster brachte sie zu einem neuen Zuhause.\"',
            '<25>{#f/0}* \"Und das Monster war glücklich.\"',
            '<25>{#f/1}* \"Doch der Mensch blieb lange weg...\"',
            '<25>{#f/5}* \"Und das Monster war traurig.\"',
            '<25>{#f/0}* \"Dann, eines Tages, kam der Mensch zurück.\"',
            '<25>{#f/1}* \"Und das Monster lächelte von Ohr zu Ohr und sagte...\"',
            '<25>{#f/1}* \"\'Komm, Mensch, komm und reite auf meinem Rücken!\'\"',
            '<25>{#f/5}* \"\'Ich bin zu traurig, um herumzureiten,\' sagte der Mensch.\"',
            '<25>{#f/1}* \"\'Ich wünschte, ich hätte eine Familie und eigene Kinder...\'\"',
            '<25>{#f/5}* \"\'Es tut mir leid,\' sagte das Monster, ',
'<25>{#f/5}* \'aber das kann ich dir nicht geben.\'\"',
            '<25>{#f/5}* \"\'Ich bin nur eine Person.\'\"',
            '<25>{#f/0}* \"\'Bleib eine Weile, und wir finden jemanden für dich.\'\"',
            '<25>{#f/0}* \"\'Dann kannst du die Liebe finden und glücklich sein.\'\"',
            '<25>{#f/1}* \"Und so besuchte der Mensch seinen ',
'<25>{#f/1}* alten Freund für eine Weile...\"',
            '<25>{#f/0}* \"Und das Monster fand jemanden für sie, den sie mögen könnten.\"',
            '<25>{#f/0}* \"Und das Monster war glücklich.\"',
            '<25>{#f/5}* \"Doch der Mensch blieb lange weg.\"',
            '<25>{#f/1}* \"Als sie schließlich zurückkamen, ',
'<25>{#f/1}* war das Monster so glücklich...\"',
            '<25>{#f/9}* \"Sie konnte kaum sprechen.\"',
            '<25>{#f/1}* \"\'Komm, Mensch,\' flüsterte sie...\"',
            '<25>{#f/1}* \"\'Komm und besuche mich.\'\"',
            '<25>{#f/5}* \"\'Ich bin zu alt und beschäftigt, um zu besuchen,\' ',
'<25>{#f/5}* sagte der Mensch.\"',
            '<25>{#f/1}* \"\'Ich möchte einen Ort, um mich für die Nacht auszuruhen...\'\"',
            '<25>{#f/5}* \"\'Es tut mir leid,\' sagte das Monster, ',
'<25>{#f/5}* \'aber ich habe kein Bett in deiner Größe.\'\"',
            '<25>{#f/5}* \"\'Ich bin immer noch zu arm, um mir eins leisten zu können.\'\"',
            '<25>{#f/0}* \"\'Schlaf mit mir für die Nacht.\'\"',
            '<25>{#f/0}* \"\'Dann kannst du dich ausruhen und glücklich sein.\'\"',
            '<25>{#f/1}* \"Und so kuschelten der Mensch und das Monster zusammen...\"',
            '<25>{#f/0}* \"Und das Monster konnte den Menschen in den Schlaf wiegen.\"',
            '<25>{#f/0}* \"Und das Monster war glücklich.\"',
            '<25>{#f/5}* \"... aber nicht wirklich.\"',
            '<25>{#f/9}* \"Und nach langer Zeit kam der Mensch wieder zurück.\"\n',
            '<25>{#f/5}* \"\'Es tut mir leid, Mensch,\' sagte das Monster, ',
'<25>{#f/5}* \'aber ich bin hingefallen.\'\"',
            '<25>{#f/5}* \"\'Meine Beine versagen, ich kann dich nirgendwo hinbringen.\'\"',
            '<25>{#f/10}* \"\'Überall, wo du bist, will ich sein,\' sagte der Mensch.\"',
            '<26>{#f/5}* \"\'Ich kann dir niemanden finden, ich kenne sonst niemanden,\' ',
'<26>{#f/5}* sagte das Monster.\"',
            '<25>{#f/10}* \"\'Es gibt niemanden sonst, mit dem ich sein möchte,\' ',
'<25>{#f/10}* sagte der Mensch.\"',
            '<25>{#f/5}* \"\'Ich bin zu schwach, damit du auf mir schlafen kannst,\' ',
'<25>{#f/5}* sagte das Monster.\"',
            '<25>{#f/10}* \"\'Ich brauche keinen Schlaf mehr,\' sagte der Mensch.\"',
            "<25>{#f/5}* \"'Es tut mir leid,' seufzte das Monster.\"",
            '<25>{#f/5}* \"\'Ich wünschte, ich hätte etwas zu bieten, ',
'<25>{#f/5}* aber ich habe nichts mehr.\'\"',
            '<25>{#f/9}* \"\'Ich bin nur ein altes Monster, das ihrem Ende entgegengeht.\'\"',
            '<25>{#f/5}* \"\'Es tut mir leid...\'\"',
            '<25>{#f/10}* \"\'Ich brauche jetzt nicht mehr viel,\' sagte der Mensch.\"',
            '<25>{#f/10}* \"\'Nur eine Umarmung von meinem besten Freund, bevor ich sterbe.\'\"',
            '<25>{#f/1}* \"\'Nun gut,\' sagte das Monster und richtete sich auf...\"',
            '<25>{#f/0}* \"\'Nun, ein altes Monster ist dafür immer da.\'\"',
            '<25>{#f/0}* \"\'Komm, Mensch, komm zu mir. Sei ein letztes Mal bei mir.\'\"',
            '<25>{#f/9}* \"Und so tat es der Mensch.\"',
            '<25>{#f/10}* \"Und das Monster war glücklich.\"'
            
        ],
        chair2c7: ['<25>{#f/0}{#n1}* Nun, das war die Geschichte.', '<25>{#f/1}* Ich hoffe, es hat dir gefallen...'],
        chair2c8: ['<25>{#f/0}{#n1}* Nun, das ist alles.'],
        chair2d1: [
            '<25>{#p/toriel}{#f/1}{#n1}* Zuhause...?\n* Könntest du ein bisschen genauer sein?',
            choicer.create('* (Was sagst du?)', '\nEgal', 'Wann kann\nich nach\nHause gehen?')
        ],
        chair2d2: [
            '<25>{#p/toriel}{#f/1}{#n1}* Aber... das hier ist doch jetzt dein Zuhause, oder nicht?',
            choicer.create('* (Was sagst du?)', '\nEntschuldigung', 'Wie verlasse\nich die\nOutlands?')
        ],
        chair2d3: [
            '<25>{#p/toriel}{#f/5}{#n1}* Bitte, versuch zu verstehen...',
            '<25>{#p/toriel}{#f/9}* Ich will nur das Beste für dich.'
        ],
        chair2d4: [
            '<25>{#p/toriel}{#f/5}{#n1}* Mein Kind...',
            choicer.create('* (Was sagst du?)', '\nEntschuldigung', 'Wie verlasse\nich die\nOutlands?')
        ],
        chair2d5: ['<25>{#p/toriel}{#f/5}{#n1}* ...'],
        chair2d6: [
            '<25>{#p/toriel}{#f/9}{#n1}* ...',
            '<25>{#p/toriel}{#f/9}* Bitte, warte hier.',
            '<25>{#p/toriel}{#f/5}* Es gibt etwas, das ich tun muss.'
        ],
        chair3: () =>
            SAVE.data.b.svr
                ? [
                    [
                        '<25>{#p/asriel1}{#f/20}* Ich kann immer noch nicht glauben, ',
'<25>{#p/asriel1}{#f/20}* dass sie das alles von der Zitadelle hierher gebracht hat.',
                        "<25>{#f/17}* Aber... ich verstehe, warum sie es tun wollte.",
                        '<25>{#f/13}* Mama und dieser Stuhl von ihr haben eine lange Geschichte...'
                    ],
                    [
                        '<25>{#p/asriel1}{#f/13}* Einmal hat sie mir etwas erzählt...',
                        '<25>{#f/17}* \"Dieser Stuhl erinnert mich an Zuhause.\"',
                        '<25>{#f/13}* Aber sie war schon zu Hause, also fragte ich sie, ',
'<25>{#f/13}* was sie damit meinte.',
                        '<25>{#f/17}* Es stellte sich heraus, dass sie das bei sich zu Hause hatte...',
                        '<25>{#f/23}* ... auf der alten Heimatwelt.'
                    ],
                    [
                        "<25>{#p/asriel1}{#f/13}* Ich weiß nicht viel über diese Welt, Frisk...",
                        '<25>{#f/17}* Aber ich habe gehört, es war sehr... idyllisch.',
                        '<25>{#f/20}* Sicher, es gab viele Fortschritte in der Magie und Technologie...',
                        '<25>{#f/17}* Aber die Leute liebten es, weil das Leben so... einfach war.'
                    ],
                    ["<25>{#p/asriel1}{#f/23}* Was ich dafür geben würde, um ein einfaches Leben zu haben."]
                ][Math.min(asrielinter.chair3++, 3)]
                : world.darker
                    ? ['<32>{#p/basic}* Ein Lesestuhl.']
                    : ['<32>{#p/basic}* Ein bequemer Lesestuhl...', '<32>* Es scheint die richtige Größe für Toriel zu sein.'],
        chair4: ['<25>{#p/toriel}{#n1}* Ah, da bist du ja.', '<25>* Ich habe dein Frühstück für dich auf dem Tisch bereitgestellt.'],
        closetrocket: {
            a: () => [
                '<32>{#p/human}* (Du schaust in die Truhe...)',
                ...(SAVE.data.b.svr
                    ? [
                        [
                            "<25>{#p/asriel1}{#f/13}* Ja, äh, das ist alles, was du dort finden wirst.",
                            "<25>{#f/17}* Ich bin mir nicht sicher, warum Toriel das hier hingestellt hat.",
                            '<25>{#f/17}* $(name) und ich haben uns nie für Comics interessiert.'
                        ],
                        ['<25>{#p/asriel1}{#f/10}* Ich schätze, sie wollte einfach so tun, ',
'<25>{#p/asriel1}{#f/10}* als würden wir hier leben...?'],
                        ['<25>{#p/asriel1}{#f/13}* Die Dinge, die eine Mutter tut, um sich besser zu fühlen...']
                    ][Math.min(asrielinter.closetrocket_a++, 2)]
                    : ['<32>{#p/basic}* Nichts mehr hier zu finden.'])
            ],
            b: () => [
                '<32>{#p/human}* (Du schaust in die Truhe...)',
                ...(SAVE.data.b.svr
                    ? []
                    : ['<32>{#p/basic}* Was ist das? ',
'<32>{#p/basic}* Ein Comicstrip der limitierten Ausgabe von Super Sternwanderer?']),
                '<32>{#s/equip}{#p/human}* (Du hast den Super Starwalker 3 bekommen.)'
            ],
            b2: () => [
                '<32>{#p/human}* (Du schaust in die Truhe...)',
                ...(SAVE.data.b.svr
                    ? []
                    : ['<32>{#p/basic}* Was ist das? ',
'<32>{#p/basic}* Ein Comicstrip der limitierten Ausgabe von Super Sternwanderer?']),
                "<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"
            ]
        },
        goner: {
            a1: () =>
                SAVE.flag.b.$svr
                    ? [
                        "<32>{#p/human}* Ich habe die Auswirkungen gesehen, die du auf diese Welt hattest...",
                        '<32>* Ein perfektes Ende, in dem jeder glücklich ist...',
                        "<32>* Da ist etwas Besonderes daran."
                    ]
                    : [
                        '<32>{#p/human}* Eine Welt, die nicht durch Verbindungen gebunden ist...',
                        '<32>* Die nur um ihrer eigenen Schönheit willen existiert...',
                        "<32>* Da ist etwas Besonderes daran."
                    ],
            a2: () =>
                SAVE.flag.b.$svr
                    ? ['<32>* Das gesagt...', "<32>* Anscheinend war es nicht genug, um deine... Neugier zu befriedigen."]
                    : ['<32>* Erzähl mir...', '<32>* Weckt das nicht deine... Neugier?']
        },
        danger_puzzle1: () => [
            '<25>{#p/toriel}* In diesem Raum liegt eine neue Art von Rätsel.',
            [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
                ? '<25>{#f/3}* Vielleicht wirst du hier besser abschneiden als beim Dummie.'
                : '<25>{#f/1}* Do you think you can solve it?'
        ],
        danger_puzzle2: () =>
            world.darker
                ? ["<32>{#p/basic}* It's too tall for you to reach."]
                : ["<32>{#p/basic}* This terminal's staggering height towers over you, blocking your eager approach."],
        danger_puzzle3: () => [
            [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
                ? '<25>{#p/toriel}{#f/3}* What is it now...'
                : '<25>{#p/toriel}{#f/1}* What is the problem?\n* Do you need assistance?'
        ],
        danger_puzzle4: () => [
            ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy)
                ? ['<25>{#p/toriel}{#f/5}* Ah... I see.', '<25>{#f/5}* The terminal is too high for you to reach it.']
                : [
                    '<25>{#p/toriel}{#f/7}* ... oh my.',
                    '<25>{#f/6}* It seems there is a bit of a design fault here.',
                    '<25>{#f/1}* So the terminal is too high for you to reach it...?'
                ]),
            '<25>{#f/0}* No matter.\n* I will operate it for you.',
            '<25>{#f/0}* ...',
            '<25>{#f/0}* There is a riddle to be solved here.\n* Would you like to try?',
            choicer.create('* (Solve the riddle?)', 'Ja', 'Nein')
        ],
        danger_puzzle5a: [
            '<25>{#p/toriel}* Excellent!\n* The eagerness to learn and grow is important.',
            '<25>{#f/0}* Especially for a youngster such as yourself.'
        ],
        danger_puzzle5b: [
            '<25>{#p/toriel}{#f/0}* The riddle takes the form of a question.',
            "<25>{#p/toriel}{#f/1}* \"What's baked like a cake and rhymes with 'lie?'\""
        ],
        danger_puzzle5c: [
            '<32>{#p/human}* (...)\n* (You tell Toriel the answer.)',
            '<25>{#p/toriel}{#f/0}* ... ah, very good.\n* And with such a positive attitude!'
        ],
        danger_puzzle5d: [
            '<32>{#p/human}* (...)\n* (You tell Toriel you do not know the answer.)',
            '<25>{#p/toriel}{#f/1}* ... is something wrong?\n* You seem to have something on your mind.',
            '<25>{#f/5}* ... hmm...',
            '<25>{#f/0}* Well, alright.\n* I will solve the riddle for you this time.'
        ],
        danger_puzzle5e: () =>
            [1, 5].includes(SAVE.data.n.state_wastelands_dummy)
                ? ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/5}* I see.']
                : ['<25>{#p/toriel}{#f/0}* ...', '<25>{#f/0}* I suppose I can solve the riddle for you this time.'],
        danger_puzzle6: () => [
            [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? '<25>{#p/toriel}{#f/5}* And... {#x1}there.\n* The pathway is clear.'
                : '<25>{#p/toriel}* And... {#x1}there!\n* The pathway is clear!'
        ],
        danger_puzzle7: () => [
            [1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? '<25>{#p/toriel}{#f/5}* I will wait for you to enter the next room.'
                : '<25>{#p/toriel}* Once ready, you may enter the next room.'
        ],
        danger_puzzle8: () =>
            SAVE.data.b.svr
                ? ["<32>{#p/human}* (But you still couldn't reach the terminal.)"]
                : ['<32>{#p/basic}* Even now, the terminal still stands as tall as ever.'],
        denie: ["<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"],
        dipper: {
            a: () => [
                '<32>{#p/human}* (You got the Little Dipper.)',
                choicer.create('* (Equip the Little Dipper?)', 'Ja', 'Nein')
            ],
            b: ["<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"]
        },
        drop_pie: ['<25>{#p/toriel}{#f/1}* Pies are for eating, not for splattering on the floor.'],
        drop_pie3: ['<25>{#p/toriel}{#f/1}* Please do not spill food on the floor.'],
        drop_snails: ['<25>{#p/toriel}{#f/1}* What did those poor fried snails ever do to you.'],
        drop_soda: ["<32>{#p/basic}{#n1}* Aww c'mon! ;)", '<32>* I poured my heart into that! ;)'],
        drop_steak: ['<32>{#p/basic}{#n1}* Seriously!? ;)', '<32>* That steak was utterly priceless! ;)'],
        dummy1: [
            '<25>{#p/toriel}{#f/0}* Your next lesson involves encounters with other monsters.',
            '<25>{#f/1}* As a human roaming the outpost, it is likely you will be attacked...',
            '<25>{#f/0}* If that happens, you will enter what is known as a FIGHT.',
            '<25>{#f/0}* Thankfully, there are several ways to resolve one.',
            '<25>{#f/1}* For now, I suggest striking up a friendly conversation...',
            '<25>{#f/0}* ... thereby giving me a chance to sort out the conflict for you.'
        ],
        dummy2: ['<25>{#p/toriel}* To start, you may practice talking with the dummy.'],
        dummy3: [
            '<25>{#p/toriel}{#f/7}* ... you think that I am the dummy?',
            '<25>{#f/6}* Hahaha!\n* How adorable!',
            '<25>{#f/0}* Unfortunately, I am but a worrisome old lady.'
        ],
        dummy4: [
            '<25>{#p/toriel}* There is nothing to be afraid of, my child.',
            '<25>* A simple training dummy cannot harm you.'
        ],
        dummy5: ['<25>{#p/toriel}{#f/1}* Go on, little one...'],
        dummy6: [
            '<25>{#p/toriel}{#f/2}* Child, no!\n* The dummy was not made for fighting!',
            '<25>{#f/1}* Besides, we do not want to hurt anyone, do we?',
            '<25>{#f/0}* Come now.'
        ],
        dummy7: ['<25>{#p/toriel}* Excellent!\n* You appear to be quite the fast learner.'],
        dummy8: [
            '<25>{#p/toriel}{#f/1}* You ran away...?',
            '<25>{#f/0}* Actually, that may have been a wise choice.',
            '<26>{#f/1}* By escaping, you have avoided any potential conflict...',
            '<25>{#f/0}* ... even if it WAS only a simple training dummy.'
        ],
        dummy9: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/0}* The next room awaits.'],
        dummy9a: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/4}* ...', '<25>{#f/6}* The next room awaits.'],
        dummy10: [
            '<25>{#p/toriel}{#f/7}* My child, that is...',
            '<25>{#f/0}* ... that is perhaps the most adorable thing I have ever seen.',
            '<25>{#f/0}* In any case, you have handled this lesson admirably.',
            '<25>{#f/0}* The next room awaits.'
        ],
        dummy11: ['<25>{#p/toriel}* The next room awaits.'],
        dummy12: [
            '<25>{#p/toriel}{#f/2}* My goodness, child!\n* Have mercy!',
            '<25>{#f/1}* ...',
            '<25>{#f/0}* Thankfully, that was only a training dummy.',
            '<25>{#f/1}* In the future, however, it would be wise...',
            '<25>{#f/0}* ... not to slap people half to death!',
            '<26>{#f/0}* Anywho.\n* The next room awaits.'
        ],
        eat_pie: ['<25>{#p/toriel}{#f/1}{#n1}* Tasty, is it not?'],
        eat_snails: ['<25>{#p/toriel}{#f/0}{#n1}* I hope your breakfast sufficed.'],
        eat_soda: [
            '<32>{#p/basic}* Aaron pulled out his phone and snapped a picture.',
            '<32>{#p/basic}{#n1}* Ooh, I could definitely put this on an poster somewhere ;)'
        ],
        eat_steak: [
            '<32>{#p/basic}* Aaron shot you with a wink.',
            '<32>{#p/basic}{#n1}* You like the product, lassy? ;)'
        ],
        endtwinkly2: [
            '<32>{#p/basic}* Who does he think he is?',
            "<32>* You've been nothing but kind to everyone we've met.",
            '<32>* That talking star really needs to get a life...'
        ],
        endtwinklyA1: [
            '<25>{#p/twinkly}{#f/12}* You idiot...',
            "<25>* Didn't you hear me before!?",
            '<25>* I thought I told you not to screw it up!',
            "<25>* Now look what you've done to our plan.",
            '<25>{#f/8}* ...',
            '<25>{#f/6}* You better fix this, $(name).',
            "<25>{#f/5}* It's our destiny."
        ],
        endtwinklyA2: () =>
            SAVE.flag.n.genocide_milestone < 1
                ? [
                    '<25>{#p/twinkly}{#f/5}* Howdy, $(name).',
                    "<25>{#f/5}* Seems you don't want to play with me anymore.",
                    '<25>{#f/6}* I tried being patient with you, but here we are...',
                    '<25>{#f/6}* Back at the beginning again.',
                    '<25>{#f/8}* Again, and again...',
                    '<25>{#f/5}* You must think this is all very funny.',
                    '<25>{#f/7}* Teasing me with the chance to be with you, only to tear it away...',
                    "<25>{#f/5}* Well, that's fine.",
                    "<25>{#f/5}* If that's the game you're going to play, then go right ahead.",
                    "<25>{#f/11}* Just don't expect to be in control for long...",
                    "<25>{#f/7}* Sooner or later, you're going to regret what you've done."
                ]
                : [
                    '<25>{#p/twinkly}{#f/6}* Howdy, $(name).',
                    ...(SAVE.flag.n.genocide_milestone < 7
                        ? [
                            "<25>{#f/6}* I've had some time to think about what happened.",
                            '<25>{#f/5}* It was thrilling, at first...',
                            '<25>* The thought of taking the outpost by force together...',
                            "<25>{#f/6}* But now, I'm not sure.",
                            '<25>{#f/8}* ...',
                            '<25>{#f/8}* I guess... I got a bit carried away back there.',
                            "<25>{#f/5}* But that's okay, right?\n* You'll forgive me, won't you?"
                        ]
                        : [
                            "<25>{#f/6}* I'm still not really sure what happened back there...",
                            "<25>{#f/5}* It's... kinda scaring me, haha...",
                            '<25>{#f/8}* ...',
                            '<25>{#f/8}* Maybe... we should hold off on things for now.',
                            "<25>{#f/5}* But that's okay, right?\n* You'll be fine with that, won't you?"
                        ]),
                    '<25>{#f/6}* ...',
                    '<25>{#f/8}* Goodbye, $(name)...',
                    ...(SAVE.flag.n.genocide_milestone < 7 ? ["<25>{#f/5}* I'll be back before you know it."] : [])
                ],
        endtwinklyAreaction: [
            '<32>{#p/basic}* Sorry, did I miss something?',
            "<32>* I've never talked to him in my life, let alone go on some mission with him.",
            "<32>* Oh well.\n* It wouldn't be the first time he's made up stories about me."
        ],
        endtwinklyB: () =>
            SAVE.data.b.w_state_lateleave
                ? [
                    '<25>{#p/twinkly}{#f/5}{#v/0}* Well.\n* That was unexpected.',
                    "<25>{#f/11}{#v/0}* You think you can just break the rules, don'tcha?",
                    '<25>{#f/7}{#v/0}* Hee hee hee...',
                    "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed."
                ]
                : [
                    '<25>{#p/twinkly}{#f/5}{#v/0}* Clever.\n* Verrrryy clever.',
                    "<25>{#f/11}{#v/0}* You think you're really smart, don'tcha?",
                    '<25>{#f/7}{#v/0}* Hee hee hee...',
                    "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed."
                ],
        endtwinklyB2: [
            '<25>{#f/8}{#v/0}* If you had just killed a FEW more monsters...',
            "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
            '<25>{#f/7}{#v/0}* You know, $(name)...',
            "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
            '<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...',
            "<25>{#f/5}{#v/0}* You'll get to see something new.",
            '<25>{#f/11}{#v/0}* Until we meet again...'
        ],
        endtwinklyB3: [
            '<25>{#f/8}{#v/0}* If you had just killed ONE more monster...',
            "<25>{#f/9}{#v/0}* Well, maybe I shouldn't reveal my plans this early.",
            '<25>{#f/7}{#v/0}* You know, $(name)...',
            "<25>{#f/5}{#v/0}* It's only a matter of time before we're together again.",
            '<25>{#f/6}{#v/0}* Try a little harder next time, and maybe...',
            "<25>{#f/5}{#v/0}* You'll get to see something new.",
            '<25>{#f/11}{#v/0}* Until we meet again...'
        ],
        endtwinklyBA: () => [
            SAVE.data.n.state_wastelands_napstablook === 5
                ? '<25>{#p/twinkly}{#f/6}{#v/0}* So you made it through without killing anyone.'
                : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of everyone you came across.',
            '<25>{#f/5}{#v/0}* I bet you feel really great.',
            '<25>{#f/2}{#v/1}* But what will you do if you meet a serial murderer?',
            "<25>{#f/9}{#v/0}* You'll die, and you'll die, and you'll die...",
            "<25>{#f/5}{#v/0}* Eventually, you'll tire of trying.",
            '<25>{#f/11}{#v/0}* What then, huh?',
            '<25>{#f/2}{#v/1}* Will you KILL out of frustration?',
            '<25>{#f/14}{#v/1}* Or will you simply GIVE UP?',
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            '<25>{#f/7}{#v/0}* This is gonna be SO much fun.',
            "<25>{#f/9}{#v/0}* I'll be watching!"
        ],
        endtwinklyBB1: () => [
            SAVE.data.b.w_state_lateleave
                ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of a few measly people's way."
                : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a few measly people.',
            '<25>{#f/11}{#v/0}* But what about the others, huh?',
            '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
            "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
            "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
            "<25>{#f/5}{#v/0}* Each one could've been someone else's Toriel.",
            '<25>{#f/5}{#v/0}* ...',
            '<25>{#f/7}{#v/0}* Selfish brat.',
            '<25>{#f/0}{#v/1}* Monsters are dead because of you.'
        ],
        endtwinklyBB2: () => [
            SAVE.data.b.w_state_lateleave
                ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of one person's way."
                : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of a single person.',
            '<25>{#f/11}{#v/0}* But what about everyone else, huh?',
            '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
            "<25>{#f/0}{#v/0}* They're all gone now.",
            "<25>{#f/11}{#v/0}* What's Toriel gonna do when she finds out, huh?",
            '<25>{#f/2}{#v/1}* What if she KILLS herself out of grief?',
            "<25>{#f/11}{#v/0}* If you think you're saving her just by SPARING her...",
            "<25>{#f/7}{#v/0}* Then you're even dumber than I thought.",
            '<25>{#f/9}* Well, see ya!'
        ],
        endtwinklyBB3: () => [
            SAVE.data.b.w_state_lateleave
                ? "<25>{#p/twinkly}{#f/6}{#v/0}* So you managed to stay out of almost everyone's way."
                : '<25>{#p/twinkly}{#f/6}{#v/0}* So you spared the life of almost everyone.',
            SAVE.data.b.w_state_lateleave
                ? '<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DID get in the way of, huh?'
                : "<25>{#p/twinkly}{#f/11}{#v/0}* But what about the one you DIDN'T spare, huh?",
            '<25>{#f/7}{#v/0}* Froggit, Flutterlyte, Gelatini, Silente, Oculoux, Mushy...',
            "<25>{#f/6}{#v/0}* Don'tcha think any of them have families?",
            "<25>{#f/8}{#v/0}* Don'tcha think any of them have friends?",
            "<25>{#f/5}{#v/0}* The one you killed could've been someone else's Toriel.",
            '<25>{#f/5}{#v/0}* ...',
            '<25>{#f/7}{#v/0}* Selfish brat.',
            "<25>{#f/0}{#v/1}* Someone's dead because of you."
        ],
        endtwinklyBC: [
            "<25>{#p/twinkly}{#f/5}{#v/0}* I'm sure you're well aware of that, though...",
            "<25>{#f/6}{#v/0}* Considering you've already killed Toriel once before.",
            "<25>{#f/7}{#v/0}* Ain't that right, brat?",
            '<25>{#f/2}{#v/1}* You MURDERED her.',
            "<25>{#f/7}{#v/0}* And then, you felt bad...\n* Ain't that right?",
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            "<25>{#f/11}{#v/0}* Do you think you're the only one with that power?",
            '<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
            '<25>{#f/8}{#v/0}* The power to SAVE...',
            '<25>{#f/7}{#v/0}* That used to be MY power, you know.',
            '<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
            '<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
            "<25>{#f/9}{#v/0}* I'll be watching!"
        ],
        endtwinklyC: [
            '<25>{#f/7}{#v/0}* After all, this used to be MY power.',
            '<25>{#f/6}{#v/0}* The power to reshape the universe, purely by your determination...',
            '<25>{#f/8}{#v/0}* The power to SAVE...',
            '<25>{#f/6}{#v/0}* I thought I was the only one who could do that.',
            '<25>{#f/6}{#v/0}* Seems YOUR desires for this world override MINE.',
            '<25>{#f/5}{#v/0}* Well then.\n* Enjoy that power while you can.',
            "<25>{#f/9}{#v/0}* I'll be watching!"
        ],
        endtwinklyD: [
            "<25>{#p/twinkly}{#f/11}{#v/0}* You're one hell of a tease, huh?",
            '<25>{#f/8}{#v/0}* Beating monsters to the brink of death, only to let them go...',
            "<25>{#f/7}{#v/0}* What will you do if a monster doesn't WANT your mercy?",
            '<25>{#f/6}{#v/0}* Will you snuff the light out of their eyes?',
            '<25>{#f/5}{#v/0}* Or will you realize your faulty \"pacifism\" is for nothing?',
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            '<25>{#f/7}{#v/0}* This is gonna be SO much fun.',
            "<25>{#f/9}{#v/0}* I'll be watching!"
        ],
        endtwinklyE: [
            "<25>{#p/twinkly}{#f/7}{#v/0}* Wow, you're utterly repulsive.",
            '<26>{#f/11}{#v/0}* You got by peacefully...',
            "<25>{#f/5}{#v/0}* Then, you figured that wasn't good enough for you.",
            '<25>{#f/2}{#v/1}* So you KILLED her just to see what would happen.',
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            '<25>{#f/0}{#v/0}* You did it out of BOREDOM.'
        ],
        endtwinklyEA: ["<25>{#f/11}{#v/0}* Don't think I don't know how this works..."],
        endtwinklyEB: ["<25>{#f/6}{#v/0}* It's sad, though..."],
        endtwinklyF: ['<25>{#p/twinkly}{#f/11}{#v/0}* Look at you, playing with her life like this...'],
        endtwinklyFA: ['<25>{#f/7}{#v/0}* Killing her, leaving her, killing her again...'],
        endtwinklyFB: ['<25>{#f/7}{#v/0}* Leaving her, killing her, leaving her again...'],
        endtwinklyFXA: [
            "<25>{#f/11}{#v/0}* It's fun, isn't it?",
            '<25>{#f/6}{#v/0}* Endlessly toying with the lives of others...',
            '<25>{#f/8}{#v/0}* Watching how they react to every possible decision...',
            "<25>{#f/11}{#v/0}* Isn't it thrilling?",
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            "<25>{#f/9}{#v/0}* I wonder what you'll do next.",
            "<25>{#f/5}{#v/0}* I'll be watching..."
        ],
        endtwinklyG: [
            "<25>{#p/twinkly}{#f/10}{#v/0}* You just can't get enough, can you~",
            '<25>{#f/11}{#v/0}* How many more times will you KILL her, eh?',
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            '<25>{#f/0}{#v/1}* You kinda remind me of myself.',
            '<25>{#f/9}{#v/0}* Well, cya!'
        ],
        endtwinklyG1: [
            '<25>{#p/twinkly}{#f/6}{#v/0}* Again?\n* Golly...',
            '<25>{#f/0}{#v/1}* You REALLY remind me of myself.'
        ],
        endtwinklyG2: [
            '<25>{#p/twinkly}{#f/6}{#v/0}* Again!?',
            "<25>{#f/8}{#v/0}* Wow, you're even worse than I thought."
        ],
        endtwinklyH: () => [
            SAVE.data.b.w_state_lateleave
                ? "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally gotten by peacefully, huh?"
                : "<25>{#p/twinkly}{#f/5}{#v/0}* So you've finally decided to show mercy, huh?",
            '<25>{#f/5}{#v/0}* And after all that KILLING...',
            '<25>{#f/11}{#v/0}* Say, was this your idea all along?',
            '<25>{#f/2}{#v/1}* To get a rush out of her death, then spare her once you got bored?',
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            '<25>{#f/11}{#v/0}* What a saint you must think you are.',
            "<25>{#f/5}{#v/0}* But hey, it's not as if I don't know how this works..."
        ],
        endtwinklyI: [
            '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
            '<25>{#f/7}{#v/0}* I hope you like your choice.',
            "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
            "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
            '<25>{#f/5}{#v/0}* That old woman thought she could break the rules.',
            '<25>{#f/8}{#v/0}* She tried so hard to save you humans...',
            "<25>{#f/6}{#v/0}* But when it came down to it, she couldn't even save herself."
        ],
        endtwinklyIX: [
            '<25>{#p/twinkly}{#f/11}{#v/0}* Hee hee hee...',
            '<25>{#f/11}{#v/0}* So you finally caved in and killed someone, huh?',
            '<25>{#f/7}{#v/0}* Well, I hope you like your choice.',
            "<25>{#f/9}{#v/0}* I mean, it's not as if you can go back and change fate.",
            "<25>{#f/0}{#v/1}* In this world, it's KILL or BE killed.",
            "<25>{#f/8}{#v/0}* ... what's wrong?\n* Did she not last as long as you thought?",
            '<26>{#f/6}{#v/0}* Oh, how terrible.\n* Guess not everyone can be beat into submission.'
        ],
        endtwinklyIA: ['<25>{#f/11}{#v/0}* What an idiot!'],
        endtwinklyIAX: ['<25>{#f/7}{#v/0}* What a shame for her.'],
        endtwinklyIB: ['<25>{#f/6}{#v/0}* As for you...'],
        endtwinklyJ: [
            '<25>{#p/twinkly}{#f/6}{#v/0}* Wow.',
            '<25>{#f/7}{#v/0}* And here I thought you were the righteous one for showing mercy.',
            '<25>{#f/11}{#v/0}* Hah!\n* What a joke.',
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/6}{#v/0}* How did it feel to finally satisfy your violent side?',
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            "<25>{#f/0}{#v/1}* I bet it felt GOOD, didn't it?",
            '<25>{#f/11}{#v/0}* I mean, I should know...'
        ],
        endtwinklyK: [
            '<25>{#p/twinkly}{#f/5}{#v/0}* Nice to see you again.',
            "<25>{#f/6}{#v/0}* By the way, you're the most boring person in the galaxy.",
            '<25>{#f/12}{#v/0}* Getting by peacefully, then going back just to do it again?',
            '<25>{#f/8}{#v/0}* Come on...',
            "<25>{#f/2}{#v/1}* You know as well as I do that it's KILL or BE killed."
        ],
        endtwinklyK1: [
            "<25>{#p/twinkly}{#f/6}* Aren't you getting tired of this?",
            '<25>{#f/8}{#v/0}* Come on...',
            '<25>{#f/2}{#v/1}* You KNOW deep down that part of you wants to hurt her.',
            "<25>{#f/14}{#v/1}* A few good hits, and she'd be dead before your very eyes.",
            "<25>{#f/11}{#v/0}* Wouldn't that be exciting?",
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/8}{#v/0}* ...',
            '<25>{#f/7}{#v/0}* See ya, idiot.'
        ],
        endtwinklyK2: [
            '<25>{#p/twinkly}{#f/8}{#v/0}* Are you doing this just to see how I react?',
            '<25>{#f/6}{#v/0}* Is that what this is about?',
            "<25>{#f/7}{#v/0}* Well, don't expect to get anything else outta me.",
            '<25>{#f/6}{#v/0}* All this boring pacifism is getting tiresome.',
            '<25>{#f/11}{#v/0}* Now, if something more interesting were to happen...',
            "<25>{#f/9}{#v/0}* Perhaps I'd be more inclined to talk.",
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/8}{#v/0}* ...',
            '<25>{#f/7}{#v/0}* See ya, idiot.'
        ],
        endtwinklyKA: [
            "<25>{#f/7}{#v/0}* Sooner or later, you'll be forced to realize that.",
            '<25>{#f/11}{#v/0}* And when that time comes...',
            "<25>{#f/5}{#v/0}* Well, let's just say I'm interested to see what happens.",
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            '<25>{#f/9}{#v/0}* Good luck!'
        ],
        endtwinklyKB: [
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            "<25>{#f/7}{#v/0}* Maybe that's why you killed that one monster.",
            '<25>{#f/8}{#v/0}* I mean, you went almost the whole way without killing anyone...',
            '<25>{#f/6}{#v/0}* But somewhere along the line, you screwed up.',
            '<25>{#f/5}{#v/0}* All that good karma you had went straight down the toilet.',
            "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
            '<25>{#f/11}{#v/0}* What a joke!'
        ],
        endtwinklyKC: [
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            "<25>{#f/7}{#v/0}* Maybe that's why you killed those other monsters.",
            '<25>{#f/8}{#v/0}* I mean, you had a good run, but...',
            "<25>{#f/6}{#v/0}* What's the point in mercy if it doesn't mean anything?",
            '<25>{#f/7}{#v/0}* And believe me, after you did what you did...',
            "<25>{#f/2}{#v/1}* It doesn't mean JACK.",
            '<25>{#f/6}{#v/0}* ...',
            '<25>{#f/8}{#v/0}* ...',
            '<25>{#f/7}{#v/0}* See ya, idiot.'
        ],
        endtwinklyKD: [
            "<25>{#f/11}{#v/0}* What's wrong with killing Toriel, huh?\n* Too good for that?",
            '<25>{#f/7}{#v/0}* Hee hee hee...',
            "<25>{#f/2}{#v/1}* I know you're still rotten to the core.",
            '<25>{#f/11}{#v/0}* I mean, you managed to take out everyone in your path...',
            '<25>{#f/6}{#v/0}* But when it came to the final hurdle, you failed.',
            "<25>{#f/11}{#v/0}* Golly, you can't do anything right!",
            '<25>{#f/11}{#v/0}* What a joke!'
        ],
        endtwinklyL: [
            '<25>{#p/twinkly}{#f/6}{#v/0}* Back again, huh?\n* Golly...',
            "<25>{#f/8}{#v/0}* You've changed the timeline around so much...",
            "<25>{#f/6}{#v/0}* I don't even know what to think now.",
            '<25>{#f/8}{#v/0}* Are you good?\n* Evil?\n* Just curious?',
            '<25>{#f/6}{#v/0}* I dunno.',
            '<25>{#f/5}{#v/0}* There is one thing, though...',
            "<25>{#f/5}{#v/0}* One thing I KNOW you haven't done yet.",
            '<25>{#f/11}{#v/0}* Hee hee hee...',
            "<25>{#f/7}{#v/0}* That's right.",
            "<25>{#f/7}{#v/0}* You haven't killed everyone here in one run yet.",
            "<25>{#f/11}{#v/0}* Aren't you at least a LITTLE curious?",
            '<25>{#f/8}{#v/0}* Come on, $(name)...',
            "<25>{#f/5}{#v/0}* I know you're in there somewhere."
        ],
        endtwinklyL1: [
            '<25>{#p/twinkly}{#f/6}{#v/0}* Well well, we meet again.',
            '<25>{#f/8}{#v/0}* How many times is this now?',
            "<25>{#f/6}{#v/0}* Whatever.\n* Doesn't matter.",
            '<25>{#f/6}{#v/0}* You KNOW what you have to do, $(name).',
            '<25>{#f/8}{#v/0}* ...',
            "<25>{#f/5}{#v/0}* I'll be waiting."
        ],
        exit1: [
            '<25>{#p/toriel}{#f/13}* You wish to return \"home,\" do you not?',
            '<25>{#f/9}* ...',
            '<25>{#f/9}* If you leave here, I will not be able to protect you.',
            '<25>{#f/9}* I will not be able to save you from the dangers that lie ahead.',
            '<25>{#f/13}* So, please, little one...',
            '<25>{#f/9}* Go back the other way.'
        ],
        exit2: [
            '<25>{#p/toriel}{#f/13}* Every human that ends up here meets the same fate.',
            '<25>{#f/9}* I have seen it repeat time and time again.',
            '<25>{#f/13}* They come.',
            '<25>{#f/13}* They leave.',
            '<25>{#f/9}* ... they die.',
            '<25>{#f/13}* My child...',
            '<25>{#f/13}* If you leave the Outlands...',
            '<25>{#f/9}* They...\n* {@fill=#f00}ASGORE{@fill=#fff}...\n* Will take your SOUL.'
        ],
        exit3: [
            '<25>{#p/toriel}{#f/9}* ...',
            '<25>{#f/13}* I did not want to say this, but...',
            '<25>{#f/11}* I cannot allow you to continue this way.',
            '<25>{#f/9}* For your own sake, child...',
            '<25>{#f/9}* Do not follow me into the next room.'
        ],
        exit4: [
            '<25>{#p/toriel}{#p/toriel}{#f/13}* ...',
            '<25>{#f/10}* ... of course.',
            '<25>{#f/9}* Perhaps it was always meant to come to this.',
            '<25>{#f/9}* Perhaps I was foolish to think you would be any different.',
            '<25>{#f/9}* ...',
            '<25>{#f/13}* I am afraid there is little choice now.',
            '<25>{#f/13}* Forgive me, my child...',
            '<25>{#f/11}* But I cannot allow you to leave.'
        ],
        exitfail1: (lateleave: boolean, sleep: boolean) =>
            world.postnoot
                ? [
                    [
                        sleep
                            ? "<32>{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                            : "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                        '<32>{#x1}* But... oh no!\n* The taxi she was in exploded, killing her instantly!',
                        '<32>* Golly, I wonder how such an awful thing could have happened.',
                        '<32>{*}{#x2}* ...',
                        "<25>{*}{#f/7}* Sorry, $(name).\n* Guess your happy ending won't be so easy."
                    ],
                    [
                        sleep
                            ? "<32>{#p/twinkly}{#f/19}* After you sleep at Mommy's house, she goes out for groceries."
                            : "<32>{#p/twinkly}{#f/19}* After you run back to Mommy's house, she goes out for groceries.",
                        '<32>{#x1}* But... oh no!\n* A talking star appears and tortures her to death!',
                        "<32>* Golly, that's an even worse outcome than last time!",
                        '<32>{*}{#x2}* ...',
                        "<25>{*}{#f/6}* We don't have time for this, $(name).\n* Get back on track."
                    ],
                    [
                        '<25>{*}{#p/twinkly}{#f/5}* Come on, $(name)...',
                        sleep
                            ? "<25>{*}{#f/7}* Do you really think I'm gonna let you avoid me THAT easily?"
                            : "<25>{*}{#f/7}* Do you really think I'm gonna let you run away from me THAT easily?"
                    ],
                    ['<25>{*}{#p/twinkly}{#f/6}* We can do this all day.'],
                    ['<25>{*}{#p/twinkly}{#f/8}* ...']
                ][Math.min(SAVE.flag.n.postnoot_exitfail++, 4)]
                : [
                    sleep
                        ? "<32>{#p/basic}* After you sleep at Toriel's home, she destroys the bridge to the outpost."
                        : "<32>{#p/basic}* After you return to Toriel's home, she destroys the bridge to the outpost.",
                    ...(outlandsKills() > 10
                        ? [
                            "<32>* Time goes by, and Toriel soon finds out about the monsters you've killed.",
                            '<32>* Her hopes shattered, and with nothing left to lose, she...',
                            '<32>* ...',
                            '<32>* ... m-meanwhile, the remaining outpost residents await salvation...'
                        ]
                        : outlandsKills() > 5 || SAVE.data.n.bully_wastelands > 5
                            ? [
                                '<32>* Time goes by, and Toriel does her best to care for you.',
                                '<32>* Reading books, baking pies...',
                                '<32>* Tucking you snugly into bed, each and every night...',
                                ...(lateleave
                                    ? ['<32>* ... despite her fear that you may try to run away again.']
                                    : ["<32>* ... despite those who've gone missing."]),
                                '<32>* All the while, the outpost residents await salvation...'
                            ]
                            : [
                                '<32>* Time goes by, and Toriel does her best to care for you.',
                                '<32>* Reading books, baking pies...',
                                '<32>* Tucking you snugly into bed, each and every night...',
                                ...(lateleave
                                    ? ['<32>* And hugging you so tightly that you never ever try to run away again.']
                                    : ['<32>* And all the hugging you could ever hope for.']),
                                '<32>* All the while, the outpost residents await salvation...'
                            ]),
                    '<32>* ... from a human that may never reach them.',
                    '<32>* Is this truly the outcome you had hoped for?',
                    '<32>* Is this truly what they deserve?'
                ],
        food: () => [
            ...(SAVE.data.n.state_wastelands_mash === 2
                ? [
                    '<25>{#p/toriel}{#f/1}* Sorry for the wait...',
                    '<25>{#f/3}* It seems that little white dog has raided my kitchen again.',
                    '<25>{#f/4}* You should see the state of that pie...',
                    '<26>{#f/0}* But anyhoo.\n* I have prepared a plate of fried snails for you.'
                ]
                : ['<25>{#p/toriel}* Breakfast is ready!', '<26>* I have prepared a plate of fried snails for you.']),
            '<25>{#f/1}* I will leave them here on the table...'
        ],
        fridgetrap: {
            a: () =>
                SAVE.data.b.svr
                    ? []
                    : world.darker
                        ? ["<32>{#p/basic}* You wouldn't like what's in the fridge."]
                        : ['<32>{#p/basic}* There is a brand-name chocolate bar in the fridge.'],
            b: () => [
                ...(SAVE.data.b.svr ? [] : ['<32>{#p/basic}* ...', '<32>* Do you want it?']),
                choicer.create('* (Take the Chocolate Bar?)', 'Ja', 'Nein')
            ],
            b1: ['<32>{#p/human}* (You decide not to take anything.)'],
            b2: () => [
                '<32>{#p/human}* (You got the Chocolate Bar.)',
                ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/17}* Ah... chocolate.', '<25>{#p/asriel1}{#f/13}* ...'] : [])
            ],
            c: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* (Aber es war nichts mehr darin zu finden.)',
                        ...[
                            [
                                '<25>{#p/asriel1}{#f/23}* Oh... $(name) ALWAYS used to root around in the fridge.',
                                '<25>{#f/13}* They thought, if they dug deep enough...',
                                '<25>{#f/13}* Another bar of chocolate would reveal itself inside.',
                                '<25>{#f/17}* ... how silly.'
                            ],
                            ['<25>{#p/asriel1}{#f/20}* That was before the chocolate replicator was installed.']
                        ][Math.min(asrielinter.fridgetrap_c++, 1)]
                    ]
                    : ['<32>{#p/basic}* The chocolate bar has already been taken.'],
            d: ["<32>{#p/human}* (Du trägst zu viel.)"]
        },
        front1: [
            '<25>{#p/toriel}{#f/1}* ... and you want to play one of your songs?',
            '<25>{#f/0}* Alright, I will see what I can do.'
        ],
        front1x: ['<25>{#p/toriel}{#f/1}* ... hello?'],
        front2: () => [
            ...(world.postnoot
                ? [
                    '<25>{#p/toriel}{#f/2}* Up already!?',
                    '<25>{#f/1}* You were not asleep for very long...',
                    '<25>{#f/5}* ...',
                    world.nootflags.has('toriel') // NO-TRANSLATE

                        ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                        : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                    '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
                    '<26>{#f/0}* ... anywho.'
                ]
                : [
                    '<25>{#p/toriel}{#f/2}* How long have you been standing there!?',
                    '<25>{#f/5}* ...',
                    '<25>{#f/0}* I suppose it matters not.'
                ]),
            '<25>{#f/0}* Napstablook, a visitor here, has offered to play their music.',
            '<25>{#f/0}* In fact, they invited you specifically to be with them on stage!',
            '<25>{#f/1}* Would you like to visit the activities room to see them?',
            ...(SAVE.data.n.state_wastelands_mash === 1
                ? [
                    '<25>{#f/3}* Oh, and, I apologize about the state of the pie.',
                    '<25>{#f/4}* It seems that little white dog has raided my kitchen again...'
                ]
                : 3 <= SAVE.data.n.cell_insult
                    ? [
                        '<25>{#f/5}* Oh, and, I apologize about the state of the pie.',
                        '<25>{#f/9}* I did my best to try and salvage it...'
                    ]
                    : []),
            choicer.create("* (See Napstablook's show?)", 'Ja', 'Nein')
        ],
        front2a: ['<25>{#p/toriel}{#f/0}* Wonderful!\n* I will let them know you are coming.'],
        front2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#p/toriel}{#f/5}* I will be in the living room if you need me.'],
        front3: () => [
            ...(world.postnoot
                ? [
                    '<25>{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
                    '<25>{#f/1}* Are you sure you slept for a long enough time?',
                    '<25>{#f/5}* ...',
                    world.nootflags.has('toriel') // NO-TRANSLATE

                        ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                        : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                    '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.',
                    '<26>{#f/0}* ... aside from that...'
                ]
                : ['<25>{#p/toriel}* Good morning, little one.']),
            ...(SAVE.data.n.state_wastelands_mash === 1
                ? [
                    '<25>{#f/3}* It seems that little white dog has raided my kitchen again.',
                    '<25>{#f/4}* You should see the state of that pie...',
                    '<25>{#f/0}* Still, I have done my best to salvage it for you.'
                ]
                : ['<25>{#f/1}* The stars do look pretty today, do they not?']),
            '<25>{#f/5}* ...',
            '<25>{#f/5}* I will be in the living room if you need me.'
        ],
        front4: () => [
            ...(world.postnoot
                ? [
                    '<25>{#p/toriel}{#f/0}* Oh, hello, little one.\n* You are up early.',
                    '<25>{#f/1}* Are you sure you slept for a long enough time?',
                    '<25>{#f/5}* ...',
                    world.nootflags.has('toriel') // NO-TRANSLATE

                        ? '<25>{#f/1}* The atmospheric system still does not seem to be fixed.'
                        : '<25>{#f/1}* The atmospheric system seems to be malfunctioning.',
                    '<25>{#f/1}* If you begin to feel weak, do not hesitate to return to bed.'
                ]
                : ['<25>{#p/toriel}* Good morning, little one.']),
            '<25>{#f/5}* ...',
            ...(world.bullied
                ? [
                    '<25>* The Outlands have been unusually noisy today.',
                    '<25>* It seems a bully has been going around and causing trouble...',
                    '<25>* It would be best not to stray too far.'
                ]
                : [
                    '<25>* The Outlands have been unusually silent today.',
                    '<25>* I tried calling someone just now, but...',
                    '<25>* Nothing.'
                ]),
            ...(SAVE.data.n.state_wastelands_mash === 1
                ? [
                    world.bullied
                        ? '<26>{#f/3}* In other news, that little white dog has raided my kitchen again.'
                        : '<25>{#f/3}* Apart from the little white dog raiding my kitchen, that is.',
                    '<25>{#f/4}* You should see the state of that pie...',
                    '<25>{#f/0}* Still, I have done my best to salvage it for you.',
                    '<25>{#f/1}* I hope you like it...'
                ]
                : world.bullied || (16 <= outlandsKills() && SAVE.flag.n.genocide_twinkly < resetThreshold())
                    ? []
                    : ['<25>{#f/1}* It is rather worrying...']),
            '<25>{#f/0}* Anyhoo, I will be in the living room if you need me.'
        ],
        goodbye1a: ['<25>{#p/toriel}{#f/10}* ...', '<25>{#f/20}{|}* Come here- {%}'],
        goodbye1b: ['<25>{#p/toriel}{#f/9}* ...', '<25>{#f/19}{|}* Come here- {%}'],
        goodbye2: [
            '<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
            '<25>{#f/9}* I should have known that I could not keep you here forever.',
            '<25>{#f/5}* ... still, if you ever need someone to talk to...',
            '<25>{#f/1}* Feel free to call me at any time.',
            '<25>{#f/0}* As long as my phone can reach you, I will be there to pick up.'
        ],
        goodbye3: [
            '<25>{#p/toriel}{#f/5}* I am sorry for what I have put you through, little one.',
            '<25>{#f/9}* I should have known that I could not keep you here forever.',
            '<25>{#f/10}* ...',
            '<25>{#f/14}* Be good, alright?'
        ],
        goodbye4: ['<25>{#p/toriel}{#f/1}* Be good, alright?'],
        goodbye5a: [
            '<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
            '<25>{#f/9}* ...',
            '<25>{#f/10}* Perhaps you really are different from the others.',
            '<25>{#f/0}* ... well then.',
            '<25>{#f/0}* I will finish up here, and meet you back at the house.',
            '<25>{#f/0}* Thank you for listening, my child.',
            '<25>{#f/0}* It means a lot to me.'
        ],
        goodbye5b: [
            '<25>{#p/toriel}{#f/5}* ... hmm?\n* You changed your mind?',
            '<25>{#f/10}* ...\n* Forgive me, my child.',
            '<25>{#f/9}* I might have lost it there for a moment.',
            '<25>{#f/0}* ... no matter.',
            '<25>{#f/0}* I will finish up here, and meet you back at the house.',
            '<25>{#f/0}* Thank you for listening, my child.',
            '<25>{#f/0}* It means a lot to me.'
        ],
        halo: {
            a: () => ['<32>{#p/human}* (You got the Halo.)', choicer.create('* (Equip the Halo?)', 'Ja', 'Nein')],
            b: ["<32>{#p/human}* (Du trägst zu viel, um das mitzunehmen.)"]
        },
        indie1: () => [
            ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? [
                    '<25>{#p/toriel}{#f/5}* Teaching you thus far has been difficult, but...',
                    '<25>{#f/5}* Perhaps this exercise will help.'
                ]
                : ['<26>{#p/toriel}* Alright.\n* It is time for your third and final lesson.']),
            '<25>{#f/1}* Do you think you can make it to the end of this room...',
            '<25>{#f/1}* ... all by yourself?',
            choicer.create('* (Was sagst du?)', 'Ja', 'Nein')
        ],
        indie1a: () => [
            '<25>{#p/toriel}{#f/1}* Are you sure...?',
            '<25>{#f/0}* It is only a short distance away.',
            choicer.create('* (Change your mind?)', 'Ja', 'Nein')
        ],
        indie1b: () => [
            '<25>{#p/toriel}{#f/5}* My child.',
            '<25>{#f/1}* It IS important to do things on your own, is it not?',
            '<32>{#p/basic}* If you refuse to change your mind here, Toriel may decide to take you home.',
            choicer.create('* (Change your mind?)', 'Ja', 'Nein')
        ],
        indie2a: ['<25>{#p/toriel}{#f/1}* Alright...', '<25>{#f/0}* Good luck!'],
        indie2b: ['<25>{#p/toriel}{#f/5}* ...', '<25>{#f/9}* ... I see.'],
        indie2b1: [
            '<25>{#p/toriel}{#f/10}* Worry not, my child.',
            '<25>{#f/1}* If you truly do not wish to leave my side...',
            '<25>{#f/0}* I will guide you through the remainder of the Outlands.',
            '<25>{#f/5}* ...',
            '<25>{#f/5}* Take my hand, young one...',
            '<25>{#f/5}* It is time to go home.'
        ],
        indie2f: ['<32>{#p/human}{#s/equip}* (You got the CELL.)'],
        indie3a: ['<25>{#p/toriel}* You did it!'],
        indie3b: [
            '<25>{#p/toriel}{#f/3}* My child, what took you so long!?',
            '<25>{#f/4}* Did you get lost?',
            '<25>{#f/1}* ...\n* You DO seem alright...'
        ],
        indie4: () => [
            ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? [
                    '<25>{#f/0}* I must admit, I am surprised you made it to the end.',
                    '<25>{#f/3}* Your behavior thus far has left me asking...',
                    '<25>{#f/4}* ... have you been attempting to mess with me this whole time?',
                    '<25>{#f/23}* To be blunt, I do not have time for such pointless riffraff.'
                ]
                : [
                    '<25>{#p/toriel}{#f/0}* Do not worry.\n* You were never in any real danger.',
                    '<25>{#f/0}* This was merely a test of your independence!',
                    '<25>{#f/1}* In truth, my child...'
                ]),
            '<25>{#f/5}* There are important errands I must run.',
            '<25>{#f/0}* While I am away, I expect you to be on your best behavior.',
            '<25>{#f/1}* The puzzles ahead are yet to be explained, and...',
            '<25>{#f/0}* Leaving the room on your own may prove to be dangerous.',
            '<25>{#f/10}* Here.\n* Take this CELL phone.',
            '<32>{#p/human}{#s/equip}* (You got the CELL.)',
            ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? [
                    '<25>{#p/toriel}{#f/1}* If you need anything while I am away, please...',
                    '<25>{#f/0}* Do not hesitate to call me.',
                    '<25>{#f/5}* ...',
                    '<26>{#f/23}* And stay out of trouble.'
                ]
                : [
                    '<25>{#p/toriel}{#f/1}* If you need anything while I am away, please...',
                    '<25>{#f/0}* Do not hesitate to call me.',
                    '<25>{#f/5}* ...',
                    '<25>{#f/1}* Be good, alright?'
                ])
        ],
        indie5: [
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<25>{#p/toriel}* Hello!\n* This is Toriel.',
                '<25>* My errands are taking longer than I thought they would.',
                '<25>* You must wait a little longer.',
                '<25>{#f/1}* Thank you for being patient, my child...',
                '<25>{#f/0}* You are very good.'
            ],
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<25>{#p/toriel}* Hello...\n* This is Toriel.',
                '<25>{#f/1}* I found what I was looking for...',
                '<25>{#f/0}* But a small, white puppy snatched it away!\n* How odd.',
                '<25>{#f/1}* Do dogs even like flour?',
                '<25>{#f/0}* Err, that is an unrelated question, of course.',
                '<25>* It will take a little longer for me to return.',
                '<25>{#f/1}* Thank you again for being so patient...'
            ],
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<32>{#p/basic}* (...)',
                '<32>{#p/human}* (You hear heavy panting on the other end of the phone.)',
                '<32>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                '<32>{#p/human}* (You hear a distant voice.)',
                '<25>{#p/toriel}{#f/2}* Stop, please!',
                '<32>{#s/bark}{#p/event}* Bark!\n{#s/bark}* Bark!',
                '<25>{#p/toriel}{#f/1}* Come back here with my cell phone!'
            ],
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<32>{#p/basic}* (...)',
                '<32>{#p/human}* (It sounds like a small, white dog is sleeping on the phone.)',
                '<32>{#p/basic}* (Snore... snore...)',
                '<32>{#p/human}* (You hear a distant voice.)',
                '<25>{#p/toriel}{#f/1}* Hellooo?\n* Little puppy...?',
                '<25>{#f/1}* Where are youuu?',
                '<25>{#f/0}* I will give you a nice pat on the head!',
                '<32>{#p/human}* (The snoring stops.)',
                '<25>{#p/toriel}* ... if you return with my cell phone.',
                '<32>{#p/human}* (The snoring resumes.)'
            ],
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<32>{#p/basic}* (...)',
                '<32>{#p/basic}* (Achoo!)',
                '<32>{#p/human}* (It sounds like a small, white dog sneezing in its sleep.)',
                '<25>* (You hear a distant voice.)',
                '<25>{#p/toriel}{#f/1}* Aha!\n* I heard that, you little white dog...',
                '<25>{#f/6}* Now I am going to find you!',
                '<32>{#p/human}* (The snoring stops.)\n* (The dog now seems to be on the run from something.)',
                '<25>{#p/toriel}{#f/8}* Hee hee, there is no escape!'
            ],
            [
                '<32>{#s/phone}{#p/event}* Ring, ring...',
                '<32>{#p/human}* (You hear a distant voice.)',
                '<25>{#p/toriel}{#f/1}* Hello...\n* This is... Toriel...',
                '<32>{#s/bark}{#p/event}* Bark!\n* Bark!',
                '<25>{#p/toriel}{#f/2}* No, bad puppy!',
                '<32>{#p/basic}* (Whimper... whimper...)',
                '<25>{#p/toriel}* There, there...\n* I will find another cell phone for you.',
                '<25>{#f/1}* Would that be alright?',
                '<32>{#p/basic}* (...)',
                '<32>{#s/bark}{#p/event}* Bark!',
                '<25>{#p/toriel}* Glad to hear it.',
                '<32>{#p/human}* (The dog could be heard walking away.)',
                '<25>{#p/toriel}* Please, forgive me for all of this nonsense.',
                '<25>{#f/1}* I will be back to pick you up shortly...'
            ]
        ],
        indie6: (early: boolean) => [
            '<32>{#s/phone}{#p/event}* Ring, ring...',
            ...([1, 5].includes(SAVE.data.n.state_wastelands_dummy) && SAVE.data.b.w_state_riddleskip
                ? [
                    early
                        ? '<25>{#p/toriel}{#g/torielTired}* ... already?'
                        : '<25>{#p/toriel}{#g/torielTired}* ... impatient, are we?',
                    '<25>{#f/9}* I really should not be surprised.',
                    '<25>{#f/5}* Just remember the dangers that lie ahead of you out there...',
                    '<25>{#f/1}* It would be a shame if you got hurt.'
                ]
                : [
                    '<25>{#p/toriel}* Hello?\n* This is Toriel.',
                    '<25>{#f/1}* You have not left the room, have you?',
                    '<25>{#f/0}* There are many dangers out there, and I do not want you to get hurt.',
                    '<25>{#f/1}* Take care of yourself, alright?'
                ])
        ],
        indie7: ['<32>{#p/basic}* A few minutes later...'],
        indie8: [
            '<25>{#p/toriel}* I have returned!',
            '<25>* Your patience thus far has been commendable.\n* Even I am impressed!',
            '<25>{#f/0}* Anyhoo.\n* It is time I took you home now.',
            '<25>{#f/1}* Please, allow me...'
        ],
        lobby_puzzle1: [
            '<25>{#p/toriel}{#f/0}* Welcome to our humble outpost, innocent one.',
            '<25>{#f/0}* There are many lessons that I must teach you about life here.',
            '<25>{#f/1}* First and foremost...',
            '<25>{#f/0}* Puzzles!',
            '<25>{#f/0}* Allow me to perform this quick demonstration.'
        ],
        lobby_puzzle2: [
            '<25>{#p/toriel}{#f/1}* It may seem strange to you now, but here on the outpost...',
            '<25>{#f/0}* Solving puzzles is a part of our daily routine.',
            '<25>{#f/0}* With time, and a little guidance, you will grow accustomed to them.'
        ],
        lobby_puzzle3: ['<25>{#p/toriel}* When you are ready, we may proceed.'],
        loox: {
            a: [
                "<32>{#p/basic}{#n1}* I heard you're quite flirty, for a human.",
                "<32>* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
                "<32>* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
                '<32>* I wonder...',
                '<32>* Just how far can you go?',
                '<32>* Perhaps, my friend, you could even become... a legend.'
            ],
            b: [
                '<32>{#p/basic}{#n1}* Hey human, have you tried flirting yet?',
                "<32>* Ha!\n* I can tell by the look on your face that you haven't yet.",
                "<32>* I gotta tell you, it's tons of fun.",
                "<32>* Your enemies won't know what to do with themselves!",
                '<32>* Psst... if you DO start flirting, I might have more to tell you.',
                '<32>* Good luck with that!'
            ],
            c: [
                "<32>{#p/basic}{#n1}* Hey human, now that you've started flirting...",
                '<32>* How does it feel?',
                "<32>* It's pretty great, right?",
                "<32>* As you {@fill=#cf7fff}FLIRT{@fill=#fff} with different kinds of monsters, you'll see hearts next to their names.",
                "<32>* The more types of monsters you {@fill=#cf7fff}FLIRT{@fill=#fff} with, the more hearts you'll have.",
                '<32>* I wonder...',
                '<32>* Just how far can you go?',
                '<32>* Perhaps, my friend, you could even become... a legend.'
            ],
            d: [
                "<32>{#p/basic}{#n1}* I hear you're somewhat of a bully in these parts.",
                '<32>* Ha!\n* Join the club, pal.',
                "<32>* You're talking to the number one bully around.",
                "<32>* As you {@fill=#3f00ff}BULLY{@fill=#fff} different kinds of monsters, you'll see swords next to their names.",
                "<32>* The more types of monsters you {@fill=#3f00ff}BULLY{@fill=#fff}, the more swords you'll have.",
                '<32>* Though, as a disclaimer, not ALL monsters can be bullied.',
                "<32>* It's like flirting... but with death.",
                '<32>* Fun, right?'
            ],
            e: pager.create(
                0,
                () => [
                    ...(30 <= SAVE.data.n.bully
                        ? [
                            "<32>{#p/basic}{#n1}* I heard you're quite the bully around here now.",
                            "<32>* Everyone's afraid of you, huh?"
                        ]
                        : 20 <= world.flirt
                            ? [
                                "<32>{#p/basic}{#n1}* I heard you're quite the romantic around here now.",
                                '<32>* Everyone loves you, huh?'
                            ]
                            : [
                                "<32>{#p/basic}{#n1}* I heard you're quite the hero around here now.",
                                '<32>* Everyone likes you, huh?'
                            ]),
                    '<32>* Well... personally, I think you have too much free time.'
                ],
                ['<32>{#p/basic}{#n1}* What?\n* Am I wrong?']
            )
        },
        manana: {
            a: pager.create(
                0,
                () =>
                    SAVE.data.b.napsta_performance
                        ? [
                            "<32>{#p/basic}{#n1}* So, you're the one who co-hosted that music show, eh?",
                            "<32>* Maybe now you'll have the means to accept my offer.",
                            "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip.",
                            "<32>* Now I liked that little show, so you'll get a discount.\n* 5G, take it or leave it.",
                            choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 5G?)', 'Ja', 'Nein')
                        ]
                        : [
                            ...(world.postnoot
                                ? [
                                    "<32>{#p/basic}{#n1}* Hey, have you noticed anything strange goin' on around here?",
                                    "<32>* I could'a sworn all the puzzles just de-activated themselves earlier.",
                                    "<32>* Anyway, I'm lookin' for a buyer on this limited edition Super Starwalker comic strip."
                                ]
                                : [
                                    '<32>{#p/basic}{#n1}* Finally, someone speaks to me!',
                                    "<32>* I've been standin' out here for ages, and nobody's takin' my offer.",
                                    "<32>* I'm just lookin' for someone to buy this limited edition Super Starwalker comic strip."
                                ]),
                            "<32>* Interested?\n* All I'm askin' for is 10G.",
                            choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 10G?)', 'Ja', 'Nein')
                        ],
                () =>
                    SAVE.data.b.napsta_performance
                        ? [
                            "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                            "<32>* All I'm askin' for is 5G.",
                            choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 5G?)', 'Ja', 'Nein')
                        ]
                        : [
                            "<32>{#p/basic}{#n1}* Interested in buyin' my limited edition Super Starwalker comic strip?",
                            "<32>* All I'm askin' for is 10G.",
                            choicer.create('{#n1!}* (Buy the Super Starwalker 1 for 10G?)', 'Ja', 'Nein')
                        ]
            ),
            b: () => [
                "<32>{#p/human}{#n1!}* (You don't have enough G.)",
                SAVE.data.b.napsta_performance
                    ? "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 5G..."
                    : "<32>{#p/basic}{#n1}* I'll be honest, that don't look like 10G..."
            ],
            c: ['<32>{#p/basic}{#n1}* Not interested, huh?', "<32>* Well, that's fine.\n* I'll just find someone else..."],
            d: [
                '<32>{#s/equip}{#p/human}{#n1!}* (You got the Super Starwalker 1.)',
                '<32>{#p/basic}{#n1}* Splendid!\n* Enjoy the comic strip.'
            ],
            e: ['<32>{#p/basic}{#n1}* Back again, huh?', "<32>* Sorry bud, I've got nothin' left to sell."],
            f: [
                "<32>{#p/human}{#n1!}* (You're carrying too much.)",
                "<32>{#p/basic}{#n1}* Them pockets of yours are lookin' kinda full..."
            ],
            g: [
                "<32>{#p/basic}{#n1}* I heard they're rebooting the comic franchise...",
                '<32>* The new main character is some snake fella with sunglasses or something.',
                "<32>* If I was in charge, I'd make a spinoff about that sidekick...",
                '<32>* Gumbert, I think?'
            ],
            h: [
                "<32>{#p/basic}{#n1}* Maybe now that we're free, they'll finally make that reboot they were planning.",
                "<32>* What was it called?\n* Oh, I've already forgotten..."
            ]
        },
        mananaX: () =>
            [
                [
                    '<32>{#p/basic}{#n1}* Now what was THAT racket?',
                    "<32>{#p/basic}{#n1}* Er, sorry, my eyesight's not what it used to be..."
                ],
                ['<32>{#p/basic}{#n1}* Huh?\n* It happened again?\n* Tch, kids these days...'],
                ['<32>{#p/basic}{#n1}* Kids these days...']
            ][Math.min(roomKills().w_puzzle4++, 2)],
        afrogX: (k: number) =>
            [
                ["<32>{#p/basic}{#n1}* If... if you d-do that again... I-I'm gonna have to stop you!"],
                ['<32>{#p/basic}{#n1}* N-no...\n* Not again...']
            ][k],
        patron: {
            a: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? 6 <= world.population
                            ? [
                                "<32>{#p/basic}{#n1}* I'm sad.\n* They took the DJ table to use for some tacky show later.",
                                '<32>* ... wait, that might actually be kind of cool.'
                            ]
                            : [
                                "<32>{#p/basic}{#n1}* I'm sad.\n* The bully who came through here earlier...",
                                '<32>* ... turned out to be you.',
                                '<32>* You saved us in the end, but why resort to such violence along the way?'
                            ]
                        : SAVE.data.b.napsta_performance
                            ? [
                                "<32>{#p/basic}{#n1}* I'm sad.\n* Musicians these days are way too hard on themselves...",
                                '<32>* Personally, I really liked that tune of theirs.',
                                "<32>* It's a shame we'll probably never get to hear it again.",
                                '<32>{#n1!}{#n2}* At least you still have steak to keep you company, right? ;)',
                                '<32>{#n2!}{#n1}* ... not this again.'
                            ]
                            : [
                                "<32>{#p/basic}{#n1}* I'm sad.\n* The food these days just gets worse and worse...",
                                '<32>* I was promised something \"real,\" but all I got was a cheap copy.',
                                '<32>{#n1!}{#n2}* Hey! ;)\n* Quit bad-mouthing my shop in front of the customers! ;)',
                                '<32>* Besides, what if your sense of taste is to blame ;)',
                                '<32>{#n2!}{#n1}* ... typical.'
                            ],
                () => [
                    SAVE.data.n.plot === 72 && 6 <= world.population
                        ? "<32>{#p/basic}{#n1}* ... it isn't what it is?"
                        : '<32>{#p/basic}{#n1}* ... it is what it is.'
                ]
            )
        },
        pie: () =>
            3 <= SAVE.data.n.cell_insult
                ? ['<32>{#p/human}* (You got the Burnt Pie.)']
                : SAVE.data.n.state_wastelands_mash === 1
                    ? ['<32>{#p/human}* (You got the Pie Soup.)']
                    : SAVE.data.b.snail_pie
                        ? ['<32>{#p/human}* (You got the Snail Pie.)']
                        : ['<32>{#p/human}* (You got the Butterscotch Pie.)'],
        plot_call: {
            a: () => [
                '<32>{#p/event}* Ring, ring...',
                3 <= SAVE.data.n.cell_insult
                    ? '<25>{#p/toriel}* Hello, child.'
                    : '<25>{#p/toriel}* Hello?\n* This is Toriel.',
                '<25>{#f/1}* For no reason in particular...',
                '<25>{#f/0}* Do you prefer cinnamon, or butterscotch?',
                choicer.create('* (Which do you prefer?)', 'Cinnamon', 'Bscotch'),
                3 <= SAVE.data.n.cell_insult
                    ? '<25>{#p/toriel}{#f/0}* I see.'
                    : '<25>{#p/toriel}* Oh, I see!\n* Thank you very much!'
            ],
            b: () => [
                '<32>{#p/event}* Ring, ring...',
                3 <= SAVE.data.n.cell_insult
                    ? '<25>{#p/toriel}* Hello, child.'
                    : '<25>{#p/toriel}* Hello?\n* This is Toriel.',
                [
                    '<25>{#f/1}* You do not DISLIKE butterscotch, do you?',
                    '<25>{#f/1}* You do not DISLIKE cinnamon, do you?'
                ][SAVE.data.n.choice_flavor],
                '<25>{#f/1}* I know what your preference is, but...',
                '<25>{#f/1}* Would you still be satisfied if it turned up on your plate?',
                choicer.create('* (Was sagst du?)', 'Ja', 'Nein')
            ],
            b1: () => [
                3 <= SAVE.data.n.cell_insult
                    ? '<25>{#p/toriel}{#f/0}* Got it.'
                    : '<25>{#p/toriel}* Right, right, of course.',
                '<25>{#f/1}* Carry on, then...'
            ],
            b2: () => [
                '<25>{#p/toriel}{#f/5}* ...',
                '<25>{#f/0}* Well then.',
                '<25>{#f/1}* ...',
                3 <= SAVE.data.n.cell_insult
                    ? '<25>{#f/0}* I will see what I can do.'
                    : '<25>{#f/0}* I will call you back later, my child.'
            ],
            c: [
                '<32>{#p/event}* Ring, ring...',
                '<25>{#p/toriel}{#f/1}* You do not have any allergies, do you?',
                '<25>{#f/5}* ...',
                '<25>{#f/5}* I suppose humans cannot even be allergic to monster food.',
                '<25>{#f/0}* Hee hee.\n* Forget I asked!'
            ],
            d: [
                '<32>{#p/event}* Ring, ring...',
                '<25>{#p/toriel}{#f/1}* Hello, little one.',
                '<25>{#f/0}* I realize now that it has been a while since I cleaned up.',
                '<25>{#f/1}* There are likely plenty of things strewn about...',
                '<25>{#f/0}* You may pick them up if you like, but do not try to carry too much.',
                '<25>{#f/1}* What if you see something you really want?',
                '<25>{#f/0}* You will want to leave room in your pockets for that.'
            ]
        },
        puzzle1A: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* (The switch appears to be stuck.)']
                : ['<32>{#p/basic}* The switch is stuck.'],
        puzzle3A: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* (The switch appears to be stuck.)']
                : ['<32>{#p/basic}* The switch is stuck.'],
        return1: () => [
            SAVE.data.n.cell_insult < 3
                ? '<25>{#p/toriel}{#f/1}* My child, how did you get here!?'
                : '<25>{#p/toriel}{#f/1}* Ah... there you are.',
            '<25>* Are you alright?'
        ],
        return2a: () =>
            SAVE.data.n.cell_insult < 3
                ? ['<25>{#p/toriel}* Not a scratch!\n* Impressive.']
                : ['<25>{#p/toriel}{#f/10}* Not a scratch...\n* Very well.'],
        return2b: () =>
            SAVE.data.n.cell_insult < 3
                ? ['<25>{#p/toriel}{#f/4}* You look hurt...', '<25>{#f/10}* There, there, I will heal you.']
                : ['<25>{#p/toriel}{#f/9}* You have been hurt.', '<25>{#f/10}* Please, allow me to heal your injuries.'],
        return2c: [
            '<25>{#p/toriel}{#f/3}* ...',
            '<25>{#f/11}* Who did this to you?\n* Someone is going to answer for this.'
        ],
        return3: () => [
            '<25>{#p/toriel}* I apologize, young one.\n* It was foolish of me to leave you on your own.',
            ...(world.postnoot
                ? [
                    '<25>{#f/1}* ... is it just me, or is something wrong with the atmosphere?',
                    '<25>{#f/5}* Perhaps the system that provides it is not functioning properly.',
                    '<25>{#f/5}* ...',
                    '<25>{#f/0}* No matter.\n* I am sure it will be resolved shortly.'
                ]
                : []),
            '<25>{#f/1}* Come!\n* I have a surprise for you.'
        ],
        return4: () => [
            '<25>{#p/toriel}* Welcome to my parlor!',
            ...(3 <= SAVE.data.n.cell_insult
                ? [
                    '<25>{#f/1}* Can you smell...',
                    '<25>{#p/toriel}{#f/2}* ... oh, I forgot to check the oven!',
                    '<25>{#p/toriel}{#f/5}* I have been so pre- occupied with your previous behavior, I...',
                    '<25>{#p/toriel}{#f/1}* I must take care of this now, please do not wander off!'
                ]
                : [
                    '<25>{#f/1}* Can you smell that?',
                    ...(SAVE.data.b.snail_pie
                        ? ['<25>{#f/0}* Surprise!\n* It is a homemade snail pie.']
                        : [
                            '<25>{#f/0}* Surprise!\n* It is a butterscotch- cinnamon pie.',
                            '<25>{#f/0}* I thought you might prefer that instead of snail pie for tonight.'
                        ]),
                    '<25>{#f/1}* Now, it has been a long time since I have cared for anyone...',
                    '<25>{#f/0}* But I still want you to have a nice time living here.',
                    '<25>{#f/0}* Follow me!\n* I have another surprise for you.'
                ])
        ],
        return5: [
            "<25>{#p/toriel}* Would you look at that!\n* It's a room of your very own.",
            '<25>{#f/1}* I hope you like it...'
        ],
        return6: [
            '<25>{#p/toriel}{#f/1}* Well, I have to go check on the pie.',
            '<25>{#f/0}* Please, make yourself at home!'
        ],
        runaway1: [
            ['<25>{#p/toriel}{#f/1}* Should you not play at the house instead?', '<25>{#f/0}* Come now.'],
            ['<25>{#p/toriel}{#f/9}* Child, it is dangerous to play out here.', '<25>{#f/5}* Trust me.'],
            ['<26>{#p/toriel}{#f/5}* The gravity is low here.\n* You will float away.'],
            ['<25>{#p/toriel}{#f/5}* The atmopsheric system is weak here.\n* You will suffocate.'],
            ['<25>{#p/toriel}{#f/23}* There is really nothing for you to see here.'],
            ['<25>{#p/toriel}{#f/1}* Would you like to read a book with me?'],
            ['<25>{#p/toriel}{#f/1}* Would you like to revisit the other rooms in the Outlands?'],
            ['<25>{#p/toriel}{#f/5}* I will not allow you to endanger yourself.'],
            ['<25>{#p/toriel}{#f/3}* Do you expect me to do this all day?'],
            ['<25>{#p/toriel}{#f/4}* ...'],
            ['<25>{#p/toriel}{#f/17}* ...', '<25>{#f/15}* I do not like the game you are playing.'],
            ['<25>{#p/toriel}{#f/17}* ...']
        ],
        runaway2: [
            '<25>{#p/toriel}{#f/1}* Please come back to the house, little one...',
            '<25>{#f/0}* I have something to show you!'
        ],
        runaway3: [
            '<25>{#p/toriel}{#f/2}* Child, no!\n* It is not safe for you out here!',
            '<25>{#f/0}* Come. I have finished preparing breakfast.'
        ],
        runaway4: ['<25>{#p/toriel}{#f/2}* Child!\n* What are you doing!?'],
        runaway5: [
            '<25>{#p/toriel}{#f/1}* Do you not realize what would happen if you left here?',
            '<25>{#f/5}* I... I am sorry I did not pay more attention to you...',
            '<25>{#f/9}* Maybe if I had, you would not have run away...'
        ],
        runaway6: [
            '<25>{#g/torielStraightUp}* I must admit... I am afraid of leaving here myself.',
            '<25>{#f/9}* There are many dangers beyond which would threaten us both.',
            '<25>{#g/torielSincere}* I do want to protect you from them, but...',
            '<25>{#g/torielStraightUp}* If I follow you out of here, I would only put you in further danger.',
            '<25>{#f/9}* My presence would be seen as a threat.'
        ],
        runaway7: [
            '<25>{#p/toriel}{#f/5}* Please...',
            '<25>{#f/1}* Come back with me, and I promise to take care of you.',
            '<25>{#f/5}* I will do anything you ask, alright?',
            '<25>{#f/18}* Please... do not leave me like the others...'
        ],
        runaway7a: [
            '<25>{#p/toriel}{#f/18}* ...',
            '<25>{#g/torielCompassionSmile}* There, there, my child.\n* Everything will be alright now.',
            '<25>{#f/1}* Return to the house, and I will rejoin you soon.',
            '<25>{#f/5}* There is something I have to do here.'
        ],
        runaway7b: [
            '<25>{#p/toriel}{#f/21}* How pathetic...',
            '<25>* I cannot...\n* Even protect a single human child...',
            '<32>{#p/human}* (You hear footsteps fading into the distance.)'
        ],
        silencio: {
            a: pager.create(
                0,
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            '<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you back here.',
                            "<32>* I've decided to revisit this old stomping ground of mine...",
                            "<32>* Besides, it's quiet here.\n* Just like me.",
                            "<32>* Oh, and I've retired from working at the CORE.",
                            '<32>* You see, when I joined the engineering team...',
                            "<32>* I didn't realize I'd be called on for impromptu guard duty.",
                            '<32>* ... it would seem deception of the corporate variety is beyond even my foresight.'
                        ]
                        : SAVE.data.b.napsta_performance
                            ? [
                                '<32>{#p/basic}{#n1}* Hey there.\n* Nice to see you at the show.',
                                "<32>* The name's Silencio... but I'm sure you've heard that by now.",
                                '<32>* Everyone around here knows my name, even that DJ.',
                                '<32>* I once performed my own kind of musical here.',
                                '<32>* \"Silencio\'s Great Escape,\" it was called.',
                                '<32>* Once it was over, I was gone before the crowd could even catch their breath.'
                            ]
                            : [
                                '<32>{#p/basic}{#n1}* Hey there.\n* Nice to meet you.',
                                "<32>* The name's Silencio... well, that's what they call me, anyway.",
                                '<32>* You wanna know why they call me that?',
                                "<32>* I'm like a space ninja, silent as the most silent of stars.",
                                '<32>* I can slip out of any danger, no exceptions.',
                                "<32>* Don't believe me?\n* Try something funny, and you'll see how fast I run."
                            ],
                () =>
                    SAVE.data.n.plot === 72
                        ? [
                            "<32>{#p/basic}{#n1}* Oh, yeah, I guess I'm free to leave the galaxy now.",
                            "<32>* ... but maybe I'll stay."
                        ]
                        : SAVE.data.b.napsta_performance
                            ? [
                                '<32>{#p/basic}{#n1}* You might even say, that performance of mine...',
                                '<32>* Was \"breathtaking.\"'
                            ]
                            : [
                                '<32>{#p/basic}{#n1}* What are you still talking to me for, huh?',
                                "<32>* I've already said everything I'm willing to."
                            ]
            )
        },
        
        socks0: ['<32>{#p/human}* (You peek inside.)', '<32>{#p/human}* (It appears the drawer is empty.)'],
        socks1: () =>
            world.darker
                ? ['<32>{#p/human}* (You peek inside.)', "<32>{#p/basic}* It's just a sock drawer."]
                : [
                    '<32>{#p/human}* (You peek inside.)',
                    '<32>{#p/basic}* Scandalous!',
                    "<32>* It's Toriel's sock collection.\n* A little messy...",
                    world.meanie
                        ? choicer.create('* (Make it messier?)', 'Ja', 'Nein')
                        : choicer.create('* (Clean up the mess?)', 'Ja', 'Nein')
                ],
        socks2: () =>
            world.meanie
                ? ['<33>{#p/human}* (You make a mess of the socks.)']
                : [
                    '<32>{#p/human}* (You organize the socks into matching pairs.)',
                    ...(SAVE.data.b.oops
                        ? []
                        : [
                            "<32>{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
                            choicer.create('* (Take the key?)', 'Ja', 'Nein')
                        ])
                ],
        socks3: () => [
            "<32>{#p/human}* (...)\n* (It appears there's a key hidden in the drawer.)",
            choicer.create('* (Take the key?)', 'Ja', 'Nein')
        ],
        socks4: ['<32>{#p/human}* (You decide not to do anything.)'],
        socks5: [
            '<32>{#s/equip}{#p/human}* (The Secret Key was added to your keyring.)',
            '<32>{#p/basic}* But what could it unlock...?'
        ],
        socks6: ['<32>{#p/human}* (You decide not to take anything.)'],
        socks7: () =>
            SAVE.data.b.svr
                ? [
                    '<32>{#p/human}* (You stare into the sock drawer, recalling the long journey that started here.)',
                    "<32>{#p/human}* (You can't help but wonder where you'd be without it.)"
                ]
                : world.darker
                    ? ["<32>{#p/basic}* It's just a sock drawer."]
                    : SAVE.data.n.plot < 72
                        ? ["<32>{#p/basic}* You can't stop looking at the socks."]
                        : SAVE.data.b.oops
                            ? [
                                "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                                '<32>* You have great priorities in life.'
                            ]
                            : [
                                "<32>{#p/basic}* You came all this way just to revisit Toriel's sock drawer...?",
                                '<32>* ... I guess that makes sense.'
                            ],
        steaksale: {
            a: pager.create(
                0,
                () =>
                    SAVE.data.b.napsta_performance
                        ? [
                            '<32>{#p/basic}{#n1}* Sup, lassy ;)',
                            "<32>* It was good seeyin' ya at the show, ya know? ;)",
                            '<32>* You did a real bang-up job ;)',
                            "<32>* If one thing's for sure, I think that calls for a special offer ;)",
                            '<32>* For a limited time only, our products will be infused with our \"premium\" ingredients ;)',
                            "<32>* And believe me, lassy, this ain't just the same old stuff as before, aw naw ;)",
                            '<32>* This stuff is GENUINE, yo ;)',
                            "<32>* It's a little more expensive, so I hope ya don't mind ;)",
                            "<32>* Now... why don'tcha check out what's for sale? ;)"
                        ]
                        : [
                            '<32>{#p/basic}{#n1}* Sup, lassy ;)',
                            '<32>* The boss man sent me out here to see what you country peeps are up to, ya know? ;)',
                            "<32>* You could say we're expanding our enterprise ;)",
                            "<32>* What's our enterprise, you ask? ;)",
                            "<32>* Well, it's quite simple really... we sell steak ;)",
                            "<32>* And this ain't the replicated stuff, aw naw ;)",
                            '<32>* This stuff is REAL, yo ;)',
                            '<32>* Anyone who says otherwise is a poser, ya feel me? ;)',
                            "<32>* That being said, why don'tcha check out what's for sale? ;)"
                        ],
                ["<32>{#p/basic}{#n1}* Why don'tcha check out what's for sale? ;)"]
            ),
            a1: ['<32>{#p/basic}{#n1}* Thanks for everything, lassy ;)'],
            b: () => [
                SAVE.data.b.napsta_performance
                    ? world.darker
                        ? '<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 40G.'
                        : '<32>{#p/basic}{#n1!}* It\'s labelled \"Sizzli Steak\" and costs 40G.\n* Smells like ultra-hyperbole.'
                    : world.darker
                        ? '<32>{#p/basic}{#n1!}* \"Sizzli Steak\" for 20G.'
                        : '<32>{#p/basic}{#n1!}* It\'s labelled \"Sizzli Steak\" and costs 20G.\n* Smells like hyperbole.',
                SAVE.data.b.napsta_performance
                    ? choicer.create('* (Buy the Sizzli Steak for 40G?)', 'Ja', 'Nein')
                    : choicer.create('* (Buy the Sizzli Steak for 20G?)', 'Ja', 'Nein')
            ],
            b1: ['<32>{#p/human}{#n1!}* (You got the Sizzli Steak.)', '<32>{#p/basic}{#n1}* Slick choice, lassy ;)'],
            b2: ['<32>{#p/human}{#n1!}* (You decide not to buy.)'],
            c: () => [
                SAVE.data.b.napsta_performance
                    ? world.darker
                        ? '<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 10G.'
                        : '<32>{#p/basic}{#n1!}* It\'s labelled \"Fizzli Soda\" and costs 10G.\n* Who would EVER buy this?'
                    : world.darker
                        ? '<32>{#p/basic}{#n1!}* \"Fizzli Soda\" for 5G.'
                        : '<32>{#p/basic}{#n1!}* It\'s labelled \"Fizzli Soda\" and costs 5G.\n* Who would buy this?',
                SAVE.data.b.napsta_performance
                    ? choicer.create('* (Buy the Fizzli Soda for 10G?)', 'Ja', 'Nein')
                    : choicer.create('* (Buy the Fizzli Soda for 5G?)', 'Ja', 'Nein')
            ],
            c1: ['<32>{#p/human}{#n1!}* (You got the Fizzli Soda.)', "<32>{#p/basic}{#n1}* Careful, it's sweet ;)"],
            c2: ['<32>{#p/human}{#n1!}* (You decide not to buy.)'],
            d: pager.create(
                0,
                () => [
                    "<32>{#p/human}{#n1!}* (You don't have enough G.)",
                    '<32>{#p/basic}{#n1}* Not enough money, huh? ;)',
                    SAVE.data.b.napsta_performance
                        ? '<32>{#p/basic}* That\'s alright, lassy ;)\n* Not everyone can afford the \"premium\" ingredients ;)'
                        : "<32>{#p/basic}* That's alright, lassy ;)\n* Just be sure to come back when you've got some ;)"
                ],
                ["<32>{#p/human}{#n1!}* (You don't have enough G.)"]
            ),
            e: pager.create(
                0,
                [
                    "<32>{#p/human}{#n1!}* (You're carrying too much.)",
                    '<32>{#p/basic}{#n1}* Maybe you should come back later ;)'
                ],
                ["<32>{#p/human}{#n1!}* (You're carrying too much.)"]
            ),
            f: ['<32>{#p/human}{#n1!}* (You got the Sizzli Steak.)'],
            g: ['<32>{#p/human}{#n1!}* (You got the Fizzli Soda.)'],
            h: ["<32>{#p/human}{#n1!}* (You're carrying too much.)"],
            i: [
                "<32>{#p/basic}{#n1}* By the way, we're outta stock ;)",
                "<32>* Seems you can't get enough of our stuff ;)",
                '<32>* Say, if- no, when you meet the boss-man... tell him this ;)',
                '<32>{#p/human}{#n1!}* (Aaron whispered something in your ear.)',
                '<32>{#p/basic}{#n1}* Good luck out there, lassy ;)'
            ]
        },
        supervisor: {
            a: ['<32>{#p/basic}* Later...'],
            b: [
                '<32>{#p/napstablook}* hey everyone...',
                '<32>* this is a little tune i wrote a while ago...',
                "<32>* i've been experimenting with my style lately, so...",
                "<32>* hopefully, it's good enough for you all",
                '<32>* ...',
                '<32>* well, here we go...'
            ],
            c1: ['<32>{*}{#p/basic}* Well, this is jazzy.{^30}{%}'],
            c2: [
                '<25>{*}{#p/toriel}{#f/7}* Why has Napstablook never mentioned this??\n* This is good!{^30}{%}',
                "<32>{*}{#p/basic}* Yeah, maybe they're just shy.{^30}{%}"
            ],
            c3: ['<32>{*}{#p/basic}* Ooh, bells ;){^30}{%}'],
            c4: ['<32>{*}{#p/basic}* Here comes the breakdown!{^30}{%}'],
            c5: ['<32>{*}{#p/basic}* Well, that was... something.{^30}{%}'],
            d: [
                '<32>{#p/napstablook}* yeah, that was something',
                '<32>{#p/napstablook}* oh well...\n* i probably bored you guys...',
                '<32>{#p/napstablook}* sorry...'
            ],
            e: [
                '<25>{|}{#p/toriel}{#f/2}* No, wait!\n* That was actually...',
                "<32>{#p/basic}* I don't think they can hear you, Toriel.",
                '<25>{#p/toriel}{#f/9}* ...\n* They never do...'
            ]
        },
        terminal: {
            a: () =>
                postSIGMA()
                    ? ["<32>{#p/human}* (You activate the terminal, but there's no incoming message.)"]
                    : SAVE.data.n.plot === 72
                        ? !world.runaway
                            ? [
                                '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                                "<32>{#p/alphys}* We're free, everyone!\n* This isn't a joke, the force field's gone!",
                                "<32>* Seriously, they're shutting down the core in a few days, so it's time to go!",
                                "<32>* You don't want to die here, do you?"
                            ]
                            : [
                                '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                                "<32>{#p/alphys}* The force field's gone.\n* Calling all citizens for immediate evacuation.",
                                "<32>* ... I know you're all afraid, but it's going to be okay.",
                                "<32>* They can't hurt us if we leave them behind."
                            ]
                        : 37.2 <= SAVE.data.n.plot
                            ? [
                                '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                                "<32>{#p/alphys}* The Foundry's fluid network has been repaired, thanks to our... v-very kind workers.",
                                '<32>* ...',
                                "<32>* On an unrelated note, we're... l-looking for new workers."
                            ]
                            : [
                                '<32>{#p/human}* (You activate the terminal and play the incoming message.)',
                                "<32>{#p/alphys}* The Foundry's fluid network is f-falling apart again.",
                                '<32>* The workers have promised a short turnaround, but things are looking bleak.',
                                '<32>* Please, i-if anyone out there can help, we need you...'
                            ]
        },
        torieldanger: {
            a: ['<25>{#p/toriel}{#f/1}* Have you tried checking the terminal?'],
            b: ['<25>{#p/toriel}{#f/1}* The password terminal is right over there, little one.']
        },
        latetoriel1: [
            '<25>{#p/toriel}{#npc/a}{#f/2}* ...!',
            '<25>{#f/5}* What are you doing out here, my ch...',
            '<25>{#f/9}* ... child...',
            '<25>{#f/5}* I cannot care for you any longer, child.\n* Nor should I.',
            '<25>{#f/5}* You have places to be, things to see...',
            '<25>{#f/10}* Who am I to keep you from that?',
            '<25>{#f/9}* ...',
            '<25>{#f/5}* Please, carry on without me...',
            '<25>{#f/1}* ... I know you can do the right thing...'
        ],
        latetoriel2: ['<25>{#p/toriel}{#npc/a}{#f/5}* ... go on...'],
        
        lateasriel: () =>
            [
                ['<25>{#p/asriel1}{#f/13}* Just leave me, Frisk...', "<25>{#f/15}* I can't come back with you, okay?"],
                [
                    "<25>{#p/asriel1}{#f/16}* I don't want to break their hearts all over again.",
                    "<25>{#f/13}* It's better if they never see me at all."
                ],
                [
                    '<25>{#p/asriel1}{#f/15}* ... what are you doing?',
                    '<25>{#f/15}* Are you trying to keep me company?',
                    '<25>{#f/23}* Frisk...',
                    '<25>{#f/22}* ...',
                    '<25>{#f/13}* Hey.',
                    '<25>{#f/13}* Let me ask you a question.',
                    '<25>{#f/15}* Frisk...\n* Why did you come here?',
                    '<25>{#f/13}* Everyone knows the story, right...?',
                    '<25>{#f/23}* \"Spacecraft who fly into the Ebott sector are said to disappear.\"',
                    '<25>{#f/22}* ...',
                    '<32>{#p/human}* (...)\n* (You tell Asriel the truth.)',
                    '<25>{#p/asriel1}{#f/25}* ...',
                    '<25>{#f/25}* Frisk... you...',
                    '<25>{#f/23}* ...',
                    "<25>{#f/23}* You don't have to be alone anymore, okay?",
                    "<25>{#f/17}* You've made so many wonderful friends here...",
                    "<25>{#f/17}* They'll look out for you, okay?"
                ],
                [
                    '<25>{#p/asriel1}{#f/15}* ...',
                    '<25>{#f/15}* I know why $(name) flew out here.',
                    "<25>{#f/16}* It wasn't for a very happy reason.",
                    "<25>{#f/13}* Frisk.\n* I'll be honest with you.",
                    '<25>{#f/15}* $(name) wanted nothing to do with humanity.',
                    '<25>{#f/16}* Why, they never said.',
                    '<25>{#f/15}* But they felt very strongly about that.'
                ],
                [
                    "<25>{#p/asriel1}{#f/17}* Frisk, it's okay.\n* You're not like $(name) at all.",
                    '<25>{#f/15}* In fact, though you have similar, uh, fashion choices...',
                    "<25>{#f/13}* I don't know why I ever acted like you were the same person.",
                    '<25>{#f/15}* Maybe...\n* The truth is...',
                    "<25>{#f/16}* $(name) just wasn't who I wanted them to be.",
                    '<25>{#f/13}* While, Frisk...',
                    "<25>{#f/17}* You're the kind of friend I've always wanted to have.",
                    '<25>{#f/20}* So maybe I was kind of projecting a little.',
                    "<25>{#f/17}* Let's be honest.\n* I did some weird stuff as a star."
                ],
                [
                    "<25>{#p/asriel1}{#f/13}* There's one last thing I feel like I should tell you.",
                    '<25>{#f/15}* When $(name) and I combined our SOULs together...',
                    '<25>{#f/16}* The control over our body was actually split between us.',
                    '<25>{#f/15}* They were the one that picked up their own empty body.',
                    "<25>{#f/13}* And then, when we made it to the planet's remains...",
                    '<25>{#f/13}* They were the one that wanted to...',
                    '<25>{#f/16}* ... to use our full power.',
                    '<25>{#f/13}* It took everything I had to resist it.',
                    '<25>{#f/15}* And then, because of me, we...',
                    "<25>{#f/22}* Well, that's why I ended up the way I did.",
                    '<25>{#f/23}* ... Frisk.',
                    "<25>{#f/17}* This whole time, I've blamed myself for that decision.",
                    "<25>{#f/13}* It's why I adopted that horrible view of the world.",
                    '<25>{#f/13}* \"Kill or be killed.\"',
                    '<25>{#f/17}* But now...\n* After meeting you...',
                    "<25>{#f/23}* Frisk, I don't regret that decision anymore.",
                    '<25>{#f/22}* I did the right thing.',
                    "<25>{#f/13}* If we'd killed those humans...",
                    '<25>{#f/15}* We would have had to wage war against all of humanity.',
                    '<25>{#f/17}* And in the end, everyone went free, right?',
                    '<25>{#f/17}* Even the others who came here made it out alive.',
                    '<25>{#f/13}* ...',
                    '<25>{#f/15}* But, $(name)...',
                    "<25>{#f/16}* ... I can't say for certain what happened to them after we died.",
                    '<25>{#f/15}* Nothing was ever found... not even their SOUL.',
                    "<25>{#f/15}* So... I can't help but wonder if they're... still out there.",
                    '<32>{#p/basic}* ...',
                    '<32>{#p/human}* (Es klingt, als würde jemand weinen...)'
                ],
                [
                    '<25>{#p/asriel1}{#f/17}* Frisk, thank you for listening to me.',
                    '<25>{#f/17}* You should really go be with your friends now, okay?',
                    '<25>{#f/13}* Oh, and, please...',
                    '<25>{#f/20}* In the future, if you, uh, see me...',
                    "<25>{#f/15}* ... don't think of it as me, okay?",
                    '<25>{#f/16}* I just want you to remember me like... this.',
                    '<25>{#f/17}* Someone that was your friend for a little while.',
                    '<25>{#f/13}* ...',
                    '<32>{|}{#p/human}* (You tell Asriel you really- {%}',
                    "<25>{#p/asriel1}{#f/23}* Frisk, it's okay.",
                    "<25>{#f/22}* You don't have to save everyone to be a good person.",
                    '<25>{#f/13}* Besides... even if I could keep this form...',
                    "<25>{#f/15}* I don't know if I could move on from what happened in the past.",
                    "<25>{#f/17}* ... just promise me you'll take care of yourself, alright?",
                    '<25>{#f/13}* ...',
                    '<25>{#f/15}* Well, see you.'
                ],
                ['<25>{#p/asriel1}{#f/13}* Frisk...', "<25>{#f/15}* Don't you have anything better to do?"],
                []
            ][Math.min(SAVE.data.n.lateasriel++, 8)],
        securefield: ['<33>{#p/basic}* There is a security field here.\n* It is active.'],
        trivia: {
            w_security: ["<32>{#p/basic}* It's a security field."],
            photoframe: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/13}* An empty photo frame...',
                            '<25>{#f/16}* Once upon a time, there WERE pictures in these frames.',
                            '<25>{#f/15}* Then, she took them out and never put them back.',
                            "<25>{#f/16}* ... must've hurt too much to look at them."
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* Empty photo frames are like missing memories...',
                            '<25>{#p/asriel1}{#f/15}* This place has way too many of them.'
                        ],
                        ['<25>{#p/asriel1}{#f/22}* Too many of these in this strange place.']
                    ][Math.min(asrielinter.photoframe++, 1)]
                    : SAVE.data.n.plot === 72 && !world.runaway
                        ? ['<32>{#p/basic}* Still an empty photo frame.']
                        : ['<32>{#p/basic}* An empty photo frame.'],
            w_paintblaster: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (This device seems to be a few decades out of date.)']
                    : world.darker
                        ? ['<32>{#p/basic}* A useless device of little importance to anyone.']
                        : ['<32>{#p/basic}* An old fuel injection device.'],
            w_candy: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The sign warns of unexpected appliance malfunctions.)']
                    : ['<32>{#p/basic}* \"Please note that appliances may be more malfunction-prone than they seem.\"'],
            w_djtable: () =>
                SAVE.data.b.svr
                    ? []
                    : world.darker
                        ? ["<32>{#p/basic}* It's a DJ set."]
                        : SAVE.data.n.plot === 72
                            ? ['<32>{#p/basic}* A fancy DJ set, which is surprisingly not in use right now.']
                            : ['<32>{#p/basic}* A fancy DJ set, equipped with knobs and sliders galore.'],
            w_froggit: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human.)',
                        '<32>* (You seem like you have grown into a thoughtful and conscientious person.)',
                        "<32>* (Whether that was from my advice or not...)\n* (I'm quite proud.)",
                        '<32>* Ribbit.'
                    ]
                    : [
                        '<32>{#p/basic}* Ribbit, ribbit.\n* (Excuse me, human...)',
                        '<32>* (I have some advice for you about battling monsters.)',
                        '<32>* (If you {@fill=#ff0}ACT{@fill=#fff} a certain way or {@fill=#3f00ff}FIGHT{@fill=#fff} until you almost defeat them...)',
                        '<32>* (They might not want to battle you anymore.)',
                        '<32>* (If a monster does not want to fight you, please...)',
                        '<32>* (Use some {@fill=#ff0}MERCY{@fill=#fff}, human.)\n* Ribbit.'
                    ],
            w_froggit_view: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You stare thoughtfully into the cosmos beyond...)']
                    : world.darker
                        ? []
                        : SAVE.data.n.plot === 72
                            ? [
                                "<32>{#p/basic}* It's ironic how staring at outer space...",
                                '<32>* Tends to be a great way to channel your inner thoughts.'
                            ]
                            : [
                                "<32>{#p/basic}* It's a view of outer space.",
                                '<32>* Certainly no shortage of those around here, is there?'
                            ],
            w_kitchenwall: () =>
                SAVE.data.n.plot === 9
                    ? ['<26>{#p/toriel}{#f/1}* Patience, my child!']
                    : ['<26>{#p/toriel}{#f/1}* This may take a while...'],
            w_lobby1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The sign speaks of strength of will in times of trouble.)']
                    : ['<32>{#p/basic}* \"Even when you stumble, the will to push onward shows through.\"'],
            w_pacing_view: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You stare happily into the cosmos beyond...)']
                    : world.darker
                        ? []
                        : SAVE.data.n.plot === 72
                            ? [
                                "<32>{#p/basic}* After such a long journey, the glass doesn't seem to scare you.",
                                '<32>* Not that it ever did in the first place.'
                            ]
                            : [
                                '<32>{#p/basic}* To think the only thing between you and the endless expanse is a sheet of glass...',
                                "<32>* Despite all common sense, this doesn't seem to bother you."
                            ],
            w_pacing1: () =>
                SAVE.data.n.plot === 72
                    ? [
                        '<32>{#p/basic}* Ribbit, ribbit.\n* (Someone passed by here not too long ago.)',
                        '<32>* (He told me not to tell you where he was going.)',
                        "<32>* (I wasn't going to, but then, he just seemed so sad...)",
                        "<32>* (He's probably at the platform just past the entrance now.)",
                        '<32>* (Go. Speak to him. Something good will come of it.)\n* Ribbit.',
                        '<32>{#p/basic}* ... Asriel...'
                    ]
                    : [
                        '<32>{#p/basic}* Ribbit, ribbit.\n* (Sigh...)',
                        '<32>* (My \"friend\" doesn\'t really like being kind to me.)',
                        '<32>* (If given the option, they choose to hurt me instead.)',
                        "<32>* (That's right.......)\n* (Hurting me............)\n* (................)",
                        "<32>* (At least you're kind to me.)\n* Ribbit."
                    ],
            w_pacing2: () =>
                SAVE.data.n.plot === 72
                    ? SAVE.data.b.oops
                        ? [
                            '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                            '<32>* (Have you heard from my friend?)',
                            '<32>* (They were standing here a few days ago, just to my left...)',
                            '<32>* (But some time after your arrival, they disappeared.)',
                            "<32>* (They did say they'd leave if you hurt anyone...)",
                            SAVE.data.n.exp <= 0
                                ? "<32>* (Which is confusing, since you definitely haven't done that.)\n* Ribbit."
                                : '<32>* (Maybe next time, you could try being a little nicer?)\n* Ribbit.'
                        ]
                        : [
                            '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                            "<32>* (My friend is the happiest they've ever been.)",
                            "<32>* (They said they'd leave if you hurt anyone, but you haven't.)",
                            "<32>* (In fact, they've decided to stay to my left forever.)",
                            '<32>* (As for that \"friend\" of theirs who always tried to hurt them...)',
                            '<32>* (Oh, he seems to have turned himself into a goat.)\n* Ribbit.'
                        ]
                    : [
                        '<32>{#p/basic}* Ribbit, ribbit.\n* (Hello, human...)',
                        '<32>* (Have you ever tried checking your ITEMs?)',
                        "<32>* (If you've picked up anything, that's where you'll find it.)",
                        '<32>* (What do I have in my ITEMs, you ask?)',
                        "<32>* (Oh, you're silly... monsters don't have ITEMs!)\n* Ribbit."
                    ],
            w_pacing3: () =>
                SAVE.data.n.plot === 72
                    ? SAVE.data.n.bully < 1
                        ? [
                            '<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for always showing mercy to us monsters.)',
                            '<32>* (I know I gave you advice on how to beat people up safely...)',
                            "<32>* (But that didn't mean I wanted you to do it.)",
                            '<32>* (You are a kind human indeed.)\n* Ribbit.'
                        ]
                        : SAVE.data.n.bully < 15
                            ? [
                                '<32>{#p/basic}* Ribbit, ribbit.\n* (Thank you for keeping the beatings to a minimum.)',
                                '<32>* (I know I gave you advice on how to beat people up safely...)',
                                "<32>* (But that didn't mean I wanted you to do it.)",
                                "<32>* (You aren't too terrible, at least for a human.)\n* Ribbit."
                            ]
                            : [
                                '<32>{#p/basic}* Ribbit, ribbit.\n* (So you have proven to be a formidable threat.)',
                                "<32>* (Yet, somehow, I'm still not afraid of you...)",
                                '<32>* (Perhaps at the end, you offered mercy when you could have attacked.)',
                                '<32>* (I do appreciate the restraint you have shown.)\n* Ribbit.'
                            ]
                    : [
                        "<32>{#p/basic}* Ribbit, ribbit.\n* (If you beat up a monster until it's almost dead...)",
                        '<32>* (Its name will turn blue.)',
                        '<32>* (Weird, right?)\n* (But I heard humans turn blue when they get beat up, too.)',
                        '<32>* (So, I suppose you can relate to that.)',
                        '<32>* (Well, thank you for listening to my head-talk.)\n* Ribbit.'
                    ],
            w_puzzle1_view: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You stare deeply into the cosmos beyond...)']
                    : world.darker
                        ? []
                        : SAVE.data.n.plot === 72
                            ? ['<32>{#p/basic}* In the end, these rooms still feel like nothing more than lookout areas.']
                            : [
                                '<32>{#p/basic}* Why does it feel like some of these rooms...',
                                '<32>* ... were just made solely to be lookout areas?'
                            ],
            w_puzzle2: () =>
                SAVE.data.b.svr
                    ? world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                        ? [
                            '<32>{#p/human}* (The sign describes puzzle- solving as an unnecessary part of space exploration.)',
                            ...[
                                [
                                    '<25>{#p/asriel1}{#f/13}* Unlike most signs, this one has a point.',
                                    "<25>{#f/15}* And that's not just because I'm the one who wrote it."
                                ],
                                ["<25>{#p/asriel1}{#f/3}* ... don't tell me you actually enjoyed these puzzles."],
                                ["<25>{#p/asriel1}{#f/10}* Frisk, even you're not THAT weird."]
                            ][Math.min(asrielinter.w_puzzle2++, 2)]
                        ]
                        : ['<32>{#p/human}* (The sign describes the value of patience in space.)']
                    : world.nootflags.has('w_puzzle2') // NO-TRANSLATE

                        ? [
                            '<32>{#p/basic}* \"The final frontier is a deep dark sea.\"',
                            '<32>* \"Navigating its waters should NEVER require solving badly designed puzzles!\"'
                        ]
                        : [
                            '<32>{#p/basic}* \"The final frontier is a deep dark sea.\"',
                            '<32>{#p/basic}* \"Before charging into the {@fill=#ff993d}great unknown{@fill=#fff}, you must wait for its {@fill=#00a2e8}currents to align{@fill=#fff}.\"'
                        ],
            w_puzzle3_view: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You stare reflectively into the cosmos beyond...)']
                    : world.darker
                        ? []
                        : SAVE.data.n.plot === 72
                            ? ['<32>{#p/basic}* It sure... was... a nice view.']
                            : ['<32>{#p/basic}* It sure is a nice view.'],
            w_puzzle4: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The sign appears to be an advertisement for a now- defunct steak sale.)']
                    : [
                        '<32>{#p/basic}* \"Be sure to catch a slice of Glyde\'s Signature Steak (TM) in the activities room!\"'
                    ],
            w_ta_box: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/20}* Yeah... Toriel was never one to keep these in one piece.',
                            '<25>{#f/21}* Even these replicas of my model starships got smashed...'
                        ],
                        [
                            "<25>{#f/13}* It's surprising.\n* She's usually such an organized person.",
                            '<25>{#p/asriel1}{#f/17}* ... she must have been having a bad day.'
                        ],
                        ['<25>{#p/asriel1}{#f/13}* It happens...']
                    ][Math.min(asrielinter.w_ta_box++, 2)]
                    : world.darker
                        ? ["<32>{#p/basic}* It's a toy box.\n* The model starships have been smashed to pieces."]
                        : SAVE.data.n.plot === 72
                            ? [
                                '<32>{#p/basic}* The little ships in this box were never repaired.',
                                "<32>* If this was at Asgore's house, they'd be in perfect shape."
                            ]
                            : [
                                '<32>{#p/basic}* A box of model starships!\n* And... shattered glass?',
                                '<32>* Looks like someone broke their little ships.'
                            ],
            w_ta_cabinet: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* (You can't find anything in here besides several of the exact same outfit.)"]
                    : [
                        '<32>{#p/basic}* A cabinet full of blue and yellow striped shirts.',
                        ...(SAVE.data.n.plot === 72 ? ["<32>* Like that's ever gonna change."] : [])
                    ],
            w_ta_frame: () =>
                SAVE.data.b.svr
                    ? [["<25>{#p/asriel1}{#f/21}* ... it's missing..."], ['<25>{#p/asriel1}{#f/21}* ...']][
                    Math.min(asrielinter.w_ta_frame++, 1)
                    ]
                    : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* An empty photo frame.', "<32>* There still isn't much else to say."]
                        : ['<32>{#p/basic}* An empty photo frame.', "<32>* There's not much else to say."],
            w_ta_paper: () =>
                SAVE.data.b.svr
                    ? [
                        "<32>{#p/human}* (The drawing doesn't appear to be anything of importance.)",
                        ...[
                            [
                                "<25>{#p/asriel1}{#f/13}* It's long gone now, but the real drawing I made here...",
                                '<25>{#f/17}* ... was basically the blueprint for my \"god of hyperdeath\" form.',
                                '<25>{#f/17}* Super skybreaker, titanium striker...',
                                '<25>{#f/20}* And, of course, the legendary \"hyper goner.\"'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/17}* Yeah... I guess I had it all planned out.',
                                '<25>{#f/20}* I came up with lots of crazy stuff, all the time...',
                                '<25>{#f/1}* Ooh, you would have ADORED my pan-galactic starship concept.'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/17}* Frisk, I hope...',
                                '<25>{#f/23}* I really hope we can have a moment like that between us.',
                                '<25>{#f/22}* Back with $(name), it was always...',
                                '<25>{#f/15}* ... difficult.'
                            ],
                            ["<25>{#p/asriel1}{#f/20}* Don't worry.\n* If you can't draw, I'll just teach you."]
                        ][Math.min(asrielinter.w_ta_paper++, 3)]
                    ]
                    : world.darker
                        ? ['<32>{#p/basic}* A forgettable drawing.\n* Nothing like the original.']
                        : [
                            "<32>{#p/basic}* A children's drawing, depicting a giant monster with rainbow wings.",
                            "<32>* It's just like the one at home..."
                        ],
            w_tf_couch: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The couch appears to have never been used.)']
                    : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* No matter how much time passes, it's unlikely anyone will ever sit here."]
                        : world.darker
                            ? ["<32>{#p/basic}* It's a couch.\n* What else were you expecting?"]
                            : [
                                '<32>{#p/basic}* A comfortable-looking couch.',
                                '<32>* The temptation to sink into its luscious cushions is hard to resist...'
                            ],
            w_tf_table: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* (You glance at the end table, but it doesn't appear to glance back.)"]
                    : [
                        '<32>{#p/basic}* An unremarkable end table.',
                        "<32>{#p/basic}* Rather unrealistically, it's in near-perfect condition."
                    ],
            w_tf_window: () =>
                SAVE.data.b.svr
                    ? SAVE.data.b.c_state_secret1_used && SAVE.data.b.c_state_secret5_used
                        ? ['<32>{#p/human}* (You stare wishfully into the cosmos beyond...)']
                        : ['<32>{#p/human}* (You stare wistfully into the cosmos beyond...)']
                    : world.darker
                        ? ["<32>{#p/basic}* It's just another window."]
                        : SAVE.data.n.plot === 72
                            ? ["<32>{#p/basic}* As always, it's a beautiful view of outer space."]
                            : ["<32>{#p/basic}* It's a beautiful view of outer space."],
            w_th_door: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* (The sign describes the room within as being incomplete.)',
                        ...[
                            [
                                "<25>{#p/asriel1}{#f/3}* If this house weren't a replica, that would be Dad's room...",
                                '<25>{#f/4}* You can guess why it was never finished.'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/13}* ...',
                                '<25>{#f/15}* That speech affected Mom in a... not good way.',
                                '<25>{#f/4}* As a star, I sometimes... spied on her.',
                                "<25>{#f/3}* And the way she was talking, it's like she never left that moment.",
                                '<25>{#f/13}* Then, you arrived, and everything changed...'
                            ],
                            [
                                '<25>{#p/asriel1}{#f/13}* ...',
                                "<25>{#f/15}* This is too awkward.\n* I'm going to pretend we aren't here."
                            ],
                            ['<25>{#p/asriel1}{#f/13}* ...']
                        ][Math.min(asrielinter.w_th_door++, 3)]
                    ]
                    : ['<32>{#p/basic}* \"Room under renovations.\"'],
            w_th_mirror: () =>
                SAVE.data.b.svr
                    ? ["<25>{#p/asriel1}{#f/24}* It's us..."]
                    : world.genocide
                        ? ['<32>{#p/basic}* ...']
                        : world.darker
                            ? ["<32>{#p/basic}* It's you."]
                            : SAVE.data.b.w_state_catnap || SAVE.data.n.plot > 17
                                ? ["<32>{#p/basic}* It's you...", '<32>{#p/basic}* ... and it always will be.']
                                : ["<32>{#p/basic}* It's you!"],
            w_th_plant: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You thank the plant for the warmth it brings each day.)']
                    : SAVE.data.n.plot === 72
                        ? ["<32>{#p/basic}* This plant is just happy you're still alive."]
                        : world.darker
                            ? ['<32>{#p/basic}* This plant is not very happy to see you.']
                            : SAVE.data.b.oops
                                ? ['<32>{#p/basic}* This plant is happy to see you.']
                                : ['<32>{#p/basic}* This plant is ecstatic about seeing you!'],
            w_th_sausage: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You rustle the corny plant.)']
                    : ['<32>{#p/basic}* This plant looks quite corny.'],
            w_th_table1: () => [
                '<32>{#p/human}* (You look under the table and find a set of crayons.)',
                ...(SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/24}* I think $(name) might have lost the blue crayon.',
                            '<25>{#f/7}* ... actually, no.\n* I KNOW they lost the blue crayon.',
                            '<25>{#f/6}* It turned up later in a food chest, but nobody thought to check it.',
                            '<25>{#f/16}* They must have been trying to claim the chest as their own.'
                        ],
                        [
                            "<26>{#p/asriel1}{#f/4}* If we ever get a new set of crayons, I'm keeping watch.",
                            '<25>{#f/3}* The moment you even think about losing a crayon...',
                            "<26>{#f/8}* I'll be there to stop that crime train before it even hits the tracks.",
                            '<25>{#f/2}* Just you wait.'
                        ],
                        ["<25>{#p/asriel1}{#f/31}* I've got my eyes on you, Frisk.", '<25>{#f/8}* And... maybe my ears.'],
                        ['<25>{#p/asriel1}{#f/10}* Are you staring at my ears again?\n* You keep doing that.']
                    ][Math.min(asrielinter.w_th_table1++, 3)]
                    : world.edgy
                        ? ['<32>{#p/basic}* Two crayons are missing from the set.']
                        : world.darker
                            ? ['<32>{#p/basic}* One crayon is missing from the set.']
                            : [
                                '<32>{#p/basic}* The ever-evasive blue crayon, missing for a hundred years...',
                                '<32>{#p/basic}* Truly a legend of our time.'
                            ])
            ],
            w_th_table2: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                        ...[
                            [
                                '<25>{#p/asriel1}{#f/27}* $(name) and I were never really into those kinds of things.',
                                '<25>{#p/asriel1}{#f/15}* Well... I say never.',
                                "<25>{#p/asriel1}{#f/15}* Uh, let's just not talk about it."
                            ],
                            [
                                '<25>{#p/asriel1}{#f/13}* ...',
                                '<25>{#p/asriel1}{#f/13}* The last time we did, a table got flipped over.',
                                '<25>{#p/asriel1}{#f/17}* Just sibling things.\n* You know how it goes with card games.'
                            ],
                            ['<25>{#p/asriel1}{#f/17}* ...']
                        ][Math.min(asrielinter.w_th_table2++, 2)]
                    ]
                    : world.darker
                        ? [
                            '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                            "<33>{#p/basic}* It's just not worth your time."
                        ]
                        : SAVE.data.n.plot === 72
                            ? [
                                '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                                "<33>{#p/basic}* Soon enough, we'll never have to think about these again."
                            ]
                            : [
                                '<32>{#p/human}* (You look under the table and find a deck of cards.)',
                                "<33>{#p/basic}* They're holographic, of course."
                            ],
            w_tk_counter: () =>
                SAVE.data.b.svr
                    ? [
                        '<32>{#p/human}* (You run your hand across the cutting board, noting the various grooves and ridges.)'
                    ]
                    : world.darker
                        ? ["<32>{#p/basic}* It's a cutting board."]
                        : ["<32>{#p/basic}* Toriel's cutting board.\n* It's not as up-to-scratch as it used to be."],
            w_tk_sink: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/21}* $(name) always said leaving fur in the drain was super gross.',
                            '<25>{#f/15}* I always thought it was normal, though...'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* Do humans not shed fur?\n* $(name) would never tell me things like this.'
                        ],
                        ["<25>{#p/asriel1}{#f/17}* I do have reason to believe humans shed.\n* Even if it's not fur."]
                    ][Math.min(asrielinter.w_tk_sink++, 2)]
                    : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* Remnants of the white fur once stuck here still remain to this very day.']
                        : ['<32>{#p/basic}* There are clumps of white fur stuck in the drain.'],
            w_tk_stove: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/13}* I have to wonder why she thought buying this would be a good idea.',
                            "<25>{#f/10}* Unless she wanted to re-create Asgore's kitchen...?",
                            "<25>{#f/17}* For someone who didn't like him, she had a weird way to show it."
                        ],
                        [
                            '<25>{#p/asriel1}{#f/15}* I really wish Toriel and Asgore stayed together sometimes.',
                            "<25>{#f/16}* ... but I guess it's for the best that they didn't."
                        ],
                        ["<25>{#p/asriel1}{#f/13}* It just wasn't meant to be, Frisk..."]
                    ][Math.min(asrielinter.w_tk_stove++, 2)]
                    : SAVE.data.n.state_wastelands_toriel === 2
                        ? ["<32>{#p/basic}* It's just a stovetop.\n* No one is going to use it."]
                        : world.darker
                            ? ["<32>{#p/basic}* It's just a stovetop."]
                            : SAVE.data.n.plot === 72
                                ? ['<32>{#p/basic}* The stovetop is very clean.\n* Toriel may not need a new one on the new world.']
                                : ['<32>{#p/basic}* The stovetop is very clean.\n* Toriel must use fire magic instead.'],
            w_tk_trash: () =>
                SAVE.data.b.svr
                    ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                    : SAVE.data.n.plot === 72
                        ? ['<32>{#p/basic}* Rather symbolically, the trash can has been emptied.']
                        : ['<32>{#p/basic}* There is a crumpled up recipe for Starling Tea.'],
            
            w_tl_azzychair: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You note the fairly large size of the dining chair.)']
                    : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ['<32>{#p/basic}* A larger dining chair.']
                        : ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a queen."],
            w_tl_bookshelf: pager.create(
                1,
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                        ]
                        : [
                            "<32>{#p/basic}* It's a bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"Did you know that snails have a chainsaw-like tongue called a radula?\"',
                            '<32>* \"Not many folks know about that one.\"',
                            '<32>* \"Another neat thing about \'em is how their digestive systems flip as they mature.\"',
                            '<32>* \"Oh, and did I mention...\"',
                            '<32>* \"Snails Talk. {^10}Really. {^10}Slowly.\"',
                            '<32>* \"Just kiddin\', snails don\'t talk.\"',
                            '<32>* \"I mean, could you imagine a world with talking snails?\"\n* \"I know I couldn\'t.\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ],
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                        ]
                        : [
                            "<32>{#p/basic}* It's a bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"Dreemurr Family Recipes: Snail Pie\"',
                            '<32>* \"Snail Pie is a coveted tradition among members of the Dreemurr family line.\"',
                            '<32>* \"Making it is a simple process, and can be broken down into five steps.\"',
                            '<32>* \"First, prepare the bottom crust by laying it on top of a pie plate.\"',
                            '<32>* \"Next, whisk evaporated milk, eggs, and spices together in a bowl until smooth.\"',
                            '<32>* \"Then, take several well-aged snails, and thoroughly incorporate into the mixture.\"',
                            '<32>* \"After that, pour the contents of the bowl into the bottom crust.\"',
                            '<32>* \"Last, prepare the top crust by cutting sheet into strips and forming a lattice.\"',
                            '<32>* \"Then just bake the pie!\"',
                            '<32>* \"Once the pie is ready, take it out of the oven, let it cool, and serve!\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ],
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of snail facts, family recipes, and gardening tips.)'
                        ]
                        : [
                            "<32>{#p/basic}* It's a bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"Howdy, fellow gardeners.\"',
                            '<32>* \"When it comes to Starling flowers, the line between growth and stagnation...\"',
                            '<32>* \"Is access to open space.\"',
                            '<32>* \"That is why they are commonly grown in Aerialis...\"',
                            '<32>* \"It is the most open area of the outpost.\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ]
            ),
            
            w_tl_goreychair: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You note the small size of the dining chair.)']
                    : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ['<32>{#p/basic}* A smaller dining chair.']
                        : world.genocide
                            ? ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a demon."]
                            : world.darker
                                ? ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a prince."]
                                : SAVE.data.b.oops
                                    ? ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a child.\n* Like you!"]
                                    : ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for... a little angel.\n* Like you!"],
            w_tl_table: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The plant appears to be decorative in nature.)']
                    : world.darker
                        ? ['<32>{#p/basic}* A decorative plant.\n* Nothing more.']
                        : ["<32>{#p/basic}* A decorative plant on Toriel's dining table."],
            w_tl_tools: () =>
                SAVE.data.b.svr
                    ? [
                        [
                            '<25>{#p/asriel1}{#f/20}* $(name) used to pretend these things were musical instruments.',
                            '<25>{#f/17}* They\'d pull them out, start \"playing\" them...',
                            '<25>{#f/20}* Once, I joined in, and we did a little fire- poker-instrument duet.',
                            '<26>{#f/13}* We started using our voices to emulate the instruments, and then...',
                            '<25>{#f/17}* Mom and Dad walked in to add backing vocals!'
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* Then, as it turns out, someone had been listening in outside.',
                            '<25>{#f/15}* Before we knew it, we had monsters coming to the house in droves...',
                            '<25>{#f/17}* $(name) and I were still in the middle of the room, doing our thing.',
                            '<25>{#f/20}* But now we had an entire orchestra behind us!',
                            '<25>{#f/17}* We must have performed half of the Harmonexus Index that day.',
                            "<25>{#f/17}* ... it's an old book full of songs from our culture."
                        ],
                        [
                            '<25>{#p/asriel1}{#f/13}* All that because we played pretend with some fire pokers...',
                            '<25>{#f/17}* They say you can make an instrument out of anything.',
                            '<25>{#f/13}* ...',
                            "<25>{#f/15}* Wait...\n* I'M an anything..." 
                        ],
                        ["<25>{#p/asriel1}{#f/20}* Please don't make a musical instrument out of me."]
                    ][Math.min(asrielinter.w_tl_tools++, 3)]
                    : world.darker
                        ? ['<32>{#p/basic}* Fire pokers.']
                        : SAVE.data.n.plot === 72
                            ? [
                                "<32>{#p/basic}* They're just fire pokers...\n* Or are they?",
                                "<32>* Consider that Toriel's fire is only pleasantly warm, and not hot at all.",
                                '<32>* Why would she need these?',
                                '<32>* Thus, by the process of elimination, these must be advanced musical instruments.'
                            ]
                            : [
                                '<32>{#p/basic}* A rack of advanced musical instruments.',
                                '<32>* Upon closer inspection, you realize these are in fact fire pokers.',
                                "<32>* It's hard to tell, given that these tools were likely made...",
                                '<32>* Before the outpost itself even existed.'
                            ],
            
            w_tl_torichair: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You note the exceptional size of the dining chair.)']
                    : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ['<32>{#p/basic}* A king-sized dining chair.']
                        : ["<32>{#p/basic}* One of Toriel's dining chairs.\n* Fit for a king."],
            w_toriel_toriel: () => [
                "<32>{#p/basic}* It's locked.",
                toriSV()
                    ? SAVE.data.n.plot < 17.001
                        ? '<32>{#p/basic}* It sounds like Toriel is crying...'
                        : '<32>{#p/basic}* It sounds like Toriel is asleep...'
                    : '<32>{#p/basic}* It sounds like Toriel is writing...'
            ],
            w_tt_bed: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The bed seems a lot smaller than it might have used to.)']
                    : SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                        ? ["<32>{#p/basic}* It's a bed."]
                        : SAVE.data.n.plot < 72 || world.runaway
                            ? [
                                "<32>{#p/basic}* It's Toriel's bed.",
                                ...(world.darker ? [] : ['<32>* Certainly too big for the likes of you.'])
                            ]
                            : [
                                "<32>{#p/basic}* It's Toriel's bed.",
                                "<32>* You've still got some time to go, but you'll grow into it."
                            ],
            w_tt_bookshelf: pager.create(
                1,
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                        ]
                        : [
                            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                                ? "<32>{#p/basic}* It's a bookshelf."
                                : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"Our homeworld gone... our people dead... but why?\"',
                            '<32>* \"Surely, the humans must\'ve had a reason for their attacks.\"',
                            '<32>* \"Did our kind truly pose a threat to them?\"',
                            '<32>* \"Was the threat of our potential truly that dire?\"',
                            '<32>* \"Whatever the case may be, we were cornered, and there was nowhere else to go.\"',
                            '<32>* \"Capitulation was our only real means of survival.\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ],
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                        ]
                        : [
                            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                                ? "<32>{#p/basic}* It's a bookshelf."
                                : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"When a boss monster is born, a magical link forms between the parents and the child.\"',
                            '<32>* \"Through this, their SOUL is created, ageing the parents along with the child.\"',
                            '<32>* \"The SOUL of a fully-grown boss monster is the strongest known to monsterkind...\"',
                            '<32>* \"Able to persist after death, if only for the briefest of periods.\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ],
                () =>
                    SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The books on this bookshelf consist of history, biology, and a foreboding possibility.)'
                        ]
                        : [
                            SAVE.data.n.state_wastelands_toriel === 2 || world.runaway
                                ? "<32>{#p/basic}* It's a bookshelf."
                                : "<32>{#p/basic}* It's Toriel's private bookshelf.",
                            '<32>{#p/human}* (You pick out a book...)',
                            '<32>{#p/basic}* \"We often worry about what would happen if a human attacked us.\"',
                            '<33>* \"But what if one of our own attacked instead...?\"',
                            '<32>* \"Would we as a society be able to handle such a betrayal?\"',
                            '<32>* \"But who would think to do such a thing?\"',
                            '<32>{#p/human}* (You put the book back on the shelf.)'
                        ]
            ),
            w_tt_cactus: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (This cactus seems to remind you of someone you once knew.)']
                    : SAVE.data.n.plot < 72
                        ? world.darker
                            ? ['<32>{#p/basic}* Finally, a houseplant we can all relate to.']
                            : ['<32>{#p/basic}* Ah, the cactus.\n* Truly the most tsundere of plants.']
                        : ["<32>{#p/basic}* It's not like this cactus was waiting for you to come back or anything..."],
            w_tt_chair: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (This chair appears to be a little small for the person who owns it.)']
                    : world.darker
                        ? ["<32>{#p/basic}* It's a reading chair."]
                        : SAVE.data.n.plot === 72
                            ? [
                                "<32>{#p/basic}* Toriel's dedicated reading chair...",
                                "<32>* ... at least until Asgore decides he'd like it instead.",
                                "<32>* He's always wanted this chair.\n* I'd be surprised if he didn't take it with him."
                            ]
                            : ["<32>{#p/basic}* Toriel's dedicated reading chair.", '<32>* Smells like lazy bones.'],
            w_tt_diary: pager.create(
                0,
                ...[
                    [
                        '<32>{#p/human}* (You look to the circled paragraph.)',
                        '<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton want a friend?\"',
                        '<32>* \"Answer: Because he was feeling BONELY...\"',
                        '<32>{#p/basic}* The jokes continue from here at a similar caliber.'
                    ],
                    [
                        '<32>{#p/human}* (You look to another paragraph.)',
                        '<32>{#p/toriel}{#f/21}* \"Question: What\'s another name for a skeleton\'s vices?\"',
                        '<32>* \"Answer: HOLLOW pursuits...\"',
                        "<32>{#p/basic}* There's no sense in continuing to read these."
                    ],
                    [
                        '<32>{#p/human}* (You look to another paragraph.)',
                        '<32>{#p/toriel}{#f/21}* \"Question: How does a skeleton say goodbye?\"',
                        '<32>* \"Answer: See you to-MARROW...\"',
                        "<32>{#p/basic}* That one wasn't even REMOTELY funny."
                    ],
                    [
                        '<32>{#p/human}* (You look to another paragraph.)',
                        "<32>{#p/basic}* You can't get enough of these lame puns.",
                        '<32>{#p/toriel}{#f/21}* \"Question: Why did the skeleton drool in their sleep?\"',
                        '<32>* \"Answer: Because they were having a FEMUR dream...\"',
                        '<32>{#p/basic}* This is getting old...'
                    ],
                    [
                        '<32>{#p/human}* (You look to another paragraph.)',
                        "<32>{#p/basic}* You still can't get enough of these lame puns.",
                        '<32>{#p/toriel}{#f/21}* \"Question: What does a skeleton say to start a fight?\"',
                        '<32>* \"Answer: I\'ve got a BONE to pick with you...\"',
                        "<32>{#p/basic}* Seriously?\n* That wasn't even a pun!"
                    ],
                    [
                        '<32>{#p/human}* (You look to another paragraph.)',
                        "<32>{#p/basic}* We're losing brain cells here...",
                        "<32>{#p/toriel}{#f/21}* \"'What's up stairs?' asked the skeleton.\"",
                        '<32>* \"... the stairs did not reply.\"',
                        '<32>{#p/basic}* ...\n* I have no words.'
                    ],
                    [
                        '<32>{#p/human}* (You look to the final paragraph.)',
                        "<32>{#p/basic}* Huh?\n* This one's not a joke...",
                        '<32>{#p/toriel}{#f/21}* \"A human has arrived in the Outlands today.\"',
                        '<32>* \"I do trust that Sans would look after them, but...\"',
                        '<32>* \"I would rather not force him to do so.\"',
                        '<32>* \"Besides, can one royal sentry really protect them from the rest of the outpost?\"',
                        '<32>* \"Hopefully those kinds of questions will soon be pointless.\"',
                        '<32>{#p/basic}* ...'
                    ],
                    ['<32>{#p/human}* (There are no more written entries here.)']
                ].map(
                    lines => () =>
                        SAVE.data.b.svr
                            ? ['<32>{#p/human}* (The diary seems to consist primarily of over-the-top skeleton puns.)']
                            : SAVE.data.n.plot === 72
                                ? [
                                    '<32>{#p/human}* (You look to the newly-written page.)',
                                    '<32>{#p/toriel}{#f/21}* \"It seems my preconceptions about Asgore were incorrect.\"',
                                    '<32>* \"In failing to confront him, I have failed to understand what was truly going on.\"',
                                    '<32>* \"I was right in thinking I did not deserve to be a mother.\"',
                                    '<32>* \"But perhaps now... I can learn what being a mother truly means.\"',
                                    '<32>* \"I will need to think about this on my own.\"'
                                ]
                                : world.darker
                                    ? ["<32>{#p/basic}* It's a diary.\n* You wouldn't find it funny."]
                                    : SAVE.data.n.plot < 14
                                        ? lines
                                        : [
                                            '<32>{#p/human}* (You look to the most recently written paragraph.)',
                                            ...(world.edgy
                                                ? ["<32>{#p/basic}* It's been scribbled out with a crayon."]
                                                : toriSV()
                                                    ? [
                                                        '<32>{#p/toriel}{#f/21}* \"It has not been the best of days.\"',
                                                        '<32>* \"Yet another human has fallen out of my care...\"',
                                                        '<32>* \"The seventh and final human he\'d need to break the force field.\"',
                                                        '<32>* \"I should not have allowed this to happen.\"',
                                                        '<32>* \"With the stakes so high, a confrontation may be inevitable...\"'
                                                    ]
                                                    : [
                                                        '<32>{#p/toriel}{#f/21}* \"It has been an interesting day, to say the least.\"',
                                                        '<32>* \"A human arrived...\"',
                                                        '<32>* \"Then, tried to leave...\"',
                                                        '<32>* \"And then, the strangest thing happened.\"',
                                                        '<32>* \"A reminder I have been in need of for some time...\"'
                                                    ])
                                        ]
                )
            ),
            w_tt_plant: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (This houseplant strikes you as exceedingly normal.)']
                    : ["<32>{#p/basic}* It's a houseplant.", '<32>* What more is there to say?'],
            w_tt_trash: pager.create(
                0,
                () =>
                    SAVE.data.b.svr
                        ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                        : world.darker
                            ? ['<32>{#p/basic}* Snails.']
                            : SAVE.data.n.plot === 72
                                ? ['<32>{#p/basic}* The snails are beginning to smell... ghostly.', '<32>* ... what could this mean?']
                                : [
                                    "<32>{#p/basic}* It's Toriel's private trash can, containing...",
                                    '<32>* Snails.',
                                    '<32>* Oodles and oodles of snails.'
                                ],
                pager.create(
                    1,
                    () =>
                        SAVE.data.b.svr
                            ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                            : world.darker
                                ? ['<32>{#p/basic}* Snails.']
                                : SAVE.data.n.plot === 72
                                    ? ['<32>{#p/basic}* Maybe this is how snails live past their expiry date.']
                                    : ['<32>{#p/basic}* And nothing BUT snails.'],
                    () =>
                        SAVE.data.b.svr
                            ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                            : world.darker
                                ? ['<32>{#p/basic}* Snails.']
                                : SAVE.data.n.plot === 72
                                    ? ["<32>{#p/basic}* Or maybe I've just gone and lost it completely."]
                                    : ['<32>{#p/basic}* ...\n* Did I mention the snails?'],
                    () =>
                        SAVE.data.b.svr
                            ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                            : world.darker
                                ? ['<32>{#p/basic}* Snails.']
                                : SAVE.data.n.plot === 72
                                    ? ['<32>{#p/basic}* Or maybe...', '<32>* ... wait, what was I saying?']
                                    : ['<32>{#p/basic}* Snails.'],
                    () =>
                        SAVE.data.b.svr
                            ? ["<32>{#p/human}* (You can't make out what's in the trash...)"]
                            : world.darker
                                ? ['<32>{#p/basic}* Snails.']
                                : SAVE.data.n.plot === 72
                                    ? ["<32>{#p/basic}* Oh, right.\n* The meaning of the snails' newfound ghostly scent."]
                                    : ['<32>{#p/basic}* Oodles and oodles of snails.']
                )
            ),
            w_tutorial_view: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (You stare excitedly into the cosmos beyond...)']
                    : world.darker
                        ? []
                        : ['<32>{#p/basic}* The first of many windows in this part of the Outlands.'],
            w_tutorial1: () =>
                SAVE.data.b.svr
                    ? ['<32>{#p/human}* (The sign describes the qualities of a good relationship.)']
                    : [
                        '<32>{#p/basic}* \"A good relationship requires trust and kindness to move forward.\"',
                        ...(world.goatbro && SAVE.flag.n.ga_asrielOutlands7++ < 1
                            ? ['<26>{#p/asriel2}{#f/8}* How grossly sentimental.']
                            : [])
                    ]
        },
        piecheck: () =>
            SAVE.data.b.svr
                ? [
                    [
                        "<25>{#p/asriel1}{#f/17}* Mom's pies were always the best...",
                        '<25>{#f/13}* I can still remember what the first one I ever had tasted like.',
                        "<25>{#f/15}* I'd never felt so happy to take a bite of something...",
                        "<25>{#f/17}* ... it was like I'd transcended to the next level of confection."
                    ],
                    [
                        "<25>{#p/asriel1}{#f/20}* Er, maybe I'm overselling it just a little.",
                        "<25>{#f/17}* But I'm telling you right now, Frisk...",
                        '<25>{#f/13}* ... no matter what happens with Mom and Dad...',
                        '<25>{#f/17}* You NEED to have her make one of her pies for me.',
                        "<25>{#f/20}* I'm... kind of curious if I'll still like it after all of this."
                    ],
                    ['<25>{#p/asriel1}{#f/15}* It sure has been a while, huh...']
                ][Math.min(asrielinter.piecheck++, 2)]
                : SAVE.data.n.plot < 8
                    ? world.darker
                        ? ["<32>{#p/basic}* It's just a countertop."]
                        : ['<32>{#p/basic}* There is a nigh-invisible ring-shaped stain on the countertop.']
                    : SAVE.data.n.state_wastelands_mash === 1 && SAVE.data.n.plot > 8
                        ? ['<32>{#p/basic}* The ghost of a pie once smashed haunts the countertop.']
                        : SAVE.data.n.plot === 72
                            ? SAVE.data.n.state_wastelands_mash > 0
                                ? ['<32>{#p/basic}* No amount of passed time will fix this atrocity.']
                                : SAVE.data.n.state_wastelands_toriel === 2
                                    ? ['<32>{#p/basic}* You feel strongly that you should leave this alone.']
                                    : world.runaway
                                        ? [
                                            '<32>{#p/basic}* You might have been a bully, but the pie remains untouched.',
                                            '<32>{#p/basic}* Perhaps some things are too sacred, even for you.'
                                        ]
                                        : [
                                            world.meanie
                                                ? '<32>{#p/basic}* The pie may be intimidated by you, but after all this time...'
                                                : '<32>{#p/basic}* The size of the pie may no longer intimidate you, but after all this time...',
                                            "<32>{#p/basic}* You've gained a sense of respect for the pie that does not permit you to eat it."
                                        ]
                            : SAVE.data.n.state_wastelands_mash > 0
                                ? ['<32>{#p/basic}* There is simply nothing more to be done here.']
                                : SAVE.data.n.state_wastelands_toriel === 2
                                    ? ['<32>{#p/basic}* You feel strongly that you should leave this alone.']
                                    : world.meanie
                                        ? [
                                            '<32>{#p/basic}* The size of the pie does not intimidate you at all.',
                                            '<32>{#p/basic}* In fact, it might even be intimidated by you...',
                                            choicer.create('* (Smash the pie?)', 'Ja', 'Nein')
                                        ]
                                        : ['<32>{#p/basic}* The size of the pie intimidates you too much to eat it.'],
        piesmash1: ['<32>{#p/human}* (You decide not to smash.)'],
        piesmash2: ['<32>{#p/human}* (You take a swing...)'],
        piesmash3: ["<32>{#p/basic}* It's been utterly destroyed."],
        tutorial_puzzle1: [
            '<25>{#p/toriel}* Unlike the puzzle beforehand, this one is a little different.',
            '<25>{#f/1}* It IS rare, but certain puzzles on the outpost...'
        ],
        tutorial_puzzle2: [
            '<25>{#p/toriel}* ... require the assistance of another monster.',
            '<25>{#f/1}* Do you understand what you must do next?'
        ],
        tutorial_puzzle2a: ['<25>{#p/toriel}{#f/1}* Do you understand what you must do next?'],
        tutorial_puzzle3: ['<25>{#p/toriel}* Very good, little one!\n* Very good.'],
        tutorial_puzzle4: ['<25>{#p/toriel}{#f/1}* Your turn...'],
        tutorial_puzzle4a: ['<25>{#p/toriel}{#f/0}* It is your turn.'],
        tutorial_puzzle5: ['<25>{#p/toriel}* Well done!\n* Only one row to go.'],
        tutorial_puzzle6: ['<25>{#p/toriel}{#f/1}* Yes, yes!\n* I am proud of you, my child...'],
        tutorial_puzzle7: ['<25>{#p/toriel}* Come with me when you are ready to begin your next lesson.'],
        tutorial_puzzle8a: ['<25>{#p/toriel}* The answer does not lie with me, little one.'],
        tutorial_puzzle8b: ['<25>{#p/toriel}* Try repeating what you have done before.'],
        tutorial_puzzle8c: ['<25>{#p/toriel}{#f/1}* Go on...'],
        twinkly1: [
            "<25>{#p/twinkly}{#f/5}* Howdy!\n* I'm {@fill=#ff0}TWINKLY{@fill=#fff}.\n* {@fill=#ff0}TWINKLY{@fill=#fff} the {@fill=#ff0}STAR{@fill=#fff}!"
        ],
        twinkly2: [
            '<25>{#f/5}* What brings you to the outpost, fellow traveler?',
            '<25>{#f/5}* ...',
            "<25>{#f/8}* You're lost, aren't you...",
            "<25>{#f/5}* Well, good thing I'm here for you!",
            "<25>{#f/8}* I haven't been in my top form for a while, but...",
            '<25>{#f/5}* ... someone ought to teach you how things work around here!',
            '<25>{#f/10}* Guess little old me will have to do.',
            "<25>{#f/5}* Let's get started, shall we?"
        ],
        twinkly3: [
            "<25>{#f/7}* But you already KNEW that, didn'tcha?",
            '<25>{#f/8}* ...',
            "<25>{#f/5}* Still, it's up to me to show you the ropes.",
            "<25>* Let's get started, shall we?"
        ],
        twinkly4: [
            "<25>{#p/twinkly}{#f/6}* Okay, that's enough.",
            '<25>{#f/8}* If you wanna keep resetting, then by all means...',
            '<25>{#f/6}* Do as you wish.',
            "<25>{#f/7}* Just don't expect to get past me so easily."
        ],
        twinkly5: ["<25>{#p/twinkly}{#f/6}* Don't you have anything better to do?"],
        twinkly6: [
            "<25>{#p/twinkly}{#f/6}* Resetting right after you've taken your first hit, huh?",
            '<25>{#f/7}* How pathetic.'
        ],
        twinkly6a: [
            "<25>{#p/twinkly}{#f/11}* As if you think I'd forget about what you did...",
            '<25>{#f/7}* Filthy shard dodger.'
        ],
        twinkly7: ['<25>{#p/twinkly}{#f/7}* I can play this game all day, idiot.'],
        twinkly8: ["<25>{#f/11}* Either way, since you already know what's coming next...{%15}"],
        twinkly9: [
            '<25>{#p/twinkly}{#f/6}* Howdy.',
            "<25>* Seems I'll be fireballed if I stick around too long.",
            '<25>{#f/8}* A shame, really...',
            '<25>{#f/7}* I was gonna have SO much fun with you.',
            '<25>{#f/6}* ...',
            '<25>{#f/5}* Well, see ya!'
        ],
        twinkly9a: [
            '<25>{#p/twinkly}{#f/12}{#v/0}* What the HELL are you doing, $(name)?',
            '<25>{#f/12}{#v/0}* We had the outpost at our mercy!'
        ],
        twinkly9a1: ['<25>{#f/6}{#v/0}* All we had to do was follow the plan.'],
        twinkly9a2: [
            '<25>{#f/6}{#v/0}* All we had to do was get through the Foundry...',
            '<25>* Finish off the guards...',
            '<25>* And make it to the Citadel!'
        ],
        twinkly9a3: [
            '<25>{#f/6}{#v/0}* All we had to do was finish off the guards...',
            '<25>* And get through the Citadel!'
        ],
        twinkly9a4: [
            '<25>{#f/6}{#v/0}* All we had to do was KILL that stupid robot...',
            '<25>* And get through the Citadel!'
        ],
        twinkly9a5: ['<25>{#f/6}{#v/0}* All we had to do was get through the Citadel!'],
        twinkly9a6: ['<25>{#f/6}{#v/0}* All we had to do was KILL that nerdy trashbag!'],
        twinkly9a7: ['<25>{#f/6}{#v/0}* All we had to do was walk to the end!', '<25>* We were so close!'],
        twinkly9a8: ['<25>{#f/8}{#v/0}* Coward...'],
        twinkly9b: [
            '<25>{#p/twinkly}{#f/5}* $(name)...?',
            "<25>{#f/6}* I'm not really sure what just happened.",
            '<25>{#f/8}* We were on the shuttle, and then...',
            '<25>{#f/8}* ...',
            '<25>{#f/6}* I...',
            '<25>{#f/8}* I have to go...'
        ],
        twinkly9c: [
            "<25>{#p/twinkly}{#f/7}* So, we're back at the beginning, are we?",
            "<26>{#f/5}* I've been expecting you.\n* I wonder how you'll do this time around.",
            "<25>{#f/11}* Who knows?\n* Maybe it'll be easier for you now.",
            '<25>{#f/7}* It certainly was when I had your powers.',
            '<25>{#f/6}* ...',
            '<25>{#f/5}* Well, good luck!'
        ],
        twinkly10: [
            "<20>{#f/5}See that heart? That's your SOUL, the very culmination of your being!",
            '<20>{#f/5}Your SOUL is an important part of you, and needs LOVE to sustain itself.'
        ],
        twinkly11: [
            "<20>{*}{#x2}{#f/5}Hier draußen wird LIEBE durch ... {#f/8}kleine weiße ... {#f/11} „Glücksscherben“ geteilt.",
            "<20>{*}{#f/5}To get you started on the right path, I'll share some of my own LOVE.",
            '<20>{*}{#f/5}Try to get as many as you can!{^20}{*}{#x1}{%}'
        ],
        twinkly12: [
            "<20>{*}{#f/8}Whoops, I think you might've missed them...",
            "<20>{*}{#f/5}But that's okay!",
            '<20>{*}{#x2}{#f/10}Here, have some more.{^20}{*}{#x1}{%}'
        ],
        twinkly13: [
            '<20>{*}{#f/12}What the-... are you braindead or something??',
            '<20>{*}{#x2}RUN. INTO. THE. BULLETS!!!{^20}{*}{#x1}{^999}'
        ],
        twinkly14: 'RUN. INTO. THE. happiness shards~',
        twinkly15: [
            '<20>{#v/1}Hee hee hee...',
            "<20>In this world, it's KILL or BE killed.",
            '<20>Imagine, a SOUL like yours crash-landing on my doorstep...',
            "<20>Did you really think I'd pass up such a golden opportunity?"
        ],
        twinkly16: [
            "<20>{#f/7}Nah, you know what's going on here, don'tcha?",
            "<20>You just wanted to torment little old Twinkly, didn'tcha?",
            "<20>Golly... you must have no idea who you're messing with.",
            '<20>{#f/11}Hee hee hee...'
        ],
        twinkly17: ["<20>{#v/1}We'll just have to cut straight to the point, won't we?", '<20>Hee hee hee...'],
        twinkly18: ['<20>{*}{#f/2}{#v/1}{@random=1.1/1.1}DIE.{^20}{%}'],
        twinkly19: ['<20>{#p/toriel}What a terrible creature, torturing such a poor, innocent youth...'],
        twinkly20: [
            '<20>Have no fear, little one.',
            '<20>I am {@fill=#003cff}TORIEL{@fill=#000}, overseer of the {@fill=#f00}OUTLANDS{@fill=#000}.',
            '<20>I come by every day to check for those who have been stranded here.',
            '<20>Follow me, child.\nThere is much I intend to teach you.'
        ],
        twinkly21: [
            '<25>{#p/toriel}{#f/1}* Oh my!\n* Where did you come from, little one?',
            '<25>{#f/1}* Are you injured?',
            '<25>{#f/0}* ...\n* Forgive me for asking so many questions.',
            '<25>{#f/0}* I am {@fill=#003cff}TORIEL{@fill=#fff}, overseer of the {@fill=#f00}OUTLANDS{@fill=#fff}.',
            '<26>{#f/0}* I come by every day to check for those who\n  have been stranded here.',
            '<25>{#f/0}* Follow me, child.\n* There is much I intend to teach you.'
        ],
        twinkly22: ['<25>{#f/0}* This way.'],
        w_coffin0: () => [
            '<32>{#p/human}* (You feel it would be best to leave this be.)',
            ...(SAVE.data.b.svr ? ['<25>{#p/asriel1}{#f/13}* ...'] : [])
        ],
        w_coffin1: () => [
            '<32>{#p/basic}* This coffin is very old.\n* There is nothing remarkable about it.',
            ...(world.goatbro && SAVE.flag.n.ga_asrielCoffin++ < 1
                ? [
                    '<25>{#p/asriel2}{#f/13}* Oh, look at that.\n* They made one just for you, $(name).',
                    '<25>{#p/asriel2}{#f/5}* How touching.'
                ]
                : [])
        ],
        w_coffin2: pager.create(
            0,
            () => [
                '<32>{#p/basic}* This coffin dates back to December 251X.',
                '<32>* There is an old record-keeping manifest stashed next to it...',
                choicer.create('* (Access the manifest?)', 'Ja', 'Nein')
            ],
            () => [
                '<32>{#p/human}* (You once again pick up the manifest.)',
                choicer.create('* (Access the manifest?)', 'Ja', 'Nein')
            ]
        ),
        w_coffin3: () => [choicer.create('* (Read the next page?)', 'Ja', 'Nein')],
        w_coffin4: ['<32>{#p/human}* (But there were no further pages to be read.)'],
        w_coffin5: ['<32>{#p/human}* (You put the manifest back where it belongs.)'],
        w_dummy1: () =>
            SAVE.data.b.svr
                ? ['<32>{#p/human}* (You place your hands on the dummy.)\n* (It seems very worn out.)']
                : ['<32>{#p/basic}* A training dummy, circa 251X.\n* CITADEL standard-issue.'],
        wonder1: [
            '<32>{#p/basic}* Can you hear it?\n* The song of the stars?',
            "<32>* At certain places on the outpost, like this one... it's there.",
            '<32>* You just have to be listening for it.',
            '<32>* Pretty cool, right?'
        ]
    },

    b_group_outlands: {
        froggitWhimsun: ['<32>{#p/story}* Space frogs and Starflies!\n* Or something of the like.'],
        froggitWhimsun2a: ['<32>{#p/story}* Space frogs...?'],
        froggitWhimsun2b: ['<32>{#p/story}* Starflies...?'],
        looxMigospWhimsun: ["<32>{#p/story}* It's the troublesome trio!"],
        looxMigospWhimsun2: ['<32>{#p/story}* The trio has become a duo.'],
        looxMigospWhimsun3: ['<32>{#p/story}* Only one remains.'],
        moldsmalMigosp: ['<32>{#p/story}* Silente and company present themselves!']
    },

    b_opponent_froggit: {
        act_check: ['<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is difficult for this monster.'],
        act_check2: ['<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is getting better for this monster.'],
        act_check3: ["<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life just doesn't seem to get easier for this monster."],
        act_check4: ['<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life is very confusing for this monster.'],
        act_check5: ['<32>{#p/story}* FROGGIT - ATK 4 DEF 5\n* Life seems to be very lovely for this monster.'],
        act_threat: [
            '<32>{#p/human}* (You threaten Froggit.)',
            "<32>{#p/basic}* Froggit doesn't understand what you said..."
        ],
        act_threat2: [
            '<32>{#p/human}* (You threaten Froggit again.)',
            "<32>{#p/basic}* Froggit recalls the previous threat and decides it's time to run away."
        ],
        act_compliment: [
            '<32>{#p/human}* (You compliment Froggit.)',
            "<32>{#p/basic}* Froggit doesn't understand what you said..."
        ],
        act_flirt: [
            '<32>{#p/human}* (You flirt with Froggit.)',
            "<32>{#p/basic}* Froggit doesn't understand what you said..."
        ],
        act_translate0: ["<32>{#p/human}* (But you haven't said anything to translate yet.)"],
        act_translate1: [
            '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
            '<32>{#p/basic}* Froggit is flattered.'
        ],
        act_translate1x: [
            '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
            '<32>{#p/basic}* Froggit is hesitant to continue this battle.'
        ],
        act_translate1y: [
            '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
            '<32>* Thoroughly threatened, Froggit runs away!'
        ],
        act_translate1z: [
            '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
            '<32>{#p/basic}* Froggit shows no sign of fear.'
        ],
        act_translate2: [
            '<32>{#p/human}* (You translate what you said.)\n* (Froggit seems to understand you now.)',
            '<32>{#p/basic}* Froggit is blushing, if only on the inside.'
        ],
        confuseText: ['<08>{#p/basic}{~}Ribbit, ribbit?'],
        flirtText: ['<08>{#p/basic}{~}(Blushes deeply.)\nRibbit..'],
        idleText1: ['<08>{#p/basic}{~}Ribbit, ribbit.'],
        idleText2: ['<08>{#p/basic}{~}Croak, croak.'],
        idleText3: ['<08>{#p/basic}{~}Hop, hop.'],
        idleText4: ['<08>{#p/basic}{~}Meow.'],
        mercyStatus: ['<32>{#p/story}* Froggit seems reluctant to fight you.'],
        name: '* Froggit',
        meanText: ['<08>{#p/basic}{~}(Shiver, shake.)\nRibbit..'],
        niceText: ['<08>{#p/basic}{~}(Blushes softly.)\nRibbit..'],
        perilStatus: ['<32>{#p/story}* Froggit is trying to run away.'],
        status1: ['<32>{#p/story}* Froggit hops near!'],
        status2: ['<32>{#p/story}* The battlefield is filled with the smell of crystherium utilia.'],
        status3: ["<32>{#p/story}* Froggit doesn't seem to know why it's here."],
        status4: ['<32>{#p/story}* Froggit hops to and fro.']
    },
    b_opponent_whimsun: {
        act_check: ['<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster has only just learned how to fly...'],
        act_check2: ['<32>{#p/story}* FLUTTERLYTE - ATK 5 DEF 0\n* This monster wishes it had stayed on the ground.'],
        act_console: [
            '<32>{#p/human}* (You help Flutterlyte fly higher into the air.)',
            '<32>{#p/basic}* Flutterlyte thanks you, and flies away...'
        ],
        act_flirt: [
            '<32>{#p/human}* (You flirt with Flutterlyte.)',
            '<32>{#p/basic}* Unable to handle your compliment, Flutterlyte bursts into tears and flies away...'
        ],
        act_terrorize: [
            '<32>{#p/human}* (You weep and wail and gnash your teeth.)',
            '<32>{#p/basic}* Flutterlyte panicks and flies away...'
        ],
        idleTalk1: ['<08>{#p/basic}{~}Why is this so hard..'],
        idleTalk2: ['<08>{#p/basic}{~}Please help me..'],
        idleTalk3: ["<08>{#p/basic}{~}I'm scared.."],
        idleTalk4: ["<08>{#p/basic}{~}I can't do this.."],
        idleTalk5: ['<08>{#p/basic}{~}\x00*sniff sniff*'],
        name: '* Flutterlyte',
        perilStatus: ['<32>{#p/story}* Flutterlyte is barely keeping itself in the air.'],
        status1: ['<32>{#p/story}* Flutterlyte comes forth!'],
        status2: ['<32>{#p/story}* Flutterlyte continues to mutter apologies.'],
        status3: ['<32>{#p/story}* Flutterlyte hovers meekly.'],
        status4: ['<32>{#p/story}* The smell of fresh peaches permeates the air.'],
        status5: ['<32>{#p/story}* Flutterlyte is hyperventilating.'],
        status6: ['<32>{#p/story}* Flutterlyte avoids eye contact.']
    },
    b_opponent_loox: {
        act_check: ['<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* Staring contest master.\n* Family name: Eyewalker'],
        act_check2: [
            "<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This bully is trying very hard to pretend it's not flattered."
        ],
        act_check3: ['<32>{#p/story}* OCULOUX - ATK 6 DEF 6\n* This monster is honored to be in your line of sight.'],
        act_dontpick: [
            '<32>{#p/human}* (You stare at Oculoux.)\n* (Oculoux stares back harder.)',
            "<32>{#p/human}* (Oculoux's eye becomes increasingly strained, and eventually...)",
            '<32>{#p/human}* (... Oculoux bows.)'
        ],
        act_flirt: ['<32>{#p/human}* (You flirt with Oculoux.)'],
        act_pick: ['<32>{#p/human}* (You rudely lecture Oculoux about staring at people.)'],
        checkTalk1: ['<08>{#p/basic}{~}Do you dare to stare?'],
        dontDeny1: ['<08>{#p/basic}{~}Look who changed their mind.'],
        dontTalk1: ['<99>{#p/basic}{~}The gaze\nis\nstrong\nwith\nthis one.'],
        flirtDeny1: ['<08>{#p/basic}{~}How tsundere of you.'],
        flirtTalk1: ['<08>{#p/basic}{~}What? N-no way!'],
        hurtStatus: ['<32>{#p/story}* Oculoux is watering.'],
        idleTalk1: ["<08>{#p/basic}{~}I've got my eye on you."],
        idleTalk2: ["<08>{#p/basic}{~}Don't tell me what to do."],
        idleTalk3: ['<08>{#p/basic}{~}Staring is caring.'],
        idleTalk4: ['<08>{#p/basic}{~}What an eyesore.'],
        idleTalk5: ['<08>{#p/basic}{~}How about a staring contest?'],
        name: '* Oculoux',
        pickTalk1: ['<08>{#p/basic}{~}How dare you question our way of life!'],
        spareStatus: ["<32>{#p/story}* Oculoux doesn't care about fighting anymore."],
        status1: ['<32>{#p/story}* A pair of Oculoux walked in!'],
        status2: ['<32>{#p/story}* Oculoux is staring right through you.'],
        status3: ['<32>{#p/story}* Oculoux gnashes its teeth.'],
        status4: ['<32>{#p/story}* Smells like eyedrops.'],
        status5: ['<32>{#p/story}* Oculoux has gone bloodshot.'],
        status6: ['<32>{#p/story}* Oculoux is gazing at you.'],
        status7: ['<32>{#p/story}* Oculoux is now alone.']
    },
    b_opponent_migosp: {
        act_check: ["<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems evil, but it's just with the wrong crowd..."],
        act_check2: ['<33>{#p/story}* SILENTE - ATK 7 DEF 5\n* Now alone, it joyfully expresses itself through dance.'],
        act_check3: ['<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* It seems comfortable with you.\n* VERY comfortable.'],
        act_check4: ["<32>{#p/story}* SILENTE - ATK 7 DEF 5\n* Despite its tough act, it's clearly in pain..."],
        act_flirt: ['<32>{#p/human}* (You flirt with Silente.)'],
        flirtTalk: ['<08>{#p/basic}{~}Hiya~'],
        groupInsult: ["<32>{#p/human}* (You try insulting Silente, but it's too focused on the others.)"],
        groupStatus1: ['<32>{#p/story}* Silente is whispering to the others.'],
        groupStatus2: ["<32>{#p/story}* It's starting to smell like a roach motel."],
        groupTalk1: ['<08>{#p/basic}FILTHY SINGLE MINDER\n..'],
        groupTalk2: ['<08>{#p/basic}OBEY THE OVERMIND\n..'],
        groupTalk3: ['<08>{#p/basic}LEGION! WE ARE LEGION!'],
        groupTalk4: ['<08>{#p/basic}HEED THE SWARM\n..'],
        groupTalk5: ['<08>{#p/basic}IN UNISON, NOW\n..'],
        groupTalk6: ["<08>{#p/basic}I DON'T CARE."],
        name: '* Silente',
        perilStatus: ['<32>{#p/story}* Silente refuses to give up.'],
        soloInsult: ["<32>{#p/human}* (You try insulting Silente, but it's too happy to care.)"],
        soloStatus: ["<32>{#p/story}* Silente doesn't have a care in the cosmos."],
        soloTalk1: ["<08>{#p/basic}{~}Bein' me is the best!"],
        soloTalk2: ['<08>{#p/basic}{~}La la~ Just be your- self~'],
        soloTalk3: ["<08>{#p/basic}{~}Nothin' like alone time!"],
        soloTalk4: ['<08>{#p/basic}{~}Mmm, cha cha cha!'],
        soloTalk5: ['<08>{#p/basic}{~}Swing your arms, baby~']
    },
    b_opponent_mushy: {
        act_challenge: [
            '<32>{#p/human}* (You challenge Mushy to a duel.)',
            "<33>{#p/story}* Mushy's SPEED up for this turn!"
        ],
        act_check: ['<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Gunslinger.'],
        act_check2: ['<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* Huge fan of space cowboys.\n* Even the sexy ones.'],
        act_check3: ['<32>{#p/story}* MUSHY - ATK 6 DEF 6\n* After giving it your all, this gunslinger is impressed.'],
        act_flirt: ['<32>{#p/human}* (You flirt with Mushy.)'],
        act_taunt: ['<32>{#p/human}* (You taunt Mushy.)'],
        challengeStatus: ['<32>{#p/story}* Mushy awaits your next challenge.'],
        challengeTalk1: ["<08>{#p/basic}{~}Let's see what you got."],
        challengeTalk2: ['<08>{#p/basic}{~}Think you can take me?'],
        flirtStatus1: ['<32>{#p/story}* Mushy, the confused and the aroused.'],
        flirtTalk1: ['<08>{#p/basic}{~}H-hey, knock it off!'],
        hurtStatus: ['<32>{#p/story}* Mushy makes a last stand.'],
        idleTalk1: ['<08>{#p/basic}{~}Bang!\nBang!\nBang!'],
        idleTalk2: ['<08>{#p/basic}{~}Saddle up!'],
        idleTalk3: ["<08>{#p/basic}{~}All in a day's."],
        name: '* Mushy',
        spareStatus: ['<32>{#p/story}* Mushy bows out of respect.'],
        status1: ['<32>{#p/story}* Mushy stormed in!'],
        status2: ['<32>{#p/story}* Mushy adjusts their stance.'],
        status3: ['<32>{#p/story}* Mushy is preparing for a grand standoff.'],
        status4: ['<32>{#p/story}* Mushy reaches for their holster.'],
        status5: ['<32>{#p/story}* Smells like petrichor.'],
        tauntStatus1: ["<32>{#p/story}* Mushy pretends they aren't bothered by your taunts."],
        tauntTalk1: ["<08>{#p/basic}{~}As if that'll work on me."]
    },
    b_opponent_napstablook: {
        act_check: ["<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It's Napstablook."],
        act_check2: [
            "<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* It doesn't seem like they want to be here anymore."
        ],
        act_check3: ['<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* Hopeful, for the first time in a while...'],
        act_check4: ['<32>{#p/story}* NAPSTABLOOK - ATK 10 DEF 255\n* The romantic tension is at an all-time high.'],
        awkwardTalk: ['<11>{#p/napstablook}{~}uh...', '<11>{#p/napstablook}{~}okay, i guess...?'],
        checkTalk: ["<11>{#p/napstablook}{~}that's me..."],
        cheer0: ['<32>{#p/human}* (You try to console Napstablook.)'],
        cheer1: ['<32>{#p/human}* (You give Napstablook a patient smile.)'],
        cheer2: ['<32>{#p/human}* (You tell Napstablook a little joke.)'],
        cheer3: ["<32>{#p/human}* (You show adoration for Napstablook's top hat.)"],
        cheerTalk1: ['<11>{#p/napstablook}{~}...?'],
        cheerTalk2: ['<11>{#p/napstablook}{~}heh heh...'],
        cheerTalk3: [
            '<11>{*}{#p/napstablook}{~}let me {#x1}try...{^20}{#x2}{^20}{%}',
            "<11>{*}{#p/napstablook}{~}i call it {#x3}'dapper blook'{^40}{%}",
            '<11>{*}{#p/napstablook}{~}do you like it?{^40}{%}'
        ],
        cheerTalk4: ['<11>{#p/napstablook}{~}oh gee.....'],
        consoleTalk1: ['<11>{#p/napstablook}{~}yeah, yeah...'],
        consoleTalk2: ['<11>{#p/napstablook}{~}not buying it...'],
        consoleTalk3: ["<11>{#p/napstablook}{~}you're not sorry..."],
        deadTalk: [
            "<11>{#p/napstablook}{~}umm... you do know you can't kill ghosts, right...",
            "<11>{~}we're sorta incorporeal and all",
            "<11>{~}i was just lowering my hp because i didn't want to be rude",
            '<11>{~}sorry... i just made this more awkward...',
            '<11>{~}pretend you beat me...',
            '<11>{~}ooooooooo'
        ],
        flirt1: ['<32>{#p/human}* (You flirt with Napstablook.)'],
        flirt2: ['<32>{#p/human}* (You try your best pickup line on Napstablook.)'],
        flirt3: ['<32>{#p/human}* (You give Napstablook a heartfelt compliment.)'],
        flirt4: ['<32>{#p/human}* (You reassure Napstablook of your feelings towards them.)'],
        flirtTalk1: ["<11>{#p/napstablook}{~}i'd just weigh you down"],
        flirtTalk2: ["<11>{#p/napstablook}{~}oh.....\ni've heard that one....."],
        flirtTalk3: ['<11>{#p/napstablook}{~}uh... you really think so?'],
        flirtTalk4: ["<11>{#p/napstablook}{~}oh, you're serious...", '<11>{~}oh no.....'],
        idleTalk1: ["<11>{#p/napstablook}{~}i'm fine, thanks"],
        idleTalk2: ['<11>{#p/napstablook}{~}just pluggin along...'],
        idleTalk3: ['<11>{#p/napstablook}{~}just doing my thing...'],
        insultTalk1: ['<11>{#p/napstablook}{~}i knew it...'],
        insultTalk2: ['<11>{#p/napstablook}{~}whatever...'],
        insultTalk3: ['<11>{#p/napstablook}{~}say what you will...'],
        insultTalk4: ['<11>{#p/napstablook}{~}let it all out...'],
        name: '* Napstablook',
        silentTalk: ['<11>{#p/napstablook}{~}...'],
        sincere: ["<32>{#p/human}* (You flirtatiously comment on Napstablook's top hat.)"],
        sincereTalk: ['<11>{#p/napstablook}{~}heh... thanks'],
        status1: ['<32>{#p/story}* Here comes Napstablook.'],
        status2: ['<32>{#p/story}* Napstablook looks just a little better.'],
        status3: ['<32>{#p/story}* Napstablook wants to show you something.'],
        status3a: ['<32>{#p/story}* Napstablook awaits your reply.'],
        status4: ["<32>{#p/story}* Napstablook's eyes are glistening."],
        status5: ['<32>{#p/story}* Napstablook is clearly not sure how to handle this.'],
        status5a: ['<32>{#p/story}* Napstablook is questioning their very being.'],
        status6: ['<32>{#p/story}* Napstablook is biding their time.'],
        status7: ['<32>{#p/story}* Napstablook is waiting for your next move.'],
        status8: ['<32>{#p/story}* Napstablook is staring off into the distance.'],
        status9: ["<32>{#p/story}* Napstablook is wishing they weren't here."],
        status10: ['<32>{#p/story}* Napstablook is trying their best to ignore you.'],
        suck: ['<32>{#p/human}* (You tell Napstablook their hat sucks bad.)'],
        threat: ['<32>{#p/human}* (You threaten Napstablook.)']
    },
    b_opponent_toriel: {
        spannerText: ['<32>{#p/human}* (You throw the spanner.)\n* (Toriel picks it up and returns it to you.)'],
        spannerTalk: ['<11>{#p/toriel}{#f/22}That will accomplish nothing, my child.'],
        spannerTalkRepeat: ['<11>{#p/toriel}{#f/22}...'],
        act_check: ['<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Knows best for you.'],
        act_check2: ['<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Seems to be holding back.'],
        act_check3: ['<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Looks pre-occupied.'],
        act_check4: ['<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Just wants the best for you.'],
        act_check5: ['<32>{#p/story}* TORIEL - ATK 80 DEF 80\n* Thinks you are \"adorable.\"'],
        precrime: ['<20>{#p/asriel2}...'],
        criminal1: (reveal: boolean) => [
            '<20>{#p/asriel2}{#f/3}Howdy, $(name).',
            "<20>{#f/1}It's good to be back.",
            "<20>{#f/2}What's that?\nYou didn't expect to see me again?",
            '<20>{#f/13}...\nOh, $(name)...',
            ...(reveal
                ? ["<20>{#f/1}I've been waiting for this for a long time."]
                : [
                    "<20>{#f/15}I've been trapped inside a star for so long, I...",
                    '<20>{#f/15}...',
                    "<20>{#f/16}Well, that's not important now.",
                    '<20>{#f/1}What matters is that things are back to how they should be.'
                ]),
            '<20>{#f/1}Hee hee hee...',
            "<20>{#f/2}I know you're empty inside, just like me.",
            "<20>{#f/5}We're still inseparable after all these years...",
            "<20>{#f/1}Listen.\nI have a plan that'll bring us closer than ever.",
            '<20>{#f/1}With me, you, and our stolen SOULs...',
            "<20>{#f/1}Let's destroy everything on this wretched outpost.",
            '<21>{#f/2}Anyone who dares to stand in the way of our perfect future...',
            "<20>{#f/1}Let's turn 'em all to dust."
        ],
        criminal2: ['<20>{#p/asriel2}{#f/3}Welcome back, $(name).', '<20>{#f/1}Ready to pick up where we last left off?'],
        criminal3: ['<20>{#p/asriel2}{#f/3}Well then.', '<20>{#f/3}...', "<20>{#f/4}Let's just get going."],
        cutscene1: [
            "<32>{#p/basic}* Maybe because I'm the only one you'll listen to.",
            '<25>{#p/toriel}{#f/16}* ...!?',
            "<32>{#p/basic}* But what do I know, huh?\n* I'm just a sweet, innocent little child."
        ],
        cutscene2: [
            '<25>{#p/toriel}{#f/3}* ...',
            '<25>{#p/toriel}{#f/4}* This is impossible...',
            '<25>{#f/0}* I must be dreaming.\n* Or hallucinating.\n* Or maybe...',
            '<32>{#p/basic}* No.',
            '<32>{#p/basic}* This is real.',
            '<25>{#p/toriel}{#f/5}* But you died, $(name).',
            '<25>{#f/5}* You cannot possibly be speaking to me.',
            "<32>{#p/basic}* Pretend it's a dream, then.",
            '<32>{#p/basic}* If that works for you.',
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#p/toriel}{#f/9}* What do you want?',
            '<32>{#p/basic}* Toriel...',
            "<32>{#p/basic}* You know how I feel about humanity, don't you?",
            '<25>{#p/toriel}{#f/13}* Right.',
            '<32>{#p/basic}* Wrong.',
            '<32>{#p/basic}* ... not about this human.',
            "<32>* Ever since they got here, I've been following them...",
            "<32>* And now they're asking me to reach out to you.",
            '<32>* What do you think that means?',
            '<25>{#p/toriel}{#f/13}* ...',
            '<32>{#p/basic}* It means you have to let them go.',
            '<25>{#p/toriel}{#f/12}* ... do you not understand what is at stake?',
            '<25>{#f/11}* If I let them go, they will surely die.',
            '<32>{#p/basic}* ... come on.',
            "<32>{#p/basic}* That's not really why you're doing this, is it?",
            '<25>{#p/toriel}{#f/12}* With that attitude, perhaps you really are $(name).',
            '<25>{#p/toriel}{#f/11}* You always did question my authority.',
            '<32>{#p/basic}* I think I have every right to.',
            '<32>{#p/basic}* You wish to keep them here because you are afraid of what lies beyond the Outlands.',
            "<33>{#p/basic}* But things aren't the same as they were a hundred years ago.",
            "<33>{#p/basic}* You're only ignorant about it because you're too afraid to go see for yourself.",
            '<25>{#p/toriel}{#f/13}* ...',
            "<25>{#p/toriel}{#f/13}* ... but if I let them go, I won't be able to...",
            '<32>{#p/basic}* Be there for them?',
            '<32>{#p/basic}* Hey, I know the feeling.',
            '<32>{#p/basic}* But keeping them here would be dooming them to death anyway.',
            "<32>{#p/basic}* What's a life if it doesn't get to do anything worth living for?",
            '<25>{#p/toriel}{#f/13}* ...',
            '<25>{#p/toriel}{#f/13}* $(name), I...',
            '<32>{#p/basic}* You gave them a spare cell phone, remember?',
            "<32>{#p/basic}* Keep the line open, and maybe they'll give you a call.",
            '<25>{#p/toriel}{#f/9}* ... and what about you?',
            "<32>{#p/basic}* Look.\n* I'll be alright.",
            "<32>{#p/basic}* All I ask is that you don't forget about THEM after they're gone.",
            '<25>{#p/toriel}{#f/13}* ...',
            '<32>{#p/basic}* Goodbye, Toriel.',
            '<25>{#p/toriel}{#f/14}* ... goodbye, $(name).'
        ],
        death1: [
            '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
            '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}To strike me down at my weakest moment...',
            '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}...',
            '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
            '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}It seems, young one...',
            '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}I was a fool for trusting you... all along...'
        ],
        death2: [
            '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
            '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}To think I was protecting you from them...',
            '<11>{#v/1}{#i/3}{#x4}{@random=1.1/1.1}...',
            '<11>{#v/2}{#i/4}{#x2}{@random=1.1/1.1}Ha...\nHa...',
            '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}It seems, young one...',
            '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}I was actually protecting them... from you...'
        ],
        death3: [
            '<11>{#p/toriel}{#f/21}{#v/1}{#i/3}{#x1}{@random=1.1/1.1}Urgh...',
            '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}You are stronger than I thought...',
            '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}Listen to me, young one...',
            '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}In a few moments, I will turn to dust...',
            '<11>{#v/1}{#i/3}{#x3}{@random=1.1/1.1}When that happens, you must take my SOUL...',
            '<11>{#v/1}{#i/3}{#x1}{@random=1.1/1.1}It is the only real way you can escape this place.',
            "<11>{#v/2}{#i/4}{#x3}{@random=1.1/1.1}You cannot... allow ASGORE's plan to... succeed...",
            '<11>{#v/2}{#i/4}{#x1}{@random=1.1/1.1}...',
            '<11>{#v/3}{#i/5}{#x2}{@random=1.2/1.2}My child...',
            "<11>{#v/3}{#i/5}{#x4}{@random=1.2/1.2}Be good... won't you?"
        ],
        magic1: ['<20>{#p/asriel2}{#f/3}Follow me.'],
        name: '* Toriel',
        spareTalk1: ['<11>{#p/toriel}{#f/11}...'],
        spareTalk2: ['<11>{#p/toriel}{#f/11}...\n...'],
        spareTalk3: ['<11>{#p/toriel}{#f/11}...\n...\n...'],
        spareTalk4: ['<11>{#p/toriel}{#f/17}...?'],
        spareTalk5: ['<11>{#p/toriel}{#f/17}What are you doing?'],
        spareTalk6: ['<11>{#p/toriel}{#f/17}...'],
        spareTalk7: ['<11>{#p/toriel}{#f/17}What are you trying to prove?'],
        spareTalk8: ['<11>{#p/toriel}{#f/17}...'],
        spareTalk9: ['<11>{#p/toriel}{#f/12}Fight me or leave!'],
        spareTalk10: ['<11>{#p/toriel}{#f/12}Stop looking at me that way!'],
        spareTalk11: ['<11>{#p/toriel}{#f/12}Go away!'],
        spareTalk12: ['<11>{#p/toriel}{#f/13}...'],
        spareTalk13: ['<11>{#p/toriel}{#f/13}...\n...'],
        spareTalk14: ['<11>{#p/toriel}{#f/13}...\n...\n...'],
        spareTalk15: [
            '<11>{#p/toriel}{#f/13}I know you want to go home...',
            '<11>{#p/toriel}{#f/9}But the path to get there would be dangerous.'
        ],
        spareTalk16: ['<11>{#p/toriel}{#f/14}So please... go back the other way.'],
        spareTalk17: [
            '<11>{#p/toriel}{#f/13}I know we do not have much...',
            '<11>{#p/toriel}{#f/10}But we can still have a good life.'
        ],
        spareTalk18: [
            '<11>{#p/toriel}{#f/13}You and I, like a family...',
            '<11>{#p/toriel}{#f/10}Does that not sound good?'
        ],
        spareTalk19: ['<11>{#p/toriel}{#f/21}...'],
        spareTalk20: ['<11>{#p/toriel}{#f/18}Why are you making this so difficult?'],
        spareTalk21: ['<11>{#p/toriel}{#f/21}...'],
        spareTalk22: ['<11>{#p/toriel}{#f/18}Please, just...', '<11>{#p/toriel}{#f/9}Go back the other way.'],
        spareTalk23: ['<11>{#p/toriel}{#f/21}...'],
        spareTalk24: ['<11>{#p/toriel}{#f/18}Oh, child...'],
        spareTalk28b: [
            '<11>{#p/toriel}{#f/9}Maybe it was foolish of me...',
            '<11>{#f/13}Trying to stop you like this...',
            '<11>{#f/9}Maybe I should have just let you go.'
        ],
        spareTalk28c: ['<11>{#p/toriel}{#f/17}...?', '<11>{#f/17}Why are you calling out for \"$(name)?\"'],
        status1: ['<32>{#p/story}* Toriel now stands before you.'],
        status2: ['<32>{#p/story}* Toriel prepares a magical attack.'],
        status3: ['<32>{#p/story}* Toriel is acting aloof.'],
        status4: ['<32>{#p/story}* Toriel is looking through you.'],
        status5: ['<32>{#p/story}* ...'],
        assistStatus: ['<32>{#p/basic}* There must be another way...'],
        talk1: ['<32>{#p/human}* (You ask Toriel to let you through.)\n* (No effect.)'],
        talk2: ["<32>{#p/human}* (You ask Toriel why she's really doing this.)\n* (She winces briefly.)"],
        talk3: ['<32>{#p/human}* (You begged Toriel to stop.)\n* (She hesitates.)'],
        talk4: [
            '<32>{#p/human}* (You once again begged Toriel to stop.)',
            '<32>{#p/basic}* ... perhaps there is too much at stake for her.'
        ],
        talk5: ['<32>{#p/human}* (You yell at Toriel.)\n* (She closes her eyes and takes a deep breath.)'],
        talk6: [
            '<32>{#p/human}* (You once again yell at Toriel.)',
            "<32>{#p/basic}* ... perhaps talking won't do anymore good."
        ],
        talk7: ["<32>{#p/human}* (But you couldn't think of anything else to say.)"],
        talk8: ['<32>{#p/human}* (But there was no sense in doing that now.)'],
        theft: ['<20>{*}{#p/twinkly}Mine.{^15}{%}']
    },

    c_name_outlands: {
        hello: 'Say Hello',
        about: 'About Yourself',
        mom: 'Call Her \"Mom\"',
        flirt: 'Flirt',
        toriel: "Toriel's Phone",
        puzzle: 'Puzzle Help',
        insult: 'Insult'
    },

    c_call_outlands: {
        about1: [
            '<25>{#p/toriel}{#f/1}* You want to know more about me...?',
            '<25>{#f/0}* Well, I am afraid there is not much to say.',
            '<25>{#f/0}* I am but a silly old lady who worries too often!'
        ],
        about2: [
            '<25>{#p/toriel}{#f/1}* If you really want to know more about me...',
            '<25>{#f/1}* Why not take a look around...?',
            '<25>{#f/0}* I have built or at least helped to build much of what you see.'
        ],
        about3: [
            '<25>{#p/toriel}{#f/1}* If you really want to know more about me...',
            '<25>{#f/2}* You should think twice about insulting me over the phone!'
        ],
        flirt1: [
            '<25>{#p/toriel}{#f/7}* ... huh?',
            '<25>{#f/1}* Oh, heh... heh...',
            '<25>{#f/6}* Hahaha!\n* I could pinch your cheek!',
            '<25>{#f/0}* You can certainly find better than an old woman like me.'
        ],
        flirt2: [
            '<25>{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?',
            '<25>{#f/1}* My child, I do not know if this is pathetic or endearing.'
        ],
        flirt3: [
            '<25>{#p/toriel}{#f/7}* ...\n* Oh dear, are you serious...?',
            '<25>{#f/5}* And after you called me \"Mother...\"',
            '<25>{#f/1}* Well then.\n* You are a very \"interesting\" child.'
        ],
        flirt4: ['<25>{#p/toriel}{#f/3}* ...', '<25>{#p/toriel}{#f/4}* I cannot begin to understand you.'],
        hello: [
            [
                '<25>{#p/toriel}* This is Toriel.',
                '<25>{#f/1}* You only wanted to say hello...?',
                '<25>{#f/0}* Well then.\n* \"Hello!\"',
                '<25>{#f/0}* I hope that suffices.\n* Hee hee.'
            ],
            [
                '<25>{#p/toriel}* This is Toriel.',
                '<25>{#f/1}* You wanted to say hello again?',
                '<25>{#f/0}* \"Salutations\" it is!',
                '<25>{#f/1}* Is that enough?'
            ],
            [
                '<25>{#p/toriel}{#f/1}* Are you bored?',
                '<25>{#f/0}* My apologies.\n* I should have given you something to do.',
                '<25>{#f/1}* Why not use your imagination to distract yourself?',
                '<25>{#f/0}* Pretend you are... a fighter pilot!',
                '<25>{#f/1}* Twisting and twirling, doing barrel rolls at light speed...',
                '<25>{#f/1}* Can you do that for me?'
            ],
            [
                '<25>{#p/toriel}{#f/5}* Hello, small one.',
                '<25>{#f/9}* I am sorry, but I do not have much else to say.',
                '<25>{#f/1}* It was nice to hear your voice, though...'
            ]
        ],
        helloX: ['<25>{#p/toriel}{#g/torielLowConcern}* Hello?'],
        mom1: [
            '<25>{#p/toriel}* ...',
            '<25>{#f/7}* Huh?\n* Did you just call me \"Mom?\"',
            '<25>{#f/1}* Well...\n* I suppose...',
            '<25>{#f/1}* Would that make you happy?',
            '<25>{#f/1}* To call me...\n* \"Mother?\"',
            '<25>{#f/0}* Well then.\n* Call me whatever you like!'
        ],
        mom2: ['<25>{#p/toriel}{#f/7}* ...\n* Oh my... again?', '<25>{#f/0}* Hee hee...\n* You are a very sweet child.'],
        mom3: [
            '<25>{#p/toriel}{#f/7}* ...\n* Oh my... again?',
            '<25>{#f/5}* And after you flirted with me...',
            '<25>{#f/1}* Well then.\n* You are a very \"interesting\" child.'
        ],
        mom4: ['<25>{#p/toriel}{#f/5}* ...'],
        puzzle1: [
            '<25>{#p/toriel}{#f/1}* Help with a puzzle...?',
            '<25>{#f/1}* You have not left the room yet, have you?',
            '<25>{#f/0}* Wait for me to return, and we can solve it together.'
        ],
        puzzle2: [
            '<25>{#p/toriel}{#f/1}* Help with a puzzle...?',
            '<25>{#f/23}* ... something tells me you do not sincerely need my help.'
        ],
        puzzle3: [
            '<25>{#p/toriel}{#f/1}* Help with a puzzle...?',
            '<25>{#f/5}* ...\n* I am afraid I cannot help you at this time.',
            '<25>{#f/0}* Wait for me to return, and we can solve it together.'
        ],
        insult1: (sus: boolean) =>
            sus
                ? [
                    '<25>{#p/toriel}{#f/0}* Hello?\n* This is...',
                    '<25>{#f/2}* ...!',
                    '<25>{#f/3}* Would you mind repeating that for me?'
                ]
                : [
                    '<25>{#p/toriel}{#f/0}* Hello?\n* This is...',
                    '<25>{#f/2}* ...!',
                    '<25>{#f/1}* My child... I do not think that means what you think it means.'
                ],
        insult2: (sus: boolean) =>
            sus
                ? ['<25>{#p/toriel}{#f/15}* ...', '<25>{#f/12}* I am going to pretend you did not just say that to me.']
                : ['<25>{#p/toriel}{#f/1}* My child...']
    },

    i_candy: {
        battle: {
            description: 'Has a distinct, non-licorice flavor.',
            name: 'Süßigkeiten'
        },
        drop: ['<32>{#p/human}* (You throw away the Monster Candy.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (10 HP.)']
                : ['<32>{#p/basic}* \"Monster Candy\" Heals 10 HP\n* Has a distinct, non-licorice flavor.'],
        name: 'Monster Candy',
        use: ['<32>{#p/human}* (You eat the Monster Candy.)']
    },
    i_water: {
        battle: {
            description: 'Smells like Dihydrogen Monoxide.',
            name: 'Wasser'
        },
        drop: ['<32>{#p/human}* (You throw away the Water.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (12 HP.)']
                : ['<32>{#p/basic}* \"Water\" Heals 12 HP\n* Smells like Di-Hydrogen Monoxide.'],
        name: 'Wasser',
        use: () => [
            '<32>{#p/human}* (You drink the Water.)',
            ...(SAVE.data.b.ufokinwotm8 ? [] : ["<33>{#p/human}* (You're filled with hydration.)"]) 
        ]
    },
    i_chocolate: {
        battle: {
            description: 'A well-deserved chocolate bar.',
            name: 'Chocolate'
        },
        drop: () => [
            '<32>{#p/human}* (You throw away the Chocolate Bar.)',
            ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* ... oh well.'])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (19 HP. This item seems to remind you of someone.)']
                : ['<32>{#p/basic}* \"Chocolate Bar\" Heals 19 HP\n* It\'s a well-deserved treat.'],
        name: 'Chocolate Bar',
        use: () => [
            '<32>{#p/human}* (You eat the Chocolate Bar.)',
            ...(battler.active && battler.alive[0].opponent.metadata.reactChocolate
                ? ['<32>{#p/basic}* Toriel recognizes the scent, and smiles a little.']
                : [])
        ]
    },
    i_delta: {
        battle: {
            description: 'This substance is said to have highly relaxing properties.',
            name: 'Δ-9'
        },
        drop: ['<32>{#p/human}* (You throw away the Δ-9.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (5 HP. You feel strangely about this item.)']
                : ['<32>{#p/basic}* \"Δ-9\" Heals 5 HP\n* This substance is said to have highly relaxing properties.'],
        name: 'Δ-9',
        use: ['<32>{#p/human}* (You ingest the Δ-9.)']
    },
    i_halo: {
        battle: {
            description: 'A headband with its own gravity field.',
            name: 'Halo'
        },
        drop: ['<32>{#p/human}* (You fling the Halo away like a frisbee.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (3 DF.)']
                : ['<32>{#p/basic}* \"Halo\" (3 DF)\n* A headband with its own gravity field.'],
        name: 'Halo',
        use: () => [
            '<32>{#p/human}* (You don the Halo.)',
            ...(SAVE.data.b.svr && !SAVE.data.b.freedom && asrielinter.i_halo_use++ < 1
                ? ['<25>{#p/asriel1}{#f/20}* I think it suits you.']
                : [])
        ]
    },
    i_little_dipper: {
        battle: {
            description: 'A whacking spoon.',
            name: 'Dipper'
        },
        drop: ['<32>{#p/human}* (You throw away the Little Dipper.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (3 AT.)']
                : ['<32>{#p/basic}* \"Little Dipper\" (3 AT)\n* A whacking spoon.'],
        name: 'Little Dipper',
        use: ['<32>{#p/human}* (You equip the Little Dipper.)']
    },
    i_pie: {
        battle: {
            description: 'Homemade butterscotch-cinnamon pie, one slice.',
            name: 'Pie'
        },
        drop: ['<32>{#p/human}* (You throw away the Butterscotch Pie.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (99 HP.)']
                : ['<32>{#p/basic}* \"Butterscotch Pie\" Heals 99 HP\n* Homemade butterscotch-cinnamon pie, one slice.'],
        name: 'Butterscotch Pie',
        use: ['<32>{#p/human}* (You eat the Butterscotch Pie.)']
    },
    i_pie2: {
        battle: {
            description: 'Classic family recipe.',
            name: 'Snail Pie'
        },
        drop: ['<32>{#p/human}* (You throw away the Snail Pie.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (99 HP.)']
                : ['<32>{#p/basic}* \"Snail Pie\" Heals 99 HP\n* Classic family recipe.'],
        name: 'Snail Pie',
        use: ['<32>{#p/human}* (You eat the Snail Pie.)']
    },
    i_pie3: {
        battle: {
            description: 'Despite being soup-ified, the pie remains delicious.',
            name: 'Pie Soup'
        },
        drop: ['<32>{#p/human}* (You dump the Pie Soup and the spoon that came with it.)'],
        info: ['<32>{#p/basic}* \"Pie Soup\" Heals 49 HP\n* Despite being soup-ified, the pie remains delicious.'],
        name: 'Pie Soup',
        use: ['<32>{#p/human}* (You consume the Pie Soup with the provided spoon.)']
    },
    i_pie4: {
        battle: {
            description: 'Actions do have their consequences...',
            name: 'Burnt Pie'
        },
        drop: ['<32>{#p/human}* (You toss the Burnt Pie to the side like it never existed.)'],
        info: ['<32>{#p/basic}* \"Burnt Pie\" Heals 39 HP\n* Actions do have their consequences...'],
        name: 'Burnt Pie',
        use: ['<32>{#p/human}* (You eat the Burnt Pie.)']
    },
    i_snails: {
        battle: {
            description: 'A plate of fried snails.\nFor breakfast, of course.',
            name: 'Snails'
        },
        drop: ['<32>{#p/human}* (You throw away the Fried Snails.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (19 HP.)']
                : ['<32>{#p/basic}* \"Fried Snails\" Heals 19 HP\n* A plate of fried snails.\n* For breakfast, of course.'],
        name: 'Fried Snails',
        use: ['<32>{#p/human}* (You eat the Fried Snails.)']
    },
    i_soda: {
        battle: {
            description: 'A sickly, dark yellow liquid.',
            name: 'Soda'
        },
        drop: () => [
            '<32>{#p/human}* (You throw away the Fizzli Soda.)',
            ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* Good riddance.'])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (8 HP.)']
                : ['<32>{#p/basic}* \"Fizzli Soda\" Heals 8 HP\n* A dark, sickly yellow liquid.'],
        name: 'Fizzli Soda',
        use: () => [
            '<32>{#p/human}* (You drink the Fizzli Soda.)',
            ...(SAVE.data.b.svr || world.darker ? [] : ['<32>{#p/basic}* Yuck!'])
        ]
    },
    i_spacesuit: {
        battle: {
            description: 'It came with the craft you crash-landed in.',
            name: 'Spacesuit'
        },
        drop: ['<32>{#p/human}* (You throw away the Worn Spacesuit.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (20 HP. The last remaining fragment of a spacecraft flown in exile.)']
                : ['<32>{#p/basic}* \"Worn Spacesuit\" Heals 20 HP\n* It came with the craft you crash-landed in.'],
        name: 'Worn Spacesuit',
        use: ['<33>{#p/human}* (After using its last heal-pak, the Worn Spacesuit fell apart.)']
    },
    i_spanner: {
        battle: {
            description: 'A rusty old wrench.',
            name: 'Spanner'
        },
        drop: ['<32>{#p/human}* (You throw away the Rusty Spanner.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ["<32>{#p/human}* (A trusty tool forged from beyond the galaxy's edge.)"]
                : ['<32>{#p/basic}* A rusty old wrench.'],
        name: 'Rusty Spanner',
        use: () => [
            ...(battler.active && battler.alive[0].opponent.metadata.reactSpanner
                ? []
                : ['<32>{#p/human}* (You toss the spanner into the air.)\n* (Nothing happens.)'])
        ]
    },
    i_starbertA: {
        battle: {
            description: 'The first of a limited run of Super Starwalker comics.',
            name: 'Starwalker 1'
        },
        drop: ['<32>{#p/human}* (You throw away Super Starwalker 1.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (It seems like the beginning of a journey.)']
                : ['<32>{#p/basic}* The first of a limited run of Super Starwalker comics.'],
        name: 'Super Starwalker 1',
        use: () => (battler.active ? ['<32>{#p/human}* (You read Super Starwalker 1.)', '<32>* (Nothing happens.)'] : [])
    },
    i_starbertB: {
        battle: {
            description: 'The second of a limited run of Super Starwalker comics.',
            name: 'Starwalker 2'
        },
        drop: ['<32>{#p/human}* (You throw away Super Starwalker 2.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (It seems like the middle of a journey.)']
                : ['<32>{#p/basic}* The second of a limited run of Super Starwalker comics.'],
        name: 'Super Starwalker 2',
        use: () =>
            battler.active
                ? [
                    '<32>{#p/human}* (You read Super Starwalker 2.)',
                    ...(SAVE.data.b.stargum
                        ? ['<32>* (Nothing happens.)']
                        : [
                            '<32>* (You found a piece of gum taped to the comic strip.)',
                            choicer.create('* (Use the gum?)', 'Ja', 'Nein')
                        ])
                ]
                : []
    },
    i_starbertC: {
        battle: {
            description: 'The third of a limited run of Super Starwalker comics.',
            name: 'Starwalker 3'
        },
        drop: ['<32>{#p/human}* (You throw away Super Starwalker 3.)'],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (It seems like the end of a journey... or is it a new beginning?)']
                : ['<32>{#p/basic}* The third of a limited run of Super Starwalker comics.'],
        name: 'Super Starwalker 3',
        use: () => (battler.active ? ['<32>{#p/human}* (You read Super Starwalker 3.)', '<32>* (Nothing happens.)'] : [])
    },
    i_steak: {
        battle: {
            description: 'Questionable at best.',
            name: 'Steak'
        },
        drop: () => [
            '<32>{#p/human}* (You throw away the Sizzli Steak.)',
            ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8
                ? []
                : ["<32>{#p/basic}* Well, that won't be missed."])
        ],
        info: () =>
            SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
                ? ['<32>{#p/human}* (14 HP.)']
                : ['<32>{#p/basic}* \"Sizzli Steak\" Heals 14 HP\n* Questionable.'],
        name: 'Sizzli Steak',
        use: () => [
            '<32>{#p/human}* (You eat the Sizzli Steak.)',
            ...(SAVE.data.b.svr || world.darker || SAVE.data.b.ufokinwotm8 ? [] : ['<32>{#p/basic}* Gross!'])
        ]
    },

    k_coffin: {
        name: 'Secret Key',
        description: () =>
            SAVE.data.b.w_state_secret
                ? 'Used to access a hidden room in the Outlands.'
                : "Acquired from the sock drawer in Toriel's room."
    },

    c_call_toriel: <Partial<CosmosKeyed<CosmosProvider<string[]>, string>>>{
        w_start: [
            '<25>{#p/toriel}{#f/0}* Ah, of course.\n* That must be where you crash-landed.',
            '<25>{#f/0}* The other humans who came here landed there, too.',
            '<25>{#f/1}* There must be something about the force field...',
            '<25>{#f/0}* ... which always makes incoming craft fly in on this vector.'
        ],
        w_twinkly: () =>
            SAVE.data.b.toriel_twinkly
                ? [
                    '<25>{#p/toriel}{#f/1}* Is that where I first found you?',
                    '<25>{#f/5}* That talking star who tormented you has been a pest for some time.',
                    '<25>{#f/1}* I have tried to reason with him before, but...',
                    '<25>{#f/9}* My efforts never truly got anywhere.'
                ]
                : [
                    '<25>{#p/toriel}{#f/1}* Is that where I first found you?',
                    '<25>{#f/5}* All alone out there, by yourself...',
                    '<25>{#f/0}* It is a good thing I was there to bring you in.'
                ],
        w_entrance: [
            '<25>{#p/toriel}{#f/1}* The entrance to the Outlands...',
            '<25>{#f/0}* Indeed, the area before this is not actually part of it.',
            '<25>{#f/5}* It is... more of an unmarked crash site.',
            '<25>{#f/1}* After the first human crashed directly INTO the Outlands...',
            '<25>{#f/0}* A separate platform seemed an obvious addition.'
        ],
        w_lobby: [
            '<25>{#p/toriel}{#f/0}* The puzzle in this room works well for demonstrations.',
            '<25>{#f/1}* After all, why else would I build it?',
            '<25>{#f/5}* Unfortunately, not every human understood this.',
            '<25>{#f/3}* One of them even tried running at the security field directly...',
            '<25>{#f/0}* ... suffice it to say, the use of healing magic was required.'
        ],
        w_tutorial: [
            '<25>{#p/toriel}* If this puzzle is not my favorite, I do not know what is!',
            '<25>* The way it teaches collaboration is a most valuable quality.',
            '<25>{#f/1}* Since my dream job IS to become a teacher...',
            '<25>{#f/0}* I am always looking for ways to impart these important lessons.'
        ],
        w_dummy: () => [
            '<25>{#p/toriel}{#f/1}* The training room...?',
            ...(SAVE.data.n.plot < 42
                ? [
                    [
                        '<25>{#f/0}* Hee hee, I am still proud of the way you handled that lesson.',
                        '<25>{#f/1}* A friendly conversation is preferable to the alternative...',
                        '<25>{#f/0}* And not just because it helps you make friends!'
                    ],
                    [],
                    [
                        '<25>{#f/5}* ...',
                        '<25>{#f/5}* Although you did not handle that lesson in the way I intended...',
                        '<25>{#f/0}* At the very least, you avoided the conflict.',
                        '<25>{#f/0}* Considering the alternatives, it was... a preferable outcome.'
                    ],
                    [
                        '<25>{#f/0}* ... hmm.',
                        '<25>{#f/0}* Truthfully, I still do not know how to react to what happened.',
                        '<25>{#f/1}* It was mesmerising to watch, though...',
                        '<25>{#f/3}* Just the two of you...\n* Staring at each other...',
                        '<25>{#f/4}* ...'
                    ],
                    [
                        '<25>{#f/1}* I cannot say I expected what happened, but...',
                        '<25>{#f/0}* It was still endearing nonetheless.',
                        '<25>{#f/0}* Surprisingly, you are the first human to try the approach.',
                        '<25>{#f/1}* And it seemed such an obvious solution in hindsight...'
                    ],
                    [],
                    [
                        '<25>{#f/5}* ...',
                        '<25>{#f/7}* ...',
                        '<25>{#f/8}* Hahaha!\n* Ah, I cannot help but laugh!',
                        '<25>{#f/6}* The shamelessness with which you chose to flirt...',
                        '<25>{#f/1}* Certainly took me by surprise!',
                        '<25>{#f/0}* Listen to me, my child.',
                        '<25>{#f/9}* Flirting with your adversaries may not always be ideal.',
                        '<25>{#f/10}* But, if you can do it like THAT again...',
                        '<25>{#f/0}* There is no telling what you can accomplish this way.'
                    ]
                ][SAVE.data.n.state_wastelands_dummy]
                : [
                    '<25>{#p/toriel}{#f/0}* Oh, right, about that.',
                    '<25>{#p/toriel}{#f/0}* I recently discovered that a ghost was hiding in the dummy.',
                    '<25>{#p/toriel}{#f/1}* They seemed bothered about something, but...',
                    '<25>{#p/toriel}{#f/0}* After a little talk, I helped to calm them down.',
                    '<25>{#p/toriel}{#f/1}* Hmm... I wonder where Lurksalot is now?'
                ])
        ],
        w_coffin: [
            '<25>{#p/toriel}{#f/5}* ...',
            '<25>{#f/5}* In times like this, it is important that we show respect.',
            '<25>{#f/10}* ... do you understand?',
            '<25>{#f/9}* It is a lesson more important than that of puzzles or encounters.'
        ],
        w_danger: () =>
            SAVE.data.n.state_wastelands_froggit === 3
                ? [
                    '<25>{#p/toriel}{#f/1}* The riddle offered by the terminal in that room...',
                    '<25>{#f/0}* Was based on something I found in an old Earth legend.',
                    '<25>{#f/1}* It involved a series of many intricate puzzles...',
                    '<25>{#f/0}* And a certain deceptive baked good.',
                    SAVE.data.b.w_state_riddleskip
                        ? '<25>{#f/5}* It is a shame you refused to solve it.'
                        : '<25>{#f/0}* Seeing you solve it was quite gratifying.'
                ]
                : [
                    '<25>{#p/toriel}{#f/1}* As overseer of the Outlands, I took it upon myself...',
                    '<25>{#f/0}* To ensure the other monsters did not attack you.',
                    '<25>{#f/0}* Both they and I have a mutual understanding about this.',
                    '<25>{#f/0}* That is why the Froggit left so readily.'
                ],
        w_zigzag: [
            '<25>{#p/toriel}{#f/1}* My idea with building this room to be so long and windy...',
            '<25>{#f/0}* ... was that I felt a straight room would be too boring.',
            '<25>{#f/1}* After all, who wants to walk in a straight line all their life?',
            '<25>{#f/0}* A little change of pace can be quite nice.'
        ],
        w_froggit: [
            '<25>{#p/toriel}* From this room forward, more monsters may be found.',
            '<25>{#f/0}* They often like to \"hang out\" here.\n* Nice, is it not?',
            '<25>{#f/1}* It tended to be a quiet place, until recently...',
            '<25>{#f/0}* When a monster began teaching the others how to flirt.',
            '<25>{#f/0}* This new element has greatly altered the social atmosphere.'
        ],
        w_candy: () => [
            SAVE.data.n.state_wastelands_candy < 4
                ? '<25>{#p/toriel}{#f/1}* The vending machine has yet to break down?'
                : '<25>{#p/toriel}{#f/1}* Oh dear, is the vending machine broken again?',
            '<25>{#f/5}* Well, it has happened more times than I can count.',
            '<25>{#f/3}* On the positive side, it DOES save power...',
            '<25>{#f/0}* ... so perhaps it is not all bad.'
        ],
        w_puzzle1: [
            '<25>{#p/toriel}{#f/1}* To ease the process of retrying the puzzle...',
            '<25>{#f/0}* I installed a system to move you back to the start.',
            '<25>{#f/5}* The scientist who helped to install it is long gone now...',
            '<25>{#f/0}* But his work continues to be of use every day.'
        ],
        w_puzzle2: [
            '<25>{#p/toriel}{#f/1}* Ah, a most unique form of puzzle exists here.',
            '<25>{#f/0}* One that tests patience over memorization.',
            '<25>{#f/1}* For the most part, the other humans complained about it...',
            '<25>{#f/0}* Though, one did appreciate the value it provides.'
        ],
        w_puzzle3: [
            '<25>{#p/toriel}{#f/1}* A little trick you may find helpful for this puzzle...',
            '<25>{#f/0}* Is that you can start moving even as the sequence is shown.',
            '<25>{#f/5}* ... I suppose that is not of much use to you now.',
            '<25>{#f/1}* But, if for some reason you need to solve it again...',
            '<25>{#f/0}* You may try the advice I have just given.'
        ],
        w_puzzle4: [
            '<25>{#p/toriel}{#f/1}* It has come to my attention that, recently...',
            '<25>{#f/0}* Old editions of a now- defunct comic series are being sold.',
            '<25>{#f/0}* Perhaps, if you are bored, you could buy one.',
            '<25>{#f/0}* Children your age tend to be rather fond of these things!'
        ],
        w_mouse: [
            '<25>{#p/toriel}{#f/1}* As a matter of principle, I find it important...',
            '<25>{#f/0}* That there be a room designated for stopping and resting.',
            '<25>{#f/0}* In my own life, I often find breaks to be a useful asset.',
            '<25>{#f/1}* The stærmite who resides here would certainly agree...'
        ],
        w_blooky: () =>
            SAVE.data.b.killed_mettaton
                ? [
                    '<25>{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...',
                    '<25>{#f/5}* Has been feeling worse than ever lately.',
                    '<25>{#f/1}* I tried to ask them why, but they would not say...',
                    '<25>{#f/5}* ... I have not seen them since.'
                ]
                : !SAVE.data.b.a_state_hapstablook || SAVE.data.n.plot < 68
                    ? [
                        '<25>{#p/toriel}{#f/0}* That ghost who called earlier often inhabits this area.',
                        ...(SAVE.data.b.napsta_performance
                            ? ['<25>{#f/1}* I thought they would be happier after their performance...']
                            : ['<25>{#f/1}* I have tried to lift their spirits in the past...']),
                        '<25>{#f/5}* But their troubles may not be so easy to resolve.',
                        '<25>{#f/1}* If only I knew what was holding them down...'
                    ]
                    : [
                        '<25>{#p/toriel}{#f/1}* For whatever reason, that ghost who often comes here...',
                        '<25>{#f/0}* Has been feeling a lot better lately.',
                        '<25>{#f/0}* They even came to my house to tell me so themselves.',
                        '<25>{#f/1}* Apparently you had something to do with this...?',
                        '<25>{#f/0}* Well then.\n* I am very proud of you, my child.'
                    ],
        w_party: [
            '<25>{#p/toriel}{#f/0}* The activities room.\n* We host all kinds of performances there.',
            '<25>{#f/0}* Drama, dance nights...\n* And, most important of all, the arts.',
            '<25>{#f/0}* It is always good to see people expressing themselves.',
            '<25>{#f/1}* I once attended a comedy show in that very room.',
            '<25>{#f/0}* It was the hardest I have ever laughed in my life!'
        ],
        w_pacing: () => [
            SAVE.data.b.toriel_twinkly
                ? '<25>{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with that talking star.'
                : '<25>{#p/toriel}{#f/0}* I heard someone here made a \"friend\" with a talking star.',
            '<25>{#f/1}* One of the Froggits, I presume...?',
            "<25>{#f/1}* To say I am worried for that monsters' safety...",
            '<25>{#f/5}* Would be quite the understatement.'
        ],
        w_junction: [
            '<25>{#p/toriel}{#f/1}* The junction room...',
            '<25>{#f/0}* In the past, we had planned a community area of sorts here.',
            '<25>{#f/0}* Outlands visitors would be met with a warm, welcoming atmosphere.',
            '<25>{#f/1}* Over time, though, we realized not many people would come...',
            '<25>{#f/0}* And so, the design was altered into what you see today.',
            '<25>{#f/5}* A little boring, but I suppose not every room can be grand...'
        ],
        w_annex: [
            '<25>{#p/toriel}* From here, the all- important taxi stop can be reached.',
            '<25>{#f/1}* Not only are other areas of the outpost accessible...',
            '<25>{#f/0}* But other subsections of the Outlands are, too.',
            '<25>{#f/1}* Seeing as you are but a small child, however...',
            '<25>{#f/5}* It is unlikely the driver would offer that as an option to you.',
            '<25>{#f/0}* The shops and business there are mostly just for grown-ups.'
        ],
        w_wonder: () => [
            '<25>{#p/toriel}{#f/1}* A little mushroom greeted me on my way back from shopping...',
            SAVE.data.b.snail_pie
                ? '<25>{#f/0}* ... as I returned with ingredients for that snail pie.'
                : '<25>{#f/0}* ... as I returned with ingredients for that butterscotch pie.',
            '<25>{#f/3}* Strangely, it was floating above the doorway...',
            '<25>{#f/0}* The gravity must be weak in that room.',
            '<25>{#f/1}* Perhaps the presence of the taxi has some kind of effect...?'
        ],
        w_courtyard: [
            '<25>{#p/toriel}{#f/0}* Ah.\n* The courtyard.',
            '<25>{#f/1}* Admittedly, it is a little lacking...',
            '<25>{#f/5}* In terms of being a place for children like you to play.',
            '<25>{#f/1}* With every human who came, I thought of fixing that...',
            '<25>{#f/5}* But they always left before I had the chance.'
        ],
        w_alley1: [
            '<25>{#p/toriel}{#f/9}* ... the room in which I lectured you about leaving.',
            '<25>{#f/5}* I thought, if I spoke of the force field...',
            '<25>{#f/5}* I might convince you to stay.',
            '<25>{#f/1}* ... I remember telling the other humans the same, but...',
            '<25>{#f/5}* It was as effective for you as it was for them.'
        ],
        w_alley2: [
            '<25>{#p/toriel}{#f/9}* ... the room in which I warned you of the dangers ahead.',
            '<25>{#f/5}* I have been told my beliefs about them are misguided, but...',
            '<25>{#f/5}* I felt it unwise to take that chance.',
            '<25>{#f/9}* ... perhaps it is time I re-considered my viewpoint.'
        ],
        w_alley3: [
            '<25>{#p/toriel}{#f/9}* ... I truly regret the way I acted towards you here.',
            '<25>{#f/5}* It was wrong of me to attempt to force you to stay...',
            '<25>{#f/5}* Merely acting on my own silly desires.',
            '<25>{#f/1}* I am sure you have already forgiven me, though...',
            '<25>{#f/5}* Regardless of whether or not I deserve it...'
        ],
        w_alley4: () =>
            SAVE.data.b.w_state_fightroom
                ? [
                    '<32>{#s/phone}{#p/event}* Dialing...',
                    '<25>{#p/toriel}{#f/1}* Although that room may not evoke the best of feelings for us...',
                    '<25>{#f/0}* It is still one of my favorite places in the Outlands.',
                    '<25>{#f/1}* There is a certain someone who visits sometimes...',
                    '<25>{#f/6}* Perhaps you are already aware of him.',
                    '<32>{#s/equip}{#p/event}* Click...'
                ]
                : instance('main', 'toriButNotGarb') === void 0 // NO-TRANSLATE

                    ? [
                        '<32>{#s/phone}{#p/event}* Dialing...',
                        '<25>{#p/toriel}{#f/1}* Calling so soon...?',
                        '<25>{#f/0}* ... I have not even gotten back to the house yet!',
                        '<25>{#f/0}* Please, wait a moment before calling again.',
                        '<32>{#s/equip}{#p/event}* Click...'
                    ]
                    : [
                        '<32>{#w.stopThatGoat}{#s/phone}{#p/event}* Dialing...',
                        '<25>{#p/toriel}{#f/1}* Calling so soon...?',
                        '<25>{#f/0}* ... I have not even left the room yet!',
                        '<25>{#f/2}* A moment to breathe would be nice!',
                        '<32>{#w.startThatGoat}{#s/equip}{#p/event}* Click...'
                    ],
        w_bridge: [
            '<25>{#p/toriel}{#f/1}* The bridge to the rest of the outpost...',
            '<25>{#f/5}* It is a shame to think I almost destroyed it.',
            '<25>{#f/0}* Of course, the taxi still would have been around.',
            '<25>{#f/3}* But I doubt that would have been very reliable.',
            '<25>{#f/1}* Let us be glad this bridge is still in place.'
        ],
        w_exit: () =>
            SAVE.data.n.plot < 16
                ? [
                    '<25>{#p/toriel}{#f/1}* My child, if you are leaving the Outlands...',
                    '<25>{#f/0}* Then... I want you to remember something.',
                    '<25>{#f/1}* Whatever happens, no matter how difficult it may seem...',
                    '<25>{#f/0}* I want you to know that I have faith in you.',
                    '<25>{#f/0}* That I know you can do the right thing.',
                    '<25>{#f/1}* Remember that, alright?'
                ]
                : SAVE.data.n.plot < 17.001
                    ? [
                        '<25>{#p/toriel}{#f/1}* Returning to the Outlands so soon...?',
                        '<25>{#f/0}* Well.\n* I cannot say I am opposed to that.',
                        '<25>{#f/1}* You may leave at any time, of course...',
                        '<25>{#f/0}* But, for the moment, it is nice to see you.'
                    ]
                    : [
                        '<25>{#p/toriel}{#f/2}* How long have you been standing out there!?',
                        '<25>{#f/1}* Did you come back all this way just to call me?',
                        '<25>{#f/0}* ... silly goose.',
                        '<25>{#f/0}* If you would like to call, there is no need to go back this far.'
                    ],
        w_toriel_front: [
            '<25>{#p/toriel}{#f/1}* Did you know that this house is a re-creation of another?',
            '<25>{#f/1}* In the past, I lived in the Citadel...',
            '<25>{#f/0}* In a house that this one was made to resemble.',
            '<25>{#f/5}* Once in a while, I forget that I am not really there...'
        ],
        w_toriel_hallway: [
            '<25>{#p/toriel}{#f/0}* There is not much to say about the hallway.',
            '<26>{#f/1}* Though, you can take a look in the mirror, if you like...',
            '<25>{#f/0}* I hear self-reflection can be a powerful thing.'
        ],
        w_toriel_asriel: [
            '<25>{#p/toriel}{#f/0}* Ah, it is your room!',
            '<25>{#f/5}* Your... room...',
            '<25>{#f/9}* ...',
            '<25>{#f/5}* Perhaps it is no longer as such.',
            '<25>{#f/1}* ...',
            '<25>{#f/1}* Actually, I will leave that decision to you...',
            '<25>{#f/0}* You may still rest any time you like.'
        ],
        w_toriel_toriel: [
            '<25>{#p/toriel}{#f/0}* So you have stumbled into my room.',
            '<25>{#f/0}* If you like, you may read a book from my bookshelf.',
            '<25>{#f/0}* But, please, do not forget to put it back.',
            "<25>{#f/23}* And don't you dare open that sock drawer!"
        ],
        w_toriel_living: () =>
            toriCheck()
                ? ['<25>{#p/toriel}{#f/3}* There is no need to call me when I am right here, little one.']
                : [
                    '<25>{#p/toriel}{#f/1}* Rummaging around in the living room, are we?',
                    '<25>{#f/0}* Say.\n* Have you read all of the books yet?',
                    '<25>{#f/1}* I thought about reading you the snail fact book...',
                    '<25>{#f/0}* But I decided it might be a little too repetitive for you.'
                ],
        w_toriel_kitchen: [
            '<25>{#p/toriel}{#f/1}* The kitchen...?',
            '<25>{#f/0}* I left a chocolate bar in the fridge for you.',
            '<25>{#f/0}* I hear it is... an old favorite of humans.',
            '<25>{#f/1}* I hope you like it...'
        ],
        s_start: () =>
            SAVE.data.n.plot < 17.001
                ? [
                    '<25>{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.',
                    '<26>{#f/0}* Do not fear, little one.',
                    '<25>{#f/1}* Keep going...'
                ]
                : [
                    '<25>{#p/toriel}{#f/1}* From what I recall, this long room...',
                    '<26>{#f/0}* ... would have been the basis for a town on the outskirts of Starton.',
                    '<25>{#f/0}* Of course, that never came to pass.',
                    '<25>{#f/2}* One town was more than enough!'
                ],
        s_sans: () =>
            SAVE.data.n.plot < 17.001
                ? [
                    '<25>{#p/toriel}{#f/0}* If I am right, a certain friend of mine should be up ahead.',
                    '<26>{#f/0}* Do not fear, little one.',
                    '<25>{#f/1}* Keep going...'
                ]
                : [
                    '<25>{#p/toriel}{#f/1}* I presume by now you have heard of the \"gravometric inverter?\"',
                    '<26>{#f/0}* It is a device Sans has told me all about.',
                    '<25>{#f/1}* Apparently, there is another world up there...',
                    '<25>{#f/0}* A place where things do not always face the right way up.'
                ],
        s_crossroads: [
            '<25>{#p/toriel}{#f/1}* This old landing pad was once a bustling intersection...',
            '<25>{#f/1}* Supply ships coming and going...',
            '<25>{#f/1}* Ready to aid in whatever was being built next...',
            '<25>{#f/5}* It is a shame the outpost seems to have stopped expanding.',
            '<25>{#f/0}* For a while, building new areas defined our culture!'
        ],
        s_human: [
            "<25>{#p/toriel}* I heard Sans's brother wants to join the Royal Guard someday.",
            '<25>{#f/1}* Such an aspirational young skeleton...',
            '<25>{#f/0}* Despite my feelings about the guard, it is good for him to dream.',
            '<25>{#f/5}* I worry that too many have given up on their dreams lately...',
            '<25>{#f/0}* But not him!\n* That skeleton knows what is best for him.'
        ],
        s_papyrus: [
            '<25>{#p/toriel}* Sans told me all about the gadgets Papyrus added to his station.',
            '<25>{#f/1}* First, a handle, so he can \"swing\" into duty...',
            '<25>{#f/1}* A so-called \"sky wrench\" used to get a \"fix\" on the stars...',
            '<25>{#f/0}* And a screen attachment to keep track of his many responsibilities.',
            '<25>{#f/6}* With inventions like these, you would think he works at a lab.'
        ],
        s_doggo: [
            '<25>{#p/toriel}{#f/5}* Is the Royal Guard giving you too much trouble?',
            '<25>{#f/0}* Sans did say he would warn you of potential encounters.',
            '<25>{#f/1}* ...',
            '<25>{#f/1}* Perhaps I should be more worried, but...',
            '<25>{#f/0}* Something tells me you will be alright.',
            '<25>{#f/0}* I have faith in that skeleton to look out for you.'
        ],
        s_robot: [
            '<25>{#p/toriel}{#f/1}* Ah, what a lovely sound...',
            '<25>{#f/0}* I would recognize a builder bot anywhere.',
            '<25>{#f/5}* After the ban on AI programs, we had most of them disabled...',
            '<25>{#f/1}* But the two whose sentience did not corrupt them...',
            '<25>{#f/0}* Were allowed a more graceful retirement.',
            '<25>{#f/0}* It is nice to know that they have survived to this day.'
        ],
        s_maze: [
            "<25>{#p/toriel}* Sans has told me all about his brother's fondness for puzzles.",
            '<25>{#f/1}* I hear he has even created some of his own...?',
            '<25>{#f/0}* I am most curious about the \"wall of fire.\"',
            '<25>{#f/1}* Are the flames hot?\n* Or are they merely pleasantly warm?',
            '<25>{#f/5}* For your sake, I would hope it is the latter.'
        ],
        s_dogs: [
            '<25>{#p/toriel}{#f/1}* I hear the Royal Guard employs a pair of married dogs.',
            '<25>{#f/3}* To be married at the same time as being a royal guard...',
            '<25>{#f/4}* That relationship must have some \"interesting\" motivations.',
            '<25>{#f/6}* But what do I know.\n* As Sans would say, I am merely a \"goat!\"'
        ],
        s_lesser: [
            '<25>{#p/toriel}* I wonder what kind of food is sold in Starton these days.',
            '<25>{#f/1}* When I was last here, everyone loved to eat ghost fruit...',
            '<25>{#f/0}* A strange food which could be eaten both by ghosts and non-ghosts.',
            '<26>{#f/0}* Whatever the favorite\n  is now, I am sure I could never dream of it.'
        ],
        s_bros: [
            "<25>{#p/toriel}{#f/1}* Sans's fondness for spot-the-difference puzzles...",
            '<25>{#f/0}* Well, it has never really made sense to me.',
            '<25>{#f/1}* How could such a simple puzzle be appealing to him?',
            '<26>{#f/3}* ... more specifically...',
            '<25>{#f/1}* Where is the humor in such a puzzle?'
        ],
        s_spaghetti: [
            "<25>{#p/toriel}* Sans has often spoken of Papyrus's interest in spaghetti dishes.",
            '<25>{#f/6}* But why stop there?\n* Just imagine the PASTABILITIES...',
            '<25>{#f/8}* Rigatoni!\n* Fettuccine!\n* Acini di Pepe!',
            '<25>{#f/0}* Some variety could really help him go FARFALLE.',
            '<25>{#f/2}* ... in other words, go BIGOLI or go home!'
        ],
        s_puzzle1: [
            '<25>{#p/toriel}{#f/1}* Whatever the puzzles in Starton are like now, I am sure...',
            '<25>{#f/0}* They are nothing like the ones that were here when I left.',
            '<25>{#f/5}* A level of difficulty so unrealistic...',
            '<25>{#f/5}* It is a wonder anyone could solve them at all.'
        ],
        s_puzzle2: [
            '<25>{#p/toriel}{#f/1}* They say some puzzles have secret solutions...',
            '<25>{#f/0}* ... a statement I find utterly unbelievable!',
            '<25>{#f/0}* A secret solution would defeat the whole purpose of a puzzle.',
            '<25>{#f/1}* Puzzles, at least ones with realistic difficulty...',
            '<25>{#f/2}* Should be solved the intended way only!'
        ],
        s_jenga: [
            '<25>{#p/toriel}* To my knowledge, Dr. Alphys is the current royal scientist.',
            '<25>{#f/1}* She may never replace the experience of her predecessor, but...',
            '<25>{#f/0}* I am sure she is more than capable of finding her own path forward.',
            '<25>{#f/0}* This may surprise you, but I have a certain respect for scientists.',
            '<25>{#f/2}* Such brilliant minds!'
        ],
        s_pacing: [
            '<25>{#p/toriel}{#f/1}* You would be wise to steer clear of dubious salesfolk...',
            '<25>{#f/0}* For you never know what strings they may pull.',
            '<25>{#f/0}* Or what moon rocks may end up falling into your lap.',
            '<25>{#f/3}* It is a lesson I have learned the hard way, unfortunately...'
        ],
        s_puzzle3: [
            '<25>{#p/toriel}{#f/1}* The puzzle in this room is one of memorization, is it not?',
            '<25>{#f/1}* Sans mentioned that his brother often updates the pattern...',
            '<25>{#f/0}* ... to maintain a strong \"rotating password.\"',
            '<25>{#f/6}* How silly!',
            '<25>{#f/0}* In the Outlands, our memorization puzzles update on-demand.'
        ],
        s_greater: [
            '<25>{#p/toriel}{#f/1}* The old owner of that doghouse, Canis Maximus...',
            '<25>{#f/0}* ... retired from the guard a long while ago.',
            '<25>{#f/7}* Fortunately, its new owner is said to be a bundle of puppy energy!',
            '<25>{#f/0}* Clearly, it has learned well from such a wise master.'
        ],
        s_math: [
            '<25>{#p/toriel}{#f/1}* Please, can somebody explain \"dog justice?\"',
            '<25>{#f/0}* It is an odd phrase I continue to hear every so often.',
            '<25>{#f/5}* I do know of one little puppy that visits the Outlands sometimes...',
            '<25>{#f/0}* Perhaps that is who is deserving of justice.'
        ],
        s_bridge: [
            '<25>{#p/toriel}{#f/1}* When this bridge was first constructed...',
            "<25>{#f/0}* Its precarious nature prompted an upgrade to the outpost's systems.",
            '<25>{#f/0}* In short time, the aptly-named \"gravity guardrails\" were added.',
            '<25>{#f/0}* These are what prevent you from falling off the platforms.'
        ],
        s_town1: [
            '<25>{#p/toriel}{#f/0}* Ah...\n* The town of Starton.',
            '<25>{#f/1}* I have heard much about a \"Grillby\'s\" there...',
            '<25>{#f/0}* ... and its diverse array of patrons both new and old.',
            '<25>{#f/0}* Sans often goes there to eat, you see.',
            '<25>{#f/7}* I hear the bartender is quite \"hot.\"'
        ],
        s_taxi: [
            '<25>{#p/toriel}{#f/1}* A taxi stop near town?',
            '<25>{#f/1}* ... hmm...',
            '<25>{#f/0}* I wonder if it is any different from the one in the Outlands.',
            '<25>{#f/1}* Of course, I would have no way of knowing until I saw it...',
            '<25>{#f/0}* Which I have no way of doing without a fancy telescope.',
            '<25>{#f/0}* I wonder where I could find one of those.'
        ],
        s_town2: [
            '<25>{#p/toriel}{#f/1}* Napstablook recently told me they opened a shop...',
            '<25>{#f/5}* ... on the \"south side\" of town.',
            '<25>{#f/1}* What could this mean?',
            '<25>{#f/0}* The town I remember organizing was a large, unified square.',
            '<25>{#f/1}* Perhaps there was a split at some point?',
            '<25>{#f/5}* That would be a shame, considering the original vision...'
        ],
        s_battle: [
            '<25>{#p/toriel}{#f/1}* The thing Sans seemed most eager to warn me about...',
            '<25>{#f/0}* Was his brother\'s so- called \"special attack.\"',
            '<25>{#f/1}* If Papyrus chooses to spar with you, you must avoid it at all costs.',
            '<25>{#f/2}* I repeat, avoid the special attack!\n* At all costs!',
            '<25>{#f/0}* That is all I have to say on this matter.'
        ],
        s_exit: [
            '<25>{#p/toriel}{#f/1}* If you ever decide to leave Starton, you must understand...',
            '<25>{#f/5}* My phone is old, and can only reach certain rooms in the factory.',
            '<25>{#f/9}* It would be difficult to call me until you find your way out.',
            '<25>{#f/1}* Forgive me.\n* I just thought that I should let you know.'
        ],
        f_entrance: [
            '<25>{#p/toriel}{#f/7}* So you found a place in the factory with good reception...?',
            '<25>{#f/1}* ... that must mean you are somewhere unenclosed...',
            '<25>{#f/0}* Which also implies the nearby presence of synth-bushes.',
            '<25>{#f/3}* Those things are terrible to get stuck in...',
            '<25>{#f/4}* Getting you all itchy and scratchy...',
            '<25>{#f/0}* Fortunately, I know you are smart enough not to run into them.'
        ],
        f_bird: () =>
            SAVE.data.n.plot !== 47.2 && SAVE.data.n.plot > 42 && SAVE.data.s.state_foundry_deathroom !== 'f_bird' // NO-TRANSLATE

                ? [
                    '<25>{#p/toriel}{#f/0}* There truly is nothing like the chirp of that fearless little bird.',
                    '<25>{#f/1}* Even when it still lived within a bucket of water...',
                    '<25>{#f/1}* It would fly its mighty little wings...',
                    '<25>{#f/1}* Taking us places...',
                    '<25>{#f/0}* I used its services to carry groceries often.',
                    '<25>{#f/5}* ... back when we as a species all lived in that old factory.'
                ]
                : [
                    '<25>{#p/toriel}{#f/5}* Things sound awfully silent where you are...',
                    '<25>{#f/5}* Almost like there is something missing.',
                    '<25>{#f/5}* Something important...',
                    '<25>{#f/0}* Well, no matter.\n* My imagination does run wild sometimes.',
                    '<25>{#f/1}* ...',
                    '<25>{#f/1}* Chirp, chirp, chirp, chirp, chirp...'
                ],
        f_taxi: [
            "<25>{#p/toriel}{#f/1}* So you found the factory's taxi stop...?",
            '<25>{#f/0}* Perhaps you could use it to escape that Royal Guard captain.',
            '<25>{#f/1}* A visitor here once spoke of her obsession with spears...',
            '<25>{#f/0}* How odd.\n* The captain I knew was into sabers.'
        ],
        f_battle: [
            '<25>{#p/toriel}{#f/0}* Ah, there you are.',
            "<25>{#f/0}* You're at the edge of the factory there.",
            '<26>{#f/1}* From this point forward, I do not know what lies ahead of you...',
            '<25>{#f/5}* Before I left, there was only an elevator to the Citadel.',
            '<25>{#f/1}* Now, however, exists the area called \"Aerialis...\"',
            '<25>{#f/23}* ... I wonder who came up with THAT name.'
        ],
        f_exit: toriel_aerialis,
        a_start: toriel_aerialis,
        a_path1: toriel_aerialis,
        a_path2: toriel_aerialis,
        a_path3: toriel_aerialis,
        a_rg1: toriel_aerialis,
        a_path4: toriel_aerialis,
        a_barricade1: toriel_aerialis,
        a_puzzle1: toriel_aerialis,
        a_mettaton1: toriel_aerialis,
        a_elevator1: toriel_aerialis,
        a_elevator2: toriel_aerialis,
        a_sans: toriel_aerialis,
        a_pacing: toriel_aerialis,
        a_prepuzzle: toriel_aerialis,
        a_puzzle2: toriel_aerialis,
        a_mettaton2: toriel_aerialis,
        a_rg2: toriel_aerialis,
        a_barricade2: toriel_aerialis,
        a_split: toriel_aerialis,
        a_offshoot1: toriel_aerialis,
        a_elevator3: toriel_aerialis,
        a_elevator4: toriel_aerialis,
        a_auditorium: toriel_aerialis,
        a_aftershow: toriel_aerialis,
        a_hub1: toriel_aerialis,
        a_hub2: toriel_aerialis,
        a_lookout: toriel_aerialis,
        a_hub3: toriel_aerialis,
        a_plaza: toriel_aerialis,
        a_elevator5: toriel_aerialis,
        a_hub4: toriel_aerialis,
        a_sleeping1: toriel_aerialis,
        a_hub5: toriel_aerialis
    },
    c_call_toriel_extra: <CosmosKeyed<CosmosProvider<string[]>, string>>{
        c_call_toriel_early: () =>
            game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

                ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* Come back to the house this instant!']
                : [
                    3 <= SAVE.data.n.cell_insult
                        ? '<25>{#p/toriel}{#f/23}* Are you not exhausted after how you behaved towards me?'
                        : SAVE.data.n.state_wastelands_napstablook === 5
                            ? '<25>{#p/toriel}{#f/1}* Are you not exhausted after waiting so long?'
                            : '<25>{#p/toriel}{#f/1}* Are you not exhausted after all you have been through?',
                    3 <= SAVE.data.n.cell_insult
                        ? game.room.startsWith('w_toriel') // NO-TRANSLATE

                            ? '<25>{#f/0}* Perhaps you should see the bed I made for you in the guest room.'
                            : '<25>{#f/0}* Perhaps you should see the bed I made for you at the house.'
                        : game.room.startsWith('w_toriel') // NO-TRANSLATE

                            ? '<25>{#f/0}* Come to the hallway, and I will show you something.'
                            : '<25>{#f/0}* Come to the house, and I will show you something.'
                ],
        c_call_toriel_late: () =>
            SAVE.data.n.plot === 8.1
                ? ['<32>{#p/human}* (But the line was busy.)']
                : game.room === 'w_bridge' || game.room.startsWith('w_alley') // NO-TRANSLATE

                    ? ['<25>{#p/toriel}{#f/3}* ...', '<25>{#f/2}* Come back to the house this instant!']
                    : [
                        '<25>{#p/toriel}{#f/1}* There is no need to call me over the phone, my child.',
                        3 <= SAVE.data.n.cell_insult
                            ? '<26>{#f/23}* We already know what that tends to result in.'
                            : game.room === 'w_toriel_living' // NO-TRANSLATE

                                ? toriCheck()
                                    ? '<25>{#f/0}* After all, I am here in the room with you.'
                                    : '<25>{#f/0}* I will be done in just a moment.'
                                : game.room.startsWith('w_toriel') // NO-TRANSLATE

                                    ? toriCheck()
                                        ? '<25>{#f/0}* If you want to see me, you can come to the living room.'
                                        : '<25>{#f/0}* If you want to see me, you can wait in the living room.'
                                    : '<25>{#f/0}* If you want to see me, you can come to the house.'
                    ],
        c_call_asriel: () =>
            [
                [
                    "<25>{#p/asriel2}{#f/3}* Just so you know, I'm not picking that up.",
                    '<25>{#p/asriel2}{#f/4}* We have better things to do.'
                ],
                ['<25>{#p/asriel2}{#f/4}* ...'],
                ['<25>{#p/asriel2}{#f/4}* ... seriously?'],
                ['<25>{#p/asriel2}{#f/3}* You must be really, REALLY bored.'],
                []
            ][Math.min(SAVE.flag.n.ga_asrielCall++, 4)]
    },
    s_save_outlands: {
        w_courtyard: {
            name: 'Outlands - Courtyard',
            text: () =>
                SAVE.data.n.plot > 16
                    ? [
                        6 <= world.population
                            ? '<32>{#p/human}* (Even when visiting, this little home fills you with determination.)'
                            : '<32>{#p/human}* (Even when visiting, this house fills you with determination.)'
                    ]
                    : 6 <= world.population
                        ? ['<32>{#p/human}* (This cute little home fills you with determination.)']
                        : ['<32>{#p/human}* (A house amidst the metallic walls fills you with determination.)']
        },
        w_entrance: {
            name: 'Outlands - Entrance',
            text: () =>
                world.runaway
                    ? [
                        '<32>{#p/human}* (The industrious Outlands falls silent, filling you with determination.)',
                        '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                    ]
                    : SAVE.data.n.plot < 48
                        ? [
                            '<32>{#p/human}* (The industrious Outlands lies ahead, filling you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
                        : [
                            '<32>{#p/human}* (Returning to where it all began, after so long...)',
                            '<32>{#p/human}* (This fills you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
        },
        w_froggit: {
            name: 'Outlands - Rest Area',
            text: () =>
                SAVE.data.n.state_wastelands_toriel === 2 || world.runaway || roomKills().w_froggit > 0
                    ? SAVE.data.n.plot < 8.1
                        ? [
                            '<32>{#p/human}* (The air grows stale.)\n* (Somehow, this fills you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
                        : [
                            '<32>{#p/human}* (The air has fully dried up.)\n* (Indeed, this fills you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
                    : SAVE.data.b.svr
                        ? [
                            '<32>{#p/human}* (The area has been vacated, but the air remains fresh.)',
                            '<32>{#p/human}* (This, of course, fills you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
                        : [
                            '<32>{#p/human}* (The sight of weird and wonderful creatures fills you with determination.)',
                            '<32>{#p/human}* (HP vollständig wiederhergestellt.)'
                        ]
        },
        w_mouse: {
            name: 'Outlands - Stærmite Hole',
            text: () =>
                world.population > 5 && !SAVE.data.b.svr && !world.runaway
                    ? [
                        '<32>{#p/human}* (Knowing that the stærmite will one day emerge...)',
                        '<32>{#p/human}* (The thought fills you with determinætion.)'
                    ]
                    : [
                        '<32>{#p/human}* (Even if the stærmite may never emerge again...)',
                        '<32>{#p/human}* (The situation fills you with determinætion.)'
                    ]
        },
        w_start: {
            name: 'Crash Site',
            text: []
        }
    }
};


// END-TRANSLATE
