const escola = "Cod3r"


//Retornar caracter do indice passado por parametro
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Valor do indice na tabea ASCII
console.log(escola.indexOf('3')) //Qual o indice do valor informado

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat(" !"))
console.log('Escola ' + escola + " !")
console.log(escola.replace(3, 'e')) //Substituir elemento

console.log('Ana,Maria,Pedro'.split(',')) //Sepa as substrings e retorna um array
