const nome = 'Rebeca'
const concatenacao = 'Olá, '+nome+'!'
const template = `
    Olá,
     ${nome}!`
console.log(template)
//expressões 
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase() //Criando uma função para passar um texto completo para maisculo
console.log(`Ei...${up('Cuidado')}!`)