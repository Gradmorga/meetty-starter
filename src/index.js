

import './index.style.scss';

import React          from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App  from './main/App/App.component';


const app =
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>;


createRoot(document.getElementById('root')).render(app);