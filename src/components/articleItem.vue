<template>
  <section class="article-item tg-card" v-viewer>
    <div class="text-wrapper">
      <time class="tg-small tg-heading">
        <!-- {{time}} -->
        <!-- {{ `${ readTime } MINUTES READ (ABOUT ${ body.length } WORDS)` }} -->
      </time>
      <div class="article-item__title">
        <a v-if="isDetailPage" href="#">
          <span v-html="this.$marked(title)"></span>
        </a>
        <router-link v-else :to="{ name: 'article-detail', params: { id:id} }">
          <span v-html="this.$marked(title)"></span>
        </router-link>

        <p>
          <span>
            <svg-icon iconClass="date" style="color:#4990EE;"></svg-icon>
            {{ createdAt.slice(0,10) }}
          </span>

          <span>
            <svg-icon iconClass="time" style="color: lightpink"></svg-icon>
            {{ fullTime?fullTime:readTime }} min read
          </span>
        </p>
      </div>
      <div class="markdown-html" :class="h1Class">
        <pre v-html="this.$marked(isDetailPage?body: body_half)" v-highlight></pre>
      </div>
    </div>
  </section>
</template>

<script>
import { queryAllArticles } from "@/api/public/article.js";
export default {
  name: "article-item",
  props: {
    body: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    createdAt: {
      type: String
    },
    fullTime: {
      type: Number
    }
  },
  data() {
    return {
      readTime: "",
      body_half: ""
    };
  },
  computed: {
    title() {
      let title_match = this.body.match(/(#\s.*?\n+)/);
      return title_match ? title_match[0] : "";
    },
    isDetailPage() {
      return this.$route.name === "article-detail";
    },
    h1Class() {
      if (this.$route.name === "aritcle-detail") {
        return "h1-hidden";
      } else {
        return "";
      }
    }
  },
  mounted() {
    this.readTime = Number.parseInt(this.body.length / 200);

    let index = this.body.match(/###?/);

    if (index) {
      this.body_half = this.body.slice(this.title.length, index.index - 1);
    } else {
      this.body_half = this.body;
      // console.warn("article-item component didn't find any # matches");
    }
  },
};
</script>

<style lang="scss">
.h1-hidden {
  h1 {
    display: none;
  }
}
.hljs-ln-n {
  width: 2.2px;
  height: 1.5px;
  text-align: center;
}
.hljs {
  background-color: #23241f;
  font-family: Consolas, Menlo, Courier, monospace;
  p {
    word-wrap: break-word;
  }
}
</style>
