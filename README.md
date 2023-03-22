<div align="center">
  <img alt="V3 Admin Vite Logo" width="120" height="120" src="./src/assets/layout/logo.png">
  <h1>V3 Admin Vite</h1>
</div>

## ⚡ 简介

本仓库是在免费开源的中后台管理系统[Vue3  Admin Vite](https://github.com/un-pany/v3-admin-vite)的基础上二次开发的，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术.

## 特性

- **Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API
- **Element Plus**：Element UI 的 Vue3 版本
- **Pinia**: 传说中的 Vuex5
- **Vite**：真的很快
- **Vue Router**：路由路由
- **TypeScript**：JavaScript 语言的超集
- **PNPM**：更快速的，节省磁盘空间的包管理工具
- **Scss**：和 Element Plus 保持一致
- **ESlint**：代码校验
- **Axios**：发送网络请求（已封装好）
- **UnoCSS**：具有高性能且极具灵活性的即时原子化 CSS 引擎
- **VueUse**: 工具库

## 功能

- **用户管理**：登录、登出演示
- **权限管理**：内置页面权限（动态路由）、指令权限、权限函数、路由守卫
- **多环境**：开发环境（development）、预发布环境（staging）、正式环境（production）
- **多主题**：内置普通、黑暗、深蓝三种主题模式
- **错误页面**: 403、404
- **Dashboard**：根据不同用户显示不同的 Dashboard 页面
- **其他内置功能**：SVG、动态侧边栏、动态面包屑、标签页快捷导航、Screenfull 全屏、自适应收缩侧边栏
- **UnoCss图标**：纯css图标

## 在线预览

| 位置         | 账号            | 链接                                              |
| ------------ | --------------- | ------------------------------------------------- |
| github-pages | admin 或 editor | [链接](https://www.xiaozhangtx.top/v3-admin-vite) |

## 🚀 开发

```bash
# 配置
1. 一键安装 .vscode 目录中推荐的插件
3. node 版本 16+
4. pnpm 版本 7.x

# 克隆项目
git clone https://github.com/xiaozhangtongx/v3-admin-vite.git

# 进入项目目录
cd v3-admin-vite

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## ✔️ 预览

```bash
# 预览预发布环境
pnpm preview:stage

# 预览正式环境
pnpm preview:prod
```

## 📦️ 多环境打包

```bash
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```

## 🔧 代码检查

```bash
# 代码格式化
pnpm lint
```

## Git 提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `workflow` 工作流改进
- `ci` 持续集成相关
- `types` 类型定义文件更改
- `wip` 开发中

## 后期修改计划
- [ ] 全面使用`UnoCss`,取消`Sass`
- [ ] 加入`echart`等数据展示页
- [ ] 修改登录页样式
- [ ] 修改加载页样式
- [ ] 使用`VueUse`取代一些依赖
- [ ] 开发一个基于`naiveui`组件库的模板
- [ ] ...

## 📄 License

[MIT](./LICENSE)

Copyright (c) 2023 [xiaozhangtx](https://github.com/xiaozhangtongx)

