var marked = require('marked');
var highlight = require('highlight.js');
var renderer = new marked.Renderer();

// Markdown rendering
renderer.heading = function (text, level) {
  var classNames = [
    '',
    'c-heading-alpha',
    'c-heading-bravo',
    'c-heading-charlie',
    'c-heading-delta',
    '',
    ''
  ];

  return '<h' + level + ' class="' + classNames[level] + '">' + text + '</h' + level + '>';
};

renderer.code = function (code) {
  return '<pre class="hljs c-code-example u-padding-all"><code>' +
    highlight.highlightAuto(code).value +
    '</code></pre>';
};

module.exports = renderer;
