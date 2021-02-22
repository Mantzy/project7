<template>
   <section class="col-lg-7">

                        <div class="post bg-white p-2 m-3">
                            <div class="description m-2 text-center">
                                <h3>Laughing sloth</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                                by: Jane Doe

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
                                <div class="col-6 mw-45 text-right">
                                    <router-link to="/comment" class="link-unstyled"> <i class="far fa-comments"></i></router-link>

                                </div>
                            </div>
                        </div>
                        <div class="post bg-white p-2 m-3">
                            <div class="description m-2 text-center">
                                <h3>Kitty</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                                by: Joe Doe

                            </div>
                            <div class="description m-2">
                                <p>This is a funny post</p>
                            </div>
                            <figure class="text-center">
                                <img src="gif/funny-cat-gifs13.gif" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-lg-6">
                                    <i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-6 text-right">
                                    <i class="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div class="post bg-white p-2 m-3">
                            <div class="description m-2 text-center">
                                <h3>Puppy</h3>
                            </div>
                            <div class="name m-2 font-weight-bold text-right">
                                by: Jessica Smith

                            </div>
                            <div class="description m-2">
                                <p>This is a funny post</p>
                            </div>
                            <figure class="text-center">
                                <img src="gif/puppy-19.gif" class=" mw-100">
                            </figure>
                            <div class="like row m-2">
                                <div class="col-lg-6">
                                    <i class="far fa-heart"></i>
                                    <!-- <i class="fas fa-heart"></i>-->
                                </div>
                                <div class="col-6 text-right">
                                    <i class="far fa-comments"></i>
                                </div>
                            </div>
                        </div>

                        
                    </section>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },



beforeMount(){
    this.isAuthenticated()
},

  methods: {
  isAuthenticated() {
    if (localStorage.getItem("token") == null){
        window.location.href="#/login"
    }
}
  }
}
</script>
