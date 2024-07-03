import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import lottie from 'lottie-web';
import { imgs } from '../../../../assets/imgs';
import { svgs } from '../../../../assets/svg';
import { Container } from '../../../../components/layout';
import styles from './style.module.css';
import lottieAnimation from '../../../../assets/lottie/test.json';
export function Proxy() {
    const { t } = useTranslation();
    const animationContainer = useRef(null);
    useEffect(() => {
        if (animationContainer.current) {
            lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieAnimation,
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
    const data = [
        {
            id: 1,
            img: svgs.dataColection,
            text: t('proxy.dataCollection')
        },
        {
            id: 6,
            img: svgs.brand,
            text: t('proxy.brandProtection')
        },
        {
            id: 11,
            img: svgs.etsy,
            text: t('proxy.etsy')
        },
        {
            id: 2,
            img: svgs.marketing,
            text: t('proxy.marketingResearch')
        },
        {
            id: 7,
            img: svgs.seo,
            text: t('proxy.seoOptimization')
        },
        {
            id: 12,
            img: imgs.youtube,
            text: t('proxy.youtube')
        },
        {
            id: 3,
            img: svgs.pricing,
            text: t('proxy.pricingMonitoring')
        },
        {
            id: 8,
            img: svgs.socialMedia,
            text: t('proxy.socialMedia')
        },
        {
            id: 13,
            img: imgs.reddit,
            text: t('proxy.reddit')
        },
        {
            id: 4,
            img: svgs.veri,
            text: t('proxy.verification')
        },
        {
            id: 9,
            img: svgs.instagram,
            text: t('proxy.instagram')
        },
        {
            id: 14,
            img: imgs.gg,
            text: t('proxy.google')
        },
        {
            id: 5,
            img: svgs.snap,
            text: t('proxy.snapUpMerchandise')
        },
        {
            id: 10,
            img: imgs.amazon,
            text: t('proxy.amazon')
        },
        {
            id: 15,
            img: imgs.tiktok,
            text: t('proxy.tiktok')
        }
    ];
    return (_jsx("section", { className: styles.proxy, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: t('proxy.title') }), _jsx("p", { className: styles.proxy__desc, children: t('proxy.description') }), _jsxs("div", { className: styles.proxy__wrap, children: [_jsx("div", { className: styles.proxy__img, children: _jsx("div", { ref: animationContainer, style: { width: '480px', height: '480px' } }) }), _jsx("div", { className: styles.proxy__img, children: _jsx("img", { src: imgs.usercaseDeco, alt: '' }) }), _jsx("div", { className: styles.proxy__list, children: data.map((item) => (_jsxs("div", { className: styles.proxy__item, children: [_jsx("img", { src: item.img, alt: item.text }), _jsx("p", { children: item.text })] }, item.id))) })] })] }) }));
}
