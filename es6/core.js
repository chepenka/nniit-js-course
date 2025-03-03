// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле core.spec.js

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let [lastName, firstName, otchestvo] = fio.split(' ');
    return firstName + ' ' + lastName;
    
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(arr) {
    let uniqueArr = new set(arr);
    return arr.from(uniqueArr);


}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(n) {
    let [highest,lowest] = n.reduce(function([highest,lowest], cur){
        if (  if (cur >= highest)
        {
            highest = cur;
        }
        if (cur <= lowest)
        {
            lowest = cur;
        }
        return [highest, lowest];
    }, [0, 999999]);
     return highest / lowest;
                                  

}

// Задачка с собеседований fooBar
// Напишите функцию, которая принимает n
// возвращает массив чисел от 1 до n, где вместо чисел, которые делятся на 3 — "Foo",
// чисел, которые делятся на 5 — "Bar", а на 15 — "FooBar"
// * покройте тестами
function fooBar(n) {
let arr = [];
    for ( let i = 1; i<n; i++)
    {
        if (i % 15 === 0)
        { arr.push('FooBar') }
        else if (i % 5 ===0)
        { arr.push('Bar') }
        else if ( i % 3===0)
        { arr.push('Foo') }
        else 
        { arr.push(i) }
    }
    return arr;

}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
       constructor()
       {
        this.vocabulary = new Map();
       }
            add(word, translation){
                if (typeof(word) !== 'string' || typeof(translation) !== 'string') 
        {
            return null;
        }
        this.vocabulary.set(word, translation);
    }
    getTranslation(word) {
        if (typeof word !== 'string') return null;
        return this.vocabulary.get(word);
    }

}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
