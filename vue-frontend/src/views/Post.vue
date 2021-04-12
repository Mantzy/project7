<template>
<section class="col-lg-7">

                        <div class="post bg-white p-2   moveInUp-enter-active">
                            <h3 class="text-center">Create a new post</h3>
                            <form class="p-2" @submit.prevent="addPost">

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
                                        <input type="hidden" v-model="form.image">
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-color">POST</button>
                                </div>

                            </form>
                        </div>
                    </section>
</template>

<script>
import axios from "axios";

export default {
name: "addPost",

data() {
    return {
      form: {
        userId: localStorage.getItem("userId"),
        user: localStorage.getItem("user"),
        title: "",
        description: "",
        image: null,
      },
    };
  },

  methods: {
       addPost() {
const form = new FormData()
      form.append('title', this.form.title)
      form.append('description', this.form.description)
      form.append('image', this.form.image)
      form.append('userId', this.form.userId)
      form.append('user', this.form.user)
           console.log(this.form);
          axios.post("http://localhost:3000/api/posts", form, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}}).then((response) => {
     window.location.href="#/"
                 console.log(response)



})

      },

      setImage(event) {
        this.form.image=event.target.files[0];

        
    }
  }


}
</script>

<style>

</style>