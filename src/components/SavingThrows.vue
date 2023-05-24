<template>
    <h4>Saving Throws</h4>
    <!-- TODO: use table? -->
    <div><input type="number" /><label>Paralyze/Poison</label><input type="text" v-model="paralyzeSave"/></div>
    <div><input type="number" /><label>Rod, Staff, or Wand</label><input type="text" v-model="rodSave"/></div>
    <div><input type="number" /><label>Petrify/Polymorph</label><input type="text" v-model="petrifySave"/></div>
    <div><input type="number" /><label>Breath Weapon</label><input type="text" v-model="breathSave"/></div>
    <div><input type="number" /><label>Spells</label><input type="text" v-model="spellSave"/></div>
    <div>Modifier<label>-----------=============-----------</label>Save</div>
</template>

<script>
    export default{
        props:{
            characterModel:{
                type: Object,
                default: null,
                required: true
                }
        },
        computed:{
            paralyzeSave(){
                return this.getSaveDataSet()?.paralyzeSave;
            },
            rodSave(){
                return this.getSaveDataSet()?.rodSave;
            },
            petrifySave(){
                return this.getSaveDataSet()?.petrifySave;
            },
            breathSave(){
                return this.getSaveDataSet()?.breathSave;
            },
            spellSave(){
                return this.getSaveDataSet()?.spellSave;
            }
        },
        data(){ 
            return{
                savingThrowData:[
                    {
                        superClass: 'priest',
                        tiers:[
                            {
                                minLevel: 1,
                                maxLevel: 3,
                                paralyzeSave: 10,
                                rodSave: 14,
                                petrifySave: 13,
                                breathSave: 16,
                                spellSave: 15
                            },
                            {
                                minLevel: 4,
                                maxLevel: 6,
                                paralyzeSave: 9,
                                rodSave: 13,
                                petrifySave: 12,
                                breathSave: 15,
                                spellSave: 14
                            },
                            {
                                minLevel: 7,
                                maxLevel: 9,
                                paralyzeSave: 7,
                                rodSave: 11,
                                petrifySave: 10,
                                breathSave: 13,
                                spellSave: 12
                            },
                            {
                                minLevel: 10,
                                maxLevel: 12,
                                paralyzeSave: 6,
                                rodSave: 10,
                                petrifySave: 9,
                                breathSave: 12,
                                spellSave: 11
                            }
                        ]
                    },
                    {
                        superClass: 'rogue',
                        tiers:[
                            {
                                minLevel: 1,
                                maxLevel: 4,
                                paralyzeSave: 13,
                                rodSave: 14,
                                petrifySave: 12,
                                breathSave: 16,
                                spellSave: 15
                            },
                            {
                                minLevel: 5,
                                maxLevel: 8,
                                paralyzeSave: 12,
                                rodSave: 12,
                                petrifySave: 11,
                                breathSave: 15,
                                spellSave: 13
                            },
                            {
                                minLevel: 9,
                                maxLevel: 12,
                                paralyzeSave: 11,
                                rodSave: 10,
                                petrifySave: 10,
                                breathSave: 14,
                                spellSave: 11
                            },
                        ]
                    },
                    {
                        superClass: 'warrior',
                        tiers:[
                            {
                                minLevel: 0,
                                maxLevel: 0,
                                paralyzeSave: 16,
                                rodSave: 18,
                                petrifySave: 17,
                                breathSave: 20,
                                spellSave: 19
                            },
                            {
                                minLevel: 1,
                                maxLevel: 2,
                                paralyzeSave: 14,
                                rodSave: 16,
                                petrifySave: 15,
                                breathSave: 17,
                                spellSave: 17
                            },
                            {
                                minLevel: 3,
                                maxLevel: 4,
                                paralyzeSave: 13,
                                rodSave: 15,
                                petrifySave: 14,
                                breathSave: 16,
                                spellSave: 16
                            },
                            {
                                minLevel: 5,
                                maxLevel: 6,
                                paralyzeSave: 11,
                                rodSave: 13,
                                petrifySave: 12,
                                breathSave: 13,
                                spellSave: 14
                            },
                            {
                                minLevel: 7,
                                maxLevel: 8,
                                paralyzeSave: 10,
                                rodSave: 12,
                                petrifySave: 11,
                                breathSave: 12,
                                spellSave: 13
                            },
                            {
                                minLevel: 9,
                                maxLevel: 10,
                                paralyzeSave: 8,
                                rodSave: 10,
                                petrifySave: 9,
                                breathSave: 9,
                                spellSave: 11
                            },
                        ]
                    },
                    {
                        superClass: 'wizard',
                        tiers:[
                            {
                                minLevel: 1,
                                maxLevel: 5,
                                paralyzeSave: 14,
                                rodSave: 11,
                                petrifySave: 13,
                                breathSave: 15,
                                spellSave: 12
                            },
                            {
                                minLevel: 6,
                                maxLevel: 10,
                                paralyzeSave: 13,
                                rodSave: 9,
                                petrifySave: 11,
                                breathSave: 13,
                                spellSave: 10
                            },
                            {
                                minLevel: 11,
                                maxLevel: 15,
                                paralyzeSave: 11,
                                rodSave: 7,
                                petrifySave: 9,
                                breathSave: 11,
                                spellSave: 8
                            },
                        ]
                    }
                ]
            }
        },
        methods:{
            getSaveDataSet(){
                let superClassSet = this.savingThrowData.find(set => set.superClass === this.characterModel.getSuperClass().toLowerCase());
                if (typeof superClassSet === 'undefined') { return null; }
                
                let dataSet = superClassSet.tiers.find(saveTier => this.characterModel.level >= saveTier.minLevel && this.characterModel.level <= saveTier.maxLevel)
                
                return dataSet ?? {};
            }
        }
    }
</script>



