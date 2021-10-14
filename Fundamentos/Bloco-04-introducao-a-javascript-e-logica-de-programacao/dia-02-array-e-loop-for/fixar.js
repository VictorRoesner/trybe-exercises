// 1.

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}

*/

// 2.

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);
*/

//3.
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
let media = result / numbers.length

console.log(media);
*/
// 4.

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
let media = result / numbers.length

if (media > 20) {
  console.log("valor maior que 20")
} else{
  console.log("valor menor ou igual a 20")
};
console.log(media);
*/

// 5.
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for ( let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

console.log(maior);
*/

 // 6.
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if ( numbers[index] % 2 !== 0) {
    impar += 1;
  }
}
if (impar === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(impar);
}
 //6. bonus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
for (let index = 0; index < numbers.length; index += 1) {
  if ( numbers[index] % 2 !== 0) {
    impar.push(numbers[index]);
  }
}
  console.log(impar);


   // 7.
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let menor = numbers[0];

  for(let index = 0; index < numbers.length; index += 1) {
    if( menor > numbers[index]) {
      menor = numbers[index]
    }
  }
  console.log(menor);
  */

  // 8.

  let result = [];

  for( let index = 0; index <= 25; index += 1) {
    result.push(index);
  }
console.log(result);


// 9.

let division = [];
for (index = 0; index < result.length; index += 1) {
  division.push(result[index] / 2);
}

console.log(division);
