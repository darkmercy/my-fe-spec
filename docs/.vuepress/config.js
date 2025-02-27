import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        children: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
        ],
      },
      {
        text: '工程规范',
        children: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        children: [
          { text: 'encode-fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'encode-fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'encode-fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'encode-fe-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'encode-fe-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        children: [{ text: 'encode-fe-lint', link: '/cli/encode-fe-lint.md' }],
      },
    ],

    
  }),
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "印客学院",
      description: "前端编码规范工程化",
    },
  },
  base: "/fe-spec/",
  public: "./public",
  plugins: [
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功",
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
  ],
});
