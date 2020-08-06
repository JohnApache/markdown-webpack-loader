const MarkdownIt = require('markdown-it');

const MarkdownItPluginsList = [
    'markdown-it-sup',
    'markdown-it-sub',
    'markdown-it-mark',
    'markdown-it-kbd',
    'markdown-it-kbd',
    'markdown-it-underline',
    'markdown-it-deflist',
    'markdown-it-checkbox',
    'markdown-it-emoji',
    'markdown-it-task-checkbox',
    'markdown-it-container',
    'markdown-it-anchor',
    'markdown-it-table-of-contents',
    'markdown-it-footnote',
    'markdown-it-imsize',
    'markdown-it-implicit-figures',
    'markdown-it-attrs',
    'markdown-it-math',
    'markdown-it-plantuml',
    'markdown-it-ins',
    'markdown-it-abbr',
    'markdown-it-smartarrows',
];

const DEFAULT_MARKDOWN_OPTIONS = {
    html       : false,
    xhtmlOut   : false,
    breaks     : false,
    langPrefix : '',
    linkify    : false,
    typographer: false,
    quotes     : '“”‘’',
    highlight  : null,
    plugins    : [],
    disable    : [],
};

const createMd = (options = {}) => {

    const finalOptions = Object.assign({}, DEFAULT_MARKDOWN_OPTIONS, options);
    const { plugins, disable } = finalOptions;

    delete finalOptions.plugins;
    delete finalOptions.disable;
    delete finalOptions.enable;

    const md = new MarkdownIt(finalOptions);

    // 启动自定义插件
    plugins.forEach(plugName => {
        if (MarkdownItPluginsList.includes(plugName)) return;
        MarkdownItPluginsList.push(plugName);
    });

    MarkdownItPluginsList.forEach(plugName => {
        const plug = require(plugName);
        md.use(plug);
    });

    // 找不到不会报错
    md.disable(disable, true);

    return md;
};

module.exports = createMd;
