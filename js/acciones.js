// JavaScript Document
$(document).ready(function(e) {
//watchID se refier a actual

var watchID=null;
document.addEventListener("deviceready",Dispositivo_Listo,false);

//Cuando esta listo el dispositivo
function Dispositivo_Listo(){
	Comienza();
}

//Empieza la observacion de la aceleracion
function Comenzar(){
	
	//Actualiza la aceleracion cada 2 segundos
	//
	var opciones={frequecy:2000};
	
	watchID=navigator.accelerometer.watchAcceleration(Correcto, Error, Opciones);
navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
}
//Detiene la observacion de la aceleracion

function Detente(){
	if(watchId){
		navigator.accelerometer.clearWatch (watchID);
		watchID=null
	}
}
//Correcto:Toma una captura de la aceleracion
function Correcto(acceleration){
	var element=document.getElementById('acelerometro');
	
	element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
	'Aceleracion en Y:'+acceleration.y+'<br/>'+
	'Intervalo:'+acceleration.timestamp+'<br/>';
}

//eRROR:FALLA al obtener la celeracion
function Error(){
	alert('Error!');
}
//Exito al localizar
function Localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitud:' +posicion.coords.latitude+'<br/>'+
	'Longitud:'+posicion.coords.longitude+'<br/>'+
	'Precision:'+posicion.coords.accuracy+'<br/>'+
	'Intervalo:'+posicion.timestamp+'<br/>';
}
//Error en la geolocalizacion
function ErrorLocalizacion(error){
	alert('codigo:' +error.code+'/n'+
	'mensaje:'+error.message+'/n');
}
});//document ready