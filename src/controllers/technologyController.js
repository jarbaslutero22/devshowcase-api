const { z } = require("zod");
const technologyService = require("../services/technologyService");
const {
  createTechnologySchema,
  technologyResponseDto,
} = require("../dtos/technologyDto");

async function create(req, res) {
  try {
    const validatedData = createTechnologySchema.parse(req.body);

    const technology =
      await technologyService.createTechnology(validatedData);

    return res.status(201).json(technologyResponseDto(technology));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Dados inválidos",
        errors: error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    if (error.statusCode === 409) {
      return res.status(409).json({
        message: error.message,
      });
    }

    console.error(error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

async function findAll(req, res) {
  try {
    const technologies = await technologyService.listTechnologies();

    return res.status(200).json(
      technologies.map(technologyResponseDto)
    );
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

module.exports = {
  create,
  findAll,
};