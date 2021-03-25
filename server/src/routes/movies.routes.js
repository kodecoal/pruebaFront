const { Router} = require('express')
const router = Router()

const moviesCtrl = require('../controllers/movies.controller.js')

router.get('/', moviesCtrl.getMovies);
router.post('/', moviesCtrl.createMovie);
router.get('/:id', moviesCtrl.getMovie);
router.put('/:id', moviesCtrl.editMovie);
router.delete('/:id', moviesCtrl.deleteMovie);

module.exports = router