import { mapTone } from '../../utils/mapTone';
import {expect} from 'chai';
describe('map tone', () => {
    it('should return the correct tone', () => {
        const character = ('狗');
        expect(mapTone(character).to.equal(3));
    })
})

