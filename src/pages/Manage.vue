<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="180px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2','3']" :default-active="this.$router.path" router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>文章管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/ManageEssay">发表文章</el-menu-item>
            <el-menu-item index="/ManageComment">查看评论</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>产品管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/ManageProduct">现有产品</el-menu-item>
            <el-menu-item index="/ManageShopping">商城商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-goods"></i>订单处理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/ManageOrder">查看订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px;">
        <b>科技分享网站后台管理系统</b>
        <el-button size="small" style="margin-right: 1rem" @click="back">退出账号</el-button>
        <span>{{name}}</span>
      </el-header>

      <el-main>
        <p>{{welcome}}</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Manage",
  data() {
    return {
      name: JSON.parse(localStorage.getItem("user")).name,
      welcome:
        "欢迎 " +
        JSON.parse(localStorage.getItem("user")).name +
        " 来到科技分享网后台管理系统!"
    };
  },
  methods: {
    back() {
      this.$confirm("您确定要退出账号吗?", "退出", {
        confirmButtonText: "确定",
        cancelButtonText: "点错了",
        type: "warning"
      }).then(() => {
        this.$router.push({ path: "/Home" });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: white;
  color: rgb(64, 158, 255);
  line-height: 60px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  span {
    font-size: 1rem;
  }
  b {
    float: left;
    font-size: 1.5rem;
  }
}

.el-aside {
  color: #333;
}
.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(64, 158, 255);
  font-size: 1.5rem;
}
</style>