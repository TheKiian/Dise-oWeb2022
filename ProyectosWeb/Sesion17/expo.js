
function ejemplo(){
    var miString = "Hola Amigos" 
var result = ""

for (i=0;i<miString.length-1;i++) { 
   	result += miString.charAt(i) 
   	result += "-" 
} 
result += miString.charAt(miString.length - 1)

document.write(result)
}