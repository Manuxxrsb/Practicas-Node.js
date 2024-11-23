const fs = require('node:fs')

const text = fs.readFileSync('saludo.txt', 'utf8') //lee el archivo de forma sincrona y lo codifica en utf8 para que se pueda leer

console.log(text) //imprime el contenido del archivo




const text2 = fs.readFileSync('nombres.txt', 'utf8') //lee el archivo de forma sincrona y lo codifica en utf8 para que se pueda leer

console.log(text) //imprime el contenido del archivo