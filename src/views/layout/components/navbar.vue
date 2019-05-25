<template>
  <nav class="tg-navbar">
    <div class="tg-navbar__container">
      <div class="inner">
        <h1>
          <router-link to="/">TrumanGu</router-link>
        </h1>
        <div class="right">
          <ul>
            <router-link tag="li" to="/">Home</router-link>
            <router-link tag="li" to="/timeline">Timeline</router-link>
            <router-link tag="li" to="/design">Design</router-link>
            <router-link tag="li" to="/friends">Friends</router-link>
            <router-link tag="li" to="/about">About Me</router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TG-Navbar"
};
</script>

<style lang="scss" >
.tg-navbar {
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  height: 80px;
  &__container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    height: 80px;
    width: 100%;

    @media (min-width: 768px) {
      width: 760px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }

    .inner {
      position: relative;
      float: left;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      vertical-align: middle;
      h1 {
        font-size: 1.5rem;
        a {
          font-weight: 600;
          color: #fff;
            transition: all 0.3s;
            &:hover {
              opacity: 0.7;
            }
        }
      }
      .right {
        ul {
          display: flex;
          justify-content: space-around;

          li {
            margin: 0 1rem;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
}
</style>
