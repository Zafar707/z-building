import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { BrowserRouter } from 'react-router-dom';

// i18n konfiguratsiyasini yuklash
import './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
