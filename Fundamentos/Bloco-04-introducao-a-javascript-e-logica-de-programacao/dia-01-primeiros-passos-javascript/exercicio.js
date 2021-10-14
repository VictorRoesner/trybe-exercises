//1.

/*const a = 15
const b = 10

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
*/

//2.
/*
const a = 3
const b = 9

if (a > b) {
  console.log("a maior que b")
}
else {
console.log("b maior que a")
}
*/

// 3.

/*
const a = 3
const b = 6
const c = 10

if (a > b && a > c) {
  console.log("a é o maior")
}
else if (b > a && b > c) {
  console.log("b é o maior")
}
else if (c > a && c > b) {
  console.log("c é o maior")
}
*/

// 4.

/*
const a = -10;

if (a > 0) {
  console.log("positive")
}
else if (a < 0) {
  console.log("negative")
}
else {
  console.log("zero")
}
*/

// 5.

/*
const a = 115
const b = 45
const c = 20

if (a + b + c === 180) {
  console.log(true)
}
else if (a, b, c < 0) {
  console.log("ERROR")
}
else {
  console.log(false)
}
*/

// 6.

const chessPiece = 'peão';
/*
switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
*/

// 7.
/*
const grade = 60;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
*/

// 8.
/*
const a = 4
const b = 7
const c = 5

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  console.log(true)
}
else {
  console.log(false)
}
*/

// 9.
/*
const a = 15;
const b = 8;
const c = 90;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  console.log(true)
}
  else {
    console.log(false)
  }
  */

// 10.
/*
const custo = 30
const venda = 50

//const lucro = venda - custoTotal;
const custoTotal = custo * 1.2;

if (custo >= 0 && venda >=0) {
  const lucrototal = (venda - custoTotal) * 1000;
  console.log(lucrototal);
}
else {
  console.log("ERRO, valores não podem ser negativos")
}


console.log(custoTotal);
*/
// 11.

let aliquotINSS;
let aliquotIR;

let grossSalary = 9000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98){
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log('Salário Líquido: ' + (baseSalary - aliquotIR));






