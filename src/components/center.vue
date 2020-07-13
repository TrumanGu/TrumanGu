<template>
  <section class="tg-center">
    <div class="center-wrapper">
      <article-item
        v-for="(item, index) in article_list"
        :key="index"
        :createdAt="item.created_at"
        :body="item.content"
        :title="item.title"
        :id="item.id"
      ></article-item>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
      <article-placeholder v-if="article_list.length===0"></article-placeholder>
    </div>
    <Page
      class="main-pagination"
      :page-size="10"
      :total="pageCountAll"
      @on-change="handlePageChange"
    />
  </section>
</template>

<script>
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
      article_list: [],
      pageCountAll: 0
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
      let currentPage = Number.parseInt(this.$route.query.page);
      if (isNaN(currentPage)) currentPage = 1;
      queryAllArticles(currentPage).then(res => {
        this.article_list = res.data.rows;
        this.pageCountAll = res.data.count;
        this.$store.commit("HAS_REFRESHED", {
          refreshFlag: this.refreshFlag + 1
        });
      });
    },
    handlePageChange(e) {
      // this.$route.query.page = e;
      this.$router.replace({ name: "article-list", query: { page: e } });
    }
  },
  watch: {
    $route: "init_article_list"
  }
};
</script>

<style lang="scss" scoped>
.main-pagination {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
</style>