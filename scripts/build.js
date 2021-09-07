const fs = require('fs-extra')
const path = require('path')
const execa = require('execa')

const name = 'components'
main()

async function main() {
  await execa('vite', ['build'], { stdio: 'inherit' })
  await execa('rollup', ['-c'], { stdio: 'inherit' })
  await fs.remove(path.resolve(__dirname, `../dist/${name}.dts.js`))
  console.log(path.resolve(__dirname, `../dist/${name}.dts.js`))
}
