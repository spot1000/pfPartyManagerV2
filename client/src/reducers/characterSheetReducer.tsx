import { characterSheetActions } from '../actions/characterSheetActions';
import { characterSheetState } from '../types';
import { UPDATE_FORM_FIELD, CLEAR_FORM } from '../constants';

const characterSheetState = {
    partyCode: '',
    playerName: '',
    characterName: '',
    characterClass: '',
    race: '',
    level: '',
    perceptionTotal:'',
    maxHP: ''
}

export function characterSheet(state = characterSheetState, action: characterSheetActions): characterSheetState {
    switch (action.type) {
        case UPDATE_FORM_FIELD:
            return { ...state, [action.payload.fieldName] : action.payload.fieldValue };
        case CLEAR_FORM:
            return { 
                partyCode: '',
                playerName: '',
                characterName: '',
                characterClass: '',
                race:'',
                level: '',
                perceptionTotal: '',
                maxHP: ''
            } 
        default:
            return state;
    }
}