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