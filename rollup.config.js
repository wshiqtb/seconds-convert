// rollup.config.js
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json';

export default [
  {  
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'secondsConvert',
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [
      babel({exclude: 'node_modules/**'})
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'secondsConvert'
      }
    ],
    plugins: [
      babel({exclude: 'node_modules/**'}),
      uglify()
    ]
  }
];