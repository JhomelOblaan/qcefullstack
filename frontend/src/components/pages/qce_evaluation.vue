<script setup>
  import {ref} from 'vue';
  import Response from './response_form.vue'
  const stepProgress = ref();

const dataSteps ={
  steps:['Steps 1', 'Steps 2', 'Steps 3', 'Step 4', 'Step 5', 'Step 6'],
  currentStep: 1,
  activeColor:'#65a30d',
  passiveColor:'#84cc16',
};
</script>
<template>
  <Response :data="dataSteps" ref="stepProgress"/>
  <div></div>
  
  <div class="flex justify-between mr-5 ml-5 mt-10">
    <div class="btn button-prev">
    <button @click="stepProgress.previousStep" :disabled="dataSteps== 'Steps 1'">Previous </button>
  </div>

  <div class=" btn button-next bg-green-500">
    <button @click="stepProgress.nextStep" :disabled="dataSteps=='Steps 6'">Next</button>
  </div>
  </div>
</template>



