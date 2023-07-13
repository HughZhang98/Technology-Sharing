<template>
  <div>
    <!-- Search -->
    <Search />

    <!-- main -->
    <main>
      <router-link to="" tag="div" class="iPhone-box" v-for="(item, index) in iPhones" :key="index">
        <img :src="item.img" alt="">
        <div class="iPhone-content">
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
  import Search from '@/components/Search'
  import Banner from '@/components/Banner'

  export default {
    name: 'iPhone',
    components: {
      Search,
      Banner
    },
    data() {
      return {
        nomore: '~~~没有更多了~~~',
        iPhones: [
          {
            img: require("@/assets/img/iPhone11 Pro Max.jpg"),
            name: 'iPhone11 Pro Max',
            cpu: 'A13',
            feature1: 'HDR10',
            feature2: '后置三摄',
            price: 9599
          },
          {
            img: require("@/assets/img/iPhone11.jpg"),
            name: 'iPhone11',
            cpu: 'A13',
            feature1: '夜景模式',
            feature2: 'GPU抗锯齿',
            price: 5499
          },
          {
            img: require("@/assets/img/iPhone11 Pro.jpg"),
            name: 'iPhone11 Pro',
            cpu: 'A13',
            feature1: 'HDR10',
            feature2: '后置三摄',
            price: 9599
          },
          {
            img: require("@/assets/img/iPhoneXR.jpg"),
            name: 'iPhone11 XR',
            cpu: 'A12',
            feature1: '双卡双待',
            feature2: '超长续航',
            price: 4599
          },
          {
            img: require("@/assets/img/iPhoneX.jpg"),
            name: 'iPhoneX',
            cpu: 'A11',
            feature1: 'FaceID',
            feature2: '无线充电',
            price: 5999
          },
          {
            img: require("@/assets/img/iPhoneXS Max.jpg"),
            name: 'iPhoneXS Max',
            cpu: 'A12',
            feature1: '双卡双待',
            feature2: '后置双摄',
            price: 5138
          },
          {
            img: require("@/assets/img/iPhone8.jpg"),
            name: 'iPhone8',
            cpu: 'A11',
            feature1: '双面玻璃',
            feature2: '无线充电',
            price: 3399
          },
          {
            img: require("@/assets/img/iPhone8 Plus.jpg"),
            name: 'iPhone8 Plus',
            cpu: 'A11',
            feature1: '双面玻璃',
            feature2: '无线充电',
            price: 5999
          },
          {
            img: require("@/assets/img/iPhoneXS.jpg"),
            name: 'iPhoneXS',
            cpu: 'A12',
            feature1: '超视网膜屏幕',
            feature2: '后置双摄',
            price: 5138
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
main {
  margin-bottom: 1rem;
}
.iPhone-box {
  display: flex;
  background-color: white;
  border-bottom: 0.8px solid rgb(250, 250, 250);

  img {
    width: 14%;
    margin: 10px;
    padding: 10px 15px;
    background-color: white;
  }
    
  .iPhone-content {
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
      border-radius: 8px
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
  text-align: center
}
</style>