<template>
  <div style="display:flex">

      

    <div :class="{buffDebuffInput: buffDebuffMode === true, godEditInput: godEditMode === true}">
      <ul>
        <li><h2>Character Info</h2></li>
        <li><label>Character Name: </label><input type="text" v-model="characterModel.characterInfo.characterName" :disabled="disableInput"/></li>
        <li><label>Player Name: </label><input type="text" v-model="characterModel.characterInfo.playerName" :disabled="disableInput"/><br /></li>
        <li><label>Race: </label><input type="text" v-model="characterModel.characterInfo.race" :disabled="disableInput"/></li>
        <li><label>Class: </label>
        <select v-model="characterModel.characterInfo.class" :disabled="disableInput">
          <option v-for="classOption in classOptions" :value="classOption.value" :key="classOption.value">{{ classOption.value.className }}</option>
        </select></li>
        <li><label>Level: </label><input type="number" v-model="characterModel.level" :disabled="disableInput"/></li>
      </ul>
    </div>
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
    },
    godEditMode:{
    type: Boolean,
    default: false,
    required: true
    },
    buffDebuffMode:{
    type: Boolean,
    default: false,
    required: true
    }
  })
</script>

<script>

  export default{
    data(){
      return{
        classOptions:[
          {value: {className:'Fighter', classGroup:'Warrior'}},
          {value: {className:'Druid', classGroup:'Priest'}},
          {value: {className:'Cleric', classGroup:'Priest'}},
          {value: {className:'Bard', classGroup:'Rogue'}},
          {value: {className:'Thief', classGroup:'Rogue'}},
          {value: {className:'Wizard', classGroup:'Wizard'}},
          {value: {className:'Paladin', classGroup:'Warrior'}},
          {value: {className:'Illusionist', classGroup:'Wizard'}},
        ]
      }
    },
    computed:{
      disableInput(){
        return this.buffDebuffMode === false && this.godEditMode === false;
      }
    }
  
  
  
  
  }

</script>

<style>
  .buffDebuffInput input:not(:disabled) {
    text-shadow:1cap;
    color:rgb(51, 131, 62);
  }
  .godEditInput input:not(:disabled){
    text-shadow:1cap;
    color:rgb(207, 155, 76);
  }

  li {
    list-style-type: none;
  }

</style>
