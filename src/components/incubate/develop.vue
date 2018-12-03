<template>
  <div class="develop">

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
        <p class="top_img_title"><span>一个成功的产品从原型开始</span></p>
        <p class="top_img_subtitle"><span>如果创业遇到技术困难，不妨与我们沟通，我们愿意做您免费的技术顾问。</span></p>
        <p class="order"><a
            href="#"
            class="btn_link"
          >免费预约</a></p>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="develop_content">
      <!-- 友情链接 -->
      <div class="develop_link container">
        <ul class="develop_link_list clearfix">
          <li class="fl">
            <img src="static/images/eshow.png">
            <div class="develop_link_txt">
              <p class="txt_title"><span>EShow开源框架</span></p>
              <p class="txt_details"><span>覆盖Web,Android,iOS一站式移动开发框架。 开发团队10年沉淀，技术不断更新，始终领先。</span></p>
              <p class="txt_link"><a
                  href="#"
                  class="btn_link"
                >EShow Github</a></p>
            </div>
          </li>
          <li class="fl">
            <img src="static/images/eshow.png">
            <div class="develop_link_txt">
              <p class="txt_title"><span>EShow开源框架</span></p>
              <p class="txt_details"><span>覆盖Web,Android,iOS一站式移动开发框架。 开发团队10年沉淀，技术不断更新，始终领先。</span></p>
              <p class="txt_link"><a
                  href="#"
                  class="btn_link"
                >EShow Github</a></p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 工程师团队 -->
      <div class="develop_team">
        <div class="container">
          <p class="title"><span>一流的工程师团队</span></p>
          <div class="img_box">
            <img src="static/images/develop_people.png">
          </div>
          <div class="develop_txt">
            <p>每周关键点交付，资深项目经理管理，后备团队保证开发稳定</p>
            <p>重要里程碑，三次交付，确定产品质量</p>
            <p>最关键的是，您的项目经费，我们合理分配到工程师的手中，奖金顶呱呱。</p>
          </div>
        </div>
      </div>
      <!-- 价格 -->
      <div class="develop_prices">
        <div class="container">
          <p class="title"><span>价格透明，服务贴心</span></p>
          <div class="img_box">
            <img src="static/images/table.png">
          </div>
          <p class="check_more">
            <a
              href="#"
              class="btn_link"
            >查看更多</a>
          </p>
        </div>
      </div>

      <!-- 原型设计流程 -->
      <div class="design_procedure">
        <div class="container">
          <p class="title"><span>产品原型设计流程</span></p>
          <div class="img_box">
            <img src="static/images/develop_flow.png">
          </div>
          <p class="order">
            <a href="#" class="btn_link">免费预约</a>
          </p>
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
.develop {
  // 顶部背景图片部分
  .top_img_wraper {
    height: 600px;
    background: url("../../../static/images/develop_banner.png") no-repeat;
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
      .top_img_subtitle {
        font-size: 24px;
      }
      .order {
        a {
          border: 1px solid #fff;
          color: #fff;
          margin: 40px auto 0 auto;
        }
      }
    }
  }
  // 内容部分
  .develop_content {
    // 友情链接
    .develop_link {
      padding: 50px 20px 0 20px;
      .develop_link_list {
        li:first-child {
          margin-right: 30px;
        }
        li {
          height: 400px;
          width: 445px;
          border: 1px solid #2e82eb;
          position: relative;
          text-align: center;
          .develop_link_txt {
            top: 45%;
            width: 100%;
            .txt_title {
              font-size: 24px;
              margin-bottom: 30px;
            }
            .txt_details {
              font-size: 16px;
              margin-bottom: 30px;
              padding: 0 20px;
            }
            .txt_link {
              a {
                bottom: 10%;
                background: rgb(46,130,235);
                color: #fff;
              }
              a:hover {
                background: rgba(40,110,245);
              }
            }
          }
          img {
            top: -40px;
          }
          img,
          .develop_link_txt {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

    // develop team
    .develop_team {
      padding: 120px 0;
      background: #f5f5f5;
      .img_box {
        img {
          width: 100%;
          // height: 100%;
        }
      }
      .develop_txt {
        text-align: center;
        padding-top: 60px;
        color: #666;
      }
    }
    // 价格
    .develop_prices {
      padding: 120px 0;
      .img_box {
        img {
          width: 100%;
        }
      }
      .check_more {
        text-align: center;
        padding-top: 80px;
        a {
          color: #2e82eb;
          border: 1px solid #2e82eb;
        }
        a:hover {
          background: #2e82eb;
          color: #fff;
        }
      }
    }

    // 原型设计流程

    .design_procedure {
      padding: 120px 0;
      background: #f5f5f5;
      .img_box {
        img {
          width: 100%;
        }
      }
      .order {
        text-align: center;
        padding-top: 80px;
        a {
          color: #fff;
          background: rgb(46,130,235);
          // opacity: .8;
        }
        a:hover {
          background: rgb(40,110,245);
        }
      }
    }
  }
}
</style>
