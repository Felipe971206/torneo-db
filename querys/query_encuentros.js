// Obtener todos los partidos
db.encuentros.find({});

// Obtener los partidos en los que participó "Argentina"
db.encuentros.find({ $or: [{ equipo_local: "Argentina" }, { equipo_visitante: "Argentina" }] });

// Obtener los partidos de la fase final
db.encuentros.find({ fase: "Final" });

// Obtener partidos con más de 3 goles en total
db.encuentros.find({
    $expr: {
        $gt: [
            { $add: [{ $toInt: { $arrayElemAt: [{ $split: ["$resultado", "-"] }, 0] } }, { $toInt: { $arrayElemAt: [{ $split: ["$resultado", "-"] }, 1] } }] },
            3
        ]
    }
});
