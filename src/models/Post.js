
class Post {
    constructor(preco) {
        this.preco = preco;
    }

    calcularDesconto() {
        return this.preco * 0.9;
    }
}

export default Post;