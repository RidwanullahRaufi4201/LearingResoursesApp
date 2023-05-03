<template>
 <div >
      
       <div class="row justify-content-center">
        <div class="col-8 ">
            <Button-Base @click="selectResourse('StoredResourses')" class="btn btn-success btn-sm ">StoredResourses</Button-Base>   
            <Button-Base @click="selectResourse('AddResourse')" class="btn btn-success btn-sm m-2">AddResourse</Button-Base>   
        </div>
     
       </div>
      
       <component :is="selectedResourse" ></component>
    

        
  </div>

</template>
<script>

import StoredResourses from './StoredResourses.vue'
import AddResourse from './AddResourse.vue';
export default{
 components:{
     StoredResourses,
     AddResourse
 },

 data()
 {
    return{
        selectedResourse:'StoredResourses',
        Resourses:[{
               id:1,
               title:'Master Vue',
               description:'Master Vue Js by write code',
               link:'https:vue.org.com'
           },{
               id:2,
               title:'React Vue',
               description:'Master React Js by write code',
               link:'https:react.org'
           },{
               id:1,
               title:'Angular Vue',
               description:'Master Angular Js by write code',
               link:'https:angular.org'
           }]
    }
 },
 provide(){
    return{
        Resourses:this.Resourses,
        AddResourse:this.AddResourse,
        deleteResourse:this.deleteResourse

    }
 },
 methods:{
    selectResourse(cmp)
    {
           this.selectedResourse=cmp;
    },
    AddResourse(resourse){
          this.Resourses.unshift(resourse)
          this.selectedResourse="StoredResourses"
    },
    deleteResourse(index){
        
       this.Resourses.splice(index,1)

   },
 },




  
}
</script>