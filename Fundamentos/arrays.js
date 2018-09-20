const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0],valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3},false, null, 'teste') //Inserir dados no array
console.log(valores)

console.log(valores.pop()) //Apaga o ultimo elemento do array e imprimi ele depois
delete valores[0] // Apaga uma posição do array
console.log(valores)

console.log(typeof valores)