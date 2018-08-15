
import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_NAME, UPDATE_FIELD } from '../constants';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case CHANGE_NAME:
      return { ...state, languageName: 'name changed' };
    case UPDATE_FIELD:
      return { ...state, [action.payload.fieldName] : action.payload.fieldValue };
    default:
      return state;
  }
}