export default (age) => {
  const birthYear = new Date().getFullYear() - age // Подсчитываем год рождения

  return birthYear
}
