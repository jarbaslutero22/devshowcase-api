const { z } = require("zod");

const createTechnologySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "O nome da tecnologia é obrigatório")
});

function technologyResponseDto(technology) {
  return {
    id: technology.id,
    name: technology.name
  };
}

module.exports = {
  createTechnologySchema,
  technologyResponseDto
};
