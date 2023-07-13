<template>
  <div>
    <!-- Search -->
    <Search />
    <!-- left -->
    <div class="left-box">
      <ul>
        <router-link to="/Phones/0" tag="li">iPhone</router-link>
        <li @click="showAZ">安卓</li>
        <li @click="showWatch">智能手表</li>
        <li @click="showPad">平板</li>
        <li @click="showPC">笔记本</li>
        <li @click="showPJ">配件</li>
      </ul>
    </div>
    <!-- main -->
    <main>
      <!-- lunbo -->
      <div class="lunbo-box" v-show="lunbo">
        <h3>{{news}}</h3>
        <Lunbo />
      </div>
      <!-- 安卓 -->
      <div class="brand" v-show="showAZs">
        <h3>{{AZBrand}}</h3>
        <div class="brand-box">
          <router-link :to="'/Phones/'+item.id" tag="div" v-for="(item, index) in brands.AZs" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <!-- 手表 -->
      <div class="brand" v-show="showWatchs">
        <h3>{{watchBrand}}</h3>
        <div class="brand-box">
          <router-link :to="'/Phones/'+item.id" tag="div" v-for="(item, index) in brands.watchs" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <!-- 平板 -->
      <div class="brand" v-show="showPads">
        <h3>{{padBrand}}</h3>
        <div class="brand-box">
          <router-link :to="'/Phones/'+item.id" tag="div" v-for="(item, index) in brands.pads" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <!-- PC -->
      <div class="brand" v-show="showPCs">
        <h3>{{PCBrand}}</h3>
        <div class="brand-box">
          <router-link :to="'/Phones/'+item.id" tag="div" v-for="(item, index) in brands.PCs" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
      <!-- 配件 -->
      <div class="brand" v-show="showPJs">
        <h3>{{PJBrand}}</h3>
        <div class="brand-box">
          <router-link :to="'/Phones/'+item.id" tag="div" v-for="(item, index) in brands.PJs" :key="index">
            <img :src="item.img" alt="">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </div>
    </main>
    <!-- Banner -->
    <Banner />
  </div>
</template>

<script>
  import Banner from '@/components/Banner'
  import Search from '@/components/Search'
  import Lunbo from "@/components/Lunbo"
  import axios from 'axios'

  export default {
    name: "Product",
    components: {
      Banner,
      Search,
      Lunbo,
      axios
    },
    data() {
      return {
        brands: [],
        // 默认
        news: '热门事件',
        lunbo: true,
        // 安卓
        AZBrand: '热门安卓手机品牌',
        showAZs: false,
        //手表
        watchBrand: '热门智能手表品牌',
        showWatchs: false,
        //平板
        padBrand: '热门平板电脑品牌',
        showPads: false,
        //PC
        PCBrand: '热门笔记本电脑品牌',
        showPCs: false,
        //配件
        PJBrand: '热门配件品牌',
        showPJs: false,
      }
    },
    methods: {
      showAZ () {
        this.lunbo = false        
        this.showWatchs = false
        this.showPads = false
        this.showPCs = false
        this.showPJs = false
        this.showAZs = true
      },
      showWatch () {
        this.lunbo = false
        this.showAZs = false
        this.showPads = false
        this.showPCs = false
        this.showPJs = false
        this.showWatchs = true
      },
      showPad () {
        this.lunbo = false
        this.showAZs = false
        this.showWatchs = false
        this.showPCs = false
        this.showPJs = false
        this.showPads = true
      },
      showPC () {
        this.lunbo = false
        this.showAZs = false
        this.showWatchs = false
        this.showPads = false        
        this.showPJs = false
        this.showPCs = true
      },
      showPJ () {
        this.lunbo = false
        this.showAZs = false
        this.showWatchs = false
        this.showPads = false
        this.showPCs = false
        this.showPJs = true
      },
      //get请求
      brandsData() {
        axios.get('/api/product').then((res) => {
          this.brands = res.data
        })
      }
    },
    mounted() {
      this.brandsData();
    }
  }
</script>

<style lang="scss" scoped>
//左栏
  .left-box {
    position: fixed;
    top: 55px;
    left: 0px;
    right: 330px;
    background-color: white;
    height: 100%;
    width: 20%;
    text-align: center;

    li {
      padding: 20px 0px;
    }
    li:hover {
      background-color: rgb(240, 240, 240);
    }
  }
//lunbo
  .lunbo-box {
    width: 70%;
    padding-left: 25%;
    padding-top: 5%;

    h3 {
      color: #000;
      text-align: center;
      margin: 1rem 0;  
    }
  }
//品牌
  .brand {
    padding-left: 25%;
    padding-right: 5%;
    padding-top: 5%;
    
    h3 {
      color: #000;
      text-align: center;
      margin: 1rem 0;  
    }
    
    .brand-box {
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      
      div {
        width: 32.8%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border: 0.5px solid rgb(250, 250, 250);

        img {
          width: 4rem;
          height: 4rem;
          margin: 0.5rem;
        }
        p {
          font-size: 14px;
          margin: 0.5rem;
        }
      }
    }
  }
</style>