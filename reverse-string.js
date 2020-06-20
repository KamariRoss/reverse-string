//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (word) => {
  let newWord = ""
  for (let index = word.length - 1; index >= 0; index--) {
    newWord += word[index]
  }
  return newWord
}
