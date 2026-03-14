import { cpSync, copyFileSync, existsSync } from 'fs'

cpSync('dist/assets', 'assets', { recursive: true })
copyFileSync('dist/index.html', 'index.html')

const publicFiles = ['lazyklogo_transparant_background.png', 'vite.svg']
for (const f of publicFiles) {
  if (existsSync(`dist/${f}`)) copyFileSync(`dist/${f}`, f)
}

if (existsSync('dist/gardenbeds')) {
  cpSync('dist/gardenbeds', 'gardenbeds', { recursive: true })
}

console.log('Built files copied to repo root.')
