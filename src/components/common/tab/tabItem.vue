<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!active"><slot name="tabImg"></slot></div>
    <div v-else><slot name="tabImg2"></slot></div>
    <div :style="activeStyle"><slot name="tabText"></slot></div>
  </div>
</template>
<script>
    export default {
      name: "tabItem",
        props:{
          path:String,
          activeColor:{
              type:String,
              default:'red'
          }
        },
      data(){
          return{
              // active:false,
          }
      },
      methods:{
          itemClick(){
              this.$router.push(this.path)
          }

      },
      computed:{
          active(){
              return this.$route.path.indexOf(this.path) !==-1
          },
          activeStyle(){
              return this.active?{color:this.activeColor}:{}
          }
      }
    }
</script>

<style scoped>
  .tab-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-item img{
    width: 24px;
    height: 24px;
  }
</style>
