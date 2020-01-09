<template>
  <section class="tg-center">
    <div class="center-wrapper article-detail">
      <article-item
        v-if="!detailLoading"
        :createdAt="createdAt"
        :body="content"
        :id="Number.parseInt(id)"
        :fullTime="readTime"
      ></article-item>
      <section v-else class="loading-secition">
        <div class="dot-loading"></div>
        <div class="dot-loading"></div>
        <div class="dot-loading"></div>
        <div class="dot-loading"></div>
        <div class="dot-loading"></div>
      </section>
      <div class="comments">
        <!-- url="http://example.com/path" -->
      </div>
    </div>
    <vue-disqus shortname="trumangu-fun" :identifier="id+''"></vue-disqus>
  </section>
</template>

<script>
import { queryArticle } from "@/api/public/article.js";
import articleItem from "@/components/articleItem";
export default {
  name: "article-detail",
  components: { articleItem },
  data() {
    return {
      content: "",
      createdAt: "",
      id: "",
      readTime: 0,
      detailLoading: true // 文章详情页加载动画
    };
  },
  created() {
    this.id = this.$route.params.id;
    queryArticle(this.id)
      .then(({ data }) => {
        this.createdAt = data.created_at;
        this.content = data.content;
        this.readTime = Number.parseInt(this.content.length / 200);
      })
      .finally(_ => {
        this.detailLoading = false;
      });
  },
};
</script>

<style lang="scss">
.article-detail {
  min-height: 300px;
  position: relative;
  @keyframes slide {
    0% {
      transform: scale(1);
    }

    50% {
      opacity: 0.3;
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
  .loading-secition {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .dot-loading {
      width: 24px;
      height: 24px;
      background: #3ac;
      border-radius: 100%;
      display: inline-block;
      animation: slide 1s infinite;
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: calc(0.1s * #{$i});
          background: rgb(51 * $i, 170, 204);
        }
      }
    }
  }
}
</style>
