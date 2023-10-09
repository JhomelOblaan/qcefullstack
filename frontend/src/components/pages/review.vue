<template>
<div class="flex justify-center">
  <div class="w-10/12 lg:w-8/12">
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
          <div class="step-bubble-active">
            <div class="count">6</div>
          </div>
          <div class="step-label">Review</div>
        </li>
      </ul>
    </div>
  </div>
  <div> <div class="stepper-content">
    
    <div class="stepper-panel">
      <div class="font-semibold">Review and Submit</div>
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
        <input type="hidden" v-model="id">
        <textarea v-model="comment" class="border rounded-sm" >

        </textarea> 
          <div class="next">
            <button class=" btn button-next " @click="submitCommentForm">Submit</button>

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
      inputValue1:'',
      inputValue2:'',
      inputValue3:'',
      inputValue4:'',
      inputValue5:'',
      notice:'',
      comment:'',
      id:'',
      }
  },
  mounted(){
    this.getCommitments();
  },
  methods:{
    getCommitments(){
      
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores/review-all-scores/'+store.state.user.id+'/'+this.$route.query.evaluatee+'/'+this.$route.query.ratingPeriod+'/'+this.$route.query.evaluationType).then(res => {
        this.commitments = res.data;
        console.log(res);        
      });
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/comments/review-all-comments/'+store.state.user.id+'/'+this.$route.query.evaluatee+'/'+this.$route.query.ratingPeriod+'/'+this.$route.query.evaluationType).then(res => {
        this.comment = res.data.comment;
        this.id = res.data.id;
        console.log(res.data);        
      });

    },
   chose(score,index,qid) {
   
      if (score == 5) {

      document.getElementById('index5'+index).classList.add('active');
        document.getElementById('index4'+index).classList.remove('active');
        document.getElementById('index3'+index).classList.remove('active');
        document.getElementById('index2'+index).classList.remove('active');
        document.getElementById('index1'+index).classList.remove('active');
      } else if (score == 4) {
        document.getElementById('index4'+index).classList.add('active');
        document.getElementById('index5'+index).classList.remove('active');
        document.getElementById('index3'+index).classList.remove('active');
        document.getElementById('index2'+index).classList.remove('active');
        document.getElementById('index1'+index).classList.remove('active');
      } else if (score == 3) {
        document.getElementById('index3'+index).classList.add('active');
        document.getElementById('index4'+index).classList.remove('active');
        document.getElementById('index5'+index).classList.remove('active');
        document.getElementById('index2'+index).classList.remove('active');
        document.getElementById('index1'+index).classList.remove('active');
      } else if (score == 2) {
        document.getElementById('index2'+index).classList.add('active');
        document.getElementById('index4'+index).classList.remove('active');
        document.getElementById('index3'+index).classList.remove('active');
        document.getElementById('index5'+index).classList.remove('active');
        document.getElementById('index1'+index).classList.remove('active');
      } else {
        document.getElementById('index1'+index).classList.add('active');
        document.getElementById('index4'+index).classList.remove('active');
        document.getElementById('index3'+index).classList.remove('active');
        document.getElementById('index2'+index).classList.remove('active');
        document.getElementById('index5'+index).classList.remove('active');
      }
    
      if (index == 5) {
        this.inputValue5 = score;
      } else if (index == 4) {
        this.inputValue4 = score;
      } else if (index == 3) {
        this.inputValue3 = score;
      } else if (index == 2) {
        this.inputValue2 = score;
      } else {
        this.inputValue1 = score;
      }
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
        if (!this.inputValue1 || !this.inputValue2 || !this.inputValue3 || !this.inputValue4 || !this.inputValue5) {
            this.notice = "*Please review, there might be some questions that you did not answer";
             window.scrollTo(0,0);
             return;
        } else {
          window.location.href = window.location.origin + '/Management?ratingPeriod='+ this.$route.query.ratingPeriod +'&evaluatee='+this.$route.query.evaluatee+'&evaluationType='+this.$route.query.evaluationType;
        }
    },
     submitCommentForm() {
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
      const status_data = {
                            "status": true
                        };
      
      axios.patch(import.meta.env.VITE_VUE_APP_BASE_URL + '/comments/' + this.id, data).then(res1 => { 
        axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/evaluations/check-if-exist/'+evaluatee+'/'+store.state.user.id+'/'+ratingPeriod+'/'+evaluationType).then(res2 => {
          axios.patch(import.meta.env.VITE_VUE_APP_BASE_URL + '/evaluations/' + res2.data.id, status_data).then(res3 => { 
      
              alert("Your evaluation is submitted");  
               window.location.href = window.location.origin;
      
            }); 
        });
      
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