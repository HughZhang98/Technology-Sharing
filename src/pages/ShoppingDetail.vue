<template>
  <div>
    <HeaderBack />

    <main>
      <div>
        <div class="img-box">
          <img :src="goods.img" alt />
        </div>
        <div class="title">
          <p>￥ {{goods.price}}</p>
          <b>{{goods.name}}</b>
        </div>
        <div class="other">
          <p>{{other}}</p>
        </div>
        <div class="feature">
          <b>{{feature}}</b>
          <div>
            <span>{{goods.cpu}}</span>
            <span>{{goods.feature1}}</span>
            <span>{{goods.feature2}}</span>
          </div>
        </div>
      </div>
    </main>

    <footer @click="phone">
      <b>{{cart}}</b>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import HeaderBack from "@/components/HeaderBack";

export default {
  name: "ShoppingDetail",
  components: {
    axios,
    HeaderBack
  },
  data() {
    return {
      id: this.$route.params.id, //获取url路径中的数据
      goods: [],
      other: "假一赔十 官方正品 顺丰包邮",
      feature: "产品特色：",
      cart: "加入购物车"
    };
  },
  methods: {
    getShoppingDetail(id) {
      axios({
        method: "post",
        url: "/api/ShoppingDetail",
        data: id
      }).then(res => {
        this.goods = res.data;
      });
    },
    phone() {
      let name = JSON.parse(localStorage.getItem("user")).name;
      if (name != null) {
        this.$store.commit("addPhone", this.goods);
        this.$router.push({ path: "/ShoppingCart" });
      } else {
        this.$router.push({ path: "/Login" });
      }
    }
  },
  mounted() {
    this.getShoppingDetail(this.id);
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;

  img {
    margin: 1rem;
  }
}
.title {
  background-color: white;
  margin-top: 0.5rem;
  padding: 0.5rem;

  b,
  p {
    margin: 0.5rem;
  }
  p {
    color: red;
    font-size: 1.8rem;
  }
  b {
    font-size: 1.3rem;
  }
}
.other {
  background-color: white;
  margin-top: 0.5rem;
  padding: 0.5rem;
  color: rgb(255, 102, 0);

  p {
    font-size: 1.1rem;
    margin-left: 0.5rem;
  }
}
.feature {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: white;

  b,
  div {
    margin: 0.5rem;
  }
  b {
    font-size: 1.2rem;
  }
  span {
    display: inline-block;
    font-size: 1rem;
    background-color: rgb(240, 240, 240);
    color: rgb(117, 117, 117);
    padding: 5px;
    margin: 10px 10px 0 0;
    border-radius: 8px;
  }
}
main {
  margin-bottom: 5rem;
}
footer {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 102, 0);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1.2rem;
}
</style>