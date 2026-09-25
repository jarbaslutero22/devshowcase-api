const prisma = require("../database/prisma");

async function create(data) {
  const { technologyIds, ...projectData } = data;

  return prisma.project.create({
    data: {
      ...projectData,
      technologies: technologyIds?.length
        ? {
            connect: technologyIds.map((id) => ({
              id,
            })),
          }
        : undefined,
    },
    include: {
      profile: true,
      technologies: true,
      feedbacks: true,
    },
  });
}

async function findAll() {
  return prisma.project.findMany({
    include: {
      profile: true,
      technologies: true,
      feedbacks: true,
    },
    orderBy: {
      id: "asc",
    },
  });
}

module.exports = {
  create,
  findAll,
};