import React from "react"
import * as Styled from "./components"
import { useSelector } from "react-redux"

const Display = () => {
    const expression = useSelector(state => state.expression)
    return (
        <Styled.Display>
            {expression.currentExpression}
        </Styled.Display>
    )
}

export default Display