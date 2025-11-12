/**
 * Събира две числа и връща резултата.
 * @param {number} a - Първото число.
 * @param {number} b - Второто число.
 * @returns {number} Сборът от двете числа.
 */
function sum(a, b) {
  return a + b;
}

/**
 * Проверява дали дадено число е четно.
 * @param {number} n - Числото за проверка.
 * @returns {boolean|null} Връща true ако е четно, false ако е нечетно, null при невалиден вход.
 */
function isEven(n) {
  if (typeof n !== 'number') return null;
  return n % 2 === 0;
}

/**
 * Изчислява средното аритметично на масив от числа.
 * @param {number[]} numbers - Масив от числа.
 * @returns {number|null} Средно аритметично или null, ако входът е невалиден.
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  if (numbers.some(n => typeof n !== 'number')) return null;
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

/**
 * Проверява дали даден низ е валиден имейл адрес.
 * @param {string} email - Имейл за проверка.
 * @returns {boolean|null} true ако е валиден, false ако не е, null при невалиден тип.
 */
function validateEmail(email) {
  if (typeof email !== 'string') return null;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Форматира име и фамилия с главна буква.
 * @param {{first: string, last: string}} person - Обект с име и фамилия.
 * @returns {string|null} Форматираното име (пример: "Ivan Petrov") или null при невалиден вход.
 */
function formatName(person) {
  if (!person || typeof person.first !== 'string' || typeof person.last !== 'string') return null;
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return `${cap(person.first)} ${cap(person.last)}`;
}

module.exports = { sum, isEven, average, validateEmail, formatName };
