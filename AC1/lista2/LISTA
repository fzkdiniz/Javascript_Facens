// 1. Classe Usuario com atributos nome e idade
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Array de objetos Usuario
const usuarios = [
    new Usuario("João", 20),
    new Usuario("Maria", 25),
    new Usuario("Pedro", 30)
];

// Novo array apenas com os nomes dos usuários em letras maiúsculas
const nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log(nomesMaiusculos);

// Função para mostrar números ímpares de 0 a 100
console.log("Números ímpares de 0 a 100:");
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// 2. Filtrar usuários com idade superior a 18 anos
const maioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);
console.log(maioresDeIdade);

// 3. Encontrar o primeiro usuário com idade entre 25 e 30 anos
const usuario25a30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log(usuario25a30);

// 4. Array de números, filtrar pares e mapear para o dobro
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosParesDobro = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2);
console.log(numerosParesDobro);

// 5. Classe Animal com métodos emitirSom e correr, subclasses Cachorro e Gato
class Animal {
    emitirSom() {
        // Método genérico para emitir som
    }

    correr() {
        // Método genérico para correr
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log("Au Au");
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log("Miau");
    }
}

// 6. Classe Livro com atributos titulo e paginas
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

// Array de objetos Livro, filtrar livros com mais de 300 páginas
const livros = [
    new Livro("Livro 1", 200),
    new Livro("Livro 2", 350),
    new Livro("Livro 3", 400)
];

const livrosMais300Paginas = livros.filter(livro => livro.paginas > 300);
console.log(livrosMais300Paginas);

// 7. Classe Carro com atributos marca e ano
class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

// Array de objetos Carro, encontrar primeiro "Toyota" e filtrar carros fabricados após 2010
const carros = [
    new Carro("Toyota", 2015),
    new Carro("Honda", 2008),
    new Carro("Toyota", 2020)
];

const primeiroToyotaApos2010 = carros.find(carro => carro.marca === "Toyota" && carro.ano > 2010);
console.log(primeiroToyotaApos2010);

const carrosToyotaApos2010 = carros.filter(carro => carro.marca === "Toyota" && carro.ano > 2010);
console.log(carrosToyotaApos2010);

// 8. Classe Produto com atributos nome e preco
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// Array de objetos Produto, mapear para novo array com preços aumentados em 10%
const produtos = [
    new Produto("Produto 1", 50),
    new Produto("Produto 2", 100),
    new Produto("Produto 3", 200)
];

const produtosComPrecoAumentado = produtos.map(produto => {
    produto.preco *= 1.1; // Aumenta em 10%
    return produto;
});
console.log(produtosComPrecoAumentado);

// 9. Encontrar primeiro produto com preço superior a R$ 100,00 e alterar nome
const primeiroProdutoCaro = produtos.find(produto => produto.preco > 100);
if (primeiroProdutoCaro) {
    primeiroProdutoCaro.nome = "Produto Caro";
}
console.log(produtos);

// 10. Array de números, filtrar divisíveis por 3 e mapear para o quadrado
const numerosDivisiveisPor3Quadrado = numeros.filter(numero => numero % 3 === 0).map(numero => numero ** 2);
console.log(numerosDivisiveisPor3Quadrado);
