const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 0f11a03d780d0eb3c3c8d0c3cbcffe85f169699f
