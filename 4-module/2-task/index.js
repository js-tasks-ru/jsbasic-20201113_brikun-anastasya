/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    for (let i = 0; i < table.rows.length; i++){
        for (let j = 0; j < table.rows[i].cells.length; j++){
            if (i == j) {
                let item = table.rows[i].cells[j];
                item.style.backgroundColor = 'red';
            }
        }
    }
}
