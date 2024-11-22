class Mega {
    concurso: number;
    data: string;
    dez1: number;
    dez2: number;
    dez3: number;
    dez4: number;
    dez5: number;
    dez6: number;
    ganhadores: number;
    premio: number;
    apostas: number;
    constructor(
        concurso: number,
        data: string,
        dez1: number,
        dez2: number,
        dez3: number,
        dez4: number,
        dez5: number, 
        dez6: number,
        ganhadores: number,
        premio: number,
        apostas: number){
        this.concurso = concurso;
        this.data = data;
        this.dez1 = dez1;
        this.dez2 = dez2;
        this.dez3 = dez3;
        this.dez4 = dez4;
        this.dez5 = dez5;
        this.dez6 = dez6;
        this.ganhadores = ganhadores;
        this.premio = premio;
        this.apostas = apostas;
    }
}

export default Mega;