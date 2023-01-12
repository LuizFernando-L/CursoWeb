//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Fala'
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor 

const cliente = {
    nome: 'Pedro', 
    idade: 32, 
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}