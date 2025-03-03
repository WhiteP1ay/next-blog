/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'White-Meta',
  author: '白玩',
  headerTitle: 'White-Meta',
  description: '记录生活 · 技术 · 学习 · 思考',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://whitemeta.cn',
  siteRepo: 'https://github.com/WhiteP1ay',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'parkhaocer@gmail.com',
  github: 'https://github.com/WhiteP1ay',
  bilibili: 'https://space.bilibili.com/107889531',
  locale: 'zh-CN',
  stickyNav: false,
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
