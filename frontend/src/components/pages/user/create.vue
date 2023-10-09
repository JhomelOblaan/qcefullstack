<template>
  <div class="submit-form border" >
    <div v-if="!submitted">
    
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center pl-5">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input
          class="form-control p-1"
          id="firstname"
          required
          v-model="userdata.firstname"
          name="firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
          class="form-control p-1"
          id="lastname"
          required
          v-model="userdata.lastname"
          name="lastname"
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          class="form-control p-1"
          id="username"
          required
          v-model="userdata.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="email">User Email</label>
        <input
          class="form-control p-1"
          id="email"
          required
          v-model="userdata.email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control p-1"
          id="password"
          required
          v-model="userdata.password"
          name="password"
        />
      </div>
      <div class="form-group mt-3">
        <label for="role">Role</label>
        <select v-model="userdata.role" class="p-3">
            <option disabled value="">Please select role</option>
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

      <button @click="saveUser" class="btn btn mt-3" style="background-color: green; color: white;">Submit</button>
       <button @click="backUser" class="btn btn mt-3" >Back</button>
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
  methods: {
    saveUser() {
      var data = {
        firstname: this.userdata.firstname,
        lastname: this.userdata.lastname,
        username: this.userdata.username,
        email: this.userdata.email,
        password: this.userdata.password,
        role: this.userdata.role,
      };
           axios.post(import.meta.env.VITE_VUE_APP_BASE_URL + '/users', data).then(res => {   
            console.log(res);
           })
        this.newTutorial();
        window.location.href = window.location.origin + '/users';

    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
    backUser() {
        window.location.href = window.location.origin + '/users';
    },
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>