function Function1(){
	var d = document.getElementById("fun1");
	var text;
	text=d.elements[0].value;
	text=text + d.elements[1].value;
	console.log(text.toUpperCase());
}

function Function2(clase, text){
	var change = document.getElementsByClassName(clase);
	var i;
	for(i=0; i<change.length; i++){
		change[i].innerHTML=text;
	}
}

function Function3(n1, n2){
	var res = n1*n2;
	document.getElementById("n").innerHTML="Solution is: "+res;
}

function Function4(text, id){
	var header = text.split(" ");
	var ch = document.getElementById(id).getElementsByTagName("th");

	for(i=0; i<ch.length;i++){
		ch[i].innerHTML=header[i];
	}
}

function Function5(){
	var prom = prompt("Enter DSP:","");
	document.getElementById("b5").innerHTML=prom;
	console.log(name);
}

var howmanytoadd = 2;
var rows;

function calc() {
		var tot = 0;
		for (var i = 0; i < rows.length; i++) {
				var linetot = 0;
				rows[i].getElementsByTagName('input')[howmanytoadd].value = linetot;
				tot += linetot;
		}
		document.getElementById('total').value = tot
}
onload = function () {
		rows = document.getElementById('tab').getElementById('qty1');
		for (var i = 0; i < rows.length; i++) {
				rows.getElementsByTagName('input')[i].onkeyup = calc;
		}
}
