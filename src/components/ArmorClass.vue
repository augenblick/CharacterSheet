<template>
    <h3>AC info here.</h3>
    <button @click="decrementAc">click to add armor</button>
    <div><em>AC = {{ this.characterModel.ArmorClass }}.</em> You {{ armorDescription }}, son</div>
</template>

<script >
    
    import {Character} from '../classes/CharacterModel'

    export default {
        props:{
            characterModel:{
                type: Character,
                default: null,
                required: true
            }
        },
        computed:{
            armorDescription(){
                if (this.characterModel.ArmorClass === null || typeof this.characterModel.ArmorClass === 'undefined'){
                    return 'undefined';
                }
                if (this.characterModel.ArmorClass > 6 ){
                    return 'weak';
                }
                if (this.characterModel.ArmorClass < 2){
                    return 'strong';
                }
                else{
                    // between 1 and 6
                    return 'adequate';
                }
            }
        },
        methods:{
            decrementAc(){
                this.characterModel.ArmorClass = this.characterModel.ArmorClass - 1;
            }
        }

    }
   
</script>
