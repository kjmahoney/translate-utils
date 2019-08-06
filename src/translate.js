import fetch from 'node-fetch';
import 'dotenv/config';
import pinyin from 'pinyin';

const key = process.env.API_KEY;

const getPinyin = text => {
    const pinyinArray = pinyin(text);
    let newPinyinArray = [];
    pinyinArray.forEach(text => {
        newPinyinArray.push(text[0]);
    });
    return newPinyinArray.join('');
};

const englishToChinese = async text => {
    const lang = 'en-zh';
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`;

    const word = await fetch(url);
    const json = await word.json();
    const translation = json.text[0];

    const translateObject = {
        translation: translation,
        pinyin: getPinyin(translation),
    };
    return translateObject;
};

const chineseToEnglish = async hanzi => {
    const lang = 'zh-en';
    const text = encodeURI(hanzi);
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`;
    const word = await fetch(url);
    const json = await word.json();
    const translation = json.text[0];

    const translateObject = {
        translation: translation,
        pinyin: getPinyin(hanzi),
    };
    return translateObject;
};

export { englishToChinese, chineseToEnglish, getPinyin };
