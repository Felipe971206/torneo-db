// Obtener todos los jugadores destacados
db.jugadores.find({});

// Obtener los jugadores con más de 3 goles
db.jugadores.find({ "estadisticas.goles": { $gt: 3 } });

// Obtener el jugador con más asistencias
db.jugadores.find({}).sort({ "estadisticas.asistencias": -1 }).limit(1);

// Obtener los jugadores que recibieron tarjetas amarillas
db.jugadores.find({ "estadisticas.tarjetas_amarillas": { $gt: 0 } });
