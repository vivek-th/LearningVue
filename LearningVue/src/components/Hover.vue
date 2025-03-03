<template>
  <div>
    <h2 @mouseover="incrementCount" v-bind="$attrs">Hover {{ count }} times</h2>
    <h1>this is {{ compName }}</h1>
    the hover say movie is : {{ username }}
  </div>

  

</template>
<script>
  import counter from "@/mixins/counter";
  export default {
    name: "Hover",
    mixins: [counter],
    props:['compName'],
    inheritAttrs:false,
    inject:['username']
  };
</script>

<style>
</style>