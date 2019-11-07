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
        <pre v-html="this.$marked(body_half)" v-highlight></pre>
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
      let title_match = this.body.match(/(#\s.*?\n+)|(#\s.*?\r\n+)/);
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
    // if(this.$route.name ===)
    if (this.$route.name === "article-detail") {
      this.body_half = this.body;
    } else if (index) {
      this.body_half = this.body.slice(this.title.length, index.index - 1);
    } else {
      this.body_half = this.body;
      console.warn("article-item component didn't find any # matches");
    }
  },
  created() {},
  watch: {
    body(new_val) {
      this.body_half = new_val;
      console.log("body is new", new_val);
    }
    // $route(){

    // }
  }
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
  // color: #869194;
  // background: #23241f;
}
.hljs {
  // padding: 0;
  background-color: #23241f;
  font-family: Consolas, Menlo, Courier, monospace;
  p {
    word-wrap: break-word;
  }
  h3 {
    // font-size: 10vw;
  }
}
// .hljs {
//   border: 0;
//   display: block;
//   padding: 1px;
//   margin: 0;
//   width: 100%;
//   font-weight: 200;
//   // color: #333;
//   white-space: pre-wrap;
//    color: #869194;
//   background-color: #eff2f3;
// }
// .hljs ol {
//   list-style: decimal;
//   margin: 0px 0px 0 40px !important;

// }
// .hljs ol li {
//   padding-left: 1px;
//   list-style: decimal-leading-zero;
//   border-left: 1px solid #ddd !important;
//       background-color: #f7f7f7!important;
//   white-space: pre;
//   line-height: 1.7px;
// }
</style>
