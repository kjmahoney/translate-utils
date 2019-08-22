import pinyin from 'pinyin';

const toneMapper = {
    1: ['ā', 'ē', 'ī', 'ō', 'ū'],
    2: ['á', 'é', 'í', 'ó', 'ú'],
    3: ['ǎ', 'ě', 'ǐ', 'ǒ', 'ǔ', 'ǚ'],
    4: ['à', 'è', 'ì', 'ò', 'ù', 'ǜ'],
};

export const mapTone = hanzi => {
    const toneMap = [];
    const pinyinArray = pinyin(hanzi);
    pinyinArray.forEach(array => {
        const singleWord = array[0];
        const letterArray = singleWord.split('');

        letterArray.forEach(letter => {
            Object.entries(toneMapper).forEach(array => {
                if (array[1].includes(letter)) {
                    toneMap.push(array[0]);
                }
            });
        });
    });
    return parseInt(toneMap.join(""));
};
