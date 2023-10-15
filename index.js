let nomeHeroi = "Rocket";
let xp = 7099;
let nivel = "ferro"

if (xp <= 1000) {
    nivel = "ferro"
} else if (xp <= 2000){
    nivel = "bronze"
} else if (xp <= 5000){
    nivel = "prata"
} else if (xp <= 7000){
    nivel = "ouro"         /*entre 5001 e 6000 existe uma lacuna na pontuação no desafio que foi considerada como ouro*/
} else if (xp <= 8000){
    nivel = "platina"
} else if (xp <= 9000){
    nivel = "ascendente"
} else if (xp <= 10000){
    nivel = "imortal"
} else if (xp >= 10001){
    nivel = "radiante"
}

console.log("O Herói " + nomeHeroi + " está no nível de " + nivel)
 
