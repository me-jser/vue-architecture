
/**
 * @file eslint
 * @description eslint检查工具，通过nodejs代理。如果未通过检查会询问用户是否进行autofix。只能选择y/n。 确认后会进行autofix
 * @version 0.1.0
 * @since 0.1.0
 * @requires eslint
 * @module scripts/eslint
 */
let prompt = require('prompt')
const {
  exec
} = require('child_process')
let colors = require('./colors')
let defaultCommand = 'eslint --ext .js,.vue src test/unit'
let fixCommand = 'eslint --fix --ext .js,.vue src  test/unit'

exec(defaultCommand, (err, stdout, stderr) => {
  if (err) {
    console.log(stderr)
  }
  if (stdout) {
    console.log(stdout)
    console.log(colors.consoleRed, '检查未通过，请选择是否进行自动修复(使用eslint --fix)')

    let schema = {
      properties: {
        input: {
          pattern: /y|n/,
          message: '只能选择y或n',
          required: true,
          default: 'y'
        }
      }
    }
    prompt.start()

    prompt.get(schema, function (err, result) {
      if (err) {
        console.log(colors.consoleRed, err)
        return
      }
      if (result.input === 'y') {
        exec(fixCommand, (err, stdout, stderr) => {
          if (err) {
            console.log(colors.consoleRed, '自动修复失败' + stdout, stderr)
          } else {
            console.log(colors.consoleGreen, '自动修复完成' + stdout, stderr)
          }
        })
      } else {
        console.log(colors.consoleRed, '用户放弃使用autofix')
      }
    })
  } else {
    console.log(colors.consoleGreen, 'eslint通过')
  }
})
