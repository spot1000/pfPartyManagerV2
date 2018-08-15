import Hello from '../components/Hello';
import * as actions from '../actions/enthusiasmActions';
import { enthusiasmState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: enthusiasmState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onChangeName: () => dispatch(actions.changeName())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);