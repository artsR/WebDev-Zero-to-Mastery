import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// TODO: make function to parse each image from Midjourney

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // TODO: make for-loop to go through given number of most recent images from Midjourney
  <div>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
