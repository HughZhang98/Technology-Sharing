<template>
  <div id="banner">
    <router-link v-for="(item, index) in items" :key="index" :to="item.itemTo">
      <img :src="item.itemTo === $route.path ? item.selected : item.img" alt="">
      <p :class="{on: item.itemTo === $route.path}">{{item.word}}</p>
      
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Banner",
    data() {
      return {
        items: [
          {
            itemTo:"/Home",
            img: require('@/assets/img/home.png'),
            word: '首页',
            selected: require('@/assets/img/homeS.png')
          },
          {
            itemTo:"/Product",
            img: require('@/assets/img/product.png'),
            word: '产品',
            selected: require('@/assets/img/productS.png')
          },
          {
            itemTo:"/Shopping",
            img: require('@/assets/img/shopping.png'),
            word: '商城',
            selected: require('@/assets/img/shoppingS.png')
          },
          {
            itemTo:"/Mine",
            img: require('@/assets/img/mine.png'),
            word: '我',
            selected: require('@/assets/img/mineS.png')
          }
        ],
      }
    },
    methods:{
      
    }
  
  }
</script>

<style lang="scss" scoped>
#banner {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  text-align: center;

  p {
    font-size: 16px;
    color: rgb(34, 34, 34);
    padding: 3px;
  };
  img {
    width: 30px;
    height: 30px;
  }
  .on{
    color: rgb(18, 150, 219);
  }
}
</style>