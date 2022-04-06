import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { getWorker } from './MockServer'; 


let root= createRoot(document.getElementById('root'));


if(process.env.NODE_ENV == "development" && process.env?.MOCK){
  //Register MockServer service worker before rendering
  getWorker().start().then(()=>{
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  });
}else{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
