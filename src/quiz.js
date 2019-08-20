import isChinese from 'is-chinese';
import { chineseToEnglish, englishToChinese } from './translate';

const inputIsCorrect = async (prompt, input) => {
    const { translation } = isChinese(prompt)
        ? await chineseToEnglish(prompt)
        : await englishToChinese(prompt);
    return input === translation.toLowerCase();
};

export { inputIsCorrect };
