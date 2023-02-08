const router = require('express').Router();
const { User, Project } = require('../../models');


// renders the logged-in user's projects and a form to create a new project
router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const projects = projectData.map((project) => project.get({ plain: true }));

        res.render('project', { projects });
    } catch (err) {
        res.status(500).json(err);
    }
});