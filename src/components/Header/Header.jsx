import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './components';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/index';

const getStylesPage = (location) => {
  const styles = {
    home: '',
    settings: '',
  };

  if (location.pathname === HOME_PAGE_ROUTE) {
    styles.home = Styled.Selected;
    styles.settings = Styled.unSelected;
  }

  if (location.pathname === SETTINGS_PAGE_ROUTE) {
    styles.home = Styled.unSelected;
    styles.settings = Styled.Selected;
  }

  return styles;
};

const Header = ({ className }) => {
  const location = useLocation();

  return (
        <Styled.Header className={className}>
            <Styled.AppName>Calculator App</Styled.AppName>
            <Styled.AppCatalog>
                <Styled.CatalogLink
                  to={HOME_PAGE_ROUTE} selected={getStylesPage(location).home}>
                    Home
                </Styled.CatalogLink>
                <Styled.CatalogLink
                  to={SETTINGS_PAGE_ROUTE} selected={getStylesPage(location).settings}>
                    Settings
                </Styled.CatalogLink>
            </Styled.AppCatalog >
        </Styled.Header >
  );
};

export default Header;
