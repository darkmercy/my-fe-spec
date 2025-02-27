export const siteData = JSON.parse("{\"base\":\"/fe-spec/\",\"lang\":\"zh-CN\",\"title\":\"你好， VuePress ！\",\"description\":\"这是我的第一个 VuePress 站点\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"印客学院\",\"description\":\"前端编码规范工程化\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
