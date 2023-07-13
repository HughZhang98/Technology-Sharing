<template>
  <div class="body-box">
    <main>
     <p class="adminName">{{admin}}</p>
      <!-- 输入 -->
      <div class="input-box">
        <div class="password-box">
          <div class="password-img">
            <img src="@/assets/img/password.png" alt />
          </div>
          <input type="password" @click="open" placeholder="请入管理员密码" v-model="password" @keyup.enter="login" />
        </div>
      </div>
      <!-- 登录 -->
      <button type="submit" @click="login">{{subit}}</button>
      <p @click="back">{{pass}}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "ManageLogin",
  data() {
    return {
      admin:'您好: '+ JSON.parse(localStorage.getItem('user')).name,
      password: "",
      subit: "登录",
      pass: "先不登录"
    };
  },
  methods: {
    open() {
        this.$message('默认密码为：123456');
      },
    login() {
      if (this.password === '123456') {
        alert("欢迎" + this.admin);
        this.$router.push('/Manage')
      } else {
        alert("请输入正确的用户名和密码");
      }
    },
    //先不登录
    back() {
      this.$router.push("/Mine");
    }
  }
};
</script>

<style lang="scss" scoped>
.adminName {
  color: white;
  padding: 20% 0 10% 0;
  font-size: 1.5rem;
}
.body-box {
  background-color: rgb(51, 153, 255);
  height: 100vh;
  text-align: center;
}
input {
  width: 100%;
  outline: none;
  font-size: 20px;
  border: none;
}
.input-box {
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  width: 285px;
  height: 5rem;
  border-radius: 10px;
  border: 1px solid #666;

  img {
    width: 35px;
  }
  .password-box {
    width: 280px;
    height: auto;
    display: flex;
    align-items: center;

    .password-img {
      padding: 20px;
    }
  }
}
button {
  width: 280px;
  height: 50px;
  background: green;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  margin: 3rem;
  outline: none;
}

p {
  color: white;
}
</style>