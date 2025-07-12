import getBirthYear from 'hexlet';

console.log('Сколько вам лет?')
const age = 18 // Каким-то способом получаем возраст пользователя, через терминал. Сейчас не важно как
const birthYear = getBirthYear(age)
console.log(`Ваш год рождения: ${birthYear}`)
