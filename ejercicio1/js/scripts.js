// JavaScript Document
function mostrarNumeros(){
	for (var n=0; n <= 10; n++){
		document.getElementById("tablaNumeros").innerHTML  += "<tr><td>"+n+"</td></tr>";
	}
}