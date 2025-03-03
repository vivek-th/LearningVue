<template>
  <div>
    {{ o_firstName }}
    {{ c_firstName }}
    <div>{{ state.myName }}{{ state.myLastname }}</div>
    <div>{{ fname }}{{ lname }}</div>

    {{ greet }}
  </div>
</template>
<script>
import { ref, reactive, toRef } from "vue";
export default {
  name: "composition",
  setup() {
    const c_firstName = ref("clark");
    console.log(c_firstName);

    const state = reactive({
      myName: "vivek",
      myLastname: "thakur",
    });

    const mystate = reactive({
      fname: "garima",
      lname: "pandey",
    });

    const greet = `hello ${state.myName} ${state.myLastname}`;

    setTimeout(() => {
      mystate.fname = "rohan";
      console.log(mystate.fname);
    }, 2000);

    // return {
    //   c_firstName,
    //   state,
    //   fname:mystate.fname,
    //   lname:mystate.lname,
    //   greet,
    // };

    return toRef(mystate);
  },

  data() {
    return {
      o_firstName: "vivek",
    };
  },
};
</script>