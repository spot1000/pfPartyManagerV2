
import { EnthusiasmAction } from '../actions/enthusiasmActions';
import { characterSheetActions } from '../actions/characterSheetActions';
import { enthusiasmState, characterSheetState } from '../types';
import { combineReducers } from 'redux'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_NAME, UPDATE_FORM_FIELD } from '../constants';

export interface ApplicationState {
  enthusiasm: enthusiasmState;
  characterSheet: characterSheetState
}

export function enthusiasm(state: enthusiasmState, action: EnthusiasmAction): enthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case CHANGE_NAME:
      return { ...state, languageName: 'name changed' };
    default:
      return state;
  }
}

export function characterSheet(state: characterSheetState, action: characterSheetActions): characterSheetState {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return { ...state, [action.payload.fieldName] : action.payload.fieldValue };
    default:
      return state;
  }
}

const rootReducer = combineReducers<ApplicationState>({
  enthusiasm,
  characterSheet
})

export default rootReducer