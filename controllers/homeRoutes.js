const router = require('express').Router();
const { User, Project } = require('../../models');

// / homepage route renders a list of all projects from the database
router.get('/', async (req, res) => {
    try {
       const userData = await User.findAll({
        include: [
            {
                model: Project,
                attributes: ['name', 'description', 'needed_funding'],
            },
        ],
       });
       const data = userData.map((user) => user.get({ plain: true }))
       res.render('homepage', {data});
    } catch (err) {
        res.status(500).json(err);
    }
}) 

module.exports = router;