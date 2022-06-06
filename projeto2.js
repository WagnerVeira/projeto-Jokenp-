const prompt = require('prompt-sync') ();



/*O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.
E para esse projeto você deve desenvolver um programa capaz de:
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.
Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).
Requisitos
Para esse projeto, os requisitos fundamentais serão:
Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
Decidir de forma aleatória a decisão do computador;
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
Para hoje
O projeto é extenso, e temos muito o que fazer! Mas vamos começar por partes. Para hoje seus objetivos são:
Criar uma lista com os elementos a serem escolhidos;
Criar as variáveis que receberão as escolhas do usuário e do computador (prompt para o usuário, e aleatório para o computador);
Fazer a validação da entrada do usuário (o programa só deve aceitar o que foi definido por você como entradas válidas);
Exibir o elemento da lista correspondente à escolha de cada um;
Comparar os elementos e exibir quem foi o vencedor dessa rodada. */

//TEM QUE COLOCAR 2 ARRAYS UM PARA PEDRA... E ARRAYS MAQUINA!!!

console.clear();
const jokenpo = ["pedra", "papel", "tesoura"];
let rodadas = 0;
let cont;
let vitoriasjogador = 0;
let vitoriaspc = 0;
let empate = 0;
let opção = "";
let computador = "";
console.log("Seja bem - vindo!!");
console.log(" JokenPô");
while (true) {
  rodadas = +prompt("Quantas rodadas deseja jogar?");
  vitoriasjogador = 0;
  vitoriaspc = 0;
  empate = 0;
  for (i = 0; i < rodadas; i++) {
    opção = prompt("Pedra, Papel ou Tesoura?").toLocaleLowerCase();
    escolha = Math.floor(Math.random() * 3);
    computador = jokenpo[escolha];
    while (opção != "pedra" && opção != "tesoura" && opção != "papel") {
      console.log("Opção inválida, digite novamente: ");
      opção = prompt("Pedra, Papel ou Tesoura?").toLocaleLowerCase();
    }
    if (opção == "pedra" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "pedra" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "pedra" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém venceu!");
      empate++;
    } else if (opção == "papel" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "papel" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "papel" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém Venceu!");
      empate++;
    } else if (opção == "tesoura" && computador == "pedra") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Computador Venceu!");
      vitoriaspc++;
    } else if (opção == "tesoura" && computador == "papel") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Jogador Venceu!");
      vitoriasjogador++;
    } else if (opção == "tesoura" && computador == "tesoura") {
      console.log(`O jogador escolheu ${opção} e o computador ${computador}`);
      console.log("Ninguém Venceu!");
      empate++;
    }
  }
  console.log(
    `O jogador venceu: ${vitoriasjogador} rodadas e o Computador venceu: ${vitoriaspc} rodadas`
  );
  console.log(`E ${empate} rodadas empatadas`);
  if (vitoriasjogador > vitoriaspc) {
    console.log(`O Campeão é Jogador, com ${vitoriasjogador} vitórias.`);
  } else if (vitoriasjogador == vitoriaspc) {
    console.log(`Ninguém venceu!Empate!!`);
  } else {
    console.log(`O Campeão é o computador, com ${vitoriaspc} vitórias.`);
  }
  cont = prompt("Deseja continuar? [S/N]: ").toLowerCase();
  if (cont == "n") {
    break;
  }
}