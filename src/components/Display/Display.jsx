import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './components';

export const Display = () => {
  const expression = useSelector((state) => state.expression);
  return (
        <Styled.Display>
            {expression.currentExpression}
        </Styled.Display>
  );
};
