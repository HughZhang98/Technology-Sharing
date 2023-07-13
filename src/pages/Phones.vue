<template>
  <div>
    <!-- Search -->
    <Search />

    <!-- main -->
    <main>
      <router-link
        :to="'/ProductDetail/'+item.no"
        tag="div"
        class="Phone-box"
        v-for="(item, index) in Phones.info"
        :key="index"
      >
        <div class="Phone-img">
          <img :src="item.img" alt />
        </div>
        <div class="Phone-content">
          <b>{{item.name}}</b>
          <div>
            <span>{{item.cpu}}</span>
            <span>{{item.feature1}}</span>
            <span>{{item.feature2}}</span>
          </div>
          <p>￥{{item.price}} 起</p>
        </div>
      </router-link>
    </main>
    <p class="nomore">{{nomore}}</p>
    <!-- Banner -->
    <Banner />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Banner from "@/components/Banner";
import axios from "axios";

export default {
  name: "phones",
  components: {
    Search,
    Banner,
    axios
  },
  data() {
    return {
      id: this.$route.params.id , //获取url路径中的数据
      nomore: "~~~没有更多了~~~",
      Phones: []
    };
  },
  methods: {
    getPhones(id) {
      axios({
        method: "post",
        url: "/api/phones",
        data: id
      }).then(res => {
        this.Phones = res.data;
      });
    },
  },
  mounted() {
    this.getPhones(this.id);
  }
};
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 1rem;
}
.Phone-box {
  display: flex;
  background-color: white;
  border-bottom: 0.8px solid rgb(250, 250, 250);

  .Phone-img {
    background-color: white;
    width: 20%;
    margin: 7px;
    padding: 10px 15px;
    display: flex;
    align-items: center
  }
  img {
    width: 100%;
  }

  .Phone-content {
    margin: 20px 0 0 10px;

    b {
      font-size: 17px;
    }
    span {
      display: inline-block;
      font-size: 12px;
      background-color: rgb(240, 240, 240);
      color: rgb(117, 117, 117);
      padding: 5px;
      margin: 10px 5px 10px 0px;
      border-radius: 8px;
    }
    p {
      color: red;
      font-size: 16px;
    }
  }
}
.nomore {
  color: #808080;
  margin-bottom: 5rem;
  text-align: center;
}
</style>