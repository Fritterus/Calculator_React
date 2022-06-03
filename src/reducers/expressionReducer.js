import { WRITE_DOWN_EXPRESSION, ALL_CLEAR, CLEAR_LAST } from '@/reducers/actions/expression'

const INITIAL_STATE = {
    currentExpression: '0',
}

export const expressionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WRITE_DOWN_EXPRESSION: {
            return { ...state, currentExpression: state.currentExpression + action.expression }
        }
        case ALL_CLEAR: {
            return { ...state, currentExpression: action.value }
        }
        case CLEAR_LAST: {
            return { ...state, currentExpression: action.value }
        }
        default: {
            return state
        }
    }
}