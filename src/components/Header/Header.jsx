import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './components';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/index';
import { getHeaderStyles } from './headerStyles';

export const Header = ({ className }) => {
  const location = useLocation();

  return (
        <Styled.Header className={className}>
            <Styled.AppName>Calculator App</Styled.AppName>
            <Styled.AppCatalog>
                <Styled.CatalogLink
                  to={HOME_PAGE_ROUTE} selected={getHeaderStyles(location).home}>
                    Home
                </Styled.CatalogLink>
                <Styled.CatalogLink
                  to={SETTINGS_PAGE_ROUTE} selected={getHeaderStyles(location).settings}>
                    Settings
                </Styled.CatalogLink>
            </Styled.AppCatalog >
        </Styled.Header >
  );
};
