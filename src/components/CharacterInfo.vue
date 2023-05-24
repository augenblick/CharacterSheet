<template>
  <div>
    <h2>Character Info</h2>
    <label>Character Name: </label><input type="text" v-model="characterModel.characterInfo.characterName"/><br />
    <label>Player Name: </label><input type="text" v-model="characterModel.characterInfo.playerName"/><br />
    <label>Race: </label><input type="text" v-model="characterModel.characterInfo.race"/><br />
    <label>Class: </label>
    <select v-model="characterModel.characterInfo.class">
      <option v-for="classOption in classOptions" :value="classOption.value" :key="classOption.value">{{ classOption.value }}</option>
    </select>
    <label>Level: </label><input type="number" v-model="characterModel.level"/>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>

<script setup>
import { objectToString, propsToAttrMap } from '@vue/shared';

defineProps({
  characterModel:{
    type: Object,
    default: null,
    required: true
  }
})
</script>

<script>

  export default{
    data(){
      return{
        classOptions:[
          {value: 'Fighter'},
          {value: 'Druid'},
          {value: 'Cleric'},
          {value: 'Bard'},
          {value: 'Thief'},
          {value: 'Wizard'},
          {value: 'Paladin'},
          {value: 'Illusionist'},
        ]
      }
    }
  }

</script>
