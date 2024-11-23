const fs = require('node:fs/promises') 

//lee el archivo de forma asincrona y lo codifica en utf8 para que se pueda leer
console.log('Leyendo el primer archivo')
fs.readFile('saludo.txt', 'utf8')
    .then((text) => { //=> es una funcion de flecha
        console.log('El primer archivo se ha leido: ' , text) //imprime el mensaje
    })

console.log('Haciendo cosas mientras se lee el archivo')

console.log('Leyendo el segundo archivo') 

//lee el archivo de forma asincrona y lo codifica en utf8 para que se pueda leer
fs.readFile('nombres.txt', 'utf8')
    .then((text) => { //=> es una funcion de flecha
        console.log('El segundo archivo se ha leido: ',text) //imprime el mensaje
    })