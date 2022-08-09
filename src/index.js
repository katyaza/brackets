module.exports = function check(str, bracketsConfig) {
  let openBracket = [];
  let closeBracket = [];
  let result = [];
  let brackets = bracketsConfig.flat()
  console.log(brackets)

  let arr = []
  arr = str.split('')
  for (let i = 0; i < brackets.length; i++) {
    if (i % 2 == 0) {
      openBracket.push(brackets[i])
    }
  }
  for (let i = 0; i<brackets.length; i++) {
    if (i % 2 == 0) {
      openBracket.push(brackets[i])
    } else {
      closeBracket.push(brackets[i])
    }
  }
  for (let i = 0; i<arr.length; i++) {
    let lastBracket = result[result.length - 1];
    if (openBracket.indexOf(lastBracket)===closeBracket.indexOf(arr[i])&&closeBracket.includes(arr[i])) {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
   if (result.length==0) {
     return true;
   } else {
     return false;
   }
}
