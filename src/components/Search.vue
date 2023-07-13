<template>
  <div id="header">
    <input type="text" placeholder="搜索你想要的产品" v-model="product" @keyup.enter="search" />
    <img src="@/assets/img/mineS.png" @click="toMine" class="mine" />
    <img src="@/assets/img/search.png" @click="search" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  components: {
    axios
  },
  data() {
    return {
      allProduct: [],
      product: "",
    };
  },
  methods: {
    toMine() {
      this.$router.push({ path: "/Mine" });
    },
    search() {
      let res = [];
      if (this.product != "") {
        this.allProduct.forEach(element => {
          if (element.name.toUpperCase().indexOf(this.product.toUpperCase()) !== -1) {
            let item = {
              no: element.no,
              name: element.name,
              img: element.img
            };
            res.push(item);
          } 
        });
      }
      if(res.length === 0) {
        alert("没有此产品");
      } else {
        this.$router.push({path: "/SearchDetail"});
      }
      localStorage.setItem('searchDet', JSON.stringify(res))
      
    },
    getProduct() {
      axios.get("/api/search").then(res => {
        this.allProduct = res.data;
      });
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>

<style lang="scss" scoped>
#header {
  height: 55px;
  line-height: 55px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  :last-child {
    width: 20px;
    position: absolute;
    // top: 18px;
    right: 65px;
  }
  img {
    padding: 3.5%;
  }
  input {
    width: 80%;
    color: #666;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    background-color: rgb(240, 240, 240);
  }
  .mine {
    height: 50%;
    padding: 0.5rem;
  }
}
</style>