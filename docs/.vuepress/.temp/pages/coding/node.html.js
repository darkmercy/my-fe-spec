import comp from "D:/code/encode/项目实战/my-fe-spec/docs/.vuepress/.temp/pages/coding/node.html.vue"
const data = JSON.parse("{\"path\":\"/coding/node.html\",\"title\":\"Node 编码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Node 编码规范\",\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"1. 编码风格\",\"slug\":\"_1-编码风格\",\"link\":\"#_1-编码风格\",\"children\":[]},{\"level\":2,\"title\":\"2. 安全规范\",\"slug\":\"_2-安全规范\",\"link\":\"#_2-安全规范\",\"children\":[]},{\"level\":2,\"title\":\"3. 最佳实践\",\"slug\":\"_3-最佳实践\",\"link\":\"#_3-最佳实践\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"link\":\"#参考资料\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"coding/node.md\"}")
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
