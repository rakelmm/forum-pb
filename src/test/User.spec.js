import { assert, expect } from "chai";
import User from "../models/User.js"

describe("Testes da Classe User", function() {
    it("Deve indicar 15 pontos para um comentário feito", function() {
        
        const user = new User();
        let expect = 15;

        const pontos = user.atualizarPontos("comentado");

        assert.equal(pontos, expect);
    });

    it("Deve indicar 30 pontos para doi comentários feitos.", function(){
        const user = new User();
        let expect = 30;

        user.atualizarPontos("comentado");
        user.atualizarPontos("comentado");

        const pontos = user.pontos;

        assert.equal(pontos, expect);
    });

    it("Deve indicar 20 pontos para um post curtido.", () => {
        const user = new User();
        let expect = 20;

        user.atualizarPontos("curtido");
        const pontos = user.pontos;

        assert.equal(pontos, expect);
    });

    it("Deve indicar 5 pontos para um desgostei", () => {
        const user = new User();
        let expect = 5;

        user.atualizarPontos("desgostei");
        const pontos = user.pontos;

        assert.equal(pontos, expect);
    });

    it("Deve indicar 3 pontos para uma responta.", () => {
        const user = new User();
        let expect = 3;

        user.atualizarPontos("responta");
        const pontos = user.pontos;

        assert.equal(pontos, expect);
    })
});