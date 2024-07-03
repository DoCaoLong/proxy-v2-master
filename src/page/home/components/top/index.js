import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { svgs } from '../../../../assets/svg';
import { Container } from '../../../../components/layout';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';
export function Top() {
    const { t } = useTranslation();
    const data = [
        {
            id: 1,
            img: svgs.us,
            name: t('top.unitedStates'),
            total: '341,785 IPs'
        },
        {
            id: 2,
            img: svgs.uk,
            name: t('top.unitedKingdom'),
            total: '293,744 IPs'
        },
        {
            id: 3,
            img: svgs.china,
            name: t('top.china'),
            total: '189,982 IPs'
        },
        {
            id: 4,
            img: svgs.germany,
            name: t('top.germany'),
            total: '89,782 IPs'
        },
        {
            id: 5,
            img: svgs.canada,
            name: t('top.canada'),
            total: '67,882 IPs'
        },
        {
            id: 6,
            img: svgs.france,
            name: t('top.france'),
            total: '64,934 IPs'
        }
    ];
    return (_jsx("section", { className: styles.top, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: t('top.title') }), _jsx("div", { className: styles.top__list, children: data.map((item) => (_jsxs("div", { className: styles.top__item, children: [_jsx("div", { className: styles.top__img, children: _jsx("img", { src: item.img, alt: item.name }) }), _jsx("p", { className: styles.top__name, children: item.name }), _jsx("p", { className: styles.top__total, children: item.total })] }, item.id))) })] }) }));
}
