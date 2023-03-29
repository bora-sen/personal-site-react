import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainContextProvider from './context/MainContext';
import ThemeProvider from './context/ThemeContext';
import './index.css';
import MainRouter from './MainRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <MainContextProvider>
                <MainRouter />
            </MainContextProvider>
        </ThemeProvider>
    </BrowserRouter>
);