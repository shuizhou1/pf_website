<template>
   <div class="nav_wraper" :class="{active:isActive}">
      <div class="nav">
        <div class="nav_left">
          <span>培风科技</span>
        </div>
        <div class="nav_right">
          <router-link to="/">首页</router-link>
          <router-link to="/incubate">孵化服务</router-link>
          <router-link to="/cases">案例展示</router-link>
          <router-link to="/solution">解决方案</router-link>
          <router-link to="/about">关于我们</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props:['active','backgroundColor'],
  data() {
    return {
      isActive: this.active
    }
  },
  created() {
    // console.log(this.active)
  }
}
</script>
<style lang="less" scope>
.nav_wraper.active {
  background: rgba(255,255,255,1);
}
.nav_wraper {
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  color: #f9f9f9;
  background: rgba(0,0,0,0);
  .nav {
    width: 960px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    .nav_left {
      font-size: 30px;
      // font-weight: 600;
      float: left;
    }
    .nav_right {
      float: right;
      a {
        margin-left: 50px;
        color: #f9f9f9;
        font-size: 14px;
      }
    }
  }
}
</style>
