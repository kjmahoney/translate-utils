import fetch from 'node-fetch';
import 'dotenv/config';
import pinyin from 'pinyin';
import isChinese from 'is-chinese';

const key = process.env.API_KEY;

const getPinyin = text => {
    const pinyinArray = pinyin(text);
    let newPinyinArray = [];
    pinyinArray.forEach(text => {
        newPinyinArray.push(text[0]);
    });
    return newPinyinArray.join('');
};

const translate = async word => {
    const lang = isChinese(word) ? 'zh-en' : 'en-zh';
    const text = isChinese(word) ? encodeURI(word) : word;

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`;
    const response = await fetch(url);
    const json = await response.json();
    const translation = json.text[0].toLowerCase();

    const pinyin = isChinese(word) ? getPinyin(word) : getPinyin(translation);

    const translateObject = {
        translation,
        pinyin,
    };
    return translateObject;
};
export { translate, getPinyin };
