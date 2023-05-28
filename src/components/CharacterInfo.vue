<template>
  <div style="display:flex">

      

    <div :class="{buffDebuffInput: buffDebuffMode === true, godEditInput: godEditMode === true}">
      <ul>
        <li><h2>Character Info</h2></li>
        <li><label>Character Name: </label><InputField :inputType="'string'" :modelValue="characterModel.CharacterName" :disabled="disableInput"></InputField></li>
        <li><label>Player Name: </label><input type="text" v-model="characterModel.PlayerName" :disabled="disableInput"/><br /></li>
        <li><label>Race: </label><input type="text" v-model="characterModel.CharacterRace" :disabled="disableInput"/></li>
        <li><label>Class: </label>
        <select v-model="characterModel.CharacterClass" :disabled="disableInput">
          <option v-for="classOption in classOptions" :value="classOption" :key="classOption">{{ classOption.ClassName }}</option>
        </select></li>
        <li><label>Level: </label><input type="number" v-model="characterModel.Level" :disabled="disableInput"/></li>
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

  import { CharacterClass } from '../classes/CharacterModel';
  import InputField from './InputField.vue';
  

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
          new CharacterClass('Fighter', 'Warrior'),
          new CharacterClass('Druid', 'Priest'),
          new CharacterClass('Cleric', 'Priest'),
          new CharacterClass('Bard', 'Rogue'),
          new CharacterClass('Thief', 'Rogue'),
          new CharacterClass('Wizard', 'Wizard'),
          new CharacterClass('Paladin', 'Warrior'),
          new CharacterClass('Illusionist', 'Wizard')
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


  ul {
    padding-inline-start: 0px;
  }

  li {
    list-style-type: none;
  }

</style>
