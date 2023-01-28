function convertCurrency(){
	var euros = document.getElementById("euros").value;
	
	var rate = 1.09;
	unt
	var dollars = euros * rate;
	
	document.getElementById("dollars").value = dollars;
}

function convertTemperature(){
	var celsius = document.getElementById("celsius").value;
	
	var rate = 1.8;
	
	var fahrenheit = celsius * rate + 32;
	
	document.getElementById("fahrenheit").value = fahrenheit;
}

function changeBackgroundColor(){
	var textbox = document.getElementById("textbox");
	
	var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	
	textbox.style.backgroundColor = randomColor;
}

function submitForm(){
	var name = document.getElementById("name").value;
	var size = document.getElementById("size").value;
	var comment = document.getElementById("comment").value;
	
	var outputString = "Nombre cliente: " + name + "<br>";
	outputString += "tamaño: " + size + "<br>";
	outputString += "Comentario: " + comment;
	
	document.getElementById("form-output").innerHTML = outputString;
}