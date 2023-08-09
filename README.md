## Vue ESlint 配置

`配置eslint校验 自动格式化`
 
 1、安装依赖
 ```
 yarn add eslint eslint-plugin-vue eslint-plugin-prettier prettier eslint-plugin-import eslint-config-prettier eslint-config-airbnb-base -D

 yarn add typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-alias @types/eslint @types/node -D
 ```
2、创建.eslintrc.cjs文件并配置

3、vite.config.ts配置
```
yarn add vite-plugin-eslint -D
```
4、新建.eslintrcignore、.prettierrc.cjs、.prettierignore文件

`配置husky、lint-stage、commitlint校验 自动格式化`
1、安装并初始化
```
yarn add lint-staged husky -D
husky install
npx husky add .husky/pre-commit "npx lint-staged"
```
2、配置package.json
```
 "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      "npm run prettier-format"
    ],
    "*.{vue,less,css,sass}": [
      "npm run lint:css"
    ]
  }
```
3、添加commit校验、创建commitlint.config.cjs文件
```
yarn add @commitlint/config-conventional @commitlint/cli -D
npx husky add .husky/commit-msg "npx --no -- commitlint --edit ${1}"
```
`配置styleLint校验`
1、修改setting.json文件
```
"editor.codeActionsOnSave": {
       "source.fixAll": true,
       "source.fixAll.eslint": true,
       "source.fixAll.styleLint": true,
    },
    "stylelint.validate": [
        "css",
        "less",
        "scss",
        "vue",
        "postcss"
    ]
```
2、安装依赖
```
安装vscode插件stylelint
yarn add stylelint stylelint-config-standard -D
yarn add stylelint-less stylelint-config-recommended-less -D 对less支持
yarn add stylelint-scss stylelint-config-recommended-scss postcss -D 对scss支持
yarn add postcss-html stylelint-config-standard-scss stylelint-config-recommended-vue postcss -D
yarn add vite-plugin-stylelint -D
yarn add unplugin-auto-import -D // 自动引入
```
3、配置.stylelintrc.cjs、.stylelintignore
```js
 plugins: [
    ...,
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports:['vue','vue-router','pinia'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    eslintPlugin(), 
    StylelintPlugin({fix: true}),
  ],
```
