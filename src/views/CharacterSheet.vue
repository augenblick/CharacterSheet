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
          buffDebuffMode : false,
          godEditMode: false
        }
      },
      created(){
        this.loadInitialData();
      },
      mounted(){
        document.addEventListener('keydown', (event) =>{
          console.log(event);
          if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !(event.code === 'ControlLeft')){
            this.buffDebuffMode = true;
          }
          if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.code === 'ControlLeft'){
            this.godEditMode = true;
          }
        });
        document.addEventListener('keyup', (event) =>{
          console.log(event);
          if (event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
            this.buffDebuffMode = false;
            this.godEditMode = false;
          }
          if (event.code === 'ControlLeft'){
            this.godEditMode = false;
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
  <main>
    <CharacterInfo :characterModel=characterModel></CharacterInfo>
    <SavingThrows :characterModel=characterModel></SavingThrows>
    <ArmorClass :characterModel=characterModel></ArmorClass>
  
    <h3>'{{ characterModel.characterInfo.characterName }}' the level {{characterModel.level}} {{ characterModel.characterInfo.race }} {{ characterModel.characterInfo.class.className }}, played by {{ characterModel.characterInfo.playerName }}.</h3>
    <br/>
    <button @click="reloadCharacterData">Reload Character</button>
    <div class="tiny">buffDebuffMode: {{ buffDebuffMode }}</div>
    <div class="tiny">godEditMode: {{ godEditMode }}</div>
  </main>
</template>

<style scoped>
.tiny{
  font-size:x-small;
}
</style>

