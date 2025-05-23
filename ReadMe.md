<div align="right">
  <a href="ReadMe.md">English</a> | <a href="ReadMe.cn.md">中文</a>
</div>

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

### Project Structure

```
├─ bin
│  └─ www
├─ config                   # Environment variables configuration
├─ constant                 # Constants folder
├─ controller               # Interface data transmission layer
├─ db                       # Database configuration
│  ├─ redis.js
│  └─ seq.js
├─ docker-compose.yml
├─ err_handler.js
├─ middleware               # Middleware files
├─ model                    # Model layer, database tables
├─ package.json
├─ pnpm-lock.yaml
├─ public
├─ routes                   # Interface layer
├─ service                  # Data operation layer
├─ uploads                  # Image folder
├─ utils
└─ views
├─ .env
├─ CHANGELOG.md
├─ LICENSE
├─ ReadMe.md
├─ app.js
```

---

### Getting Started

By default, your computer should have Nodejs, Vue, MongoDB, and a code editor installed. Please refer to my environment configuration:

```
Nodejs: v18.18.0
Koa: v1.1.17
mysql: v8.3.0
```

```
git clone https://github.com/IsMShmily/blogs_server.git
```

| Command      | Description               |
| ------------ | ------------------------- |
| pnpm i       | Install dependencies      |
| pnpm run dev | Start development server  |

---

### Next.js Series

- [Getting Started with Nextjs 15](https://blog.csdn.net/shmilynn_/article/details/137891060?spm=1001.2014.3001.5502)
- [Nextjs15 - App Router](https://blog.csdn.net/shmilynn_/article/details/137904724?spm=1001.2014.3001.5502)
- [Nextjs15 - Using Route Handlers](https://blog.csdn.net/shmilynn_/article/details/146515380?spm=1001.2014.3001.5501)
- [Nextjs15 - Using Middleware](https://blog.csdn.net/shmilynn_/article/details/146543636?spm=1001.2014.3001.5501)
- [Nextjs15 - What are CSR, SSR, SSG and ISR](https://blog.csdn.net/shmilynn_/article/details/146544013?spm=1001.2014.3001.5501)
- [Nextjs15 - Server Components (RSC) vs Client Components](https://blog.csdn.net/shmilynn_/article/details/146572565?spm=1001.2014.3001.5501)
- [Nextjs15 - Client Components](https://blog.csdn.net/shmilynn_/article/details/146582184?spm=1001.2014.3001.5501)
- [Nextjs15 - What is Streaming?](https://blog.csdn.net/shmilynn_/article/details/146582094?spm=1001.2014.3001.5501)
- [Nextjs15 - Server Rendering Strategies](https://blog.csdn.net/shmilynn_/article/details/146582209?spm=1001.2014.3001.5501)

---

### TypeScript Gymnastics Series

- [Why is TS Called Type Gymnastics](https://blog.csdn.net/shmilynn_/article/details/137981157?spm=1001.2014.3001.5502)
- [Types and Type Operations in TS (Part 1)](https://blog.csdn.net/shmilynn_/article/details/137996269?spm=1001.2014.3001.5502)
- [Types and Type Operations in TS (Part 2)](https://blog.csdn.net/shmilynn_/article/details/138050067?spm=1001.2014.3001.55022)
- [TS Type Gymnastics: Detailed Explanation of extends infer](https://blog.csdn.net/shmilynn_/article/details/138072708?spm=1001.2014.3001.5502)

---