var accidentes = require('/app/src/accidentes.js');

exports.por_mes = function(req, res){
    accidentes.por_mes(rows => res.json(rows));
}

exports.por_dia = function(req, res){
    accidentes.por_dia(rows => res.json(rows));
}

exports.por_hora = function(req, res){
    accidentes.por_hora(rows => res.json(rows));
}

exports.por_gravedad = function(req, res){
    accidentes.por_gravedad(rows => res.json(rows));
}

exports.por_comuna = function(req, res){
    accidentes.por_comuna(rows => res.json(rows));
}

exports.por_barrio = function(req, res){
    accidentes.por_barrio(rows => res.json(rows));
}

exports.por_comuna_y_barrio = function(req, res){
    accidentes.por_comuna_y_barrio(rows => res.json(rows));
}

exports.por_diseno = function(req, res){
    accidentes.por_diseno(rows => res.json(rows));
}
