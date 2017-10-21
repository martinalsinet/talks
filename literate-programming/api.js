var accidentes = require("/app/accidentes.js");
var view_as_table = require("/app/queries.js").table;

accidentes.por_dia(view_as_table);
