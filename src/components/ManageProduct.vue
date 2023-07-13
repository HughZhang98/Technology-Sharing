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
            <el-menu-item index="/ManageShopping">产品库</el-menu-item>
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
        <el-form :inline="true" :model="newProduct" class="demo-form-inline" :rules="rules" ref="newProduct">
          <el-form-item label="编号" prop="no">
            <el-input v-model.number="newProduct.no" placeholder="请输入产品编号" size="small"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="newProduct.name" placeholder="请输入产品名称" size="small"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input v-model.number="newProduct.price" placeholder="请输入产品价格" size="small"></el-input>
          </el-form-item>
          <el-form-item label="CPU" prop="price">
            <el-input v-model.number="newProduct.cpu" placeholder="请输入产品CPU" size="small"></el-input>
          </el-form-item>
          <el-form-item label="特色" prop="price">
            <el-input v-model.number="newProduct.feature1" placeholder="请输入产品特色" size="small"></el-input>
          </el-form-item>
          <el-form-item label="特色" prop="price">
            <el-input v-model.number="newProduct.feature2" placeholder="请输入产品特色" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add('newProduct')" size="small">增加</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="products">
          <el-table-column prop="no" label="编号" width="50"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="cpu" label="CPU"></el-table-column>
          <el-table-column prop="feature1" label="特色"></el-table-column>
          <el-table-column prop="feature2" label="特色"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click.native.prevent="del(scope.$index, products)" type="danger" size="mini">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "ManageProduct",
  data() {
    return {
      name: JSON.parse(localStorage.getItem("user")).name,
      products: [],
      newProduct: {
        no:'',
        name: '',
        price:'',
        feature1: '',
        feature2: '',
        cpu: ''
      },
      rules: {
        no: [
          { required: true, message: "请输入商品编号", trigger: "blur" },
          { type: 'number', message: '必须为数字'},
        ],
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }],
        price: [
          { required: true, message: "请输入产品价格", trigger: "blur" },
          { type: 'number', message: '必须为数字'}
        ],
        name: [{ required: true, message: "请输入产品CPU", trigger: "blur" }],
        feature1: [{ required: true, message: "请输入产品特色", trigger: "blur" }],
        feature2: [{ required: true, message: "请输入产品特色", trigger: "blur" }],
      }
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
    },
    del(index, rows) {
      rows.splice(index, 1);
    },
    add(newProduct) {
      this.$refs[newProduct].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "增加成功！",
            type: "success",
          });
          this.products.push(this.newProduct), (this.newProduct = {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });

    }
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("products"));
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