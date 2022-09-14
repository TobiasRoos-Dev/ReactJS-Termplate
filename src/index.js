import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_de from './translations/de/common.json';
import common_en from './translations/en/common.json';
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'de', // language to use
  resources: {
    de: {
      common: common_de,
    },
    en: {
      common: common_en,
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
