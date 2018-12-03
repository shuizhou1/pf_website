<template>
  <div class="pf_homePage">
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

    <!-- 顶部图片部分 -->

    <div class="top_img_wraper">
      <div class="desc">
        <span>靠谱的科技合伙人</span>
        <p><a href="#" class="btn_link">预约项目</a></p>
      </div>
    </div>

    <!-- 服务类型部分 -->

    <div class="service_wraper pd_120">
      <div class="container">
        <p class="headline">
          <span>我们提供高品质的服务</span>
        </p>
        <ul class="service_list clearfix">
          <li>
            <p class="icon">
              <i class="fa fa-fort-awesome"></i>
            </p>
            <p class="title">
              <span>初级服务</span>
            </p>
            <p class="content">
              <span>UI原型设计,Ui界面设计</span>
            </p>
          </li>
          <li>
            <p class="icon">
              <i class="fa fa-fort-awesome"></i>
            </p>
            <p class="title">
              <span>初级服务</span>
            </p>
            <p class="content">
              <span>UI原型设计,Ui界面设计</span>
            </p>
          </li>
          <li>
            <p class="icon">
              <i class="fa fa-fort-awesome"></i>
            </p>
            <p class="title">
              <span>初级服务</span>
            </p>
            <p class="content">
              <span>UI原型设计,Ui界面设计</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 成员介绍 -->

    <div class="engineers pd_120">
      <div class="container">
        <p class="headline">
          <span>为您提供优质CTO</span>
        </p>
        <ul class="engineer_list clearfix">
          <li
            v-for="(item,key) in cards"
            :key="key"
          >
            <div class="avatar">
              <img
                :src="item.icon"
                alt
              >
            </div>
            <p class="title">
              <span>{{item.title}}</span>
            </p>
            <p class="content">
              <span>{{item.content}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- cto职责 -->

    <div class="technology_duty pd_120">
      <div class="container">
        <p class="headline">
          <span>CTO的职责</span>
        </p>
        <ul class="duty_list clearfix">
          <li class="duty_item clearfix bm">
            <div class="fl clearfix">
              <div class="icon fl">
                <i class="fa fa-users"></i>
              </div>
              <div class="content fl pl">
                <p class="title">
                  <span>组建优质的团队</span>
                </p>
                <p class="desc">
                  <span>为您推荐优质的团队</span>
                </p>
              </div>
            </div>
          </li>
          <li class="min">
            <div class="min_line"></div>
          </li>
          <li class="duty_item clearfix bm">
            <div class="fr clearfix">
              <div class="icon fr pl">
                <i class="fa fa-users"></i>
              </div>
              <div class="content fr">
                <p class="title">
                  <span>组建优质的团队</span>
                </p>
                <p class="desc">
                  <span>为您推荐优质的团队</span>
                </p>
              </div>
            </div>
          </li>
          <li class="duty_item clearfix">
            <div class="fl clearfix">
              <div class="icon fl">
                <i class="fa fa-users"></i>
              </div>
              <div class="content fl pr">
                <p class="title">
                  <span>组建优质的团队</span>
                </p>
                <p class="desc">
                  <span>为您推荐优质的团队</span>
                </p>
              </div>
            </div>
          </li>
          <li class="min">
            <div class="min_line mt"></div>
          </li>
          <li class="duty_item clearfix">
            <div class="fr clearfix">
              <div class="icon fr">
                <i class="fa fa-users"></i>
              </div>
              <div class="content fr pr">
                <p class="title">
                  <span>组建优质的团队</span>
                </p>
                <p class="desc">
                  <span>为您推荐优质的团队</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 项目设计流程 -->

    <div class="procedure pd_120">
      <p class="headline">
        <span>完善的产品生产流程</span>
      </p>
      <div class="img_wraper container">
        <img
          src="static/images/procedure.png"
          alt=""
        >
      </div>
    </div>

    <!-- 客户 -->

    <div class="customer pd_120">
      <p class="headline">
        <span>我们的客户</span>
      </p>
      <div class="container">
        <ul class="customer_list clearfix">
          <li class="fl">
            <img src="static/images/customer1.png">
          </li>
          <li class="fl">
            <img src="static/images/customer1.png">
          </li>
          <li class="fl">
            <img src="static/images/customer1.png">
          </li>
          <li class="fl">
            <img src="static/images/customer1.png">
          </li>

        </ul>
      </div>

    </div>

    <!-- 合作伙伴 -->

    <div class="parner pd_120">
      <p class="headline">
        <span>我们的合作伙伴</span>
      </p>
      <div class="container">
        <ul class="parner_list clearfix">
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
          <li class="fl">
            <img src="static/images/parner1.png">
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
import pfNav from "./commen/nav.vue";
import card from "../assets/js/data.js";
export default {
  name: "pf_homepage",
  data() {
    return {
      isActive: false,
      cards: []
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
  created() {
    this.cards = card.homepage.cards;
  },
  mounted() {
    window.addEventListener("scroll", this.navbarScoll);
  }
};
</script>
<style  lang="less" scoped>
// 公共样式

.pd_120 {
  padding: 120px 0;
}

p.headline {
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 80px;
}

//


.pf_homePage {
  // 上部背景图片部分样式

  .top_img_wraper {
    height: 925px;
    background: url("../assets/images/tim.jpg") no-repeat;
    background-size: cover;
    position: relative;
    .desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 0;
      span {
        font-size: 48px;
        color: #fff;
      }
      a {
        background: rgb(46,130,235);
        border-radius: 5px;
        color: #fff;
        margin: 40px auto 0 auto;
      }
      a:hover {
        background: rgb(40,110,245);
      }
    }
  }

  // 服务类别部分样式

  .service_wraper {
    background: #f5f5f5;
    .service_list {
      li:not(:last-child) {
        margin-right: 36px;
      }
      // li:hover {
      //   box-shadow: 0 0 10px #aaa;
      // }
      li {
        float: left;
        width: 296px;
        text-align: center;
        background: #fff;
        box-shadow: 0 0 2px #ddd;
        p.icon {
          font-size: 80px;
          padding-top: 40px;
        }
        p.content {
          font-size: 16px;
          color: #888;
          padding-bottom: 40px;
        }
        p.title {
          font-size: 24px;
          padding: 35px 0 20px 0;
          color: #333;
        }
        // height: 420px;
      }
    }
  }

  // 工程师介绍
  .engineers {
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
        p.title {
          font-size: 24px;
          padding: 20px 0 10px 0;
        }
        p.content {
          font-size: 18px;
          color: #888;
        }
      }
    }
  }
  // 工程师职责
  .technology_duty {
    background: #f5f5f5;
    .duty_list {
      li {
        float: left;
        height: 120px;
      }
      li.min {
        width: 2%;
        .min_line {
          width: 1px;
          height: 110px;
          background: #ddd;
          margin: 0 auto;
        }
        .mt {
          margin-top: 10px;
        }
      }
      li.bm {
        border-bottom: 1px solid #ddd;
      }
      li.duty_item {
        width: 49%;
        height: 120px;
        div.icon {
          font-size: 60px;
          padding-top: 20px;
          color: #2e82eb;
        }
        div.content {
          padding-top: 30px;
          p.title {
            font-size: 24px;
            padding-bottom: 10px;
          }
          p.desc {
            color: #333;
          }
        }
        .pl {
          padding-left: 40px;
        }
        .pr {
          padding: 40px;
        }
      }
    }
  }

  // 产品生产流程样式

  .procedure {
    .img_wraper {
      img {
        width: 960px;
      }
    }
  }

  // 客户部分样式
  .customer {
    background: #f5f5f5;
    .customer_list {
      li {
        width: 210px;
        height: 160px;
      }
      li:not(:last-child) {
        padding-right: 40px;
      }
    }
  }

  // 合作伙伴部分样式

  .parner {
    .parner_list {
      li:not(:last-child) {
        padding-right: 21px;
      }
      li {
        img {
          border: 1px solid #eee;
        }
      }
    }
  }
}
</style>
