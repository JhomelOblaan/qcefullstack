<template>
    <div class="space-y-3">
              <div class="flex items-center">
                     <h2 class="text-xl font-bold">DNSC QCE </h2>
              </div>
              <div class="flex-1">
                  <ul class="pt-2 pb-4 space-y-1 text-sm">
                    
                      <li class="rounded-sm hover:bg-lime-200">
                          <a
                              href="/"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                          <Icon :name="'dashboard'"/>  

                              <span class="text-green-600">Dashboard</span>
                          </a>
                      </li>
                      <li>
                          <button @click="isHidden = !isHidden" type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <Icon :name="'files'"/>      
                            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Faculty Evaluation</span>
                            <Icon v-if="isHidden" :name="'chevron-down'"/>
                            <Icon v-else :name="'chevron-up'"/>

                          </button>
                          <ul id="dropdown-example" class=" py-2 space-y-2" v-show="!isHidden">
                            <li>
                              <a href="QCEReportiaas"
                                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-lime-200 dark:text-white dark:hover:bg-gray-700 pl-11">IAAS</a>
                            </li>
                            <li>
                              <a href="#"
                                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-lime-200 dark:text-white dark:hover:bg-gray-700 pl-11">ITED</a>
                            </li>
                            <li>
                              <a href="#"
                                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-lime-200 dark:text-white dark:hover:bg-gray-700 pl-11">ILEGG</a>
                            </li>
                            <li>
                              <a href="#"
                                class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-lime-200 dark:text-white dark:hover:bg-gray-700 pl-11">IC</a>
                            </li>
                          </ul>
                        </li>
          
                      
                      <li class="rounded-sm hover:bg-lime-200">
                          <a
                              href="Pdfreport"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                          <!--This icon in Component base-->
                       <Icon :name="'printer'"/>

                              <span>Print Reports</span>
                          </a>
                      </li>

                      
                      <li class="rounded-sm  hover:bg-lime-200">
                          <a
                              href="Commitment"
                              class="flex items-center p-2 space-x-3 rounded-md"
                          >
                          <!--This icon in Component base-->
                       <Icon :name="'question'"/>

                              <span>QCE Questions</span>
                          </a>

                      </li>
       
                  
                  </ul>
              </div>
          </div>
</template>

<script>
import Icon from '../../icon.vue'
  export default {
    components:{
    Icon
    },
    data(){
    return{isHidden:false}
  },
}
</script>