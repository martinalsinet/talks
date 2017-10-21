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
                db.run("drop table if exists accidentes");
                db.run(schema_q);
            });
        },
        truncate: function(){
            db.serialize(function() {
                db.run("begin transaction");
                db.run("delete from accidentes");
                db.run("commit");
            });
        },
        rows: function(){
            db.all(
                "select * from accidentes", 
                (err, records) => console.log(records)
            );
        },
        count: function(){
            db.all(
                "select count(1) as rows from accidentes", 
                (err, records) => console.log(records)
            );
        }
    };
};

module.exports = schema;

//const sqlite3 = require('sqlite3').verbose();
//var s = schema(new sqlite3.Database('database.db'));
//s.create();
//s.rows();
//s.count();
