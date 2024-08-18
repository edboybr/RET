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
    
            resd15 = (somafatura) - (somafatura * 10) / 100
            resdesconto.innerHTML =  ` 10% de desconto = ${resd15.toFixed(2)}`
    
        } else if (desc == 20) {
    
            resd50 = (somafatura) - (somafatura * 20) / 100
            resdesconto.innerHTML =  `20% de desconto = ${resd50.toFixed(2)}`
        }
    
        else if (desc == 30) {
            
            resd70 = (somafatura) - (somafatura * 30) / 100
            resdesconto.innerHTML =  `30% de desconto = ${resd70.toFixed(2)}`
            
        }
    
        else if ( desc == 50 ) {
    
            resd80 = (somafatura) - (somafatura * 50) / 100
            resdesconto.innerHTML =  `50% de desconto = ${resd80.toFixed(2)}`
    
            
        }
    
        else if ( desc == 70 ) {
    
            resd90 = (somafatura) - (somafatura * 70) / 100
            resdesconto.innerHTML =  `70% de desconto = ${resd90.toFixed(2)}`
    
            
        } else {alert("digite 10, 20, 30, 50 ou 70")}
    
    
    
    }
    