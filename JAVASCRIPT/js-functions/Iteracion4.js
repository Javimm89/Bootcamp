//ITERACION 4: Calcular el promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(number) {
  let media = 0;  
  let promNumbers = 0;
  for(let i = 0; i < number.length; i++) {
    promNumbers += number[i]
    media = promNumbers / number.length;

  }
  return console.log(media)
}
average(numbers)