<!-- <script>
export default {
  data() {
    return {
      counter: 0,
      message: '',
    };
  },
  watch: {
    counter(newValue) {
      if (newValue >= 5) {
        this.message = 'Counter is 5 or more!';
      } else {
        this.message = 'Keep going!';
      }
    },
  },
};
</script> -->

<!-- <script setup>
import { ref, watch } from 'vue';

const counter = ref(0);
const message = ref('');

watch(counter, (newValue) => {
  if (newValue >= 5) {
    message.value = 'Counter is 5 or more!';
  } else {
    message.value = 'Keep going!';
  }
});
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
    <p>Message: {{ message }}</p>
  </div>
</template> -->

<template>
  <p>24 feb</p>
  by options
  <input type="text" placeholder="name" v-model="myName" />

  by composition
  <input type="text" placeholder="lastName" v-model="lastName" />
  <input type="text" placeholder="full name" v-model="fullname" />
</template>
<script>
import { ref, watch } from "vue";

export default {
  name: "WatcherReplacing",

  setup() {
    const lastName = ref("");
    const fullname= ref("")

    watch([lastName, fullname], (newValue, oldValue) => {
      console.log("old: for lastname ", oldValue[0]), 
      console.log("old for fullname", newValue[1]);
      console.log('new for lastname')
      
    });
    return {
        lastName,
        fullname
      };
  },
  data() {
    return {
      myName: "",
    };
  },
  watch: {
    myName(newValue, oldValue) {
      console.log("old Value: ", oldValue);
      console.log("New Value", newValue);
    },
  },
};
</script>