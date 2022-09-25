let add_table_th = document.createElement('th');
add_table_th.setAttribute('class', 'flex_over_time');
add_table_th.innerHTML = overtimeHour + '.' + overtimeMin;

let parent_tr = document.querySelector('thead > tr');
parent_tr.appendChild(add_table_th);

// let add_tag_td = document.createElement('td');
// add_tag_td.setAttribute('rowspan', '2', 'class', 'flex_over_time');
// add_tag_td.innerHTML = '<p>jikan</p>';

// let parent_td = document.querySelectorAll('table.specific-table-800 > tr');
// console.log(parent_td);
// parent_td[0].append(add_tag_td);`