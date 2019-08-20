import { translate } from './translate';

const translationIsCorrect = async (prompt, input) => {
    const { translation } = await translate(prompt);
    return input === translation;
};

export { translationIsCorrect };
