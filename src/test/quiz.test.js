import { translationIsCorrect } from '../quiz';
import {expect} from 'chai';

describe('quiz', ()=> {
    it('should return true if user puts in correct English translation', async () => {
        const prompt ='狗'
        const userInput = 'dog'
        const result = await translationIsCorrect(prompt, userInput);
        expect(result).to.equal(true)
    })

    it('should return false if user puts in incorrect English translation', async () => {
        const prompt ='狗'
        const userInput = 'cat'
        const result = await translationIsCorrect(prompt, userInput);
        expect(result).to.equal(false)
    })

    it('should return true if user puts in correct Chinese translation', async () => {
        const prompt ='dog'
        const userInput = '狗'
        const result = await translationIsCorrect(prompt, userInput);
        expect(result).to.equal(true)
    })

    it('should return false if user puts in incorrect Chinese translation', async () => {
        const prompt ='dog'
        const userInput = '猫'
        const result = await translationIsCorrect(prompt, userInput);
        expect(result).to.equal(false)
    })
})