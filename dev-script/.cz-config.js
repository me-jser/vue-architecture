'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     新特性'},
    {value: 'fix',      name: 'fix:      bug修复'},
    {value: 'docs',     name: 'docs:     只修改了文档/注释'},
    {value: 'style',    name: 'style:    不影响代码或者逻辑的修改,仅包括代码样式\n            (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor', name: 'refactor: 既不是bug修改，也不是增加新特性'},
    {value: 'perf',     name: 'perf:     性能优化'},
    {value: 'test',     name: 'test:     补充缺失的测试'},
    {value: 'chore',    name: 'chore:    对构建工具的修改\n            and libraries such as documentation generation'},
    {value: 'revert',   name: 'revert:   使用了revert'},
    {value: 'WIP',      name: 'WIP:      开发进行中'}
  ],

  scopeOverrides: {
    fix: [
      {name: 'bug'},
      {name: 'style error'},
      {name: 'words error'},
      {name: 'logic error'},
      {name: 'api change'}
    ],
    refactor: [
      {name: 'common'},
      {name: 'util'},
      {name: 'components'},
      {name: 'logic'}
    ]
  },
  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '请选择要提交的commit类型:\n',
    scope: '选择影响的范围(可选):\n',
    // used if allowCustomScopes is true
    customScope: '自定义范围:\n',
    subject: '填写一个简洁的描述:\n',
    body: '填写详细描述(可选). 使用|换行:\n',
    breaking: '填写任何重大更改 (可选):\n',
    footer: '列出本次commit关闭的issue (可选). E.g.: #31, #34:\n',
    confirmCommit: '确定提交吗?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']

};
