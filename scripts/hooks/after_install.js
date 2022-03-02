#!/usr/bin/env node

import { execSync, exec } from "child_process"

const extensions = [
    { id: 'johnsoncodehk.volar', desc: 'Volar' },
    { id: 'johnsoncodehk.vscode-typescript-vue-plugin', desc: 'TypeScript Vue Plugin' },
    { id: 'esbenp.prettier-vscode', desc: 'Prettier' },
    { id: 'bradlc.vscode-tailwindcss', desc: 'Tailwind CSS IntelliSense' }
]

const installed = Buffer.from(execSync('code --list-extensions'), 'utf-8').toString().split(/[\s\n]/)

for (const extension of extensions) {
    if (installed.indexOf(extension.id) === -1) {
        execSync(`code --install-extension ${extension.id}`)
        console.log(`${chalk.green('✔')} 成功安装 ${extension.desc}`)
    } else {
        console.log(`${chalk.green('✔')} ${chalk.white(extension.desc + '已安装')}`)
    }
}

console.log(`${chalk.green('✔')} 完成插件安装`)

exec('pm', (error, stdout, stderr) => {
    if (error) {
        execSync('npm i -g', { stdio: 'inherit' })
        console.log(`${chalk.green('✔')} 成功安装 sem cli`)
        return
    }
})