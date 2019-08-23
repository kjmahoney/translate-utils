import { mapTone } from './utils/mapTone';

export const toneIsCorrect = (input, character) => {
    const correctTone = mapTone(character);
    const answer = Array.isArray(input) ? parseInt(input.join('')) : input;
    return answer === correctTone;
};
