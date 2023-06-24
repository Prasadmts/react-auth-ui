import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Pages/AuthProvide';
import './Pages/index.css'
 
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<AuthProvider>
    <BrowserRouter> 
        <App /> 
    </BrowserRouter>
</AuthProvider>);