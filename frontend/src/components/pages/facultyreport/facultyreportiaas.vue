
<template>
    <div class="flex">
        <div class="flex flex-col h-screen p-3 bg-white shadow w-60 hidden">
            <div class="space-y-3">
                <div class="flex items-center">
                    <h2 class="text-xl font-bold">DNSC QCE </h2>
                </div>
                <div class="flex-1">
                    <ul class="pt-2 pb-4 space-y-1 text-sm">
                        <li class="rounded-sm">
                            <a
                                href="/"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>
  
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="rounded-sm">
                            <a
                                href="QCEReport"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                                    />
                                </svg>
  
                                <span>QCE Reports</span>
                            </a>
                        </li>
                        <li class="rounded-sm">
                            <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
  
                                <span>QCE Question</span>
                            </a>
                        </li>
                        <li class="rounded-sm  ">
                            <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
  
                                <span>Settings</span>
                            </a>
                        </li>
                        <li class="rounded-sm ">
                            <a
                                href="#"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                    />
                                </svg>
  
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-12">
          <div class="flex justify-between">
              <div class="mt-1 text-xl font-semibold text-gray-900">Esther Howard - Bachelor of Science and Information Technology</div>
              <div class="flex">
                 <div><a
                                href="QCEReportiaas"
                                class="flex items-center p-2 space-x-3 rounded-md"
                            ><button class="bg-green-500 p-2 pl-2 pr-2 ml-5 text-xs lg:text-lg"><span>Back Report</span></button></a></div>
                
              </div>
          </div>
<!-- 
          <div class="grid grid-cols-5 gap-6 mb-6 lg:grid-cols-5">
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-green-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-sm lg:text-xl font-semibold text-gray-900">
                        Students
                    </div>
                    <div class="text-xs lg:text-sm font-medium text-gray-500 truncate">
                      30%
                    </div>
                    </div>
                    <div class="mt-1 text-lg lg:text-3xl font-semibold text-gray-900">
                   25.6%<span class="text-sm font-medium text-green-500 truncate hidden">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-green-500 truncate line-fill rounded-sm">
                      s
                    </div>
                    
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-blue-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-sm lg:text-xl font-semibold text-gray-900">
                        Supervisor
                    </div>
                    <div class="text-xs lg:text-sm font-medium text-gray-500 truncate">
                        20%
                    </div>
                    </div>
                    <div class="mt-1 text-lg lg:text-3xl font-semibold text-gray-900">
                      20% <span class="text-sm font-medium text-green-500 truncate hidden">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-blue-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-orange-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-sm lg:text-xl font-semibold text-gray-900">
                        Peer
                    </div>
                    <div class="text-xs lg:text-sm font-medium text-gray-500 truncate">
                      20%
                    </div>
                    </div>
                    <div class="mt-1 text-lg lg:text-3xl font-semibold text-gray-900">
                      20% <span class="text-sm font-medium text-green-500 truncate hidden">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-orange-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-violet-500 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-sm lg:text-xl font-semibold text-gray-900">
                        Self
                    </div>
                    <div class="text-xs lg:text-sm font-medium text-gray-500 truncate">
                     20%
                    </div>
                    </div>
                    <div class="mt-1 text-lg lg:text-3xl font-semibold text-gray-900">
                      30% <span class="text-sm font-medium text-green-500 truncate hidden">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-violet-500 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
                <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div class="grid grid-rows-3 grid-flow-col gap-">
                  <div class="row-span-3 bg-blue-300 border rounded-md h-16 w-16 -mr-16"> </div>
                    <div class="mt-1 text-sm lg:text-xl font-semibold text-gray-900">
                        Total
                    </div>
                    <div class="text-xs lg:text-sm font-medium text-gray-500 truncate">
                     95%
                    </div>
                    </div>
                    <div class="mt-1 text-lg lg:text-3xl font-semibold text-gray-900">
                      95% <span class="text-sm font-medium text-green-500 truncate hidden">100%</span> 
                    </div>
                    <div class="text-sm font-medium bg-blue-300 truncate line-fill rounded-sm">
                      s
                    </div>
                </div>
            </div> -->
             <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div class="flex justify-between">
                    <div> <input type="text" placeholder="search" class="bg-gray-200 rounded-lg w-15 h-8" v-model="search"> </div>
                    <div><Button class="btn">Filter</Button></div>
                  </div>
                  <div class=" flex justify-center">
                    <table class="table-fixed">
                        <thead>
                          <tr>
                           
                            <th >Evaluators Name</th>
                            <th >Evaluator Type</th>
                            <th >Commitment <br> 20%</th>
                            <th >Knowledge of the subject matter <br> 20%</th>
                            <th >Teacher for independent learning <br> 30%</th>
                            <th>Management of Learnings <br> 30%</th>
                            <th ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(user, index) in filteredList" :key="index">
                           
                            <td>{{user.userevaluator.firstname}} {{user.userevaluator.lastname}} </td>
                            <td>{{user.evaluation_type.description}} </td>
                            <td>{{user.percent_commitment}} </td>
                            <td>{{user.percent_knowledge}} </td>
                            <td>{{user.percent_independent}} </td>
                            <td>{{user.percent_managenent}} </td>
                            <td><button v-on:click="viewDetails(user.rating_period.id, user.userevaluatee.id, user.userevaluator.id, user.evaluation_type.id)" class="bg-green-600 px-1 py-1 text-center">View</button></td>
                          </tr>
                          
                        </tbody>
                      </table>
                  </div>
              </div>
        </div>
       
    </div> 
  </template>
    <script>
  import axios from 'axios';
  export default {
    data(){
      return{
        search: '',
        users: [],
        percent:0,
        percenttwo:0
        }
    },
    computed: {
      filteredList() {
        return this.users.filter(user => user.userevaluator.firstname.includes(this.search));
      }
    },
  mounted(){
    this.getUsers();
  },
    methods: {
      getUsers(){
      const  evaluateeid = parseInt(this.$route.query.id);
      
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/evaluations/get-by-faculty-done/' + evaluateeid).then(res => {
        this.users = res.data;
        console.log(res.data);
      });

    },
    getScoreByevaluator(type,evaluatorid,evaluateeid,ratingid,typeid){
        
        var hehe = axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/scores/get-percentage-by-type/' + type + '/' + evaluatorid + '/' + evaluateeid + '/' + ratingid + '/' + typeid).then(res => {
          
        });
        var haha = 22;
        console.log(haha);
    },
      viewDetails(rating_period, evaluatee, evaluator, evaluation_type) {
            window.location.href = window.location.origin + '/view-evaluation-manager?ratingPeriod='+ rating_period + '&evaluatee=' + evaluatee + '&evaluator='+evaluator+'&evaluationType=' +evaluation_type;
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