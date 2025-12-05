const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const DenunciaModel = require('../models/denuncia.model')(sequelize);

module.exports = {
  async create(req, res) {
    try {
      const d = await DenunciaModel.create(req.body);
      return res.status(201).json(d);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao criar denúncia' });
    }
  },

  async list(req, res) {
    try {
      const items = await DenunciaModel.findAll();
      return res.json(items);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao listar' });
    }
  },

  async get(req, res) {
    try {
      const id = req.params.id;
      const item = await DenunciaModel.findByPk(id);
      if (!item) return res.status(404).json({ error: 'Não encontrado' });
      return res.json(item);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro' });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const [updated] = await DenunciaModel.update(req.body, { where: { id } });
      if (!updated) return res.status(404).json({ error: 'Não encontrado' });
      return res.json({ message: 'Atualizado' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro' });
    }
  },

  async remove(req, res) {
    try {
      const id = req.params.id;
      const deleted = await DenunciaModel.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: 'Não encontrado' });
      return res.json({ message: 'Removido' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro' });
    }
  }
};