#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

// 创建本地 .npmrc
fs.access('.npmrc', err => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.npmrc'), 'registry=https://registry.npmmirror.com', () => {
        console.log(`✔ 成功创建本地 .npmrc`)
      })
    }
  })
  
  // 创建本地 .env.local
  fs.access('.env.local', err => {
    if (err && err.code === 'ENOENT') {
      fs.writeFile(path.join(process.cwd(), '.env.local'), '', () => {
        console.log(`✔ 成功创建本地 .env.local`)
      })
    }
  })
  
  // 配置 VSCode，主要是解决了 vetur 与 volar 的冲突
  fs.rmSync(`${process.cwd()}/.vscode`, { recursive: true, force: true }, err => { })
  fs.mkdirSync(`${process.cwd()}/.vscode`)
  fs.writeFileSync(`${process.cwd()}/.vscode/extensions.json`,
  `{
    "recommendations": ["johnsoncodehk.volar"],
    "unwantedRecommendations": ["octref.vetur"]
  }
  `, () => {
    console.log(`✔ 成功配置本地 vscode`)
  })