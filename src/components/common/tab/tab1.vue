<template>
  <div id="tab1">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name: "tab1"
    }
</script>

<style scoped>
  #tab1{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
  }

</style>
