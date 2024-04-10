import { Language } from "../lib/language.js";

const reAlphabet = /^[aáâãàbcçdeéêfghiíjklmnoóôõpqrstuúvwxyz]+$/u;
const reVowels = /[AÁÂÃÀEÉÊIÍJOÓÔÕUÚaáâãàeéêiíjoóôõuú]/;

export function testWord_en(word) {
  if (word.length > 20) {
    return false;
  }
  if (!reAlphabet.test(word)) {
    return false;
  }
  if (!reVowels.test(word)) {
    return false;
  }
  return true;
}

export const pt = new Language("pt", testWord_en);
