<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style lang="scss">
@import 'src/style/helpers/_parameters.scss';
#app {
  font-family: $sans-serif;  
}
</style>

