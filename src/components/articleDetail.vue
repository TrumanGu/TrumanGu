<template>
  <section class="article-detail tg-card">
    <div class="img-wrapper">
      <img
        width="100%"
        height="auto"
        src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/desert.jpg"
      >
    </div>
    <div class="text-wrapper">
      <time class="tg-small tg-heading">
        {{time}}
        {{ `${ readTime } MINUTES READ (ABOUT ${ body.length } WORDS)` }}
      </time>
      <h1>{{ title }}</h1>
      <div v-html="this.$marked(body)"></div>
    </div>
  </section>
</template>

<script>
import { queryIssues } from "@/api/public/repos.js";
export default {
  name: "tg-article-detail",
  data() {
    return {
      time: "llllll",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quia ipsum suscipit quisquam fugiat quas dolor voluptatum impedit. Sunt necessitatibus dolor repellat iusto sit voluptas magnam natus perspiciatis error quia.",
      title: "sssssss",
      readTime: "asddasds"
    };
  },
  created() {
    queryIssues(this.$route.params.number).then(res => {
      this.time = res.time;
      this.body = res.body;
      this.title = res.title;
    });
  }
};
</script>

<style lang="scss">
.text-wrapper {
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
  }
}
</style>
