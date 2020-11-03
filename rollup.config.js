import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript'

export default {
    input: './src/index.ts',
    output: [{
        file: './dist/index.js',
        name: 'index',
        format: 'umd',
    }, {
        file: './dist/index.min.js',
        name: 'index',
        format: 'umd',
        plugins: [uglify()]
    }],
    watch: {
        include: 'src/**'
    },
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}
