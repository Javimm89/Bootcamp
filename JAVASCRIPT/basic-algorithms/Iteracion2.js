//ITERACION2:VARIABLES AVANZADAS

//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;
console.log(character);

//1.2 Declara 3 variables con los nombres y valores siguientes
//firstName = "Jon";
//lastName = "Snow";
//age = 24;
//Muestralos por consola de esta forma:
//'Soy Jon Snow, tengo 24 años y me gustan los lobos.'

let firstName = "Jon";
const lastName = "Snow";
const age = 24;
console.log('Soy ' + (firstName) + ' ' + (lastName), 'tengo ' + (age) + ' años y me gustan los lobos');

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//ambos juguetes.
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

let precioAmbas = toy1.price + toy2.price;
console.log(`Precio Total`, precioAmbas);

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
//basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car3 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car4 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
//Cambiar valor de la variable globalBasePrice a 250000.
//Para cambiar el valor de una variable, basta con llamar la variable y asignarle un nuevo valor.
globalBasePrice = 250000;
console.log(globalBasePrice)
//actualiza la propiedad finalPrice de todos los coches.
//el nuevo precio tiene que ser basePrice más globalPrice.
car3.finalPrice = car3.basePrice + globalBasePrice
console.log(car3.finalPrice)
car4.finalPrice = car4.basePrice + globalBasePrice
console.log(car4.finalPrice)
