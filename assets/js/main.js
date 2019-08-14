
var counter = (function () {
    var count = 0;
     return function (num) {
         count = num !== undefined ? num : count; 
        return count++;
    }
}());

console.log(counter()); 
console.log(counter()); 
console.log(counter(100)); 
console.log(counter()); 
console.log(counter(500)); 
console.log(counter()); 
console.log(counter(0)); 
console.log(counter()); 

 let counting = (function () {
     let n = 0;
     return {
        value(num) {
          if (num !== undefined) n = num;
          return n;
        },
        increment (num) {
         return n++;
     },
        decrement  (num) {
         return n--;
     }

 };
}());
//5432 белый фольц
console.log('Ex 2')
console.log(counting.value()); // 0

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value()); // 3

counting.decrement();

counting.decrement();

console.log(counting.value()); // 1

console.log(counting.value(100)); // 100

counting.decrement();

console.log(counting.value()); // 99

console.log(counting.value(200)); // 200

counting.increment();

console.log(counting.value()); // 201


 let myPow = function (a,b, callback) {
    let pow = function (x,y) {
    if (y !== 1) {
       return x *= pow(x,y-1); 
    }
    else return x;
 };
 return callback(a,b,pow(a,b));
};

//  let myPrint = function (a,b,myPow) {
//     console.log(a.toString(10) + '^' + b.toString(10) + '=' + myPow);
//  }
 let myPrint = (a, b, res) => `${a}^${b}=${res}`;
 
console.log(myPow(3, 4, myPrint)); // 3^4=81

console.log(myPow(2, 3, myPrint)); // 2^3=8

/*
 * #4
 *
 * Создайте несколько однотипных объектов для описания автомобиля. Соблюдайте следующие правила, используйте следующие поля:
 * имя объекта car – обязательно и необходимое для тестирования, дальнейшее именование объектов – на ваше усмотрение
 * car.engine – объем двигателя, числовое поле
 * car.model – модель авто, строка
 * car.name – бренд авто, строка
 * car.year – год выпуска, число
 * car.used – строка для описания состояния авто, допускаются значения 'used' и 'new'
*/
/*
 * #5
 * Для созданных ранее объектов определите метод info(), используя ключевое слово this.
 * данный метод должен формировать и возвращать строку с полной информацией об автомобиле, например:
 * Chevrolet Lacetti, 2000cc, year 2010, used
 * Infinite FX50 AWD, 5000cc, year 2019, new
 * пробелы, запятые, символы cc и текст – имеют значение и проверяются при тестировании кода
 * */

/*
 * #6
 * Для созданных ранее объектов измените свойство used, используя аксессоры (геттер и сеттер).
 * - используйте текущий год либо непосредственно в своем коде, либо с помощью глобальной переменной, например, yearNow
 * - если год выпуска автомобиля отличается от текущего года, геттер used должен выводить текст 'used'
 * - если год выпуска автомобиля совпадает с текущим годом, геттер used должен выводить текст 'new'
 * - если сеттеру used присвоено значение 'new', при этом года выпуска автомобиля отличается от текущего года,
 * - необходимо изменить год выпуска автомобиля, установив в качестве значения текущий год
 * - если сеттеру used присвоено значение 'used', ничего делать не нужно
 */



let myYear = new Date().getFullYear;

let car = {
   engine : 2200,
   model : 'Megane',
   name : 'Renault',
   year : 2006,

       get used () {
        return this.year !== myYear ? 'used' : 'new';
        },
       set used (value) {
        if (value === 'new' && this.year < myYear) {
            this.year = myYear;
        }
    }
   ,
   info : function () {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
    }
 }

let car2 = {
    engine : 3500,
    model : 'TT',
    name : 'Audi',
    year : 2019,
   
        get used () {
         return this.year !== myYear ? 'used' : 'new';
         },
        set used (value) {
         if (value === 'new' && this.year < myYear) {
             this.year = myYear;
         }
     }
    ,
    info : function () {
     return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
     }
 };
console.log(myYear);

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

car.used = 'new';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

car.used = 'used';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

car.used = 'used';

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются




let list = [12, 23, 100, 34, 56, 9, 233];

function myMax(arr) {
    return Math.max.apply(Math,arr);
}
console.log(myMax(list)); // 233


function myMul(a, b) {
    return a * b;
  }
 myMul(4,5);

let myDouble = myMul.bind(null, 2);

console.log(myDouble(3)); // = myMul(2, 3) = 6

console.log(myDouble(4)); // = myMul(2, 4) = 8

console.log(myDouble(5)); // = myMul(2, 5) = 10

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

let myTriple = myMul.bind(null,3);
console.log(myTriple(3)); // = myMul(3, 3) = 9

console.log(myTriple(4)); // = myMul(3, 4) = 12

console.log(myTriple(5)); // = myMul(3, 5) = 15
 

// В чем смысл?

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];


let myUniq = function (arr) {
    let set = new Set();
          arr.forEach((val) => {
          set.add(val);
        });    
        return set;
} 

console.log(myUniq(notUniqNums));

console.log(myUniq(notUniqStrings));