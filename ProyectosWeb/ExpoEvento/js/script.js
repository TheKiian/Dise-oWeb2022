function Mostrar(){
    document.getElementById("imagen").style.display="block"
}
function Ocultar(){
    document.getElementById("imagen").style.display="none"
}
function Mostrar_Ocultar(){
    var imagen = document.getElementById("imagen");
    if(imagen.style.display == "none"){
        Mostrar();
        document.getElementById("boton").value = "Ocultar";
    }else{
        Ocultar();
        document.getElementById("boton").value = "Mostrar";
    }
}