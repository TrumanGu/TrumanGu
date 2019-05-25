<template>
  <div class="tg-layout">
    <tg-navbar></tg-navbar>
    <Content>
      <tg-main></tg-main>
    </Content>
    <tg-footer></tg-footer>
  </div>
</template>

<script>
import tgNavbar from "./components/navbar";
import tgMain from "./components/main";
import tgFooter from "./components/footer";
export default {
  name: "Layout",
  components: {
    "tg-navbar": tgNavbar,
    "tg-main": tgMain,
    "tg-footer": tgFooter
  }
};
</script>