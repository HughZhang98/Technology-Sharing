<template>
  <div>
    <!-- Header -->
    <Header title="优选商城" />
    <!-- main -->
    <main>
      <router-link :to="'/ShoppingDetail/'+item.id" tag="div" class="goods-box" v-for="(item, index) in goods" :key="index">
        <div class="goods-img">
          <img :src="item.img" />
        </div>
        <p>{{item.name}}</p>
        <div class="price">
          <b>￥{{item.price}}</b>
        </div>
      </router-link>
    </main>
    <p class="nomore">{{nomore}}</p>
    <!-- Banner -->
    <Banner />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import axios from 'axios'

export default {
  name: "Shopping",
  components: {
    Banner,
    Header,
    axios
  },
  data() {
    return {
      nomore: '~~~没有更多精选商品了~~~',
      goods: [],
    };
  },
  methods: {
    // get请求
      getGoods() {
        axios.get('/api/shopping').then((res) => {
          let goods = []
          goods = res.data
          localStorage.setItem("goods", JSON.stringify(goods));
          this.goods = res.data
        })
      }
  },
  mounted() {
    this.getGoods();
    // this.goods = JSON.parse(localStorage.getItem("goods"));
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; 
  margin-bottom: 2rem;
  padding-left: 1.5%;

  .goods-box {
    width: 43.2%;
    margin: 0.5rem;
    margin-left: 0.8rem;
    border-radius: 6px;
    background-color: white;

    .goods-img {
      padding: 1rem;

      img {
        width: 100%;
      }
    }
    p {
      padding: 0 0.8rem;
      font-size: 0.85rem;
    }
    .price {
      padding: 0.6rem 0.8rem;
      color: red;
      font-size: 1rem;
    }
  }
}
.nomore {
  color: #808080;
  margin-bottom: 5rem;
  text-align: center
}
</style>