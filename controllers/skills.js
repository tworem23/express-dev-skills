const Skill = require('../models/skill')

module.exports = {
    index,
    new: newSkill,
    create,
    show,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'New Skill'})
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function deleteSkill(req,res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
  }