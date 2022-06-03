import React from 'react'
import * as Styled from './components'
import { useSelector } from 'react-redux'

const History = () => {
    const history = useSelector(state => state.history.currentValue)

    return (
        <Styled.List>
            {history.map((value, id) => <Styled.ListElement key={id}>{value}</Styled.ListElement>)}
        </Styled.List>
    )
}

export default History