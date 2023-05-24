<script setup>
import CharacterInfo from '../components/CharacterInfo.vue'
import { getDefaultCharacter } from '../../models/CharacterModel.js'
</script>

<template>
  <main>
    <character-info :characterInfo=characterModel.CharacterInfo>{{ characterModel.CharacterInfo.CharacterName }}</character-info>
  </main>
</template>

<script>

export default {
  setup() {
    
  },
  data(){
    return {
      characterModel : null
    }
  },
  created(){
    this.characterModel = getDefaultCharacter();
  },
  methods:{

  }
}


</script>

