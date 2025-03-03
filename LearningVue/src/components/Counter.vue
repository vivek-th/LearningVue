<template>
  <button @click="incrementCount">Clicked {{ count }} times</button>
</template>

<script>
import counter from '../mixins/counter';
export default {
  name: "Counter",
  mixins:[
    counter
  ]
};
</script>
  <style>
</style>