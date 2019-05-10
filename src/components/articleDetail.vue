<template>
  <section class="article-detail tg-card">
    <div class="text-wrapper">
      <time class="tg-small tg-heading">
        <!-- {{time}} -->
        <!-- {{ `${ readTime } MINUTES READ (ABOUT ${ body.length } WORDS)` }} -->
      </time>
      <div class="article-half__title">
        <router-link :to="{ name: 'article-detail', params: { id:id} }">
          <span v-html="this.$marked(title)"></span>
        </router-link>
      </div>
      <div v-html="this.$marked(body)"></div>
    </div>
  </section>
</template>

<script>
import { queryArticle } from "@/api/public/article.js";
export default {
  name: "article-detail",
  data() {
    return {
      body: "",
      time: "",
      title: "",
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    queryArticle(this.id).then(({ para }) => {
      let title_match = para.content.match(/(#\s.*?\n+)/);
      this.title = title_match[0];
      this.body = para.content.slice(this.title.length);
    });
  }
};
</script>

<style lang="scss">
.article-detail {
  &__title {
    text-align: center;
    h1 {
      display: inline;
    }
  }
  .text-wrapper {
    padding: 2rem;
    h1 {
      font-size: 1.6rem;
      height: 3.6rem;
      line-height: 3.6rem;
    }
  }
}
</style>
