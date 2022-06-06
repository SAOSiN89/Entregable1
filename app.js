let num = Number(prompt("Ingrese el numero del que desea saber la cantidad de divisores o ingrese 'ESC' para salir"))

while(num != "ESC"){
    alert("El num que ingresate es: " + num)
    let contador = 0
    for (let i = 1; i <= num ; i++) {
        if(num % i == 0 ){
            contador++;
        }
    }
    alert("la cantidad de divisores de "+ num + " es: " + contador)
    num = prompt("Ingrese otro numero o la palabra 'ESC' para terminar")
}
 