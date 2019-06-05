<template>
  <footer
    class="tg-footer layout-footer-center"
    :style="{backgroundImage: 'url(' + require('@/assets/img/texture.png') + ')'}"
  >
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
