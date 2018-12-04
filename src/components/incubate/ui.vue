<template>
  <div class="ui">
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
        <p class="order"><a href="#" class="btn_link">免费预约</a></p>
      </div>
    </div>

    <!-- 内容部分 -->
    <!-- 设计 -->
    <div class="ui_design container">
      <p class="title"><span>用心设计</span></p>
      <p class="sub_title"><span>我们精通体验设计之道，交付可落地实现的出色产品</span></p>
      <ul class="img_list clearfix">
        <li class="fl vision">
          <div class="icon"><img src="static/images/ui_icon1.png"></div>
          <div class="txt">
            <p class="f24"><span>产品视觉设计</span></p>
            <p><span>将界面和图标设计做到极致</span></p>
          </div>
        </li>
        <li class="fl mobile">
          <div class="icon"><img src="static/images/phone.png"></div>
          <div class="txt">
            <p class="f24"><span>移动产品设计</span></p>
            <p><span>将界面和图标设计做到极致</span></p>
          </div>
        </li>
        <li class="fl web">
          <div class="icon"><img src="static/images/tv.png"></div>
          <div class="txt">
            <p class="f24"><span>网站设计</span></p>
            <p><span>没有最好 只有更好的用户体验</span></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 案列 -->
    <div class="ui_case container">
      <p class="title"><span>案例</span></p>
      <p class="sub_title"><span>我们积累了各行业丰富的案例和经验</span></p>
      <ul class="img_list clearfix">
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
        <li class="fl">
          <img src="static/images/case_img4.png">
          <div class="desc">
            <p class="name"><span>空间123</span></p>
            <p class="details"><span>UI/UX/WEB Desgin</span></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 展示 -->
    <div class="ui_show">
      <div class="container">
        <p class="title"><span>UI效果展示</span>
        </p>
        <div class="img_box">
          <img src="static/images/ui_car1.png">
        </div>
      </div>

    </div>

    <!-- 设计流程 -->
    <div class="ui_design_procedure">
      <div class="container">
        <p class="title"><span>设计流程服务</span>
        </p>
        <div class="img_box">
          <img src="static/images/ui_flow.png">
        </div>
        <p class="order"><a href="#" class="btn_link">免费预约</a></p>
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
.ui {
  .title {
    font-size: 36px;
    padding: 120px 0 60px 0;
    text-align: center;
  }
  .sub_title {
    text-align: center;
    padding-bottom: 50px;
  }

  // 顶部图片部分

  .top_img_wraper {
    height: 600px;
    background: url("../../../static/images/ui1_banner.png") no-repeat;
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
      .order {
        a {
          background: #2e82eb;
          color: #fff;
        }
        a:hover {
          opacity: 0.9;
        }
      }
    }
  }
  // 内容部分
  // 设计
  .ui_design {
    ul.img_list {
      color: #fff;
      li.vision {
        background: #2e82eb;
      }
      li.web {
        background: #3ed280;
      }
      li.mobile {
        background: #f29542;
      }
      li {
        width: 280px;
        height: 190px;
        padding: 20px;

        .icon {
          width: 58px;
          height: 56px;
          margin-bottom: 75px;
        }
        .txt {
          .f24 {
            font-size: 24px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  // 案例
  .ui_case {
    .img_list {
      li:not(:nth-child(3n + 3)) {
        padding-right: 15px;
      }
      li:hover img {
        opacity: 0.4;
      }
      li:hover .desc {
        display: block;
      }
      li {
        height: 200px;
        width: 300px;
        margin-bottom: 30px;
        position: relative;
        img {
          width: 100%;
          transition: opacity 1s;
        }
        .desc {
          white-space: nowrap;
          transition: display 1s;
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -30%);
          .name {
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
          }
          .details {
            font-style: italic;
            color: #333;
          }
        }
      }
    }
  }

  // ui展示
  .ui_show {
    background: #f5f5f5;
    padding-bottom: 120px;
    .img_box {
      height: 580px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 设计服务流程
  .ui_design_procedure {
    padding-bottom: 120px;
    .img_box {
      height: 160;
      margin-bottom: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .order {
      text-align: center;
      a {
        background: rgb(46,130,235);  
        color: #fff;
        margin: 40px auto 0 auto;
      }
      a:hover {
        background: rgb(40,110,245);
      }
    }
  }
}
</style>
