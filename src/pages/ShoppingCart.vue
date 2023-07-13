<template>
  <div>
    <HeaderBack />

    <main>
      <div class="shop-box">
        <!-- item盒子 -->
        <div class="item-box" v-for="(phone, index) in phones" :key="index">
          <!-- 图片链接 -->
          <router-link :to="'/ShoppingDetail/'+phone.id" tag="div" class="img-box">
            <img :src="phone.img" alt="photo" />
          </router-link>
          <!-- 文本盒子 -->
          <div class="text-box">
            <!-- 标题 -->
            <div class="title">
              <b>{{phone.name}}</b>
            </div>
            <!-- 价格和数量 -->
            <div class="price-box">
              ￥{{phone.price}}
              <div class="num-box">
                <button @click="plus(index)">+</button>
                {{phone.num}}
                <button @click="reduce(index)">-</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部盒子 -->
        <div class="bottom-box">
          <p>
            合计:
            <span>￥{{money}}</span>
          </p>
          <div class="balance-box" @click="next">结算</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBack from "@/components/HeaderBack";
import axios from "axios";

export default {
  name: "ShoppingCart",
  components: {
    HeaderBack,
    axios
  },
  data() {
    return {
      phones: []
    };
  },
  computed: {
    // 合计
    money() {
      var sum = 0;
      for (let i = 0; i < this.phones.length; i++) {
        let phone = this.phones[i];
        sum += phone.price * phone.num;
      }
      return sum;
    }
  },
  methods: {
    // 加
    plus(index) {
      this.phones[index].num++;
    },
    // 减
    reduce(index) {
      if (this.phones[index].num == 1) {
        if (window.confirm("不能减少了，确认删除吗?")) {
          this.phones.splice(index, 1);
        }
      } else {
        this.phones[index].num--;
      }
    },
    //结算跳转
    next() {
      if (this.phones.length === 0) {
        alert("购物车为空！");
      } else {
        this.$store.state.phoneList = [];
        this.$router.push({ path: "/Success" });
      }
    }
  },
  mounted() {
    this.phones = this.$store.state.phoneList;
    localStorage.setItem('order', JSON.stringify(this.$store.state.phoneList))
  }
};
</script>

<style lang="scss" scoped>
.shop-box {
  // item盒子
  .item-box {
    display: flex;
    padding: 10px;
    background-color: white;
    margin-bottom: 0.3rem;

    .img-box {
      width: 4rem;
      background-color: white;
    }
    img {
      width: 100%;
    }
    // 文本盒子
    .text-box {
      padding: 0px 10px;
      flex-grow: 1;

      .title {
        b {
          font-size: 18px;
        }
        p {
          line-height: 30px;
          font-size: 10px;
          color: #999;
        }
      }
      // 价格和数量
      .price-box {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        color: red;
        display: flex;
        justify-content: space-between;

        .num-box {
          color: rgb(44, 56, 96);

          button {
            width: 20px;
            height: 20px;
            background: rgb(255, 102, 0);
            color: white;
            border: 1px solid;
            border-radius: 10px;
            outline: none;
            margin: 0.4rem;
          }
        }
      }
    }
  }
  // 底部盒子
  .bottom-box {
    background-color: white;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 65px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 16px;
      display: flex;
      align-items: center;

      span {
        color: red;
        font-size: 20px;
      }
    }

    .balance-box {
      background-color: rgb(255, 102, 0);
      color: white;
      font-weight: bold;
      font-size: 20px;
      width: 35%;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>