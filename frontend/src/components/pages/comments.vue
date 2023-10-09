<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12 ">
  <div><div class="steps-container">
      <ul class="steps-list">
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">1</div>
          </div>
          <div class="step-label ">Commitment</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">2</div>
          </div>
          <div class="step-label ">Knowledge of the subject matter</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">3</div>
          </div>
          <div class="step-label ">Teacher for independent learning</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">4</div>
          </div>
          <div class="step-label ">Management of Learnings</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step">
          <div class="step-bubble-active">
            <div class="count">5</div>
          </div>
          <div class="step-label ">Comments</div>
          <div class="step-line-active">
                <div class="line-fill">
                </div>
          </div>
        </li>
        <li class="step-last">
          <div class="step-bubble">
            <div class="count">6</div>
          </div>
          <div class="step-label">Review</div>
        </li>
      </ul>
    </div></div>
  <div>
    
    <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="font-semibold">Comments/Suggestion</div>
    </div>
      <div class="stepper-panels">
        <textarea v-model="comment" class="border rounded-sm" >

        </textarea>
        <div class="flex justify-between ml-4 mr-4">
        <div><a href="/Managementq5"><button class=" btn button-next " >Preview</button></a> </div>
        <div> <button class=" btn button-next " @click="submitForm">Next</button> </div>
        </div>
        </div>
      </div>
      
  </div>
  </div>
</div>

  </template>
   
<script>
import axios from 'axios'
import { ref } from 'vue'
import store from '../../store';
export default {
 
  data() {
    return {
      comment:'',
    }
  },
  mounted(){
   
  },
  methods:{
    
    submitForm() {
        const  ratingPeriod = parseInt(this.$route.query.ratingPeriod);
    const  evaluatee = parseInt(this.$route.query.evaluatee);
    const  evaluationType = parseInt(this.$route.query.evaluationType);
             
      const data = {
                    "userevaluator": store.state.user.id,
                    "userevaluatee": evaluatee,
                    "rating_period": ratingPeriod,
                    "evaluation_type": evaluationType,
                    "comment": this.comment
                  };

           axios.post(import.meta.env.VITE_VUE_APP_BASE_URL + '/comments', data).then(res => {   
            window.location.href = window.location.origin + '/Review?ratingPeriod='+ this.$route.query.ratingPeriod +'&evaluatee='+this.$route.query.evaluatee+'&evaluationType='+this.$route.query.evaluationType;

            });
    },
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
  margin-top: 5rem;
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
  
  button{
    width: 90%;
    border: solid 1px;
    border-radius: 10x;
    margin-bottom: 4px;
    text-align: left;
    padding-left: 2rem;
  }
  .button-next{
    background-color:#16A34A;
    color: white;
    border-radius: 20px;
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
  textarea{
    width: 80%;
    height: 20rem;
    margin: 4rem;
    border: solid 1px;
  }
  </style>