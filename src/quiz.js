import { chineseToEnglish } from './translate';

const englishIsCorrect = async (prompt, input) => {
    const expected = await chineseToEnglish(prompt);
    return input === expected;
};

export { englishIsCorrect };
