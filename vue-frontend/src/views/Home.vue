<template>
   <section class="col-lg-7">

                        <div class="post bg-white p-2 m-3 moveInUp-enter-active" v-for="post in posts" :key="post.id">
                            <div class="description m-2 text-center">
                                <h3>{{ post.title }}</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-center">
                               by: {{ JSON.parse(post.user).name  }}

                            </div>
                            <div class="description m-2">
                                <p>{{ post.description }}</p>
                            </div>
                            <figure class="text-center mw-smaller">
                                <img :src="post.imageUrl" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-6 mw-45">
                                    <button type="submit" class="btn btn-color rounded"  @click="likePost(post)"><i class="far fa-heart"></i><p>{{ post.likes }}</p></button>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-4 mw-45 text-center brown-color"><h5><i class="far fa-eye "></i><p>{{ JSON.parse(post.userRead).length }}</p></h5></div>
                               <div class="col-2 mw-45 text-center">
                                 <!--<router-link :to="{ name: 'comment', params: { _id } }">-->
                                  
                                    <router-link :to="{path: '/comment/'+post.id }" class="link-unstyled"> <i class="far fa-comments"></i></router-link>

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
    this.loadPosts();
},


  methods: {
 /* isAuthenticated() {
    if (localStorage.getItem("token") == null){
        window.location.href="#/login"
    }
  },*/
    loadPosts() {
        axios.get("http://localhost:3000/api/posts/", { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
        this.posts = response.data;
        
        console.log(this.posts)




})


    },

    likePost(post) {
      post.usersLiked = JSON.parse(JSON.stringify(post.usersLiked))
if(post.usersLiked.includes(this.user.id)){
  post.like = 0;
  console.log("dislike")
} else {
  post.like = 1;
  console.log("liked")
}
post.usersLiked = JSON.stringify(post.usersLiked)
let data = {
  post: post,
  userId: this.user.id
}

console.log(post.like)
 axios.post("http://localhost:3000/api/posts/" + post.id + "/like", data, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
          this.loadPosts()
                 console.log(response)

})

    }
}

  }



</script>
