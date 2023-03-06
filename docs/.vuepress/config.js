import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/",
  title: "京东优惠券群",
  description: "京东优惠券群,每日分享京东优惠,加入微信群畅享各种购物优惠",
  head: [
    ["meta", { name: "baidu-site-verification", content: "codeva-JBFEaDTQdi" }],
    ["meta", { name: "baidu-site-verification", content: "codeva-JBFEaDTQdi" }],
    [
      "meta",
      {
        name: "360-site-verification",
        content: "5616ac48448eb3c86f4d5dd842fb13c6",
      },
    ],
    ["meta", { name: "bytedance-verification-code", content: "e0qMeNiQ" }],
    ["meta", { name: "sogou_site_verification", content: "mffALxnk01" }],
    ["meta", { name: "keywords", content: "京东优惠券,优惠券群,微信群" }],
  ],
  theme: defaultTheme({
    locales: {
      "/": {
        navbar: [
          {
            text: "好物分享",
            link: "/share",
          },
          {
            text: "流量卡免费领",
            link: "/flow",
          },
          {
            text: "关于我们",
            link: "/about",
          },
          {
            text: "一起领大额券",
            link: "https://work.weixin.qq.com/gm/6c83ecabb445ff6f13b95498a91c03e1",
          },
        ],
        sidebar: {
          "/share": [
            {
              text: "每日分享",
              children: [
                "/share/index.md",
                "/share/meizhuang.md",
                "/share/niunai.md",
                "/share/xiaoyuzi.md",
                "/share/ysld.md",
                "/share/xiyiye.md",
              ],
            },
          ],
        },
        editLinkText: "联系",
      },
    },
  }),
});
