<template>
  <section class="tg-profile tg-card">
    <div class="tg-avatar">
      <img src="https://blog.zhangruipeng.me/hexo-theme-icarus/images/avatar.png" alt>
    </div>
    <div class="font-10">
      <p class="font-15">TrumanGu</p>
      <p>Student / Web</p>
      <p class="gray">NJTH</p>
    </div>
    <div class="tg-data">
      <div>
        <p class="tg-heading">POSTS</p>
        <p class="fw-7 font-15">34</p>
      </div>
      <div>
        <p class="tg-heading">CATEGORIES</p>
        <p class="fw-7 font-15">34</p>
      </div>
      <div>
        <p class="tg-heading">TAGS</p>
        <p class="fw-7 font-15">34</p>
      </div>
    </div>
    <div class="tg-follow">
      <Button type="primary" long>Follow</Button>
    </div>
    <div class="tg-media">
      <!-- <svg aria-hidden="true">
        <use xlink:href="#github"></use>
      </svg> -->
      <svg-icon iconClass="#github"></svg-icon>
    </div>
  </section>
</template>

<script>
export default {
  name: "tg-profile"
};
</script>

<style lang="scss">
.tg-profile {
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  //   justify-content: space-between;
  > .tg-avatar {
    display: flex;
    justify-content: center;
    // width: ;
    flex-grow: 1;
    > img {
      height: 128px;
      width: auto;
    }
  }
  > .tg-data {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    //   display: flex
  }
  > .tg-follow {
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
