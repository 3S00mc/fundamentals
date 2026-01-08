let vitorias = 100;
let derrotas = 0;

function winRate (vitorias, derrotas){
    return vitorias - derrotas
}

function elo (winRate){
    if (winRate < 10 ){
        return "Ferro"
    } else if (winRate >= 10 && winRate <= 20){
        return "Bronze"
    } else if (winRate > 20 && winRate <= 50){
        return "Prata"
    } else if (winRate > 50 && winRate <= 80){
        return "Ouro"
    } else if (winRate > 80 && winRate <= 90){
        return "Diamante"
    } else if (winRate > 90 && winRate <= 100){
        return "Lendario"
    } else if (winRate > 100){
        return "Imortal"
    } else{
        return "Invalid Win Rate"
    }
}

console.log(elo(winRate(vitorias, derrotas)))
