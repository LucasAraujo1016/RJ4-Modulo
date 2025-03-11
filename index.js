export class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = []
        this.#cpf = cpf

        Object.defineProperty(this, 'clienteDetalhes', {
            get: function(){                
                let dTelefones = ''
                this.telefones.forEach(function(telefone){
                    dTelefones += telefone.telefoneDetalhes + '\n'
                })

                return 'Nome: ' + this.nome +
                this.endereco.enderecoDetalhes +
                '\n' + dTelefones
            }
        })
    }

    #clienteDetalhesAlto(cDetalhesAlto){
        return cDetalhesAlto.toUpperCase()
    }

    mostrarCDetalhesAlto(){
        let telefoneDetalhesAlto = ''
        this.telefones.forEach(telefone => {
            telefoneDetalhesAlto += this.#clienteDetalhesAlto(telefone.telefoneDetalhes) + '\n'
        })

        return 'Nome: ' + this.#clienteDetalhesAlto(this.nome) +
        this.#clienteDetalhesAlto(this.endereco.enderecoDetalhes) +
        '\n' + this.#clienteDetalhesAlto(this.telefones.telefoneDetalhes)    
    }

    #clienteDetalhesBaixo(cDetalhesBaixo){
        return cDetalhesBaixo.toLowerCase()
    }

    mostrarCDetalhesBaixo(){
        let telefoneDetalhesBaixo = ''
        this.telefones.forEach(telefone => {
            telefoneDetalhesBaixo += this.#clienteDetalhesBaixo(telefone.telefoneDetalhes) + '\n'
        })

        return 'Nome: ' + this.#clienteDetalhesBaixo(this.nome) +
        this.#clienteDetalhesBaixo(this.endereco.enderecoDetalhes) +
        '\n' + this.#clienteDetalhesBaixo(this.telefones.telefoneDetalhes)    
    }

    get pegarCpf (){
        return this.#cpf
    }

}

export class Telefone {
    constructor(DDD, numero){
        this.DDD = DDD
        this.numero = numero

        Object.defineProperty(this, 'telefoneDetalhes', {
            get: function(){
                return 'DDD: ' + this.DDD + ' Número: ' + this.numero
            }
        })
    }

    #telefoneDetalhesAlto(tDetahesAlto){
        return tDetahesAlto.toUpperCase()
    }

    mostrarTDetalhesAlto(){
        return 'DDD: ' + this.#telefoneDetalhesAlto(this.DDD) + 'Número: ' + this.#telefoneDetalhesAlto(this.numero)
    }

    #telefoneDetalhesBaixo(tDetahesBaixo){
        return tDetahesBaixo.toLowerCase()
    }

    mostrarTDetalhesBaixo(){
        return 'DDD: ' + this.#telefoneDetalhesBaixo(this.DDD) + 'Número: ' + this.#telefoneDetalhesBaixo(this.numero)
    }
}

export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        Object.defineProperty(this, 'enderecoDetalhes', {
            get: function(){
                return '\nEstado: ' + this.estado +
                ' Cidade: ' + this.cidade +
                ' Rua: ' + this.rua + 
                ' Número: ' + this.numero
            }
        })
    }

    #enderecoDetalhesAlto(eDetalhesAlto){
        return eDetalhesAlto.toUpperCase()
    }

    mostrarEDetalhesAlto(){
        return 'Estado: ' + this.#enderecoDetalhesAlto(this.estado) +
        'Cidade: ' + this.#enderecoDetalhesAlto(this.cidade) +
        'Rua: ' + this.#enderecoDetalhesAlto(this.rua) + 
        'Número: ' + this.#enderecoDetalhesAlto(this.numero)
    }

    #enderecoDetalhesBaixo(eDetalhesBaixo){
        return eDetalhesBaixo.toLowerCase()
    }

    mostrarEDetalhesBaixo(){
        return 'Estado: ' + this.#enderecoDetalhesBaixo(this.estado) +
        'Cidade: ' + this.#enderecoDetalhesBaixo(this.cidade) +
        'Rua: ' + this.#enderecoDetalhesBaixo(this.rua) + 
        'Número: ' + this.#enderecoDetalhesBaixo(this.numero)
    }
}

export class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = []
        this.telefones = []

        Object.defineProperty(this, 'empresaDetalhes', {
            get: function(){
                let dTelefones = ''
                this.telefones.forEach(function(telefone){
                    dTelefones += telefone.telefoneDetalhes + '\n'
                })

                let dClientes = ''
                this.clientes.forEach(function(cliente){
                    dClientes += cliente.clienteDetalhes + '\n'
                })
                
                return 'Razão social: ' + this.razaoSocial +
                '\nNome Fantasia: ' + this.nomeFantasia +
                '\n' + dTelefones +
                '--------------\n' + dClientes 
            }
        })
    }

    #empresaDetalhesAlto(emDetalhesAlto){
        return emDetalhesAlto.toUpperCase()
    }

    mostrarEmDetalhesAlto(){
        let tDetalhesAlto = ''
        this.telefones.forEach(function(telefone){
            tDetalhesAlto += this.#empresaDetalhesAlto(telefone.telefoneDetalhes) + '\n'
        }, this) 
    
        let cDetalhesAlto = ''
        this.clientes.forEach(function(cliente){
            cDetalhesAlto += this.#empresaDetalhesAlto(cliente.clienteDetalhes) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#empresaDetalhesAlto(this.razaoSocial) +
        '\nNome Fantasia: ' + this.#empresaDetalhesAlto(this.nomeFantasia) +
        this.#empresaDetalhesAlto(this.endereco.enderecoDetalhes) +
        '\n' + tDetalhesAlto + 
        '--------------\n' + cDetalhesAlto;
    }

    #empresaDetalhesBaixo(emDetalhesBaixo){
        return emDetalhesBaixo.toLowerCase()
    }

    mostrarEmDetalhesBaixo(){
        let tDetalhesBaixo = ''
        this.telefones.forEach(function(telefone){
            tDetalhesBaixo += this.#empresaDetalhesBaixo(telefone.telefoneDetalhes) + '\n'
        }, this)
    
        let cDetalhesBaixo = ''
        this.clientes.forEach(function(cliente){
            cDetalhesBaixo += this.#empresaDetalhesBaixo(cliente.clienteDetalhes) + '\n'
        }, this)
    
        return 'Razão social: ' + this.#empresaDetalhesBaixo(this.razaoSocial) +
        '\nNome Fantasia: ' + this.#empresaDetalhesBaixo(this.nomeFantasia) +
        this.#empresaDetalhesBaixo(this.endereco.enderecoDetalhes) +
        '\n' + tDetalhesBaixo + 
        '--------------\n' + cDetalhesBaixo;
    }   
}