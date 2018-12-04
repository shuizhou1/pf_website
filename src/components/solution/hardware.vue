<template>
  <div class="hardware">
    <div class="hardware_solution">
      <div class="container">
        <p class="title"><span>智能硬件解决方案</span></p>
        <p class="content">基于蓝牙，WIFI的软硬件解决方案，帮助硬件厂商更好的做出漂亮的移动APP。我们有专业的硬件工程师，与您对话无障碍。</p>
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/hardware_img1.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/hardware_img2.png">
      </div>
    </div>
    <div class="img_box">
      <div class="container">
        <img src="static/images/hardware_img3.png">
      </div>
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.hardware {
  >div:nth-child(2n+2) {
    background: #f5f5f5;
  }
  .hardware_solution {
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
}
</style>
