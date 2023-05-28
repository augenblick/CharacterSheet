export class DieRoll{
    // example: 
    //  DisplayString = 2d8+4 
    //  DieMultiple = 2
    //  DieSides = 8
    //  Modifider = 4

    'DieMultiple': number;  // int >= 0
    'DieSides': number;     // int > 0
    'Modifier': number;     // int
    'DisplayString': string;

    constructor(dieSides: number|null, dieMultiple: number, modifier: number){

        if (dieSides == null){dieSides = 1;}

        if (Number.isNaN(dieSides) || !Number.isInteger(dieSides) || dieSides < 1 
            || Number.isNaN(dieMultiple) || !Number.isInteger(dieMultiple) || dieMultiple < 0
            || Number.isNaN(modifier) || !Number.isInteger(modifier)){
            
            // TODO: how to handle bad input
                throw new Error();
        }

        this.DieSides = dieSides;
        this.DieMultiple = dieMultiple;
        this.Modifier = modifier;
        this.DisplayString = this.BuildDisplayString();
    }

    BuildDisplayString(): string{
        let prefix = '';
        let suffix = '';

        if (this.Modifier == 0 && this.DieMultiple == 0){
            return '0';
        }

        if (this.DieMultiple > 0){
            prefix = `${this.DieMultiple > 1 ? this.DieMultiple : ''}d${this.DieSides}`;
        }
        if (this.Modifier != 0){
            if (prefix == ''){
                return `${this.Modifier}`;
            }
            suffix = `${this.Modifier > 0 ? '+' : ''}${this.Modifier}`;
        }

        return suffix + prefix;
    }



    AddDieRoll(dieRoll1: DieRoll , dieRoll2: DieRoll): Array<DieRoll>{

        if (dieRoll1.DieSides == dieRoll2.DieSides){
            return ([new DieRoll(dieRoll1.DieSides + dieRoll2.DieSides, dieRoll1.DieMultiple, dieRoll1.Modifier + dieRoll2.Modifier)])
        }

        // TODO needs work
        return [new DieRoll(dieRoll1.DieSides, dieRoll1.DieMultiple, 0), new DieRoll(dieRoll2.DieSides, dieRoll2.DieMultiple, dieRoll1.Modifier + dieRoll2.Modifier)];
    }
}