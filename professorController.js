const express = require('express');
const router = express.Router();
const Professor = require('../model/professores');

router.get(
    '/projeto-escolar/professor', async (req, res) =>  {
        try {
            const professores = await Professor.findAll();
            res.json({
            Message: "Listado com Sucesso!",
            Data: professores,
            Referencia: 1,
            Params: '200'
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar professores", details: error.message });
    }
});
            

router.post(
    '/projeto-escolar/professor', async (req, res) => {
    const novoProfessor = await Professor.create(req.body);
    res.status(201).json({
        Message: "Novo Professor cadastrado com Sucesso!",
        Referencia: 1,
        Params: '200'
        });
});

router.put('/projeto-escolar/professor/:id', async (req, res) => {
    const professor = await Professor.findByPk(req.params.id);
    if (professor) {
        await professor.update(req.body);
        res.json(professor);
    } else {
        res.status(404).json({ error: 'Professor não encontrado' });
    }
});


router.delete('/projeto-escolar/professor/:id', async (req, res) => {
    const professor = await Professor.findByPk(req.params.id);
    if (professor) {
        await professor.destroy();
        res.json({ message: 'Professor deletado com sucesso' });
    } else {
        res.status(404).json({ error: 'Professor não encontrado' });
    }
});

router.get('/projeto-escolar/professor/:id', async (req, res) => {
    const professor = await Professor.findByPk(req.params.id);
    if (professor) {
        res.json(professor);
    } else {
        res.status(404).json({ error: 'Professor não encontrado' });
    }
});

module.exports = router;