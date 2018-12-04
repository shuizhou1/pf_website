<template>
  <div id="peifeng_website">
    <router-view></router-view>

    <!-- 底部 -->

    <div class="footer">
      <div class="container">
        <div class="top clearfix">
          <div class="top_left fl">
            <span>培风科技</span>
          </div>
          <div class="top_mid fl">
            <a href="/about">关于我们</a>
            <a href="/about#concact">联系我们</a>
            <a href="/join">加入我们</a>
            <!-- <a href="">合作伙伴</a> -->
          </div>
          <div class="top_right fr">
            <span>联系电话：</span>
            <!-- <i class="tel_icon fa fa-phone-square"> </i> -->
            <span>18814143516</span>
          </div>
        </div>
        <div class="bottom">
          <span>广州市培风科技有限公司</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "peifeng_website",
  data() {
    return {
      isActive: ""
    };
  }
};
</script>

<style lang="less">

@import '../static/css/index.less';
// 底部样式
#peifeng_website {
  position: relative;
  .footer {
    width: 100%;
    background: #2e2e2e;
    color: #bbb;
    padding: 40px 0 20px 0;
    font-size: 16px;
    .top {
      padding-bottom: 30px;
      height: 40px;
      line-height: 40px;
      .top_left {
        font-size: 25px;
      }
      .top_mid {
        padding-left: 200px;
        // padding-top: 5px;
        a {
          color: #bbb;
          padding-right: 30px;
          position: relative;
        }
        a:hover {
          color: #fff;
        }
        a:not(:last-child)::after {
          content: "";
          height: 18px;
          width: 1px;
          background: #ddd;
          color: #ddd;
          position: absolute;
          right: 10%;
          top: 50%;
          transform: translateY(-40%);
        }
      }
      .top_right {
        .tel_icon {
          font-size: 24px;
          vertical-align: middle;
          color: yellowgreen;
        }
        span {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
