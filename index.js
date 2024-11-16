class Hero{
constructor(nome, idade, tipo, ataque = ""){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo

    switch (this.tipo) {
        case "Mago":
            this.ataque = "Magia"
            break;
    
        case "Monge":
            this.ataque = "Artes Marciais"
            break;
        case "Ninja":
            this.ataque = "Shuriken"
            break;
        case "Guerreiro":
            this.ataque = "Espada"
            break;
    
        default:
            break;
    }
}
atacar(){
    
    console.log(`O ${this.tipo} atacou usando ${this.ataque} `)
}

}


let nomeHeroi = "Juninho do Gás"
let idadeHeroi = 65
let tipoHeroi = "Ninja"

let nossoJunin = new Hero(nomeHeroi, idadeHeroi, tipoHeroi)


let nomeHeroi2 = "Ronaldinho Gaucho"
let idadeHeroi2 = 50
let tipoHeroi2 = "Mago"

let nossoBruxao = new Hero(nomeHeroi2, idadeHeroi2, tipoHeroi2)

nossoJunin.atacar()
nossoBruxao.atacar()

