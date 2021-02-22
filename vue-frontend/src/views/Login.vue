<template>
  <section class="col-lg-7">

                        <div class="post bg-white p-2 ">
                            <h3 class="text-center">Please Log In</h3>
                            <form>
                                <div class="form-group">
                                    <label for="Email1">Email address</label>
                                    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" v-model="form.email">

                                </div>
                                <div class="form-group">
                                    <label for="Password1">Password</label>
                                    <input type="password" class="form-control" id="Password1" placeholder="Password" v-model="form.password">
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-color" @click="login()">LOGIN</button>
                                </div>
                                                                <div class="text-right">
                                    <p>Don't have an account yet? <router-link to="/register">Sign up here</router-link></p>
                                </div>
                            </form>
                        </div>
                    </section>
</template>

<script>
import axios from "axios";

export default {
name: "login",

data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },


beforeMount(){
    localStorage.clear()
},

  methods: {
       login() {
           axios.post("http://localhost:3000/api/auth/login", this.form).then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userId", response.data.userId)

        window.location.href="#/"
                 console.log(response)



})

      }
  }


}
</script>

<style>

</style>