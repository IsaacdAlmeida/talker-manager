const express = require('express');
const bodyParser = require('body-parser');
const { readFile, createTalker } = require('./utils/fs-utils');
const { generateToken } = require('./utils/tokenGenerator');
const { validateEmail } = require('./utils/validateEmail');
const { validatePassword } = require('./utils/validatePassword');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_ERROR = 500;
const PORT = '3000';

app.get('/talker', async (_req, res) => {
  const talkerArray = await readFile();  
  return res.status(HTTP_OK_STATUS).json(talkerArray);
});

app.get('/talker/:id', async (req, res) => {
  try {
    const talkerArray = await readFile(); 
    const { id } = req.params;
    const talker = talkerArray.find((item) => item.id === Number(id));

    if (!talker) {
      return res.status(HTTP_NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
    }

    return res.status(HTTP_OK_STATUS).json(talker);
  } catch (error) {
    return res.status(HTTP_INTERNAL_ERROR).end();
  }
});

app.post('/login', validateEmail, validatePassword, (_req, res) => {
  const newToken = generateToken();

  res.status(HTTP_OK_STATUS).json({ token: newToken });
});

app.post('/talker', async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const talkerArray = await readFile();
  const newTalker = { name, age, talk: { watchedAt, rate } };

  talkerArray.push(newTalker);
  await createTalker(talkerArray);
  return res.status(HTTP_CREATED_STATUS).json({ newTalker });
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
