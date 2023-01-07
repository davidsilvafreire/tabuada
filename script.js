//clean code - tabuada

function tabuada(){
    let digitar_number = document.getElementById('caixa_number')
    let caixa_tabuada = document.getElementById('tabuada')

    if (digitar_number.value.length == 0){
        window.alert('Por favor, digite um número abaixo!')
    } else {
        let number_digitado = Number(digitar_number.value)
        let contador = 1
        caixa_tabuada.innerHTML = '' 
        while (contador <= 10) {
            let opcao = document.createElement('option') 
            opcao.text = `${number_digitado} x ${contador} = ${number_digitado*contador}`
           // opcao.value = `tabuada${contador}`
            caixa_tabuada.appendChild(opcao)
            contador++          
        }
    }
}

function Limpar_tabuada(){ 
   
}