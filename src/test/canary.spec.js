import { assert } from "chai";
import { describe, it } from "mocha";

describe(
    "Canary Test.", () => {
        //Suite de testes/ Conjunto de testes
        it("Deve retornar true para o paramentro true.", () => {
            assert.isTrue(true);
        });
        it("Deve retornar 1 para o pamentro 1.", () => {
            assert.equal(1, 1);
        });
        //it();
    }
);