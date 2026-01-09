let nome
let idade
let tipo = ["mago", "guerreiro", "monge", "ninja"]

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: "bola de fogo",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "chidori"
        }

        const ataque = ataques[this.tipo]

        console.log(`O ${this.nome} atacou usando ${ataque}`)
    }
}

const magic = new Hero("Merlin", 800, "mago")
const fighter = new Hero("Tryndamere", 100, "guerreiro")
const monk = new Hero("Mim", 80, "monge")
const ninja = new Hero("Kakashi", 100, "ninja")

magic.atacar()
fighter.atacar()
monk.atacar()
ninja.atacar()