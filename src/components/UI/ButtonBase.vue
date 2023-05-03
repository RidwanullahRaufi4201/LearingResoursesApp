<template>
       <button :type="type"><slot></slot></button>
</template>

<script>

export default{


    props:{
        type:String
    }
}
</script>