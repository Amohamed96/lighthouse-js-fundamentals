const numbers = [];
const range = function(start, end, step){

  for (let x = start; x <= end; x += step){
   
    numbers.push(x);
  }
  return numbers;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));