module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('organism', {
    description: 'Create an organism',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'modify',
        path: '../src/components/organisms/index.ts',
        pattern: /$/,
        template: "export * from './{{pascalCase name}}'\n"
      }
    ] // array of actions
  })
}
