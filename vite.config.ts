import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';

// src/pages 以下の全ての HTML を取得してエントリーポイントのオブジェクトを作成
// 例: src/pages/index.html -> { index: '.../src/pages/index.html' }
// 例: src/pages/about.html -> { about: '.../src/pages/about.html' }
const inputEntries = Object.fromEntries(
  globSync('src/pages/**/*.html').map((file) => [
    file.replace(/^src\/pages\//, '').replace('.html', ''),
    resolve(__dirname, file),
  ])
);

export default defineConfig({
  // ルートディレクトリを src に設定
  root: 'src',
  
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: inputEntries,
    },
  },
  
  server: {
    port: 5173,
    open: '/pages/index.html', // 起動時に表示するデフォルトページ
  },
});