import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 32px;
  column-gap: 60px;
  padding-left: 91px;
  justify-content: center;
`

export const Name = styled.div`
  text-align: left;
  padding-left: 84px;
  padding-bottom: 46px;
  padding-top: 61px;
  font: normal normal normal 64px/77px Helvetica;
  letter-spacing: 0px;
  color: unset;
  opacity: 1;
`

export const SwitchName = styled.div`
  text-align: left;
  padding-left: 94px;
  padding-bottom: 7px;
  font: normal normal normal 24px/29px Helvetica;
  letter-spacing: 0px;
  color: unset;
  opacity: 1;
`

export const SelectionMenu = styled.select`
  width: 401px;
  height: 93px;
  background: unset 0% 0% no-repeat padding-box;
  border: 2px solid unset;
  border-radius: 8px;
  text-align: left;
  padding-left: 27px;
  font: normal normal normal 32px/38px Helvetica;
  color: unset;
  opacity: 1;
`



export const Option = styled.option`
  text-align: left;
  padding-left: 27px;
  font: normal normal normal 32px/38px Helvetica;
  letter-spacing: 0px;
  color: unset;
  opacity: 1;
`

export const Button = styled.button`
  width: 401px;
  height: 93px;
  padding-left: 27px;
  text-align: left;
  cursor: pointer;
  background: unset 0% 0% no-repeat padding-box;
  border: 2px solid unset;
  border-radius: 8px;
  font: normal normal normal 32px/38px Helvetica;
  letter-spacing: 0px;
  color: unset;
  opacity: 1;
`

