// Variáveis

const myName = "Victor";
const birthCity = "Curitiba";
let birthYear = 1994;
birthYear = 2030;

console.log(myName);
console.log(birthYear);
console.log(birthCity);

// Tipos Primitivos, tipagem dinãmica e operações aritiméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

typeof patientId

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientEMail)
console.log(typeof patientEmail)
console.log(typeof patientAge)

const base = 5;
let height = 8;

const area = base * height;
console.log(area);

const perimeter = base*2 + height*2
console.log(perimeter)

// Operadores lógicos if/else

const nota = 85;

if (nota >= 80 ){
  console.log("Parabens! Vocẽ foi aprovado")
}
else if (nota < 80 && nota >= 60) {
  console.log("Vocẽ está na nossa lista de esper")
}
else {
  console.log("Vocẽ foi reprovado")
}


console.log(nota)

// Operadores lógicos

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


// Operador AND - &&

const currentHour = 13;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
}
else if ( currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado"
}

console.log(message)

// Operador OR - ||

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekDay = "terça-feira";
 if (weekDay === "quarta-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
 } else {
   console.log("FINALMENTE, descando merecido UwU");
 }

 //Operador NOT - !


 //Switch -- Case

 let statusEstudante = "reprovada"

 switch (statusEstudante) {
   case 'aprovada':
     console.log("Aprovado!");
      break;

    case 'lista':
     console.log("Lista de Espera");
      break;

      case 'reprovada':
     console.log("Vocẽ foi reprovado");
      break;

      default:
        console.log("não se aplica");
 }


















