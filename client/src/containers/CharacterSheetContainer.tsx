import CharacterSheet from '../components/CharacterSheet';
import * as actions from '../actions/characterSheetActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../reducers/rootReducer'

export function mapStateToProps(state: RootState) {
  return {
    partyCode: state.characterSheet.partyCode,
    playerName: state.characterSheet.playerName,
    characterName: state.characterSheet.characterName,
    characterClass: state.characterSheet.characterClass,
    race: state.characterSheet.race,
    level: state.characterSheet.level,
    perceptionTotal:state.characterSheet.perceptionTotal,
    maxHP: state.characterSheet.maxHP
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.characterSheetActions>) {
  return {
    onUpdateValue: (field:string, value:any) => dispatch(actions.UpdateFormField(field, value)),
    clearForm: () => dispatch(actions.ClearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);