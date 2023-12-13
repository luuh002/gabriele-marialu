const button = document.querySelector('.button')
const input = document.querySelector('.input')
const listaCompleta = document.querySelector('.texto-lista')

let minhaLista = []

function AdicionarTarefa() {
    minhaLista.push(input.value)

    input.value = ''
   
    mostrartarefas()

}/*adiciona tarefas*/

function mostrartarefas() {

    let novaLi = ''  

    minhaLista.forEach((item) => {

        novaLi = novaLi + `
        <li class="item"><!--item na lista-->
            
           <img src="img/concluida.png" alt="tarefaconcluida">
           <p>${item}</p>
           <img src="img/remover.png" alt="excluitarefa">
        </li>
        `
    })

listaCompleta.innerHTML = novaLi

}/*mostra os itens adicionados e adiciona na nova li*/

button.addEventListener('click', AdicionarTarefa)