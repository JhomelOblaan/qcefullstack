<template>
    <div class="flex justify-center">

        <div class="flex justify-center shadow border w-6/12 lg:w-8/12 min-h-max">
            <div class="w-12/12">
                <div class="flex justify-center ">
                     <img src="../../assets/pix/Capture.PNG" alt="Header" class="header" id="header">
                </div>
                <div class="flex justify-center"><p>___________________________________________________________________________________________________________________________________________________________</p></div>
                <div>
                    <div class="text-center" id="body-pdf">
                        <p class="mt-1 text-xl font-semibold text-gray-900">QUALITATIVE CONTRIBUTION (QCE) RESULTS</p>
                        <p class="mt-5 mb-5 font-semibold ">1st Semester, S.Y. 2022-2023</p>
                        <p class="mt-1 text-xl font-semibold text-gray-900">SUMMARY OF INDIVIDUAL QCE RATING</p>  
                    </div>
                    <div class="flex justify-center">
                        <table class="table-auto w-10/12 mt-2 mb-5">
                            <thead>
                                <tr >
                                    <td rowspan="2" class="border font-bold">No.</td>
                                    <td rowspan="2"  class="border font-bold ">Name of Faculty</td>
                                    <td  class="border font-bold">Self</td>
                                    <td  class="border font-bold">Peer</td>
                                    <td  class="border font-bold">Students</td>
                                    <td  class="border font-bold">Supervisor</td>
                                    <td rowspan="2"  class="border font-bold">Total</td>
                                    <td rowspan="2"  class="border font-bold ">Descriptive Rating</td>
                                    <td rowspan="2"  class="border font-bold">Qualitative Description</td>
                                </tr>
                                <tr>
                                    <th class="border font-bold">20%</th>
                                    <th class="border font-bold">20%</th>
                                    <th class="border font-bold"> 30%</th>
                                    <th class="border font-bold">30%</th>
                                </tr>

                            </thead>
                            <tbody v-for="(user, index) in this.users" :key="index">
                                <tr>
                                    <td class="border">1</td>
                                    <td class="border">{{user.firstname}} {{user.lastname}} </td>
                                    <td class="border">{{user.percent_self}}%</td>
                                    <td class="border">{{user.percent_peer}}%</td>
                                    <td class="border">{{user.percent_student}}%</td>
                                    <td class="border">{{user.percent_supervisor}}%</td>
                                    <td class="border">Outstanding</td>
                                  <td class="border">	The performance almost always exceeds the job requirements.
                                        The Faculty is an exceptional rotle model.</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                
                    
                </div>


                <div class="flex justify-center ">
                    <img src="../../assets/pix/CaptureFooter.PNG" alt="Header" class="header w-11/12">
                </div>
            </div>   
        </div>
     
       

    </div>
    
</template>

<script> 
import axios from 'axios'
import Sidebar from './navigation/sidebar.vue';            
import SidebarmobVue from './navigation/sidebarmob.vue';
import Icon from '../icon.vue'
import store from '../../store';

export default {
   
  components: {
    Sidebar,
    SidebarmobVue,
    Icon
    
  },
  methods: {
    view(){
      
    }
  },
  data(){
    return{
      isHidden:false,
      users: [],
      auth_user:1
      }
  },
  mounted(){
    this.getUsers();
  },
  methods:{
    getUsers(){
        const user = store.state.user;   
       if(!user){
          window.location.href =  window.location.origin + '/login'
        }
        let rating_id = 1
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/users/get-by-faculty-individual-rating/' + user.id + '/' + rating_id).then(res => {
            this.users = res.data;     
            console.log(res.data)   
      });   
    },
  }
}
</script>

<style> 
   p{
    margin: .2rem;
   }

   #header{
    width: 90%;
    margin-top: 1rem;
   }

   @max-width (820px){
    #header{
        width: 50%;
    }
   }
 
</style>