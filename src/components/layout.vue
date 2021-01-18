<template>
  <el-container class="wrap">
    <el-header> 
        <span class="fl">管理系统</span>   
        <span class="fr">欢迎：{{$store.state.userinfo.username}} <a href="" @click="quit">退出登录</a></span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          background-color="#4682B4"
          text-color="#fff"
          active-text-color="	#FF4500"
          router
          unique-opened
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            首页
          </el-menu-item>
          <el-submenu v-for="item of $store.state.userinfo.menus" :key="item.id" :index="item.title">
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
  methods:{
    quit(){
      this.$store.commit('setUserInfo',null)
      this.$router.replace('/login')
    }
  }
};
</script>
<style scpord>
.wrap {
  height: 100vh;
}
.el-header {
  background-color:	#00BFFF;
  color: #fff;
  font-size: 25px;
  line-height: 60px;
}
.el-aside {
  background: #4682B4;
}
.el-main{
  background: 	#F0F8FF;
}
.fl{
  float: left;
}
.fr{
  float: right;
  font-size: 18px;
}
.fr a{
  font-size: 13px;
  color: #A9A9A9;
  text-decoration: none;
}
</style>