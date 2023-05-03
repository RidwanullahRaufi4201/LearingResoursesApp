<template>
    
 <div class="card w-100 text-center p-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>

    <p class="card-text">{{ description }}</p>
    <a :href="link" class="text-decoration-none">View More</a>
  </div>
  <div>
      <button-Base type="button" style="cursor: pointer;" class="btn btn-sm btn-danger" :style="{'display':isVisible}" @click="PassResourse(index)" >
        <span>Delete</span>
      </button-Base>
  </div>
</div>
</template>

<script>

export default{
    
props:['title','description','link','index'],

inject:['deleteResourse'],
computed:{
  isVisible(){
    return this.index==-1?'none':'block';
  }
},
methods: {
    PassResourse(title){
      this.deleteResourse(title)
    },
},
}
</script>