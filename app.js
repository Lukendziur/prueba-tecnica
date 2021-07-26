// Postulante: Lucila V. Kendziur 

// 1. Las variables A y B contienen enteros. Intercambiar el contenido de A y B sin utilizar una
// variable temporal. 
let a = 1;
let b = 2;

[a , b] = [b, a];

// 2. Definir una función que imprima los números impares entre 1 y 99. 
function imprimirImpar(){
    for (let i = 1; i < 100; i = i + 2){
        console.log(i)
    }

}

// 3. Definir una función que acepte dos parámetros. Una cadena de caracteres (string) y un
// caracter. Esta función deberá devolver la cantidad de veces que el “caracter” se
// encuentra en la “cadena” provista. Ejemplo, si a la función se le pasara la cadena
// “abracadabra” junto con el carácter “a”, la función deberá devolver 5. 

function cantidadDeLetras(array, letra){
    array = array.split('').filter(value => value === letra);
    console.log(array.length);
   }


// 4. Definir una función que imprima números enteros de 1 a 100. Para los números
// múltiplos de 3, deberá imprimir la palabra “abra” en lugar del número. Para los múltiplos
// de 5, deberá imprimir la palabra “cadabra”. Para los números múltiplos de 3 y de 5,
// deberá imprimir la palabra “abracadabra”.
function imprimirPar(){
    for(let i = 0; i < 100; i++){
        if(i % 3 == 0){
            console.log('abra')
        }else if(i % 5 == 0){
            console.log('cadabra')
        }else if(i % 3 == 0 && i % 5 == 0){
            console.log('abracadabra')
        }
    }
}
imprimirPar();

// 5. Definir una función que reverse los caracteres de una cadena
function reverse(string){
    return string.split('').reverse().join('');
}
console.log(reverse('Hola, como estas'))

