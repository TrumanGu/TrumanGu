<template>
  <nav class="tg-navbar">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem name="1" to="/">Home</MenuItem>
        <MenuItem name="2" to="/Archives">Archives</MenuItem>
        <MenuItem name="3" to="/Categories">Categories</MenuItem>
        <MenuItem name="4" to="/Tags">Tags</MenuItem>
        <MenuItem name="5" to="/About">About</MenuItem>
      </div>
    </Menu>
  </nav>
</template>

<script>
export default {
  name: "TG-Navbar"
};
</script>

<style lang="scss">
.md-tabs-navigation {
  .md-button {
    height: 60px;
  }
}
</style>
