const fs = require('node:fs')

const stats = fs.statSync('saludo.txt') //obtiene información del archivo , de forma sincrona

console.log(
    stats.isFile(), //si es un archivo
    stats.isDirectory(), //si es un directorio
    stats.size, //tamaño del archivo en bytes
)