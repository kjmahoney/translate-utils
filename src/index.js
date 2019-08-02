import fetch from 'node-fetch'
import 'dotenv/config'

const getWord = async (text, lang) => {
    const key = process.env.API_KEY
    console.log(key)
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`

    const word = await fetch(url);
    const json = await word.json();
    console.log(json)
}
getWord('hello', 'en-zh')