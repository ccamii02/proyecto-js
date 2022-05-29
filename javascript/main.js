let numero = 0
    for (let index = 1; index < 11 ; index++) {
    let resultado = numero * index
    console.log (index + numero + resultado)
}


let nombre = prompt ('ingresa tu nombre')
while (nombre = ''){
    nombre = prompt('')
}

let edad = prompt ('ingresa tu edad');
while (edad < '18'){
    edad = prompt ('eres menor de edad')
}

console.log ('finalizado')