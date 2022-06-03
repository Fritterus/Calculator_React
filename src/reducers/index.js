import { combineReducers } from 'redux';

import { expressionReducer } from './expressionReducer';
import { historyReducer } from './historyReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  expression: expressionReducer,
  history: historyReducer,
  theme: themeReducer,
});
