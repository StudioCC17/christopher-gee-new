export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdb53e3b6db8dfe3e2e6234',
                  title: 'Sanity Studio',
                  name: 'christopher-gee-new-studio',
                  apiId: '14e32650-6501-497c-a967-451fab608cdf'
                },
                {
                  buildHookId: '5fdb53e32c7358e8eae6c400',
                  title: 'Portfolio Website',
                  name: 'christopher-gee-new',
                  apiId: 'eb0b7d62-cbc0-4f31-bfa3-1bd57b688203'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StudioCC17/christopher-gee-new',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://christopher-gee-new.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
