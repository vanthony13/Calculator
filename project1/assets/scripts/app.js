const resultadoDefeito = 0;
const valorDefeito = 0;
let resultadoCorrent = valorDefeito;
let descCalculo = '';
let registoEntradas = [];

// resultadoCorrent = resultadoCorrent + 10 * 3;
// let descriCalculo = `(${valorDefeito} + 10) * 3 / 2 - 1`
// function adicionar(num1, num2){
//     const result = num1 + num2;
//     return result;
// }

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function criarEmostrarOutput(operador, resultadoAntesCalc, numCalculado){
    const descriCalculo = `${resultadoAntesCalc} ${operador} ${numCalculado}`
    outputResult(resultadoCorrent, descriCalculo);
}
function adicionar(){
    // resultadoCorrent = resultadoCorrent + parseInt(userInput.value);
    const valorDigitado = getUserNumberInput();
    const resultIni = resultadoCorrent;
    // const descriCalculo = `${resultadoCorrent} + ${valorDigitado}`;
    resultadoCorrent += valorDigitado;
    // outputResult(resultadoCorrent, descriCalculo);
    criarEmostrarOutput('+', resultIni, valorDigitado);


const entrada = {
    oper : 'ADD',
    resultadoAnt : resultIni,
    numero: valorDigitado,
    resultado : resultadoCorrent

};

registoEntradas.push(entrada);

console.log(registoEntradas);

}

// resultadoCorrent = adicionar(102,23);
// outputResult(resultadoCorrent,descCalculo);


function subtrair(){
    // resultadoCorrent = resultadoCorrent + parseInt(userInput.value);
    const valorDigitado = getUserNumberInput();
    const resultIni = resultadoCorrent;
    resultadoCorrent += valorDigitado;
    criarEmostrarOutput('-', resultIni, valorDigitado);

}


function multiplicar(){
    // resultadoCorrent = resultadoCorrent + parseInt(userInput.value);
    const valorDigitado = getUserNumberInput();
    const descriCalculo = `${resultadoCorrent} * ${valorDigitado}`;
    resultadoCorrent = resultadoCorrent * valorDigitado;
    outputResult(resultadoCorrent, descriCalculo);

}

function dividir(){
    // resultadoCorrent = resultadoCorrent + parseInt(userInput.value);
    const valorDigitado = getUserNumberInput();
    const descriCalculo = `${resultadoCorrent} / ${valorDigitado}`;
    resultadoCorrent = resultadoCorrent / valorDigitado;
    outputResult(resultadoCorrent, descriCalculo);

}

addBtn.addEventListener('click', adicionar);
subtractBtn.addEventListener('click', subtrair);
multiplyBtn.addEventListener('click', multiplicar);
divideBtn.addEventListener('click', dividir);

