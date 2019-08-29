import { translate, getPinyin } from './src/translate';
import { translationIsCorrect } from './src/quiz';
import { toneIsCorrect } from './src/tone-quiz';

console.log(translate('hello'))

export { translate, getPinyin, translationIsCorrect, toneIsCorrect };
