<template>
   <section class="col-lg-7">
                        <div class="post bg-white p-2 ">
                            <h3 class="text-center">Sign up now!</h3>
                            <form>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="Name1">Name</label>
                                        <input type="text" class="form-control" id="Name1" placeholder="Name">
                                    </div>
                                    <label for="Email1">Email address</label>
                                    <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="Password1">Password</label>
                                    <input type="password" class="form-control" id="Password1" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <label for="profilePicture">Choose a profile picture</label>
                                    <input type="file" class="form-control-file" id="profilePicture">
                                </div>

                                <div class="text-right">
                                    <button type="submit" class="btn btn-color">Register</button>
                                </div>
                                                                                                <div class="text-right">
                                    <p>Already a member? <router-link to="/login">Log in here</router-link></p>
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