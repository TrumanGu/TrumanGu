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
        <p>
          <span>
            <svg-icon iconClass="date" style="color:#4990EE;"></svg-icon>
            {{ createdAt.slice(0,10) }}
          </span>

          <span>
            <svg-icon iconClass="time" style="color: lightpink"></svg-icon>
            {{ readTime }} min read
          </span>
        </p>
      </div>
      <div class="markdown-html">
        <pre v-html="this.$marked(body_half)" v-highlight></pre>
      </div>
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
    },
    createdAt: {
      type: String
    }
  },
  data() {
    return {
      readTime: "",
      body_half: "",
      title: ""
    };
  },
  mounted() {},
  created() {
    let title_match = this.body.match(/(#\s.*?\n+)/);
    this.readTime = Number.parseInt(this.body.length / 200);
    this.title = title_match ? title_match[0] : "";
    let index = this.body.match(/###?/);

    if (index) {
      this.body_half = this.body.slice(this.title.length, index.index - 1);
    } else {
      this.body_half = this.body;
      console.warn("article-half component didn't find any # matches");
    }
  },
  watch: {
    body(new_val) {
      this.body_half = new_val;
      // console.log('body is new',new_val)
    }
  }
};
</script>

<style lang="scss">
.hljs-ln-n {
  // width: 2.2rem;
  // height: 1.5rem;
  text-align: center;
  color: #869194;
  background-color: #eff2f3;
}
.hljs {
  padding: 0;
  p {
    word-wrap: break-word;
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
//   padding-left: 1rem;
//   list-style: decimal-leading-zero;
//   border-left: 1px solid #ddd !important;
//       background-color: #f7f7f7!important;
//   white-space: pre;
//   line-height: 1.7rem;
// }
.article-half {
  &__title {
    text-align: center;
    h1 {
      display: inline;
      font-size: 6rem;
    }
    p {
      line-height: 2rem;
      height: 3rem;
      span {
        margin: 0 1rem;
      }
    }
  }
  .text-wrapper {
    padding: 2.5rem;
    @media (max-width: 768px) {
      // padding: 5rem;
    }

    .markdown-html {
      font-size: 1rem;
      overflow: hidden;
      p {
        line-height: 2.5rem;
        font-size: 3.6rem;
        width: 100%;
        white-space: normal;
      }
    }
  }
}
</style>
