function swap(id) 
{
    if (document.getElementById(id).getAttribute("src") == "images/sol.jpg") {
        document.getElementById(id).setAttribute("src","images/lua.jpg");
    } 
    else {
        document.getElementById(id).setAttribute("src","images/sol.jpg");
    }
}

function show(id){
    if (document.getElementById(id).getAttribute("src") == "images/sol.jpg") {
        document.getElementById("show").innerHTML = "Sol"
    } 
    else {
        document.getElementById("show").innerHTML = "Lua"
    }
}