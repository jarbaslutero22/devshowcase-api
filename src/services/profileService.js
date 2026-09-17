const profileRepository = require("../repositories/profileRepository");

async function createProfile(data) {
  return profileRepository.create(data);
}

async function getProfileById(id) {
  return profileRepository.findById(id);
}

module.exports = {
  createProfile,
  getProfileById,
};