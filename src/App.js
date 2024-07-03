import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { Header } from './components/layout';
import Footer from './components/layout/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/home';
import About from './page/about';
import NotFound from './page/notFound';
import Download from './page/dowload';
const App = () => {
    return (_jsx(_Fragment, { children: _jsxs(Router, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/about', element: _jsx(About, {}) }), _jsx(Route, { path: '/download', element: _jsx(Download, {}) }), _jsx(Route, { path: '*', element: _jsx(NotFound, {}) })] }), _jsx(Footer, {})] }) }));
};
export default App;
