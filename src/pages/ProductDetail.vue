<template>
  <div>
    <HeaderBack />

    <main>
      <div>
        <div class="img-box">
          <img :src="phonesDet.img" alt />
        </div>
        <div class="title">
          <p>￥ {{phonesDet.price}}</p>
          <b>{{phonesDet.name}}</b>
        </div>
        <div class="other">
          <span>{{phonesDet.cpu}}</span>
          <span>{{phonesDet.feature1}}</span>
          <span>{{phonesDet.feature2}}</span>
        </div>
        <div class="feature">
          <b>{{feature}}</b>
          <div class="img-box">
            <img :src="phonesDet.img" alt />
          </div>
          <div>
            <span>{{phonesDet.cpu}}</span>
            <span>{{phonesDet.feature1}}</span>
            <span>{{phonesDet.feature2}}</span>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import axios from "axios";
import HeaderBack from "@/components/HeaderBack";

export default {
  name: "ProductDetail",
  components: {
    axios,
    HeaderBack
  },
  data() {
    return {
      id: this.$route.params.no - 1, //获取url路径中的数据
      phonesDet:[],
      feature: '产品展示及特色：'
    };
  },
  methods: {
    getPhonesDet(id) {
      axios({
        method: "post",
        url: "/api/phonesDet",
        data: id
      }).then(res => {
        this.phonesDet = res.data;
      });
    }
  },
  mounted() {
    this.getPhonesDet(this.id);
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

  b, p {
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
  display: flex;
  justify-content: space-around;

  span {
    font-size: 1.2rem;
    color: rgb(117, 117, 117);
  }
}
.feature {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: white;

    b, div {
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
</style>