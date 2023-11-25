module.exports = function (plop) {

    plop.setGenerator('component', {
        description: 'React component using Typescript',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'Name: '
          },
          {
            type: 'input',
            name: 'tag',
            message: 'Tag name: ',
            default: 'div'
          },
        ],
        actions: [
          {
            type: 'addMany',
            destination: 'src/components/{{name}}',
            templateFiles: 'plop_templates/component/*.hbs',
            base: 'plop_templates/component',
          },
        ]
    });

    plop.setGenerator('page', {
      description: 'React page using Typescript',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Name: '
        },
        {
          type: 'input',
          name: 'tag',
          message: 'Tag name: ',
          default: 'div'
        },
      ],
      actions: [
        {
          type: 'addMany',
          destination: 'src/pages/{{name}}',
          templateFiles: 'plop_templates/page/*.hbs',
          base: 'plop_templates/page',
        },
      ]
  });
  };