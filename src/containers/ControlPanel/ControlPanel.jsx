import React, { useState } from 'react';
import * as Styled from './components';
import History from '@/components/History';

const ControlPanel = () => {
  const [toggle, setToggle] = useState(false);

  function buttonClickHandle() {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  return (
        <Styled.Main>
            <Styled.NameWrapper onClick={() => { buttonClickHandle(); }}>
                <Styled.toggleNameSection
                 clicked={toggle === true ? Styled.clicked : Styled.unClicked}>
                    History
                </Styled.toggleNameSection>
                <Styled.toggleNameSection
                 clicked={toggle === false ? Styled.clicked : Styled.unClicked}>
                    History hidden!
                </Styled.toggleNameSection>
            </Styled.NameWrapper>
            <Styled.SwitchSection clicked={toggle === true ? Styled.clicked : Styled.unClicked}>
                <History />
            </Styled.SwitchSection>

        </Styled.Main>
  );
};

export default ControlPanel;
