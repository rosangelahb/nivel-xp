// Variáveis

let nome = "Tanjiro"; // Substitua pelo nome do herói
let XP = 9001; // Substitua pela quantidade de XP do herói

// Estrutura de decisão para classificar o nível
let nivel;
if (XP <= 1000) {
 nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
 nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
 nivel = "Prata";
} else if (XP >= 5001 && XP <= 6000) {
 nivel = "Aço";
} else if (XP >= 6001 && XP <= 7000) {
 nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
 nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
 nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
 nivel = "Imortal";
} else {
 nivel = "Radiante";
}
// Exibir a mensagem
console.log("O Herói " + nome + " está no nível: " + nivel)