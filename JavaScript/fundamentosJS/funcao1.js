//Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(1, 2)

//Função com retorno
function Soma(a, b=0){
    return a + b
}
console.log(Soma(2, 3))