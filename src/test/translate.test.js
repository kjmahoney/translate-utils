import { translate } from '../translate';
import {expect} from 'chai';

describe('translate', () => {
    it('should translate English words correctly', async () => {
        const { translation } = await translate('dog');
        const expected = '狗';
        expect(translation).to.equal(expected);
    });

    it('should translate Chinese words correctly', async () => {
        const { translation } = await translate('狗');
        const expected = 'dog';
        expect(translation).to.equal(expected);
    });

    it('should return the correct pinyin for English translations', async () => {
        const { pinyin } = await translate('dog');
        const expected = 'gǒu';
        expect(pinyin).to.equal(expected);
    });

    it('should return the correct pinyin for Chinese translations', async () => {
        const { pinyin } = await translate('狗');
        const expected = 'gǒu';
        expect(pinyin).to.equal(expected);
    });
});
