<template>
  <section class="tg-index">
    <div ref="tg-index__left" class="tg-index__left hidden-no-lg">
      <tg-profile ref="tg-profile"></tg-profile>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import { mapState } from "vuex";
import tgProfile from "@/components/profile";
import tgLinks from "./components/left/links";
import tgRecent from "./components/right/recent";
import tgArchives from "./components/right/archives";
import tgTags from "./components/right/tags";

export default {
  name: "tg-index",
  components: {
    "tg-profile": tgProfile,
    "tg-links": tgLinks,
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