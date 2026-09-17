const { z } = require("zod");
const profileService = require("../services/profileService");
const {
  createProfileSchema,
  profileResponseDto,
} = require("../dtos/profileDto");

async function create(req, res) {
  try {
    const validatedData = createProfileSchema.parse(req.body);

    const profile = await profileService.createProfile(validatedData);

    return res.status(201).json(profileResponseDto(profile));
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

    console.error(error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

async function findById(req, res) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "O ID informado é inválido",
      });
    }

    const profile = await profileService.getProfileById(id);

    if (!profile) {
      return res.status(404).json({
        message: "Perfil não encontrado",
      });
    }

    return res.status(200).json(profileResponseDto(profile));
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erro interno do servidor",
    });
  }
}

module.exports = {
  create,
  findById,
};