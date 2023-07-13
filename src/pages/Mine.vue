<template>
  <div>
    <div class="userbox">
      <div class="userImg">
        <img src="../assets/img/user.png" alt />
      </div>
      <p>{{name}}</p>
    </div>
    
    <main>
      <div class="func-list">
        <router-link :to="item.name" tag="div" v-for="(item, index) in funcList" :key="index" class="item-box">
          <div class="centent">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
          </div>
          <div class="icon">
            <img src="@/assets/img/next.png" alt="">
          </div>
        </router-link>
        
      </div>
    </main>

    <!-- Banner -->
    <Banner />
  </div>
</template>

<script>
import Banner from "@/components/Banner"

export default {
  name: "Mine",
  components: {

    Banner
  },
  data() {
    return {
      name: JSON.parse(localStorage.getItem('user')).name,
      funcList: [
        {
          name: '/News',
          img: require("@/assets/img/news.png"),
          title: '我的消息'
        },
        {
          name: '/ShoppingCart',
          img: require("@/assets/img/shoppingCart.png"),
          title: '我的购物车'
        },
        {
          name: '/Setting',
          img: require("@/assets/img/setting.png"),
          title: '账户设置'
        }
      ]
    };
  },
  //登录检测
  beforeCreate() {
    let name = JSON.parse(localStorage.getItem('user')).name
    if (name != null) {
      this.$router.push({ path: "Mine" });
    } else {
      this.$router.push({ path: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.userbox {
  background-color: white;

  .userImg {
    padding-top: 2rem;
    display: flex;
    justify-content: center;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
  }
  p {
    text-align: center;
    padding: 2rem;
    font-size: 1.3rem;
  }
}
main {
  margin-top: 0.7rem;
  background-color: white;

  img {
    width: 1.5rem;
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