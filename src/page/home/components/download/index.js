import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import { Button } from '../../../../components/UI';
import { imgs } from '../../../../assets/imgs';
import classNames from 'classnames';
export function Download() {
    return (_jsx("section", { className: styles.download, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: "Download Proxy app" }), _jsxs("div", { className: styles.download__wrap, children: [_jsxs("div", { className: classNames(styles.download__card), children: [_jsx("img", { src: imgs.macos, alt: 'macos' }), _jsxs("div", { children: [_jsx("p", { className: styles.download__text, children: "MacOS" }), _jsx("p", { className: styles.download__desc, children: "MacOS Operating system 10.1 or higher" })] }), _jsx(Button, { width: '100%', variant: 'outlined', children: "Download Now" })] }), _jsxs("div", { className: styles.download__card, children: [_jsx("img", { src: imgs.windown, alt: 'macos' }), _jsxs("div", { children: [_jsx("p", { className: styles.download__text, children: "WindowOS" }), _jsx("p", { className: styles.download__desc, children: "WindowOS Operating system 12.1 or higher" })] }), _jsx(Button, { width: '100%', variant: 'outlined', children: "Download Now" })] })] })] }) }));
}
