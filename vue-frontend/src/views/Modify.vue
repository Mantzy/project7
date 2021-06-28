<template>
<section class="col-lg-7">

                        <div class="post bg-white p-2   moveInUp-enter-active">
                            
                            <form class="p-2" @submit.prevent="modifyPost">

                                <div class="form-group">
                                    <label for="postTitle">Title</label>
                                    <input type="text" class="form-control" id="postTitle" aria-describedby="titleHelp" placeholder="Post Title"  v-model="form.title">
                                </div>
                                <div class="form-group">
                                    <label for="postDescription">Description</label>
                                    <textarea class="form-control" id="postDescription" rows="3"  v-model="form.description"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="postGif">Upload GIF</label>
                                        <input type="file" class="form-control-file" id="postGif" @change="setImage">
                                        <input type="hidden" v-model="form.imageFile">
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-color">Modify</button>
                                </div>

                            </form>
                        </div>
                    </section>
</template>

<script>
import axios from "axios";

export default {
name: "Modify",

data() {
    return {
        post: { },

      form: {
        userId: localStorage.getItem("userId"),
        user: JSON.parse(localStorage.getItem("user")),
        title: "",
        description: "",
        imageFile: null,
      },
         
    };



  },

beforeMount(){
    this.isAuthenticated();
    this.getOnePost(this.$route.params.id);
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
        this.form.title = this.post.title;
        this.form.description = this.post.description;
        this.form.imageFile = this.post.image;
        console.log(this.post)
        

})
    },

       modifyPost() {
const form = new FormData()
      form.append('title', this.form.title)
      form.append('description', this.form.description)
      form.append('image', this.form.imageFile)

         axios.put("http://localhost:3000/api/posts/"+this.$route.params.id, form, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}})
        setTimeout(() => {  window.location.href="http://localhost:8080/index.html#/"; }, 2000);


      },

      setImage(event) {
        this.form.imageFile=event.target.files[0];

        
    }
   
  }


}
</script>

<style>

</style>