<template>
  <div class="m-0 p-0 project-container">
      <div class="m-0 p-2 bg-dark text-center">
           <b class="project-title">{{project.title}}</b>
        </div>
        <img class="project-img img-fluid" :src="project.img" alt="" srcset="">
        <div class="m-0 p-2 bg-dark">
            <p>{{project.description.substring(0,200)+"..."}}</p>
            <hr>
            <div class="text-right">
                Link1, Link2
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: ["project"]
}
</script>

<style>
.project-container{
    display: flex;
    flex-direction: column;
    transition: 1s;
}

.project-container:hover{
  transform: scale(1.05);
}

.project-title{
    font-size: 1.1rem;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid white;
    padding: 0;
}

</style>