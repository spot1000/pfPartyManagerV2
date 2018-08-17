
export interface characterSheetState {
    partyCode: string,
    playerName: string,
    characterName: string,
    characterClass: string,
    race:string,
    level: number | string,
    perceptionTotal: number | string,
    maxHP: number | string
}

export interface enthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}