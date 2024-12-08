/** MANIPULAÇÃO DE DATAS EM JAVASCRIPT */

// comando base para pegar a data
let data = new Date();
console.log(data);

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log("ano: " + ano);

//PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
console.log("mes: " + mes);

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let mesEcrito = mesesDoAno[data.getMonth()]
console.log("mesEcrito: " + mesEcrito);

//PEGAR DIA DO MÊS 1 ATÉ 31
let diaMes = data.getDate();
console.log("diaMes: " + diaMes);

// PEGAR O DIA DA SEMANA
let diaSemana = data.getDay();
console.log("diaSemana: " + diaSemana);

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log("diaSemanaEscrito: "+ diaSemanaEscrito);

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log("hora: " + hora);

// PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log("minutos: " + minutos);

// PEGAR OS SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log("segundos: " + segundos);

// PEGAR OS MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log("milisegundos: " + milisegundos);

// PEGAR A DATA NO PADÃO BRASILEIRO - DIA / MES / ANO . dateStyle o timeStyleu
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log("dataBR: " + dataBR);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();

function addZero(x){
    return x < 10 ? '0' + x : '' + x
};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log("dataPadraoBR: " + dataPadraoBR);

// COMPARAR DATAS - MAIOR OU MENOS. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2024, 11, 1);

if (hoje > vencimento){
    console.log("Sua consta está vencida!");
}else{
    console.log("Ainda não venceu, tudo certo!");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log("diferencaDias: " + diferencaDias + " dias");