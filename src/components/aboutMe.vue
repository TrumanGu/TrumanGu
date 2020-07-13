<template>
  <section class="about-me tg-center tg-card text-wrapper">
    <pre class="markdown-html" v-html="this.$marked(aboutMe)"></pre>
  </section>
</template>

<script>
import { queryAboutMe } from "@/api/public/article";
export default {
  data() {
    return { aboutMe: "" };
  },
  created() {
    queryAboutMe().then(res => {
      this.aboutMe = res.data.content;
    });
  }
};
</script>

<style lang="scss">
.about-me {
  min-height: 800px;
  padding: 20px;
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 200%;
  }
  p {
    font-size: 16px;
    word-break: break-word;
    white-space: break-spaces;
    img {
      width: 100%;
    }
  }
  code {
    overflow: auto;
  }
}
</style>