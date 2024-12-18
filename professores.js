const Datatype = require('sequelize');
const sequelize = require('../database/database');

const Professor = sequelize.define(
    'Professor',
    {
        id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome: {
            type: Datatype.STRING(100),
            allowNull: false    
        },
        
        cpf: {
            type: Datatype.STRING(18),
            allowNull: false,
            unique: true 
        },

        data_nascimento: {
            type: Datatype.DATE,
            allowNull: false
        },

        logradouro: {
            type: Datatype.STRING(100),
            allowNull: false
        },

        bairro: {
            type: Datatype.STRING(45),
            allowNull: false
        },

        cidade: {
            type: Datatype.STRING(45),
            allowNull: false
        },

        estado: {
            type: Datatype.STRING(45),
            allowNull: false
        },

        cep: {
            type: Datatype.STRING(9),
            allowNull: false
        },    

        email: {
            type: Datatype.STRING(250),
            allowNull: false
        }
    }, {
        tableName: 'tbl_professor',
        timestamps: false
   
});

module.exports = Professor
