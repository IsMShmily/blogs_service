# Nodejs + Koa Blogs Server

Blog server code, using the following technology stacks **_Nodejs + Koa + JWT + Sequelize + MySQL + Redis + docker-compose ..._**

<div >
  <img alt="Vue" src="https://img.shields.io/badge/-nodejs-%23000000?style=flat-square&logo=nodedotjs" />
  <img alt="Static Badge" src="https://img.shields.io/badge/-koa-000?style=flat-square&logo=koa">
  <img alt="Static Badge" src="https://img.shields.io/badge/-mysql-%23000?style=flat-square&logo=mysql">
  <img alt="Vite" src="https://img.shields.io/badge/-redis-%23000000?style=flat-square&logo=redis" />
  <img alt="Static Badge" src="https://img.shields.io/badge/-sequelize-000?style=flat-square&logo=sequelize">
  <img alt="Static Badge" src="https://img.shields.io/badge/-docker-000?style=flat-square&logo=docker">
</div>
<br/>

`Blog homepage`：<a>http://www.shmilyyy.cn</a>

`CSDN homepage`：<a>https://blog.csdn.net/shmilynn_?spm=1001.2014.3001.5343</a>

`GitHub homepage`：<a>https://github.com/IsMShmily</a>

---

### project tree

```
├─ bin
│  └─ www
├─ config                   # Configuration of environment variables
├─ constant                 # Constant folder
├─ controller               # Interface Data transmission layer
├─ db                       # Database configuration
│  ├─ redis.js
│  └─ seq.js
├─ docker-compose.yml
├─ err_handler.js
├─ middleware               # Middleware file
├─ model                    # Model layer, database table
├─ package.json
├─ pnpm-lock.yaml
├─ public
├─ routes                   # Interface layer
├─ service                  # Operate the data layer
├─ uploads                  # Picture folder
├─ utils
└─ views
├─ .env
├─ CHANGELOG.md
├─ LICENSE
├─ ReadMe.md
├─ app.js

```

---

### start up

By default, your computer has installed Nodejs Vue MongoDB and code editor and other environments. Please refer to the configuration of my environment:

```
Nodejs: v18.18.0
Koa: v1.1.17
mysql: v8.3.0
```

```
git clone https://github.com/IsMShmily/blogs_server.git
```

| Order        | Comment                    |
| ------------ | -------------------------- |
| pnpm i       | Download dependencies      |
| pnpm run dev | Start the test environment |

---

### Next.js series

- [初始 Nextjs 15](https://blog.csdn.net/shmilynn_/article/details/137891060?spm=1001.2014.3001.5502)
- [Nextjs15 - App Router](https://blog.csdn.net/shmilynn_/article/details/137904724?spm=1001.2014.3001.5502)
- [Nextjs15 - Route Handlers 的使用](https://blog.csdn.net/shmilynn_/article/details/146515380?spm=1001.2014.3001.5501)
- [Nextjs15 - middleware 的使用](https://blog.csdn.net/shmilynn_/article/details/146543636?spm=1001.2014.3001.5501)
- [Nextjs15 - 什么是 CSR、SSR、SSG 和 ISR](https://blog.csdn.net/shmilynn_/article/details/146544013?spm=1001.2014.3001.5501)
- [Nextjs15 - 服务端组件(RSC)与客服端组件](https://blog.csdn.net/shmilynn_/article/details/146572565?spm=1001.2014.3001.5501)
- [Nextjs15 - Client Component 客户端组件](https://blog.csdn.net/shmilynn_/article/details/146582184?spm=1001.2014.3001.5501)
- [Nextjs15 - Streaming 流式传输是什么？](https://blog.csdn.net/shmilynn_/article/details/146582094?spm=1001.2014.3001.5501)
- [Nextjs15 - 服务器渲染策略](https://blog.csdn.net/shmilynn_/article/details/146582209?spm=1001.2014.3001.5501)

---

### TypeScript gymnastics series

- [TS 为什么被叫做类型体操](https://blog.csdn.net/shmilynn_/article/details/137981157?spm=1001.2014.3001.5502)
- [Ts 支持哪些类型和类型运算(上)](https://blog.csdn.net/shmilynn_/article/details/137996269?spm=1001.2014.3001.5502)
- [Ts 支持哪些类型和类型运算(下)](https://blog.csdn.net/shmilynn_/article/details/138050067?spm=1001.2014.3001.55022)
- [Ts 类型体操详讲 之 extends infer](https://blog.csdn.net/shmilynn_/article/details/138072708?spm=1001.2014.3001.5502)

---