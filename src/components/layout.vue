<template>
  <el-container class="wrap">
    <el-header> 管理系统 </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="/user">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>管理菜单</span>
            </template>
            <el-menu-item index="/user">学生管理</el-menu-item>
            <el-menu-item index="/list">课程管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {};
</script>
<style scpord>
.wrap {
  height: 100vh;
}
.el-header {
  background-color: skyblue;
  color: #fff;
  /* text-align: center; */
  font-size: 25px;
  line-height: 60px;
}
.el-aside {
  background: #545c64;
}
</style>