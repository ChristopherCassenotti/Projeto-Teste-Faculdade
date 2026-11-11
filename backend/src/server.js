require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Erro ao conectar no banco:', err.message));
