import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import React from 'react';
// import ReactDOM from 'react-dom/client'; 
// import App from './App';
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
