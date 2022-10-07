let resultado = document.getElementById('Resultado');
let valor_salvo = null;
let operador_salvo = null;

let btnNumeros = document.getElementsByClassName('botao-numero')
for (let botao of btnNumeros){
    botao.addEventListener('click', clica_numero);
}

function clica_numero(event){
    if(isNaN(resultado.innerHTML) === false){
        resultado.innerHTML = resultado.innerHTML + event.target.innerHTML;
}

else{
    resultado.innerHTML = event.target.innerHTML;
}}

let btnOperadores = document.getElementsByClassName('botao-operador');
for(let botao of btnOperadores){
    botao.addEventListener("click", clica_operador);
}

function clica_operador(event) {
    if (isNaN(resultado.innerHTML) === false){
        if(valor_salvo === null){
            valor_salvo = Number(resultado.innerHTML);
        }
        else{
            valor_salvo = executa_operacao(valor_salvo, operador_salvo, Number(resultado.innerHTML));
        }
    
}

operador_salvo = event.target.innerHTML;
resultado.innerHTML = event.target.innerHTML;
}

let botaoC = document.getElementById('botao-c');
botaoC.addEventListener("click", limpa_resultado);
function limpa_resultado(event){
    resultado.innerHTML = "";
    valor_salvo = null;
    operador_salvo = null;
}

let botaoIgual = document.getElementById('botao-igual');
botaoIgual.addEventListener('click', calcula_resultado);

function calcula_resultado (event){
    if(valor_salvo != null && operador_salvo != null && isNaN(visor.innerHTML) === false){(valor_salvo, operador_salvo, Number(visor.innerHTML));
    valor_salvo = null;
    operador_salvo = null;
}}

function executa_operacao(valor1, operador, valor2){
    if(operador === '+'){
        return valor1 + valor2;
    }
    else if (operador === '-'){
        return valor1 - valor2;
    }
    else if (operador === '*'){
        return valor1 * valor2;
    }
    else if (operador === '/'){
        return valor1 / valor2;
    }
}

let body = document.getElementsByTagName('body')[0];

body.addEventListener('keydown', pressionou_tecla);

function pressionou_tecla(event){
    if(event.key === "*"){
        document.getElementById('botao-multiplicacao').click();
    }
}

