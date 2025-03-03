<template>
  <div>
    <h1>22 jan</h1>
    <h1>Parent Component</h1>
    <p>Message from Child: {{ childMessage }}</p>

    <ChildComponent
      :parentMessage="parentMessage"
      @messageFromChild="updateMessage"
    />
    <router-link to="/childComponent">Child comp</router-link>
  </div>
</template>
  
  <script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: { ChildComponent },
  data() {
    return {
      parentMessage: "Hello from Parent!",
      childMessage: "",
    };
  },
  methods: {
    updateMessage(message) {
      this.childMessage = message;
    },
  },
};
</script>
  