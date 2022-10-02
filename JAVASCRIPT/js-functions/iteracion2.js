//ITERACIÓN 2: Buscar la palabra más larga
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud, deberá devolver el primero.
//Puedes usar este array para probar tu función:

//NO UTILIZAR JAMÁS!!!!!
// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(avengers) {
//     let longestWord = ""; for (const avenger of avengers) if(avenger.length > longestWord.length) {
//         longestWord = avenger;
//         return longestWord;
//     }

// }

// console.log(findLongestWord(avengers));

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

//La variable avengers es una cosa y la function es otra.

function findLongestWord(array) {
  let longestWord = "";
  for (const personaje of array) {
    //Obtengo cada personaje
    console.log(personaje);
    //Obtengo la longitud del nombre de cada personaje
    console.log(personaje.length);
    if (personaje.length == personaje.length) {
      console.log("Dos personajes coinciden");
      console.log(personaje);
    }
  }
}

console.log(findLongestWord(avengers));
