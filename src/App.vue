<template>
  <div id="app">
    <tab1>
      <tab-item path="/home">
        <img slot="tabImg" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="tabImg2" src="~assets/img/tabbar/home_active.svg">
        <div slot="tabText">首页</div>
      </tab-item>
      <tab-item path="/category">
        <img slot="tabImg" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="tabImg2" src="~assets/img/tabbar/category_active.svg">
        <div slot="tabText">分类</div>
      </tab-item>
      <tab-item path="/cart" activ>
        <img slot="tabImg" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="tabImg2" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="tabText">购物车</div>
      </tab-item>
      <tab-item path="/profile">
        <img slot="tabImg" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="tabImg2" src="~assets/img/tabbar/profile_active.svg">
        <div slot="tabText">我的</div>
      </tab-item>
    </tab1>
    <router-view></router-view>
  </div>
</template>

<script>
  import tab1 from './components/common/tab/tab1';
  import tabItem from "./components/common/tab/tabItem";
  export default {
   name: 'App',
   components:{
     tab1,
     tabItem
   }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
