let listaDeNumerosSorteados = [];   
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;
function exibirTextoNaTela(tag,texto){    
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
}
function exibirMensagemInicial() {
 
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p', `Escolha entre 1 e ${numeroLimite}`);
   //responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa= tentativas>1 ? 'tentativas':'tentativa';
        exibirTextoNaTela('p',`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    
    
    
    }else{
        tentativas++;
        if(chute>numeroSecreto){
            exibirTextoNaTela('p',`O numero secreto é menor do que ${chute}`)
        }else{
            exibirTextoNaTela('p',`O numero secreto é maior do que ${chute}`)
        }
        limpaCampo()
    }
    

}

function gerarNumeroAletorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados=[]
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
    
}
function limpaCampo() {
    chute =document.querySelector('input');
    chute.value='';
}

function reiniciarJogo() {
    numeroSecreto=gerarNumeroAletorio()
    limpaCampo()
    tentativas=1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

