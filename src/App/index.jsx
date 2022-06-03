import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants';
import Loader from '@/components/Loader';
import Header from '@/components/Header';

import Home from '@/pages/Home';
import Settings from '@/pages/Settings';

import { darkTheme } from '@/themes/darkTheme';
import { lightTheme } from '@/themes/lightTheme';
import { GlobalStyles } from '@/globalStyles';

export default () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={Home}
          />
          <Route
            exact
            path={SETTINGS_PAGE_ROUTE}
            component={Settings}
          />
        </Switch>
      </ThemeProvider>
    </Suspense>
  );
};
