<template>
  <section class="tg-index">
    <Row :gutter="10">
      <Col :xs="0" :sm="0" :md="6" :lg="6">
        <tg-profile></tg-profile>
        <tg-links></tg-links>
      </Col>
      <Col :xs="24" :sm="24" :md="12" :lg="12">
        <transition name="fade">
          <router-view></router-view>
        </transition>
        <!-- <tg-center></tg-center> -->
      </Col>
      <Col :xs="0" :sm="0" :md="6" :lg="6">
        <tg-recent></tg-recent>
        <tg-archives></tg-archives>
        <tg-tags></tg-tags>
      </Col>
    </Row>
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
    width: 1200px;
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
