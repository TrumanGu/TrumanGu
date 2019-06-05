<template>
  <section class="tg-card">
    <div class="tg-headings __tg-title">
      <slot name="title"></slot>
    </div>
    <div v-if="!data" class="__tg-body">
      <slot name="body"></slot>
    </div>
    <div v-if="data" class="__tg-list-body">
      <div class="link-item" v-for="item in data" :key="item.index">
        <a :href="item.link">
          <span>{{ item.title}}</span>
          <span class="link-tag">{{ item.tag}}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tg-links",
  props: {
    data: {
      type: Array,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.tg-card {
  padding: 1px;
  > .__tg-title {
    color: #7a7a7a;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5px;
  }
  > .__tg-body {
    padding: 0.5px 0.5px 0;
  }
  > .__tg-list-body {
    .link-item {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5px;
      padding: 0 1px;
      transition: all 0.3s;
      :last-child {
        margin-bottom: 0;
      }
      &:hover {
        background-color: whitesmoke;
      }
      .link-tag {
        background-color: whitesmoke;
        padding: 5px 10px;
        border-radius: 5px;
      }
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 2px;
        color: #4a4a4a;
        width: 100%;
      }
    }
  }
}
</style>
