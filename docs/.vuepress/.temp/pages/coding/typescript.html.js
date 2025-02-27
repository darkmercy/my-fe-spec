import comp from "D:/code/encode/项目实战/my-fe-spec/docs/.vuepress/.temp/pages/coding/typescript.html.vue"
const data = JSON.parse("{\"path\":\"/coding/typescript.html\",\"title\":\"TypeScript 编码规范\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"TypeScript 编码规范\",\"categories\":[\"编码规范\"],\"tags\":[\"编码规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"编码风格\",\"slug\":\"编码风格\",\"link\":\"#编码风格\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"coding/typescript.md\"}")
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
