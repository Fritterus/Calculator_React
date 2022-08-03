import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './components';

export const History = () => {
  const history = useSelector((state) => state.history.currentValue);

  return (
        <Styled.List>
            {history.map((value, id) => <Styled.ListElement key={id}>{value}</Styled.ListElement>)}
        </Styled.List>
  );
};
