let valorJogador 

const rockButton = document.getElementById('pedra')
const paperButton = document.getElementById('papel')
const scissorButton = document.getElementById('tesoura')

let pontosJogador = 0
let pontosMaquina = 0
let empate = 0

rockButton.addEventListener('click', function() {
    valorJogador = document.getElementById('pedra').value
    startGame()
})
    
paperButton.addEventListener('click', function() {
    valorJogador = document.getElementById('papel').value
    startGame()
})

scissorButton.addEventListener('click', function() {
    valorJogador = document.getElementById('tesoura').value
    startGame()
})

function valorMaquina () {
    let maquina = Math.floor((Math.random() * 3) + 1)
    
    if (maquina === 1){
        return "pedra"
     } else if (maquina === 2) {
        return "papel"
     } else {
         return "tesoura"
     }

}

function result(player, machine) {
    const showResult = document.querySelector('.boxResult')
    const result = document.querySelector('.result')
    result.innerHTML = ""

    if (player === machine){
        empate++
        result.innerHTML = "O jogo empatou"
        showResult.appendChild(result)
    } else if (player === 'pedra' && machine === 'papel') {
        pontosMaquina++
        result.innerHTML = "Não foi dessa vez"
        showResult.appendChild(result)
    } else if (player === 'pedra' && machine === 'tesoura') {
        pontosJogador++
        result.innerHTML = "Você ganhou"
        showResult.appendChild(result)
    } else if (player === 'papel' && machine === 'pedra') {
        pontosJogador++
        result.innerHTML = "Você ganhou"
        showResult.appendChild(result)
    } else if (player === 'papel' && machine === 'tesoura') {
        pontosMaquina++
        result.innerHTML = "Não foi dessa vez"
        showResult.appendChild(result)
    } else if (player === 'tesoura' && machine === 'pedra') {
        pontosMaquina++
        result.innerHTML = "Não foi dessa vez"
        showResult.appendChild(result)
    } else if (player === 'tesoura' && machine === 'papel') {
        pontosJogador++
        result.innerHTML = "Você ganhou"
        showResult.appendChild(result)       
    }

}

function startGame() {
    
   const maquina = valorMaquina()
   
   result(valorJogador, maquina)

   const divEmJogo = document.querySelector('.emJogo')
   const divPlacar = document.querySelector('.placar')
   const escolhaMaquina = document.querySelector('.maquina')
   const escolhaJogador = document.querySelector('.escolha')
   const playerScore = document.querySelector('.placarJogador')
   const machineScroe = document.querySelector('.placarMaquina')
    const teste = document.createElement('p')
   
   const divSumir = document.querySelector('.botoes')
    divSumir.classList.add('takeOff')


   escolhaMaquina.innerHTML = maquina
   escolhaJogador.innerHTML = valorJogador
   playerScore.innerHTML = pontosJogador
   machineScroe.innerHTML = pontosMaquina
   
   
   divEmJogo.appendChild(escolhaMaquina)
   divEmJogo.appendChild(escolhaJogador)

   divPlacar.appendChild(machineScroe)
   divPlacar.appendChild(playerScore)
   playerScore.appendChild(teste)
  
   
        setTimeout(function () {
        const jogarDnv = document.createElement('button')
        const showResult = document.querySelector('.boxResult')
        const result = document.querySelector('.result')
        jogarDnv.classList.add('finalButton')
        result.innerHTML = ""
        showResult.appendChild(result)
        divEmJogo.innerHTML = "";
        
        jogarDnv.innerHTML = "Jogar Novamente"
        divEmJogo.appendChild(jogarDnv)

        if (pontosJogador > 0 || pontosMaquina > 0) {
            const resetar = document.createElement('button')
            resetar.classList.add('finalButton')
            resetar.innerHTML = "reset"
            divEmJogo.appendChild(resetar)
            resetar.addEventListener('click', reset)
        }

          jogarDnv.addEventListener('click', inicio)
          }, 2000)

}

function reset () {
    const divPlacar = document.querySelector('.placar')
    const playerScore = document.querySelector('.placarJogador')
    const machineScroe = document.querySelector('.placarMaquina')
    
    pontosMaquina = 0
    pontosJogador = 0

   playerScore.innerHTML = pontosJogador
   machineScroe.innerHTML = pontosMaquina

   divPlacar.appendChild(machineScroe)
   divPlacar.appendChild(playerScore)
    inicio()
}

function inicio() {
    const divEmJogo = document.querySelector('.emJogo')
    divEmJogo.innerHTML = "";

    let divSumir = document.querySelector('.botoes')
    divSumir.classList.remove('takeOff')

    const paragrafo = document.createElement('p')
    const paragrafo2 = document.createElement('p')

    const paragrafo3 = document.createElement('p')
    const paragrafo4 = document.createElement('p')

    paragrafo3.innerHTML = "Máquina"
    paragrafo4.innerHTML = "Jogador"

    paragrafo.className = 'maquina'
    paragrafo2.className = 'escolha'

    divEmJogo.appendChild(paragrafo3)
    divEmJogo.appendChild(paragrafo4)
    divEmJogo.appendChild(paragrafo2)
    divEmJogo.appendChild(paragrafo)
}


