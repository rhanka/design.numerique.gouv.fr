// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DesignGouv',
  siteUrl: 'https://design.numerique.gouv.fr/',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: '//stats.data.gouv.fr',
        siteId: 105
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/docs/*','/recrutement/*'],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'People',
        path: './content/team/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Job',
        path: './content/jobs/*.md',
      }
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
          typeName: 'Challenge',
          path: './content/commandoux/*.md',
      }
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
          typeName: 'Article',
          path: './content/articles/*.md',
      }
    },
  ],
  templates: {
    People: '/equipe/:firstName-:lastName',
    Job: '/recrutement/:slug',
    Challenge: '/commando-ux/:slug',
    Article: '/blog/:slug',
  },
  prefetch: {
    mask: '^$', // example - disable all prefetch
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
