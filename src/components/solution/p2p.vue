<template>
  <div class="p2p">
    <div class="p2p_solution">
      <div class="container">
        <p class="title"><span>P2P解决方案</span></p>
        <p class="content">我们团队已经帮助多家P2P网贷公司实现产品部署上线，月交易额过亿。特有的定点银行托管系统，让资金更放心。</p>
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/p2p_img1.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/p2p_img2.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/p2p_img3.png">
      </div>
    </div>
    <!-- 案例展示 -->
    <div class="show_case">
      <div class="container">
        <p class="title"><span>案例展示</span></p>
        <div class="case_box">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="static/images/animate_img1.png"
                  alt=""
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="static/images/animate_img2.png"
                  alt=""
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="static/images/animate_img3.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow", //切换模式，3d切换
      speed: 500,
      mousewheel: true, //鼠标滚动切换
      slideToClickedSlide: true, // 点击跳转
      grabCursor: true,
      centeredSlides: true, // active的slide位于中间
      slidesPerView: "3", //显示slide的个数
      autoplay: true,
      loop: true, //会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。
      coverflowEffect: {
        rotate: 30,
        stretch: 20, // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0
        depth: 130, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        slideShadows: true
      },
      on: {
        click() {
          setTimeout(() => {
            swiper.autoplay.start(); //点击一秒后继续切换
          }, 1000);
          //
        }
      }
    });
    // 鼠标覆盖停止鼠标离开重新开始切换
    swiper.el.onmouseover = function() {
      swiper.autoplay.stop();
    };
    swiper.el.onmouseleave = function() {
      swiper.autoplay.start();
    };
  }
};
</script>
<style lang="less" scoped>
.p2p {
  > div:nth-child(2n + 2) {
    background: #f5f5f5;
  }
  .p2p_solution {
    text-align: center;
    padding: 100px 0;
    .title {
      font-size: 36px;
      color: #333;
      padding-bottom: 30px;
    }
  }
  .img_box {
    img {
      width: 100%;
    }
  }

  // 案例展示
  .show_case {
    padding: 120px 0;
    .title {
      padding-bottom: 60px;
    }
    .case_box {
      margin: 0 auto;
      text-align: center;
      width: 600px;
    }
  }
}
</style>
