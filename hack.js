const simpleGit = require('simple-git');


const git = simpleGit();

// or await each step individually
await git.init();
await git.addRemote('origin', 'https://github.com/c-plus-plus-equls-c-plus-plus/faked-stats');


for (let i = 0; i < 3000; i++) {
  async function exec () {
    fs.writeFile('/hard-work.js', `console.log(${i})`, err => {
  if (err) {
    console.error(err)
    return
  }
  await git.add('./*', handlerFn).commit(`#${i}`).push('origin', 'master')
}
})
}
