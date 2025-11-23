var calcular = document.getElementById("calcular");

calcular.addEventListener("click", function() {

    var nome = document.getElementById("nome").value;
    var altura = parseFloat(document.getElementById("altura").value) / 100;
    var peso = parseFloat(document.getElementById("peso").value);
    var resultado = document.getElementById("resultado");

    if (!nome || !altura || !peso) {
        resultado.innerHTML = "<div class='conteiner-resultado'>Preencha todos os campos!</div>";
        return;
    }

    var calculo = peso / (altura * altura);

    if (calculo < 16) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — Baixo peso muito grave</div>`;
    
    } else if (calculo < 17) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — Baixo peso grave</div>`;
    
    } else if (calculo < 18.5) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — Baixo peso</div>`;
    
    } else if (calculo < 25) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — Peso normal</div>`;
    
    } else if (calculo < 30) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — Acima do peso</div>`;
    
    } else if (calculo < 35) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — <div class="alerta"> Obesidade grau I</div></div>`;
    
    } else if (calculo < 40) {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — <div class="alerta"> Obesidade grau II</div></div>`;
    
    } else {
        resultado.innerHTML = `<div class="conteiner-resultado">${nome} possui um IMC ${calculo.toFixed(2)} — <div class="alerta"> Obesidade grau III</div></div>`;
    }

});
