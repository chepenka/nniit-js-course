//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    for( let i = 1; i < 10; i++)
        return i*2;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var sum = 0;
    for( let i = 0; i < n; i++)
        sum += i;
    return sum;
 
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if( n == 1) return 1;
    return n + recSumTo(n-1);
    
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if( n == 1) return 1;
    return n*factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while( n != 1 || n % 2 != 0)
        n /= 2;
    if( n == 1) return true;
    return false;
    
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let number1 = 0;
    let number2 = 1;
    for( let i = 0; i<n; i++){
        let CurrentNumber = number1 + number2;
        number1 = number2;
        number2 = CurrentNumber;
    }
    return number1;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
