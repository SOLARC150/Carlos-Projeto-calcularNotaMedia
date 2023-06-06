const form = document.getElementById('form')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const spanAprovado = '<span id="resultado" class="aprovado">Aprovado</span>';
const spanReprovado = '<span id="resultado" class="reprovado">Reprovado</span>';

const atividades = [];
const notas = [];

let notaMinima = prompt("Digite a nota mínima");

let linhas = '';

form.addEventListener ('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert("Essa atividade já foi adicionada");
    }else {
        atividades.push(inputNomeAtividade.value);
        notas.push(inputNotaAtividade.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha;

        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    
    let mediaFinal = calcularMedia();

    document.getElementById('media').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calcularMedia (){
    let somaDasNotas = 0;
    for(var i = 0; i < notas.length; i++){
        somaDasNotas+=parseFloat(notas[i]);
    }

    return somaDasNotas / notas.length;
}