import React from 'react'

import { PageLayout } from '@/layouts'

import * as Styled from './components'

import Wrapper from '@/components/Wrapper'
import Display from '@/components/Display'
import Keypad from '@/containers/Keypad'
import ControlPanel from '@/containers/ControlPanel'

export default () => {
  return (
    <PageLayout>
      <Styled.GeneralWrapper>
        <Wrapper>
          <Display />
          <Keypad />
        </Wrapper>
        <ControlPanel />
      </Styled.GeneralWrapper>
    </PageLayout>
  )
}
