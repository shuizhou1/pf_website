<template>
  <div class="about_us">

    <!-- 导航条 -->

    <!-- 导航条 -->
    <div
      class="nav_wraper"
      :class="{active:isActive}"
    >
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

    <!-- 顶部图片部分 -->

    <div class="about_img_wraper">
      <p class="quality"><span>坚韧、积极、顽强、不懈</span></p>
    </div>

    <!-- m目录列表 -->
    <div class="about_tips">
      <div class="container">
        <a
          href="#"
          class="active"
        >我们是谁</a>
        <a href="#">活力团队</a>
        <a href="#">联系我们</a>
        <a href="#">加入我们</a>
      </div>
    </div>

    <!-- 内容区 -->

    <div class="about_content_wraper">
      <div class="container">
        <div class="introduce ">
          <p class="title"><span>我们是谁</span></p>
          <div class="details">
            <p>
              培风科技有限公司（PeiFeng Technology）创建于2009年，致力于成为中国领先的技术架构与技术服务提供商，2012年公司组建移动互联网团队。公司位于无锡市太湖新城科教产业园，是一家拥有自主知识产权的互联网企业。到群软件长期专注于互联网社会化平台研发和运营，公司多位成员具有长期的互联网社区研发和商业运营经验，是中国最专业的网站研发和运营团队之一。
            </p>
            <p>
              培风科技有限公司（PeiFeng Technology）创建于2009年，致力于成为中国领先的技术架构与技术服务提供商，2012年公司组建移动互联网团队。公司位于无锡市太湖新城科教产业园，是一家拥有自主知识产权的互联网企业。到群软件长期专注于互联网社会化平台研发和运营，公司多位成员具有长期的互联网社区研发和商业运营经验，是中国最专业的网站研发和运营团队之一。
            </p>
            <p>
              培风科技有限公司（PeiFeng Technology）创建于2009年，致力于成为中国领先的技术架构与技术服务提供商，2012年公司组建移动互联网团队。公司位于无锡市太湖新城科教产业园，是一家拥有自主知识产权的互联网企业。到群软件长期专注于互联网社会化平台研发和运营，公司多位成员具有长期的互联网社区研发和商业运营经验，是中国最专业的网站研发和运营团队之一。
            </p>
          </div>
        </div>
        <div class="team">
          <p class="title"><span>活力团队</span></p>
          <div class="details">
            <p>
              我们是追求品质与力求不断超越自己的团队，每一位成员也是亲密的伙伴，与公司一起成长与发展。我们尊重每次合作的机会与挑战，不断精进，力求完美。团队秉承专注、专业的设计服务思维，让客户通过设计发挥产品的最大价值，并发掘无限的可能。
            </p>
          </div>
          <div class="img_show">
            <ul class="img_list">
              <li></li>
            </ul>
          </div>
        </div>
        <div class="concact_us">
          <p class="title">联系我们</p>
          <div class="details">
            <p></p>
          </div>
        </div>
        <div class="about_conten_item">
          <p class="title"></p>
          <div class="details">
            <p></p>
          </div>
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
    navbarScoll() {
      if (scrollY >= 80) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  created() {
   
  },
  mounted() {
    window.addEventListener("scroll", this.navbarScoll);
  }
};
</script>
<style lang="less" scoped>
.about_us {

  // 滑动后的导航条样式

  .nav_wraper.active {
    background: rgba(255, 255, 255, 1);
    .nav {
      .nav_left {
        color: #0086eb;
      }
      .nav_right {
        a {
          color: #333;
        }
        a:hover {
          color: #0086eb;
        }
        a.router-link-exact-active {
          color: #0086eb;
        }
      }
    }
  }
  // 导航条样式

  .nav_wraper {
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0);
    .nav {
      width: 960px;
      height: 80px;
      line-height: 80px;
      margin: 0 auto;
      .nav_left {
        font-size: 30px;
        color: #f9f9f9;
        font-weight: 600;
        float: left;
      }
      .nav_right {
        float: right;
        a {
          margin-left: 50px;
          color: #f9f9f9;
          font-size: 14px;
        }
        a:hover {
          color: #e5e5e5;
        }
      }
    }
  }

  // 背景图样式

  .about_img_wraper {
    height: 600px;
    background: url("../../static/images/about_banner.png") no-repeat;
    background-size: cover;
    position: relative;
    .quality {
      position: absolute;
      color: #fff;
      font-size: 44px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  // 列表

  .about_tips {
    height: 60px;
    line-height: 60px;
    // border-bottom: 1px solid #ddd;
    box-shadow: 0px 2px 2px #ddd;
    .container {
      width: 640px;
    }
    a {
      color: #444;
      display: inline-block;
      width: 120px;
      text-align: center;
      position: relative;
    }
    a:not(:last-child) {
      margin-right: 48px;
      font-size: 16px;
    }
    a:hover {
      color: #777;
    }
  }

  //内容
  .about_content_wraper {
    color: #333;
    .title {
      font-size: 30px;
      text-align: center;
      margin: 100px 0 60px 0;
    }
    .details {
      p {
        text-indent: 2em;
        margin-bottom: 20px;
        line-height: 25px;
      }
    }
  }
}
</style>
