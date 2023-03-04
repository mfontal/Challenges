import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Challenge2 from "./Challenge2";
import FirstApp from './FirstApp';
import FirstApp2 from './FirstApp2';
import FirstApp3 from './FirstApp3';
import Challenge3 from './Challenge3';
import { ComponentApp } from "./ComponentApp";
import { Challenge4 } from "./Challenge4";
import { AddCategory } from './components/AddCategory';
import { GifExpertApp } from './GiftExpertApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Challenge2 />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();