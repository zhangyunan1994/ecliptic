<template>
  <el-container>
    <el-header style="height: 60px;">
      <el-row>
        <el-col :span="8">
          <img src="@/assets/logo.png" width="50" style="padding-top:5px; padding-left:20px;">
        </el-col>
        <el-col :span="16" style="text-align: right; padding-right: 30px;">

          <el-dropdown v-if="isLogin">
            <span class="el-dropdown-link">
              <i class="el-icon-setting el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <el-button @click="dash" plain size="medium" v-if="isLogin">首页</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>

    </el-main>
    <el-footer>&copy; 2021 - {{ currentYear }}</el-footer>
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
    isLogin() {
      return true
    }
  },
  methods: {
    dash() {
      this.$router.push({name: 'dash'})
    }
  }
}
</script>

<style scoped>
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

.el-footer {
  background-color: #252d36;
  color: #ffc852;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
}
</style>
