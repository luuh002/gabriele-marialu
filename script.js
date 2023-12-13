const button = document.querySelector('.button')
const input = document.querySelector('.input')
const listaCompleta = document.querySelector('.texto-lista')

let minhaLista = []

function AdicionarTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false,
      })


    input.value = ''
   
    mostrartarefas()

}/*adiciona tarefas*/

function mostrartarefas() {

    let novaLi = ''  

    minhaLista.forEach((item , posição) => {

        novaLi = novaLi + `
        <li class="item ${item.concluida && "done"}"><!--item na lista-->
            
           <img src="img/concluida.png" alt="tarefaconcluida" onclick="concluido(${posição})">
           <p>${item.tarefa}</p>
           <img src="img/remover.png" alt="excluitarefa" onclick="deletarItem(${posição})">
        </li>
        `
    })

listaCompleta.innerHTML = novaLi

localStorage.setItem('lista', JSON.stringify(minhaLista))

}/*mostra os itens adicionados e adiciona na nova li*/

function deletarItem(posição){
    minhaLista.splice(posição, 1) //deleta
 
    mostrartarefas()
}

function concluido(posição){
    minhaLista[posição].concluida = !minhaLista[posição].concluida  //inverte o valor (F fica V, e vice versa)
    mostrartarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage){
    minhaLista = JSON.parse(tarefasLocalStorage)
    }

    mostrartarefas()
}

recarregarTarefas()

button.addEventListener('click', AdicionarTarefa)