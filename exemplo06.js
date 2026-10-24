import dados from "./dados/alunos.json" with { type: "json" };

let nome = dados[1].nome;
let turma = dados[1].turma;

//console.log(dados);
console.log(`${nome} - ${turma}`);
