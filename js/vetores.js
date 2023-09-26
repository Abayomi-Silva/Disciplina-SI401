function montaOrdena(formID){
	var myForm = document.forms[formID];
	
	try{
		var meuVetor = new Array(parseInt(myForm["a1"].value), parseInt(myForm["a2"].value), parseInt(myForm["a3"].value), parseInt(myForm["a4"].value), parseInt(myForm["a5"].value), parseInt(myForm["a6"].value), myForm["a7"].value, parseInt(myForm["a8"].value), parseInt(myForm["a9"].value), parseInt(myForm["a10"].value));
		bubbleSort(meuVetor);
		imprimeDados(meuVetor);
		document.getElementById("data").innerHTML = "Vetor ordenado em: " + new Date();
	}
	catch(err){
		alert("Erro: " + err);
	}
}

function bubbleSort(vetor){
	var temp;
	for(var i=vetor.length-1;i>=0;i--){
		for(var j=0;j<i;j++){
			if (vetor[j]>vetor[i]){
				temp = vetor[j];
				vetor[j] = vetor[i];
				vetor[i] = temp;
			}
		}
	}
}
function imprimeDados(vetor){
	var saida = "Valores:";
	for(var i=0; i < vetor.length; i++){
		saida += " " + vetor[i];
	}
	document.getElementById("titulo").innerHTML = "Vetor Ordenado:";
	document.getElementById("vetor").innerHTML = saida;
}	
