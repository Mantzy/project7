<template>
   <section class="col-lg-7">
                        <div class="post bg-white p-2  moveInUp-enter-active">
                            <h3 class="text-center">Sign up now!</h3>
                            <form>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="Name1">Name</label>
                                        <input type="text" class="form-control" id="Name1" placeholder="Name" v-model="form.name">
                                    </div>
                                    <label for="Email1">Email address</label>
                                    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" v-model="form.email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="Password1">Password</label>
                                    <input type="password" class="form-control" id="Password1" placeholder="Password" v-model="form.password">
                                </div>
                                <!-- <div class="form-group">
                                    <label for="profilePicture">Choose a profile picture</label>
                                   <input type="file" class="form-control-file" id="profilePicture"  @change="setImage">
                                        <input type="hidden" v-model="form.profile">
                                </div>-->

                                <div class="text-right">
                                   <button type="submit" class="btn btn-color" @click="register()">Register</button>
                                </div>
                                                                                                <div class="text-right">
                                    <p>Already a member? <router-link to="/login">Log in here</router-link></p>
                                </div>
                            </form>
                        </div>
                    </section>
</template>

<script>
import axios from "axios";

export default {
name: "register",

data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        profile: "",
      },
    };
  },

  methods: {
       register() {
           axios.post("http://localhost:3000/api/auth/signup", this.form).then((response) => {
        window.location.href="#/login"
                 console.log(response)



})

      }
  },
     /*   setImage(event) {
        this.form.profile=event.target.files[0];

        
    }*/


}
</script>

<style>

</style>