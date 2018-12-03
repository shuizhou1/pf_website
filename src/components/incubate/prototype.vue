<template>
  <div class="prototype">

    <!-- 导航条 -->

    <div
      class="nav_wraper"
      :class="{active:isActive}"
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
            <a
              href="#"
              class="show_list"
            >孵化服务</a>
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

    <!-- 背景图片部分 -->

    <div class="top_img_wraper">
      <div class="desc">
        <p class="top_img_title"><span>靠谱的科技合伙人</span></p>
        <p class="price">1999<span>元/套</span></p>
        <p class="order"><a href="#" class="btn_link">免费预约</a></p>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="prototype_content container">
      <div class="prototype_content_item">
        <p class="title"><span>产品原型的重要性</span></p>
        <div class="imgBox1">
          <img src="static/images/product.png">
        </div>
      </div>
      <!-- 产品经理 -->
      <div class="prototype_content_item">
        <p class="title"><span>产品经理</span></p>
        <p class="sub_title"><span>资深行业经验 专业需求梳理&原型设计</span></p>
        <ul class="engineer_list clearfix">
          <li>
            <div class="avatar">
              <img src="static/images/img1.png">
            </div>
            <p class="name">
              <span>小李</span>
            </p>
            <p class="desc">
              <span>产品经理，11年互联网资深产品工作经验</span>
            </p>
          </li>
           <li>
            <div class="avatar">
              <img src="static/images/img1.png">
            </div>
            <p class="name">
              <span>小李</span>
            </p>
            <p class="desc">
              <span>产品经理，11年互联网资深产品工作经验</span>
            </p>
          </li>
           <li>
            <div class="avatar">
              <img src="static/images/img1.png">
            </div>
            <p class="name">
              <span>小李</span>
            </p>
            <p class="desc">
              <span>产品经理，11年互联网资深产品工作经验</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="prototype_content_item">
        <p class="title"><span>产品原型的重要性</span></p>
        <div class="imgBox2">
          <img src="static/images/axure1.png">
        </div>
      </div>
      <div class="prototype_content_item">
        <p class="title"><span>产品原型的重要性</span></p>
        <div class="imgBox3">
          <img src="static/images/flow.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    // 导航条滚动事件
    navbarScoll() {
      if (scrollY >= 80) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.navbarScoll);
  }
};
</script>
<style lang="less" scoped>
.prototype {
  // 顶部背景图片部分
  .top_img_wraper {
    height: 600px;
    background: url("../../../static/images/ui_banner.png") no-repeat;
    background-size: cover;
    position: relative;
    color: #fff;
    .desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 0;
      p:not(:last-child) {
        margin-bottom: 20px;
      }
      .top_img_title {
        span {
          font-size: 48px;
        }
      }
      .price {
        font-size: 120px;
        span {
          font-size: 18px;
        }
      }
      .order {
        a {
          border: 1px solid #fff;
          color: #fff;
        }
        a:hover {
          background: rgba(40,110,225,.7);
        }
      }
    }
  }
  // 内容部分
  .prototype_content {
    .prototype_content_item {
      padding-top: 120px;
      .title {
        font-size: 36px;
        padding-bottom: 60px;
        text-align: center;
      }
      .sub_title {
        text-align: center;
        padding-bottom: 50px;

      }

      img {
        width: 100%;
        // height: 100%;
      }
      // 产品经理

      .engineer_list {
        li:not(:nth-child(3n + 3)) {
          margin-right: 36px;
        }
        li {
          float: left;
          width: 296px;
          text-align: center;
          background: #fff;
          // box-shadow: 0 0 2px #ddd;
          margin-bottom: 60px;
          div.avatar {
            height: 300px;
            img {
              width: 296px;
              height: 300px;
            }
          }
          p.name {
            font-size: 24px;
            padding: 20px 0 10px 0;
          }
          p.desc {
            font-size: 18px;
            color: #888;
          }
        }
      }
    }
  }
}
</style>
