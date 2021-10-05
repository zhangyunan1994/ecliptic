<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="14">
          <img src="@/assets/logo.png" style="width: 40px; padding-top:10px; padding-left:20px;">
        </el-col>
        <el-col :span="10" class="align-right">
          <el-button @click="$router.push({ path: '/' })">回首页</el-button>
          <el-button @click="$router.push({ path: '/about' })">关于</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="content-v">
      <el-aside class="aside">
        <el-menu
          :default-active="menuActive"
          :uniqueOpened="true"
          style="border: 0"
          background-color="#545c64"
          text-color="#fff"
          :router="true"
          active-text-color="#ffd04b">
          <el-menu-item index="/app/dash"><i class="el-icon-house"/>处理中心</el-menu-item>
        </el-menu>
        <div class="footer">&copy; 2021 - {{ currentYear }}</div>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    menuActive() {
      return this.$route.path
    },
    isLogin() {
      return true
    }
  }
}
</script>

<style scoped>
.el-header {
  height: 60px;
  background-color: white;
  line-height: 60px;
}

.footer {
  text-align: center;
  line-height: 60px;
  width: 200px;
  background-color: #545c64;
  color: #fecf57;
  clear: both;
  position: absolute;
  margin-top: -60px;
  bottom: 0px;
}

.aside {
  width: 200px !important;
  height: 100% !important;
  background-color: #545c64;
}

.el-container {
  height: 100%;
}

.el-header {
  height: 60px;
  background-color: white;
  line-height: 60px;
}

.el-header > span,
.el-header .el-dropdown {
  font-size: 18px;
}

.el-main {
  text-align: left;
  color: #333;
}
</style>
