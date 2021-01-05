<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand"><i class="fas fa-code"></i> Rosario Terranova </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
             <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link to="/games" class="nav-link">Games</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link to="/mobile" class="nav-link">Mobile Apps</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link to="/web" class="nav-link">Web Apps</nuxt-link>
        </li>      
    </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>