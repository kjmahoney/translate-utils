import { mapTone } from '../utils/mapTone';
import { expect } from 'chai';

describe('map tone', () => {
    it('should return an array that correctly maps tones', () => {
        const character = '热狗';
        const expected = 43;      
        expect(mapTone(character)).to.equal(expected);
    });
});
