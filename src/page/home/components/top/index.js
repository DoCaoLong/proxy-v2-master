import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { svgs } from '../../../../assets/svg';
import { Container } from '../../../../components/layout';
import styles from './style.module.css';
export function Top() {
    const data = [
        {
            id: 1,
            img: svgs.us,
            name: 'United States',
            total: '341,785 IPs'
        },
        {
            id: 2,
            img: svgs.uk,
            name: 'United Kingdom',
            total: '293,744 IPs'
        },
        {
            id: 3,
            img: svgs.china,
            name: 'China',
            total: '189,982 IPs'
        },
        {
            id: 4,
            img: svgs.germany,
            name: 'Germany',
            total: '89,782 IPs'
        },
        {
            id: 5,
            img: svgs.canada,
            name: 'Canada',
            total: '67,882 IPs'
        },
        {
            id: 6,
            img: svgs.france,
            name: 'France',
            total: '64,934 IPs'
        }
    ];
    return (_jsx("section", { className: styles.top, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: "Top Location" }), _jsx("div", { className: styles.top__list, children: data.map((item, index) => (_jsxs("div", { className: styles.top__item, children: [_jsx("div", { className: styles.top__img, children: _jsx("img", { src: item?.img, alt: 'us' }) }), _jsx("p", { className: styles.top__name, children: item?.name }), _jsx("p", { className: styles.top__total, children: item?.total })] }, index))) })] }) }));
}
