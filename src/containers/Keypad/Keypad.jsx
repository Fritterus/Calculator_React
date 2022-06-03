import React from 'react'
import * as Styled from './components'
import { BUTTON_VALUES } from '@/constants/index'
import { useDispatch, useSelector } from 'react-redux'
import { writeDownExpr, allClear, clearLast } from '@/reducers/actionCreators/expression'
import { writeHistory } from '@/reducers/actionCreators/history'
import { getAnswer } from '@/utils/Calculator'
import propTypes from "prop-types"

const operations = [
    '/', '*', '+',
    '-', '%',
]

const numbers = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
]

const getStylesLongBtn = value => {
    let styles = {}

    if (value === '=') {
        styles = Styled.longEqualBtn
    }
    if (value === 0) {
        styles = Styled.longZeroBtn
    }
    if (value === 'C') {
        styles = Styled.longAllClearBtn
    }
    if (value === 'CE') {
        styles = Styled.longClearBtn
    }

    return styles
}

const Keypad = () => {
    const expression = useSelector(state => state.expression)
    const dispatch = useDispatch()

    const writeDownHandler = value => {

        if (
            expression.currentExpression.length === 1 &&
            expression.currentExpression.includes('0') &&
            !operations.includes(value)
        ) {
            dispatch(clearLast(value))
            return
        }

        if (
            operations.includes(value) && operations.includes(expression.currentExpression.slice(-1)) ||
            operations.includes(value) && expression.currentExpression === '' ||
            value === '.' && expression.currentExpression.slice(-1) === '.'
        ) {

            return
        }

        dispatch(writeDownExpr(value))

    }

    const clearLastHelper = expression => {

        if (expression.length == 1) {
            dispatch(allClear())
            
        }
        else {
            dispatch(clearLast(expression.slice(0, -1)))
        }
    }

    const equalsClickHandler = () => {
        const answer = getAnswer(expression.currentExpression)
        const expr = expression.currentExpression

        if(answer === expr) {
            return
        }
        if (answer !== 'Error') {
            dispatch(clearLast(answer))
            dispatch(writeHistory(expression.currentExpression))
        }
    }

    const clickHandler = e => {
        switch (e.target.textContent) {
            case 'C': {
                dispatch(allClear())
                break
            }
            case 'CE': {
                clearLastHelper(expression.currentExpression)
                break
            }
            case '=': {
                equalsClickHandler()
                break
            }
            default: {
                writeDownHandler(e.target.textContent)
                console.log(expression.currentExpression)
            }
        }
    }

    return (
        <Styled.Keypad>
            {BUTTON_VALUES.map(
                (value, id) =>
                    <Styled.Button
                        long={
                            getStylesLongBtn(value)
                        }

                        key={id}

                        onClick={clickHandler}

                    >
                        {value}
                    </Styled.Button>,
            )}
        </Styled.Keypad>
    )
}

export default Keypad
