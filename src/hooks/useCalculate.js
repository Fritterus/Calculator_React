import { getAnswer } from '@/utils/calculator';
import { clearLast } from '@/reducers/actionCreators/expression';
import { writeHistory } from '@/reducers/actionCreators/history';

export const useCalculate = (dispatch, expression) => () => {
  const answer = getAnswer(expression.currentExpression);
  const expr = expression.currentExpression;

  if (answer === expr) {
    return;
  }
  if (answer === 'Error') {
    dispatch(clearLast(answer));
    return;
  }
  if (answer !== 'Error') {
    dispatch(clearLast(answer));
    dispatch(writeHistory(expression.currentExpression));
  }
};
