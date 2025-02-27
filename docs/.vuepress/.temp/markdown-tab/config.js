import { CodeTabs } from "D:/code/encode/项目实战/my-fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_6bd9efaf7d8ff01bc26fd289f79fb22b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/code/encode/项目实战/my-fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_6bd9efaf7d8ff01bc26fd289f79fb22b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/code/encode/项目实战/my-fe-spec/node_modules/.pnpm/@vuepress+plugin-markdown-t_6bd9efaf7d8ff01bc26fd289f79fb22b/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
