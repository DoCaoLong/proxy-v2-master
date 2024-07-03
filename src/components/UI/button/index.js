import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import styles from './style.module.css';
export function Button(props) {
    const { text, width, color = 'primary', variant = 'contained', disabled = false, loading = false, children } = props;
    return (_jsx("button", { className: classNames(styles.button, {
            [styles.contained]: variant === 'contained',
            [styles.outlined]: variant === 'outlined',
            [styles.text]: variant === 'text',
            [styles.primary]: color === 'primary',
            [styles.secondary]: color === 'secondary'
        }), style: width ? { width } : { width: 'max-content' }, disabled: loading === true || disabled === true, children: loading ? 'Loading...' : children || text }));
}
