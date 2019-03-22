<template>
  <div class="tg-layout">
    <Header>
      <tg-navbar></tg-navbar>
    </Header>
    <Content :style="{padding: '50px 0'}">
      <tg-main></tg-main>
    </Content>
    <Footer>
      <tg-footer></tg-footer>
    </Footer>
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