import fs from "fs";
import Mega from "./models/Mega";

const mega = Array<Mega>(); // cria um array de objetos da classe Mega vazio

var x: number = 0; // variável necessária para pular a primeira linha de cabeçalho do arquivo CSV

const data = fs.readFileSync('./src/Megasena.csv',
    { encoding: 'utf8', flag: 'r' }).toString().split("\r\n"); // lê e fecha o arquivo CSV da Megasena, 
// colocando os dados na variável data linha a linha

data.forEach(linha => { // faz a leitura de cada linha da variável data
    if (x > 0) { // só processa se não for a primeira linha
        var l = linha.split(';'); // quebra a linha nos pontos-e-vírgula gerando um array com cada campo/coluna
        //        console.log(l);
        const m = new Mega(
            parseInt(l[0]),
            new Date(l[1]),
            parseInt(l[2]),
            parseInt(l[3]),
            parseInt(l[4]),
            parseInt(l[5]),
            parseInt(l[6]),
            parseInt(l[7]),
            parseInt(l[8]),
            parseFloat(l[9]),
            parseInt(l[10])); // instancia um objeto do Modelo a ser usado
        mega.push(m); // adiciona o objeto m ao array de objetos mega
    }
    x++; // incrementa a varíavel de controle de linha
}); // fecha mega.forEach

//console.log(mega.length);
//console.log(x);

var dezenas: number[][] = [];

for (x = 0; x < 60; x++) {
    dezenas[x] = [];
    dezenas[x].push(x+1);
    dezenas[x].push(0)
}

mega.forEach(m => { // faz a leitura de cada objeto Mega do array mega colocando-o em m
    //    console.log("Concurso:", m.concurso);
    dezenas[m.dez1 - 1][1]++;
    dezenas[m.dez2 - 1][1]++;
    dezenas[m.dez3 - 1][1]++;
    dezenas[m.dez4 - 1][1]++;
    dezenas[m.dez5 - 1][1]++;
    dezenas[m.dez6 - 1][1]++;
}); // fecha mega.forEach

dezenas.sort(sort_columnWise);

// Callback function to sort array according to the third column.
// If callback function will return 1, sort() method swap the row, Otherwise not.
function sort_columnWise(
    firstRow: Array<number>,
    secondRow: Array<number>
): number {
    if (firstRow[1] === secondRow[1]) {
        return 0;
    } else {
        if (firstRow[1] > secondRow[1]) {
            return -1;
        }

        return 1;
    }
}

var y = 0;
var ant = dezenas[0][0];

for (x = 0; x < 60; x++) {
    console.log("Dezena", dezenas[x][0] , ":", dezenas[x][1]);
    if(ant != dezenas[x][0]){
        y++;
    }
    if(y==6){
        break;
    }
}