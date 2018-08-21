import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { characterSheetState } from '../types'

import '../App.css';

const styles = (theme: Theme) => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    input: {
        margin: theme.spacing.unit,
    }
});

interface Props extends WithStyles<typeof styles> {
    characterStats: characterSheetState
    onUpdateValue: (field:string, value:any) => void
    clearForm: () => void
}

class CharacterSheet extends React.Component<Props, characterSheetState>{
    constructor(props: any){
        super(props);
    }

    onChange = (e:any) => {
        this.props.onUpdateValue(e.target.name, e.target.value)
    }

    render() {
        const classes = this.props.classes
        const { partyCode, playerName, characterName, characterClass, race, level, perceptionTotal, maxHP} = this.props.characterStats;
        return (
            <div className='App'>
                <div className="App" {...classes.container}>
                    <Input
                        placeholder="Party Code"
                        className={classes.input}
                        name="partyCode"
                        value={partyCode}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Player Name"
                        className={classes.input}
                        name='playerName'
                        value={playerName}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Character Name"
                        className={classes.input}
                        name='characterName'
                        value={characterName}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Class"
                        className={classes.input}
                        name='characterClass'
                        value={characterClass}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Race"
                        className={classes.input}
                        name='race'
                        value={race}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Level"
                        className={classes.input}
                        name='level'
                        value={level}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Perception Total"
                        className={classes.input}
                        name='perceptionTotal'
                        value={perceptionTotal}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                    <Input
                        placeholder="Max HP"
                        className={classes.input}
                        name='maxHP'
                        value={maxHP}
                        onChange={this.onChange}
                        inputProps={{
                        'aria-label': 'Description',
                        }}
                    />
                </div>
                <div className="App">
                    <Button variant="contained" color="primary">Save Character</Button>
                    <Button variant="contained" onClick={this.props.clearForm}>Reset</Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(CharacterSheet);