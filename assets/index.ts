import { translator } from '../../code/systems/translator';
import sources from './sources';
import aerialis from './text/aerialis';
import citadel from './text/citadel';
import common from './text/common';
import foundry from './text/foundry';
import outlands from './text/outlands';
import starton from './text/starton';
import systems from './text/systems';
import values, { LANGUAGE } from './text/values';

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