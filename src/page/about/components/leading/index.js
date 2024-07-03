import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import { svgs } from '../../../../assets/svg';
export function Leading() {
    return (_jsx("section", { className: styles.values, children: _jsx(Container, { maxWidth: 'md', children: _jsxs("div", { className: styles.item, children: [_jsx("div", { className: styles.item__img, children: _jsx("img", { src: svgs.aboutDrawn, alt: svgs.aboutDrawn }) }), _jsxs("div", { className: styles.item__content, children: [_jsx("h3", { children: "Leading the global web intelligence market" }), _jsx("p", { children: "922S5 continues growing and bringing innovation to the web intelligence collection industry." })] })] }) }) }));
}
