<template>
  <div>
    <h2>Child Component</h2>
    <p>Message from Parent: {{ parentMessage }}</p>
    <button @click="sendMessageToParent">Send Message to Parent</button>
    <router-link to="/communication">Parent element</router-link>
  </div>
</template>
  
  <script>
export default {
  props: {
    parentMessage: String,
  },
  methods: {
    sendMessageToParent() {
      this.$emit("messageFromChild", "Hello from Child!");
    },
  },
};
</script>
  