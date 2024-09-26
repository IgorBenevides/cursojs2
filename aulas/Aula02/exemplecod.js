const usuario = {nome: 'Igor',idade:29 ,time: 'Flamengo'}

const mensagemDeBoasVindas1 = 'Bem vindo , torcedor Tricolor!'
const mensagemDeBoasVindas2 = 'Bem vindo , torcedor Rubro-Negro!'
const mensagemDeBoasVindasF = 'Bem vindo , amante do esporte'


if (usuario.time === 'Fluminense') {

console.log(mensagemDeBoasVindas1);
}

else if (usuario.time === 'Flamengo'){

console.log(mensagemDeBoasVindas2);
}

else {
    console.log(mensagemDeBoasVindasF)
}

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã !!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);
