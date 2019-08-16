import { englishIsCorrect } from '../quiz';
import {expect} from 'chai';

describe('quiz', ()=> {
    it('english is correct should return true if input is correct', async () => {
        const prompt ='狗'
        const userInput = 'dog'
        const result = await englishIsCorrect(prompt, userInput);
        console.log('here' + result)
        expect(result).to.equal(true)
    })
})