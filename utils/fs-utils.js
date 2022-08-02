const fs = require('fs/promises');

const readFile = async () => {
  const fileContent = await fs.readFile('./talker.json', 'utf-8');
  return JSON.parse(fileContent);
};

module.exports = {
  readFile,
};
