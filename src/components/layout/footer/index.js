import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../container';
import { svgs } from '../../../assets/svg';
import { imgs } from '../../../assets/imgs';
export default function Footer() {
    return (_jsx("section", { className: styles.footer, children: _jsx(Container, { maxWidth: 'lg', children: _jsxs("div", { className: styles.footer__wrap, children: [_jsxs("div", { className: styles.footer__left, children: [_jsx("div", { className: styles.footer__logo, children: _jsx("img", { src: imgs.logo, alt: '' }) }), _jsx("a", { href: '#', className: styles.footer__mail, children: "info@proxies.com" }), _jsxs("div", { className: styles.footer__socials, children: [_jsx("div", { className: styles.footer__social, children: _jsx("img", { src: svgs.mess, alt: '' }) }), _jsx("div", { className: styles.footer__social, children: _jsx("img", { src: svgs.instagramColor, alt: '' }) }), _jsx("div", { className: styles.footer__social, children: _jsx("img", { src: svgs.wha, alt: '' }) }), _jsx("div", { className: styles.footer__social, children: _jsx("img", { src: svgs.face, alt: '' }) })] })] }), _jsxs("div", { className: styles.footer__right, children: [_jsxs("ul", { className: styles.footer__category, children: [_jsx("li", { children: "Service and Terms" }), _jsx("li", { children: "About us" }), _jsx("li", { children: "Contact" }), _jsx("li", { children: "Privacy Policy" }), _jsx("li", { children: "Cookie Policy" }), _jsx("li", { children: "Terms of Service" }), _jsx("li", { children: "Delivery Agreement" }), _jsx("li", { children: "Refund Policy " })] }), _jsxs("ul", { className: styles.footer__category, children: [_jsx("li", { children: "Proxies" }), _jsx("li", { children: "Static Residential Proxies" }), _jsx("li", { children: "Rotate Residential Proxies" })] }), _jsxs("ul", { className: styles.footer__category, children: [_jsx("li", { children: "Affiliate" }), _jsx("li", { children: "Reseller Program" }), _jsx("li", { children: "Link Program" })] }), _jsxs("ul", { className: styles.footer__category, children: [_jsx("li", { children: "Help Center" }), _jsx("li", { children: "FAQ" }), _jsx("li", { children: "User Guide" }), _jsx("li", { children: "Tutorial Video" }), _jsx("li", { children: "Sitemap" })] }), _jsxs("ul", { className: styles.footer__category, children: [_jsx("li", { children: "Case Study" }), _jsx("li", { children: "Crawl Data" }), _jsx("li", { children: "SEO Traffic" }), _jsx("li", { children: "Optimize Web Scraping" }), _jsx("li", { children: "Automate Tasks That Require IP Rotation" }), _jsx("li", { children: "Bypass Web Block" }), _jsx("li", { children: "Bypass Network Traffic" })] })] })] }) }) }));
}
