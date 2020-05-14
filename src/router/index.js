import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>import('../view/home/home')
const cart = () =>import('../view/cart/cart')
const category = () =>import('../view/category/category')
const profile = () =>import('../view/profile/profile')

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    }
  ],
  mode:'history'
})

export default router
