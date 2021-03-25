const movieCtrl = {}
const Movie = require('../models/Movie')

movieCtrl.getMovies = async (req,res) => {
    const movies = await Movie.find()
    res.json(movies)
}
movieCtrl.createMovie = async(req,res) => {
    const newMovie = new Movie(req.body)
    await newMovie.save()
    res.send({message: 'Movie created'})
}
movieCtrl.getMovie = async (req,res) => {
    const movie = await Movie.findById(req.params.id)
    res.send(movie)

}
movieCtrl.editMovie = async(req,res) => {
    await Movie.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Edited movie'})

}
movieCtrl.deleteMovie = async (req,res) => {
    await Movie.findByIdAndDelete(req.params.id)
    res.json({status: 'Movie delected'})

}

module.exports = movieCtrl