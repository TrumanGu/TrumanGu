<template>
  <section class="tg-index">
    <Row :gutter="10">
      <Col :md="0" :lg="7">
        <tg-profile></tg-profile>
      </Col>
      <Col :md="24" :lg="10"></Col>
      <Col :md="0" :lg="7"></Col>
    </Row>
  </section>
</template>

<script>
import tgProfile from "./components/left/profile";
export default {
  name: "tg-index",
  components: { "tg-profile": tgProfile }
};
</script>

<style lang="scss">
.tg-index {
  margin: auto;
  @media screen and (min-width: 1280px) {
    max-width: 1152px;
    width: 1152px;
  }
  @media screen and (min-width: 1080px) {
    max-width: 960px;
    width: 960px;
  }

  > .md-layout-item {
    height: 300px;
    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 200);
      content: " ";
    }
  }
}
</style>
