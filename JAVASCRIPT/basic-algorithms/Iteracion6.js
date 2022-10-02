//Iteración 6: Bucles
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index++) {
  console.log(index);
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
//cuando el resto del numero dividido entre 2 sea 0.
const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < numbers1.length; i++){
    if(i % 2 == 0) {
      console.log(i);
    }
  }


//1.3 Crea un bucle para conseguir dormir contando ovejas.
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
//y cambia el mensaje en la décima vuelta a 'Dormido!'.
const sheeps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < sheeps.length; i++) {
//   if (i == 10) {
//     console.log("Dormido!");
//   } else if ((i == 0, 9)) {
//     console.log("Intentando dormir 🐑");
//   }
// }

//Opción más simplificada
for (i = 0; i < sheeps.length; i++) {
  if (i == 10) {
    console.log("Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}