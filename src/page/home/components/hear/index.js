import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import lottie from 'lottie-web';
import { lottieAnimations } from '../../../../assets/lottie';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
export function Hear() {
    const { t } = useTranslation();
    const animationContainer = useRef(null);
    useEffect(() => {
        if (animationContainer.current) {
            lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieAnimations.chat,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
        }
        return () => {
            if (animationContainer.current) {
                lottie.destroy();
            }
        };
    }, []);
    return (_jsx("section", { className: styles.hear, children: _jsx(Container, { maxWidth: 'lg', children: _jsxs("div", { className: styles.hear__wrap, children: [_jsxs("div", { className: styles.hear__left, children: [_jsx("h2", { className: styles.hear__title, children: t('hear.hearAboutUs') }), _jsx("p", { className: styles.hear__text, children: t('hear.ethicallySourced') }), _jsx("p", { className: styles.hear__desc, children: t('hear.largeProxyPool') })] }), _jsx("div", { className: styles.hear__right, children: _jsx("div", { ref: animationContainer, style: { width: '255px', height: '264px' } }) })] }) }) }));
}
