<template>
  <div id="header">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      title: {
        type: String,
        required:true      
      }
    }
  }
</script>

<style lang="scss" scoped>
  #header {
    height: 55px;
    line-height: 55px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    padding: 0 1rem;
  }
  
</style>