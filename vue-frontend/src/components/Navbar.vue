<template>
  <header>
        <div class="dark-bg" id="app">
            <div class="container-fluid">
                <!--- Navbar start-->
                <div class="row">
                    <nav class="col navbar navbar-expand-lg navbar-dark">






                        <!-- Logo start -->
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <figure>
                                <a class="navbar-brand" href="index.html">
                                    <img src="img/small-icon.png" alt="GROUPOMANIA LOGO" class="w-50">
                                </a>
                            </figure>


                        </div>
                        <!--Logo end-->
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                        <div id="navbarContent" class="collapse navbar-collapse">
                            <ul class="navbar-nav font-weight-bold letter-light">
                                <li class="nav-item active ">
                                    <a class="nav-link letter-light" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
  
                                    <router-link to="/post" class="nav-link letter-light"> Post
                    </router-link>
                                </li>
                                <li class="nav-item">
                                     <router-link to="/login" class="nav-link letter-light"> Login
                    </router-link>
                                </li>
                                <li class="nav-item">
                                     <router-link to="/register" class="nav-link letter-light"> Register
                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

                <!--- Navbar end-->
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>