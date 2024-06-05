import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json'
import tw from './tw.json'
import kr from './kr.json'

const resources = {
    en: {
        translation: en,
    },
    tw: {
        translation: tw,
    },
    kr: {
        translation: kr,
    },
};

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: "tw",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;