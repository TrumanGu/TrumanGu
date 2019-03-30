<template>
  <section class="tg-profile tg-card">
    <div class="tg-avatar">
      <img :src="require('@/assets/img/avatar.jpg')" alt>
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
      <Button type="primary" long @click="handleFollow">Follow</Button>
    </div>
    <div class="tg-media">
<<<<<<< HEAD
      <!-- <svg aria-hidden="true">
        <use xlink:href="#github"></use>
      </svg> -->
      <svg-icon iconClass="#github"></svg-icon>
=======
      <Poptip trigger="hover" title="Email me" content="TrumanGu1998@gamil.com">
        <svg-icon iconClass="gmail" style="color:#dc4e41;"></svg-icon>
      </Poptip>
      <Poptip trigger="hover">
        <svg-icon iconClass="qq" style="color:rgb(54, 155, 206);"></svg-icon>
         <div class="api" slot="content">
          <img :src="require('@/assets/img/qq.jpg')" alt="My qq QRcode" width="200px" height="auto" />
        </div>
      </Poptip>
      <div @click="githubClick()">
        <svg-icon iconClass="github" style="color: rgb(25, 23, 23);"></svg-icon>
      </div>
      <Poptip trigger="hover">
        <svg-icon iconClass="weixin" style="color: rgb(0, 200, 0);"></svg-icon>
        <div class="api" slot="content">
          <img :src="require('@/assets/img/weiChat.jpg')" alt="My weichat QRcode" width="200px" height="auto" />
        </div>
      </Poptip>
>>>>>>> cbe240a4dd5d69a04db8f4009064c647cff58dae
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
    handleFollow(){
      this.$Message.warning('Coming Soon ··· ···');
    }
  }
  
};
</script>

<style lang="scss">
.tg-profile {
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
    > img {
      transform: scale(0.99);
      height: 128px;
      width: auto;
      transition: all .3s;
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
      > .svg-icon {
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
