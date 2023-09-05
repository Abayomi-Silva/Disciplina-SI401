function displayName1(){
    var imagem1 = document.getElementById("lua")
    if (imagem1.src.match("./images/lua.jpg")){
        document.getElementById("moon").innerHTML="Lua"
    }
    else{
        document.getElementById("moon").innerHTML="Sol"
    }   
}
function displayName2(){
    var imagem2 = document.getElementById("sol")
    if (imagem2.src.match("./images/sol.jpg")){
        document.getElementById("sun").innerHTML="Sol"
    }
    else{
        document.getElementById("sun").innerHTML="Lua"
    }
}
function trocarImagem1() {
    var imagem = document.getElementById("lua");
    // Verifica qual imagem está sendo exibida
    if (imagem.src.match("images/lua.jpg")) {
    // Se for a primeira imagem, troque para a segunda imagem
    imagem.src = "./images/sol.jpg";
    } 
    else {
    // Se for a segunda imagem, troque de volta para a primeira imagem
    imagem.src = "./images/lua.jpg";
    }
}
function trocarImagem2() {
    var imagem = document.getElementById("sol");
    // Verifica qual imagem está sendo exibida
    if (imagem.src.match("images/sol.jpg")) {
    // Se for a primeira imagem, troque para a segunda imagem
        imagem.src = "./images/lua.jpg";
    } 
    else {
    // Se for a segunda imagem, troque de volta para a primeira imagem
        imagem.src = "./images/sol.jpg";
    }
}