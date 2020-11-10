const { parseWithoutProcessing } = require('handlebars')
const {promisify} = require('util')
module.exports.clone = async function(repo,desc){
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`正在下载中~~~~${repo}`)
  process.start()
  await download(repo,desc,{ clone: true },function (err) {
    console.log(err ? 'Error' : 'Success')
    if (err) {
      // console.log(chalk.red(err));
      process.exit()
    }

  })
  process.succeed()
}