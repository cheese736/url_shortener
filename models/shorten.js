const number = '0123456789'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const characters = number + uppercase + lowercase

function generateRandomCharacters(num_of_characters) {
  let result = ''
  for (i = 0; i < num_of_characters; i++) {
    result += (characters).charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

module.exports = generateRandomCharacters