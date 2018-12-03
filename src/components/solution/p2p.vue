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

  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.p2p {
  >div:nth-child(2n+2) {
    background: #f5f5f5;
  }
  .p2p_solution {
    text-align: center;
    padding: 100px 0;
    .title {
      font-size: 36px;
      color: #333;
      margin-bottom: 30px;
    }
  }
  .img_box {
    height: 350px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
