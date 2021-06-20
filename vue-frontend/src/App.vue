<template>
<div>
    <body class="grey">
  <Navbar v-if="$route.name !='Login' && $route.name !='Register'">


  </Navbar>

  <div class="container-fluid">

            <!--- Main Content start-->
            <div class="container-fluid mt-2">

                <div class="row">
                    <!-- Left content start-->
                    <section class="col-lg-3 side-bg p-2 " >
                        <div  v-if="$route.name !='Login' && $route.name !='Register'">
                        <!--<figure class=" text-center" >
                            <img src="img/cat.jpg" alt="Profile picture" class="rounded-circle">
                        </figure>-->
                        <section class="text-center brown-color">
                            <h3>Welcome</h3>
                        </section>
                        <section class="letter-light text-center font-weight-bold">
                            <h3>{{ user.name }}</h3>
                        </section>
                        <section class="letter-light text-center font-italic">
                            <p>{{ user.email }}</p>
                        </section>
                        <section class="letter-light text-center">
                          <!--  <router-link to="/userupdate" class="nav-link letter-light"> Modify details
                    </router-link>-->
                    <button @click="deleteAccount()">DELETE ACCOUNT</button>
                        </section>
                        </div>
                    </section>
                    <!-- Left content end-->
                    <!-- Post content start-->
                      <router-view/>
                    

                    <!-- Post content end-->
                    <section class="col-lg-2 side-bg p-2 socialM text-center">
                        <h3>You can find us everywhere!</h3>
                        <i class="fab fa-facebook-square m-3"></i>
                        <i class="fab fa-twitter-square m-3"></i>
                        <i class="fab fa-instagram-square m-3"></i>
                        <i class="fab fa-pinterest-square m-3"></i>
                        <i class="fab fa-youtube-square m-3"></i>
                        <i class="fab fa-linkedin m-3"></i>
                    </section>


                </div>
                <!--- Main Content end-->

            </div>
        </div>
  
    <!--- Footer start-->
    <footer class="dark-bg mt-2">
        <div class="footy-sec mn no-margins text-center">
            <ul class="p-1">
                <li>
                    <a href="#" class="link-unstyled">Help</a>
                </li>
                <li>
                    <a href="#" class="link-unstyled">About</a>
                </li>
                <li>
                    <a href="#" class="link-unstyled">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="link-unstyled">Company Policy</a>
                </li>

            </ul>

        </div>
    </footer>
</body>
</div>
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";
import axios from "axios";

Vue.use(VueSimpleAlert);

 export default {
  name: 'App',
  components: {
    Navbar
  },


  data() {
return {
     user: []
}
  },

beforeMount(){
this.user = JSON.parse(localStorage.getItem("user"))
}, 

methods: {

      deleteAccount() {
      if (confirm("Are you sure you want to delete your account?")) {
axios.delete("http://localhost:3000/api/auth/"+this.user.id, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then(() => {
        localStorage.clear()
        window.location.href="#/login"

        

})
      }
  }
}

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.moveInUp-enter-active {
    animation: fadeIn 1s ease-in;}
    @keyframes fadeIn{  
        0%{    opacity: 0;  }  50%{    opacity: 0.5;  }  100%{    opacity: 1;  }
    }

.moveInUp-leave-active {  
    animation: moveInUp .3s ease-in;}
    @keyframes moveInUp{ 
        0%{  transform: translateY(0); }  100%{  transform: translateY(-400px); }
        }

.mw-smaller {
    max-width: 800px;
    margin: 0 auto !important;
}

.brown-color {
    color: #F2DB94 !important;
}

.rounded {
    border-radius: 50% !important;
}

</style>
