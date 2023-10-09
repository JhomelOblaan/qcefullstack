<template>
<div class="flex justify-center">
  <div class="w-10/12 lg:w-6/12">
  <div>
    <div class="steps-container">
      
    </div>
  </div>
  <div> <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="font-semibold">View Evaluation</div>
    </div>
      <div class="stepper-panels">
        <div class="stepper-quest" v-for="(question, index) in this.commitments" :key="index">
          <p>{{index + 1}}. {{question.question.description}}.</p>
         
          <div class="buttons" v-if="question.eval_score == 5">

          <button class="active" :id="[`index5${index+1}`]" v-on:click="chose(5,index+1, question.question.id)">5. Outstanding </button>
          <button class="" :id="[`index4${index+1}`]" v-on:click="chose(4,index+1, question.question.id)">4. Very Satisfaction</button>
          <button class="" :id="[`index3${index+1}`]" v-on:click="chose(3,index+1, question.question.id)">3. Satisfaction</button>
          <button class="" :id="[`index2${index+1}`]" v-on:click="chose(2,index+1, question.question.id)">2. Fair</button>
          <button class="" :id="[`index1${index+1}`]" v-on:click="chose(1,index+1, question.question.id)">1. Poor</button>
          </div>
          
          <div class="buttons" v-else-if="question.eval_score == 4">

          <button class="" :id="[`index5${index+1}`]" v-on:click="chose(5,index+1, question.question.id)">5. Outstanding </button>
          <button class="active" :id="[`index4${index+1}`]" v-on:click="chose(4,index+1, question.question.id)">4. Very Satisfaction</button>
          <button class="" :id="[`index3${index+1}`]" v-on:click="chose(3,index+1, question.question.id)">3. Satisfaction</button>
          <button class="" :id="[`index2${index+1}`]" v-on:click="chose(2,index+1, question.question.id)">2. Fair</button>
          <button class="" :id="[`index1${index+1}`]" v-on:click="chose(1,index+1, question.question.id)">1. Poor</button>
          </div>
         
          <div class="buttons" v-else-if="question.eval_score == 3">

          <button class="" :id="[`index5${index+1}`]" v-on:click="chose(5,index+1, question.question.id)">5. Outstanding </button>
          <button class="" :id="[`index4${index+1}`]" v-on:click="chose(4,index+1, question.question.id)">4. Very Satisfaction</button>
          <button class="active" :id="[`index3${index+1}`]" v-on:click="chose(3,index+1, question.question.id)">3. Satisfaction</button>
          <button class="" :id="[`index2${index+1}`]" v-on:click="chose(2,index+1, question.question.id)">2. Fair</button>
          <button class="" :id="[`index1${index+1}`]" v-on:click="chose(1,index+1, question.question.id)">1. Poor</button>
          </div>
         
          <div class="buttons" v-else-if="question.eval_score == 2">

          <button class="" :id="[`index5${index+1}`]" v-on:click="chose(5,index+1, question.question.id)">5. Outstanding </button>
          <button class="" :id="[`index4${index+1}`]" v-on:click="chose(4,index+1, question.question.id)">4. Very Satisfaction</button>
          <button class="" :id="[`index3${index+1}`]" v-on:click="chose(3,index+1, question.question.id)">3. Satisfaction</button>
          <button class="active" :id="[`index2${index+1}`]" v-on:click="chose(2,index+1, question.question.id)">2. Fair</button>
          <button class="" :id="[`index1${index+1}`]" v-on:click="chose(1,index+1, question.question.id)">1. Poor</button>
          </div>
         
          <div class="buttons" v-else>

          <button class="" :id="[`index5${index+1}`]" v-on:click="chose(5,index+1, question.question.id)">5. Outstanding </button>
          <button class="" :id="[`index4${index+1}`]" v-on:click="chose(4,index+1, question.question.id)">4. Very Satisfaction</button>
          <button class="" :id="[`index3${index+1}`]" v-on:click="chose(3,index+1, question.question.id)">3. Satisfaction</button>
          <button class="" :id="[`index2${index+1}`]" v-on:click="chose(2,index+1, question.question.id)">2. Fair</button>
          <button class="active" :id="[`index1${index+1}`]" v-on:click="chose(1,index+1, question.question.id)">1. Poor</button>
          </div>
        </div>
              <textarea v-model="comment" class="border rounded-sm" >

        </textarea> 
          <div class="next">
            <button class=" btn button-next " @click="goBack">Back</button> 
          </div>
      </div>
      
  </div></div>
  </div>
</div>

  </template>
  <script>
import axios from 'axios'
import store from '../../store';
export default {
 
  name: 'commitment,',
  data() {
    return {
      commitments: [],
      nextPage: '',
      comment: '',
      }
  },
  mounted(){
    this.getCommitments();
  },
  methods:{
    getCommitments(){
      
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores/review-all-scores/'+this.$route.query.evaluator+'/'+this.$route.query.evaluatee+'/'+this.$route.query.ratingPeriod+'/'+this.$route.query.evaluationType).then(res => {
        this.commitments = res.data;
        console.log(res);        
      });
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/comments/review-all-comments/'+this.$route.query.evaluator+'/'+this.$route.query.evaluatee+'/'+this.$route.query.ratingPeriod+'/'+this.$route.query.evaluationType).then(res => {
        this.comment = res.data.comment;
        this.id = res.data.id;
        console.log(res.data);        
      });

    },
    goBack() {
        this.$router.go(-1)
      }
  }
}

</script>
 
  <style>
  .steps-container{
    width: 90%;
    margin: 3rem;
  }
  .steps-list{
    display: flex;
    list-style: none;
  }
  .step{
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    height: 60px;
  }
  .step-last{
    display: flex;
    align-items: center;
    max-width: 100%;
    position: relative;
    height: 60px;
  }
  .step-bubble{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border:1px solid;
    border-color: gray;
    background-color: white;
    transition:all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .step-bubble-active{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border:1px solid;
    border-color: green;
    background-color: green;
    transition:all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .step-label{
  color: black;
  font-size: 15px;
  position: absolute;
  margin-top: 7rem;
  opacity: .3;
  }
  .step-line{
    width: 100%;
    height: 5px;
    background-color: gray;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10;
  }
  .step-line-active{
    width: 100%;
    height: 5px;
    background-color: green;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -10;
  }
  
  
  
  .stepper-panel{
      color: #333;
      border: solid 1px;
      margin:5rem;
      border-radius: 3px;
      border-color: #c7c3c3;
      border-bottom: none;
      padding: 5px;
      
  }
  
  
  .stepper-panels{
      color: #333;
      border: solid 1px;
      margin:5rem;
      border-radius: 3px;
      border-color: #c7c3c3;
      margin-top: -5rem;
  }
  .stepper-quest{
    margin: 2rem;
    font-size: 18px;
  }
  button{
    width: 90%;
    border: solid 1px;
    border-radius: 3px;
    margin-bottom: 4px;
    text-align: left;
    padding-left: 2rem;
  }
  
  p{
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .next{
    direction: rtl;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
  button:hover{
  background-color: rgb(121, 207, 121);
}
  </style>