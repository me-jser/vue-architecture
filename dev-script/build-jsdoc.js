const notifier = require('node-notifier')
const {
  exec
} = require('child_process')
var colors = require('./colors') // does not alter string prototype

exec('rm -rf JsDoc && jsdoc -c config/jsdoc.json src dev-script', (err, stdout, stderr) => {
  if (err) {
    notifier.notify({
      title: 'JsDoc 生成失败',
      message: '自动执行失败，请手动执行  jsdoc -c config/jsdoc.json -r src'
    })
    console.log('自动执行失败，请手动执行  jsdoc -c config/jsdoc.json -r src')
    console.log(stderr)
    return
  }
  console.log(colors.consoleGreen, '文档生成成功! >>JsDoc')
  notifier.notify({
    title: 'JsDoc生成成功',
    message: '文档位于项目根目录>>JsDoc,访问index.html访问即可',
    sound: 'Bottle',
    closeLabel: true
  })
})
// TODO: 更换模板样式
