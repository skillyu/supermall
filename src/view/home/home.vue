<template>
    <div id="home">
      <nav-bar class="homenav"><div slot="center">购物街</div></nav-bar>
      <swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt=""/>
          </a>
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
  import navBar from 'components/common/navbar/NavBar'
  import {getHome} from "../../network/home";
  import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
      name: "home",
      components: {
        navBar,
        Swiper,
        SwiperItem
      },
      data(){
        return{
          banners:[],
          recommends:[]
        }
      },
      created(){
        getHome().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      }
    }
</script>

<style scoped>
  .homenav{
    background-color: pink;
    color: white;
  }
</style>
