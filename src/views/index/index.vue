<template>
  <section class="tg-index">
    <div ref="tg-index__left" class="tg-index__left">
      <tg-profile ref="tg-profile" :class="fixClass" :style="profileStyle"></tg-profile>
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
    return {
      profileStyle: {
        position: "relative",
        top: 0 + "px"
      },
      fixClass: "no-fix",
      wrapperHeight: 0
    };
  },
  computed: {
    ...mapState(["refreshFlag", "scrollY"])
    // fixClass() {
    //   console.log(this.wrapperHeight - window.scrollY);
    //   if (window.scrollY >= 620) {
    //     return "fix";
    //   } else if (this.wrapperHeight - window.scrollY > -157) {
    //     return "fix-bottom";
    //   } else {
    //     return "no-fix";
    //   }
    //   // return this.scrollY > 600 ? "fix" : "no-fix";
    // }
  },
  mounted() {
    this.watchScroll();
  },
  watch: {
    refreshFlag() {
      this.$nextTick(this.watchScroll);
    }
  },
  methods: {
    onScroll() {
      if (this.wrapperHeight - window.scrollY < -134) {
        this.profileStyle.top =
          382 + this.wrapperHeight - window.scrollY + "px";
      } else if (window.scrollY >= 600) {
        this.profileStyle.position = "fixed";
        this.profileStyle.top = "250px";
      } else {
        this.profileStyle.position = "relative";
        this.profileStyle.top = "0px";
      }
    },
    watchScroll() {
      window.removeEventListener("scroll", this.onScroll);
      this.wrapperHeight = this.$refs["tg-index__left"].offsetHeight;
      window.addEventListener("scroll", this.onScroll);
    }
  }
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
  // @media (max-width: 768px) {
  // }
  // @media (min-width: 1280px) {
  //   width: 1000px;
  // }
  &__left {
    position: relative;
    min-height: 80%;
    flex: 1;
    width: 260px;
    @media (max-width: 768px) {
      display: none;
    }
    .tg-profile {
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
