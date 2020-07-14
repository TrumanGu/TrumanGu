export function getPerformanceTiming() {
  let performance = window.performance;

  if (!performance) {
    return;
  }

  let t = performance.timing;
  let times = {};

  //【重要】页面加载完成的时间
  times.loadPage =
    t.loadEventEnd - t.navigationStart < 0
      ? -1
      : t.loadEventEnd - t.navigationStart;

  //【重要】解析 DOM 树结构的时间
  times.domReady =
    t.domComplete - t.responseEnd < 0 ? -1 : t.domComplete - t.responseEnd;

  //【重要】重定向的时间
  times.redirect = t.redirectEnd - t.redirectStart;

  //【重要】DNS 查询时间
  times.lookupDomain = t.domainLookupEnd - t.domainLookupStart;

  //【重要】白屏时间 读取页面第一个字节的时间
  times.ttfb = t.responseStart - t.navigationStart;

  //【重要】内容加载完成的时间
  times.request = t.responseEnd - t.requestStart;

  //【重要】执行 onload 回调函数的时间
  times.loadEvent = t.loadEventEnd - t.loadEventStart;

  // DNS 缓存时间
  times.appcache = t.domainLookupStart - t.fetchStart;

  // 卸载页面的时间
  times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;

  // TCP 建立连接完成握手的时间
  times.connect = t.connectEnd - t.connectStart;

  return times;
}
