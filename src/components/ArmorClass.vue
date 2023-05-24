<template>
    <h3>AC info here.</h3>
    <button @click="decrementAc">click to add armor</button>
    <div><em>AC = {{ this.characterModel.ac }}.</em> You {{ armorDescription }}, son</div>
</template>

<script >
    
    export default {
        props:{
            characterModel:{
                type: Object,
                default: null,
                required: true
                }
        },
        computed:{
            armorDescription(){
                if (this.characterModel?.ac === null || typeof this.characterModel.ac === 'undefined'){
                    return 'undefined';
                }
                if (this.characterModel.ac > 6 ){
                    return 'weak';
                }
                if (this.characterModel.ac < 2){
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
                this.characterModel.ac = this.characterModel.ac - 1;
            }
        }

    }
   
</script>
