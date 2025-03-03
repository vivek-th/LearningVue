<template>
  <h2 @mouseover="incrementCount">hover in composable: {{ count }} times</h2>
</template>

<script>
import UseCounter from '@/composable/UseCounter';
export default {
  setup() {
    const {count, incrementCount} = UseCounter()

    return{
        count,
        incrementCount
    }
  },
};
</script>