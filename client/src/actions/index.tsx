
import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface ChangeName {
    type: constants.CHANGE_NAME;
}

export interface UpdateField {
    type: constants.UPDATE_FIELD;
    payload: {
        fieldName : string;
        fieldValue: any
    }
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ChangeName | UpdateField;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function changeName(): ChangeName {
    return {
        type: constants.CHANGE_NAME
    };
}

export function updateField(fieldName:string, fieldValue:string): UpdateField {
    return {
        type: constants.UPDATE_FIELD,
        payload: {
            fieldName,
            fieldValue
        }
    };
}