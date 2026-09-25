const yup = require('yup');

const projectSchema = yup.object().shape({
  title: yup.string().required("O título é obrigatório").max(120),
  description: yup.string().required("A descrição é obrigatória").max(1000),
  repositoryUrl: yup.string().url("URL do repositório inválida").required("A URL do repositório é obrigatória"),
  profileId: yup.number().required("O profileId é obrigatório").integer(),
  technologyIds: yup.array().of(yup.number().integer()).nullable(),
});

module.exports = { projectSchema };
