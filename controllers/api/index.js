const router = require('express').Router();
const withAuth = require('../utils/auth');
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/profile', withAuth, profileRoutes);

module.exports = router;
