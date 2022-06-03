import { TOGGLE } from './actions/theme';

const INITIAL_STATE = {
  currentTheme: 'light',
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE: {
      return { ...state, currentTheme: action.theme };
    }
    default: {
      return state;
    }
  }
};
