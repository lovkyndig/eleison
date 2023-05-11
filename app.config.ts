export default defineAppConfig({
 basic: {
    meta: {
      name: 'Eleison',
      description: 'Eleison personal blog.',
      author: 'Lovkyndig',
      url: 'https://eleison.vercel.app/about'
    },
    author: 'Eleison',
    email: 'jur.eleison@gmail.com',
    avatar: '/avatar.webp',
    favicon: '/favicon.ico',
    scrollSmooth: true,
    homePage: {
      showBlogPosts: true,
      postItemLimit: 55
    },
    subscribePage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showCatalog: true,
    },
    search: {
      exclude: [
        '/',
        '/about/',
        '/subscribe/',
        '/list/'
      ]
    },
    assetTypes: []
  },
  seo_meta: {
    listview: '/img/seo-meta/listview.png',
    frontpage: '/img/seo-meta/frontpage.png',
  },
  filter: {
    category: 'Sak',
    tags: 'Merke',
    series: 'Serie',
    search_guide: 'Søg etter ord eller en frase. Fraser må være omsluttet av anførselstegn.'
  },
})
