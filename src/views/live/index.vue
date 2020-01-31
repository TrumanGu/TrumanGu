<template>
  <section
    class="live"
    :style="{ 
        width: width, 
        height: height,
        background: 'url(http://assets.trumangu.fun/background.jpg)',
        backgroundSize: 'cover'
        }"
  >
    <div class="prism-player" id="player-con"></div>
    <Modal title="流地址" :loading="loading" v-model="modalShow" width="300">
      <p slot="header" style="text-align:center">
        <span>开启直播吧~</span>
      </p>
      <p style="line-height: 20px">
        请输入直播的流地址, 或者发送
        <a href="mailto:TrumanGu1998@gamil.com">邮件</a>给我
      </p>
      <p style="line-height: 20px; margin-top: 20px">
        <Input v-model="source" />
      </p>
      <div slot="footer">
        <Button type="info" size="large" long @click="handleCreatePlayer">确定</Button>
      </div>
    </Modal>
  </section>
</template>

<script>
export default {
  name: "live-page",
  data() {
    return {
      width: 0,
      height: 0,
      loading: false,
      modalShow: false,
      source: "",
      player: null
    };
  },
  mounted() {
    let footer = document.getElementsByClassName("tg-footer")[0];
    footer.style.display = "none";
    let head = document.getElementsByTagName("HEAD").item(0);
    let style = document.createElement("link");
    style.href =
      "https://g.alicdn.com/de/prismplayer/2.8.7/skins/default/aliplayer-min.css";
    style.rel = "stylesheet";
    style.type = "text/css";
    head.appendChild(style);

    let script = document.createElement("script");
    script.src = "https://g.alicdn.com/de/prismplayer/2.8.7/aliplayer-min.js";
    script.type = "text/javascript";
    script.id = "loadScript";
    head.appendChild(script);

    this.width = window.innerWidth + "px";
    this.height = window.innerHeight + "px";

    script.onload = () => {
      this.modalShow = true;
    };
  },
  methods: {
    handleCreatePlayer() {
      this.modalShow = false;
      this.player = new Aliplayer(
        {
          id: "player-con",
          source: this.source,
          width: "100%",
          cover: "http://assets.trumangu.fun/background.jpg",
          height: window.innerHeight + "px",
          autoplay: true,
          isLive: true,
          rePlay: false,
          playsinline: true,
          controlBarVisibility: "hover",
          useH5Prism: true
        },
        function(player) {
          console.log("The player is created");
        }
      );
    }
  },
  beforeDestroy() {
    let footer = document.getElementsByClassName("tg-footer")[0];
    footer.style.display = "flex";
  }
};
</script>
<style lang="scss" scoped>
.live {
  overflow: hidden;
}
</style>