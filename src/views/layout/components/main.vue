<template>
  <section class="tg-main">
    <router-view name="background"></router-view>
    <canvas id="bubbles"></canvas>
    <router-view class="main-view"></router-view>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BackgroundCircle from "./mixin";
export default {
  name: "tg-main",
  data() {
    return {
      BackgroundCircle: null
    };
  },
  methods: {
    onResize: function() {}
  },
  mounted() {
    this.BackgroundCircle = new BackgroundCircle();
    this.BackgroundCircle.init();
    this.BackgroundCircle.animate();
  },
  computed: { ...mapState(["windowHeight", "windowWidth"]) },
  watch: {
    windowHeight() {
      this.BackgroundCircle.init();
    },
    windowWidth() {
      this.BackgroundCircle.init();
    }
  }
};
</script>

<style lang="scss">
.tg-main {
  position: relative;
  .main-view {
    position: relative;
    z-index: 10;
  }
  #bubbles {
    // width: 100%;
    // height: auto;
    position: fixed;
    top: 0;
  }
}
</style>
