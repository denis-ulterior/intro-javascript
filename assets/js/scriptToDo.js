/* 
 *Autor: Denis Souza
 *Proibida a cópia sem referencia
 */

//chama a funcao principal apenas apos carregar todo o documento
window.onload = init;

//funcao principal que chama as demais
function init() {
   navegacao()
}
//funcao geral 
function navegacao() {
   //seleciona o botao
   const inputBtn = document.getElementById("botao")

   //adiciona o observador ao botao e executa a arrow function
   inputBtn.addEventListener("click", () => {
      let inputValue = document.getElementById("entrada").value
      //console.log(inputValue)
      adicionarTarefa(inputValue)
      document.getElementById("entrada").value = ''
   })

   function checkBox() {
      //console.log('aqui')
      let checkedBoxes = document.getElementsByName('tarefa');
      //console.log(checkedBoxes)
      for (let c of checkedBoxes) {
         if (c.checked == true) {
            //console.log(c.checked)
            c.parentElement.classList.add("marcado")
         } else {
            //console.log(c.checked)
            c.parentElement.classList.remove("marcado")
         }
      }
   }

   function adicionarTarefa(tarefa) {
      const node = document.getElementById('tarefas')
      const subNode = document.createElement('div')
      subNode.className = 'tarefa'
      const inputNode = document.createElement('input')
      inputNode.type = 'checkbox'
      inputNode.id = tarefa
      inputNode.name = 'tarefa'
      node.appendChild(subNode)
      subNode.appendChild(inputNode)
      subNode.innerHTML += "&nbsp" + tarefa
      document.getElementById(tarefa).addEventListener('change', checkBox)
   }
}
