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
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="文章标题" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="所属分区" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择分区">
              <el-option label="手机" value="phone"></el-option>
              <el-option label="电脑" value="pc"></el-option>
              <el-option label="平板电脑" value="pad"></el-option>
              <el-option label="配件" value="other"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="文章类型" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="自制"></el-radio>
              <el-radio label="转载"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="文章标签" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="开箱" name="type"></el-checkbox>
              <el-checkbox label="拆机" name="type"></el-checkbox>
              <el-checkbox label="活动" name="type"></el-checkbox>
              <el-checkbox label="曝光" name="type"></el-checkbox>
              <el-checkbox label="其他" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="文章内容" prop="desc" style="height: auto">
            <!-- <el-input type="textarea" v-model="ruleForm.desc">
               
            </el-input>-->
            <el-card style="height: 410px;" prop="desc">
              <quill-editor
                v-model="ruleForm.desc"
                ref="myQuillEditor"
                style="height: 290px;"
                :options="editorOption"
              ></quill-editor>
            </el-card>
          </el-form-item>

          <el-form-item style="margin-top: 1rem;">
            <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "Manage",
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {},
      name: JSON.parse(localStorage.getItem("user")).name,
      ruleForm: {
        name: "",
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 5, max: 20, message: "必须在 5 到 20 个字", trigger: "blur" }
        ],
        region: [{ required: true, message: "请选择分区", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个标签",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择类型", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写文章内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: "发布成功！",
            type: "success"
          });
          this.$refs[formName].resetFields();
        } else {
          // console.log("发布失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    back() {
      this.$confirm("您确定要退出账号吗?", "退出", {
        confirmButtonText: "确定",
        cancelButtonText: "点错了",
        type: "warning"
      }).then(() => {
        this.$router.push({ path: "/Home" });
      });
    }
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