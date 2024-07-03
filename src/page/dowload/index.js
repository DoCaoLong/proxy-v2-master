import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Download } from '../home/components';
import { Ask } from './components';
import styles from './style.module.css';
export default function DownloadPage() {
    return (_jsxs("section", { className: styles.downloadPages, children: [_jsx(Download, { title: 'Support multiple versions of Windows, Mac OS' }), _jsx(Ask, {})] }));
}
