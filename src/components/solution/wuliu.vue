<template>
  <div class="wuliu">
    <div class="wuliu_solution">
      <div class="container">
        <p class="title"><span>社区wuliu解决方案</span></p>
        <p class="content">我们可能是中国社区wuliu解决方案，最好的技术合作伙伴之一，社区wuliu是什么，仅仅物业基础服务、商家/wuliu服务、小区邻里社交，社区增值游戏？还有什么？期待与您交流。</p>
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/wuliu_img1.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/wuliu_img2.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/wuliu_img3.png">
      </div>
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.wuliu {
  >div:nth-child(2n+2) {
    background: #f5f5f5;
  }
  .wuliu_solution {
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
