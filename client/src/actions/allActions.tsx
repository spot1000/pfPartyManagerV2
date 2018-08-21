//import each of the action files here to be combined for your store
import { EnthusiasmAction } from './enthusiasmActions';
import { characterSheetActions } from './characterSheetActions';

// Combining all actions
export type AllActions = EnthusiasmAction | characterSheetActions;