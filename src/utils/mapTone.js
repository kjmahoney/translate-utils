import pinyin from 'pinyin'

const toneMapper = {
    1: ['ā', 'ē', 'ī', 'ō', 'ū'],
    2: ['á', 'é', 'í', 'ó', 'ú'],
    3: ['ǎ', 'ě', "ǐ", 'ǒ', 'ǔ', 'ǚ'],
    4: ['à', 'è', 'ì', 'ò', 'ù', 'ǜ'],
};

export const mapTone = (hanzi) => {
    const test = pinyin(hanzi)[0][0];
    console.log(test)
    console.log(toneMapper["1"].includes('ā'));
};

