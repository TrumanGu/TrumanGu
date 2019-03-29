<template>
  <tg-card class="tg-recent">
    <span slot="title">RECENT</span>
    <template slot="body">
      <article class="recent">
        <div class="recent-img">
          <img
            src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/plant.jpg"
            alt
          >
        </div>
        <div class="recent-text">
          <time>2018-10-22</time>
          <p>Hello My Blog</p>
        </div>
      </article>
      <article class="recent">
        <div class="recent-img">
          <img
            src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/plant.jpg"
            alt
          >
        </div>
        <div class="recent-text">
          <time>2018-10-22</time>
          <p>Hello My Blog</p>
        </div>
      </article>
    </template>
  </tg-card>
</template>

<script>
import tgCard from "@/components/card";
export default {
  name: "tg-recent",
  components: { "tg-card": tgCard }
};
</script>

<style lang="scss">
.tg-recent {
  padding: 1.5rem;
  .recent {
    display: flex;
    margin: 0.75rem 0;
    .recent-img {
      width: 64px;
      height: 64px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .recent-text {
      flex-grow: 1;
      margin-left: 0.8rem;
      time {
        font-size: 0.7rem;
        color: gray;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
