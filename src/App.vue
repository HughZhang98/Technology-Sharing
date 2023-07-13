<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  // watch: {
  //   // 使用watch 监听$router的变化
  //   $route(to, from) {
  //     // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
  //     if (to.meta.index > from.meta.index) {
  //       // 设置动画名称
  //       this.transitionName = "slide-left";
  //     } else {
  //       this.transitionName = "slide-right";
  //     }
  //   }
  // }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html {
  background-color: rgb(240, 240, 240);
}
a {
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
.slide-right-enter-active,
.slide-left-enter-active{
  will-change: transform;
  transition: all 300ms;
}
.slide-left-leave-active,
.slide-right-leave-active{
    will-change: transform;
    transition: all 1ms;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
