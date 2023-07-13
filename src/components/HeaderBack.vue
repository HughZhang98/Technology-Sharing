<template>
  <div id="header">
    <div @click="back" class="back">
      <img src="@/assets/img/back.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBack",
  methods: {
    back () {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss" scoped>
#header {
  height: 55px;
  line-height: 55px;
  background-color: white;
  position: relative;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 0 1rem;

  img {
    width: 2rem;
  }
  .back {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>