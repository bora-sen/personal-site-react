import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import ThemeProvider from './context/ThemeContext';
import MainContextProvider from './context/MainContext'

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