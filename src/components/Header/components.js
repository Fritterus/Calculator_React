import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HEADER_COLOR, BORDER_COLOR, HEADER_TEXT_COLOR } from '@/constants/index'

export const Header = styled.header`
    width: 100%;
    height: 90px;
    background: ${HEADER_COLOR} 0% 0%;
    border: 1px solid ${BORDER_COLOR}};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
`

export const AppName = styled.div`
    text-align: left;
    font: normal normal normal 32px/38px Helvetica;
    letter-spacing: 0px;
    color: ${HEADER_TEXT_COLOR};
    opacity: 1;
    margin: 32px;

`

export const AppCatalog = styled.div`
    text-align: left;
    font: normal normal normal 32px/38px Helvetica;
    letter-spacing: 0px;
    color: ${HEADER_TEXT_COLOR};
    opacity: 1;
`

export const CatalogLink = styled(Link)`
    cursor: pointer;
    color: ${HEADER_TEXT_COLOR};
    text-decoration: none;
    margin: 32px;
    border-bottom: ${props => props.selected.border};
    opacity: ${props => props.selected.opacity};
`

CatalogLink.defaultProps = {
    selected: {
        border: '2px solid #FFFFFF',
        opacity: '1',
    },

}

export const Selected = {
    border: '2px solid #FFFFFF',
    opacity: '1',
}

export const unSelected = {
    border: 'none',
    opacity: '0.7',
}