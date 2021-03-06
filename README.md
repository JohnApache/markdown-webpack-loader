# Webpack Markdown Loader

- [English](README.en_US.md)
- [简体中文](README.md)

> 该 `markdown loader`文件加载器底层使用的是 `markdown-it` 渲染的，包含了很多 `markdown-it` 渲染插件， 支持大多数 `markdown` 语法功能

- [安装](#安装)
- [使用](#使用)
- [配置](#配置)
- [建议](#建议)
- [markdown-it插件列表](#markdown-it插件列表)
- [License](#license)

## 安装
```bash
$ npm i @dking/markdown-webpack-loader --dev
$ yarn add @dking/markdown-webpack-loader -D 
```

## 使用

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

## 配置

```js
// 所有可配置文件， 默认值
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
        plugins: [], // string[], 支持动态扩充 markdown-it 插件， 如果不存在会报错，
        disable: [], // string[], 禁用 markdown-it 插件， 按照规则匹配的不需要写全名， 找不到不会报错
    }
}
```

> Tips: 查看完整配置详情 点击链接 <https://markdown-it.github.io/markdown-it/#MarkdownIt.new>

## markdown-it插件列表
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

## 建议
欢迎创建issue 或者 pr [here](https://github.com/JohnApache/markdown-webpack-loader/issues).

## License

[MIT](LICENSE)
