  function registrarCampo(elemento, descricao) {
    if (elemento.value.trim() !== "") {
      atualizarResumo(`${descricao}: ${elemento.value}`);
    }
  }

  function registrarRadio(nomeGrupo, descricao) {
    let valor = document.querySelector(`input[name="${nomeGrupo}"]:checked`);
    if (valor) {
      atualizarResumo(`${descricao}: ${valor.value}`);
    }
  }

  function atualizarResumo(texto) {
    let area = document.getElementById("resumoSolicitacao");
    if (!area.value.includes(texto)) {
      area.value += texto + "\n";
    }
  }

function somase() {

    f1 = document.querySelector("input#fatura1")
    f2 = document.querySelector("input#fatura2")
    f3 = document.querySelector("input#fatura3")
    f4 = document.querySelector("input#fatura4")
    f5 = document.querySelector("input#fatura5")
    resoma = document.querySelector("div#resultadosoma")
    
    f1_1 = (f1.value)
    f2_1 = (f2.value)
    f3_1 = (f3.value)
    f4_1 = (f4.value)
    f5_1 = (f5.value)
    
    somafatura =  parseFloat(f1_1) + parseFloat(f2_1) + parseFloat(f3_1) + parseFloat(f4_1) + parseFloat(f5_1)
    
    
    
        resoma.innerHTML = `Total = ${somafatura.toFixed(2)}`
    
    }
    
    function descontose() {
    
        des = document.querySelector("input#desconto")
        resdesconto =  document.querySelector("div#resultadodesconto")
        desc = (des.value)
    
        if (desc == 10 ) {
    
            resd15 = (somafatura) - (somafatura * 10) / 100 - 5
            resdesconto.innerHTML =  ` 10% de desconto por X meses = ${resd15.toFixed(2)}`
    
        } else if (desc == 20) {
    
            resd50 = (somafatura) - (somafatura * 20) / 100 - 5
            resdesconto.innerHTML =  `20% de desconto por X meses = ${resd50.toFixed(2)}`
        }
    
        else if (desc == 30) {
            
            resd70 = (somafatura) - (somafatura * 30) / 100 - 5
            resdesconto.innerHTML =  `30% de desconto por X meses = ${resd70.toFixed(2)}`
            
        }
    
        else if ( desc == 50 ) {
    
            resd80 = (somafatura) - (somafatura * 50) / 100 - 5
            resdesconto.innerHTML =  `50% de desconto por X meses = ${resd80.toFixed(2)}`
    
            
        }
    
        else if ( desc == 70 ) {
    
            resd90 = (somafatura) - (somafatura * 70) / 100 - 5
            resdesconto.innerHTML =  `70% de desconto por X meses = ${resd90.toFixed(2)}`
    
            
        } else {alert("digite 10, 20, 30, 50 ou 70")}
    
    
    
    }
    

