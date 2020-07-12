import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/baseline.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/theme';
import { AppContextProvider } from './context/app.context';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Router>
          <App />
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
