import pkg from './package.json'
// import { capitalize } from './node_modules/@lovkyndig/create-google-app/utils/capitalize-method'

export default defineAppConfig({
  myLayer: {
    meta: {
      name: 'Eleison',
      version: pkg.version,
      description: pkg.description,
      homepage: pkg.homepage,
      logo: 'Kyrie Eleison'
    },
    menu: { btn: 'Books' },
    author: pkg.author,
    email: 'jesu.broder@gmail.com',
    avatar: '/img/avatar.webp',
    favicon: '/favicon.ico',
    assetTypes: [],
    giscus: {
      repo: 'lovkyndig/eleison',
      repoId: 'R_kgDOJg_oPw',
      category: 'Comments',
      categoryId: 'DIC_kwDOJg_oP84CbJhb',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'noborder_dark',
      lang: 'en',
      loading: 'lazy'
    },
    privacy: {
      title: 'Privacy Policy following because this is an Google App.',
      description: 'The Privacy Policy, Sitemap and Rss for "Eleison" - Something to read when you do not need food for your soul.',
      notification: 'Skip this page - read instead Christian Scrivers "Sjeleskatt" or Eleisons Hymns!'
    },
    about: {
      title: 'Information about Eleison, his preaches, hymns and letters.',
      description: 'About "WA Starter App" and why its a perfect starter-kit for non-programmers.',
      notification: 'A laywer from Norway, Kyrie Eleison, has made this app! Like it? Follow him on GitHub!'
    },
    home: {
      title: 'Bibleapp by Kyrie Eleison - a laywer & webpriest from Norway',
      description: 'In this bibleapp by Kyrie Eleison you get food for your soul, and strength to fight against the evil inside you and around you.',
      notification: 'Recomandation: Read Cristian Scrivers "Sjeleskatt"'
    },
    slug: {
      description: 'Preaches, hymnsn and biblecomments by Eleison with url: ',
      notification: 'Pray before reading, that God open up your ears and heart!'
    },
    list: {
      tags: 'Preaches, hymns and biblecomments from Kyrie Eleison with tag: ',
      tags_all: 'All articles',
      description: 'This is the list of content by Kyrie Eleison - and Christian Schrivers "Sjeleskatt" - the best book for broken souls!',
      notification: 'Search and find the truth - with the amazing search-functionality on this App by Kyrie Eleison.'
    },
    scrollSmooth: true,
    homePage: {
      showBlogPosts: true,
      postItemLimit: 55
    },
    privacyPage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showCatalog: false
    },
    search: {
      exclude: [
        '/',
        '/about/',
        '/privacy/',
        '/list/'
      ]
    }
  }
})
/*
ahrefs LENGTH guide:
Title: 50-60
Descriptionn 110-130
*/
