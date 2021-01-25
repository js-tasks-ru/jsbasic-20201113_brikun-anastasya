/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let words = str.split('-');
  let newWords =[];
  newWords.push(words[0]);

  for (let i = 1; i < words.length; i++){
      let newWord = words[i].substr(0,1).toUpperCase() + words[i].substr(1);
      newWords.push(newWord);
  }
  
  
  
  
  let newStr = newWords.join('');
  return newStr;
}
