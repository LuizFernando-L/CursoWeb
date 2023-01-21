function TratarErroElancar(erro){
    // throw new Error ('...')
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }catch (e){
        TratarErroElancar(e)
    }finally{
        console.log('final')
    }
}
const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)