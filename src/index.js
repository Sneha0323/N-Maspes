import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Display from './Components/ReactBootstrap/Display';
import reportWebVitals from './reportWebVitals';
// React Bootstrap Configration
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1600,
  easing: 'ease-in-out-back',

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Display /> */}
  </React.StrictMode>
);

reportWebVitals();