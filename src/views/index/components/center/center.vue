<template>
  <section class="tg-center">
    <div class="center-wrapper">
      <article-item
        v-for="item in issue_list"
        :key="item.index"
        :title="item.title"
        :body="item.body"
        :number="item.number"
        :time="item.created_at"
      ></article-item>
      <article-placeholder v-if="issue_list.length===0"></article-placeholder>
      <article-placeholder v-if="issue_list.length===0"></article-placeholder>
      <article-placeholder v-if="issue_list.length===0"></article-placeholder>
      <article-placeholder v-if="issue_list.length===0"></article-placeholder>
    </div>
  </section>
</template>

<script>
import { queryAllIssues } from "@/api/public/repos.js";
import articleItem from "@/components/articleItem.vue";
import articlePlaceholder from "@/components/articlePlaceholder.vue";

export default {
  name: "tg-center",
  components: {
    "article-item": articleItem,
    "article-placeholder": articlePlaceholder
  },
  data() {
    return {
      issue_list: []
    };
  },
  created() {
    this.initIssueList();
  },
  methods: {
    async initIssueList() {
      queryAllIssues().then(res => {
        this.issue_list = res;
        // this.getLabelNum(res)
      });
    },
    // getLabelNum(res_list){
    //   const list = res_list.map((item, index, list)=>{
    //     item.labels
    //   })
    // }
  }
};
</script>

<style lang="scss">
.tg-center {
  .center-wrapper {
  }
}
</style>
