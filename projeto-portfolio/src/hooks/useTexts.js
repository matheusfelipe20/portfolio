import { useLanguage } from '../contexts/languageContext.js';
import i18nTexts from '../translations/i18nTexts.js';

const useTexts = () => {
    const { language } = useLanguage();
    return i18nTexts[language];
};

export default useTexts;