// NOTE: experimental stuff-- all of it

export function getDefaultCharacter() { 
    let testCharacter = new Character('Buddy Renfro');
    testCharacter.ArmorClass = 10;
    testCharacter.Level = 1;
    testCharacter.CharacterName = 'Amenhotep';
    testCharacter.CharacterRace = 'Half-Orc';
    testCharacter.CharacterClass = new CharacterClass('Wizard','Wizard');
    testCharacter.AbilityScores = testCharacter.CreateAbilityScores(10,10,10,10,10,10);

    return testCharacter;
}


export class Character{
    
    'CharacterName':string;
    'PlayerName':string;
    'CharacterRace':string; // TODO CharacterRace object?
    'CharacterClass': CharacterClass; // TODO Class object?
    'Level': number;
    'AbilityScores': AbilityScore[];
    'ArmorClass': number;

    constructor(playerName: string){
        this.PlayerName = playerName;
    }

    CreateAbilityScores(str:number, dex:number, con:number, int:number, wis:number, cha:number): AbilityScore[]{

        // TODO input validation
        
        let abilityArray = new Array<AbilityScore>();
        abilityArray.push(new AbilityScore(AbilityName.Strength, str));
        abilityArray.push(new AbilityScore(AbilityName.Dexterity, dex));
        abilityArray.push(new AbilityScore(AbilityName.Constitution, con));
        abilityArray.push(new AbilityScore(AbilityName.Intelligence, int));
        abilityArray.push(new AbilityScore(AbilityName.Wisdom, wis));
        abilityArray.push(new AbilityScore(AbilityName.Charisma, cha));

        return abilityArray;
    }
}



export class CharacterClass{
    ClassName: string;
    ClassGroup: string;

    constructor(className: string, classGroup: string){
        this.ClassName = className;
        this.ClassGroup = classGroup;
    }
}

export enum AbilityName{
    Strength = 'STR',
    Dexterity = 'DEX',
    Constitution = 'CON',
    Intelligence = 'INT',
    Wisdom = 'WIS',
    Charisma = 'CHA'
}

export class AbilityScore{
    'Name': AbilityName;
    'Value': number;

    constructor(name:AbilityName, value:number){
        this.Name = name;
        this.Value = value;
    }
}