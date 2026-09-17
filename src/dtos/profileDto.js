const { z } = require("zod");

const createProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "O nome é obrigatório")
    .max(100, "O nome deve possuir no máximo 100 caracteres"),

  bio: z
    .string()
    .trim()
    .max(500, "A biografia deve possuir no máximo 500 caracteres")
    .optional(),

  githubUrl: z
    .string()
    .trim()
    .url("Informe uma URL válida para o GitHub"),
});

function profileResponseDto(profile) {
  return {
    id: profile.id,
    name: profile.name,
    bio: profile.bio,
    githubUrl: profile.githubUrl,
    projects: profile.projects || [],
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt,
  };
}

module.exports = {
  createProfileSchema,
  profileResponseDto,
};