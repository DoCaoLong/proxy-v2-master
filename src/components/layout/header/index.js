import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Container } from '../container';
import styles from './style.module.css';
import { Button } from '../../UI';
import classNames from 'classnames';
import { imgs } from '../../../assets/imgs';
import { LanguageSwitcher } from '../languageSwitcher';
import { useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
export function Header() {
    const headerRef = useRef(null);
    const [width, setWidth] = useState('1200px');
    const IS_MB = useMediaQuery('(max-width:767px)');
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 100;
            const newWidth = Math.max(1070, 1200 - (100 * scrollY) / maxScroll);
            setWidth(`${newWidth}px`);
            if (headerRef.current) {
                if (scrollY > 100) {
                    headerRef.current.classList.add(styles.active);
                }
                else {
                    headerRef.current.classList.remove(styles.active);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleActiveHambuger = () => {
        document.body.classList.toggle(styles.body_active);
    };
    const handleRemoveHambuger = () => {
        document.body.classList.remove(styles.body_active);
    };
    return (_jsx("header", { ref: headerRef, className: styles.header, style: {
            maxWidth: width,
            transition: 'max-width 0.3s ease-in-out'
        }, children: _jsx(Container, { maxWidth: 'lg', children: _jsxs("div", { className: styles.navbar, children: [_jsxs("div", { className: styles.navbarLeft, children: [_jsxs("div", { className: styles.navbarLeft__logo, children: [_jsxs("div", { onClick: handleActiveHambuger, className: styles.hamburger, id: styles.hamburger, children: [_jsx("span", { className: styles.line }), _jsx("span", { className: styles.line }), _jsx("span", { className: styles.line })] }), _jsx(Link, { to: '/', className: styles.navbarLogo, children: _jsx("img", { src: imgs.logo, alt: 'logo' }) })] }), _jsxs("ul", { className: styles.navbarMenu, children: [_jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '#', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Pricing" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '#', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Proxies" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '#', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Case study" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '#', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Affiliate" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '/download' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '/download', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Download" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '/about' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '/about', className: classNames(styles.navbarMenuLink, styles.textSM), children: "About us" }) }), _jsx("li", { className: classNames(styles.navbarMenuItem, { [styles.active]: location.pathname === '#' }), children: _jsx(Link, { onClick: handleRemoveHambuger, to: '#', className: classNames(styles.navbarMenuLink, styles.textSM), children: "Contact" }) }), _jsx("li", { className: styles.navbarMenuItem, children: _jsx("div", { onClick: handleRemoveHambuger, className: classNames(styles.navbarMenuLink, styles.textSM), children: IS_MB && _jsx(LanguageSwitcher, {}) }) })] })] }), _jsxs("div", { className: styles.navbarMenuBtns, children: [!IS_MB && _jsx(LanguageSwitcher, {}), _jsx(Button, { variant: width === '1070px' ? 'contained' : 'outlined', children: "Login Dashboard" })] })] }) }) }));
}
