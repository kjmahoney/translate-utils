import { chineseToEnglish } from './translate';

const englishIsCorrect = async (prompt, input) => {
    const { translation } = await chineseToEnglish(prompt);
    return input === translation.toLowerCase();
};

export { englishIsCorrect };
