function calcularSaldo(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function determinarNivel(vitorias) {
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    return nivel;
}

let vitorias = parseInt(prompt("Digite a quantidade de vitórias de seu personagem: "));
let derrotas = parseInt(prompt("Agora, digite a quantidade de derrotas de seu personagem: "));

let saldo = calcularSaldo(vitorias, derrotas);
let nivel = determinarNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);