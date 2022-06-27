import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlbalStyles } from './styles/global-styles';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlbalStyles />
  </>,
);
