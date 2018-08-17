
import { enthusiasm } from './enthusiasmReducers';
import { characterSheet } from './characterSheetReducer';
import { enthusiasmState, characterSheetState } from '../types';
import { combineReducers } from 'redux'
import { AllActions } from '../actions/allActions'

export interface RootState {
  enthusiasm: enthusiasmState;
  characterSheet: characterSheetState
}

const rootReducer = combineReducers<RootState, AllActions>({
  enthusiasm,
  characterSheet
})

export default rootReducer