<template>
  <section class="col-lg-7">

                        <div class="post bg-white p-2 ">
                            <h3 class="text-center">Please Log In</h3>
                            <form>
                                <div class="form-group">
                                    <label for="Email1">Email address</label>
                                    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">

                                </div>
                                <div class="form-group">
                                    <label for="Password1">Password</label>
                                    <input type="password" class="form-control" id="Password1" placeholder="Password">
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-color">LOGIN</button>
                                </div>
                                                                <div class="text-right">
                                    <p>Don't have an account yet? <router-link to="/register">Sign up here</router-link></p>
                                </div>
                            </form>
                        </div>
                    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>