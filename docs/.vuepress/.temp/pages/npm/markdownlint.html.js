import comp from "D:/code/encode/项目实战/my-fe-spec/docs/.vuepress/.temp/pages/npm/markdownlint.html.vue"
const data = JSON.parse("{\"path\":\"/npm/markdownlint.html\",\"title\":\"encode-fe-markdownlint-config\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"encode-fe-markdownlint-config\",\"categories\":[\"工程规范\"],\"tags\":[\"工程规范\"],\"author\":{\"name\":\"澄怀\",\"link\":\"https://github.com/encode-studio-fe/fe-spec\"}},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":2,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"npm/markdownlint.md\"}")
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
