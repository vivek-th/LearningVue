<!-- <template>
{{ name }}
<div v-text="greeting"></div>
</template>
<script>
export default{
    name:'ProvideInject',
    data(){
        return{
            name:'Vivek',
            greeting:"hello user! Wishing you a very Happy Good morning"
        }
    }
}
</script>
<style >

</style> -->

<!-- <template>
    <div>
        <h1>29 jan</h1>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script>
  import { ref, provide, inject } from 'vue';
  
  export default {
    setup() {
      const message = ref('Hello from Parent');
      provide('message', message);
      const injectedMessage = inject('message');
      
      const changeMessage = () => {
        message.value = 'Message Updated';
      };
      
      return { message: injectedMessage, changeMessage };
    }
  };
  </script> -->
  
<!-- 
  <script>
export default {
  data() {
    return {
      name: 'Vivek Thakur',
      message: '',
    };
  },
  watch: {
    name(newValue) {
      this.message = `Hello, ${newValue}!`;
    },
  },
};
</script> -->

<!-- <template>
  <div>
    <input v-model="name" placeholder="Enter name" />
    <p>{{ message }}</p>
  </div>
</template> -->



<script setup>
import { ref, watch } from "vue";

const name = ref("Vivek Thakur");
const message = ref("");

watch(name, (newValue) => {
  message.value = `Hello, ${newValue}!`;
});
</script>

<template>
  <div>
    <input v-model="name" placeholder="Enter name" />
    <p>{{ message }}</p>
  </div>
</template>
