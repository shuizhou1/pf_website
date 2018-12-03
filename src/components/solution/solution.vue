<template>
  <div class="solution">
    <!-- 导航条 -->
    <div
      class="nav_wraper"
      :class="{hide:isHide}"
    >
      <div class="nav">
        <div class="nav_left">
          <span>培风科技</span>
        </div>
        <ul class="nav_right clearfix">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li class="incubate">
            <a href="#" class="show_list">孵化服务</a>
            <ul class="incubate_sub_list">
              <li>
                <router-link to="/prototype">原型设计</router-link>
              </li>
              <li>
                <router-link to="/ui">UI设计</router-link>
              </li>
              <li>
                <router-link to="/develop">技术开发</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/cases">案例展示</router-link>
          </li>
          <li>
            <router-link to="/solution">解决方案</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
          <li>
            <router-link to="/join">加入我们</router-link>
          </li>
        </ul>

      </div>
    </div>

    <!-- 顶部背景 -->

    <div class="solution_top_banner">
      <div class="icon_wraper claerfix">
        <!-- 子路由 -->
        <router-link to="/o2o">
          <div class="icon_wraper_item fl pr">
            <div class="img_box o2o"></div>
            <p><span>社区O2O</span></p>
          </div>
        </router-link>
        <router-link to="/wuliu">
          <div class="icon_wraper_item fl pr">
            <div class="img_box wuliu"></div>
            <p><span>众包物流</span></p>
          </div>
        </router-link>
        <router-link to="/hardware">
          <div class="icon_wraper_item fl pr">
            <div class="img_box hardware"></div>
            <p><span>智能硬件</span></p>
          </div>
        </router-link>
        <router-link to="/p2p">
          <div class="icon_wraper_item fl">
            <div class="img_box p2p"></div>
            <p><span>P2P网贷</span></p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
export default {
  name: "solution",
  data() {
    return {
      isHide: false
    };
  },
  methods: {
    navbarScoll() {
      if (scrollY >= 80) {
        this.isHide = true;
      } else {
        this.isHide = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.navbarScoll);
  }
};
</script>
<style lang="less" scoped>
.solution {
  // 导航条
  .nav_wraper.hide {
    display: none;
  }

  // 顶部背景

  .solution_top_banner {
    height: 600px;
    background: #2e82eb;
    position: relative;
    //  图片连接
    .icon_wraper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      a.router-link-exact-active {
        .icon_wraper_item {
          opacity: 1;
        }
      }
      .icon_wraper_item:hover {
        opacity: 1;
      }
      .icon_wraper_item.pr {
        padding-right: 80px;
      }
      .icon_wraper_item {
        text-align: center;
        opacity: 0.7;
        .img_box {
          width: 148px;
          height: 150px;
          margin-bottom: 40px;
          background-position: center center;
          background-size: cover;
        }
        .img_box.o2o {
          background: url("../../../static/images/o2o.png");
        }
        .img_box.wuliu {
          background: url("../../../static/images/wuliu.png");
        }
        .img_box.hardware {
          background: url("../../../static/images/hardware.png");
        }
        .img_box.p2p {
          background: url("../../../static/images/p2p.png");
        }
        p {
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
