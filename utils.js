const fs = require("fs")
const { Server } = require("http")
const path = require("path")

const servDir = "server"
const finalDir = "gas"
const distDir = "dist"
const htmlFile = "index.html"
const htmlFile2 = "page.html"

fs.copyFileSync(path.resolve(__dirname,distDir,htmlFile),path.resolve(__dirname,finalDir, htmlFile))
fs.copyFileSync(path.resolve(__dirname,distDir,htmlFile2),path.resolve(__dirname,finalDir, htmlFile2))

const dir = fs.readdirSync(path.resolve(__dirname,servDir))

dir.forEach(f =>{
    fs.copyFileSync(path.resolve(__dirname,servDir,f), path.resolve(__dirname,finalDir, f))
})

