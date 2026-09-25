const technologyRepository = require("../repositories/technologyRepository");

async function createTechnology(data) {
  const existingTechnology =
    await technologyRepository.findTechnologyByName(data.name);

  if (existingTechnology) {
    const error = new Error("Tecnologia já cadastrada");
    error.statusCode = 409;
    throw error;
  }

  return technologyRepository.createTechnology(data);
}

async function listTechnologies() {
  return technologyRepository.findAllTechnologies();
}

module.exports = {
  createTechnology,
  listTechnologies
};
