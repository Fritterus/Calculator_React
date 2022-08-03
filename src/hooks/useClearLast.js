import { allClear, clearLast } from '@/reducers/actionCreators/expression';

export const useClearLast = (dispatch) => (expression) => {
  if (expression.length === 1) {
    dispatch(allClear());
  } else {
    dispatch(clearLast(expression.slice(0, -1)));
  }
};
