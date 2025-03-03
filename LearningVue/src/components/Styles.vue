<template>
    5 feb
<h1 v-bind:style="{
    color : 'blue',
    padding:'50px'
}">
    this is heading
</h1>
<div v-if="num===0" v-bind:style="[divStyle, danger]"> this is the div for testing stylw</div>

</template>
<script>
export default {
    name: "Styles",
    data(){
        return{
            num:0,
            divStyle:{
            color:"Pink",
            fontSize:'20px'
        },
        danger:{
            color:'red'
        }

        }
  
    }
}
</script>
<style>

</style>
