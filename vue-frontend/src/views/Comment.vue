<template>
<section class="col-lg-7">

                        <div class="post bg-white p-2   moveInUp-enter-active">
                            <div class="description m-2 text-center">
                                <h3>{{ post.title }}</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                               <!-- by: {{ post.user.name }}-->
                            </div>
                            <div class="description m-2">
                                <p>{{ post.description }}</p>
                            </div>
                            <figure class="text-center">
                                <img :src="post.imageUrl" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-6 mw-45">
                                    <i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-3 mw-45">
                                    <button type="submit" class="btn btn-color"> <router-link :to="{path: '/modify/'+post._id }" class="link-unstyled text-dark"> Modify</router-link></button>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-3 mw-45">
                                     <button @click="deletePost(post._id)" type="submit" class="btn btn-color text-dark">Delete</button>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>

                            </div>
                            <!-- comment start-->
                            <!--post comment start-->
                            <div>
                                <form  @submit.prevent="createComment(post._id)">
                                    <div class="form-group">
                                        <label for="commentText">Write your comment here:</label>
                                        <textarea class="form-control" id="commentText" rows="3" v-model="comment.comment"></textarea>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-color">COMMENT</button>
                                    </div>
                                </form>
                            </div>
                            <!--post comment end-->
                            <!-- comment section start-->
                            <div class="comments m-2">
                                <!-- single comment start-->
                                <div class="comment1 m-3 commentStyle p-1" v-for="comment in comments" :key="comment._id" >
                                    <div>
                                        <p class="font-weight-bold"> {{ JSON.parse(comment.user).name }}</p>
                                    </div>
                                    <div>
                                        <p>{{ comment.comment }}</p>
                                    </div>
                                </div>
                                <!-- single comment end-->

                            </div>
                            <!-- comment section end-->
                            <!-- comment end-->
                        </div>

                    </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: 'comment',
  components: {

  },


data() {
    return {
      post: {},
    user: JSON.parse(localStorage.getItem("user")),
      comment: {
        userId: localStorage.getItem("userId"),
        user: localStorage.getItem("user"),
        comment: "",

      },
      comments: [],
    };
  },

  beforeMount(){
    this.isAuthenticated();
    this.getOnePost(this.$route.params.id);
    this.getAllComments(this.$route.params.id);
},


methods: {

isAuthenticated() {
    if (localStorage.getItem("token") == null){
        window.location.href="#/login"
    }
},
    getOnePost(_id) {
axios.get("http://localhost:3000/api/posts/comment/"+_id, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
        this.post = response.data;
        console.log(this.post)
        

})
    },

    deletePost(_id) {
        console.log(_id);
axios.delete("http://localhost:3000/api/posts/"+_id, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
            this.post = response.data;
        window.location.href="#/"

        

})
    },

createComment(postId) {
    console.log(postId)
   this.comment.postId = postId;
    
          axios.post("http://localhost:3000/api/comment/" +postId, this.comment, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
this.comment = "";
this.getAllComments(postId);
                 console.log(response)

})
},

getAllComments(postId) {
axios.get("http://localhost:3000/api/comment/"+postId, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
        this.comments = response.data;
        console.log(this.comments)
        

})
},
    
}

  }



</script>

<style>

</style>