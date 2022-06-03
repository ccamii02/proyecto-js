let numero = 0
    for (let index = 1; index < 11 ; index++) {
    let resultado = numero * index
    console.log (index + numero + resultado)
}

//////////////////////////////////

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

alert('bienvenido a la tienda de componentes')

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

let cantidad_placadevideos = prompt('cuantas placas de video quieres?:');
if (cantidad_placadevideos>0)
    {
        for (i = 1; i <= cantidad_placadevideos; i++)

        {
            placadevideo_elegido = prompt ('Elegi la Placa De Video que quieres:' + '\n 1-Placa De Video GTX 2060:$'+ valor_plac_gtx2060 +
            '\n 2-Placa De Video GTX 3080:$'+ valor_plac_gtx3080 + '\n 3-Placa De Video GTX 1050ti:$' + valor_plac_gtx1050ti);
            
            while (placadevideo_elegido!= 1 && placadevideo_elegido != 2 && placadevideo_elegido != 3)
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


