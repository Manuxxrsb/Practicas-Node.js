const fs = require('node:fs')

//lee el archivo de forma asincrona y lo codifica en utf8 para que se pueda leer
console.log('Leyendo el primer archivo')
fs.readFile('saludo.txt', 'utf8', (err, text) => { 
    //=> es una funcion de flecha o callback que se ejecuta cuando se termina de leer el archivo

    if (err) {
        console.log('Error al leer el Primer archivo') //imprime el mensaje
        return
    }
    console.log('El Primer archivo se ha leido') //imprime el mensaje
    console.log(text) //imprime el contenido del archivo
}
)

console.log('Haciendo cosas mientras se lee el archivo')

console.log('Leyendo el segundo archivo') 

//lee el archivo de forma asincrona y lo codifica en utf8 para que se pueda leer
fs.readFile('nombres.txt', 'utf8', (err, text) => { 
    //=> es una funcion de flecha o callback que se ejecuta cuando se termina de leer el archivo

    if (err) {
        console.log('Error al leer el Segundo archivo') //imprime el mensaje
        return
    }
    console.log('El Segundo archivo se ha leido') //imprime el mensaje
    console.log(text) //imprime el contenido del archivo
}
)

