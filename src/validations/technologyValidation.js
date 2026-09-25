const yup = require('yup');

const technologySchema = yup.object().shape({
  name: yup.string().required("O nome da tecnologia é obrigatório").max(80),
});

module.exports = { technologySchema };
