const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Denuncia = sequelize.define('Denuncia', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: true },
    criado_em: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'denuncia',
    timestamps: false
  });

  return Denuncia;
};