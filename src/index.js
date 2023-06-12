import {AuthProvider } from './contexts/authContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './asset/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './routes/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RouteApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
