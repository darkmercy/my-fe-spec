import comp from "D:/code/encode/项目实战/my-fe-spec/docs/.vuepress/.temp/pages/engineering/doc.html.vue"
const data = JSON.parse("{\"path\":\"/engineering/doc.html\",\"title\":\"文档规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文档规范\",\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"1. 空格\",\"slug\":\"_1-空格\",\"link\":\"#_1-空格\",\"children\":[]},{\"level\":2,\"title\":\"2. 标点符号\",\"slug\":\"_2-标点符号\",\"link\":\"#_2-标点符号\",\"children\":[]},{\"level\":2,\"title\":\"3. 全角和半角\",\"slug\":\"_3-全角和半角\",\"link\":\"#_3-全角和半角\",\"children\":[]},{\"level\":2,\"title\":\"4. 名词\",\"slug\":\"_4-名词\",\"link\":\"#_4-名词\",\"children\":[]},{\"level\":2,\"title\":\"附录\",\"slug\":\"附录\",\"link\":\"#附录\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"engineering/doc.md\"}")
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
