function table_row(cells){
    console.log("|" + cells.join("|") + "|");
}


function table(rows){
    console.log("|---|");
    table_row(Object.keys(rows[0]));
    console.log("|---|");
    rows.map(row => table_row(Object.keys(row).map(k => row[k])));
    console.log("|---|");
}

module.exports = table;
