var readlineSync = require('readline-sync')

const banco = []

function pegarDadoObrigatorio(nomeCampo){
    var valor = ''
    while(valor === ''){
        valor = readlineSync.question(`Digite ${nomeCampo}: `)

        if(!valor){
            console.log("valor incorreto")
        }
    }
    return valor
}

function isNameFound(nome){
    const foiEncontrado = banco.some((item)=>{
        return item.nome === nome
    })
    return foiEncontrado
}

// function solicitarDataNascimento(){
//     var data = ''
//     while(data === ''){
//         data = readlineSync.question('\nDigite a data: ')

//         if(!data){
//             console.log("data incorreto")
//         }
//     }
//     return data
// }

function main(){

    var start = true
    
    while(start){
        console.log("\n\n1 - cadastrar um aluno")
        console.log("2 - exibir todos os alunos")
        console.log("3 - desligar")
        
        const opcao = readlineSync.question('\nDigite uma opcao: ')
        
        switch(opcao){
            case '1':
                console.log(" - cadastrar aluno - \n")
                
                const nome = pegarDadoObrigatorio("Nome")
                const nameFound = isNameFound(nome)

                if(nameFound){
                    console.log("Nome de usuario ja existe")
                }else{
                    const dataNascimento = pegarDadoObrigatorio("Data Nascimento")
                    const sexo = readlineSync.question('Digite sexo: ')
    
                    banco.push({id: banco.length + 1 , nome, dataNascimento, sexo})
    
                    console.log(banco)
                    //...
                }
                break
            case '2':
                console.log("\nexibir todos os alunos")

                banco.forEach((item)=>{
                    console.log(`${item.id} - ${item.nome}`)
                })
                break;
            case '3':
                console.log("deligar")
                start = false
                break;
            default:
                console.log("opção incorreta")
                break;
    
        }

    }


}

main()