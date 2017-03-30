.
├── config
│   ├── helpers.js              ────── 
│   ├── webpack.common.js       ────── 公共的配置文件
│   └── webpack.dev.js          ────── 开发环境的配置文件
├── src
│   ├── app    
│   │   ├── todo       ────── todo 文件夹
│   │   │   ├── detail      ────── detail组件
│   │   │   │   ├── detail.component.html
│   │   │   │   ├── detail.component.scss
│   │   │   │   ├── detail.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── home        ────── home组件
│   │   │   │   ├── add     ────── add子组件
│   │   │   │   │   ├── add.component.html
│   │   │   │   │   ├── add.component.scss
│   │   │   │   │   └── add.component.ts
│   │   │   │   ├── todoList    ────── todoList子组件
│   │   │   │   │   ├── todo-list.component.html
│   │   │   │   │   ├── todo-list.component.scss
│   │   │   │   │   └── todo-list.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   ├── home.component.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts        ────── todo模块
│   │   ├── interface       ────── 定义了类型
│   │   │   └── home.types.ts 
│   │   ├── service     ──────  服务
│   │   │    └── app.service.ts
│   │   │── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts        ────── 根组件
│   │   ├── app.module.ts     ────── 根模块  为Angular描述如何组装应用
│   │   └── app.routes.ts       ────── 路由模块
│   ├── favicon.ico
│   ├── index.html      ────── 宿主页面
│   ├── main.ts         ────── 项目的入口文件
│   ├── polyfills.ts    ────── 在大多数现代浏览器中运行Angular程序时需要的标准填充物。
│   └── vendor.ts       ────── 我们需要的提供商文件：Angular、Lodash、bootstrap.css……
├── package.json        ────── npm的所有相关信息
├── README.md   
├── tsconfig.json       ────── 配置了TypeScript编译器的编译参数
└── webpack.config.js   ──────  webpack配置文件

10 directories, 34 files
