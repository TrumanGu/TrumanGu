<template>
  <tg-card class="tg-links" :data="archives_list">
    <template slot="title">
      <span>archives</span>
    </template>
  </tg-card>
</template>

<script>
import tgCard from "@/components/card";
export default {
  name: "tg-archives",
  components: { "tg-card": tgCard },
  data() {
    return {
      archives_list: [
        { title: "October 2018", tag: "1", link: "www.baidu.com" },
        { title: "October 2018", tag: "2", link: "www.baidu.com" },
        { title: "October 2018", tag: "50", link: "www.baidu.com" },
        { title: "October 2018", tag: "59", link: "www.baidu.com" },
        { title: "October 2018", tag: "20", link: "www.baidu.com" },
        { title: "October 2018", tag: "21", link: "www.baidu.com" }
      ]
    };
  }
};
</script>

<style lang="scss">
.tg-archives {
  margin-top: 0.7rem;
}
</style>
