// Obtener la tabla completa de posiciones ordenada por puntos
db.tabla_de_posiciones.find({}).sort({ puntos: -1, diferencia_de_goles: -1 });

// Obtener el equipo con más puntos
db.tabla_de_posiciones.find({}).sort({ puntos: -1 }).limit(1);

// Obtener los equipos con diferencia de goles negativa
db.tabla_de_posiciones.find({ diferencia_de_goles: { $lt: 0 } });

// Obtener los tres mejores equipos
db.tabla_de_posiciones.find({}).sort({ puntos: -1, diferencia_de_goles: -1 }).limit(3);
