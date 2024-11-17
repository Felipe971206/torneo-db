// Obtener todos los árbitros
db.arbitros.find({});

// Obtener partidos arbitrados por "Wilmar Roldán"
db.arbitros.aggregate([
    { $match: { nombre: "Wilmar Roldán" } },
    { $unwind: "$partidos_dirigidos" },
    { $project: { partido: "$partidos_dirigidos" } }
]);

// Contar cuántos partidos arbitró cada árbitro
db.arbitros.aggregate([
    { $project: { nombre: 1, total_partidos: { $size: "$partidos_dirigidos" } } }
]);

// Obtener árbitros con más de 3 partidos arbitrados
db.arbitros.aggregate([
    { $project: { nombre: 1, total_partidos: { $size: "$partidos_dirigidos" } } },
    { $match: { total_partidos: { $gt: 3 } } }
]);
