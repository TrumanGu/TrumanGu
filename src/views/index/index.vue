<template>
  <section class="tg-index">
    <aside class="tg-index__sidebar">
      <!-- <tg-profile></tg-profile> -->
    </aside>
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </section>
</template>

<script>
import tgProfile from "./components/left/profile";
import tgLinks from "./components/left/links";
import tgCenter from "./components/center/center";
import tgRecent from "./components/right/recent";
import tgArchives from "./components/right/archives";
import tgTags from "./components/right/tags";

export default {
  name: "tg-index",
  components: {
    "tg-profile": tgProfile,
    "tg-links": tgLinks,
    "tg-center": tgCenter,
    "tg-recent": tgRecent,
    "tg-archives": tgArchives,
    "tg-tags": tgTags
  }
};
</script>

<style lang="scss">
.tg-index {
  margin: auto;
  @media (max-width: 768px) {
    // max-width: 1152px;
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 1000px;
  }

  &__sidebar {
    // width: 200px;
  }

  > .md-layout-item {
    height: 300px;
    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 200);
      content: " ";
    }
  }
}
</style>
