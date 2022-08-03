import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './components';
import { BUTTON_VALUES } from '@/constants/index';
import { useWriteDown, useClearLast, useCalculate } from '@/hooks/index';
import { allClear } from '@/reducers/actionCreators/expression';
import { getLongBtnStyles } from './buttonStyles';

export const Keypad = () => {
  const expression = useSelector((state) => state.expression);
  const dispatch = useDispatch();
  const writeDown = useWriteDown(dispatch, expression);
  const clearLastSymbol = useClearLast(dispatch);
  const calculate = useCalculate(dispatch, expression);

  const clickHandler = (e) => {
    switch (e.target.textContent) {
      case 'C': {
        dispatch(allClear());
        break;
      }
      case 'CE': {
        clearLastSymbol(expression.currentExpression);
        break;
      }
      case '=': {
        calculate();
        break;
      }
      default: {
        writeDown(e.target.textContent);
      }
    }
  };

  return (
        <Styled.Keypad>
            {BUTTON_VALUES.map(
              (value, id) => <Styled.Button
                              long={
                                getLongBtnStyles(value)
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
