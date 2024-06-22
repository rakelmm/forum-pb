export default class User {
    constructor() {
        this.pontos = 0;
    }

    atualizarPontos(acao) {
        switch (acao) {
            case "comentado": 
                this.pontos += 15; break;
            case "curtido": 
                this.pontos += 20; break;
            case "desgostei": 
                this.pontos += 5; break;
            case "responta": 
                this.pontos += 3; break;
        }
        return this.pontos;
    }
}