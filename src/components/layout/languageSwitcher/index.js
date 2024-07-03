import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import styles from './style.module.css';
import { svgs } from '../../../assets/svg';
export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };
    return (_jsxs("div", { className: styles.languageSwitcher, children: [_jsx("input", { type: 'radio', id: 'en', name: 'language', value: 'en', onChange: () => changeLanguage('en'), checked: i18n.language === 'en', className: styles.languageInput }), _jsx("label", { htmlFor: 'en', className: styles.flag, children: _jsx("img", { src: svgs.uk, alt: 'English' }) }), _jsx("input", { type: 'radio', id: 'vi', name: 'language', value: 'vi', onChange: () => changeLanguage('vi'), checked: i18n.language === 'vi', className: styles.languageInput }), _jsx("label", { htmlFor: 'vi', className: styles.flag, children: _jsx("img", { src: svgs.china, alt: 'Ti\u1EBFng Vi\u1EC7t' }) })] }));
};
