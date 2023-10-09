
<template>
    <div class="flex">
      <Sidebarmob />
        <div class="container mx-auto mt-12">
              <div class="grid grid-cols-2 gap-6 mb-6 lg:grid-cols-4">

              </div>
              <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="flex justify-between bg-gray-200 py-3 rounded-lg">
                    
                    <div class="flex  w-15 h-8 bg-white ml-4 mt-1 rounded-lg"> 
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="ml-5"><rect width="256" height="256" fill="none"/><circle cx="116" cy="116" r="84" fill="none" stroke="#004" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"/></svg>
  
                      <input type="text" placeholder="Search"  class="rounded-lg pr-16 text-lg pl-2 tex" v-model="search"> </div>
                    <div class=""><Button class="btn mr-4"> <a :href="'/user/create'">Create</a></Button></div>
                  </div>
                  <div class=" flex justify-center">
                    <table class="table-fixed">
                        <thead>
                          <tr>
                            <th >Full Name</th>
                            <th >User Name</th>
                            <th >Email Name</th>
                              <th > Edit </th>
                              <th></th>
                          </tr>
                          
                        </thead>
                        <tbody>
                          
                          <tr v-for="(user, index) in filteredList" :key="index">
                            
                            <td>{{user.firstname}} {{user.lastname}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td><button v-on:click="editUser(user.id)" class="bg-green-600 px-1 py-1 text-center">Edit</button> </td>
                          </tr>
                         
                        </tbody>
                      </table>
                  </div>
              </div>
        </div>
    </div> 
  
  
  </template>
  <script>
  import Icon from '../../icon.vue'  
  import Sidebarmob from '../navigation/sidebarmob.vue';              
  import axios from 'axios';
  export default {
    data(){
      return{
        search: '',
        isHidden:false,
        users: [],
        }
    },
    components: {
      Icon,
      Sidebarmob
    },
    computed: {
      filteredList() {
        return this.users.filter(user => user.firstname.includes(this.search)  );
      }
    },
  mounted(){
    this.getRatingPeriods();
  },
    methods: {
      getRatingPeriods(){
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/users').then(res => {
        console.log(res.data);
        this.users = res.data;
      });

    },
      view(){
        
      },
      editUser(id) {
            window.location.href = window.location.origin + '/user/edit?id='+ id;
      },
    }
  }
  </script>
  
  <style>
  .line-fill{
    width: 100%;
    height: 5px;
  }
  table {
    width: 100%;
    text-align: center;
    
  }
  table th{
    text-align: center;
    border-bottom: solid 1px;
    border-color:rgb(227, 227, 227);
  }
  table tr{
    border-bottom: solid 1px;
    border-color:rgb(227, 227, 227);
  }
  table td{
    padding: 1rem;
    align-content: right;
  }
  
  
  </style>
  