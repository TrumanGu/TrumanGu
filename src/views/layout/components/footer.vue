<template>
  <footer
    class="tg-footer layout-footer-center"
    :style="{backgroundImage: 'url(' + require('@/assets/img/texture.png') + ')'}"
  >
    <!-- <div class="signature">TrumanGu</div>
    <div class="link-list">
      <span>xxx</span>
      <span class="dot"></span>
      <span>sssss</span>
      <span class="dot"></span>
      <span>asfasnjkl</span>
    </div>
    <div class="media-list">
      <span>asdj</span>
      <span>asdj</span>
      <span>asdj</span>
    </div> -->
    <div class="copy-right">
      <p>Copyright © 2018 TrumanGu</p>
      <p>powered by Node.js & Vue 小破站已经运行{{runningDay}}天啦</p>
      <p>
        <a href="http://www.beian.miit.gov.cn/">苏ICP备19026333号</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "tg-footer",
  data() {
    return {
      startDate: 1558760955037,
      runningDay: 0
    };
  },
  created() {
    let newDate = new Date().valueOf() - this.startDate;
    let tmp_date = newDate / 1000 / 60 / 60 / 24;
    this.runningDay = Number.parseInt(tmp_date) + 1;
  }
};
</script>

<style lang="scss">
.layout-footer-center {
  height: 20rem;
  background-color: #2f3032;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  .copy-right {
    text-align: center;
    line-height: 3rem;
    // margin-top: 3rem;
    width: 100%;
    // padding: 2rem;
    // border-top: 1px solid rgba(255, 255, 255, 0.1);
    a {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .signature {
    font-size: 3rem;
    height: 6rem;
  }
  .link-list {
    display: flex;
    justify-content: space-around;
    .dot {
      display: inline-block;
      width: 5px;
      height: 5px;
      margin: 10px;
      background-color: #fff;
      border-radius: 10px;
    }
  }
  .media-list {
    display: flex;
    justify-content: space-around;
  }
}
</style>
