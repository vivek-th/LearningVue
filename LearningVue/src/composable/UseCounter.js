import { ref } from "vue";

export default function UseCounter() {
  const count = ref(0);

  function incrementCount(){
    count.value ++
  }

  return {
    count,
    incrementCount
  }
}

