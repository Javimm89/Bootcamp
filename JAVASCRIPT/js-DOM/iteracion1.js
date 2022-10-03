
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .**showme**
const  buttonShowme  =  document.querySelector ( ".showme" ) ;
console.log(buttonShowme);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const tittle = document.querySelector ( "#pillado" ) ;
console.log(tittle);
// 1.3 Usa querySelector para mostrar por consola todos los p
const allQueryDivs = document.querySelectorAll("p");
console.log(allQueryDivs)
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const elementPoke = document.querySelectorAll (".pokemon") ;
console.log(elementPoke);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
const atributoTestMe = document.querySelectorAll ("span") ;
console.log(atributoTestMe) ;
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const atributoPerson = atributoTestMe[2] ;
console.log(atributoPerson) ;


