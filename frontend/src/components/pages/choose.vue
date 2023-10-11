<template>
  <div >
    <div v-if="!isMobile()" >
      <review/>
      </div>
      <!-- <commitmentq2/>
      <commitmentq3/>
      <commitmentq4/>
      <commitmentq5/> -->
      <div v-else>
    
       <commitment/>
    </div>
  </div>

</template>
<script>
import commitment from './commitment/commitment.vue';
// import commitmentq2 from './commitment/commitmentq2.vue';
// import commitmentq3 from './commitment/commitmentq3.vue';
// import commitmentq4 from './commitment/commitmentq4.vue';
// import commitmentq5 from './commitment/commitmentq5.vue';
import review from '../pages/review.vue';

export default{
  methods:{
    isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }
  },
  components:{
  commitment,
  // commitmentq2,
  // commitmentq3,
  // commitmentq4,
  // commitmentq5,
  review
 }
}
</script>