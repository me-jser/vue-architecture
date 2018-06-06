/*  @description 处理eslint，根据命令行是否有--fix 来决定是否使用eslint的 --fix 选项
/*  author : xiaoshuai11
/*  date   : 2018-6-3 16:15:37
/*  last   : 2018-6-3 16:15:37
*/
const {
  exec
} = require('child_process');

// 前两项为运行参数
let nodeParams = process.argv;
let params = process.argv.slice(2)[0];
debugger
let partern = 'fix';
let eslintCommand = ''
if (params === partern) {
  eslintCommand = 'eslint --ext .js,.vue src  test/unit --fix'
} else {
  eslintCommand = 'eslint --ext .js,.vue src test/unit'
}
console.log(params, params === partern, nodeParams);

exec(eslintCommand, (err, stdout, stderr) => {

  if (err) {
    console.log(stderr);
  }
  console.log(stdout);
});

// TODO: finish it
