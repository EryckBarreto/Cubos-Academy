const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(nomes, tamanhoDoGrupo) {
    let grupoAtual = 1;
    let inicio = 0;
    let fim = tamanhoDoGrupo;
  
    while (inicio < nomes.length) {
      const nomesGrupo = nomes.slice(inicio, fim);
      console.log(`Grupo ${grupoAtual}: ${nomesGrupo.join(', ')}`);
  
      grupoAtual++;
      inicio = fim;
      fim = inicio + tamanhoDoGrupo;
    }
  }

dividirGrupos(nomes, tamanhoDoGrupo);
