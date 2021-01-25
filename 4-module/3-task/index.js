/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let i = 1; i < table.rows.length; i++){
         let row = table.rows[i];
            row.cells[1].innerHTML < 18 ? row.style.textDecoration = 'line-through' : '' ;
            row.cells[2].innerHTML == 'm' ? row.classList.add('male') : row.classList.add('female');
            if (row.cells[3].dataset.available) {
            row.cells[3].dataset.available == 'true' ? row.classList.add('available') : row.classList.add('unavailable');
        } else {
            row.setAttribute('hidden', 'true');
        }
    }
}