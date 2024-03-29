export default {
  title: 'luya.io',
  description: 'BUILD ANY SYSTEM',
  lang: 'en-US',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#42b883"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
    ['meta', { name: "msapplication-config", content: "/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    algolia: {
      appId: '1G8O4R6KAE',
      apiKey: 'cd3194eac138884ec7893add97e541a7',
      indexName: 'luya'
    },
    editLink: {
      pattern: 'https://github.com/luyadev/luya.io/edit/master/docs/:path'
    },
    /*
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    */
    siteTitle: 'luya.io',
    logo: {light: '/assets/luyalogo.png', dark: '/assets/luyalogo.png'},
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@luyaio'},
      { icon: 'github', link: 'https://github.com/luyadev' },
      { icon: 'twitter', link: 'https://twitter.com/luyadev'}
    ],
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Packages', link: '/packages'},
      { text: 'API Docs', link: 'https://api.luya.io' },
      { text: 'Forum', link: 'https://github.com/orgs/luyadev/discussions' },
    ],
    sidebar: [
      {
        collapsed: true,
        text: 'Installation',
        items: [
          { text: 'Installation', link: '/guide/installation/' },
          { text: 'macOS', link: '/guide/installation/mac' },
          { text: 'Common Problems', link: '/guide/installation/problems' },
          { text: 'Upgrade', link: '/guide/installation/upgrade' },
          { text: 'Structure & Config', link: '/guide/installation/structure' },
          { text: 'Environments', link: '/guide/installation/environments' },
          { text: 'Cloud & Docker', link: '/guide/installation/cloud' }
        ]
      },
      {
          collapsed: true,
          text: 'Key Concepts',
          items: [
            { text: 'Core', link: '/guide/concepts/core' },
            { text: 'Tags', link: '/guide/concepts/tags' },
            { text: 'HTML Elements', link: '/guide/concepts/elements' },
            { text: 'Hooks', link: '/guide/concepts/hooks' },
            { text: 'Image Lazyloading', link: '/guide/concepts/lazyload' },
            { text: 'Composition', link: '/guide/concepts/composition' },
            { text: 'Deployment & Sync', link: '/guide/concepts/depandsync' },
            { text: 'Headless', link: '/guide/concepts/headless' }
          ]
        },
        {
          collapsed: true,
          text: 'Application',
          items: [
            { text: 'Assets', link: '/guide/app/assets' },
            { text: 'Translations', link: '/guide/app/translation' },
            { text: 'Languages', link: '/guide/app/language' },
            { text: 'Console Commands', link: '/guide/app/console' },
            { text: 'Mails', link: '/guide/app/mail' },
            { text: 'Storage', link: '/guide/app/storage' },
            { text: 'Image Filters', link: '/guide/app/filters' },
            { text: 'Filter Effects', link: '/guide/app/filter-effects' },
            { text: 'Page Speed', link: '/guide/app/speed' },
            { text: 'Security', link: '/guide/app/security' },
            { text: 'JSON-LD', link: '/guide/app/jsonld' },
            { text: 'Modules', link: '/guide/app/module' },
            { text: 'Themes', link: '/guide/app/themes' },
            { text: 'Queue / Scheduler', link: '/guide/app/queue' },
            { text: 'OpenAPI', link: '/guide/app/openapi' },
          ]
        },
        {
          collapsed: true,
          text: 'CMS',
          items: [
            { text: 'CMS Layouts', link: '/guide/cms/cmslayouts' },
            { text: 'Menus & Navigations', link: '/guide/cms/menu' },
            { text: 'Building Blocks', link: '/guide/cms/blocks' },
            { text: 'Block Types', link: '/guide/cms/blocktypes' },
            { text: 'Page Properties', link: '/guide/cms/properties' }
          ]
        },
        {
          collapsed: true,
          text: 'Frontend Module',
          items: [
            { text: 'Intro', link: '/guide/frontend/intro' },
            { text: 'Working with Forms', link: '/guide/frontend/forms' },
            { text: 'Layouts', link: '/guide/frontend/layouts' },
            { text: 'URL Rules', link: '/guide/frontend/urlrules' },
          ]
        },
        {
          collapsed: true,
          text: 'Admin Module',
          items: [
            { text: 'Intro', link: '/guide/admin/intro' },
            { text: 'Assets', link: '/guide/admin/assets' },
            { text: 'Dashboard Objects', link: '/guide/admin/dashboard' },
            { text: 'Custom MVC', link: '/guide/admin/mvc' },
            { text: 'Forms', link: '/guide/admin/forms' },
            { text: 'Permissions & Menu', link: '/guide/admin/permission' },
            { text: 'Custom Admin API', link: '/guide/admin/api' },
            { text: 'JWT & SPA', link: '/guide/admin/jwtspa' },
            { text: 'Icons & Css Styles', link: '/guide/admin/styles' }
          ]
        },
        {
          collapsed: true,
          text: 'NgRest CRUD',
          items: [
            { text: 'Concept', link: '/guide/ngrest/' },
            { text: 'Model', link: '/guide/ngrest/model' },
            { text: 'API', link: '/guide/ngrest/api' },
            { text: 'Active Windows', link: '/guide/ngrest/activewindow' },
            { text: 'Active Buttons', link: '/guide/ngrest/activebutton' },
            { text: 'Active Selection', link: '/guide/ngrest/activeselection' },
            { text: 'Plugins', link: '/guide/ngrest/plugins' },
            { text: 'Plugin Checkbox-Relation', link: '/guide/ngrest/plugin-checkboxrelation' },
            { text: 'Plugin Selects', link: '/guide/ngrest/plugin-select' },
            { text: 'Pools', link: '/guide/ngrest/pools' },
          ]
        },
        {
          collapsed: true,
          text: 'Lessons',
          items: [
            { text: 'Forms in Blocks', link: '/guide/lessons/blockform' },
            { text: 'Image slider Block', link: '/guide/lessons/imagesliderblock' },
            { text: 'Admin and Frontend module', link: '/guide/lessons/module' },
            { text: 'Create an Active Window', link: '/guide/lessons/activewindow' },
            { text: 'Custom AngularJS Controller and Admin View', link: '/guide/lessons/custom-angular-view.md' }
          ]
        },
        {
          collapsed: true,
          text: 'Developers',
          items: [
            { text: 'Create Package (ext/module)', link: '/guide/dev/package' },
            { text: 'Guidelines', link: '/guide/dev/guideline' },
            { text: 'Collaboration', link: '/guide/dev/collaboration' },
            { text: 'Unit Test', link: '/guide/dev/unittest' },
            { text: 'Admin Browser Compatibility', link: '/guide/dev/browser' },
            { text: 'Arguments for LUYA', link: '/guide/dev/arguments' },
            { text: 'The LUYA Organisation', link: '/guide/dev/organisation' }
          ]
        }
    ]
  }
}
  
