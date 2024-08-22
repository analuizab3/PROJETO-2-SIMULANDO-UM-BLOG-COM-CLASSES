const Author = require('./Author')

// Criando o autor
const john = new Author('John Wick')

// Criando uma postagem
const post = john.createPost('As crônicas de John Wick', 'lero lero lero lero')

// Criando comentários
post.addComments('juan', 'Eu amo as crônicas dele ai')
post.addComments('Alex', 'Eu odeio as crônicas desse elemento')

console.log(john)
console.log(post)