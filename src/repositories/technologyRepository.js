const prisma = require("../database/prisma");

async function createTechnology(data) {
  return prisma.technology.create({
    data
  });
}

async function findAllTechnologies() {
  return prisma.technology.findMany({
    orderBy: {
      name: "asc"
    }
  });
}

async function findTechnologyByName(name) {
  return prisma.technology.findUnique({
    where: {
      name
    }
  });
}

module.exports = {
  createTechnology,
  findAllTechnologies,
  findTechnologyByName
};
