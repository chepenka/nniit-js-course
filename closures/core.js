// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function trysum(b){
  return a +b;
  }
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let sum = 0;
  let kolvo = 0;
  return function srednee(value){
   sum += value;
   kolvo++
   return sum/kolvo;
  }
  
}

module.exports = {
  sum,
  average
};
