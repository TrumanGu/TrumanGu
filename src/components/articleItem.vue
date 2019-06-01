<template>
  <section class="center-item tg-card">
    <div class="img-wrapper">
      <img
        width="100%"
        height="auto"
        src="https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/desert.jpg"
      >
    </div>
    <div class="text-wrapper">
      <time class="tg-small">
        {{time}}
        {{ `${ readTime } MINUTES READ (ABOUT ${ body.length } WORDS)` }}
      </time>
      <h1>{{ title }}</h1>
      <p>{{ body.slice(0,200)}}</p>
    </div>
    <div class="readmore">
      <span @click="routerGoDetail()">Read More</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "tg-center",
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
  computed: {
    readTime() {
      const read_time = Number(this.body.length / 120).toFixed(0);
      return read_time > 0 ? read_time : 1;
    }
  },
  methods: {
    routerGoDetail() {
      // console.log(this.number);
      this.$router.push({
        name: "article-detail",
        params: { number: this.number }
      });
    }
  }
};
</script>

<style lang="scss">
.center-item {
  overflow: hidden;
  margin-bottom: 0.7rem;
  > .img-wrapper {
    overflow: hidden;
    max-height: 260px;
    > img {
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  > .text-wrapper {
    padding: 1.5rem;
    @media (max-width: 768px) {
      // padding: 5rem;
    }
    > .tg-small {
      font-size: 0.7rem;
      margin-bottom: 5px;
      color: gray;
    }
    > h1 {
      color: #242424;
      font-size: 1.9rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: #3273dc;
      }
    }
  }
  > .readmore {
    padding: 0 1.5rem 1.5rem;
    span {
      background-color: whitesmoke;
      padding: 0.3rem 0.6rem;
      border-radius: 5px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
</style>
