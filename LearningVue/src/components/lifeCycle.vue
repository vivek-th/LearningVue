<template>
  <div>
    <h1>Vue Lifecycle Hooks Demo</h1>
    <h2>21 jan</h2>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate: Data and methods are not available yet.");
  },
  created() {
    console.log("created: Component is initialized. Data is reactive.");
  },
  beforeMount() {
    console.log("beforeMount: Template is compiled but not in the DOM.");
  },
  mounted() {
    console.log("mounted: Component is added to the DOM.");
  },
  beforeUpdate() {
    console.log("beforeUpdate: Reactive data is changing.");
  },
  updated() {
    console.log("updated: DOM is updated with reactive changes.");
  },
  beforeUnmount() {
    console.log("beforeUnmount: Component is about to be destroyed.");
  },
  unmounted() {
    console.log("unmounted: Component is destroyed.");
  },
};
</script>
  