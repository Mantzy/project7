<template>
<section class="col-lg-7">

                        <div class="post bg-white p-2 ">
                            <h3 class="text-center">Create a new post</h3>
                            <form class="p-2">
                                <div class="form-group">
                                    <label for="postTitle">Title</label>
                                    <input type="text" class="form-control" id="postTitle" aria-describedby="titleHelp" placeholder="Post Title">
                                </div>
                                <div class="form-group">
                                    <label for="postDescription">Description</label>
                                    <textarea class="form-control" id="postDescription" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="postGif">Upload GIF</label>
                                        <input type="file" class="form-control-file" id="postGif">
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
export default {

}
</script>

<style>

</style>