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
            // children: [
            //   {
            //     text: "每日秒杀",
            //     children: ["../share/1.md"],
            //   },
            //   {
            //     text: "9.9",
            //     children: ["../share/2.md"],
            //   },
            // ],
          },
          {
            text: "关于我们",
            link: "/",
          },
        ],
        sidebar: [
          {
            "/share": [
              {
                text: "每日分享",
                children: ["../share/2.md"],
              },
            ],
          },
        ],
        editLinkText: "联系",
      },
    },
  }),
});
