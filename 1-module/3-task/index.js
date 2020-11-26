/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if ( str != '' ){
    const newStr =  str[0].toUpperCase() + str.substr(1);
  return newStr;
} else {
  return '';
  }
}
