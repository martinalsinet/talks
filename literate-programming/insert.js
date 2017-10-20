var insert_q = `INSERT INTO accidentes (
  id, fecha, dia, clase, gravedad, 
  barrio, comuna, diseno
) VALUES (
  :objectid, ':fecha', ':dia', ':clase', ':gravedad', 
  ':barrio', ':comuna', ':diseno'
)
`;


function query(q, val) {
    return q
        .replace(':objectid', val.objectid)
        .replace(':fecha', val.fecha)
        .replace(':dia', val.dia)
        .replace(':clase', val.clase)
        .replace(':gravedad', val.gravedad)
        .replace(':barrio', val.barrio)
        .replace(':comuna', val.comuna)
        .replace(':diseno', val.diseno)
}


function ampm_to_24h(text)
{
    var hour = parseInt(text.substr(0,2));
    var ampm = text.substr(6,2);
    if ((hour == 12) && (ampm == "AM")) {
        hour = 0;
    }
    if ((hour != 12) && (ampm == "PM")) {
        hour+= 12;
    }
    return ("0"+String(hour)).substr(-2)+":"+text.substr(3,2);
}


function fix_date(row)
{
    row.fecha = row.fecha.substr(0,10) + " " + ampm_to_24h(row.hora);
    return row;
}


function show_r(rows)
{
    rows.map(function(row){
        console.log(row);
        console.log("");
    });
}


function show_q(rows)
{
    rows.map(function(row){
        console.log(query(insert_q, fix_date(row)));
    });
}


function show(rows)
{
    rows.map(function(row){
        console.log(row);
        console.log("");
        console.log(query(insert_q, row));
        console.log(query(insert_q, fix_date(row)));
    });
}

function insert(rows)
{
    db.serialize(function() {
        db.run("begin transaction");
        rows.map(function(row){
            db.run(query(insert_q, fix_date(row)));
        });
        db.run("commit");
        db.all(
            "select * from accidentes LIMIT 5", 
            (err, rows) => console.log(rows)
        );
    });
}


const sqlite3 = require('sqlite3').verbose();
const parser = require("/app/parser.js");
const inputFile = 'Accidentalidad_2016.csv';
var db = new sqlite3.Database('database.db');

//parse_csv(inputFile, show_q, 2);
parse_csv(inputFile, insert, 1);
