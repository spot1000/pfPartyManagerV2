import * as React from 'react'
import CharacterSheet from '../components/CharacterSheet';
import * as actions from '../actions/characterSheetActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../reducers/rootReducer'
import { characterSheetState } from '../types'

interface Props {
  characterStats : characterSheetState
  onUpdateValue: (field:string, value:any) => void
  clearForm: () => void
}

export function mapStateToProps(state: RootState) {
  return {
    characterStats: {
      partyCode: state.characterSheet.partyCode,
      playerName: state.characterSheet.playerName,
      characterName: state.characterSheet.characterName,
      characterClass: state.characterSheet.characterClass,
      race: state.characterSheet.race,
      level: state.characterSheet.level,
      perceptionTotal:state.characterSheet.perceptionTotal,
      maxHP: state.characterSheet.maxHP
    }
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.characterSheetActions>) {
  return {
    onUpdateValue: (field:string, value:any) => dispatch(actions.UpdateFormField(field, value)),
    clearForm: () => dispatch(actions.ClearForm())
  };
}

export class TestThing extends React.Component<Props, characterSheetState>{
  render() {
    return (
      <div>
        <CharacterSheet 
          characterStats={this.props.characterStats} 
          onUpdateValue={this.props.onUpdateValue}
          clearForm={this.props.clearForm}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestThing);