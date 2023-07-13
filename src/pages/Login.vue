<template>
  <div class="my-box">
    <Header title="用户登录"/>

    <main>
      <!-- 头像 -->
      <div class="headimg">
        <img src="@/assets/img/user.png" width="100%" alt="">
      </div>
      <!-- 输入 -->
      <div class="input-box">
        <div class="user-box">
          <div class="user-img">
            <img src="@/assets/img/user.png" alt="">
          </div>
          <input type="text" placeholder="用户名/手机号" v-model="username">
        </div>
        <hr>
        <div class="password-box">
          <div class="password-img">
            <img src="@/assets/img/password.png" alt="">
          </div>
          <input type="password" id="" placeholder="密码" v-model="password">
        </div>
      </div>
      <!-- 登录 -->
      <button type="submit" @click="login">{{subit}}</button>
      <p @click="back">{{pass}}</p>
    </main>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: "Login",
    components: {
      Header
    },
    data() {
      return {
        username: "",
        password: "",
        subit: "登录",
        pass: "先不登录"
      }
    },
    methods: {
      login() {
        if (this.username != "" && this.password != "") {
          alert("欢迎" + this.username);
          //存储ID
          let user = {
            name: this.username,
            password: this.password,
            img:''
          }
          localStorage.setItem('user', JSON.stringify(user))
          this.$router.go(-1);
        } else {
          alert("请输入正确的用户名和密码")
        }
      },
      //先不登录
      back () {
        this.$router.push('/Home')
      }
    },
  }
</script>

<style lang="scss" scoped>
.my-box {
  text-align: center;

  .headimg {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
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
    height: 155px;
    border-radius: 10px;
    border: 1px solid #666;

      img {
        width: 35px;
      }

      .user-box {
        width: 280px;
        display: flex;
        align-items: center;

          .user-img {
            padding: 20px;
          }
      }
      .password-box {
        width: 280px;
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
    background: rgb(4, 136, 247);
    border-radius: 10px;
    border: none;
    font-size: 20px;
    color: white;
    margin: 3rem;
    outline: none;
  }
}
p {
  color: #80808080
}
</style>