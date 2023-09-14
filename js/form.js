function form(){
    var myForm = document.forms["myForm"];

    document.getElementById("campos").innerHTML = "Dados Fornecidos:"

    document.getElementById("nome").innerHTML = "Nome: " + myForm["fname"].value;

    var radios = myForm["sex"];
    if(radios[0].checked){
        document.getElementById("sexo").innerHTML = "Sexo: Masculino"
    }else{
        if(radios[1].checked){
        document.getElementById("sexo").innerHTML = "Sexo: Feminino"
    }else{
        document.getElementById("sexo").innerHTML = "Sexo: Não definido"
    }
    }

    var selection = myForm["estado"];
    document.getElementById("estd").innerHTML = "Estado Civil: " + selection[selection.selectedIndex].value;

    
    var financiamentos = myForm["bens"];
    var bens = "Bens Financiados: ";
    for(var i=0; i<financiamentos.lenght; i++){
        if(financiamentos[i].checked){
            bens+= financiamentos[i].value + " ";
        }
    }
    document.getElementById("bens").innerHTML = bens;
    return false;

}

