// // TIPOS DE DATOS
// // dato = número
// // string = palabra, frase, carácter, letra 
// // boolean= true o false 
// // undefined = indefinido
// let miNumero = 1
// typeof(miNumero)

// let miString = 'Hola Mundo'
// typeof(miString)

// let miBooleano = false
// typeof(miBooleano)

// let dato
// typeof(dato) //undefined


// //OPERADORES
// let suma = 5 + 5
// //suma

// let resta = 3 - 2
// //resta

// let division = 3/0
// //division

// let multiplicacion = 6* 10
// //multiplicacion

// //CONCATENAR
// let frase = "hola " + "mundo " + "!"
// console.log(frase)

// //Operadores POSTINCREMENTO Y PREINCREMENTO Y DECREMENTO


// let x = 1
// //x
// let y = ++x
// console.log(x)
// console.log(y)

// //POSTINCREMENTO(SI PONEMOS DESPUÉS, (ejemplo de arriba)PRIMERO SE REALIZA LA OPERACIÓN Y LUEGO SE INCREMENTA)
// //PREINCREMENTO(SI PONEMOS ANTES, SE EJECUTA LA OPERACIÓN DE INCREMENTO ANTES DE EJECUTAR LA OPERACIÓN)
// let z = x++ //Aquí z en este momento vale 2(porque x vale 2) dcespués de esta operación x pasa a valer 3.
// console.log(x)
// console.log(z)

// let a = x--
// console.log(a)
// console.log(x)




// //Iteración 1
// //1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
// let myFavoriteHero = "Hulk"
// console.log(myFavoriteHero)

// //1.2 Crea una variable llamada x, asigna el valor 50 a ella.
// const x = 50;
// console.log(x)

// //1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
// const h = 5;
// const y = 10;
// console.log(h, y)

// //1.4 Crea una variable 'z' y asignale el valor de 'h' + 'y'.
// const z = (h + y);
// console.log(z)





// //Iteración 2
// //1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
// const character = {name: 'Jack Sparrow', age: 10};
// character.age = 25;
// console.log(character)

// //1.2 Declara 3 variables con los nombres y valores siguientes 
// 	// firstName = 'Jon'; 
// 	// lastName = 'Snow'; 
// 	// age = 24; 
// //Muestralos por consola de esta forma: 
// 	//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

//     let firstName = 'Jon'; 
// 	const lastName = 'Snow'; 
// 	const age = 24; 
//     console.log('Soy ' + (firstName) + ' ' + (lastName), 'tengo ' + (age) + ' años y me gustan los lobos')


// //1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
// //ambos juguetes.
// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};

// let precioAmbas = toy1.price + toy2.price;
// console.log(`Precio Total`, precioAmbas)

// //1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// //y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// //basePrice más el valor de la variable globalBasePrice.
// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

// let newglobalBasePrice = 25000;
// let additonalPrice = car1.basePrice + car2.basePrice + newglobalBasePrice;

// console.log(additonalPrice)






// //Iteración #3: Operadores

// //1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
// const multiplication = 10 * 5;
// console.log(multiplication)

// //1.2 Divide 10 por 2 y muestra el resultado en un console.
// const divide = 10/2;
// console.log(divide)

// //1.3 Muestra mediante un console el resto de dividir 15 por 9.
// const divided = 15/9;
// const resto = 15%9;
// console.log('División', divided , ' Resto' , resto)

// //1.4 Usa el correcto operador de asignación que resultará en o = 15, 
// //teniendo dos variables p = 10 y j = 5.
// const p = 10;
// const j = 5;
// const o = (p + j); 
// console.log(o)

// //1.5 Usa el correcto operador de asignación que resultará en i = 50,
// //teniendo dos variables c = 10 y m = 5.
// const c = 10;
// const m = 5;
// const i = (c * m);
// console.log(i)




//Iteración #4: Arrays

// //1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// const avenger = avengers[0];
// console.log(avenger)



//1.2 Cambia el primer elemento de avengers a "IRONMAN".
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// avengers.shift(1)
// avengers.unshift("IRONMAN")
// console.log(avengers)



//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers.length);



//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// rickAndMortyCharacters.push("Morty", "Summer");
// console.log(rickAndMortyCharacters);
// const index = 4;
// console.log(rickAndMortyCharacters.at(index))



//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// rickAndMortyCharacters.pop(5);
// console.log(rickAndMortyCharacters);
// const index = 0;
// const index1 = 4;
// console.log(rickAndMortyCharacters.at(index))
// console.log(rickAndMortyCharacters.at(index1))


//1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// rickAndMortyCharacters.splice(1, 1);
// console.log(rickAndMortyCharacters);





//Iteración #5: Condicionales

// const number1 = 10;
// const number2 = 20;
// const number3 = 2;

// ejemplo
// if(number1 === 10){
//     console.log('number1 es estrictamente igual a 10')
// }

// if (number2 / number1 == 2) {
//         console.log("number2 dividido entre number1 es igual a 2");
// }  

// if (number1 !== number2) {
//     console.log("number1 es estrictamente distinto a number2");
//   }
 
// if (number3 != number1) {
//     console.log("number3 es distinto number1");
//   }

// if (number3 * 5 == number1) {
//     console.log("number3 por 5 es igual a number1");
//   }
  
// if (number3 * 5 == number1 && number1 * 2 == number2) {
//     console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
//   }
  
// if (number2 / 2 == number1 || number1 / 5 == number3) {
//     console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
//   }





//Ieración#6: Bucles

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
//  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  for (let index = 0; index < numbers.length; index++) {
//    console.log(index);
//  }


 //1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.
 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i <numbers.length; i++){
    if(i % 2 == 0) {
      console.log(i);
    }
  }


  //1.3 Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
//y cambia el mensaje en la décima vuelta a 'Dormido!'.

const sheeps = [0,1,2,3,4,5,6,7,8,9,10];

for (i = 0; i <sheeps.length; i++){
    if (i == 10){
      console.log("Dormido!")
      
    } else if (i == 0, 9) {
      console.log("Intentando dormir 🐑");
    }
  }




//FUNCIONES!!!!

//Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
      return (numberOne);
    } else {
      return (numberTwo);
    }
  }
  console.log(sum(8,4))


 // Iteración #2: Buscar la palabra más larga
 //Completa la función que tomando un array de strings como argumento devuelva el más largo, 
 //en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(avengers) {
let longestWord = ""; for (const avenger of avengers) if (avenger.length > longestWord.length) {
  longestWord = avenger;
  return longestWord;
}
   
}
console.log(findLongestWord(avengers))


