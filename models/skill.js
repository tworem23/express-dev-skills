const skills = [
    {id: 345, skill: 'JavaScript', level: 10},
    {id: 346, skill: 'HTML', level: 10},
    {id: 347, skill: 'CSS', level: 10} 
]

module.exports ={
    getAll, 
    create,
    getOne,
    deleteOne
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 100;
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  