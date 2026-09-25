const projectService = require("../services/projectService");
const { projectSchema } = require("../validations/projectValidation");
const { projectResponseDto } = require("../dtos/projectDto");

async function create(req, res) {
  try {
    const validatedData = await projectSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const project = await projectService.createProject(validatedData);

    return res.status(201).json(projectResponseDto(project));
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Dados inválidos",
        errors: error.errors,
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
    const projects = await projectService.getAllProjects();

    return res.status(200).json(
      projects.map(projectResponseDto)
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