var query = {
    rows: function(limit){
        return "SELECT * FROM accidentes LIMIT " + limit;
    },

    por_mes: 
` SELECT substr(fecha, 0, 8) AS mes, count(1) AS accidentes 
    FROM accidentes 
GROUP BY substr(fecha, 0, 8)
ORDER BY 1`,

    por_dia: 
` SELECT dia, count(1) AS accidentes 
    FROM accidentes 
GROUP BY dia
ORDER BY 2`,

    por_hora: 
` SELECT substr(fecha, 12, 2) as hora, count(1) AS accidentes 
    FROM accidentes 
GROUP BY substr(fecha, 12, 2)
ORDER BY 1`,

    por_gravedad: 
` SELECT gravedad, count(1) AS accidentes 
    FROM accidentes 
GROUP BY gravedad
ORDER BY 2 DESC`,

    por_comuna: 
` SELECT comuna, count(1) AS accidentes 
    FROM accidentes 
GROUP BY comuna
ORDER BY 2 DESC`,

    por_barrio: 
` SELECT barrio, count(1) AS accidentes 
    FROM accidentes 
GROUP BY barrio
ORDER BY 2 DESC`,

    por_comuna_y_barrio: 
` SELECT comuna, barrio, count(1) AS accidentes 
    FROM accidentes 
GROUP BY comuna, comuna, barrio
ORDER BY 3 DESC`,

    por_diseno:
` SELECT diseno, count(1) AS accidentes 
    FROM accidentes 
GROUP BY diseno
ORDER BY 2 DESC`
};

module.exports = query;

//  const table = require('/app/src/table.js');
//  const sqlite3 = require('sqlite3').verbose();
//  var db = new sqlite3.Database('database.db');
//  db.all(
//         query.por_dia, 
// //        (err, rows) => console.log(rows)
//         (err, rows) => table(rows)
//  );
