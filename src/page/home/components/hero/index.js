import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { svgs } from '../../../../assets/svg';
import HeroCircle from '../../../../assets/svg/heroCircle';
import { Container } from '../../../../components/layout';
import { Button } from '../../../../components/UI';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import { lottieAnimations } from '../../../../assets/lottie';
export function Hero() {
    const [exchangeImage, setExchangeImage] = useState(null);
    const [protectionImage, setProtectionImage] = useState(null);
    const [energyImage, setEnergyImage] = useState(null);
    const loadLottieFirstFrame = (animationData, width, height) => {
        return new Promise((resolve) => {
            const container = document.createElement('div');
            container.style.width = `${width}px`;
            container.style.height = `${height}px`;
            container.style.position = 'absolute';
            container.style.top = '-9999px'; // Hide the container
            document.body.appendChild(container);
            const animation = lottie.loadAnimation({
                container: container,
                renderer: 'canvas',
                loop: false,
                autoplay: false,
                animationData: animationData,
            });
            animation.addEventListener('DOMLoaded', () => {
                animation.goToAndStop(0, true);
                setTimeout(() => {
                    const canvas = container.querySelector('canvas');
                    if (canvas) {
                        const dataUrl = canvas.toDataURL();
                        document.body.removeChild(container);
                        resolve(dataUrl);
                    }
                }, 100);
            });
        });
    };
    useEffect(() => {
        const loadImages = async () => {
            const exchange = await loadLottieFirstFrame(lottieAnimations.exchange, 70, 70);
            setExchangeImage(exchange);
            const protection = await loadLottieFirstFrame(lottieAnimations.protection, 70, 70);
            setProtectionImage(protection);
            const energy = await loadLottieFirstFrame(lottieAnimations.energy, 70, 70);
            setEnergyImage(energy);
        };
        loadImages();
    }, []);
    return (_jsx("section", { className: styles.hero, children: _jsx(Container, { maxWidth: 'lg', children: _jsxs("div", { className: styles.hero__wrap, children: [_jsxs("div", { className: styles.hero__top, children: [_jsxs("h1", { className: styles.hero__title, children: [_jsx("span", { children: "Residential Proxies P2P " }), _jsx("br", {}), _jsx("span", { children: " Share internet and make money online" })] }), _jsx("h3", { className: styles.hero__desc, children: "We offer the world's leading proxy exchange platform with support for P2P connections. Share Your Internet and Make Money Online Easily." }), _jsx(Button, { width: 202, children: "Get Started" }), _jsxs("div", { className: styles.hero__logo__wrap, children: [_jsx("p", { children: "As seen on:" }), _jsxs("div", { className: styles.hero__logos, children: [_jsx("div", { className: styles.hero__logo, children: _jsx("img", { src: svgs.fcmagLogo, alt: '' }) }), _jsx("div", { className: styles.hero__logo, children: _jsx("img", { src: svgs.techradar, alt: '' }) }), _jsx("div", { className: styles.hero__logo, children: _jsx("img", { src: svgs.techAdvisor, alt: '' }) }), _jsx("div", { className: styles.hero__logo, children: _jsx("img", { src: svgs.hackerNoon, alt: '' }) })] })] })] }), _jsxs("div", { className: styles.hero__bottom, children: [_jsxs("div", { className: styles.hero__item, children: [_jsx("div", { className: styles.hero__item__img, children: exchangeImage && _jsx("img", { src: exchangeImage, alt: 'Exchange', style: { width: '70px', height: '70px' } }) }), _jsxs("div", { className: styles.hero__item__content, children: [_jsx("p", { className: styles.hero__item__name, children: "Proxy Transparent" }), _jsx("p", { className: styles.hero__item__desc, children: "Ensures privacy by not recording user activities. Optimize network traffic and improve user experience." })] })] }), _jsxs("div", { className: styles.hero__item, children: [_jsx("div", { className: styles.hero__item__img, children: protectionImage && _jsx("img", { src: protectionImage, alt: 'Protection', style: { width: '70px', height: '70px' } }) }), _jsxs("div", { className: styles.hero__item__content, children: [_jsx("p", { className: styles.hero__item__name, children: "No usage logs" }), _jsx("p", { className: styles.hero__item__desc, children: "Maximizes speed for an optimal browsing experience with lower ping times for faster response." })] })] }), _jsxs("div", { className: styles.hero__item, children: [_jsx("div", { className: styles.hero__item__img, children: energyImage && _jsx("img", { src: energyImage, alt: 'Energy', style: { width: '70px', height: '70px' } }) }), _jsxs("div", { className: styles.hero__item__content, children: [_jsx("p", { className: styles.hero__item__name, children: "High Speed" }), _jsx("p", { className: styles.hero__item__desc, children: "A Transparent Proxy is an ideal solution for those who want to enhance security and network management." })] })] })] }), _jsx("div", { className: styles.hero__deco, children: _jsx(HeroCircle, {}) })] }) }) }));
}
