import router from "./router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import store from "./store";

const BlogName = "TrumanGu's Blog";
router.beforeEach(async (to, from, next) => {
  const startTime = +new Date();
  NProgress.start();
  store.dispatch("setPageTitle", to).then(() => {
    const title = store.state.pageTopTitle;
    if (title === BlogName) {
      document.title = BlogName;
    } else {
      document.title = title + " | " + BlogName;
      // let meta = metaList[metaList.length-1]
      // console.log(meta.name, meta.content)
      let metaList = document.getElementsByTagName("meta");
      for (let item of metaList) {
        if (item.name === "description") {
          item.setAttribute("content", document.title);
        }
      }
    }
  });
  next();
  const timestamp = +new Date();
  const trackObj = {
    eventType: "router", // 点击、刷新、退出、切换、错误日志、性能日志
    timestamp,
    extParam: {
      routerTime: timestamp - startTime,
      to: to.fullPath || "",
      from: document.referrer || from.fullPath,
      userAgent: window.navigator.userAgent,
    },
  };
  store.dispatch("track", trackObj);
  NProgress.done();
});
