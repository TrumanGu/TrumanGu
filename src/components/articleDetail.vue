<template>
  <section class="tg-center">
    <div class="center-wrapper">
      <article-item
        :createdAt="createdAt"
        :body="content"
        :id="Number.parseInt(id)"
        :fullTime="readTime"
      ></article-item>
      <div class="comments">
        <vue-disqus shortname="trumangu-fun" :identifier="id+''"></vue-disqus>
        <!-- url="http://example.com/path" -->
      </div>
    </div>

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
      readTime: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    queryArticle(this.id).then(({ result }) => {
      this.createdAt = result.createdAt;
      this.content = result.content;
      this.readTime = Number.parseInt(this.content.length / 200);
    });
  },
  mounted() {}
};
</script>

<style lang="scss">
.article-detail {
  // &__title {
  //   text-align: center;
  //   h1 {
  //     display: inline;
  //   }
  // }
  // .text-wrapper {
  //   padding: 2px;
  //   h1 {
  //     font-size: 1.6px;
  //     height: 3.6px;
  //     line-height: 3.6px;
  //   }
  // }
}
</style>
