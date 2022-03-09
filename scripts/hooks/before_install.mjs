#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import ansi from '../lib/ansi.mjs'

// 创建本地 .npmrc
function createNpmrc() {
  fs.access('.npmrc', (err) => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.npmrc'), 'registry=https://registry.npmmirror.com', () => {
        console.log(`${ansi.fgGreen}✔${ansi.reset} 成功创建本地 .npmrc`)
      })
    }
  })
}

// 创建本地 .env.local
function createLocalEnv() {
  fs.access('.env.local', (err) => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.env.local'), '', () => {
        console.log(`${ansi.fgGreen}✔${ansi.reset} 成功创建本地 .env.local`)
      })
    }
  })
}

// 配置 VSCode 开发环境
function setupVSCode() {
  const extensions = [
    { id: 'johnsoncodehk.volar', desc: 'Volar' },
    { id: 'johnsoncodehk.vscode-typescript-vue-plugin', desc: 'TypeScript Vue Plugin' },
    { id: 'esbenp.prettier-vscode', desc: 'Prettier' },
    { id: 'bradlc.vscode-tailwindcss', desc: 'Tailwind CSS IntelliSense' },
  ]

  const installed = Buffer.from(execSync('code --list-extensions'), 'utf-8')
    .toString()
    .split(/[\s\n]/)

  for (const extension of extensions) {
    if (installed.indexOf(extension.id) === -1) {
      execSync(`code --install-extension ${extension.id}`)
      console.log(`${ansi.fgGreen}✔${ansi.reset} 成功安装 ${extension.desc}`)
    }
  }

  fs.rmSync(`${process.cwd()}/.vscode`, { recursive: true, force: true }, (err) => {})
  fs.mkdirSync(`${process.cwd()}/.vscode`)
  fs.writeFileSync(
    `${process.cwd()}/.vscode/settings.json`,
    `
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "css.lint.unknownAtRules": "ignore"
}
`
  )
  fs.writeFileSync(
    `${process.cwd()}/.vscode/extensions.json`,
    `{
  "recommendations": ["johnsoncodehk.volar", "johnsoncodehk.vscode-typescript-vue-plugin"],
  "unwantedRecommendations": ["octref.vetur"]
}
`,
    () => {
      console.log(`${ansi.fgGreen}✔${ansi.reset} 成功配置本地 vscode`)
    }
  )
}

function main() {
  createNpmrc()
  createLocalEnv()
  setupVSCode()
}

main()
