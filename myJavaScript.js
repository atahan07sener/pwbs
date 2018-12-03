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

function Function6(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
		for (var step = 0; step < 5; step++) {
		  console.log('Walking east one step');
		}
    document.getElementById('total').value = tot;
}
function Function7(){
	var prom = prompt("Enter DSP:","");
	document.getElementById("b5").innerHTML=prom;
	var text = "";
	var i;
	for (i = 0; i < prom; i++) {
	    text += "The number is " + i + "<br>";
	}
	document.getElementById("demo").innerHTML = text;

}


var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
		document.getElementById("Text").innerHTML = para.textContent;SSSS
}
