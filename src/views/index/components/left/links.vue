<template>
  <tg-card class="tg-links" :data="link_list">
    <template slot="title">
      <span>links</span>
    </template>
  </tg-card>
</template>

<script>
import tgCard from "@/components/card";
export default {
  name: "tg-links",
  components: { "tg-card": tgCard },
  data() {
    return {
      link_list: [
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" },
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" },
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" },
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" },
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" },
        { title: "Hexo", tag: "hexo.io", link: "www.baidu.com" }
      ]
    };
  }
};
</script>
<style lang="scss">
.tg-links {
  margin-top: 0.7rem;
}
</style>
