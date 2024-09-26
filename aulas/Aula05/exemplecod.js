const usuario = {nome: 'Igor',idade:29 ,time: 'vitoria'}

const mensagemDeBoasVindas1 = 'Bem vindo , torcedor Tricolor!'
const mensagemDeBoasVindas2 = 'Bem vindo , torcedor Rubro-Negro!'
const mensagemDeBoasVindasF = 'Bem vindo , amante do esporte'

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã !!!';

let cont = 0 ;

do {
usuario.time === 'Flamengo' ? 
    console.log(mensagemDeBoasVindas1) :
    console.log(mensagemDeBoasVindas2);

console.log(mensagemDeEscolha);
console.log(mensagemFinal);

cont++;
} while (cont < 5);

console.log ('Ingresso esgotados');