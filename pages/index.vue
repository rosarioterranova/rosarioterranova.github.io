<template>
 <div class="div bg-secondary text-white">
   <Navbar />
   <About />
   <div class="container text-center my-3">
     <h1>My Portfolio</h1>
     <div class="row">
       <div class="col-12 col-md-4 my-1">
         <nuxt-link to="/web" class="nav-link"><img class="img-section" id="img-section-1" :src="require('~/assets/img/web.png')"></nuxt-link>
       </div>
       <div class="col-12 col-md-4 my-1">
         <nuxt-link to="/mobile" class="nav-link"><img class="img-section" id="img-section-2" :src="require('~/assets/img/mobile.png')"></nuxt-link>
       </div>
       <div class="col-12 col-md-4 my-1">
         <nuxt-link to="/games" class="nav-link"><img class="img-section" id="img-section-3" :src="require('~/assets/img/games.png')"></nuxt-link>
       </div>
     </div>
   </div>
   <Footer />
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },}
</script>

<style>
.img-section{
  height: 250px;
}

#img-section-1{
  animation-name: floating1; 
  animation-duration: 3s; 
  animation-iteration-count: infinite; 
  animation-timing-function: ease-in-out; 
}

@keyframes floating1 { 
  0% { transform: translate(0,  0px); } 
  50%  { transform: translate(0, 15px); } 
  100%   { transform: translate(0, -0px); }     
}

#img-section-2{
  animation-name: floating1; 
  animation-duration: 4s; 
  animation-iteration-count: infinite; 
  animation-timing-function: ease-in-out; 
}

@keyframes floating2 { 
  0% { transform: translate(0,  0px); } 
  50%  { transform: translate(0, 10px); } 
  100%   { transform: translate(0, -0px); }     
} 

#img-section-3{
  animation-name: floating3; 
  animation-duration: 5s; 
  animation-iteration-count: infinite; 
  animation-timing-function: ease-in-out; 
}

@keyframes floating3 { 
  0% { transform: translate(0,  0px); } 
  50%  { transform: translate(0, 12px); } 
  100%   { transform: translate(0, -0px); }     
} 
</style>
