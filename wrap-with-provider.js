import React from 'react';

import AppThemeProvider from '@src/contexts/AppThemeProvider';

import ErrorBoundary from '@src/errors/ErrorBoundary';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <AppThemeProvider>
  <ErrorBoundary>
    {element}
  </ErrorBoundary>
</AppThemeProvider>
