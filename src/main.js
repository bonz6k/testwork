//функция для сравнения двух текстовых полей
function test() {
    var txtAreaLeftValue = document.querySelector('#TextAreaLeft').value;
    var txtAreaRightValue = document.querySelector('#TextAreaRight').value;
    
    let lineArrayLeft = new Array();
    let lineArrayRight = new Array();

    let splitLeft = txtAreaLeftValue.split('\n');
    let splitRight = txtAreaRightValue.split('\n');

    for (let i = 0; i < splitLeft.length; i++){
        lineArrayLeft[i] = i+1+'.  ' + splitLeft[i];
    }
    for (let i = 0; i < splitRight.length; i++){
        lineArrayRight[i] = i+1+'.  ' + splitRight[i];
    }

    const SpanElement = document.createElement("span")
    let divLeft = document.getElementById('DivLeft');
    let divRight = document.getElementById('DivRight');

    for(let i = 0; i<lineArrayLeft.length; i++){
        const spanElement = document.createElement("span");
        divLeft.appendChild(spanElement);
        if((splitRight.indexOf(splitLeft[i]) != -1) || (splitLeft[i] == '')){
            spanElement.innerText = lineArrayLeft[i];
            spanElement.className = 'default';
        }
        else{
            spanElement.innerText = lineArrayLeft[i];
            spanElement.className = 'green';
        }
    }

    for(let i = 0; i<lineArrayRight.length; i++){
        const spanElement = document.createElement("span");
        divRight.appendChild(spanElement);
        if((splitLeft.indexOf(splitRight[i]) != -1) || (splitRight[i] == '')){
            spanElement.innerText = lineArrayRight[i];
            spanElement.className = 'default';
        }
        else{
            spanElement.innerText = lineArrayRight[i];
            spanElement.className = 'red';
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

