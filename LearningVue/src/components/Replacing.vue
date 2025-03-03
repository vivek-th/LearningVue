<!-- <template>
  <div>
    <h1>19 feb</h1>
    {{ name }}
    <button @click="setUp">Change Name</button>
    {{ lastName }}
    <button @click="changeLastName">Change Surname</button>
  </div>
  {{ first }}{{ last }}
  <button @click="changeHero">Change hero</button>

  <input type="text" placeholder="First Name" v-model="myName" />
</template>
<script>
import { ref, reactive, toRef, toRefs } from "vue";

export default {
  name: "Replacing",
  setup() {
    const lastName = ref("thakur");
    const fname = ref("");
    const heroName = reactive({
      first: "super",
      last: "women",
      fname: "Varun",
    });
    function changeLastName() {
      this.lastName = "kumar";
    }
    function changeHero() {
      heroName.first = "Bat";
      heroName.last = "Man";
    }
    return {
      lastName,
      changeLastName,
      changeHero,
      ...toRefs(heroName),
    };
  },

  data() {
    return {
      name: "Vivek",
      fname: "",
    };
  },
  methods: {
    setUp() {
      this.name = "Rahul";
    },
  },
};
</script> -->
<template>
  <p>19 feb</p>
  <input type="text" placeholder="subject" v-model="subject" />
  <input type="text" placeholder="firstname" v-model="firstname" />
  <input type="text" placeholder="lastname" v-model="lastname" />
  <p>{{computedFullName }}</p>
</template>
<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  name: "Replacing",

  setup() {
    const subject = ref("");
    const state = reactive({
      firstname: "",
      lastname: "",
    });
    const computedFullName= computed(function(){
      return `${subject.value} ${state.firstname} ${state.lastname}`
    })

    return {
      subject,
      ...toRefs(state),
      computedFullName  
    };
  },
  // data(){
  //   return{
  //     firstname:'',
  //     lastname:''
  //   }
  // },
  // computed: {
  //   fullname() {
  //     return `Good Morning , ${this.firstname} ${this.lastname}`;
  //   },
  // },
};
</script>

<style>
</style>