<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { debounce, throttle } from "lodash-es";

export default {
  name: "app",
  methods: {
    onScroll() {
      this.$store.commit("SCROLL", { scrollY: window.scrollY });
    },
    onResize() {
      this.$store.commit("RESIZE", {
        windowWidth: window.screen.width,
        windowHeight: window.screen.height
      });
    }
  },
  computed: {},
  mounted() {
    window.addEventListener(
      "scroll",
      debounce(this.onScroll, 300, { leading: false, trailing: true }),
      false
    );
    window.addEventListener(
      "resize",
      throttle(this.onResize, 200, { leading: true }),
      false
    );
  }
};
</script>
<style lang="scss">
@import "src/style/helpers/_parameters.scss";
#app {
  font-family: $sans-serif;
  *::selection {
    background: #beedc7;
    // background: #ECAD9E;
    // color: gray;
    // color: lightyellow;
  }
  .copy-right {
    a::selection,
    p::selection {
      color: white;
    }
  }
  p {
    cursor: default;
  }
}
</style>

