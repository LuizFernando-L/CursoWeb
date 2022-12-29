const escola = 'coder'

console.log(escola.charAt(4)) //Retorna a posição 4 da string passada em escola
console.log(escola.charCodeAt(3)) //Mostra o código da letra
console.log(escola.indexOf('e')) // Retorna a posição da letra na string 
console.log(escola.substring(1)) // Mostra a sequência de string da posição 1 em diante 
console.log(escola.substring(0, 3)) // Mostra a sequência de string do 0 ao 3 sem mostrar o indice 3
console.log('Escolar'.concat(escola).concat('!')) // Junta uma string a uma frase
console.log(escola.replace(4, '3'))
console.log('Ana, Maria, Pedro'.split(','))