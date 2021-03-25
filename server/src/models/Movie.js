const {Schema, model} = require ("mongoose");

const movieSchema = new Schema(
    {
        titulo: { type: String, required: true},
        calificacion: { type: Number, required: true},
        pais: { type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("Movie", movieSchema);