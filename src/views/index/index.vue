<template>
  <section class="tg-index">
    <div ref="tg-index__left" class="tg-index__left">
      <tg-profile ref="tg-profile"></tg-profile>
    </div>
    <!-- <tg-center></tg-center> -->

    <router-view></router-view>
  </section>
</template>

<script>
import { mapState } from "vuex";
import tgProfile from "@/components/profile";
import tgLinks from "./components/left/links";
// import tgCenter from "@/components/center";
import tgRecent from "./components/right/recent";
import tgArchives from "./components/right/archives";
import tgTags from "./components/right/tags";

export default {
  name: "tg-index",
  components: {
    "tg-profile": tgProfile,
    "tg-links": tgLinks,
    // "tg-center": tgCenter,
    "tg-recent": tgRecent,
    "tg-archives": tgArchives,
    "tg-tags": tgTags
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["refreshFlag", "scrollY"])
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
.tg-index {
  @media (max-width: 768px) {
    padding-top: 0;
  }
  padding-top: 3rem;
  margin: auto;
  display: flex;
  // justify-content: space-between;
  position: relative;
  max-width: 1200px;
  .fix {
    position: fixed;
    top: 223px;
  }
  .no-fix {
    position: relative;
  }
  .fix-bottom {
    position: absolute;
    bottom: 0;
  }

  &__left {
    position: relative;
    min-height: 80%;
    flex: 1;
    width: 260px;
    @media (max-width: 768px) {
      display: none;
    }
    .tg-profile {
      position: sticky;
      top: 40%;
    }
  }
  .tg-center {
    @media (min-width: 769px) {
      margin-left: 1rem;
      width: calc(100% - 260px);
    }
    @media (max-width: 768px) {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
