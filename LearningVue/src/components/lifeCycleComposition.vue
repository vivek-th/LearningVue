<template>
  <h1>3 feb</h1>
  <h1>Life Cycle Hooks in composition api by {{ name }}</h1>
  <button @click="changeName"> click here</button>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  name: "lifeCycleComposition",

  setup() {

    const name= ref("vivek")

   function changeName(){
    this.name="Thakur"
   }
    onBeforeMount(() => {
      console.log("this is on before mount");
    });
    onMounted(() => {
      console.log("this is mounted");
    });
    onBeforeUpdate(() => {
      console.log("this is before updated");
    });
    onUpdated(() => {
      console.log("this is on before unmounted");
    });
    onBeforeUnmount(() => {
      console.log("this is before unmount");
    });
    onUnmounted(() => {
      console.log("this is unmounted");
    });

    return{
        name,
        changeName
        
    }
  },
};
</script>
