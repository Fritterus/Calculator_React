import { CLEAR_LAST } from '@/reducers/actions/expression';

export const clearLast = (expr) => ({ type: CLEAR_LAST, value: expr });
