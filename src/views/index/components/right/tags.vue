<template>
  <tg-card class="tg-tags" :data="link_list">
    <template slot="title">
      <span>tags</span>
    </template>
  </tg-card>
</template>

<script>
import { queryLabels } from "@/api/public/repos";
import tgCard from "@/components/card";
export default {
  name: "tg-tags",
  components: { "tg-card": tgCard },
  data() {
    return {
      link_list: [
        // { title: "DataBases", tag: "20", link: "www.baidu.com" },
        // { title: "Java", tag: "1", link: "www.baidu.com" },
        // { title: "C++", tag: "9", link: "www.baidu.com" },
        // { title: "Spring Boot", tag: "9", link: "www.baidu.com" }
      ]
    };
  },
  created() {
    // console.log(process.env);
    queryLabels().then(res => {
      this.link_list = res.map(item => {
        const obj = {};
        obj.title = item.name;
        obj.tag = 0;
        return obj;
      });
      // console.log(this.link_list);
    });
    // .catch(_ => {});
  }
};
</script>

<style lang="scss">
.tg-tags {
  margin-top: 0.7rem;
}
</style>
