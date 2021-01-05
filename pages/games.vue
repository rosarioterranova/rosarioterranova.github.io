<template>
 <div class="div bg-secondary text-white">
   <Navbar />
   <h1 class="title text-center">Games</h1>
   <ProjectList />
   <Footer />
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },}
</script>

<style>
.title{
    padding-top: 60px;
}
</style>
