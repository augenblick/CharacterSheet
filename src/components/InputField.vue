<template>
    <span v-if="inputType === 'string'">
        <input type="text" :disabled="disableInput" @update="fieldUpdate()" :value="modelValue"/>
    </span>
    <div v-if="inputType === 'int'">
        <input type="number" :disabled="disableInput" @update="fieldUpdate" :v-model="model"/>
    </div>
</template>


<script>
    // import { NumberField } from '../classes/Fields';

    export default {  
        
        props:{
            inputType:{
                Type: String,
                default: 'string',
                required: true
            },
            modelValue:{
                type:String,
                required: true
            },
            emits:[
                'update:model'
            ]
        },
        methods:{
            fieldUpdate(event){
                debugger;
                console.log(event);
                model = value
            }
        }

    }
</script>


