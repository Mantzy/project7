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
                                        <input type="hidden" v-model="form.image">
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
      form: {
        userId: localStorage.getItem("userId"),
        user: JSON.parse(localStorage.getItem("user")),
        title: "",
        description: "",
        image: null,
      },
         
    };

  },

  methods: {




       modifyPost(_id) {


          axios.put("http://localhost:3000/api/posts"+_id, this.form, { headers: {
        authorization: "Bearer " + localStorage.getItem("token")}})

      },

      
  }


}
</script>

<style>

</style>