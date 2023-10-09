<template>
  <div class="submit-form border ">     
    <div v-if="!submitted" class="pl-5 pr-5">
      <div class="form-group">
        <label for="description" class="">Description</label>
        <textarea id="description"
          required
          v-model="tutorial.description"
          name="description" rows="4" class="form-control
        block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
      </div>
      <div class="flex mt-3 justify-between">
      <button @click="saveTutorial" class="btn btn" style="background-color: green; color: white;">Submit</button>
      <button @click="backRating" class="btn btn ">Back</button>
      </div>
   
    </div>
    

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        rating_period: this.tutorial.description,
      };
      // console.log(import.meta.env.VITE_VUE_APP_BASE_URL);
      // alert(data);
           axios.post(import.meta.env.VITE_VUE_APP_BASE_URL + '/rating-periods', data).then(res => {   
            console.log(res);
      // alert("data");
           })
     this.newTutorial();
        window.location.href = window.location.origin + '/rating-period';
    },
    backRating() {
        window.location.href = window.location.origin + '/rating-period';
    },
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>