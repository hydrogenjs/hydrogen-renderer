// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      compact: true,
      file: 'lib/index.ssr.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      compact: true,
      file: 'lib/index.min.js',
      format: 'iife',
      name: 'hydrogen',
      exports: 'named',
      sourcemap: true,
    },
    {
      compact: true,
      file: 'lib/index.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({ module: 'esnext' }),
  ],
  external: ['tslib']
};