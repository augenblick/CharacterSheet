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
          characterModel : {type: Object, default: null}
        }
      },
      created(){
        this.loadInitialData();
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
  
    <h3>'{{ characterModel.characterInfo.characterName }}' the level {{characterModel.level}} {{ characterModel.characterInfo.race }} {{ characterModel.characterInfo.class }}, played by {{ characterModel.characterInfo.playerName }}.</h3>
    <br/>
    <button @click="reloadCharacterData">Reload Character</button>
  </main>
</template>



