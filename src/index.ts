console.clear();
console.log("Bem-vindo ao meu joguinho!");

let vida = 10;

function turno() {
  vida--;
  console.log(`Sua vida agora é: ${vida}`);
  if (vida > 0) setTimeout(turno, 1000);
}

turno();
