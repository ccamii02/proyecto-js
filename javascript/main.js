/*let numero = 0
    for (let index = 1; index < 11 ; index++) {
    let resultado = numero * index
    console.log (index + numero + resultado)
}*/
///////////////////////////////////

///array con metodos de busqueda y filtrado
const listaproductos1 = [
    {id: 1, producto:'placa de video RTX2060', precio:80000},
    {id: 2, producto:'placa de video RTX3080', precio:300000},
    {id: 3, producto:'placa de video GTX1050ti', precio:70000},
    {id: 4, producto:'procesador ryzen 3-3200', precio:80000},
    {id: 5, producto:'procesador ryzen 5-3600', precio:40000},
    {id: 6, producto:'procesador ryzen 5-5600', precio:35000}
]
const buscar = listaproductos1.find(listaproductos1 => listaproductos1.id === 1)
console.log(buscar);

const lista = listaproductos1.some (producto => producto.nombre === "placa de video GT1030")   //productos que no existen//
console.log(lista)

const menorprecio = listaproductos1.filter(producto => producto.precio < 50000)   //precios bajos//
console.log(menorprecio)

const mayorprecio = listaproductos1.filter (producto => producto.precio > 50000)  //precios altos//
console.log(mayorprecio)

const listaproductos = listaproductos1.map ((producto) => producto.producto)
console.log(listaproductos);

const precios = [80000,300000,70000,80000,40000,35000]   //precios de menor a mayor
precios.sort ((a,b) => a-b)
console.log(precios)

const precios2 = [80000,300000,70000,80000,40000,35000]  //precios de mayor a menor
precios2.sort ((a,b) => b-a)
console.log(precios2)

const total1 = listaproductos1.reduce ((acc,el) => acc + el.precio,0)  //total de todos los componentes//
console.log(total1)

console.log('finalizado')
////////////////////

//desafio arrays//
class productoscomponentes{
    constructor(){
        this.productos = []
        this.name = ''
        this.total = 0
    }

    setnombre(value) {
        this.name = value
    }
    addproduct(product) {
        this.productos.push(product)
    }
    removelastproduct() {
        this.productos.pop()
    }
    removerirstproduct() {
        this.productos.shift()
    }
    gettotal() {
        for (const producto of this.productos){
            console.log(producto)
        this.total = this.total + producto.price
        }

    }
}
class product{
    constructor(nombre,price){
    this.nombre = nombre
    this.price = price
    }
}

const cliente = new productoscomponentes()
const produc1 = new product('rtx2060',80000)
const produc2 = new product('rtx3080',300000)
const produc3 = new product('gtx1050ti',70000)
const produc4 = new product('ry33200',80000)
const produc5 = new product('ry53600',40000)
const produc6 = new product('ry55600',35000)

cliente.addproduct(produc1)
cliente.addproduct(produc2)
cliente.addproduct(produc3)
cliente.addproduct(produc4)
cliente.addproduct(produc5)
cliente.addproduct(produc6)
cliente.gettotal()



////////////
//simulador interactivo con mis productos

function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case '1':
                return valor1 + valor2;
                break;
            case '2':
                return valor1 - valor2;
                break;
            default:
            return 0;
                break;
        }
}

alert ('bienvenido a la tienda de componentes.')

let subtotal_procesador=0;
let subtotal_placadevideo=0;
let total=0;

let procesador_elegido;
let placadevideo_elegido;
let pedido ='';

const valor_plac_gtx2060=80000;
const valor_plac_gtx3080=300000;
const valor_plac_gtx1050ti=70000;
const valor_proc_rz3_3200=80000;
const valor_proc_rz5_3600=40000;
const valor_proc_rz5_5600=35000;

let cantidad_placadevideos =prompt('cuantas placas de video quieres?:');
if (cantidad_placadevideos>0)
    {
        for (i = 1; i <= cantidad_placadevideos; i++)

        {
            placadevideo_elegido = prompt ('Elegi la Placa De Video que quieres:' + '\n 1-Placa De Video GTX 2060:$'+ valor_plac_gtx2060 +
            '\n 2-Placa De Video GTX 3080:$'+ valor_plac_gtx3080 + '\n 3-Placa De Video GTX 1050ti:$' + valor_plac_gtx1050ti);
            
            while (placadevideo_elegido != 1 && placadevideo_elegido != 2 && placadevideo_elegido != 3)
            {
                placadevideo_elegido = prompt ('Opcion incorrecta, Elegi de nuevo una placa de video:' + '\n 1-Placa De Video GTX 2060:$'+ valor_plac_gtx2060+
                '\n 2-Placa De Video GTX 3080:$'+ valor_plac_gtx3080 + '\n 3-Placa De Video GTX 1050ti:$' + valor_plac_gtx1050ti)
            }

            if (placadevideo_elegido ==1)
            {
                subtotal_placadevideo = operacion(subtotal_placadevideo,valor_plac_gtx2060,'1')
                pedido = operacion(pedido,'Placa De Video GTX 2060:$'+ valor_plac_gtx2060 + '\n', '1')
            }

            if (placadevideo_elegido ==2)
            {
                subtotal_placadevideo = operacion(subtotal_placadevideo,valor_plac_gtx3080,'1')
                pedido = operacion(pedido,'Placa De Video GTX 1050ti:$'+ valor_plac_gtx3080+ '\n', '1')
            }

            if (placadevideo_elegido ==3)
            {
                subtotal_placadevideo = operacion(subtotal_placadevideo,valor_plac_gtx1050ti,'1')
                pedido = operacion(pedido,'Placa De Video GTX 1050te:$'+ valor_plac_gtx1050ti+ '\n', '1')
            }
        
        }
    }
    alert (pedido + '\n\n Subtotal Placa De Video:' + subtotal_placadevideo);
    total  = operacion(total,subtotal_placadevideo,'1');



let cantidad_procesadores = prompt('Cuantas Procesadores quieres?:');
if (cantidad_procesadores>0)
    {
        for (i = 1; i <= cantidad_procesadores; i++)

        {
            procesador_elegido = prompt ('Elegi el Procesador que quieres:' + '\n 1-Procesador Ryzen 3-3200 $'+ valor_proc_rz3_3200 +
            '\n 2-Procesador Ryzen 5-3600$'+ valor_proc_rz5_3600 + '\n 3-Procesador Ryzen 5-5600$' + valor_proc_rz5_5600);
            
            while (procesador_elegido != 1 && procesador_elegido != 2 && procesador_elegido != 3)
            {
                procesador_elegido = prompt ('Opcion incorrecta, elegi de nuevo un Procesador:'  + '\n 1-Procesador Ryzen 5-5600 $'+ valor_proc_rz5_5600+
                '\n 2-Procesador Ryzen 3-3200$'+ valor_proc_rz3_3200 + '\n 3-Procesador Ryzen 5-3600$' + valor_proc_rz5_3600)
            }

            if (procesador_elegido ==1)
            {
                subtotal_procesador = operacion(subtotal_procesador,valor_proc_rz3_3200,'1')
                pedido = operacion(pedido,'Procesador Ryzen 3-3200:$'+ valor_proc_rz3_3200 + '\n', '1')
            }

            if (procesador_elegido ==2)
            {
                subtotal_procesador = operacion(subtotal_procesador,valor_proc_rz5_3600,'1')
                pedido = operacion(pedido,'Procesador Ryzen 5-3600:$'+ valor_proc_rz5_3600+ '\n', '1')
            }

            if (procesador_elegido ==3)
            {
                subtotal_procesador = operacion(subtotal_procesador,valor_proc_rz5_5600,'1')
                pedido = operacion(pedido,'Procesador Ryzen 5-5600:$'+ valor_proc_rz5_5600+ '\n', '1')
            }
        
        }
    }
    alert (pedido + '\n\n Subtotal Procesador:' + subtotal_procesador);
    total  = operacion(total,subtotal_procesador,'1');

    alert(pedido + "\n\nTotal Placa De Video: " + subtotal_placadevideo + "\n Total Procesador: " + subtotal_procesador + "\n\nTotal: " + total)



