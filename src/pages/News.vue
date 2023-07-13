<template>
  <div>
    <HeaderBack />

    <main>
      <div class="nothing">
        <div class="smile-box">
          <img src="../assets/img/smile.png" alt="">
        </div>
        <p>暂无消息哟~</p>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBack from '@/components/HeaderBack'

  export default {
    name: "News",
    components: {
      HeaderBack
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
  

      .smile-box {
        display: flex;
        justify-content: center
      }

      img {
        width: 4rem;
        height: 4rem;
      }
    }
  }
</style>