import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/",
  title: "京东优惠券群",
  description: "京东优惠券群,每日分享京东优惠,加入微信群畅享各种购物优惠",
  head: [
    ["meta", { name: "baidu-site-verification", content: "codeva-JBFEaDTQdi" }],
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
              children: ["/share/index.md", "/share/1.md"],
            },
          ],
        },
        editLinkText: "联系",
      },
    },
  }),
});
