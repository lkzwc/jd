import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/",
  title: "京东优惠券群",
  description: "京东优惠券群,每日分享京东优惠券,各种购物优惠都在微信群内畅享",
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
        ],
        sidebar: {
          "/share": [
            {
              text: "每日分享",
              children: ["/share/index.md", "/share/1.md"],
            },
          ],
          "/share1": [
            {
              text: "每日分享9.9",
              children: ["/share/index.md", "/share/1.md"],
            },
          ],
        },
        editLinkText: "联系",
      },
    },
  }),
});
