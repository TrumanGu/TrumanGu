<template>
  <section class="header">
    <div ref="background-container" class="background-container" :style="bgcStyle"></div>
    <h2>TrumanGu's Blog</h2>
  </section>
</template>

<script>
export default {
  name: "background-container",
  data() {
    return {
      bgcStyle: {
        background: "url(" + require("@/assets/img/bgc-1.jpg") + ") no-repeat",
        // backgroundImage:
        //   "url(http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg)",
        // top: "0px",
        // backgroundPositionY: "0px;",
        backgroundSize: "100%",
        // background-attachment: fixed;
        // width: 100%;
        backgroundAttachment: "fixed"
      }
    };
  },
  methods: {
    onScroll(e) {
      // let bgcRef = this.$refs["background-container"];
      // this.bgcStyle.backgroundPositionY = window.scrollY / 2 + "px";
    }
  },
  created() {},
  mounted() {
    // window.addEventListener("scroll", this.onScroll, false);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.onScroll, false);
  }
};
</script>

<style lang="scss">
.header {
  overflow: hidden;
  height: 42vw;
  position: relative;
  z-index: 10;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  h2 {
    white-space: nowrap;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    position: absolute;
    color: white;
    font-size: 9rem;
    font-weight: 400;
  }
  .background-container {
    height: 42vw;
  }
}
</style>
