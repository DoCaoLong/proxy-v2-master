import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { svgs } from '../../../../assets/svg';
import { Container } from '../../../../components/layout';
import { Button } from '../../../../components/UI';
import styles from './style.module.css';
export function Contact() {
    const { t } = useTranslation();
    return (_jsx("section", { className: styles.contact, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: t('contact.contactUs') }), _jsx("p", { className: styles.contact__title, children: t('contact.contactTitle') }), _jsxs("div", { className: styles.contact__warp, children: [_jsxs("div", { className: styles.contact__left, children: [_jsxs("div", { className: styles.contact__left__head, children: [_jsxs("div", { children: [_jsx("p", { className: styles.contact__text, children: t('contact.gotQuestion') }), _jsxs("p", { className: styles.contact__desc, children: [t('contact.weAreHereToHelp'), " ", _jsx("a", { href: '#', children: "contact@proxy.com" })] })] }), _jsxs("div", { children: [_jsx("p", { className: styles.contact__text, children: t('contact.greaterCooperation') }), _jsxs("p", { className: styles.contact__desc, children: [t('contact.contactSalesTeam'), " ", _jsx("a", { href: '#', children: "sales@proxy.com" })] })] })] }), _jsx("div", { className: styles.contact__left__bottom, children: _jsxs("div", { className: styles.contact__left__bottom__list, children: [_jsxs("div", { className: styles.contact__left__bottom__item, children: [_jsx("img", { src: svgs.mail, alt: '' }), _jsx("p", { children: "info@proxies.com" })] }), _jsxs("div", { className: styles.contact__left__bottom__item, children: [_jsx("img", { src: svgs.phone, alt: '' }), _jsx("p", { children: "+84 000 000" })] }), _jsxs("div", { className: styles.contact__left__bottom__item, children: [_jsx("img", { src: svgs.home, alt: '' }), _jsx("p", { children: "123 Some St, City SMTH 11000 US" })] })] }) })] }), _jsx("div", { className: styles.contact__right, children: _jsxs("form", { className: styles.contact__form, action: '#', children: [_jsx("input", { placeholder: t('contact.name'), type: 'text' }), _jsx("input", { placeholder: t('contact.email'), type: 'text' }), _jsx("textarea", { placeholder: t('contact.leaveYourMessage'), name: '', id: '' }), _jsxs("div", { className: styles.checkbox, children: [_jsx("input", { checked: true, type: 'checkbox', readOnly: true }), _jsx("p", { children: t('contact.acceptPrivatePolicy') })] }), _jsx(Button, { height: 60, width: '100%', variant: 'contained', children: t('contact.sendNow') })] }) })] })] }) }));
}