import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './playground/App7';
import reportWebVitals from './reportWebVitals';
import App2 from './playground/App2';
import App3 from './playground/App3'
import App4 from './playground/App4'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
