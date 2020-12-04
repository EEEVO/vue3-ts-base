module.exports = Object.assign({}, require('changelog-sn/lib/lint'), {
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '新功能',
        '修复',
        '优化',
        '重构',
        '文档',
        'chore',
        'revert',
        'WIP',
        'docs',
        'build',
        'release'
      ]
    ]
  }
})
