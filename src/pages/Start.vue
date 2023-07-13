<template>
  <div>
    <img class="start-img" :class="{'hide': hideImg}" src="@/assets/img/Start.jpg" alt />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Start",
  components: [
    axios
  ],
  data() {
    return {
      hideImg: false
    };
  },
  //时间和跳转
  mounted() {
    setTimeout(() => {
      this.hideImg = true;
      //初始化用户和评论
      let name = JSON.parse(localStorage.getItem("user"));
      let com = JSON.parse(localStorage.getItem("comment"))
      if (name === null) {
        let user = {};
      
        localStorage.setItem("user", JSON.stringify(user));
        
      }
      if(com === null) {
          let comment = [
          {
            name: '老王',
            content: '这个666',
          }
        ]
        localStorage.setItem("comment", JSON.stringify(comment));
      }
      //初始化商品
        axios.get('/api/shopping').then((res) => {
          let goods = []
          goods = res.data
          localStorage.setItem("goods", JSON.stringify(goods));
        })
      //初始化产品
        axios.get("/api/search").then(res => {
          let all = []
          all = res.data
          localStorage.setItem("products", JSON.stringify(all));
        });
      //
        let order = [{"id":1,"img":"/img/S20 Ultra.2389b34f.jpg","name":"三星Galaxy S20 Ultra","cpu":"高通骁龙865","feature1":"1.08亿后置主摄","feature2":"100倍混合变焦","price":9999,"num":1}]
        localStorage.setItem("order", JSON.stringify(order));
     
    }, 1700);
    setTimeout(() => {
      this.$router.push("/Home");
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .start-img {
    transition: all ease-in-out 0.35s;
    width: 100%;
  }
  .hide {
    opacity: 0;
  }
}
</style>