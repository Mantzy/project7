<template>
   <section class="col-lg-7">

                        <div class="post bg-white p-2 m-3" v-for="post in posts" :key="post._id">
                            <div class="description m-2 text-center">
                                <h3>{{ post.title }}</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                               by: {{ user.name }}

                            </div>
                            <div class="description m-2">
                                <p>{{ post.description }}</p>
                            </div>
                            <figure class="text-center">
                                <img src="gif/giphy.gif" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-6 mw-45">
                                    <i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-6 mw-45 text-right">
                                    <router-link to="/comment" class="link-unstyled"> <i class="far fa-comments"></i></router-link>

                                </div>
                            </div>
                        </div>
                        
                        

                        
                    </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: 'Home',
  components: {

  },

data() {
    return {
      posts: {},
    user: JSON.parse(localStorage.getItem("user")),

    };
  },


beforeMount(){
    this.isAuthenticated();
    this.loadPosts();
},


  methods: {
  isAuthenticated() {
    if (localStorage.getItem("token") == null){
        window.location.href="#/login"
    }
  },
    loadPosts() {
        axios.get("http://localhost:3000/api/posts/", { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
        this.posts = response.data;
        
        console.log(this.posts)




})


    }
}

  }



</script>
