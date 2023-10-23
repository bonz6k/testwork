//функция для сравнения двух текстовых полей
function test() {
    //инициализация переменных для хранения значений текстовых полей
    var txtAreaLeftValue = document.querySelector('#TextAreaLeft').value;
    var txtAreaRightValue = document.querySelector('#TextAreaRight').value;
    
    //инициализация массивов для хранения строк
    let lineArrayLeft = new Array();
    let lineArrayRight = new Array();

    //разбиение целого текстового значения на строки и запись строк в массив
    let splitLeft = txtAreaLeftValue.split('\n');
    let splitRight = txtAreaRightValue.split('\n');

    //нумерация строк
    for (let i = 0; i < splitLeft.length; i++){
        lineArrayLeft[i] = i+1+'.  ' + splitLeft[i];
    }
    for (let i = 0; i < splitRight.length; i++){
        lineArrayRight[i] = i+1+'.  ' + splitRight[i];
    }

    //инициализация блоков, в которых отображается результат проверки
    let divLeft = document.getElementById('DivLeft');
    let divRight = document.getElementById('DivRight');

    //цикл проверки для левого блока
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

    //цикл проверки для правого блока
    for(let i = 0; i<lineArrayRight.length; i++){
        const spanElement = document.createElement("span"); //инициализация метода createElement()
        divRight.appendChild(spanElement); //создание дочернего span внутри divRight
        //если в левом текстовом поле есть проверяемая строка или строка пустая, то не подсвечиваем строку
        if((splitLeft.indexOf(splitRight[i]) != -1) || (splitRight[i] == '')){
            spanElement.innerText = lineArrayRight[i]; //передаем span текстовое значение строки
            spanElement.className = 'default'; //задаем для span параметры стиля
        }
        //если проверяемой строки нет, то подсвечиваем строку
        else{
            spanElement.innerText = lineArrayRight[i]; //передаем span текстовое значение строки
            spanElement.className = 'red'; //задаем для span параметры стиля
        }
    }
}

function reader(){
	var reader = new FileReader();
	reader.onload = function(e){
		document.querySelector("#TextAreaLeft").val(e.target.result);
	};
	reader.readAsText(document.querySelector("#uploadLeft")[0].files[0], "UTF-8");
};

