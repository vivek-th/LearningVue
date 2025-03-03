<template>
  {{ movie }}
  <Hover id="theHover" compName="myHover"/>
  <Counter/>
  <Keypress/>

<input type="text" v-model="movie">
<input type="text" v-model="movieInfo.name">
<input type="text" v-model="movieInfo.actor">
</template>
<script>
import Hover from './Hover.vue';
import Counter from './Counter.vue';
import Keypress from './Keypress.vue';


export default{
  data(){
    return{
      movie:'Batman',
      movieInfo:{
        name:'',
        actor:''
      }
    }
    
  },
  methods:{

  },
  watch:{
    movie:{
      handler(newValue){
      console.log(`Calling API with movie name as ${this.movie}`)
    },
    immediate:true
    },
    movieInfo:{
      handler(newValue){
      console.log(`Calling API with movie name as ${this.movieInfo.name}`)
    },
    deep:true
    },
  },
  components:{
    Hover,
    Counter,
    Keypress
  },
  provide(){
    return{
      username:this.movie
    }
  }

}
</script>