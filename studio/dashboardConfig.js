export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6089ced1cc5f0b00c6a3f893',
                  title: 'Sanity Studio',
                  name: 'losanity-landing-studio',
                  apiId: '7436725a-7836-4255-8b01-aa53f8acb9d9'
                },
                {
                  buildHookId: '6089ced18254a90095c5be30',
                  title: 'Landing pages Website',
                  name: 'losanity-landing',
                  apiId: 'ef503918-ad61-416c-ae14-023d80516718'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lowisren/losanity-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://losanity-landing.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
