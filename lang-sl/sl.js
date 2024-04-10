import { Language } from "../lib/language.js";

const reAlphabet = /^[abcčdefghijklmnoprsštuvzž]+$/u;
const reVowels = /[AEIJOUaeijou]/;

export function testWord_sl(word) {
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

export const sl = new Language("sl", testWord_sl);