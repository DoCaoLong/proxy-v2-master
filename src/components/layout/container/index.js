import { jsx as _jsx } from "react/jsx-runtime";
import styles from './style.module.css';
export const Container = ({ maxWidth = 'fluid', children }) => {
    const containerClass = maxWidth ? styles[maxWidth] : styles.fluid;
    return _jsx("div", { className: `${styles.container} ${containerClass}`, children: children });
};
