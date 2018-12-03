<template>
  <div class="join_us">

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

    <div class="join_img_wraper">
      <div class="join_img_txt">
        <p><span>期待你的加入</span></p>
        <p><span>我们一起奋斗，共同进步。</span></p>
      </div>
    </div>

    <!-- 招聘信息 -->

    <div class="advertise container">
      <p class="title"><span>招聘职位</span></p>
      <ul class="job_list clearfix">
        <li class="fl">
          <div class="job_icon">
            <img src="static/images/java.png">
          </div>
          <p class="job_name"><span>Java工程师</span></p>
          <p class="job_num"><span>招聘人数：5人</span></p>
          <p class="job_address"><span>地址：广州(黄埔萝岗奥园广场)</span></p>
          <div class="job_duty">
            <p class="sub_title"><span>岗位职责</span></p>
            <p><span>1、完成产品经理分配的工作内容，优化现有产品；</span></p>
            <p><span>2、基于Struts2+spring+hibernate开发；</span></p>
            <p><span>3、充分理解工作目标。</span></p>
          </div>
          <div class="job_skill">
            <p class="sub_title"><span>职业技能</span></p>
            <p><span>1、掌握Java基础知识，熟练Java Web开发；</span></p>
            <p><span>2、热爱IT行业，有志长期从事软件开发行业者；</span></p>
            <p><span>3、具备良好的逻辑思维能力和学习能力；</span></p>
            <p><span>4、较好的沟通能力和综合素养；</span></p>
            <p><span>5、积极、乐观，注重沟通，注重团队协作</span></p>
          </div>
        </li>
        <li class="fl">
          <!-- <div class="fr"> -->
            <div class="job_icon">
              <img src="static/images/java.png">
            </div>
            <p class="job_name"><span>Java工程师</span></p>
            <p class="job_num"><span>招聘人数：5人</span></p>
            <p class="job_address"><span>地址：广州(黄埔萝岗奥园广场)</span></p>
            <div class="job_duty">
              <p class="sub_title"><span>岗位职责</span></p>
              <p><span>1、完成产品经理分配的工作内容，优化现有产品；</span></p>
              <p><span>2、基于Struts2+spring+hibernate开发；</span></p>
              <p><span>3、充分理解工作目标。</span></p>
            </div>
            <div class="job_skill">
              <p class="sub_title"><span>职业技能</span></p>
              <p><span>1、掌握Java基础知识，熟练Java Web开发；</span></p>
              <p><span>2、热爱IT行业，有志长期从事软件开发行业者；</span></p>
              <p><span>3、具备良好的逻辑思维能力和学习能力；</span></p>
              <p><span>4、较好的沟通能力和综合素养；</span></p>
              <p><span>5、积极、乐观，注重沟通，注重团队协作</span></p>
            </div>
          <!-- </div> -->

        </li>
        <li class="fl">
          <div class="job_icon">
            <img src="static/images/java.png">
          </div>
          <p class="job_name"><span>Java工程师</span></p>
          <p class="job_num"><span>招聘人数：5人</span></p>
          <p class="job_address"><span>地址：广州(黄埔萝岗奥园广场)</span></p>
          <div class="job_duty">
            <p class="sub_title"><span>岗位职责</span></p>
            <p><span>1、完成产品经理分配的工作内容，优化现有产品；</span></p>
            <p><span>2、基于Struts2+spring+hibernate开发；</span></p>
            <p><span>3、充分理解工作目标。</span></p>
          </div>
          <div class="job_skill">
            <p class="sub_title"><span>职业技能</span></p>
            <p><span>1、掌握Java基础知识，熟练Java Web开发；</span></p>
            <p><span>2、热爱IT行业，有志长期从事软件开发行业者；</span></p>
            <p><span>3、具备良好的逻辑思维能力和学习能力；</span></p>
            <p><span>4、较好的沟通能力和综合素养；</span></p>
            <p><span>5、积极、乐观，注重沟通，注重团队协作</span></p>
          </div>
        </li>
        <li class="fl">
          <div class="job_icon">
            <img src="static/images/java.png">
          </div>
          <p class="job_name"><span>Java工程师</span></p>
          <p class="job_num"><span>招聘人数：5人</span></p>
          <p class="job_address"><span>地址：广州(黄埔萝岗奥园广场)</span></p>
          <div class="job_duty">
            <p class="sub_title"><span>岗位职责</span></p>
            <p><span>1、完成产品经理分配的工作内容，优化现有产品；</span></p>
            <p><span>2、基于Struts2+spring+hibernate开发；</span></p>
            <p><span>3、充分理解工作目标。</span></p>
          </div>
          <div class="job_skill">
            <p class="sub_title"><span>职业技能</span></p>
            <p><span>1、掌握Java基础知识，熟练Java Web开发；</span></p>
            <p><span>2、热爱IT行业，有志长期从事软件开发行业者；</span></p>
            <p><span>3、具备良好的逻辑思维能力和学习能力；</span></p>
            <p><span>4、较好的沟通能力和综合素养；</span></p>
            <p><span>5、积极、乐观，注重沟通，注重团队协作</span></p>
          </div>
        </li>

      </ul>
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
.join_us {
  // 背景图样式
  .join_img_wraper {
    height: 600px;
    background: url("../../static/images/about_banner.png") no-repeat;
    background-size: cover;
    position: relative;
    .join_img_txt {
      text-align: center;
      position: absolute;
      color: #fff;
      font-size: 44px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  // 招聘信息
  .advertise {
    padding-top: 120px;
    .job_list {
      line-height: 35px;
      color: #666;
      li {
        width: 450px;
        height: 650px;
        text-align: center;
      }
      li:nth-child(2n + 1) {
        padding-right: 60px;
      }
      .job_name {
        color: #333;
        font-size: 18px;
        line-height: 50px;
        font-weight: 600;
      }
      .sub_title {
        color: #333;
        font-weight: 600;
      }
      p {
        // margin-bottom:
      }
    }
  }
}
</style>
