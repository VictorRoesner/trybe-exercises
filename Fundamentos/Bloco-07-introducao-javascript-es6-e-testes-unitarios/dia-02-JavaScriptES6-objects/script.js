// const custumer = {

// }
// const addObj = (object,key,keyValue) => {
//   let newKey = key
//   const a = keyValue
//   object[newKey] = a;
//   return custumer;
// }

// console.log(addObj(custumer,'lastName', 'Roesner'));
// console.log(addObj(custumer,'Age', '27'));

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const costumerName = order.name;
//   const coustumerNumber = order.phoneNumber;
//   const costumerStreet = order.address.street
//   const number = order.address.number;
//   const apartment = order.address.apartment;

//   console.log(`Olá ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${coustumerNumber}, ${costumerStreet}, ${number}, ${apartment}.`);

// }


// customerInfo(order);


// const orderModifier = (order) => {
//   const newBuyer = order.name = 'Victor Roesner';
//   const pizzas = Object.keys(order.order.pizza);
//   const drinks = order.order.drinks.coke.type;
//   const newTotal = order.payment.total = '50';

//   console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
// }

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1.
// const addnewKey = (object, key, value) => {
//   object[key] = value;
// };

// addnewKey(lesson2,'turno','noite');
// console.log(lesson2)

// // 2.

// const listKey = (object) => {
//   const list = Object.keys(object);
//   return list;
// }


// console.log(listKey(lesson1));

// // 3.

// const sizeObj = (obj) =>  Object.keys(obj).length;
// console.log(sizeObj(lesson1));

// // 4.

// const listValue = (object) => {
//   const valuess = Object.values(object);
//   return valuess;
// }
// console.log(listValue(lesson1));

// 5.

// const allLessons = Object.assign({},{lesson1,lesson2,lesson3});

// console.log(allLessons);

// 6. 


// const NumberStd = () => {
//   const allStudents = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
//   console.log(allStudents);
// }
// NumberStd();

// const NumberStd = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (index in array) {
//     total = total + obj[array[index]].numeroEstudantes
//   }
//   console.log(total);
// }

// NumberStd(allLessons);

// 7.

const getValueByNumber = (obj, n) => {
  const keys = Object.keys(obj);
  return keys[n];
}

console.log(getValueByNumber(lesson1, 0));