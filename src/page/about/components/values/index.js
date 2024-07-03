import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import { svgs } from '../../../../assets/svg';
export function Value() {
    return (_jsx("section", { className: styles.values, children: _jsx(Container, { maxWidth: 'md', children: _jsxs("div", { className: styles.item, children: [_jsx("div", { className: styles.item__img, children: _jsx("img", { src: svgs.aboutOur, alt: svgs.aboutOur }) }), _jsxs("div", { className: styles.item__content, children: [_jsx("h3", { children: "Our Values" }), _jsx("p", { children: "As a leading company in the proxy and web intelligence industry, we ensure that the highest business ethics standards lead all our operations. Our core values guide us toward achieving our mission." })] })] }) }) }));
}
