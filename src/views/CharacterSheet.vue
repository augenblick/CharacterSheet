<script setup>

import CharacterInfo from '../components/CharacterInfo.vue'
import { getDefaultCharacter } from '../models/CharacterModel.ts'
import { defineComponent } from 'vue'
</script>

<script>
export default defineComponent({
      data(){
        return {
          characterModel : null
        }
      },
      created(){
        this.loadInitialData();
      },
      methods:{
        loadInitialData(){
          this.characterModel = getDefaultCharacter();
        }
      }
  })
</script>


<template>
  <main>
    <CharacterInfo :characterInfo=characterModel.CharacterInfo>{{ characterModel.CharacterInfo.CharacterName }}</CharacterInfo>
  </main>
</template>



