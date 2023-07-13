<template>
  <div>
    <HeaderBack />

    <main>
      <div class="func-list">
        <router-link :to="'/ProductDetail/'+item.no" tag="div" v-for="(item, index) in resList" :key="index" class="item-box">
          <div class="centent">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </div>
          <div class="icon">
            <img src="@/assets/img/next.png" alt="">
          </div>
        </router-link>
        
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBack from "@/components/HeaderBack";

  export default {
    name: 'Searchres',
    components: {
      HeaderBack
    },
    data() {
      return {
        resList: []
      }
    },
    
    created() {
      this.resList = JSON.parse(localStorage.getItem('searchDet'))
    }
  }
</script>

<style lang="scss" scoped>
main {
  background-color: white;

  img {
    width: 1.7rem;
    margin: 0.7rem;
  }

  .func-list {
    
    .item-box {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid rgb(240, 240, 240);

      .centent {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }
}
</style>