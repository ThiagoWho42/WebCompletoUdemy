const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1,peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 8.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

//tofixed defini a quantidade de casa depois da virgula que sera mostrada
console.log(media.toFixed(3))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)