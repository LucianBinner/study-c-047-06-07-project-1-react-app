import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlbalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlbalStyles />
  </ThemeProvider>,
);
