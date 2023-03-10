import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter basename={"/"}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
); */
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
