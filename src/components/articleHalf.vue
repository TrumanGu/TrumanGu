<template>
  <section class="article-half tg-card">
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
      <div v-html="this.$marked(body_half)"></div>
    </div>
  </section>
</template>

<script>
import { queryAllArticles } from "@/api/public/article.js";
export default {
  name: "article-half",
  props: {
    body: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      time: "",
      body_half: "",
      title: "",
    };
  },
  created() {
    let title_match = this.body.match(/(#\s.*?\n+)/);

    this.title = title_match[0];
    let index = this.body.match(/###?/);

    if (index) {
      this.body_half = this.body.slice(this.title.length, index.index - 1);
    } else {
      this.body_half = this.body;
      console.warn("article-half component didn't find any # matches");
    }
  }
};
</script>

<style lang="scss">
.article-half {
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
