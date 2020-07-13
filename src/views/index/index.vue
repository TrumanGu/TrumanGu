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

export default {
  name: "tg-index",
  components: {
    "tg-profile": tgProfile,
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