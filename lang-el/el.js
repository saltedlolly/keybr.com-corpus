import { Language } from "../lib/language.js";

const reAlphabet = /^[αάβγδεέζηήθιίκλμνξοόπρσςτυύφχψωώ]+$/u;
const reVowels = /[αάεέηήιίοόυύωώ]/;

export function testWord_el(word) {
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

export const el = new Language("el", testWord_el);