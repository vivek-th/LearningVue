<template>
    <div v-html="greetings"></div>
    <div v-bind:id="heading">this is heading</div>
    <button v-bind:disabled="isDisabled"> This is button</button>
    <div class="underline" v-bind:class="status"> This is Dynamic class</div>
    <!-- <div v-bind:class="isSoldOut ?'soldout':'new' ">Movie available</div> -->
    <div v-bind:class="{
      soldout: isSoldOut,
      new:!isSoldOut
    }"> object conditional </div>
    <div></div>
</template>
<script>
export default {
  name: "Basics",
  data() {
    return {
      name: "vivek",
      greetings:"<b>Hello user! Good morning, Have a nice day ahead.</b>",
      heading:"heading",
      isDisabled:false,
      status:"danger",
      isSoldOut: false
    };
  },
};
</script>
<style>
#heading{
    color: blue;
}
.underline{
  text-decoration: underline;
}
.danger{
  background-color: red;
}
.soldout{
  color: turquoise;
}
.new{
  color:red;
}
</style>