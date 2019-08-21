import pinyin from 'pinyin';
import {mapTone} from './utils/mapTone'
export const toneIsCorrect = (number, character) => {
    const correctTone = mapTone(character);
}
