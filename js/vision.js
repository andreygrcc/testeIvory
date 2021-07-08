function resolverCampoMinado(campoMinado) {
    const tabuleiro = campoMinado.Tabuleiro().split("\r\n");
    //while (campoMinado.JogoStatus() === 0) {
    procurarBomba(tabuleiro);
    //}
  }
  
  function procurarBomba(tabuleiro) {
    const INIT = 0;
    const END = 9;
    for (let index = 0; index < tabuleiro.length; index++) {
      const linha = tabuleiro[index].split("");
      let coluna = findNumberInArray(coluna, 0);
      if (coluna) {
        const entorno = getEntorno(tabuleiro, index, coluna);
        const numeroPosicao = linha[coluna];
        const numeroDeCampos = getQuantidadeCampoVazio(entorno);
        if (numeroPosicao >= numeroDeCampos) {
        }
      }
    }
  }
  
  function getQuantidadeCampoVazio(entorno) {
    let numeroCampos = 0;
    entorno.forEach((campo) => {
      if (campo == "-") {
        numeroCampos++;
      }
    });
    return numeroCampos;
  }
  
  function findNumberInArray(array, posicao) {
    if (array.length == posicao) {
      return false;
    } else {
      if (array[posicao] > 0) {
        return posicao;
      } else {
        return findNumberInArray(array, posicao + 1);
      }
    }
  }
  
  function getEntorno(tabuleiro, linhaAtual, colunaAtual) {
    let entorno = [];
    for (let linha = linhaAtual - 1; linha <= linhaAtual + 1; linha++) {
      for (let coluna = colunaAtual - 1; coluna <= colunaAtual + 1; coluna++) {
        entorno.push(getPosicao(tabuleiro, linha, coluna));
      }
    }
    return entorno;
  }
  
  function getPosicao(tabuleiro, linha, coluna) {
    return tabuleiro[linha]?.[coluna] || 0;
  }