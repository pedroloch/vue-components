import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue' // v5.x for vue2

const name = 'components'

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    file: path.resolve(__dirname, `dist/${name}.dts.js`),
    format: 'es',
    externalLiveBindings: false,
  },
  external: [
    // external modules
  ],
  plugins: [
    // create a simple plugin to resect style for .vue file

    vue({ needMap: false }),
    typescript({
      check: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          declaration: true,
          declarationMap: true,
        },
        exclude: ['**/__tests__'],
      },
    }),
  ],
}
