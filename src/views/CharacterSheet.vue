// TODO: This almost certainly won't be the only screen, ultimately.  
// Create a shell that manages everything (godmode, buffdebuff, base styling, etc.) and wrap this component in it.

<template>
  <main style="display:grid" :class="{buffDebuffInput: buffDebuffMode === true, godEditInput: godEditMode === true}">
    <CharacterInfo :characterModel="characterModel" :godEditMode="godEditMode" :buffDebuffMode="buffDebuffMode"></CharacterInfo>
    <Inventory :characterModel="characterModel" :godEditMode="godEditMode" :buffDebuffMode="buffDebuffMode" :itemList="itemList"></Inventory>
    <SavingThrows :characterModel=characterModel></SavingThrows>
    <ArmorClass :characterModel=characterModel></ArmorClass>
  
    <h3>'{{ characterModel.CharacterName }}' the level {{characterModel.Level}} {{ characterModel.CharacterRace }} {{ characterModel.CharacterClass.ClassName }}, played by {{ characterModel.PlayerName }}.</h3>
    <br/>
    <button @click="reloadCharacterData">Reload Character</button>
  </main>
</template>



<script setup>

import CharacterInfo from '../components/CharacterInfo.vue';
import SavingThrows from '../components/SavingThrows.vue';
import ArmorClass from '../components/ArmorClass.vue';
import Inventory from '../components/Inventory.vue';
import { getDefaultCharacter, Character } from '../classes/CharacterModel.ts';
import { defineComponent } from 'vue';
import { getItems } from '../DataAccess';
import { Item } from '../classes/ItemModels'

</script>

<script>
export default defineComponent({
      data(){
        return {
          characterModel : {type: Character, default: null},
          buffDebuffMode : false,
          godEditMode: false,
          itemList: {type: Array}
        }
      },
      created(){
        this.loadInitialData();
      },
      mounted(){
        this.itemList = getItems();
        console.log('..............');
        console.log(this.itemList);
		// godMode, buffDebuffMode
		// TODO: this could probably be cleaned up
    // TODO: using shift is mucking this up...
    // TODO: keyup not registering if dropdown is clicked
        document.addEventListener('keydown', (event) =>{
			if (((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.ctrlKey) || ((event.code === 'ControlLeft' || event.code === 'ControlRight') && event.shiftKey)){
				this.godEditMode = true;
				this.buffDebuffMode = false;
			}
			else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
				this.buffDebuffMode = true;
			}
        });
        document.addEventListener('keyup', (event) =>{
          if (event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
            this.buffDebuffMode = false;
            this.godEditMode = false;
          }
          if (!event.ctrlKey){
            this.godEditMode = false;
            if (event.shiftKey){
              this.buffDebuffMode = true;
            }
          }
        });
      },
      methods:{
        loadInitialData(){
          this.characterModel = getDefaultCharacter();
        },
        reloadCharacterData(){
          this.characterModel = getDefaultCharacter();
        }
      }
  })
</script>

<style scoped>
.buffDebuffInput input:not(:disabled) {
    text-shadow:1cap;
    color:rgb(51, 131, 62);
  }
  .godEditInput input:not(:disabled){
    text-shadow:1cap;
    color:rgb(207, 155, 76);
  }
</style>

