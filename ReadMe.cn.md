# Nodejs + Koa 博客服务器

博客服务器代码，使用以下技术栈 **_Nodejs + Koa + JWT + Sequelize + MySQL + Redis + docker-compose ..._**

<div >
  <img alt="Vue" src="https://img.shields.io/badge/-nodejs-%23000000?style=flat-square&logo=nodedotjs" />
  <img alt="Static Badge" src="https://img.shields.io/badge/-koa-000?style=flat-square&logo=koa">
  <img alt="Static Badge" src="https://img.shields.io/badge/-mysql-%23000?style=flat-square&logo=mysql">
  <img alt="Vite" src="https://img.shields.io/badge/-redis-%23000000?style=flat-square&logo=redis" />
  <img alt="Static Badge" src="https://img.shields.io/badge/-sequelize-000?style=flat-square&logo=sequelize">
  <img alt="Static Badge" src="https://img.shields.io/badge/-docker-000?style=flat-square&logo=docker">
</div>
<br/>

`博客主页`：<a>http://www.shmilyyy.cn</a>

`CSDN主页`：<a>https://blog.csdn.net/shmilynn_?spm=1001.2014.3001.5343</a>

`GitHub主页`：<a>https://github.com/IsMShmily</a>

---

### 项目结构

```
├─ bin
│  └─ www
├─ config                   # 环境变量配置
├─ constant                 # 常量文件夹
├─ controller               # 接口数据传输层
├─ db                       # 数据库配置
│  ├─ redis.js
│  └─ seq.js
├─ docker-compose.yml
├─ err_handler.js
├─ middleware               # 中间件文件
├─ model                    # 模型层，数据库表
├─ package.json
├─ pnpm-lock.yaml
├─ public
├─ routes                   # 接口层
├─ service                  # 数据操作层
├─ uploads                  # 图片文件夹
├─ utils
└─ views
├─ .env
├─ CHANGELOG.md
├─ LICENSE
├─ ReadMe.md
├─ app.js
```

---

### 开始使用

默认情况下，您的电脑应该已安装 Nodejs、Vue、MongoDB 和代码编辑器。请参考我的环境配置：

```
Nodejs: v18.18.0
Koa: v1.1.17
mysql: v8.3.0
```

```
git clone https://github.com/IsMShmily/blogs_server.git
```

| 命令         | 描述                   |
| ------------ | ---------------------- |
| pnpm i       | 安装依赖               |
| pnpm run dev | 启动开发服务器         |

---

### Next.js 系列

- [Nextjs 15 入门指南](https://blog.csdn.net/shmilynn_/article/details/137891060?spm=1001.2014.3001.5502)
- [Nextjs15 - App Router](https://blog.csdn.net/shmilynn_/article/details/137904724?spm=1001.2014.3001.5502)
- [Nextjs15 - 使用路由处理器](https://blog.csdn.net/shmilynn_/article/details/146515380?spm=1001.2014.3001.5501)
- [Nextjs15 - 使用中间件](https://blog.csdn.net/shmilynn_/article/details/146543636?spm=1001.2014.3001.5501)
- [Nextjs15 - 什么是 CSR、SSR、SSG 和 ISR](https://blog.csdn.net/shmilynn_/article/details/146544013?spm=1001.2014.3001.5501)
- [Nextjs15 - 服务端组件(RSC)与客户端组件](https://blog.csdn.net/shmilynn_/article/details/146572565?spm=1001.2014.3001.5501)
- [Nextjs15 - 客户端组件](https://blog.csdn.net/shmilynn_/article/details/146582184?spm=1001.2014.3001.5501)
- [Nextjs15 - 什么是流式传输？](https://blog.csdn.net/shmilynn_/article/details/146582094?spm=1001.2014.3001.5501)
- [Nextjs15 - 服务器渲染策略](https://blog.csdn.net/shmilynn_/article/details/146582209?spm=1001.2014.3001.5501)

---

### TypeScript 体操系列

- [为什么 TS 被称为类型体操](https://blog.csdn.net/shmilynn_/article/details/137981157?spm=1001.2014.3001.5502)
- [TS 支持的类型和类型运算（上）](https://blog.csdn.net/shmilynn_/article/details/137996269?spm=1001.2014.3001.5502)
- [TS 支持的类型和类型运算（下）](https://blog.csdn.net/shmilynn_/article/details/138050067?spm=1001.2014.3001.55022)
- [TS 类型体操详解：extends infer](https://blog.csdn.net/shmilynn_/article/details/138072708?spm=1001.2014.3001.5502)

---