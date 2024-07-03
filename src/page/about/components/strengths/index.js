import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './style.module.css';
import { Container } from '../../../../components/layout';
import { svgs } from '../../../../assets/svg';
export function Strengths() {
    const data = [
        {
            id: 1,
            name: 'We Specialize in IP Networking',
            img: svgs.aboutHome,
            desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
        },
        {
            id: 2,
            name: 'Trust 922S5 For Fast,Reliable IP Proxy Servic',
            img: svgs.aboutStart,
            desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
        },
        {
            id: 3,
            name: 'We Offer More than Just IP Proxy',
            img: svgs.aboutPen,
            desc: 'Check out 922S5 for all your IP address needs! 922proxy.com is the go-to global proxy provider, famous for their privacy know-how and a whopping 200 million residential IP addresses across 190+ countries.'
        }
    ];
    return (_jsx("section", { className: styles.strengths, children: _jsx(Container, { maxWidth: 'md', children: _jsxs("div", { className: styles.container, children: [_jsx("h3", { className: styles.title, children: "Our Strengths" }), _jsx("div", { className: styles.list, children: data?.map((item, index) => (_jsxs("div", { className: styles.item, children: [_jsx("div", { className: styles.item__img, children: _jsx("img", { src: item?.img, alt: item?.img }) }), _jsxs("div", { className: styles.item__content, children: [_jsx("h3", { children: item?.name }), _jsx("h6", { children: item?.desc })] })] }, index))) })] }) }) }));
}
