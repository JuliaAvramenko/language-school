modulo - оператор отстатка ( остаток деления левого на правое число)
console.log(5 % 1); // 0
console.log(3 % 2); // 1
console.log(11 % 4); // 3 

months.length; // 12

[].length; // 0 - пустой массив не содержит элементов, его длина 0
[1, 2, 3].length; // 3 — в массиве три элемента, его длина 3


for (let i = 0; i <= 10; i = i + 1) {
  console.log(i);
}
let i = 0 — создание переменной-счётчика;
i <= 10 — условие цикла: пока i меньше или равно 10, счётчик будет выполняться.
i = i + 1 — инкремент, он определяет, на сколько увеличивается переменная i после каждого повторения.
Цикл for —  самый популярный из всех циклов. Его вам предстоит использовать чаще всего.

Создав объект, мы наполняем его свойствами и методами. Затем пользуемся ими — вызываем методы и получаем доступ к свойствам. Чтобы получить доступ к свойству, его имя записывают через точку после имени объекта:
myObject.stringKey; 
Другой способ обратиться к свойству — указать имя свойства в кавычках и в квадратных скобках:
myObject['numberKey']; 


Примитивных типов семь:
строки (тип “string”);
числа (тип “number”);
большие числа (тип “bigint”);
булевы значения true и false (тип “boolean”);
undefined (тип “undefined”);
null (тип “null”);
символы (тип “symbol”).


Тип данных определяют оператором typeof. Оператор typeof возвращает строку:
typeof 10; // "number"
typeof 'Hello World!'; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined" 

typeof NaN; // "number". Да, "Not a Number" имеет тип данных "number".
typeof null; // "object". Это даже было признано официальным багом JavaScript. Его решили не исправлять, чтобы не сломать уже написанный код.
typeof function () {} // "function". Хоть такого типа и нет. 


Управление содержимым: свойства .innerHTML и .textContent


Универсальный способ отслеживания и реакции на событие — метод addEventListener:
element.addEventListener(eventName, handler); 
element — элемент, которому добавляем слушатель.
eventName — событие, на которое нужно отреагировать. Передаётся строкой: 'click', 'scroll', 'mouseover'.
handler — функция-обработчик события. Она будет вызвана, когда событие сработает (например, произойдёт клик).



evt.preventDefault() — это отменит стандартное событие

Гибкая вставка: методы insertAdjacentHTML и insertAdjacentText


Блок с классом “elephant” до и после манипуляций с innerHTML — два совершенно разных блока. Новый блок забыл все свойства, которые были установлены через JavaScript.
Чтобы не терять данные в элементах, существуют методы insertAdjacentHTML и insertAdjacentText. Они добавляют разметку и текст в документ и не затрагивают существующие элементы.
Значение 'beforeend' указывает, что мы вставили HTML-код перед закрывающим тегом элемента. Возможны также значения:
'beforebegin' — вставка до открывающего тега;
'afterbegin' — вставка после открывающего тега;
'afterend' — вставка после закрывающего тега.
Относительно разметки блока это выглядит так:
<!-- beforebegin -->
<div>
    <!-- afterbegin -->
    
    <!-- существующая разметка-->
    
    <!-- beforeend -->
</div>
<!-- afterend --> 

Одно из самых популярных свойств — value, оно есть у всех элементов input. Это свойство содержит значение поля ввода.

Состояние чекбокса и радиокнопки. Свойство checked
Это свойство есть только у чекбоксов и радиокнопок. Оно содержит true, если чекбокс отмечен, и false — если нет.

console.dir(document.body); 

Поиск по строке. Метод indexOf
Метод indexOf ищет символ в строке и возвращает его индекс: 
/* Метод indexOf */

'Яндекс.Практикум'.indexOf('Я'); // 0

/* Если таких символов в строке несколько,
метод вернёт индекс первого из них: */

'Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'); // true 


Методы startsWith и endsWith — более узконаправленные альтернативы indexOf.

Управление регистром. Методы toLowerCase и toUpperCase

Превращение строки в массив. Метод split
'Пришёл. Увидел. Победил.'.split(' '); // ["Пришёл.", "Увидел.", "Победил."]
'Пришёл. Увидел. Победил.'.split('. '); // ["Пришёл", "Увидел", "Победил."] 

Извлечение части строки. Метод slice
Метод slice возвращает часть строки. На вход он принимает два аргумента — с какого индекса начинать отсчёт и на каком закончить:
'Не прислоняться'.slice(6, 10); // "слон" 


Разберёмся подробнее, как разные значения приводятся к логическому типу. В JavaScript значения условно делятся на truthy (англ. «правдивые») и falsy (англ. «ложные»). Правдивые значения при приведении типа становятся Истиной, а ложные — Ложью. Правила такие:
все непустые строки — truthy,
пустая строка ('') — falsy,
все ненулевые числа — truthy,
ноль — falsy,
NaN, null и undefined — falsy,
объекты, массивы и функции — truthy.
Boolean('Непустая строка'); // true
Boolean(''); // false
Boolean(1); // true
Boolean(0); // false
Boolean(NaN); // false
Boolean(null); //false
Boolean(undefined); // false
Boolean({}); // true
Boolean([]); //true 

Значение по умолчанию
Часто оператором ИЛИ присваивают переменной значение по умолчанию:
function howDoYouDo(answer) {
    const result = answer || 'да ничего';
    return result;
}

howDoYouDo('всё прекрасно'); // "всё прекрасно"
howDoYouDo(); // "да ничего" 




# scroll

JS based https://www.cyberforum.ru/javascript-beginners/thread2975946.html
CSS based https://qna.habr.com/q/196039