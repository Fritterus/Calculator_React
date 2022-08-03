import { writeDownExpr, clearLast } from '@/reducers/actionCreators/expression';
import { PLUS_MINUS } from '@/constants/operations';

const operations = [
  '/', '*', '%',
];

export const useWriteDown = (dispatch, expression) => (value) => {
  const expr = expression.currentExpression;
  const regEx = /[0-9]*[.][0-9]+[.]|[0-9]*[.][.]/;

  if (expr === 'Error'
        || expr === 'Infinity') {
    dispatch(clearLast(''));
  }
  if (expr === '0') {
    if (value === '.') {
      dispatch(writeDownExpr(value));
      return;
    }
    if (!operations.includes(value)) {
      dispatch(clearLast(''));
    }
    if (operations.includes(value)) {
      return;
    }
  }
  if (value === '+' && expr[expr.length - 1] === '-'
    || value === '-' && expr[expr.length - 1] === '+') {
    dispatch(clearLast(expr.slice(0, -1)));
    dispatch(writeDownExpr(value));
    return;
  }
  if (PLUS_MINUS.includes(value) && PLUS_MINUS.includes(expr[expr.length - 1])) {
    return;
  }
  if (
    operations.includes(value) && operations.includes(expr.slice(-1))
            || operations.includes(value) && expr === ''
            || value === '.' && regEx.test(`${expr}.`)
  ) {
    return;
  }

  dispatch(writeDownExpr(value));
};
