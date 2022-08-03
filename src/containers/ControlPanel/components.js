import styled from 'styled-components';
import { BORDER_COLOR } from '@/constants';

export const Main = styled.div`
    width: 25%;
    height: 100%;
    display: block;
    border-left: 2px solid ${BORDER_COLOR};
    margin-left: 20px;
    margin-top: 7px;
`;

export const SwitchSection = styled.div`
    display: ${(props) => props.clicked.value};
`;

export const NameWrapper = styled.div`
    text-align: center;
    padding-top: 13px;
    font: normal normal normal 46px/54px Helvetica;
    letter-spacing: 0px;
    color: unset;
    opacity: 1;
    cursor: pointer;
    user-select: none;
`;

export const toggleNameSection = styled.span`
    display: ${(props) => props.clicked.value};
`;

export const hiddenTextBlock = styled.div`
    font: normal normal normal 46px/54px Helvetica;
    justify-content: center;
    margin-left: 60px;
    display: ${(props) => props.clicked.value};
`;

Main.defaultProps = {
  clicked: {
    value: '',
  },
};

export const clicked = {
  value: 'none',
};

export const unClicked = {
  value: 'block',
};
