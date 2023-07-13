<template>
  <div>
    <HeaderBack />

    <main>
      <h2>{{essays.title}}</h2>
      <div class="userInfo">
        <div class="userImg">
          <img src="@/assets/img/user.png" width="100%" alt />
        </div>
        <span>{{essays.name}}</span>
      </div>
      <p>{{essays.content}}</p>
      <img width="100%" :src="essays.img" />
      <div class="likes" @click="likes">
        <img src="@/assets/img/like.png" v-show="nolike" />
        <img src="@/assets/img/like1.png" v-show="yeslike" />
      </div>
    </main>
    <!-- 评论 -->
    <div class="comment-box">
      <h3>最新评论</h3>
      <div class="comment" v-for="(item, index) in comment" :key="index">
        <div class="commenter">
          <div class="comImg">
            <img src="@/assets/img/user.png" width="100%" alt />
          </div>
          <span>{{item.name}}</span>
        </div>
        <p>{{item.content}}</p>
      </div>
    </div>

    <footer>
      <input type="text" placeholder="有没有什么想说的？" @keyup.enter="submit" v-model="talk" />
      <button type="submit" @click="submit">发送</button>
    </footer>
  </div>
</template>

<script>
import HeaderBack from "@/components/HeaderBack";
import axios from "axios";

export default {
  name: "Essay",
  components: {
    HeaderBack,
    axios
  },
  data() {
    return {
      id: this.$route.params.id, //获取url路径中的数据
      essays: {
        id: 1
      },
      nolike: true,
      yeslike: false,
      comment: [],
      talk: ""
    };
  },
  methods: {
    getEssay(id) {
      axios({
        method: "post",
        url: "/api/essay",
        data: id
      }).then(res => {
        this.essays = res.data;
      });
    },
    likes() {
      (this.nolike = false), (this.yeslike = true);
    },
    submit() {
      let name = JSON.parse(localStorage.getItem("user")).name;
      if (name != null) {
        if (this.talk === "") {
          alert("内容为空");
        } else {
          // let obj = {
          //   id: this.id,
          //   img: '@/assets/img/user.png',
          //   name: name,
          //   comment: this.talk
          // }
          // axios.post("/api/addComments",{
          //   params: {
          //     obj
          //   }
          // }).then(res => {
          //   console.log("请求成功"),
          //   this.comment.push(this.obj);
          //   this.talk = ''
          // })

          let obj = {
            name: name,
            content: this.talk
          };
          this.comment.push(obj);
          localStorage.setItem("comment", JSON.stringify(this.comment));
          this.talk = ''
        }
      } else {
        this.$router.push({ path: "/Login" });
      }
    }
  },
  mounted() {
    this.getEssay(this.id);
  },
  beforeMount() {
      let arr = JSON.parse(localStorage.getItem("comment"))
      this.comment = arr
  }
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
main {
  padding: 1rem;
  background-color: white;

  .userInfo {
    margin: 1rem 0;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;

    .userImg {
      width: 2.5rem;
      height: 2.5rem;

      img {
        border-radius: 50%;
        width: 100%;
        margin-top: 0rem;
      }
    }
    span {
      margin-left: 0.5rem;
    }
  }
  p {
    font-size: 20px;
    text-indent: 45px;
    letter-spacing: 3px;
  }
  img,
  p {
    margin-top: 1rem;
  }
  .likes {
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0 auto;
    border: 1px solid #808080;
    border-radius: 40px;

    img {
      width: 2rem;
      margin: 0.3rem;
    }
  }
}
.comment-box {
  margin: 0.5rem 0 6rem 0;
  padding: 1rem;
  background-color: white;

  .comment {
    margin-top: 0.5rem;
    border: 0.5px solid rgb(240, 240, 240);

    .commenter {
      display: flex;
      align-items: center;

      .comImg {
        width: 2.5rem;
        height: 2.5rem;
      }
      span {
        margin-left: 0.5rem;
      }
    }
    p {
      font-size: 1.1rem;
      text-indent: 3rem;
      margin-top: 0.3rem;
    }
  }
}
footer {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  text-align: center;

  input,
  button {
    margin: 0 1rem;
  }

  input {
    width: 100%;
    color: #666;
    outline: none;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: rgb(240, 240, 240);
  }
  button {
    width: 5rem;
    height: 2rem;
    background: rgb(4, 136, 247);
    border-radius: 10px;
    border: none;
    font-size: 0.9rem;
    color: white;
    outline: none;
  }
}
</style>