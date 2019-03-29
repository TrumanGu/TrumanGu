<template>
  <section class="center-item-placeholder tg-card">
    <div class="img-wrapper"></div>
    <div class="text-wrapper">
      <time class="tg-small" style="width:4rem;height:1rem;background:#eee"></time>
      <h1 class="place-holder" style="width:20rem;height:2rem;background:#eee"></h1>
      <p style="width:100%;height:1rem;background:#eee;margin-bottom:0.4rem;"></p>
      <p style="width:100%;height:1rem;background:#eee;margin-bottom:0.4rem;"></p>
      <p style="width:100%;height:1rem;background:#eee;margin-bottom:0.4rem;"></p>
      <div
        class="readmore"
        style="margin-top: 1rem;width: 5rem;height: 1.5rem;background: rgb(238, 238, 238);"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "center-item-placeholder"
};
</script>

<style lang="scss">
.center-item-placeholder {
  overflow: hidden;
  margin-bottom: 0.7rem;
  > .img-wrapper {
    overflow: hidden;
    height: 260px;
    max-height: 260px;
    background-color: #eee;
  }
  > .text-wrapper {
    padding: 1.5rem;
    > .tg-small {
      font-size: 0.7rem;
      margin-bottom: 5px;
      width: 3rem;
      height: 1rem;
      background-color: #eee;
    }
    > h1 {
      width: 5rem;
      height: 2rem;
      background-color: #eee;
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
    height: 1rem;
    width: 2rem;
    background-color: #eee;
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
