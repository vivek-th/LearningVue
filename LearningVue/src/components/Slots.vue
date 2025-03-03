<template>
  <div class="mySlot">
    <slot >Default Value</slot>

    <div id="slot-header">
      <slot name="header"></slot>
    </div>

    <!-- <slot></slot> -->

    <div id="slot-footer">
        <slot name="footer"></slot>
    </div>

    <h3 :key="name.firstName" v-for="name in names">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
   
  </div>
</template>
<script>
export default {
  name: "Slots",
  data() {
    return {
        names:[
            {
                firstName:'Vivek',
                lastName: 'thakur'
            },
            {
                firstName:'Garima',
                lastName:'Pandey'
            },
            {
                firstName:'Aditya',
                lastName:'Singh'
            }
        ]
    };
  },
};
</script>
<style>
.mySlot {
  border: 2px solid black;
  margin: 5px;
}
#slot-header {
  border: 5px solid pink;
}
#slot-footer{
    border: 2px solid blue;
}
</style>