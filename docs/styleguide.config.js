const path = require('path');
console.log('@@@@@@@>>>>>>>>'+ path.join(__dirname, 'styleguide/global.requires.js') +'<<<<<<<@@@@');
module.exports = {
  // set your styleguidist configuration here
  title: "Vue Material Directive",
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  require: [path.join(__dirname, 'styleguide.global.requires.js')],
  skipComponentsWithoutExample : true,
  getComponentPathLine(componentPath) {
   return null;
  },
  exampleMode: "collapse",
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:'https://fonts.googleapis.com/icon?family=Material+Icons'          
        },
        {
          rel: 'stylesheet',
          href:'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css'          
        }
      ]
    }
  }
};
