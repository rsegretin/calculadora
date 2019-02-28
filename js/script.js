
var borrarVisor = false;

var valorAnterior = 0;

var operacion = "";

var visor = document.getElementById("visor");

function clickNumero(boton) {

	if (borrarVisor) {
		visor.value = "";
		borrarVisor = false;
	}

	var numero = (boton.id).slice(3);

	visor.value += numero;

}


function clickOperador(boton) {

	operacion += visor.value + boton.innerText;

	console.log(operacion);

	borrarVisor = true;

}


function clickCalcular() {

	operacion += visor.value;

	visor.value = eval(operacion);

	borrarVisor = true;
	operacion = "";

}
