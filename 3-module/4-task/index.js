/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filterUsers = users.filter(item => item.age <= age);
  newStr = '';
  let result = filterUsers.map((item, index) => {
      if (index == filterUsers.length -1){
          newStr += `${item.name}, ${item.balance}` 
      }
      else {
          console.log(item[index]);
          newStr += `${item.name}, ${item.balance}\n`
      }
  });
  console.log(newStr);
  return newStr;
}
