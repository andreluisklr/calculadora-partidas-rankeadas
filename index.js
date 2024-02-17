let vitoriasJogador = 25;
let derrotasJogador = 5;
let nivel = '';

function calcularRank(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

const saldoVitorias = calcularRank(vitoriasJogador, derrotasJogador);
if(saldoVitorias <= 10) nivel = 'Ferro';
if(saldoVitorias >= 11 && saldoVitorias <= 20) nivel = 'Bronze';
if(saldoVitorias >= 21 && saldoVitorias <= 50) nivel = 'Prata';
if(saldoVitorias >= 51 && saldoVitorias <= 80) nivel = 'Ouro';
if(saldoVitorias >= 81 && saldoVitorias <= 90) nivel = 'Diamante';
if(saldoVitorias >= 91 && saldoVitorias <= 100) nivel = 'Lendário';
if(saldoVitorias >= 101) nivel = 'Imortal';

console.log('O Herói tem de saldo de ' + saldoVitorias + ' está no nível de ' + nivel);