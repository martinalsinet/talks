module.exports = function(app) {
  var accidentes = require('/app/controller.js');

  app.route('/accidentes/por_mes')
    .get(accidentes.por_mes);

  app.route('/accidentes/por_dia')
    .get(accidentes.por_dia);

  app.route('/accidentes/por_hora')
    .get(accidentes.por_hora);

  app.route('/accidentes/por_gravedad')
    .get(accidentes.por_gravedad);

  app.route('/accidentes/por_comuna')
    .get(accidentes.por_comuna);

  app.route('/accidentes/por_barrio')
    .get(accidentes.por_barrio);

  app.route('/accidentes/por_comuna_y_barrio')
    .get(accidentes.por_comuna_y_barrio);

  app.route('/accidentes/por_diseno')
    .get(accidentes.por_diseno);

};
