// TODO: This almost certainly won't be the only screen, ultimately.  
// Create a shell that manages everything (godmode, buffdebuff, styling, etc.) and wrap this component in it.

<script setup>

import CharacterInfo from '../components/CharacterInfo.vue';
import SavingThrows from '../components/SavingThrows.vue';
import ArmorClass from '../components/ArmorClass.vue';
import { getDefaultCharacter } from '../models/CharacterModel.ts';
import { defineComponent } from 'vue';
</script>

<script>
export default defineComponent({
      data(){
        return {
          characterModel : {type: Object, default: null},
          buffDebuffMode : {type: Boolean, default: false},
          godEditMode: {type: Boolean, default: false}
        }
      },
      created(){
        this.loadInitialData();
      },
      mounted(){
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


<template>
  <main style="display:grid">
    <CharacterInfo :characterModel=characterModel :godEditMode="godEditMode" :buffDebuffMode="buffDebuffMode"></CharacterInfo>
    <SavingThrows :characterModel=characterModel></SavingThrows>
    <ArmorClass :characterModel=characterModel></ArmorClass>
  
    <h3>'{{ characterModel.characterInfo.characterName }}' the level {{characterModel.level}} {{ characterModel.characterInfo.race }} {{ characterModel.characterInfo.class.className }}, played by {{ characterModel.characterInfo.playerName }}.</h3>
    <br/>
    <button @click="reloadCharacterData">Reload Character</button>
  </main>
</template>

