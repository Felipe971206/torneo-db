// Obtener todos los equipos
db.equipos.find({});

// Obtener el equipo con más goles a favor
db.tabla_de_posiciones.find({}).sort({ goles_a_favor: -1 }).limit(1);

// Obtener los equipos con diferencia de goles positiva
db.tabla_de_posiciones.find({ diferencia_de_goles: { $gt: 0 } });

// Obtener los equipos que jugaron más de 5 partidos
db.tabla_de_posiciones.find({ partidos_jugados: { $gt: 5 } });
