<script setup>
defineProps({
  characterInfo:{
    type: Object,
    default: null,
    required: false
  }
})
</script>

<template>
  <div>
    <h2>Character Info</h2>
    <label>Character Name: </label><input type="text" v-model="characterInfo.CharacterName"/>
    <p><label>Player Name: </label><input type="text" v-model="characterInfo.PlayerName"/></p>
    <p><label>Race: </label><input type="text" v-model="characterInfo.Race"/></p>
    <p><label>Class: </label><input type="text" v-model="characterInfo.Class"/></p>
  </div>

  <h3>'{{ characterInfo.CharacterName }}' the {{ characterInfo.Race }} {{ characterInfo.Class }}, played by {{ characterInfo.PlayerName }}.</h3>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>

<script>
import { objectToString, propsToAttrMap } from '@vue/shared';

export default {
  setup() {
    
  },
  props:{
    name : {
      type: String, 
      default: 'Typhoid Mary'}
  },
  data(){
    return {
      coolbuddy: 'Venus'
    }
  }
}


</script>

