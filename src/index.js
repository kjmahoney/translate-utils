require('babel-polyfill')

import { translate, getPinyin } from './translate';
import { translationIsCorrect } from './quiz';
import { toneIsCorrect } from './tone-quiz';

export { translate, getPinyin, translationIsCorrect, toneIsCorrect };
