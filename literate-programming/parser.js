const fs = require('fs');
const parse = require('csv-parse')


function columns(line)
{
    return line.map(s => s.toLowerCase());
}


parse_csv = function(filename, fn, limit){
    fs.readFile(filename, "utf8", function (err, fileData) {
        var opts = {columns: columns, trim: true};
        if (limit) {
            opts.to = limit;
        }
        parse(fileData, opts, (err, rows) => fn(rows));
    });
}

module.exports = parse_csv;
//parse_csv('Accidentalidad_2016.csv', console.log, 2);
