import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/,
    })
  ],
  external: ['pinyin', 'is-chinese', 'node-fetch'],
  output: {
    file: 'index.js',
    name: 'translate',
    format: 'iife', // use browser globals
    sourceMap: true
  }
};