<template>
  <section class="tg-profile tg-card">
    <div class="tg-avatar">
      <img :src="require('@/assets/img/avatar.jpg')" alt />
    </div>
    <div>
      <p>TrumanGu</p>
      <p>Student / Web</p>
      <p class="gray">NJtech</p>
    </div>
    <div class="tg-media">
      <div>
        <a href="mailto:TrumanGu1998@gamil.com">
          <svg-icon iconClass="gmail" style="color:#dc4e41;"></svg-icon>
        </a>
      </div>
      <div>
        <a
          href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1227085585&website=www.oicqzone.com"
        >
          <svg-icon iconClass="qq" style="color:rgb(54, 155, 206);"></svg-icon>
        </a>
      </div>
      <div>
        <a href="https://github.com/TrumanGu">
          <svg-icon iconClass="github" style="color: rgb(25, 23, 23);"></svg-icon>
        </a>
      </div>
      <div>
        <a href="rss" target="_blank">
          <svg-icon iconClass="rss"></svg-icon>
        </a>
      </div>

      <div>
        <a href="https://t.me/Truman_Gu" target="_blank">
          <svg-icon iconClass="telegram"></svg-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tg-profile",
  data() {
    return {};
  },
  methods: {
    githubClick() {
      window.open("https://github.com/TrumanGu", "_blank");
    },
    handleFollow() {
      this.$Message.warning("Coming Soon ··· ···");
    }
  }
};
</script>

<style lang="scss">
.tg-profile {
  // position: fixed;
  width: 240px;
  // top: 114px;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  //   justify-content: space-between;
  > .tg-avatar {
    display: flex;
    justify-content: center;
    border-radius: 10rem;
    overflow: hidden;
    flex-grow: 1;
    margin-bottom: 2rem;
    > img {
      transform: scale(0.99);
      height: 128px;
      width: auto;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
      }
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
  > .tg-media {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    div {
      .svg-icon {
        height: 1.5rem;
        width: 1.5rem;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
