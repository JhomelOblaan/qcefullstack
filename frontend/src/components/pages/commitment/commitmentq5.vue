
<template>
<div class="flex justify-center">
  <div class="w-10/12  lg:w-8/12">
  <div>
    <div class="steps-container">
      <Steppercom />
      <Stepperq5 />
  </div>
  </div>
  <div>
    
  <div class="stepper-content">
  
  <div class="stepper-panel">
    <div class="py-5">A. Commitment</div>
  </div>
    <div class="stepper-panels py-8">
        <p class="notice" id="notice" v-html="notice"></p>
      <div class="stepper-quest ">
       
        <p class="font-semibold">5. Keeps accurate record of students’ performance and prompt submission of the same.</p>
        
        <div class="buttons">
        <button :id="[`index5`]" v-on:click="chose(5, 5, 5)" class="">5. Outstanding</button>
        <button :id="[`index4`]" v-on:click="chose(4, 5, 5)" class="">4. Very Satisfaction</button>
        <button :id="[`index3`]" v-on:click="chose(3, 5, 5)" class=""> 3. Satisfaction</button>
        <button :id="[`index2`]" v-on:click="chose(2, 5, 5)" class="">2. Fair</button>
        <button :id="[`index1`]" v-on:click="chose(1, 5, 5)" class="">1. Poor</button>

        </div>
        
     
        
      </div> 
      <div class=" ml-5 mt-10">
           <!--<div class="Preview">
            <a href="/Commitmentq4"><button class=" btn button-next ">Preview</button></a> 
             </div>
        --> 
          <div class="next">
            <!-- <a href="/Knowledge"><button class=" btn button-next ">Next</button></a>  -->
            <button class=" btn button-next " @click="submitForm">Next</button> 
          </div>
        </div>
    </div>
    
</div>
  </div>
  </div>
</div>

  <div class="">

  </div>

</template>
<script>
import axios from 'axios'
import Steppercom from '../Stepper/steppercom.vue'
import Stepperq5 from '../Stepper/stepperq5.vue'
import store from '../../../store';
export default {
  data() {
    return {
      inputValue1: '',
      notice: '*Please review, there might be some questions that you did not answer',
    }
  },
 components:{
  Steppercom,
  Stepperq5
 },
  methods:{

   chose(score,index,qid) {
        
      if (score == 5) {

      document.getElementById('index5').classList.add('active');
        document.getElementById('index4').classList.remove('active');
        document.getElementById('index3').classList.remove('active');
        document.getElementById('index2').classList.remove('active');
        document.getElementById('index1').classList.remove('active');
      } else if (score == 4) {
        document.getElementById('index4').classList.add('active');
        document.getElementById('index5').classList.remove('active');
        document.getElementById('index3').classList.remove('active');
        document.getElementById('index2').classList.remove('active');
        document.getElementById('index1').classList.remove('active');
      } else if (score == 3) {
        document.getElementById('index3').classList.add('active');
        document.getElementById('index4').classList.remove('active');
        document.getElementById('index5').classList.remove('active');
        document.getElementById('index2').classList.remove('active');
        document.getElementById('index1').classList.remove('active');
      } else if (score == 2) {
        document.getElementById('index2').classList.add('active');
        document.getElementById('index4').classList.remove('active');
        document.getElementById('index3').classList.remove('active');
        document.getElementById('index5').classList.remove('active');
        document.getElementById('index1').classList.remove('active');
      } else {
        document.getElementById('index1').classList.add('active');
        document.getElementById('index4').classList.remove('active');
        document.getElementById('index3').classList.remove('active');
        document.getElementById('index2').classList.remove('active');
        document.getElementById('index5').classList.remove('active');
      }
    
      
    this.inputValue1 = score;
      
    const  ratingPeriod = parseInt(this.$route.query.ratingPeriod);
    const  evaluatee = parseInt(this.$route.query.evaluatee);
    const  evaluationType = parseInt(this.$route.query.evaluationType);
       
const scoredata = {"eval_score": score,
    "userevaluator": store.state.user.id,
    "userevaluatee": evaluatee,
    "rating_period": ratingPeriod,
    "question": qid,
    "evaluation_type": evaluationType};

    this.storee(scoredata);
    },
    storee(scoredata){
          
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores/check-if-exist/'+scoredata.question+'/'+scoredata.userevaluator+'/'+scoredata.userevaluatee+'/'+scoredata.rating_period+'/'+scoredata.evaluation_type).then(res => {
        
      
        if (!res.data.id) {
          //  if wala iadd
           axios.post(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores', scoredata).then(res => {   
            });
        } else {
          //  if wala iupdate
                axios.patch(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores/'+ res.data.id, scoredata).then(res => {   
            });
            
        } 
      
      });
    },
    submitForm() {
        if (!this.inputValue1) {
            this.notice = "*Please review, there might be some questions that you did not answer";
            document.getElementById("notice").style.display = "block";
             window.scrollTo(0,0);
      // alert(this.notice);
             
             return;
        } else {
          window.location.href = window.location.origin + '/Knowledge?ratingPeriod='+ this.$route.query.ratingPeriod +'&evaluatee='+this.$route.query.evaluatee+'&evaluationType='+this.$route.query.evaluationType;
        }
    },
  }
}

</script>
