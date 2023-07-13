<template>
  <div>
    <!-- Search -->
    <Search />
    <!-- Lunbo -->
    <Lunbo />
    <!-- Essay -->
    <main>
      <router-link
        :to="'/Essay/'+item.id"
        tag="div"
        class="essay-box"
        v-for="(item, index) in essayContects"
        :key="index"
      >
        <img :src="item.img" />
        <p>{{item.title}}</p>
        <div class="name">
          <span>{{item.name}}</span>
          <span>{{num}}评论</span>
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
import Search from "@/components/Search";
import Lunbo from "@/components/Lunbo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Banner,
    Search,
    Lunbo,
    axios
  },
  data() {
    return {
      nomore: "~~~没有更多资讯了~~~",
      essayContects: [],
      num: 0
    };
  },
  methods: {
    //get请求
    essayContect() {
      axios.get("/api/essayContect").then(res => {
        this.essayContects = res.data;
      });
    }
  },
  mounted() {
    this.essayContect();
  },
  beforeMount() {
    let arr = JSON.parse(localStorage.getItem("comment"));
    this.num = arr.length;
  }
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-left: 2%;

  .essay-box {
    width: 45%;
    margin: 0.5rem;
    border-radius: 6px;
    background-color: white;

    img {
      width: 100%;
      border-radius: 6px 6px 0 0;
    }
    p {
      padding: 0 0.5rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      text-overflow: -o-ellipsis-lastline;
      display: -webkit-box;
      -webkit-line-clamp: 2; //控制行数
      -webkit-box-orient: vertical;
    }
    .name {
      padding: 0.6rem 0.8rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.5rem;
      color: #808080;
    }
  }
}
.nomore {
  color: #808080;
  margin-bottom: 5rem;
  text-align: center;
}
</style>