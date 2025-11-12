/**
 * Връща произведението на две числа.
 * @param {number} a - Първото число.
 * @param {number} b - Второто число.
 * @returns {number} Произведението на двете числа.
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  return a * b;
}

/**
 * Намира най-голямото число в масив.
 * @param {number[]} arr - Масив от числа.
 * @returns {number|null} Най-голямото число или null при празен/невалиден масив.
 */
function getMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  if (arr.some(x => typeof x !== 'number')) return null;
  return Math.max(...arr);
}

/**
 * Превръща текст в slug (малки букви, без специални символи, интервали → '-').
 * @param {string} str - Входният текст.
 * @returns {string} Преобразуваният slug.
 * @example
 * slugify("Hello World!") // "hello-world"
 */
function slugify(str) {
  if (typeof str !== 'string') return null;
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // премахва специални символи
    .replace(/\s+/g, '-'); // заменя интервали с '-'
}

/**
 * Връща низа в обратен ред.
 * @param {string} str - Входният текст.
 * @returns {string|null} Текстът в обратен ред.
 * @example
 * reverseString("abc") // "cba"
 */
function reverseString(str) {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
}

/**
 * Брои гласните (a, e, i, o, u) в даден текст.
 * @param {string} str - Входният текст.
 * @returns {number|null} Броят на гласните или null при невалиден вход.
 * @example
 * countVowels("hello") // 2
 */
function countVowels(str) {
  if (typeof str !== 'string') return null;
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = { multiply, getMax, slugify, reverseString, countVowels };
