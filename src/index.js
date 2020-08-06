const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');
const createMd = require('./md');

const MarkdownLoaderOptionsSchema = {
    type      : 'object',
    properties: {
        html       : { type: 'boolean' },
        xhtmlOut   : { type: 'boolean' },
        breaks     : { type: 'boolean' },
        langPrefix : { type: 'string' },
        linkify    : { type: 'boolean' },
        typographer: { type: 'boolean' },
        quotes     : {
            anyOf: [
                { type: 'string' },
                { type: 'array', items: { type: 'string' }},
            ],
        },
        highlight: { 'instanceof': 'Function' },
        plugins  : { type: 'array', items: { type: 'string' }},
        disable  : { type: 'array', items: { type: 'string' }},
    },
    additionalProperties: false,
};

module.exports = function(source) {
    this.cacheable();
    const options = getOptions(this);
    validateOptions(MarkdownLoaderOptionsSchema, options, {
        name        : 'MarkdownLoader',
        baseDataPath: 'options',
    });
    const md = createMd(options);
    return md.render(source);
};
