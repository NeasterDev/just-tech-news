const router = require('express').Router();

<<<<<<< HEAD
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
=======
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;
>>>>>>> 0f11a03d780d0eb3c3c8d0c3cbcffe85f169699f
