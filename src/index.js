import fetch from 'node-fetch'
import 'dotenv/config'
import pinyin from 'pinyin'

const key = process.env.API_KEY

const getWord = async (text, lang) => {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`

    const word = await fetch(url)
    const json = await word.json()
}

const englishToChinese = async text => {
    const lang = 'en-zh'
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`

    const word = await fetch(url)
    const json = await word.json()
    const chineseWord = json.text[0]
    const pinyinArray = pinyin(chineseWord)

    let newPinyinArray = []
    pinyinArray.forEach(word => {
        newPinyinArray.push(word[0])
    })

    const pinyinString = newPinyinArray.join('')

    const translateObject = {
        english: text,
        chinese: chineseWord,
        pinyin: pinyinString,
    }
    return translateObject
}

englishToChinese('hello')
