<template>
  <el-container class="wrap">
    <el-header> 管理系统 </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          unique-opened
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            首页
          </el-menu-item>
          <el-submenu v-for="item of menus" :key="item.id" :index="item.title">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="subitem of item.children"
              :key="subitem.id"
              :index="subitem.url"
              >{{ subitem.title }}</el-menu-item
            >
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
import axios from "axios";
export default {
  data() {
    return {
      menus: [],
      defaultActive: "",
    };
  },
  mounted() {
    this.defaultActive = this.$route.meta.selected;
    axios.get("/api/menulist", { params: { istree: true } }).then((res) => {
      this.menus = res.data.list;
    });
  },
  watch: {
    $route(newVal) {
      this.defaultActive = newVal.meta.selected;
    },
  },
};
</script>
<style scpord>
.wrap {
  height: 100vh;
}
.el-header {
  background-color: #2f4f4f;
  color: #fff;
  font-size: 25px;
  line-height: 60px;
}
.el-aside {
  background: #545c64;
}
</style>