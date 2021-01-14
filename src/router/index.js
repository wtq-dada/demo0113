import { Form } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../components/layout'),
      children: [
        {
          path: 'user',
          component: () => import('../components/student'),
        },{
          
            path:'/user/add',
            component:()=>import('../components/studentInfo')
          
        },
        {
          path: 'list',
          component: () => import('../components/list')
        },
      ]
    }
  ]
})
