export default {
  title: 'luya.io',
  description: 'BUILD ANY SYSTEM',
  lang: 'en-US',
  themeConfig: {
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
      { text: 'API Docs', link: 'https://api.luya.io' },
      { text: 'Forum', link: 'https://github.com/orgs/luyadev/discussions' },
      { text: 'Packages', link: 'https://packagist.org/?tags=luya'}
    ],
    sidebar: [
      {
        collapsible: true,
        collapsed: true,
        text: 'Installation',
        items: [
          { text: 'Installation', link: '/guide/installation/' },
          { text: 'Mac OSX', link: '/guide/installation/mac' },
          { text: 'Windows', link: '/guide/installation/windows' },
          { text: 'Common Problems', link: '/guide/installation/problems' },
          { text: 'Upgrade', link: '/guide/installation/upgrade' },
          { text: 'Structure&Config', link: '/guide/installation/structure' },
          { text: 'Environments', link: '/guide/installation/environments' },
          { text: 'Cloud & Docker', link: '/guide/installation/cloud' }
        ]
      },
      {
          collapsible: true,
          collapsed: true,
          text: 'Key Concepts',
          items: [
            { text: 'Core', link: '/guide/concepts/core' },
            { text: 'Tags', link: '/guide/concepts/tags' },
            { text: 'HTML Elements', link: '/guide/concepts/elements' },
            { text: 'Hooks', link: '/guide/concepts/hooks' },
            { text: 'CoImage Lazyloadingre', link: '/guide/concepts/lazyload' },
            { text: 'Composition', link: '/guide/concepts/composition' },
            { text: 'Deployment & Sync', link: '/guide/concepts/depandsync' },
            { text: 'Headless', link: '/guide/concepts/headless' }
          ]
        },
        {
          collapsible: true,
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
            { text: 'Queue/Scheduler', link: '/guide/app/queue' },
            { text: 'OpenAPI', link: '/guide/app/openapi' },
          ]
        },
        {
          collapsible: true,
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
          collapsible: true,
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
          collapsible: true,
          collapsed: true,
          text: 'Admin Module',
          items: [
            { text: 'Intro', link: '/guide/admin/intro' },
            { text: 'Assets', link: '/guide/admin/assets' },
            { text: 'Dashboard Objects', link: '/guide/admin/dashboard' },
            { text: 'Custom Controller&View', link: '/guide/admin/mvc' },
            { text: 'Forms', link: '/guide/admin/forms' },
            { text: 'Permissions&Menu', link: '/guide/admin/permission' },
            { text: 'Icons&Css Styles', link: '/guide/admin/styles' },
            { text: 'Create admin API', link: '/guide/admin/api' },
            { text: 'JWT&SPA', link: '/guide/admin/jwtspa' }
          ]
        },
        {
          collapsible: true,
          collapsed: true,
          text: 'NgRest CRUD',
          items: [
            { text: 'Concept', link: '/guide/ngrest/concept' },
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
          collapsible: true,
          collapsed: true,
          text: 'Lessons',
          items: [
            { text: 'Forms in Blocks', link: '/guide/lessons/blockform' },
            { text: 'Image slider Block', link: '/guide/lessons/imagesliderblock' },
            { text: 'Admin and Frontend module', link: '/guide/lessons/module' },
            { text: 'Create an Active Window', link: '/guide/lessons/activewindow' },
            { text: 'Custom Angular Controller and Admin View', link: '/guide/lessons/custom-angular-view.md' }
          ]
        },
        {
          collapsible: true,
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
  