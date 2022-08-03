import styled from 'styled-components';
import { BORDER_COLOR } from '@/constants';

export const Keypad = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 10%);
    grid-template-rows: repeat(5, 18%);
    row-gap: 1%;
    column-gap: 7%;
    border-top: 2px solid ${BORDER_COLOR};
    padding: 15px;
    justify-content: flex-end;
    padding-right: 100px;
    color: unset;
`;

export const Button = styled.button`

    background: unset 0% 0% no-repeat padding-box;
    border: 1px solid unset;
    border-radius: 32px;
    opacity: 1;
    font: normal normal normal 58px/63px Helvetica;
    cursor: pointer;
    outline: none;
    grid-column: ${(props) => props.long.column};
    grid-row: ${(props) => props.long.row};
`;

Button.defaultProps = {
  long: {
    column: '',
    row: '',
  },
};

export const longZeroBtn = {
  column: '1 / 3',
  row: '',
};

export const longEqualBtn = {
  column: '4 / 6',
  row: '',
};

export const longAllClearBtn = {
  row: '1 / 3',
  column: '',
};

export const longClearBtn = {
  row: '3 / 5',
  column: '',
};
