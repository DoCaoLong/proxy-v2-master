import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { imgs } from '../../../../assets/imgs';
import { Container } from '../../../../components/layout';
import { Button } from '../../../../components/UI';
import styles from './style.module.css';
export function Download(props) {
    const { title = 'download.downloadApp' } = props;
    const { t } = useTranslation();
    return (_jsx("section", { className: styles.download, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: t(title) }), _jsxs("div", { className: styles.download__wrap, children: [_jsxs("div", { className: classNames(styles.download__card), children: [_jsx("img", { src: imgs.macos, alt: 'macos' }), _jsxs("div", { children: [_jsx("p", { className: styles.download__text, children: t('download.macOS') }), _jsx("p", { className: styles.download__desc, children: t('download.macOSDesc') })] }), _jsx(Button, { height: 60, width: '100%', variant: 'outlined', children: t('download.downloadNow') })] }), _jsxs("div", { className: styles.download__card, children: [_jsx("img", { src: imgs.windown, alt: 'windows' }), _jsxs("div", { children: [_jsx("p", { className: styles.download__text, children: t('download.windowOS') }), _jsx("p", { className: styles.download__desc, children: t('download.windowOSDesc') })] }), _jsx(Button, { height: 60, width: '100%', variant: 'outlined', children: t('download.downloadNow') })] })] })] }) }));
}
