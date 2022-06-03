import { createGlobalStyle } from 'styled-components'
import { BACKGROUND_COLOR } from './constants'
import { lightTheme } from './themes/lightTheme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {  
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: block;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  button {
    background: ${props => props.theme.buttonBackground};
    color: ${props => props.theme.buttonColor};
  }

  header {
    background: ${props => props.theme.buttonBackground};
    color: ${props => props.theme.buttonColor};
  }

  select {
    background: ${props => props.theme.selectBackground};
    color: ${props => props.theme.selectColor};
  }


`