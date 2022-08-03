import * as Styled from './components';
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants/index';

export const getHeaderStyles = (location) => {
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
