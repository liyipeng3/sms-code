import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: [{
    file: './dist/index.js',
    name: 'index',
    format: 'umd',
  }, {
    file: './dist/index.min.js',
    name: 'index',
    format: 'umd',
    plugins: [terser()]
  }],
  watch: {
    include: 'src/**'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}
