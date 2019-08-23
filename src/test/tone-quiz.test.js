import { toneIsCorrect } from '../tone-quiz';
import {expect} from 'chai';

describe('tone quiz', () => {
    it('should return true if use guess correct tone', () => {
        const prompt = '狗';
        const userInput = 3
        expect(toneIsCorrect(userInput, prompt)).to.equal(true)
    })

    it('should return false if user guesses incorrect tone', () => {
        const prompt = '狗';
        const userInput = 2
        expect(toneIsCorrect(userInput, prompt)).to.equal(false)
    })

    it('should be able to evaluate multiple characters', () => {
        const prompt = '我喜欢吃热狗';
        const userInput = [3,3,1,1,4,3]
        expect(toneIsCorrect(userInput, prompt)).to.equal(true)
    })
});
