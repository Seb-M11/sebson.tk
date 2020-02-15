import ts from '@rollup/plugin-typescript';
import typescript from 'typescript';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'ts/index.ts',
  output: {
    file: 'index.js',
    format: 'iife'
  },
  plugins: [
    ts({ typescript, target: 'es5' }),
    uglify()
  ]
};
