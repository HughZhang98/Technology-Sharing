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
            <el-menu-item index="/ManageProduct">产品库</el-menu-item>
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
        <el-form :inline="true" :model="newGoods" class="demo-form-inline" :rules="rules" ref="newGoods">
          <el-form-item label="编号" prop="id" >
            <el-input v-model.number="newGoods.id" placeholder="请输入产品编号"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="newGoods.name" placeholder="请输入产品名称"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input v-model.number="newGoods.price" placeholder="请输入产品价格"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add('newGoods')">增加</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="goods">
          <el-table-column prop="id" label="编号" width="50"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="price" label="价格" width="100"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="del(scope.$index, goods)"
                type="danger"
                size="mini"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "ManageShopping",
  data() {
    return {
      name: JSON.parse(localStorage.getItem("user")).name,
      goods: [],
      newGoods: {
        id: '',
        name: "",
        price: ''
      },
      rules: {
        id: [
          { required: true, message: "请输入商品编号", trigger: "blur" },
          { type: 'number', message: '必须为数字'},
        ],
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }],
        price: [
          { required: true, message: "请输入产品价格", trigger: "blur" },
          { type: 'number', message: '必须为数字'}
        ]
      }
    };
  },
  methods: {
    del(index, rows) {
      rows.splice(index, 1);
    },
    back() {
      this.$confirm("您确定要退出账号吗?", "退出", {
        confirmButtonText: "确定",
        cancelButtonText: "点错了",
        type: "warning"
      }).then(() => {
        this.$router.push({ path: "/Home" });
      });
    },
    add(newGoods) {
      this.$refs[newGoods].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "增加成功！",
            type: "success",
          });
          this.goods.push(this.newGoods), (this.newGoods = {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  beforeMount() {
    this.goods = JSON.parse(localStorage.getItem("goods"));
  }
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
</style>