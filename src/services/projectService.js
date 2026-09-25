const projectRepository = require("../repositories/projectRepository");

async function createProject(data) {
  return projectRepository.create(data);
}

async function getAllProjects() {
  return projectRepository.findAll();
}

module.exports = {
  createProject,
  getAllProjects,
};