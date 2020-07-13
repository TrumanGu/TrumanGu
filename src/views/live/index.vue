<template>
  <section
    class="live"
    :style="{
      background: 'url(http://assets.trumangu.fun/blog/187-.jpg)',
      width: width,
      height: height,
      backgroundSize: 'cover',
    }"
  >
    <div class="prism-player" id="player-con"></div>
  </section>
</template>

<script>
import { getLiveSource } from "@/api/public/live";
export default {
  name: "live-page",
  data() {
    return {
      width: 0,
      height: 0,
      loading: false,
      source: "",
      player: null,
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
      getLiveSource().then((res) => {
        if (res && res.code === 200) {
          const liveItem = res.data[0];
          const { live_link } = liveItem;
          this.handleCreatePlayer(live_link);
          // TODO: 这里要改标题
        }
      });
    };
  },
  methods: {
    handleCreatePlayer(source) {
      // eslint-disable-next-line no-undef
      this.player = new Aliplayer(
        {
          id: "player-con",
          source,
          width: "100%",
          cover: "http://assets.trumangu.fun/blog/187-.jpg",
          height: window.innerHeight + "px",
          autoplay: false,
          isLive: true,
          rePlay: false,
          playsinline: true,
          controlBarVisibility: "hover",
          useH5Prism: true,
        },
        () => {}
      );
    },
  },
  beforeDestroy() {
    let footer = document.getElementsByClassName("tg-footer")[0];
    footer.style.display = "flex";
  },
};
</script>
<style lang="scss" scoped>
.live {
  overflow: hidden;
}
</style>
