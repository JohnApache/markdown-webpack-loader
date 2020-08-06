# Webpack Markdown Loader

- [English](README.en_US.md)
- [简体中文](README.md)

> The `markdown loader` file loader use `markdown-it` as the core renderer, include many `markdown-it` rendering plug-ins, and supports most of the `markdown` syntax.

- [Install](#install)
- [Usage](#usage)
- [Configuration](#configuration)
- [MarkdownIt-Plugin-List](#MarkdownIt-Plugin-List)
- [Questions](#questions)
- [License](#license)

## Install
```bash
$ npm i @dking/markdown-webpack-loader --dev
$ yarn add @dking/markdown-webpack-loader -D 
```

## Usage

```js
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /.md$/,
      use: [
        { loader: 'html-loader' },
        {
          loader: '@dking/markdown-webpack-loader',
          options: {
            html: true,
            linkify: true,
            typographer: true
          }
        }
      ]
    }]
  }
};
```

## Configuration

```js
// all loader options
{
    options: {
        html       : false,
        xhtmlOut   : false,
        breaks     : false,
        langPrefix : '',
        linkify    : false,
        typographer: false,
        quotes     : '“”‘’',
        highlight  : null,

        // 特殊配置
        plugins: [], // string[], Support dynamic add markdown it plug-in. If it does not exist, an error will be reported
        disable: [], // string[], Disable the markdown it plug-in. If it is matched according to the rules, it is not necessary to write the full name. and if it is not found, no error will be reported
    }
}
```
> Tips: To view the full configuration details, click the link <https://markdown-it.github.io/markdown-it/#MarkdownIt.new>

## MarkdownIt-Plugin-List
`"markdown-it-abbr"`  
`"markdown-it-anchor"`  
`"markdown-it-attrs"`  
`"markdown-it-checkbox"`  
`"markdown-it-container"`  
`"markdown-it-deflist"`  
`"markdown-it-emoji"`  
`"markdown-it-footnote"`  
`"markdown-it-implicit-figures"`  
`"markdown-it-imsize"`  
`"markdown-it-ins"`  
`"markdown-it-kbd"`  
`"markdown-it-mark"`  
`"markdown-it-math"`  
`"markdown-it-plantuml"`  
`"markdown-it-smartarrows"`  
`"markdown-it-sub"`  
`"markdown-it-sup"`  
`"markdown-it-table-of-contents"`  
`"markdown-it-task-checkbox"`  
`"markdown-it-underline"`  

## Questions
Please open an issue [here](https://github.com/JohnApache/markdown-webpack-loader/issues).

## License

[MIT](LICENSE)
