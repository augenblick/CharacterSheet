<template>
    <div class="section-border">
        <table>
            <thead>
                <tr>
                    <!--<th v-for="key in Object.keys(itemList[0])" :key="key">{{ key }}</th>-->
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in itemList" :key="item.Name">
                    <td v-for="value in item" :key="value">{{ value }}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<style></style>



<script>

import { Item } from '../classes/ItemModels';

    export default{
        props:{
            itemList:{
                type: Array,
                required: true
                // Validator: 
            },
            characterModel:{
                type: Object,
                default: null,
                required: true
            }
        },
        computed:{
            disableInput(){
                return this.buffDebuffMode === false && this.godEditMode === false;
            }
        },
        mounted(){
            var x = this.itemList;
            console.log(this.itemList);
            
        }
    }


</script>