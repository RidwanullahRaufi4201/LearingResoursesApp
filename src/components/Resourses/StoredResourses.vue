<template>

                 <div class="row">
                   <div class="col-md-8  mt-8 mt-md-2 mx-auto">
                    <template v-if="Resourses.length>0">
                       <Card-Base  v-for="(resourse,index) in Resourses"  :key="resourse.id" 
                       :title="resourse.title"
                       :description="resourse.description"
                       :link="resourse.link"
                       :index="index"
                       ></Card-Base>
                   </template>
                   <template v-else>
                       <Card-Base  
                       title="Motaviation"
                       description="lets make it"
                       link="fdsafda"
                       index="-1"
                       ></Card-Base>
                   </template>
                   
                </div>
               </div>
   
           
    
   
   </template>
   <script>
   import CardBase from '../UI/CardBase.vue';
   export default{
    components:{
         CardBase, 
    },
    inject:['Resourses'],
  
   


   
     
   }
   </script>