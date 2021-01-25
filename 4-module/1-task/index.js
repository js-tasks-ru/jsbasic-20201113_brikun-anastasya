/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let ul = document.createElement("ul");
    friends.forEach((item) => {
      return ul.innerHTML += `<li> ${item.firstName} ${item.lastName} </li>`;
    });
       return ul;
  
}
