<script setup>

import CharacterInfo from '../components/CharacterInfo.vue'
import { getDefaultCharacter } from '../models/CharacterModel.ts'
import { defineComponent } from 'vue'
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
    <CharacterInfo :characterInfo=characterModel.CharacterInfo></CharacterInfo>
  </main>
  <button @click="reloadCharacterData">Reload Character</button>
</template>



