import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './components';
import { BUTTON_VALUES } from '@/constants/index';
import { writeDownExpr, allClear, clearLast } from '@/reducers/actionCreators/expression';
import { writeHistory } from '@/reducers/actionCreators/history';
import { getAnswer } from '@/utils/calculator';
import { PLUS_MINUS } from '@/constants/operations';

const operations = [
  '/', '*', '%',
];

const getStylesLongBtn = (value) => {
  let styles = {};

  if (value === '=') {
    styles = Styled.longEqualBtn;
  }
  if (value === 0) {
    styles = Styled.longZeroBtn;
  }
  if (value === 'C') {
    styles = Styled.longAllClearBtn;
  }
  if (value === 'CE') {
    styles = Styled.longClearBtn;
  }

  return styles;
};

const Keypad = () => {
  const expression = useSelector((state) => state.expression);
  const dispatch = useDispatch();

  const writeDownHandler = (value) => {
    const expr = expression.currentExpression;

    if (expr === 'Error'
        || expr === 'Infinity') {
      dispatch(clearLast(''));
    }
    if (
      expr === '0'
            && !operations.includes(value)
    ) {
      dispatch(clearLast(''));
    }
    if (
      expr === '0'
            && operations.includes(value)
    ) {
      return;
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
            || value === '.' && expr.slice(-1) === '.'
    ) {
      return;
    }

    dispatch(writeDownExpr(value));
  };

  const clearLastHandler = (expression) => {
    if (expression.length === 1) {
      dispatch(allClear());
    } else {
      dispatch(clearLast(expression.slice(0, -1)));
    }
  };

  const equalsClickHandler = () => {
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

  const clickHandler = (e) => {
    switch (e.target.textContent) {
      case 'C': {
        dispatch(allClear());
        break;
      }
      case 'CE': {
        clearLastHandler(expression.currentExpression);
        break;
      }
      case '=': {
        equalsClickHandler();
        break;
      }
      default: {
        writeDownHandler(e.target.textContent);
        console.log(expression.currentExpression);
      }
    }
  };

  return (
        <Styled.Keypad>
            {BUTTON_VALUES.map(
              (value, id) => <Styled.Button
                        long={
                            getStylesLongBtn(value)
                        }

                        key={id}

                        onClick={clickHandler}

                    >
                        {value}
                    </Styled.Button>,
            )}
        </Styled.Keypad>
  );
};

export default Keypad;
