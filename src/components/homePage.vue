<template>
  <div class="pf_homePage">
    <div class="top_wraper">
      <div class="nav_wraper">
        <div class="nav">
          <div class="nav_left">
            <span>培风科技</span>
          </div>
          <div class="nav_right">
            <router-link to='/'>首页</router-link>
            <router-link to='/incubate'>孵化服务</router-link>
            <router-link to='/cases'>案例展示</router-link>
            <router-link to='/solution'>解决方案</router-link>
            <router-link to='/about'>关于我们</router-link>
            <router-link to='/contact'>联系我们</router-link>
          </div>
        </div>
      </div>
      <div class="desc">
        <span>靠谱的科技合伙人</span>
        <a href="#">预约项目</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  lang="less" scoped>
.pf_homePage {
  .top_wraper {
    height: 925px;
    background: url("../assets/images/tim.jpg") no-repeat;
    background-size: cover;
     color: #fff;
    .nav_wraper {
      height: 80px;
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
     
      // background: #fff;
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
    .desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform:translateX(-50%);
      text-align: center;
      span {
        font-size: 48px;
      }
      a{
        display: block;
        width: 200px;
        height: 60px;
        line-height: 60px;
        background: #2e82eb;
        color: #fff;
        font-size: 18px;
        text-align: center;
        margin:40px auto 0 auto;
      }
    }
  }
}
</style>
