export class Item {
    'Type': string;
    'Name': string;
    'ImagePath': string;
    'Description': string;
    'Charges': number;
    'Buff': Array<Buff>;
    'IsSingleUse': boolean;
    'IsEquippable': boolean;
    'AmmunitionType': string;
    'Damage': string;
    'DamageLarge': string;
    'DamageTwoHand': string;
    'DamageTwoHandLarge': string;
    'Weight': number;
    'Size': string;
    'WeaponType': string;
    'SpeedFactor': number;
    'Cost': string;
    'Special': string;

    constructor(Name:string){
        this.Type=Name;
    }
    
    // Possible sort/filter options for item selection dropdown
    // is single use
    // damage type
    // weight
    // size
    // weapon type
    // cost
    // is equippable
    // name
    // type
    // subtype ?
}

export class Buff{
    'AffectedField': string;
    'Amount': number;

    constructor(affectedField: string, amount: number){
        this.AffectedField = affectedField;
        this.Amount = amount;
    }
}


/*
"Type": "Weapon",
      "Name": "Battle Axe",
      "ImagePath": "",
      "Description": "",
      "Charges": "",
      "Buff": "",
      "IsSingleUse": "FALSE",
      "IsEquippable": "TRUE",
      "AmmunitionType": "",
      "Damage": "1d8",
      "DamageLarge": "*",
      "DamageTwoHand": "",
      "DamageTwoHandLarge": "",
      "Weight": 7,
      "Size": "Medium",
      "WeaponType": "S",
      "SpeedFactor": 7,
      "Cost": 5,
      "Special": ""

*/