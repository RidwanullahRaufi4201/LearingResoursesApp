<template>
    <div class="container-fluid">
      <div class="row bg-success">
        <div class="col-md-12">
                     <Resourse-Header class="p-md-3 p-2">
                       <h4 class="text-white fs-5 text-center mt-2">Learning Resoures App</h4>
                     </Resourse-Header>
       </div>
      </div>
   
            <Resourse-Container></Resourse-Container>
    </div>
           
</template>

<script>
import ResourseContainer from './components/Resourses/ResourseContainer.vue'
import ResourseHeader from './components/UI/ResourseHeader.vue';
export default{

 components:{
     ResourseContainer,
     ResourseHeader
 },


  
}
</script>

<style>

</style>
