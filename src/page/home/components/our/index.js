import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Container } from '../../../../components/layout';
import styles from './style.module.css';
import lottie from 'lottie-web';
import { lottieAnimations } from '../../../../assets/lottie'; // Adjust the path if necessary
export function Our() {
    const animationContainerPiechart = useRef(null);
    const animationContainerNetwork = useRef(null);
    const animationContainerMoney = useRef(null);
    useEffect(() => {
        if (animationContainerPiechart.current) {
            lottie.loadAnimation({
                container: animationContainerPiechart.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieAnimations.piechart,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
        }
        if (animationContainerNetwork.current) {
            lottie.loadAnimation({
                container: animationContainerNetwork.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieAnimations.network,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
        }
        if (animationContainerMoney.current) {
            lottie.loadAnimation({
                container: animationContainerMoney.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: lottieAnimations.money,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            });
        }
        return () => {
            if (animationContainerPiechart.current) {
                lottie.destroy();
            }
            if (animationContainerNetwork.current) {
                lottie.destroy();
            }
            if (animationContainerMoney.current) {
                lottie.destroy();
            }
        };
    }, []);
    const data = [
        {
            id: 1,
            animationContainer: animationContainerPiechart,
            name: 'Monetize Your Bandwidth',
            desc: 'Earn money by sharing your unused internet bandwidth.'
        },
        {
            id: 2,
            animationContainer: animationContainerNetwork,
            name: 'Proxy P2P Residential',
            desc: 'Our P2P proxy service enables you to monetize your connection effortlessly.'
        },
        {
            id: 3,
            animationContainer: animationContainerMoney,
            name: 'Secure and Private',
            desc: 'All data passing through our P2P proxies is encrypted, ensuring that your personal information remains protected.'
        }
    ];
    return (_jsx("section", { className: styles.our, children: _jsxs(Container, { maxWidth: 'lg', children: [_jsx("h2", { children: "Our Features & Services" }), _jsx("p", { className: styles.our__desc, children: "We bring you an innovative Peer-to-Peer (P2P) proxy service that not only enhances your internet browsing experience" }), _jsx("div", { className: styles.our__list, children: data.map((item) => (_jsxs("div", { className: styles.our__item, children: [_jsx("div", { className: styles.our__img, style: { width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200", viewBox: "0 0 120 120", fill: "none", children: [_jsxs("g", { transform: "translate(15, 10)", children: [_jsx("path", { d: "M38.8127 2.59436C42.5884 0.353355 47.2866 0.353359 51.0623 2.59436L67.0254 12.0689L83.2122 21.1561C87.0408 23.3055 89.3899 27.3742 89.337 31.7645L89.1133 50.3263L89.337 68.888C89.3899 73.2784 87.0408 77.3471 83.2122 79.4965L67.0254 88.5836L51.0623 98.0582C47.2866 100.299 42.5884 100.299 38.8127 98.0582L22.8496 88.5836L6.66282 79.4965C2.8342 77.3471 0.485126 73.2784 0.538034 68.888L0.761719 50.3263L0.538034 31.7645C0.485126 27.3742 2.83421 23.3055 6.66283 21.1561L22.8496 12.0689L38.8127 2.59436Z", fill: "#F9F9F9" }), _jsx("g", { transform: "scale(0.7333) translate(17, 20)", children: _jsx("path", { d: "M38.8127 2.59436C42.5884 0.353355 47.2866 0.353359 51.0623 2.59436L67.0254 12.0689L83.2122 21.1561C87.0408 23.3055 89.3899 27.3742 89.337 31.7645L89.1133 50.3263L89.337 68.888C89.3899 73.2784 87.0408 77.3471 83.2122 79.4965L67.0254 88.5836L51.0623 98.0582C47.2866 100.299 42.5884 100.299 38.8127 98.0582L22.8496 88.5836L6.66282 79.4965C2.8342 77.3471 0.485126 73.2784 0.538034 68.888L0.761719 50.3263L0.538034 31.7645C0.485126 27.3742 2.83421 23.3055 6.66283 21.1561L22.8496 12.0689L38.8127 2.59436Z", fill: "white" }) })] }), _jsx("svg", { x: "29", y: "32", width: "60", height: "60", viewBox: "0 0 60 60", fill: "none", children: _jsx("foreignObject", { x: "0", y: "0", width: "60", height: "60", children: _jsx("div", { ref: item.animationContainer, style: { width: '100%', height: '100%' } }) }) })] }) }), _jsxs("div", { className: styles.our__content, children: [_jsx("p", { className: styles.our__name, children: item.name }), _jsx("p", { className: styles.our__item_desc, children: item.desc })] })] }, item.id))) })] }) }));
}
