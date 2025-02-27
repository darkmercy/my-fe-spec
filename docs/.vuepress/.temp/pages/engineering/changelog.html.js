import comp from "D:/code/encode/项目实战/my-fe-spec/docs/.vuepress/.temp/pages/engineering/changelog.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/changelog.html\",\"title\":\"CHANGELOG 规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CHANGELOG 规范\",\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"1. 文件\",\"slug\":\"_1-文件\",\"link\":\"#_1-文件\",\"children\":[]},{\"level\":2,\"title\":\"2. 格式\",\"slug\":\"_2-格式\",\"link\":\"#_2-格式\",\"children\":[]},{\"level\":2,\"title\":\"样本示例\",\"slug\":\"样本示例\",\"link\":\"#样本示例\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"engineering/changelog.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
