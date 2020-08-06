module.exports =  {
    parser:   'esprima' ,  // Specifies the ESLint parser
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
      },
    },
    env: {
      browser: true, // enable all browser global variables
      commonjs: true,
      es6: true,
      jest: true,
      node: true
    },
    settings: {
    },
    extends:  [
      '@dking/base'
    ],
    rules:  {},
  };
  