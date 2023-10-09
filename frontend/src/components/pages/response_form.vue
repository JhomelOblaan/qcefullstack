<script>
export default {
  data: ()=> {
  return {
      Outstanding : true,
      VerySatisfaction: true,
      Satisfaction :true,
      Fair: true,
      Poor: true
  }
}
}


</script>
<template>
<div class="flex justify-center">
  
    
  <div class="stepper-content">
  
  <div class="stepper-panel">
    <div class="">A. Commitment</div>
  </div>
    <div class="stepper-panels">
      <div class="stepper-quest">
        <p>1. Demonstrates sensitivity to student’s ability to attend and absorb content information.</p>
        
      <div class="buttons" id="myForm">
       
    <button @click=" Outstanding = !Outstanding">5. <label >Outstanding</label></button><br>
    <button  @click=" VerySatisfaction = !VerySatisfaction">4. <label >Very Satisfaction </label></button><br>
    <button  @click=" Satisfaction = !Satisfaction"> 3. <label >Satisfaction</label></button><br>
    <button @click=" Fair = !Fair" >2. <label >Fair</label></button><br>
    <button   @click=" Poor = !Poor">1. <label >Poor</label></button><br>

    <button>Success</button>

        {{ choose }}
       
        <div v-if="!Outstanding">Outstanding</div>
        <div v-else-if="!VerySatisfaction" >VerySatisfaction</div>
        <div v-else-if="!Satisfaction" >Satisfaction</div>
        <div v-else-if="!Fair" >Fair</div>
        <div v-else-if="!Poor" >Poor</div>
        
    
    </div>
      </div> 
        <div class="next">
         <a href=""><button class=" btn button-next ">Next</button></a> 
        </div>
    </div>
</div>
  </div>
  

</template>
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