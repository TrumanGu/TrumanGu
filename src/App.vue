<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    onScroll() {
      this.$store.commit("SCROLL", { scrollY: window.scrollY });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, false);
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
    color: gray;
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

