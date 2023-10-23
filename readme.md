Эта страница для сравнения двух версий multi-line текста
======
_______
*На странице есть два текстовых поля и два блока, в которых отображается результат сравнения строк этих текстовых полей.*

*Сравнение происходит при нажатии на кнопку* ***Проверить***.

*Текстовые поля работают как для ручного ввода и вставки из буфера обмена, так и для ввода текста из файла (при нажатии на кнопки, расположенные под текстовыми полями).*
___
*Для разбиения целого текста на строки используется метод split()*
--------
```
var txtAreaValue = document.querySelector('#TextAreaLeft').value; //инициализация переменной, которая хранит значение текстового поля
let splitValue = txtAreaValue.split('\n'); //разбиение значения на строки с помощью метода split()
```
___
*Цикл сравнения двух текстовых полей*
-----
*Для обоих блоков код идентичный*
```
let divLeft = document.getElementById('DivLeft');//инициализация блока, в котором отображается результат проверки
for(let i = 0; i<lineArrayLeft.length; i++){
        const spanElement = document.createElement("span"); //инициализация метода createElement()
        divLeft.appendChild(spanElement); //создание дочернего span внутри divLeft
        //если в левом текстовом поле есть проверяемая строка или строка пустая, то не подсвечиваем строку
        if((splitRight.indexOf(splitLeft[i]) != -1) || (splitLeft[i] == '')){
            spanElement.innerText = lineArrayRight[i]; //передаем span текстовое значение строки
            spanElement.className = 'default'; //задаем для span параметры стиля
        }
        //если проверяемой строки нет, то подсвечиваем строку
        else{
            spanElement.innerText = lineArrayRight[i]; //передаем span текстовое значение строки
            spanElement.className = 'green'; //задаем для span параметры стиля
        }
    }
```
*Считывание из файла*
----
*Для записи содержимого текстового файла в textarea используются функция:*
```
//обработчик изменения элемента выбора файла
    document.getElementById('uploadLeft').addEventListener('change', function(e) { 
        let reader = new FileReader(); //инициализация FileReader
        //запись содержимого файла в textarea
        reader.onload = function(e){
            document.getElementById('TextAreaLeft').value = e.target.result;
        };
        reader.readAsText(document.getElementById('uploadLeft').files[0], "UTF-8");
    });
```