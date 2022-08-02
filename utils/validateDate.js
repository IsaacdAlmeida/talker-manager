const validateDate = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!regexDate.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = {
  validateDate,
};

// const regexDate  = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
/* if (watchedAt || watchedAt.length === 0) {
  return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório"' });
} */
// regex retirado do exercício aqui -> https://github.com/IsaacdAlmeida/trybe-exercicios/blob/main/back-end/bloco-22-intro-nodejs/dia-05-middlewares/exercicio/exercicio01/utils/validateDate.js