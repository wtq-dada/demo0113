import { Form } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/layout'),
      meta:{selected:'/'},
      children: [
        {path:'menu',component:()=>import('../components/menu/index'),meta:{selected:'/menu'}},
        {path:'menu/add',component:()=>import('../components/menu/info'),meta:{selected:'/menu'}},
        {path:'menu/:id',component:()=>import('../components/menu/info'),meta:{selected:'/menu'}},
        {path:'role',component:()=>import('../components/role/index'),meta:{selected:'/role'}},
        {path:'role/add',component:()=>import('../components/role/info'),meta:{selected:'/role'}},
        {path:'role/:id',component:()=>import('../components/role/info'),meta:{selected:'/role'}},
        {path:'user',component:()=>import('../components/user/index'),meta:{selected:'/user'}},
        {path:'user/add',component:()=>import('../components/user/info'),meta:{selected:'/user'}},
        {path:'user/:id',component:()=>import('../components/user/info'),meta:{selected:'/user'}},
      ]
    },
    {
      path:'/login',
      component:()=>import('../components/login')
    }
  ]
});

import store from '../store'//引入仓库
router.beforeEach((to,from,next)=>{
  if(to.fullPath !== '/login'){
    var userinfo = store.state.userinfo;
    if(userinfo !== null){
      var nowpath = to.meta.selected;
      var allowpath = userinfo.menus_url;
      if(allowpath.indexOf('/')<0){
        allowpath.push('/')
      }
      if(allowpath.indexOf(nowpath)>=0){
        next()
      }else{
        next('/')
      }
    }else{
      next('/login')
    }
  }else{
    next();
  }
})

export default router;