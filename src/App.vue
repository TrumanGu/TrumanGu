<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { debounce, throttle } from "lodash-es";
import { getPerformanceTiming } from "./utils/performance";
export default {
  name: "app",
  data() {
    return {
      performanceSent: false,
    };
  },
  methods: {
    onScroll() {
      this.$store.commit("SCROLL", { scrollY: window.scrollY });
    },
    onResize() {
      this.$store.commit("RESIZE", {
        windowWidth: window.screen.width,
        windowHeight: window.screen.height,
      });
    },
    sendPerformance() {
      const trackObj = {
        eventType: "load", // 点击、刷新、退出、切换、错误日志、性能日志
        timestamp: +new Date(),
        extParam: {
          userAgent: window.navigator.userAgent,
          ...getPerformanceTiming(),
        },
      };
      this.$store.dispatch("track", trackObj);
    },
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
    window.addEventListener("error", (event) => {
      const trackObj = {
        eventType: "error", // 点击、刷新、退出、切换、错误日志、性能日志
        timestamp: +new Date(),
        extParam: {
          userAgent: window.navigator.userAgent,
          ...event,
        },
      };
      this.$store.dispatch("track", trackObj);
    });
    window.addEventListener("load", () => {
      this.performanceSent = true;
      this.sendPerformance();
    });
    setTimeout(() => {
      if (this.performanceSent) return;
      this.sendPerformance();
    }, 5000);
  },
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
