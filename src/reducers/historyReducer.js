import { CLEAR_HISTORY, WRITE_HISTORY } from '@/reducers/actions/history'

const INITIAL_STATE = {
    currentValue: [],
}

export const historyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WRITE_HISTORY: {
            return { ...state, currentValue: state.currentValue.concat(action.value) }
        }
        case CLEAR_HISTORY: {
            return { ...state, currentValue: [] }
        }
        default: {
            return state
        }
    }
}