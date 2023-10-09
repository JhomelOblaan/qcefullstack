<template>
  <div class="submit-form m-5 pt-3 pb-3 border ">
    <div v-if="!submitted">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center pl-5">
      <div class="form-group ">
        <label for="firstname">First Name</label><br>
        <input  
          class="form-control p-2"
          id="firstname"
          required
          v-model="userdata.firstname"
          name="firstname"
        />
      </div>
      <div class="form-group ">
        <label for="lastname">Last Name</label>

        <input
          class="form-control p-2 mb-2"
          id="lastname"
          required
          v-model="userdata.lastname"
          name="lastname"
        />
      </div>
      <div class="form-group ">
        <label for="username">Username</label>
        <input
          class="form-control p-2"
          id="username"
          required
          v-model="userdata.username"
          name="username"
        />
      </div>
      <div class="form-group mt-3">
        <label for="role">Role</label>
        <select v-model="userdata.role" class="p-2">
            <option disabled value="" >Please select role</option>
            <option>Student</option>
            <option>BSIT Faculty</option>
            <option>BSIS Faculty</option>
            <option>BSED Faculty</option>
            <option>BACOMM Faculty</option>
            <option>PHDEM Faculty</option>
            <option>BSTLED Faculty</option>
            <option>BSAF Faculty</option>
            <option>BSFAS Faculty</option>
            <option>BSFT Faculty</option>
            <option>BSMB Faculty</option>
            <option>BPA Faculty</option>
            <option>BSDRM Faculty</option>
            <option>BSENTREP Faculty</option>
            <option>BSSW Faculty</option>
            <option>BSIT Program Chairperson</option>
            <option>BSIS Program Chairperson</option>
            <option>BSED Program Chairperson</option>
            <option>BACOMM Program Chairperson</option>
            <option>BSTLED Program Chairperson</option>
            <option>BSIT Faculty</option>
            <option>IC Manager</option>
            <option>ITED Manager</option>
            <option>IADS Manager</option>
            <option>IAAS Manager</option>
            <option>ILEGG Manager</option>
            <option>IC Dean</option>
            <option>ITED Dean</option>
        </select>
      </div>
     

      <button @click="saveUser" class="btn btn" style="background-color: green; color: white;">Submit</button>
       <button @click="backUser" class="btn btn">Back</button>
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
  data() {
    return {
      userdata: {
        id: null,
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        role: ""
      },
      submitted: false
    };
  },
  mounted(){
    this.user();
  },
  methods: {
      
      user(){
       const userid = parseInt(this.$route.query.id)
      axios.get(import.meta.env.VITE_VUE_APP_BASE_URL + '/users/'+userid).then(res => {
    //    console.log(res.data)
        this.userdata.firstname = res.data.firstname;
        this.userdata.lastname = res.data.lastname;
        this.userdata.username = res.data.username;
        this.userdata.role = res.data.role;
      });

    },
    saveUser() {
      var data = {
        firstname: this.userdata.firstname,
        lastname: this.userdata.lastname,
        username: this.userdata.username,
        role: this.userdata.role,
      };
       const userid = parseInt(this.$route.query.id)
        axios.patch(import.meta.env.VITE_VUE_APP_BASE_URL + '/users/' + userid, data).then(res => {   
        console.log(res);
        })
     this.newTutorial();
     window.location.href = window.location.origin + '/users';
    },
    backUser() {
        window.location.href = window.location.origin + '/users';
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
  max-width:30rem;
  margin: auto;
}
</style>