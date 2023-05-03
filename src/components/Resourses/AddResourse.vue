<template>
   
<div class="row mt-3 ">
    <div class="col-md-6 mx-auto card p-2">
        <div class="mb-3">
  <label  class="form-label" >Title</label>
  <input type="text" v-model="title" class="form-control form-control-sm"  placeholder="enter your title">
</div>
<div class="mb-3">
  <label  class="form-label">Description</label>
  <textarea class="form-control form-control-sm" v-model="description" rows="3"></textarea>
</div>
<div class="mb-3">
  <label  class="form-label">Link</label>
  <input type="url" v-model="link" class="form-control form-control-sm"  placeholder="enter your link">
</div>
<div class="mb-3">
    <Button-Base type="button" @click="submitForm"  class="btn-sm btn-success">Add Resourse</Button-Base>
</div>


    </div>
</div>


</template>

<script>
export default{


  data(){
    return{
        title:'',
        description:'',
        link:''
    }
  },

  inject:['AddResourse'],
  
  methods:{
    submitForm()
    {
      const Resourse={
            id:Math.floor(Math.random()*(100-9)+9),
            title:this.title,
            description:this.description,
            link:this.link
         }
         
     this.AddResourse(Resourse)
    }
  },

}
</script>