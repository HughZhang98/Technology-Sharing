<template>
  <div>
    <HeaderBack />

    <main>
      <div class="func-box">
        <p>{{oldName}}</p>
      </div>
      <div class="func-box">
        <p>{{title}}</p>
        <input type="text" v-model="newName" />
      </div>
      <div class="submit-box">
        <button type="submit" @click="submit">{{save}}</button>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderBack from "@/components/HeaderBack";

export default {
  name: "Change",
  components: {
    HeaderBack
  },
  data() {
    return {
      oldName: "您当前的账户名为：" + JSON.parse(localStorage.getItem("user")).name,
      title: "新的账户名：",
      newName: "",
      save: "保存"
    };
  },
  methods: {
    submit() {
      if(this.newName !== '') {
        let user = {
          name: this.newName,
          password: JSON.parse(localStorage.getItem("user")).password,
          img: ""
        };
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/Mine")
      } else {
        alert("账户名为空")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.func-box {
  display: flex;
  background-color: white;
  border-bottom: 0.5px solid rgb(240, 240, 240);
  padding: 0.7rem;

  input {
    outline: none;
    font-size: 20px;
    border: none;
  }
}
.submit-box {
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    width: 10rem;
    height: 2.5rem;
    background: rgb(4, 136, 247);
    border-radius: 10px;
    border: none;
    font-size: 20px;
    color: white;
    outline: none;
  }
}
</style>