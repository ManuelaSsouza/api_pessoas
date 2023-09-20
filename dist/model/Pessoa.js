"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    // metodo construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCPF() {
        return this.cpf;
    }
    setCPF(_CPF) {
        this.nome = _CPF;
    }
    getDataNascimento() {
        return this.data_nascimento;
    }
    setDataNascimento(_data_nascimento) {
        this.nome = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.nome = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.nome = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.nome = _altura;
    }
    getPeso() {
        return this.cpf;
    }
    setPeso(_peso) {
        this.nome = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                          CPF: ${this.cpf}
                          Data: ${this.data_nascimento}
                          Telefone: ${this.telefone}
                          Endereco: ${this.endereco}
                          Altura: ${this.altura}
                          Peso: ${this.peso}`);
    }
    //implementar os métodos
    falar() {
        //lógica de négocio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de négocio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} caminhou ${quilometros} quilometros`);
    }
    andarQuilometros(quilometros) {
        setTimeout(() => {
            console.log(`${this.nome} está comendo ...`);
        }, 3000);
    }
    comer() {
        console.log(`${this.nome} está comendo ...`);
    }
    comerPrato(prato) {
        console.log(`${this.nome} está comendo ${prato}`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map