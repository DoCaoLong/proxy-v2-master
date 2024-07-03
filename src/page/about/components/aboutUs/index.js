import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { svgs } from '../../../../assets/svg';
export function AboutUs() {
    return (_jsx("section", { className: styles.about, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.aboutUs__content, children: [_jsx("h2", { className: styles.aboutUs__text, children: "About Us" }), _jsx("p", { children: "922S5 is dedicated to providing customers a full range of IP address solutions." }), _jsx("p", { children: "922proxy.com is the most trusted proxy provider in the world, and the reason is simple. We are privacy experts with more than 200 million residential IP addresses from around the world in 190+ countries and a proven track record of putting privacy first." })] }), _jsx("div", { className: styles.aboutUs__img, children: _jsx("img", { src: svgs.aboutUs, alt: '' }) })] }) }));
}
