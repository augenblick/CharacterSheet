import {DieRoll} from './Dice'

export class NumberField{
    // fields that can be modified
    BaseValue: number;  // base derived value
    BuffValue: number;  // + or - modifier (to be signified by styling)
    ModValue: number;   // arbitrary + or - int (not intended for special styling)
}

export class StringField{
    // is this necessary?
}

export class DieField{
    'BaseDieRoll': DieRoll;
    'BuffDieRoll': DieRoll;
    'ModDieRoll': DieRoll;
}