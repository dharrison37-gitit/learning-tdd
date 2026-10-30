const UPPERCASE_START = 65;
const LOWERCASE_START = 97;
const ALPHABET_LENGTH = 26;
const LETTER_PATTERN = /[a-zA-Z]/;

const caesarCipher = (string, shift) => {
  let result = "";

  shift = shift % ALPHABET_LENGTH;

  for (const character of string) {
    if (!LETTER_PATTERN.test(character)) {
      result += character;
      continue;
    }

    const startCode = character === character.toUpperCase() ? UPPERCASE_START : LOWERCASE_START;

    const shiftedCode =
      ((((character.charCodeAt(0) - startCode + shift) % ALPHABET_LENGTH) + ALPHABET_LENGTH) %
        ALPHABET_LENGTH) +
      startCode;

    result += String.fromCharCode(shiftedCode);
  }

  return result;
};

export default caesarCipher;
