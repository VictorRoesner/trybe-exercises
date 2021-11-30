// var i;
// var fib = [0, 1]; // Initialize array!


// for (i = fib.length; i <= ; i++) {
//   fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }



function even_fibonacci_numbers(roof) {
  let fibo = [0, 1];
  let sum = 0;
  for (let i= 2; i <= roof; i += 1) {
      fibo[i] = fibo[i - 2] +  fibo[i - 1];
      if(fibo[i] % 2 === 0) {
          sum = sum + fibo[i];
      }
  }
  console.log(sum);
}


even_fibonacci_numbers(10)