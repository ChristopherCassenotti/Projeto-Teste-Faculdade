const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const jogoRoutes = require('./routes/jogoRoutes');
const generoRoutes = require('./routes/generoRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/jogos', jogoRoutes);
app.use('/generos', generoRoutes);

module.exports = app;
