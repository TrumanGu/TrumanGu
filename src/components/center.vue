<template>
  <section class="tg-center">
    <div class="center-wrapper">
      <article-item
        v-for="(item, index) in article_list"
        :key="index"
        :createdAt="item.createdAt"
        :body="item.content"
        :id="item.id"
      ></article-item>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
    </div>
  </section>
</template>

<script>
import { queryAllIssues } from "@/api/public/repos.js";
import { queryAllArticles } from "@/api/public/article.js";
import articleItem from "@/components/articleItem.vue";
import articlePlaceholder from "@/components/articlePlaceholder.vue";
import { mapState } from "vuex";

export default {
  name: "tg-center",
  components: {
    "article-item": articleItem,
    "article-placeholder": articlePlaceholder
  },
  data() {
    return {
      article_list: []
    };
  },
  created() {
    this.init_article_list();
  },
  computed: {
    ...mapState(["refreshFlag"])
  },
  methods: {
    async init_article_list() {
      queryAllArticles().then(res => {
        this.article_list = res.result;
        this.$store.commit("HAS_REFRESHED", {
          refreshFlag: this.refreshFlag + 1
        });
      });
    }
  }
};
</script>