const sqlite3 = require('sqlite3').verbose();

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


var setup = function(db) {
    return {
        schema: function(){
            db.run("drop table if exists accidentes");
            db.run(schema_q);
        },
        truncate: function(){
            db.run("delete from accidentes");
        },
        star: function(){
            db.all(
                "select * from accidentes", 
                (err, rows) => console.log(rows)
            );
        },
        count: function(){
            db.all(
                "select count(1) as rows from accidentes", 
                (err, rows) => console.log(rows)
            );
        }
    };
};

module.exports = setup;

//s = setup(new sqlite3.Database('database.db'));
//s.schema();
//s.count();
