//Iteración 4

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger = avengers[0];
console.log(avenger);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers.shift(1);
avengers.unshift("IRONMAN");
console.log(avengers)

//1.3 Cambia el numero de elementos en el array usando la propiedad correcta de Array.
//NO ME LLEGA A SALIR DEL TODO BIEN Y PREFIERO DEJARLO :( (AÑADIDO POSTERIORMENTE)

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers2.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Summer", "Morty");
console.log(rickAndMortyCharacters)
const index1 = 4;
console.log(rickAndMortyCharacters.at(index1));



