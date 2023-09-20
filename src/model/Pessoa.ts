


 export class Pessoa {
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;
    




 // metodo construtor
     public constructor (
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number){
            
            
            this.nome= _nome;
            this.cpf= _cpf;
            this.data_nascimento= _data_nascimento;
            this.telefone= _telefone;
            this.endereco= _endereco;
            this.altura= _altura;
            this.peso= _peso;
            }

        public getNome() {
            return this.nome;
        }

        public setNome(_nome: string){
            this.nome = _nome;
        }

        public getCPF() {
            return this.cpf;
        }

        public setCPF(_CPF: string){
            this.nome = _CPF;
        }

        public getDataNascimento() {
            return this.data_nascimento;
        }

        public setDataNascimento(_data_nascimento: string) {
            this.nome = _data_nascimento;
        
        }

        public getTelefone() {
            return this.telefone;
        }
        
        public setTelefone(_telefone: string) {
            this.nome = _telefone;
        }

        public getEndereco() {
            return this.endereco;
        }
        
        public setEndereco(_endereco: string) {
            this.nome = _endereco;
        }
        
        public getAltura() {
            return this.altura;
        }
        
        public setAltura(_altura: string) {
            this.nome = _altura;
        }
        
        public getPeso() {
            return this.cpf;
        }
        
        public setPeso(_peso: string) {
            this.nome = _peso;
        }

        public mostraPessoa() {
            console.log (`Nome: ${this.nome}
                          CPF: ${this.cpf}
                          Data: ${this.data_nascimento}
                          Telefone: ${this.telefone}
                          Endereco: ${this.endereco}
                          Altura: ${this.altura}
                          Peso: ${this.peso}`)
                        }

        
             

        //implementar os métodos
        public falar(): void {
            //lógica de négocio
            console.log(`${this.nome} está falando`);
        }

        public falarFrase(_frase: string): void{
            //lógica de négocio
            console.log(`${this.nome} fala: ${_frase}`);
        }
          
        public andar (): void {
            console.log(`${this.nome} caminhou ${quilometros} quilometros`);
        }

        public andarQuilometros(quilometros: number): void {
            setTimeout(()=> {
                console.log(`${this.nome} está comendo ...`);
            }, 3000);
        }

        public comer(): void {
            console.log(`${this.nome} está comendo ...` );
        }

        public comerPrato(prato: string): void {
            console.log(`${this.nome} está comendo ${prato}`);
          }
        }









