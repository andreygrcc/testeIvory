function resolverCampoMinado(){
    const tabuleiro = campoMinado.tabuleiro().split('\r\n');
    while(campoMinado.JogoStatus() === 0){
        procurarBomba(tabuleiro);
    }
}

function procurarBomba(tabuleiro){
    tabuleiro.findIndex('-')
}