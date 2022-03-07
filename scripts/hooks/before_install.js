#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// 创建本地 .npmrc
function createMirror() {
  fs.access('.npmrc', (err) => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.npmrc'), 'registry=https://registry.npmmirror.com', () => {
        console.log(`✔ 成功创建本地 .npmrc`)
      })
    }
  })
}

// 创建本地 .env.local
function createLocalEnv() {
  fs.access('.env.local', (err) => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.env.local'), '', () => {
        console.log(`✔ 成功创建本地 .env.local`)
      })
    }
  })
}

// 创建 vscode 配置文件
function createConfiguration() {
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
      console.log(`✔ 成功配置本地 vscode`)
    }
  )
}
