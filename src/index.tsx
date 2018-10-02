import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Application from '@src/Application';
import { appTheme } from '@src/styles';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-46787228-7');
} else {
  console.dir('Looks like we are in development mode!');
}

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={appTheme}>
      <Application />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('main')
);
