<template>
  <!-- <section class="article-detail"> -->
  <section class="tg-center">
    <div class="center-wrapper">
      <article-half :createdAt="createdAt" :body="content" :id="Number.parseInt(id)" :fullTime="readTime"></article-half>
    </div>
  </section>
  <!-- </section> -->
</template>

<script>
import { queryArticle } from "@/api/public/article.js";
import articleHalf from "@/components/articleHalf";
export default {
  name: "article-detail",
  components: { articleHalf },
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
      this.readTime =  Number.parseInt(this.content.length / 200);
    });
  }
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
  //   padding: 2rem;
  //   h1 {
  //     font-size: 1.6rem;
  //     height: 3.6rem;
  //     line-height: 3.6rem;
  //   }
  // }
}
</style>
