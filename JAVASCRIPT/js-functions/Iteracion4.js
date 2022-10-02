//ITERACION 4: Calcular el promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(number) {
    let mediaNumbers = 0;
    for (let i = 0; i < number.length; i++){
        mediaNumbers += numbers[i];
    }
    return mediaNumbers / number.length
}

console.log(average(numbers));