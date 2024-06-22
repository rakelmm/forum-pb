import { assert, expect } from "chai";
import { describe } from "mocha";
import Post from "../models/Post.js";

export default Post;

describe("Test da Classe Post", () => {
    it("Deve retornar 90 para um preço de 100", () => {
        //arrumação
        const post = new Post(100);
        const expected = 90;

        //Ação
        const valorComDesconto = post.calcularDesconto();

        // Averiguação if (valorDeDesconto == 90)
        assert.equal(valorComDesconto, expected);
    });
})