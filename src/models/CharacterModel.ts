export function getDefaultCharacter() { 
    console.log('check');
    return {
        ac: 10,
        level: 1,
        getSuperClass(){
    
            let lowerClass = this.characterInfo.class.toLowerCase();
    
            if (lowerClass === 'wizard' || lowerClass === 'illusionist'){
                return 'Wizard';
            }
            if (lowerClass === 'bard' || lowerClass === 'thief'){
                return 'Rogue';
            }
            if (lowerClass === 'druid' || lowerClass === 'cleric'){
                return 'Priest';
            }
            if (lowerClass === 'fighter' || lowerClass === 'paladin' || lowerClass === 'ranger'){
                return 'Warrior';
            }
            else {
                return 'unknown';}
        },
        characterInfo : {
            characterName : 'Amenhotep',
            playerName : 'Buddy',
            race : 'Half Orc',
            class : 'Wizard'
        },
        abilities : {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }
    };
}