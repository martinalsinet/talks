var schema_q = `CREATE TABLE IF NOT EXISTS accidentes (
      id INTEGER PRIMARY_KEY,
   fecha TEXT,
     dia TEXT,
   clase TEXT,
gravedad TEXT,
  barrio TEXT,
  comuna TEXT,
  diseno TEXT
)`


var schema = function(db) {
    return {
        create: function(){
            db.serialize(function() {
                db.run("DROP TABLE IF EXISTS accidentes");
                db.run(schema_q);
            });
        },
        truncate: function(){
            db.serialize(function() {
                db.run("BEGIN TRANSACTION");
                db.run("DELETE FROM accidentes");
                db.run("COMMIT");
            });
        },
        rows: function(limit){
            db.all(
                "SELECT * FROM accidentes LIMIT " + limit, 
                (err, records) => console.log(records)
            );
        },
        count: function(){
            db.all(
                "SELECT COUNT(1) AS rows FROM accidentes", 
                (err, records) => console.log(records)
            );
        }
    };
};

module.exports = schema;

//const sqlite3 = require('sqlite3').verbose();
//var s = schema(new sqlite3.Database('database.db'));
//s.create();
//s.rows(3);
//s.count();
