<h1>Europebet Assignment</h1>

## Table of Contents

- [](#)
  - [Prerequisites](#prerequisites)
- [](#-1)
  - [Tech Stack](#tech-stack)
- [](#-2)
  - [Getting Started](#getting-started)
- [](#-3)
  - [Project Structure](#project-structure)

## Prerequisites

- <img style="padding-right:10px;" align="left"  src="readme/assets/NodeJs.png"   height="22"/> <p>_Node JS @12.X and up_</p>
- <img style="padding-right:10px;" align="left"  src="readme/assets/Npm.png"   height="20"/> <p>_npm @6 and up_</p>

#

## Tech Stack

- <img style="padding-right:10px;" align="left"  src="readme/assets/React.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[React @18.2.0]</a> - The library for web and native user interfaces<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Vite.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[Vite @4.0.0]</a> - Build tool that aims to provide a faster and leaner development experience for modern web projects.<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Typescript.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[Typescript @4.7.4]</a> - TypeScript is JavaScript with syntax for types.<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Tailwindcss.png"   height="15"/> <p><a href="https://tailwindcss.com/" target="_blank">[tailwindcss @3.1.3]</a> - CSS framework<p/>

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/Ana-Vartasashvili/europebet-assignment.git
```

2\. Navigate to the repository

```sh
cd europebet-assignment/
```

3\. Next step requires install all the dependencies

```sh
npm install
```

or

```sh
yarn install
```

4\. After that you can run application from terminal:

```sh
npm run dev
```

Runs the app in the development mode. Open http://127.0.0.1:5173/ to view it in your browser.

#

## Project Structure

```bash

├─── public
├─── readme
├─── src
│     ├── assets
│     │     ├── fonts
│     │     ├── icons
│     │     ├── images
│     │     └── index.ts
│     ├── components
│     │    ├── componentFolder
│     │    │       ├── components #optional
│     │    │       │     ├── Component.tsx
│     │    │       │     ├── index.ts
│     │    │       │     └── types.d.ts
│     │    │       ├── Component.tsx
│     │    │       ├── index.ts
│     │    │       └── types.d.ts
│     │    ├── shared
│     │    │    ├── components #optional
│     │    │    │     ├── Component.tsx
│     │    │    │     ├── index.ts
│     │    │    │     └── types.d.ts
│     │    │    ├── Component.tsx
│     │    │    ├── index.ts
│     │    │    └── types.d.ts
│     │    └── index.ts
│     ├── data
│     │    ├── index.ts
│     │    └── data.json
│     ├── App.tsx
│     ├── index.css
│     ├── main.tsx
│     └── vite-env.d.ts
│- .eslintrc.json
│- .gitignore
│- .prettierrc.json
│- README.md
│- index.html
│- package-lock.json
│- package.json
│- postcss.config.js
│- tailwind.config.cjs
│- tsconfig.json
│- tsconfig.node.json
│- vite.config.ts


```
