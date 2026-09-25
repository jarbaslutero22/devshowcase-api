const yup = require('yup');

const profileSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório").max(100),
  bio: yup.string().max(500).nullable(),
  githubUrl: yup.string().url("URL do GitHub inválida").required("O GitHub é obrigatório"),
});

module.exports = { profileSchema };
