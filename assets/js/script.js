/* 
 *Autor: Denis Souza
 *Proibida a cópia sem referencia
 */

 //chama a funcao principal apenas apos carregar todo o documento
 window.onload = init;

 //funcao principal que chama as demais
 function init(){
    navegacao()
 }
 //funcao geral 
 function navegacao(){

    const currentNumberWrapper = document.getElementById("currentValue")
    let currentNumber = document.getElementById("currentValue").innerHTML;
    valor = parseInt(currentNumber)

    document.getElementsByName("somar")[0].addEventListener("click",()=>{
        if(valor <10)
        valor +=1
        currentNumberWrapper.innerHTML = valor
        cor(valor)
    })
    
   document.getElementsByName("subtrair")[0].addEventListener("click",()=>{
        if(valor>-10)
        valor -=1
        currentNumberWrapper.innerHTML = valor
        cor(valor)
    })
 }

 //funcao para mudar a cor
function cor(valor){
   if(valor >=0)
   document.getElementById("currentValue").style.color='blue'
   else
   document.getElementById("currentValue").style.color='red'
}
 