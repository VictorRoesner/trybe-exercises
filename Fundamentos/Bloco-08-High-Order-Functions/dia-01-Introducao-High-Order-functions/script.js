// const acordar = () => 'Acordando!!';
// const cafe = () => 'Bora tomar café!!';
// const dormir = () => 'Partiu dormir!!';


// const doinThings = (callback) => console.log(callback());

// doinThings(dormir);


// 1. 

// const newEmployees = (employeeGen) => {
//   const employees = {
//     id1: employeeGen('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: employeeGen('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: employeeGen('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const employeeGen = (person) => {
//   const email = person.toLowerCase().replace(' ', '_');
//   return {person, email : `${email}@trybe.com`};
// }
// console.log(newEmployees(employeeGen));

// 2.
// const check = (number, numberPrize) => number === numberPrize;

// const sorteio = (number, callback) => {
//   let numberPrize = Math.floor(Math.random() * 6);
//   return callback(number, numberPrize) ? 'Parabéns você ganhou' : 'Tente novamente'
// }

// console.log(sorteio(4, check))

