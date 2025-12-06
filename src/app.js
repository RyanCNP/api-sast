require('dotenv').config();
const express = require('express');
const denunciaRoutes = require('./routes/denuncia.routes');
const setupSwagger = require('./swwager/swwager');

const app = express();
app.use(express.json());

app.use('/denuncias', denunciaRoutes);

// Swagger UI
setupSwagger(app);

// Health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});