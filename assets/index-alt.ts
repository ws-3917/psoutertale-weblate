import { translator } from '../../code/systems/translator';
import sources from './sources-alt';
import aerialis from './text-alt/aerialis';
import citadel from './text-alt/citadel';
import common from './text-alt/common';
import foundry from './text-alt/foundry';
import outlands from './text-alt/outlands';
import starton from './text-alt/starton';
import systems from './text-alt/systems';
import values, { LANGUAGE } from './text-alt/values';

translator.content.addLanguage(LANGUAGE, sources);
translator.langs.push(LANGUAGE);
translator.registry.of('aerialis').addLanguage(LANGUAGE, aerialis);
translator.registry.of('citadel').addLanguage(LANGUAGE, citadel);
translator.registry.of('common').addLanguage(LANGUAGE, common);
translator.registry.of('foundry').addLanguage(LANGUAGE, foundry);
translator.registry.of('outlands').addLanguage(LANGUAGE, outlands);
translator.registry.of('starton').addLanguage(LANGUAGE, starton);
translator.registry.of('systems').addLanguage(LANGUAGE, systems);
translator.values.addLanguage(LANGUAGE, values);