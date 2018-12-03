<template>
  <div class="about_us">

    <!-- 导航条 -->

    <!-- 导航条 -->
    <div
      class="nav_wraper"
      :class="{active:isActive}">
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

    <!-- 顶部图片部分 -->

    <div class="about_img_wraper">
      <p class="quality"><span>坚韧、积极、顽强、不懈</span></p>
    </div>

    <!-- m目录列表 -->
    <div class="about_tips">
      <div class="container">
        <a
          href="#introduce"
          class="active"
        >我们是谁</a>
        <a href="#active">活力团队</a>
        <a href="#concact">联系我们</a>
        <a href="#">加入我们</a>
      </div>
    </div>

    <!-- 内容区 -->

    <div class="about_content_wraper">
      <div class="container">
        <div class="introduce">
          <p
            class="title"
            id="introduce"
          ><span>我们是谁</span></p>
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
          <p
            class="title"
            id="active"
          ><span>活力团队</span></p>
          <div class="details">
            <p>
              我们是追求品质与力求不断超越自己的团队，每一位成员也是亲密的伙伴，与公司一起成长与发展。我们尊重每次合作的机会与挑战，不断精进，力求完美。团队秉承专注、专业的设计服务思维，让客户通过设计发挥产品的最大价值，并发掘无限的可能。
            </p>
          </div>
          <div class="img_box clearfix">
            <div class="left fl">
              <img
                src=""
                alt=""
              >
            </div>
            <div class="mid fl">
              <div>
                <img
                  src=""
                  alt=""
                >
              </div>
              <div>
                <img
                  src=""
                  alt=""
                >
              </div>
            </div>
            <div class="right fl">
              <img
                src=""
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="concact_us">
          <p
            class="title"
            id="concact"
          >联系我们</p>
          <div class="concact_txt">
            <p class="name">广州市培风科技有限公司</p>
            <p>联系电话：18814143519</p>
            <p>地址：广州市黄埔区萝岗奥园广场H2栋609</p>
          </div>
          <!-- 地图 -->
          <div class="map_wraper container">
            <baidu-map
              class="map"
              :center="center"
              :zoom="zoom"
              @ready="handler"
            >
              <bm-marker
                :position="center"
                animation="BMAP_ANIMATION_BOUNCE"
              >
              </bm-marker>
            </baidu-map>
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
      isActive: false,
      zoom: 16,
      center: {
        lng: 113.503329279,
        lat: 23.1798871734
      }
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
    },

    // BaiduMap 组件及其所有子组件的渲染只能是异步的。因此，只能在组件的 ready 事件来执行地图 API 加载完毕后才能执行的代码
    handler({ BMap, map }) {
      // console.log(BMap.Geolocation)
      // console.log( map)
      let geolocation = new BMap.Geolocation();
      console.log(geolocation.getCurrentPosition);
      geolocation.getCurrentPosition(function(r) {
        console.log(r);
      });
    }
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.navbarScoll);
  }
};
</script>
<style lang="less" scoped>
.about_us {

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
    box-shadow: 0px 1px 2px #aaa;
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
    a.active::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #0086eb;
      bottom: -2px;
      left: 0;
    }
    a:hover::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #0086eb;
      bottom: -2px;
      left: 0;
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
      padding: 100px 0 60px 0; // 有position： fixed的锚点定位，内容加上padding，不能用margin代替，否则内容会被挡住
    }
    .details {
      p {
        text-indent: 2em;
        margin-bottom: 20px;
        line-height: 25px;
      }
    }

    //  活力团队

    .team {
      .img_box > div {
        height: 400px;
        width: 320px;
        border: 1px solid #ddd;
        box-sizing: border-box;
      }
      .img_box .mid div {
        height: 200px;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    // 联系我们

    .concact_us {
      .concact_txt {
        padding-bottom: 30px;
        border-bottom: 1px solid #aaa;
        p {
          font-size: 16px;
          margin-bottom: 5px;
          color: #666;
        }
        p.name {
          color: #333;
          font-size: 18px;
          margin-bottom: 8px;
        }
      }
      // 地图
      .map_wraper {
        margin-bottom: 100px;
        .map {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
}
</style>
