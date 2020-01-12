<template>
  <section class="header">
    <div ref="background-container" class="background-container" :style="bgcStyle"></div>
    <h2>{{pageCenterTitle}}</h2>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "background-container",
  data() {
    return {
      bgcStyle: {
        background: "url(" + require("@/assets/img/bgc-1.jpg") + ") no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      }
    };
  },
  computed: {
    ...mapState(['pageCenterTitle'])
  }
};
</script>
