import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VueUseComponentsResolver} from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//       vue(),
//       UnoCSS()
//   ],
// })
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS(),
        AutoImport({
            // 自动导入 Vue 相关的 API，如 ref, reactive 等
            imports: ['vue', '@vueuse/core'],
            // 自动导入 VueUse
            dts: 'src/auto-imports.d.ts', // 生成 TypeScript 声明文件
        }),
        Components({
            // 自动导入组件
            dts: 'src/components.d.ts', // 生成 TypeScript 声明文件
            resolvers: [
                VueUseComponentsResolver(),
            ],
        }),
    ],
});