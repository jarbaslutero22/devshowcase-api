function projectResponseDto(project) {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    repositoryUrl: project.repositoryUrl,
    profileId: project.profileId,
    technologies: project.technologies || [],
    feedbacks: project.feedbacks || [],
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  };
}

module.exports = {
  projectResponseDto,
};