<template>
<div>
    <div class="container-fluid text-center text-light bg-dark p-5">
        <div class="animate__animated animate__swing">
            <h1 class="display-4 mt-4">Rosario Terranova</h1>
            <p class="lead">Senior Software Engineer</p>
        </div>
    </div>
    <h1 class="text-center my-2">About Me</h1>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-md-4 text-center">
                <img id="img-profile" :src="require('~/assets/img/me.jpg')" class="rounded-circle float-md-right mb-1 animate__animated animate__zoomInLeft" alt="Rosario Terranova">
            </div>
            <div class="col-12 col-md-8  animate__animated animate__zoomInRight">
            <p>I'm a software engineer with many years of professional and commercial experience in the development of software, fullstack web apps, games, 3D, AR and VR applications with various technologies and pipelines.</p>
            <div class="text-center text-md-left">
                <div class="btn-group" role="group">
                    <a href="mailto:rosarioterranova91@gmail.com" target="_blank"><button type="button" class="btn btn-success m-1"><i class="far fa-envelope"></i> Email</button></a>
                    <a href="https://www.linkedin.com/in/rosarioterranova/" target="_blank"><button type="button" class="btn btn-info m-1"><i class="fab fa-fw fa-linkedin-in"></i> LinkedIn</button></a>
                    <a href="https://github.com/rosarioterranova" target="_blank"><button type="button" class="btn btn-dark m-1"><i class="fab fa-github"></i> GitHub</button></a>
                    <a href="https://twitter.com/rosterranova" target="_blank"><button type="button" class="btn btn-primary m-1"><i class="fab fa-twitter"></i> Twitter</button></a>
                    <a href="https://www.facebook.com/rosterranova/" target="_blank"><button type="button" class="btn btn-primary m-1"><i class="fab fa-facebook"></i> Facebook</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#img-profile{
    height: 150px;
}
</style>