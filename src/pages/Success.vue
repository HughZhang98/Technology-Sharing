<template>
  <div>
    <main>
      <div class="nothing">
        <div class="img-box">
          <img src="../assets/img/success.png" alt="">
        </div>
        <p>{{msg}}</p>
        <p>{{msg2}}</p>
      </div>
    </main>
  </div>
</template>

<script>

  export default {
    name: "Success",
    components: {
      
    },
    data() {
      return {
        msg:'购买成功！',
        msg2: '我们将尽快为您发货'
      }
    },
    mounted() {
      // 弹框时间
      setTimeout(() => {
        this.$router.push({path: "Home"})
      }, 3000);
    }
  }
</script>

<style lang="scss" scoped>
  main {
    background-color: white;
    // margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .nothing {
      
      :last-child {
        color: #999;
        font-size: 0.8rem;
      }

      .img-box {
        display: flex;
        justify-content: center
      }
      img {
        width: 4rem;
      }
      p {
        text-align: center;
        margin: 0.5rem;
      }

    }
  }
</style>