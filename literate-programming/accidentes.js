var accidentes = function(db, query){
    return {
        rows: function(limit, fn){
            db.all(
                query.rows(limit), 
                (err, rows) => fn(rows)
            );
        },
        por_mes: function(fn){
            db.all(
                query.por_mes, 
                (err, rows) => fn(rows)
            );
        },
        por_dia: function(fn){
            db.all(
                query.por_dia, 
                (err, rows) => fn(rows)
            );
        },
        por_hora: function(fn){
            db.all(
                query.por_hora, 
                (err, rows) => fn(rows)
            );
        },
        por_gravedad: function(fn){
            db.all(
                query.por_gravedad, 
                (err, rows) => fn(rows)
            );
        },
        por_barrio: function(fn){
            db.all(
                query.por_barrio, 
                (err, rows) => fn(rows)
            );
        },
        por_comuna: function(fn){
            db.all(
                query.por_comuna, 
                (err, rows) => fn(rows)
            );
        },
        por_comuna_y_barrio: function(fn){
            db.all(
                query.por_comuna_y_barrio, 
                (err, rows) => fn(rows)
            );
        },
        por_diseno: function(fn){
            db.all(
                query.por_diseno, 
                (err, rows) => fn(rows)
            );
        },
    };
}

const q = require('/app/queries.js');
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

var acc = accidentes(db, q.query);

module.exports = acc;

//acc.por_dia(console.log);
acc.rows(1, console.log);
