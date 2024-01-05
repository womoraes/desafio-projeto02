//Desafio Felipão Bootcamp iFood Programação do Zero
//Utilização do readline-sync para solicitar ao usuário a entrada de dados: nome, idade e tipo de heroi.
let readLine = require('readline-sync');

let name = readLine.question('Qual o seu nome?  ');

if (!name){
    console.warn('Desculpe, você precisa se identificar primeiramente. ');
    return;
}

let age = readLine.questionInt('Qual a sua idade?  ');

if (age < 18){
    console.warn('Desculpe, apenas maiores de 18 anos podem duelar! Chame um adulto.');
    return;
}
const array = ['mago','guerreiro','monge','ninja'];
let type = readLine.question('Qual o tipo?  [mago, guerreiro, monge, ninja]:  ');

if (array.includes(type)) {
  console.log(`${name} é um herói do tipo ${type}, e tem ${age} anos.`);
} else {
  console.log('Favor escolher um tipo da lista.');
  return;
}

//Classe heroi com condicional para escolha do poder conforme tipo de heroi informado anteriormente.
class Heroi{

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    ataque = "";

    atacar(){

        if (this.type === "mago") {
            this.ataque = "magia";
        
        } else if (this.type === "guerreiro") {
            this.ataque = "espada";

        } else if (this.type === "monge") {
            this.ataque = "artes marciais";

        } else if (this.type === "ninja") {
            this.ataque = "shuriken";
        }
        console.log(`O ${this.type} atacou usando ${this.ataque}`)
    }
    
}    
    // Saída - criação do novo heroi mediante chamada do método "atacar".
    let novoHeroi = new Heroi(name, age, type);
    novoHeroi.atacar();