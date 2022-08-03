import * as Styled from './components';

export const getLongBtnStyles = (value) => {
  if (value === '=') {
    return Styled.longEqualBtn;
  }
  if (value === 0) {
    return Styled.longZeroBtn;
  }
  if (value === 'C') {
    return Styled.longAllClearBtn;
  }
  if (value === 'CE') {
    return Styled.longClearBtn;
  }

  return {};
};
