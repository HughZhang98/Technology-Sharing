<template>
  <div>
    <HeaderBack />

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
  </div>
</template>

<script>
import HeaderBack from '@/components/HeaderBack'

  export default {
    name: 'Setting',
    components: {
      HeaderBack
    },
    data() {
      return {
        funcList: [
        {
          name: '/Change',
          img: require("@/assets/img/user.png"),
          title: '修改账户名'
        },
        {
          name: '/ManageLogin',
          img: require("@/assets/img/setting.png"),
          title: '管理员登录'
        },
        // {
        //   name: '/ShoppingCart',
        //   img: require("@/assets/img/password.png"),
        //   title: '修改密码'
        // },
        // {
        //   name: '/Setting',
        //   img: require("@/assets/img/img.png"),
        //   title: '修改头像'
        // }
      ]
      }
    },
  }
</script>

<style lang="scss" scoped>

main {
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