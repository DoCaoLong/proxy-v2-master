import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import lottie from 'lottie-web';
import { lottieAnimations } from '../../../../assets/lottie';
import { useEffect, useRef } from 'react';
export function Hear() {
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
    return (_jsx("section", { className: styles.hear, children: _jsx(Container, { maxWidth: 'lg', children: _jsxs("div", { className: styles.hear__wrap, children: [_jsxs("div", { className: styles.hear__left, children: [_jsx("h2", { className: styles.hear__title, children: "Hear About us " }), _jsx("p", { className: styles.hear__text, children: "100M+ ethically sourced Residential Proxy pool" }), _jsx("p", { className: styles.hear__desc, children: "A large proxy pool means you receive access to Residential IP addresses from all over the world, so you can easily overcome geo-location blocks." })] }), _jsx("div", { className: styles.hear__right, children: _jsx("div", { ref: animationContainer, style: { width: '255px', height: '264px' } }) })] }) }) }));
}
