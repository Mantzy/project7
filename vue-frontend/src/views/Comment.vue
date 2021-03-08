<template>
<section class="col-lg-7">

                        <div class="post bg-white p-2   moveInUp-enter-active">
                            <div class="description m-2 text-center">
                                <h3>{{ post.title}}</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                                by: {{ user.name }}
                            </div>
                            <div class="description m-2">
                                <p>This is a funny post</p>
                            </div>
                            <figure class="text-center">
                                <img src="gif/giphy.gif" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-6 mw-45">
                                    <i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>

                            </div>
                            <!-- comment start-->
                            <!--post comment start-->
                            <div>
                                <form>
                                    <div class="form-group">
                                        <label for="commentText">Write your comment here:</label>
                                        <textarea class="form-control" id="commentText" rows="3"></textarea>
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
                                <div class="comment1 m-3 commentStyle p-1">
                                    <div>
                                        <p class="font-weight-bold">Jon Doe</p>
                                    </div>
                                    <div>
                                        <p> I really like it!</p>
                                    </div>
                                </div>
                                <!-- single comment end-->

                                <!-- single comment start-->
                                <div class="comment1 m-3 commentStyle p-1">
                                    <div>
                                        <p class="font-weight-bold">Jessica Smith</p>
                                    </div>
                                    <div>
                                        <p>Just like me today</p>
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
      post: {
        userId: localStorage.getItem("userId"),
        user: JSON.parse(localStorage.getItem("user")),
        title: "",
        description: "",
        imageUrl: "",

      },

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
        axios.get(`http://localhost:3000/api/posts/${this.post._id}`, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}})
        .then((response) => {
        this.post = response.data;
        
        console.log(this.posts)




})


    }

    
}

  }



</script>

<style>

</style>