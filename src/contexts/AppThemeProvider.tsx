import React from 'react';
import { ThemeProvider } from '@src/styles/styled-components';
import { theme } from '@src/styles/theme';

const AppThemeProvider = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
